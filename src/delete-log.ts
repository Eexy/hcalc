import { writeFileSync } from "fs";

/**
 * Clear history
 */
export function deleteLog() {
  try {
    writeFileSync("./history.txt", "", { encoding: "utf-8" });
  } catch {
    console.error("Unable to delete history");
  }
}
