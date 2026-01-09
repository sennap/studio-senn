# Studio Senn - AI Coding Instructions

## Project Overview
Pet photography portfolio website built with Next.js 16, initially generated via v0.app and synced with Vercel. Uses pnpm as package manager.

## Architecture & Key Files

### Data Layer
- **`lib/gallery-data.ts`**: Single source of truth for all portfolio content
  - `photos` array: Main portfolio homepage images
  - `galleries` array: Individual gallery collections (e.g., "Street Cats")
  - Images stored in `/public` folder, referenced as `/filename.jpg`
  - Each photo requires: `id`, `src`, `alt`, `width`, `height`

### Components Structure
- **Layout components**: `components/header.tsx`, `components/footer.tsx`
- **Feature components**: `components/photo-grid.tsx` (masonry grid + lightbox)
- **UI primitives**: `components/ui/*` (shadcn/ui components with custom variants)
- All interactive components use `"use client"` directive

### Routing
- Next.js App Router (not Pages Router)
- Routes: `/` (portfolio), `/about`, `/contact`, `/galleries`, `/galleries/[id]`
- Each route in `app/*/page.tsx` follows consistent layout pattern with Header/Footer

## Design System Conventions

### Typography Hierarchy
- Section labels: `text-sm text-muted-foreground` in `<h2>` tags
- Hero/main text: `font-serif text-xl md:text-2xl lg:text-3xl` in `<p>` tags (not h1)
- Brand name in header uses `<h1>` tag for SEO, not page titles
- Font families: DM Sans (sans), Cormorant Garamond (serif) from Google Fonts

### Spacing Patterns
- Hero sections: `py-8 md:py-12` (avoid larger padding like py-24)
- Container: `container mx-auto px-6`
- Photo grid: 2-column masonry (`columns-1 sm:columns-2 lg:columns-2 gap-6`)

### Styling Approach
- Tailwind CSS v4 with utility classes only (no custom CSS)
- Component variants via `class-variance-authority` (see `components/ui/button.tsx`)
- Use `cn()` utility from `lib/utils.ts` for conditional classes
- Theme-aware via `next-themes` with dark mode support

## Development Workflow

### Running Locally
```bash
pnpm install    # Install dependencies
pnpm dev        # Start dev server on localhost:3000
```

### Adding New Photos
1. Place image files in `/public` folder
2. Update `lib/gallery-data.ts` arrays:
   - Add to `photos[]` for homepage portfolio
   - Add to `galleries[]` for gallery collections
3. Use Next.js `<Image>` component for all images (never `<img>`)

### Creating New Pages
- Follow pattern: Header → main section → Footer
- Use semantic HTML (`<h2>` for section labels, `<p>` for hero text)
- Match existing spacing/typography patterns for consistency

## Critical Constraints

- **TypeScript**: All files use `.tsx`/`.ts` extensions, strict mode enabled
- **Image optimization**: Disabled in `next.config.mjs` (`unoptimized: true`)
- **Build errors**: TypeScript errors ignored in production builds
- **Path aliases**: Use `@/` prefix for imports (e.g., `@/components/header`)
- **Client components**: Interactive features require `"use client"` directive

## Integration Points

- **Vercel Analytics**: Imported in `app/layout.tsx`, already configured
- **shadcn/ui**: Component library with custom variants, installed via `components.json`
- **Radix UI**: Underlying primitives for UI components (don't modify directly)

## Common Patterns

### Responsive Design
Use mobile-first breakpoints: base → `sm:` → `md:` → `lg:` → `xl:`

### Forms
Contact form uses `react-hook-form` with client-side validation, prevents default submit

### Navigation
- Desktop: horizontal flex menu
- Mobile: hamburger menu with slide-down panel
- All links use Next.js `<Link>` component

## Don't Do

- Don't add CSS files; use Tailwind utilities exclusively
- Don't use `<h1>` for page titles (use `<p>` with heading styles)
- Don't exceed 2 columns in photo grid on large screens
- Don't create galleries with fewer than 6 photos (pattern from existing data)
- Don't bypass Next.js Image component for performance reasons
