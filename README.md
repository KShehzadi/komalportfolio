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
