import { TreeNode } from './expression-tree';
import { Operator } from './types/Operator';

export function buildExpressionTree(exp: string[]): TreeNode | null {
  const nodes = [] as TreeNode[];

  for (const [i, v] of exp.entries()) {
    if (['+', '-', '*', '/'].includes(v)) {
      const op = v as Operator;
      const node = new TreeNode(op);
      const right = nodes.pop();
      const left = nodes.pop();

      if (left !== undefined) node.left = left;
      if (right !== undefined) node.right = right;

      if (i === exp.length - 1) return node;

      nodes.push(node);
    } else {
      const num = Number(v);
      nodes.push(new TreeNode(num));
    }
  }

  return null;
}
