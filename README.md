# Joanna Sakugawa — Game Developer Portfolio

Personal portfolio built with Angular, TypeScript, and Tailwind CSS. The site is available in English and Spanish and features game development projects, professional experience, skills, education, and contact links.

## Requirements

- Node.js 22.12+ or 24
- npm 11

## Run locally

```bash
npm ci
npm start
```

Open the local URL printed by Angular CLI (usually `http://localhost:4200/`).

## Check and build

```bash
npm test -- --watch=false
npm run build
```

The production build is written to `dist/portfolio-joanna/browser`.

## Deploy to GitHub

Create an empty repository on GitHub, then connect this local repository and push the `main` branch:

```bash
git add .
git commit -m "Prepare portfolio for deployment"
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

Replace `USERNAME/REPOSITORY` with the GitHub repository URL. Do not commit `node_modules`, build output, local environment files, or Vercel's local project settings; they are excluded by `.gitignore`.

## Deploy to Vercel

1. In Vercel, choose **Add New → Project** and import the GitHub repository.
2. Keep the Angular project root at the repository root.
3. Use `npm run build` as the build command and `dist/portfolio-joanna/browser` as the output directory. These values are also set in `vercel.json`.
4. Deploy. No environment variables are required.

Vercel will create deployments from pushes to GitHub and use the SPA rewrite in `vercel.json` for direct URL requests.
