# VibeShip Design Specification

## Overview

VibeShip is a product sharing platform for Vibe Coding developers. Products are submitted via GitHub PR and displayed as static pages.

## Core Features

- **GitHub PR Submission** - Users fork, create product directory, submit PR
- **JSON Product Data** - Structured format for AI integration and validation
- **Static Site Generation** - GitHub Action auto-builds on PR
- **Browse & Filter** - Timeline, category, tag filtering
- **Search** - Client-side search

## Directory Structure

```
vibeship/
├── products/                    # Product submissions
│   └── [product-id]/
│       ├── product.json         # Product info
│       └── screenshot.png       # Screenshot
├── src/                        # Source code
│   ├── pages/                  # HTML pages
│   └── components/            # Components
├── scripts/                    # Build scripts
├── docs/                       # Documentation
└── skills/
    └── submit-to-vibeship/     # Submission skill
```

## Product Data Format

```json
{
  "name": "Product Name",
  "tagline": "One sentence description",
  "description": "Detailed description (Markdown)",
  "category": "AI工具",
  "tags": ["AI", "Tool"],
  "screenshots": ["screenshot.png"],
  "links": {
    "product": "https://...",
    "github": "https://..."
  },
  "contact": {
    "github": "https://github.com/user",
    "twitter": "https://twitter.com/user",
    "email": "hello@example.com"
  },
  "benefits": [
    {
      "code": "LAUNCH50",
      "description": "50% off for launch"
    }
  ],
  "author": {
    "name": "Author Name",
    "github": "https://github.com/user"
  }
}
```

### Field Specification

| Field | Required | Description |
|-------|----------|-------------|
| name | ✓ | Product name |
| tagline | ✓ | One sentence, max 50 chars |
| description | ✓ | Detailed description |
| category | ✓ | Single category |
| tags | ✓ | Tag list, min 1 |
| screenshots | ✓ | Screenshot filenames |
| links | | Product links |
| contact | ✓ | Contact info (at least one) |
| benefits | | Discount codes |
| author | ✓ | Author info |

### Categories

- AI工具
- 开发框架
- Chrome扩展
- 移动应用
- SaaS
- 开源项目
- 其他

## Page Structure

### Home (index.html)
- Hero: Site name + tagline
- Search bar
- Category/tag filters
- Product card grid (timeline sorted)
- Footer: Submit guide link

### Product Detail (product/[id]/index.html)
- Product name + tagline
- Screenshot gallery
- Description
- Benefits display
- Link buttons
- Contact info
- Author info

### Submit Guide (submit.html)
- PR workflow explanation
- Directory structure guide
- JSON format reference
- Link to GitHub repo

## Technical Approach

### Frontend
- Pure HTML + CSS + JavaScript
- Responsive design
- No external CDN dependencies

### Build
- GitHub Action auto-build
- JSON validation
- Static HTML generation

### Future (Out of Scope)
- Likes/page views via external API
- User accounts
- Comments

## Design System

### Visual Style
- **Style**: Minimalist + Bento Grid
- **Aesthetic**: Fresh, clean, bright with ample whitespace
- **Layout**: Card-based grid, modular sections
- **Effects**: Soft shadows, rounded corners (16-24px), no gradients

### Color Palette

| Role | Hex | Usage |
|------|-----|-------|
| Primary | `#6366F1` | Indigo - headings, links, active states |
| Secondary | `#818CF8` | Light indigo - hover states, badges |
| Accent/CTA | `#059669` | Emerald - buttons, highlights, benefits |
| Background | `#F5F3FF` | Very light indigo tint - page background |
| Surface | `#FFFFFF` | Cards, elevated elements |
| Foreground | `#1E1B4B` | Dark indigo - primary text |
| Muted | `#EBEFF9` | Light gray - secondary backgrounds |
| Muted Foreground | `#64748B` | Slate - secondary text |
| Border | `#E0E7FF` | Light indigo - dividers, borders |

### Typography

**Font Family** (via Google Fonts):
```css
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Work+Sans:wght@400;500;600&display=swap');

--font-heading: 'Outfit', sans-serif;
--font-body: 'Work Sans', sans-serif;
```

**Type Scale**:
| Element | Size | Weight |
|---------|------|--------|
| H1 (Site Title) | 3rem / 48px | 700 |
| H2 (Page Title) | 2rem / 32px | 600 |
| H3 (Section Title) | 1.5rem / 24px | 600 |
| Body | 1rem / 16px | 400 |
| Small | 0.875rem / 14px | 400 |
| Caption | 0.75rem / 12px | 500 |

### Spacing System

Using 8px base grid:
- `--space-1`: 4px
- `--space-2`: 8px
- `--space-3`: 12px
- `--space-4`: 16px
- `--space-6`: 24px
- `--space-8`: 32px
- `--space-12`: 48px
- `--space-16`: 64px

### Component Specifications

#### Product Card
- **Size**: Fluid width, min 280px
- **Border Radius**: 16px
- **Shadow**: `0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)`
- **Hover**: Slight lift effect (translateY -2px), shadow increase
- **Content**: Screenshot (16:9), name, tagline, category badge, author

#### Buttons
- **Primary**: Background `#6366F1`, text white, radius 8px, padding 12px 24px
- **Secondary**: Background transparent, border `#6366F1`, text `#6366F1`
- **CTA**: Background `#059669`, text white, radius 8px
- **Hover**: Darken 10%, transition 150ms

#### Input Fields
- **Height**: 44px (touch-friendly)
- **Border**: 1px solid `#E0E7FF`
- **Radius**: 8px
- **Focus**: Border `#6366F1`, ring effect

#### Category Badge
- **Background**: `#EBEFF9`
- **Text**: `#6366F1`
- **Radius**: 9999px (pill shape)
- **Padding**: 4px 12px

#### Navigation
- **Style**: Minimal top nav, no heavy chrome
- **Items**: Logo, Browse, Submit, GitHub link
- **Mobile**: Hamburger menu or simplified

## Page Layouts

### Home Page (index.html)

```
┌─────────────────────────────────────────────┐
│  [Logo] VibeShip          Browse  Submit    │  ← Nav
├─────────────────────────────────────────────┤
│                                             │
│         Share Your Vibe Coding              │  ← Hero
│              Creations                       │
│                                             │
│    A platform for developers to showcase     │
│      products built with AI assistance       │
│                                             │
│         [🔍 Search products...]              │  ← Search
│                                             │
├─────────────────────────────────────────────┤
│  [All] [AI工具] [开发框架] [Chrome扩展]...   │  ← Category pills
├─────────────────────────────────────────────┤
│                                             │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐    │
│  │ 📦      │  │ 📦      │  │ 📦      │    │  ← Product grid
│  │ Product │  │ Product │  │ Product │    │
│  │   1     │  │   2     │  │   3     │    │
│  └─────────┘  └─────────┘  └─────────┘    │
│                                             │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐    │
│  │ 📦      │  │ 📦      │  │ 📦      │    │
│  │ Product │  │ Product │  │ Product │    │
│  │   4     │  │   5     │  │   6     │    │
│  └─────────┘  └─────────┘  └─────────┘    │
│                                             │
├─────────────────────────────────────────────┤
│  Submit your product via GitHub PR          │  ← CTA Section
│         [Submit Product]                     │
├─────────────────────────────────────────────┤
│  © 2026 VibeShip · GitHub                   │  ← Footer
└─────────────────────────────────────────────┘
```

### Product Detail Page (product/[id]/index.html)

```
┌─────────────────────────────────────────────┐
│  [Logo] VibeShip          Browse  Submit    │
├─────────────────────────────────────────────┤
│                                             │
│  ← Back to products                         │
│                                             │
│  ┌───────────────────────────────────────┐  │
│  │                                       │  │
│  │         [Screenshot Gallery]          │  │  ← Main screenshot
│  │                                       │  │
│  └───────────────────────────────────────┘  │
│                                             │
│  Product Name                                │  ← Title
│  One sentence tagline                        │  ← Tagline
│                                             │
│  [AI工具] [开发框架] [开源项目]              │  ← Tags
│                                             │
│  [🌐 Visit] [📦 GitHub] [💬 Twitter]        │  ← Action buttons
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  ## About                                   │
│  Detailed product description here...        │  ← Description
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  🎁 Benefits                                │
│  ┌─────────────────────────────────────┐   │
│  │ LAUNCH20 - 20% off for launch       │   │  ← Benefits card
│  └─────────────────────────────────────┘   │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  👤 Author                                  │
│  Author Name · GitHub                        │  ← Author info
│                                             │
│  📧 Contact: email@example.com              │
│                                             │
└─────────────────────────────────────────────┘
```

### Submit Guide Page (submit.html)

```
┌─────────────────────────────────────────────┐
│  [Logo] VibeShip          Browse  Submit    │
├─────────────────────────────────────────────┤
│                                             │
│  Submit Your Product                        │  ← Title
│                                             │
│  Share your vibe coding creation with       │
│  the community via GitHub PR                │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  ## How to Submit                           │
│                                             │
│  1. Fork the repository                     │
│  2. Create product directory                │
│  3. Add product.json                        │
│  4. Add screenshots                        │
│  5. Submit PR                              │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  ## Product Format                          │
│                                             │
│  ```json                                   │
│  {                                         │
│    "name": "Product Name",                  │
│    "tagline": "One sentence",              │
│    "category": "AI工具",                    │
│    ...                                     │
│  }                                         │
│  ```                                       │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│         [Go to GitHub Repository]           │  ← CTA
│                                             │
└─────────────────────────────────────────────┘
```

## Responsive Breakpoints

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mobile | < 640px | 1 column, stacked |
| Tablet | 640px - 1024px | 2 columns |
| Desktop | > 1024px | 3-4 columns |

## Icon System

Use inline SVG icons for:
- Navigation (menu, search, back arrow)
- Social (GitHub, Twitter, email)
- Actions (external link, copy, heart)
- Benefits (gift/present icon)

Style: 24x24px, 2px stroke, rounded caps

## Animation Guidelines

- **Duration**: 150-300ms for micro-interactions
- **Easing**: ease-out for enter, ease-in for exit
- **Hover**: Scale 1.02 for cards, color shift for buttons
- **Reduced motion**: Respect prefers-reduced-motion

## Logo Design

See `/logo.svg` for the VibeShip logo.

**Design Elements**:
- Ship hull in indigo gradient (blue to cyan) - representing launch/ship
- Sailing mast/flag - representing publishing
- Yellow accent sparkles - representing energy/achievement
- "V" letterform subtly integrated in wave at bottom
- Circular background - clean, contained

**Usage**:
- Favicon: 32x32px
- Header: 40px height
- Standalone: 120-200px

## Implementation Checklist

- [x] Design system defined
- [ ] Logo finalized
- [ ] HTML templates created
- [ ] CSS styles implemented
- [ ] JavaScript functionality (search, filter)
- [ ] Mobile responsive verified
- [ ] GitHub Action build script
- [ ] JSON validation script

## Development Phases

### Phase 1 (Foundation)
1. ✓ Directory structure
2. ✓ JSON Schema
3. ✓ GitHub Action build script (pending)
4. ✓ Basic page templates (pending)
5. ✓ Submission skill

### Phase 2 (UI Implementation)
1. Design system implementation
2. Logo refinement
3. HTML/CSS templates
4. Product card component
5. Search and filter functionality

### Phase 3 (Future)
1. Dynamic features (likes/views) via external API
2. User accounts
3. Comments
