import { readFileSync, writeFileSync } from "fs";
import { buildExpressionTree } from "./build-expression-tree";
import { buildPostfix } from "./build-postfix";
import { calc } from "./calc";
import { isValidExpression } from "./is-valid-expression";
import { saveInHistory } from "./save-in-history";
import { showHelp } from "./show-help";

const params = process.argv.slice(2);

if (params[0] === "calc" && params[1] && isValidExpression(params[1])) {
  const postfix = buildPostfix(params[1]);
  const tree = buildExpressionTree(postfix);
  const val = calc(tree);
  console.info(`${params[1]} = ${val}`);

  if (params.includes("--save")) {
    saveInHistory(`${params[0]} = ${val}`);
  }
} else if (params[0] === "-log") {
  if (params[1] && params[1] === "--clear") {
    writeFileSync("./history.txt", "", "utf-8");
  } else {
    try {
      const content = readFileSync("./history.txt", "utf-8");
      console.info(content);
    } catch {
      console.error(
        "Unable to get history. File doesn't exist or is corrupted"
      );
    }
  }
} else if (params[0] === "-h" || params[0] === "-help") {
  showHelp();
} else {
  console.error(
    "Invalid params passed. You can see the list of options by using '-help' or '-h'"
  );
}
