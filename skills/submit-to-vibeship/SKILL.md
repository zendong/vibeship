# Submit to VibeShip

Submit your product to the VibeShip platform via GitHub PR. This process is fully AI-automatable.

## Overview

VibeShip helps developers share products built with Vibe Coding. Products are submitted via GitHub Pull Request, automatically generating a static page on VibeShip.

**For AI Agents**: This entire process can be automated. Follow the steps below to generate and submit a product listing.

---

## Step-by-Step Workflow for AI Agents

### Step 1: Analyze the Product

Gather the following information from the user:

| Field | Required | Description |
|-------|----------|-------------|
| `name` | **Yes** | Product name (max 100 chars) |
| `tagline` | **Yes** | One-line description (max 50 chars) |
| `description` | **Yes** | Detailed description in Markdown |
| `category` | **Yes** | One of the valid categories |
| `tags` | **Yes** | Array of tag strings (min 1) |
| `screenshots` | **Yes** | Array of screenshot filenames |
| `contact` | **Yes** | Object with at least one contact method |
| `author` | **Yes** | Object with `name` and `github` |
| `links` | No | Product links (product URL, GitHub repo) |
| `benefits` | No | Discount/promotion codes |

### Step 2: Determine Product Category

Choose ONE category from this list:

| Category | Description |
|----------|-------------|
| `AI工具` | AI-powered tools and services |
| `开发框架` | Development frameworks and libraries |
| `Chrome扩展` | Browser extensions |
| `移动应用` | Mobile applications |
| `SaaS` | Software as a Service products |
| `开源项目` | Open source projects |
| `其他` | Other products |

### Step 3: Collect Contact Information

**Required**: At least ONE of these contact methods:

| Contact | Format | Icon |
|---------|--------|------|
| `github` | `https://github.com/username` | GitHub icon |
| `twitter` | `https://twitter.com/username` or `https://x.com/username` | X/Twitter icon |
| `email` | `name@domain.com` | Email icon |

**Optional Chinese platforms** (with dedicated icons):
- `weibo` - Weibo profile URL
- `xiaohongshu` or `小红书` - 小红书 profile URL
- `zhihu` or `知乎` - 知乎 profile URL
- `bilibili` or `b站` - Bilibili profile URL
- `juejin` or `掘金` - 掘金 profile URL
- `csdn` - CSDN profile URL
- `douyin` or `抖音` - 抖音 profile URL
- `wechat` or `微信` - 微信 ID or public account URL

### Step 4: Prepare Screenshots

1. Create a product directory: `products/[product-id]/`
   - Use kebab-case for the product ID (e.g., `my-product`, `ai-writer`)
   - Must be unique across all products

2. Add screenshots to the product directory:
   - Supported formats: PNG, JPG, WebP
   - Recommended ratio: 16:9 or 4:3
   - Update the `screenshots` array with actual filenames

### Step 5: Generate product.json

Create the JSON file with this exact structure:

```json
{
  "name": "Product Name Here",
  "tagline": "One sentence description (max 50 chars)",
  "description": "## About\n\nDetailed description in Markdown.\n\n## Features\n\n- Feature 1\n- Feature 2\n\n## Getting Started\n\n1. Step one\n2. Step two",
  "category": "AI工具",
  "tags": ["AI", "Tool", "Productivity"],
  "screenshots": ["screenshot.png"],
  "links": {
    "product": "https://your-product.com",
    "github": "https://github.com/you/repo"
  },
  "contact": {
    "github": "https://github.com/your-github",
    "twitter": "https://twitter.com/your-twitter",
    "email": "hello@example.com"
  },
  "benefits": [
    {
      "code": "LAUNCH20",
      "description": "20% off for launch"
    }
  ],
  "author": {
    "name": "Your Name",
    "github": "https://github.com/your-github"
  }
}
```

### Step 6: Validate Before Submitting

**AI Validation Checklist** (must ALL pass):

- [ ] `name` is present and non-empty
- [ ] `tagline` is present and ≤50 characters
- [ ] `description` is present and non-empty
- [ ] `category` is one of: `AI工具`, `开发框架`, `Chrome扩展`, `移动应用`, `SaaS`, `开源项目`, `其他`
- [ ] `tags` is an array with at least 1 item
- [ ] `screenshots` is an array with at least 1 filename
- [ ] All screenshot files exist in the product directory
- [ ] `contact` object exists with at least one of: `github`, `twitter`, `email`
- [ ] `contact.github` starts with `https://github.com/`
- [ ] `contact.twitter` starts with `https://twitter.com/` or `https://x.com/` (if provided)
- [ ] `contact.email` matches email regex (if provided)
- [ ] `author` object exists with `name` and `github`
- [ ] `author.github` starts with `https://github.com/`

### Step 7: Submit via GitHub PR

1. Fork the repository
2. Create a branch: `feat/add-[product-id]`
3. Add your product directory and files
4. Push and create PR to `main` branch
5. CI will automatically validate your submission

---

## Field Specification

### Required Fields

| Field | Type | Constraints |
|-------|------|-------------|
| `name` | string | Max 100 characters |
| `tagline` | string | Max 50 characters |
| `description` | string | Markdown supported |
| `category` | string | Must be valid category |
| `tags` | string[] | Min 1 item |
| `screenshots` | string[] | Min 1 item, files must exist |
| `contact` | object | At least one contact method |
| `author` | object | Must have `name` and `github` |

### Optional Fields

| Field | Type | Description |
|-------|------|-------------|
| `links.product` | string | Product website URL |
| `links.github` | string | GitHub repository URL |
| `benefits` | object[] | Array of `{code, description}` |

### Contact Object

```json
{
  "github": "https://github.com/username",
  "twitter": "https://twitter.com/username",
  "email": "hello@example.com"
}
```

At least one field is required. URLs must be complete (start with `https://`).

### Author Object

```json
{
  "name": "Your Name",
  "github": "https://github.com/username"
}
```

Both fields are required.

---

## Example product.json

```json
{
  "name": "AI Code Reviewer",
  "tagline": "Automated code review powered by AI",
  "description": "## Overview\n\nAI Code Reviewer uses machine learning to analyze your code and provide actionable feedback.\n\n## Features\n\n- Automated PR analysis\n- Security vulnerability detection\n- Performance suggestions\n\n## Getting Started\n\n1. Install the GitHub App\n2. Configure your preferences\n3. Create your first PR",
  "category": "AI工具",
  "tags": ["AI", "Code Review", "GitHub", "DevTools"],
  "screenshots": ["dashboard.png", "pr-analysis.png"],
  "links": {
    "product": "https://ai-code-reviewer.com",
    "github": "https://github.com/acme/ai-code-reviewer"
  },
  "contact": {
    "github": "https://github.com/acme",
    "twitter": "https://twitter.com/aicodereviewer"
  },
  "author": {
    "name": "ACME Corp",
    "github": "https://github.com/acme"
  }
}
```

---

## AI Prompt Template

Use this template to generate a product submission:

```
Generate a VibeShip product submission for [product name].

Product details:
- Name: [product name]
- Tagline: [one line description, max 50 chars]
- Description: [detailed description in Markdown]
- Category: [choose from: AI工具, 开发框架, Chrome扩展, 移动应用, SaaS, 开源项目, 其他]
- Tags: [comma-separated tags]
- Website: [product URL]
- GitHub: [GitHub repo URL]
- Contact: [preferred contact method - github, twitter, or email]
- Author: [author name and GitHub URL]

Screenshots: Create placeholder references like ["screenshot1.png"].
The actual screenshot files should be added by the user.

Generate a complete product.json file ready for submission.
```

---

## Validation Rules

The CI pipeline validates:

1. **Single directory constraint**: Only ONE product directory can be modified per PR
2. **JSON validity**: Must be valid JSON
3. **Required fields**: All required fields must be present
4. **Field constraints**: Tagline ≤50 chars, valid category, etc.
5. **Screenshot existence**: All referenced screenshot files must exist
6. **URL validation**: GitHub/Twitter URLs must be properly formatted
7. **Contact requirement**: At least one contact method required
8. **Author requirement**: Author must have name and GitHub URL

---

## Common Validation Errors

| Error | Fix |
|-------|-----|
| `Missing required field: category` | Add category field with valid value |
| `Invalid category: XXX` | Use one of the 7 valid categories |
| `At least one tag is required` | Add tags array with at least 1 item |
| `Screenshot not found: xxx` | Ensure screenshot file exists in product dir |
| `At least one contact method required` | Add github, twitter, or email to contact |
| `GitHub URL must start with https://github.com/` | Use complete GitHub URL |
| `Author GitHub URL is required` | Add author.github field |

---

## Need Help?

Open a GitHub Issue for questions.
