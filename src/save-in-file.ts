import { appendFileSync } from "fs";

/**
 * @param {string} val
 * @param {string} file
 */
export function saveInFile(val: string, file = "history.txt"): void {
  const content = `[${generateTimestampString()}] ${val}\n`;

  console.info(file);

  try {
    appendFileSync(`./${file}`, content);
  } catch {
    console.error("Unable to save in history");
  }
}

/**
 * @return {string}
 */
function generateTimestampString(): string {
  const date = new Date();
  const day = date.getDate().toString().padStart(2, "0");
  const month = date.getMonth().toString().padStart(2, "0");
  const year = date.getFullYear().toString().padStart(2, "0");
  const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  return `${day} ${month} ${year} ${time}`;
}
