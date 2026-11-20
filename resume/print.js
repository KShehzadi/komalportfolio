/* Prints resume/Komal_Shehzadi_Resume_2026.html to the PDF the site serves,
   using whichever Chrome or Edge is installed (override with CHROME_PATH).

     npm run resume
       → public/Komal_Shehzadi_Resume_2026.pdf, also copied over the older
         public/Komal_Shehzadi_Resume.pdf so links to that URL get the current
         résumé.

     RESUME_PHONE="+92 …" npm run resume
       → additionally resume/private/Komal_Shehzadi_Resume_2026_with_phone.pdf,
         for direct applications. That folder is git-ignored and nothing with
         the number is ever written to public/. */
const {execFileSync} = require("child_process");
const fs = require("fs");
const path = require("path");
const {pathToFileURL} = require("url");
const {findBrowser, baseFlags} = require("../scripts/chrome");

const browser = findBrowser();
const source = path.join(__dirname, "Komal_Shehzadi_Resume_2026.html");
const publicDir = path.join(__dirname, "..", "public");
const target = path.join(publicDir, "Komal_Shehzadi_Resume_2026.pdf");
const olderUrl = path.join(publicDir, "Komal_Shehzadi_Resume.pdf");

function print(htmlFile, pdfFile) {
  execFileSync(
    browser,
    [
      ...baseFlags(),
      "--no-pdf-header-footer",
      `--print-to-pdf=${pdfFile}`,
      pathToFileURL(htmlFile).href
    ],
    {stdio: "inherit"}
  );
  console.log(`Wrote ${path.relative(process.cwd(), pdfFile)}`);
}

print(source, target);
fs.copyFileSync(target, olderUrl);
console.log(`Copied to ${path.relative(process.cwd(), olderUrl)}`);

const phone = (process.env.RESUME_PHONE || "").trim();
if (phone) {
  // A temporary copy beside the source, so photo.jpg still resolves; it is
  // git-ignored and removed straight after printing.
  const temp = path.join(__dirname, ".private-print.html");
  const privateDir = path.join(__dirname, "private");
  const escaped = phone.replace(/[&<>"]/g, c => `&#${c.charCodeAt(0)};`);
  const html = fs
    .readFileSync(source, "utf8")
    .replace(
      "<dt>EMAIL</dt>",
      `<dt>PHONE</dt>\n            <dd>${escaped}</dd>\n            <dt>EMAIL</dt>`
    );
  fs.mkdirSync(privateDir, {recursive: true});
  fs.writeFileSync(temp, html);
  try {
    print(
      temp,
      path.join(privateDir, "Komal_Shehzadi_Resume_2026_with_phone.pdf")
    );
  } finally {
    fs.unlinkSync(temp);
  }
}
