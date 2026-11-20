/* Finds an installed Chrome or Edge for the headless print and screenshot
   scripts. Set CHROME_PATH to use a different browser. */
const fs = require("fs");
const os = require("os");
const path = require("path");

const CANDIDATES = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium"
].filter(Boolean);

function findBrowser() {
  const browser = CANDIDATES.find(candidate => fs.existsSync(candidate));
  if (!browser) {
    console.error("No Chrome or Edge found. Set CHROME_PATH and try again.");
    process.exit(1);
  }
  return browser;
}

/* Flags every headless run shares: a throwaway profile so an open browser
   window does not get in the way, and time for web fonts to land. */
function baseFlags() {
  return [
    "--headless=new",
    "--disable-gpu",
    `--user-data-dir=${path.join(os.tmpdir(), "portfolio-headless-profile")}`,
    "--virtual-time-budget=15000"
  ];
}

module.exports = {findBrowser, baseFlags};
