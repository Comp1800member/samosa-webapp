# samosa
## Overview

A VS Code extension + web showcase for automatically generating commit messages and scaffolding deployment for selected cloud services.

## Web demo

This repository includes a **React webapp** at `webapp/` that can be used as a landing page and documentation site for the extension.

### Run the demo locally

```bash
cd webapp
npm install
npm start
```

Then open http://localhost:3000.

### Build for production

```bash
cd webapp
npm run build
```

## Notes

- The webapp is built with Create React App (TypeScript).
- Landing page content lives in `webapp/src/components/Landing.tsx`.
- Use the webapp as a starting point for docs and deployment guides.
