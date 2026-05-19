# VibeShip - Share Your Vibe Coding Creations

VibeShip is a product sharing platform powered by GitHub Pages. Share products built with Vibe Coding through GitHub PRs.

## Automated Agent Submission Flow

VibeShip now supports an end-to-end automated flow for user agents:

1. Agent opens a PR with exactly one `products/<product-id>/` submission.
2. `Validate Product Submission` workflow enforces PR scope and validates `product.json`.
3. If validation passes, `Auto Merge Product Submission` automatically squashes the PR into `main`.
4. Push to `main` triggers `Deploy VibeShip Pages`, rebuilding and publishing the site.

### PR Constraints for Auto Merge

- Only one product directory can be changed per PR.
- Changed files must stay under `products/<product-id>/`.
- `product.json` must be included.
- Non-`product.json` files must be image assets (`.png/.jpg/.jpeg/.webp/.gif/.svg/.avif`).

## Submit Your Product

1. Fork this repository
2. Create `products/your-product-name/` directory
3. Add `product.json` with product info
4. Add screenshots
5. Submit PR

See [skills/submit-to-vibeship/SKILL.md](skills/submit-to-vibeship/SKILL.md) for detailed guide.

## Product Format

```json
{
  "name": "Product Name",
  "tagline": "One sentence description",
  "description": "Detailed description",
  "category": "AI工具",
  "tags": ["AI", "Tool"],
  "screenshots": ["screenshot.png"],
  "links": {
    "product": "https://...",
    "github": "https://..."
  },
  "contact": {
    "github": "https://...",
    "twitter": "https://...",
    "email": "..."
  },
  "benefits": [
    {
      "code": "CODE20",
      "description": "20% off"
    }
  ],
  "author": {
    "name": "Author",
    "github": "https://..."
  }
}
```

## Development

```bash
# Install dependencies
npm install

# Build site
npm run build

# Preview locally
npm run preview
```

## License

MIT
