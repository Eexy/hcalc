import { readFileSync } from "fs";

/**
 * @return {void}
 */
export function showHelp(): void {
  try {
    const content = readFileSync("./help.txt", "utf-8");
    console.info(content);
  } catch {
    console.error("Unable to read help");
  }
}
