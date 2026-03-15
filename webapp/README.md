# Samosa web demo

This directory contains a **React webapp** used as a landing page and documentation site for the Samosa VS Code extension (commit message + deployment scaffolding).

## Quick start

```bash
cd webapp
npm install
npm start
```

Then open http://localhost:3000 in your browser.

## Build (production)

```bash
cd webapp
npm run build
```

The production build outputs to `webapp/build`.

## Whats inside

- `src/components/Landing.tsx`: Landing page shown on the home route.
- `public/index.html`: App metadata and page title.

## Next steps

- Add dedicated docs (e.g., using MDX or a static site generator).
- Add screenshots, demo flow, and setup/usage instructions for the VS Code extension.
