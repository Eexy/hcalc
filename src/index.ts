import { buildExpressionTree } from "./build-expression-tree";
import { buildPostfix } from "./build-postfix";
import { calc } from "./calc";
import { isValidExpression } from "./is-valid-expression";
import { saveInHistory } from "./save-in-history";

const exp = process.argv[2];
const params = process.argv.slice(3);

if (exp && isValidExpression(exp)) {
  const postfix = buildPostfix(exp);
  const tree = buildExpressionTree(postfix);
  const val = calc(tree);
  console.info(`${exp} = ${val}`);

  if (params.includes("--save")) {
    saveInHistory(`${exp} = ${val}`);
  }
} else {
  console.info("Invalid expression passed");
}
