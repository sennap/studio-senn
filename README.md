# Studio Senn

Pet photography portfolio website built with Next.js, deployed on Azure Container Apps.

**Live at: [www.senn-studio.com](https://www.senn-studio.com)**

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI**: shadcn/ui + Radix UI
- **Deployment**: Azure Container Apps via GitHub Actions
- **Registry**: Azure Container Registry

## Development

```bash
pnpm install    # Install dependencies
pnpm dev        # Start dev server on localhost:3000
pnpm build      # Production build
```

## Deployment

Pushes to `main` automatically build a Docker image, push it to Azure Container Registry, and deploy to Azure Container Apps via the workflow in `.github/workflows/container-apps.yml`.