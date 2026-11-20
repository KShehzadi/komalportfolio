/* Renders scripts/og-image.html to public/og-image.png (1200 × 630), the
   picture shown when the site is shared. Usage: npm run og-image */
const {execFileSync} = require("child_process");
const path = require("path");
const {pathToFileURL} = require("url");
const {findBrowser, baseFlags} = require("./chrome");

const source = path.join(__dirname, "og-image.html");
const target = path.join(__dirname, "..", "public", "og-image.png");

execFileSync(
  findBrowser(),
  [
    ...baseFlags(),
    "--hide-scrollbars",
    "--window-size=1200,630",
    `--screenshot=${target}`,
    pathToFileURL(source).href
  ],
  {stdio: "inherit"}
);

console.log(`Wrote ${path.relative(process.cwd(), target)}`);
