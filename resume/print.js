/* Prints resume/Komal_Shehzadi_Resume_2026.html to the PDF the site serves,
   using whichever Chrome or Edge is installed (override with CHROME_PATH).
   Usage: npm run resume */
const {execFileSync} = require("child_process");
const fs = require("fs");
const os = require("os");
const path = require("path");
const {pathToFileURL} = require("url");

const CANDIDATES = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium"
].filter(Boolean);

const browser = CANDIDATES.find(candidate => fs.existsSync(candidate));
if (!browser) {
  console.error("No Chrome or Edge found. Set CHROME_PATH and try again.");
  process.exit(1);
}

const source = path.join(__dirname, "Komal_Shehzadi_Resume_2026.html");
const target = path.join(
  __dirname,
  "..",
  "public",
  "Komal_Shehzadi_Resume_2026.pdf"
);

execFileSync(
  browser,
  [
    "--headless=new",
    "--disable-gpu",
    // a throwaway profile, so an open browser window does not get in the way
    `--user-data-dir=${path.join(os.tmpdir(), "resume-print-profile")}`,
    "--no-pdf-header-footer",
    // gives the Google Fonts stylesheet time to land before the page prints
    "--virtual-time-budget=15000",
    `--print-to-pdf=${target}`,
    pathToFileURL(source).href
  ],
  {stdio: "inherit"}
);

console.log(`Wrote ${path.relative(process.cwd(), target)}`);
