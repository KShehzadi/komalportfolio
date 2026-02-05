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
