# Deployment

## Vercel

This is a Vite static frontend.

- Framework preset: Vite
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`
- Root directory: repository root

Resume PDFs live in `public/resume/`; Vite copies these files to `dist/resume/` during the build.

After pushing to the `main` branch, Vercel should create a new deployment automatically. Verify the live page, project repository links, and these resume routes after deployment:

- `/resume/Sarvasetty_Revanth_Kumar_Machine_Learning_Resume.pdf`
- `/resume/Sarvasetty_Revanth_Kumar_Software_Engineer_Resume.pdf`

## Local production check

```bash
npm run build
npm run preview
```

Open the preview URL printed by Vite, then test navigation, images, project links and PDF actions.
