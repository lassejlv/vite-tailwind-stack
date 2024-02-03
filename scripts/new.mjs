


const pageName = process.argv[2];
if (!pageName) throw new Error("Please provide a page name");

import fs from "fs";
import path from "path";


const pageComponentDirectory = path.join(process.cwd(), "src", "components", "pages");
const pageDirectory= path.join(process.cwd(), "src");



try {
    // The page component itself
    fs.writeFileSync(path.join(pageComponentDirectory, `${pageName}.html`), `<h1>${pageName}</h1>`);

    // The page route
    const pageContentTemplate = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <include src="components/head.html"></include>
        <title>${pageName}</title>
      </head>
      <body>
        <include src="components/pages/${pageName}.html"></include>
      </body>
    </html>`

    fs.writeFileSync(path.join(pageDirectory, `${pageName}.html`), pageContentTemplate);

    console.log(`Go to ${path.join(pageComponentDirectory, `${pageName}.html`)} to edit the page content. Route file is created at ${path.join(pageDirectory, `${pageName}.html`)}`);
 
} catch (error) {
    console.error(error);
    process.exit(1);
}
    
