#!/usr/bin/env node

/**
 * VibeShip Build Script
 * Generates static site from product JSON files
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

const ROOT_DIR = path.join(__dirname, '..');
const SRC_DIR = path.join(ROOT_DIR, 'src');
const PRODUCTS_DIR = path.join(ROOT_DIR, 'products');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

// Ensure dist directory exists
if (!fs.existsSync(DIST_DIR)) {
  fs.mkdirSync(DIST_DIR, { recursive: true });
}

// Copy static assets
function copyStaticAssets() {
  console.log('Copying static assets...');

  // Copy CSS
  const cssDir = path.join(DIST_DIR, 'css');
  if (!fs.existsSync(cssDir)) {
    fs.mkdirSync(cssDir, { recursive: true });
  }
  fs.copyFileSync(
    path.join(SRC_DIR, 'css', 'styles.css'),
    path.join(cssDir, 'styles.css')
  );

  // Copy JS
  const jsDir = path.join(DIST_DIR, 'js');
  if (!fs.existsSync(jsDir)) {
    fs.mkdirSync(jsDir, { recursive: true });
  }
  fs.copyFileSync(
    path.join(SRC_DIR, 'js', 'main.js'),
    path.join(jsDir, 'main.js')
  );

  // Copy i18n
  fs.copyFileSync(
    path.join(SRC_DIR, 'js', 'i18n.js'),
    path.join(jsDir, 'i18n.js')
  );

  // Copy icons
  const iconsDir = path.join(DIST_DIR, 'icons');
  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
  }
  const iconFiles = fs.readdirSync(path.join(SRC_DIR, 'icons'));
  for (const file of iconFiles) {
    fs.copyFileSync(
      path.join(SRC_DIR, 'icons', file),
      path.join(iconsDir, file)
    );
  }

  // Copy logos
  fs.copyFileSync(
    path.join(ROOT_DIR, 'logo.svg'),
    path.join(DIST_DIR, 'logo.svg')
  );
  fs.copyFileSync(
    path.join(ROOT_DIR, 'favicon.svg'),
    path.join(DIST_DIR, 'favicon.svg')
  );
}

// Generate products index
async function generateProductsIndex() {
  console.log('Generating products index...');

  const productDirs = await glob('*/product.json', { cwd: PRODUCTS_DIR });
  const products = [];

  for (const productPath of productDirs) {
    const productId = path.dirname(productPath);
    const productFile = path.join(PRODUCTS_DIR, productPath);

    try {
      const content = fs.readFileSync(productFile, 'utf-8');
      const product = JSON.parse(content);
      product.id = productId;
      product.submittedAt = fs.statSync(productFile).mtime.toISOString();
      products.push(product);
    } catch (error) {
      console.error(`Error reading product ${productPath}:`, error.message);
    }
  }

  // Sort by date (newest first)
  products.sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));

  // Write products.json
  const productsJsonPath = path.join(DIST_DIR, 'products', 'products.json');
  if (!fs.existsSync(path.join(DIST_DIR, 'products'))) {
    fs.mkdirSync(path.join(DIST_DIR, 'products'), { recursive: true });
  }
  fs.writeFileSync(productsJsonPath, JSON.stringify({ products }, null, 2));
  console.log(`Found ${products.length} products`);

  return products;
}

// Copy product files
async function copyProductFiles() {
  console.log('Copying product files...');

  const productDirs = await glob('*', { cwd: PRODUCTS_DIR });

  for (const productId of productDirs) {
    const srcDir = path.join(PRODUCTS_DIR, productId);
    const destDir = path.join(DIST_DIR, 'products', productId);

    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    const files = fs.readdirSync(srcDir);
    for (const file of files) {
      if (file === 'product.json') {
        // Copy product.json for detail page to fetch
        fs.copyFileSync(
          path.join(srcDir, file),
          path.join(destDir, file)
        );
        continue;
      }
      fs.copyFileSync(
        path.join(srcDir, file),
        path.join(destDir, file)
      );
    }
  }
}

// Generate pages
function generatePages(products) {
  console.log('Generating pages...');

  // Generate index.html
  let indexHtml = fs.readFileSync(path.join(SRC_DIR, 'index.html'), 'utf-8');
  fs.writeFileSync(path.join(DIST_DIR, 'index.html'), indexHtml);

  // Generate submit.html
  const submitHtml = fs.readFileSync(path.join(SRC_DIR, 'submit.html'), 'utf-8');
  fs.writeFileSync(path.join(DIST_DIR, 'submit.html'), submitHtml);

  // Generate product pages
  const productTemplate = fs.readFileSync(path.join(SRC_DIR, 'product', 'index.html'), 'utf-8');

  for (const product of products) {
    const productDir = path.join(DIST_DIR, 'product', product.id);
    if (!fs.existsSync(productDir)) {
      fs.mkdirSync(productDir, { recursive: true });
    }

    // Use the template - the JS will load product data from URL params
    fs.writeFileSync(path.join(productDir, 'index.html'), productTemplate);
  }

  // Also copy product template for client-side rendering
  const productDestDir = path.join(DIST_DIR, 'product');
  fs.writeFileSync(path.join(productDestDir, 'index.html'), productTemplate);
}

// Main build
async function build() {
  console.log('Starting VibeShip build...');

  try {
    copyStaticAssets();
    const products = await generateProductsIndex();
    await copyProductFiles();
    generatePages(products);

    console.log('Build complete!');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

build();
