// detect what package manager is being used and run the appropriate command

import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { promisify } from "util";

const readFile = promisify(fs.readFile);

const packageJsonPath = path.join(process.cwd(), "package.json");

const run = async () => {
  try {
    const packageJson = await readFile(packageJsonPath, "utf8");
    const { packageManager } = JSON.parse(packageJson);
    const command = `${packageManager} run dev:all`;
    await execSync(command, { stdio: "inherit" });
  } catch (error) {
    console.error(error);
  }
};

run();
