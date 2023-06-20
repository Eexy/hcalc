import { buildExpressionTree } from "./build-expression-tree";
import { buildPostfix } from "./build-postfix";
import { evalTree } from "./eval-tree";
import { replaceNegativeSign } from "./replace-negative-sign";
import { isValidExpression } from "./is-valid-expression";

/**
 * Evaluate a mathematical expression
 * @param {string} exp - A mathematical expression
 * @return {number}
 */
export function calc(exp: string): number {
  const formatedExpression = replaceNegativeSign(exp);

  if (!isValidExpression(formatedExpression)) {
    throw new Error("Invalid mathematical expression");
  }

  const postfix = buildPostfix(formatedExpression);
  const tree = buildExpressionTree(postfix);
  return evalTree(tree);
}
