import { appendFileSync } from "fs";

/**
 * @param {string} val
 */
export function saveInHistory(val: string): void {
  const content = `[${generateTimestampString()}] ${val}\n`;

  try {
    appendFileSync("./history.txt", content);
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
