#!/usr/bin/env node

/**
 * VibeShip Product Validation Script
 * Validates product.json files against the schema.
 *
 * Usage:
 *   node scripts/validate.js                # validate all products
 *   node scripts/validate.js <product-id>   # validate a single product
 *   node scripts/validate.js a b c          # validate specific products
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

const PRODUCTS_DIR = path.join(__dirname, '..', 'products');

// Valid categories
const VALID_CATEGORIES = [
  'AI工具',
  '效率工具',
  '开发框架',
  'Chrome扩展',
  '移动应用',
  'SaaS',
  '内容创作',
  '教育学习',
  '设计工具',
  '数据分析',
  '开源项目',
  '其他'
];

// Required fields
const REQUIRED_FIELDS = [
  'name',
  'tagline',
  'description',
  'category',
  'tags',
  'screenshots',
  'contact',
  'author'
];

// Required contact methods
const REQUIRED_CONTACT_METHODS = ['github', 'twitter', 'email'];

let hasErrors = false;

function isValidHttpUrl(url) {
  if (typeof url !== 'string') return false;
  const trimmed = url.trim();
  if (!trimmed) return false;

  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch (error) {
    return false;
  }
}

function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

function isSafePathSegment(segment) {
  if (typeof segment !== 'string') return false;
  return /^[a-zA-Z0-9._-]+$/.test(segment.trim());
}

async function resolveProductDirs(targetDirs) {
  const allEntries = await glob('*', { cwd: PRODUCTS_DIR });
  const allDirs = allEntries.filter((entry) => {
    const entryPath = path.join(PRODUCTS_DIR, entry);
    try {
      return fs.statSync(entryPath).isDirectory();
    } catch (error) {
      return false;
    }
  });

  if (targetDirs.length === 0) {
    return allDirs;
  }

  const uniqueTargets = [...new Set(targetDirs)];
  const missingTargets = uniqueTargets.filter((dir) => !allDirs.includes(dir));

  if (missingTargets.length > 0) {
    missingTargets.forEach((dir) => {
      console.error(`❌ ${dir}: product directory not found`);
    });
    process.exit(1);
  }

  return uniqueTargets;
}

function validateProduct(productId, product) {
  const errors = [];
  const allowedScreenshotExt = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg', '.avif']);

  if (!isSafePathSegment(productId)) {
    errors.push('Product directory name must match [a-zA-Z0-9._-]+');
  }

  // Check required fields
  for (const field of REQUIRED_FIELDS) {
    if (!product[field]) {
      errors.push(`Missing required field: ${field}`);
    }
  }

  // Check name length
  if (product.name && product.name.length > 100) {
    errors.push('Name must be less than 100 characters');
  }

  // Check tagline length
  if (product.tagline && product.tagline.length > 50) {
    errors.push('Tagline must be less than 50 characters');
  }

  // Check category
  if (product.category && !VALID_CATEGORIES.includes(product.category)) {
    errors.push(`Invalid category: ${product.category}. Must be one of: ${VALID_CATEGORIES.join(', ')}`);
  }

  // Check tags
  if (product.tags && !Array.isArray(product.tags)) {
    errors.push('Tags must be an array');
  } else if (product.tags && product.tags.length === 0) {
    errors.push('At least one tag is required');
  }

  // Check screenshots
  if (product.screenshots && !Array.isArray(product.screenshots)) {
    errors.push('Screenshots must be an array');
  } else if (product.screenshots && product.screenshots.length === 0) {
    errors.push('At least one screenshot is required');
  } else if (product.screenshots) {
    product.screenshots.forEach((screenshot, index) => {
      if (typeof screenshot !== 'string' || !isSafePathSegment(screenshot)) {
        errors.push(`Screenshot ${index + 1} must be a file name without path separators`);
        return;
      }
      const ext = path.extname(screenshot).toLowerCase();
      if (!allowedScreenshotExt.has(ext)) {
        errors.push(`Screenshot ${index + 1} has unsupported extension: ${ext || '(none)'}`);
      }
    });
  }

  // Check contact
  if (product.contact) {
    const hasContact = REQUIRED_CONTACT_METHODS.some(method => product.contact[method]);
    if (!hasContact) {
      errors.push(`At least one contact method is required: ${REQUIRED_CONTACT_METHODS.join(', ')}`);
    }

    // Validate email format if provided
    if (product.contact.email) {
      if (!isValidEmail(product.contact.email)) {
        errors.push('Invalid email format');
      }
    }

    // Validate URLs if provided
    if (product.contact.github && !product.contact.github.startsWith('https://github.com')) {
      errors.push('GitHub URL must start with https://github.com');
    }
    if (product.contact.twitter && !product.contact.twitter.startsWith('https://twitter.com') && !product.contact.twitter.startsWith('https://x.com')) {
      errors.push('Twitter URL must start with https://twitter.com or https://x.com');
    }
  }

  // Check links format
  if (product.links) {
    if (typeof product.links !== 'object' || Array.isArray(product.links)) {
      errors.push('Links must be an object');
    } else {
      for (const [key, value] of Object.entries(product.links)) {
        if (!value) continue;
        if (typeof value !== 'string' || !isValidHttpUrl(value)) {
          errors.push(`Invalid URL in links.${key}`);
        }
      }
    }
  }

  // Check author
  if (product.author) {
    if (!product.author.name) {
      errors.push('Author name is required');
    }
    if (!product.author.github) {
      errors.push('Author GitHub URL is required');
    } else if (!product.author.github.startsWith('https://github.com')) {
      errors.push('Author GitHub URL must start with https://github.com');
    }
  }

  // Check screenshots exist
  if (product.screenshots) {
    const productDir = path.join(PRODUCTS_DIR, productId);
    for (const screenshot of product.screenshots) {
      const screenshotPath = path.join(productDir, screenshot);
      if (!fs.existsSync(screenshotPath)) {
        errors.push(`Screenshot not found: ${screenshot}`);
      }
    }
  }

  // Check benefits format
  if (product.benefits) {
    if (!Array.isArray(product.benefits)) {
      errors.push('Benefits must be an array');
    } else {
      product.benefits.forEach((benefit, index) => {
        if (!benefit.code) {
          errors.push(`Benefit ${index + 1}: code is required`);
        }
        if (!benefit.description) {
          errors.push(`Benefit ${index + 1}: description is required`);
        }
      });
    }
  }

  return errors;
}

async function validate() {
  if (!fs.existsSync(PRODUCTS_DIR)) {
    console.error('❌ products directory not found');
    process.exit(1);
  }

  console.log('Validating products...\n');

  const targetDirs = process.argv.slice(2).filter(Boolean);
  const productDirs = await resolveProductDirs(targetDirs);

  for (const productId of productDirs) {
    const productFile = path.join(PRODUCTS_DIR, productId, 'product.json');

    if (!fs.existsSync(productFile)) {
      console.error(`❌ ${productId}: product.json not found`);
      hasErrors = true;
      continue;
    }

    try {
      const content = fs.readFileSync(productFile, 'utf-8');
      const product = JSON.parse(content);
      const errors = validateProduct(productId, product);

      if (errors.length > 0) {
        console.error(`❌ ${productId}:`);
        errors.forEach(err => console.error(`   - ${err}`));
        hasErrors = true;
      } else {
        console.log(`✓ ${productId}: ${product.name || '(unnamed)'}`);
      }
    } catch (error) {
      console.error(`❌ ${productId}: Invalid JSON - ${error.message}`);
      hasErrors = true;
    }
  }

  console.log('\n' + (hasErrors ? 'Validation failed!' : 'All products valid!'));

  if (hasErrors) {
    process.exit(1);
  }
}

validate();
