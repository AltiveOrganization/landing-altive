# Landing Altive

Frontend starter built with Vite, React, TypeScript, SCSS, and Storybook.

## Getting started

```bash
npm install
npm run dev
```

## Commands

- `npm run dev` — start Vite in development mode
- `npm run build` — type-check and create a production build
- `npm run build:pages` — create a build for GitHub Pages
- `npm run preview` — preview the production build
- `npm run storybook` — start Storybook
- `npm run build-storybook` — create a static Storybook build
- `npm run lint` / `npm run lint:fix` — check or fix code and styles
- `npm run format` / `npm run format:check` — write or check formatting
- `npm run typecheck` — check TypeScript without emitting files
- `npm run test` / `npm run test:watch` — run Vitest
- `npm run check` — run all quality checks
- `npm run docker:dev` / `npm run docker:prod` — run the development or production container
- `npm run docker:down` — stop and remove the Docker Compose containers

Node.js 20.19+ or 22.12+ is required. Pushes to `main` are deployed to GitHub Pages.

## Docker

Development mode runs Vite with hot reload and mounts the local source directory:

```bash
npm run docker:dev
```

Open <http://localhost:5173>. Changes made in `src` are reflected without rebuilding the
image.

Production mode builds the application and serves the optimized static files with Nginx:

```bash
npm run docker:prod
```

Open <http://localhost:8080>. Stop either environment with `npm run docker:down`.

## Copyright and usage

Copyright © 2026 Altive. All rights reserved.

This landing page, including its source code, design, text, graphics, branding, and other
materials, is proprietary to Altive. Copying, modification, publication, distribution,
sublicensing, or commercial use is prohibited without prior written permission from Altive.

See [LICENSE](./LICENSE) for the full terms.
