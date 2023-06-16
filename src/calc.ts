import { TreeNode } from "./expression-tree";
import { Operator } from "./type";

/**
 * @param {TreeNode | null} tree
 * @return {number}
 */
export function calc(tree: TreeNode | null): number {
    
  if (tree == null) return 0;

  if (typeof tree.value === "number") {
    return tree.value;
  }

  return operatorsFunctions[tree.value](calc(tree.left), calc(tree.right));
}

const operatorsFunctions: Record<Operator, (a: number, b: number) => number> = {
  "+": (a: number, b: number) => a + b,
  "-": (a: number, b: number) => a - b,
  "/": (a: number, b: number) => a / b,
  "*": (a: number, b: number) => a * b,
  "^": (a: number, b: number) => {
    if (b === 0) return 1;

    return Math.pow(a, b);
  },
};
