# Setup & Run (develop on main)

Follow these steps to set up and run the project from the `main` branch for development and to create production builds.

1. Clone the repository and switch to the `main` branch (if not already on main):

```bash
# Clone the repo
git clone https://github.com/<your-username>/komalportfolio.git
cd komalportfolio
# Ensure you're on main
git checkout main
```

2. Create environment file (if needed):

```bash
# Linux / macOS
cp env.example .env
# Windows (PowerShell / CMD)
copy env.example .env
```

3. Install dependencies and start the dev server:

```bash
npm install
npm start
```

4. Create a production build on `main`:

```bash
npm run build
```

This will produce a `build/` folder ready for deployment.

# Personal deployment note

I keep all source code and make changes on the `main` branch. To produce a production build, run:

```bash
npm run build
```

After the build completes, copy the generated `build/` output into the `master` branch (replace the files currently present there with the contents of `build/`). Pushing the updated `master` branch will trigger deployment through GitHub Pages or your configured GitHub Actions workflow.

Summary:
- Develop and commit on `main`.
- Create a production bundle with `npm run build` on `main`.
- Move the build output into the `master` branch (replace files there).
- Push `master` to trigger deployment.

Adjust this workflow if your repository uses a different deployment branch or an automated GitHub Actions flow that deploys from another branch.

`public/CNAME` holds the custom domain. It must stay in `public/` so every build
emits `build/CNAME` — otherwise copying `build/` over `master` deletes the CNAME
and `dev.komalshehzadi.com` stops resolving.

# Editing the content

All copy lives in a single file: **`src/content.js`**. Nothing else needs
touching to update the site. Two sections load live data instead:

| Section       | Source               | Written by  |
| ------------- | -------------------- | ----------- |
| Writing       | `public/blogs.json`  | `fetch.js`  |
| Open source   | `public/profile.json`| `fetch.js`  |

`fetch.js` refreshes `blogs.json` from Medium on every build (the handle
defaults to `komalshehzadi`; override with `MEDIUM_USERNAME` in `.env`). A
failed fetch is a warning, not a build error — the previous file is kept.
`profile.json` only refreshes when `USE_GITHUB_DATA=true` and a token are set.

# Architecture

```
src/
  content.js          all copy, in one place
  layout/Shell.js     page composition
  sections/           one file per section
  ui/                 nav, reveal, typing, progress, back-to-top
  three/              WebGL scenes (loaded on demand — see below)
  styles/             tokens.scss (palette) + app.scss + fx.scss
  utils/motion.js     framer-motion variants
```

## Keeping it fast

three.js is large, so none of it is in the initial payload:

- Every WebGL scene is wrapped in `three/DeferredCanvas.js`, which waits for the
  placeholder to come **near the viewport** and then for the browser to go
  **idle** before it even starts the `import()`. Scroll to a section and its
  chunk arrives; never scroll there and it is never downloaded.
- Until then each scene shows a CSS/static fallback, so the page is complete
  with WebGL disabled or on a device where the import fails.
- `framer-motion` is used through `LazyMotion` + the `m` components, which ships
  only the animation features this site uses.
- The Font Awesome stylesheet is loaded non-blocking.
- `.env.production` sets `GENERATE_SOURCEMAP=false` so the deployed build no
  longer publishes the full original source as `.map` files.
- All tech balls share **one** WebGL context. The reference design mounts one
  canvas per technology; browsers cap concurrent contexts at around 16, past
  which the earliest ones are dropped and icons silently go blank.

The planet in Contact is generated procedurally (canvas textures + sphere
geometry) rather than loaded as a model, so it ships no asset at all.

Rough gzipped budget: ~152 kB initial JS + ~8 kB CSS, with ~233 kB of three.js
chunks fetched only on demand.

# Résumé

The Résumé button links to `public/Komal_Shehzadi_Resume.pdf`, which opens in a
new tab.

**The phone number has been redacted from this copy** — removed from the PDF's
text layer with PyMuPDF's redaction (glyphs deleted, not covered with a box), so
it cannot be copied or extracted. If you replace the file, redact it again
before committing; dropping in the original will republish the number.

# Credits

Design adapted from
[reactjs18-3d-portfolio](https://github.com/ladunjexa/reactjs18-3d-portfolio)
by Liron Abutbul, MIT licensed.

Technology icons from [Devicon](https://github.com/devicons/devicon), MIT
licensed.
