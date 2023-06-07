import { TreeNode } from './expression-tree';
import { Operator } from './types/Operator';

export function calc(tree: TreeNode | null): number {
  if (!tree) return 0;

  if (typeof tree.value === 'number') {
    return tree.value;
  }

  return operatorsFunctions[tree.value](calc(tree.left), calc(tree.right));
}

const operatorsFunctions = {
  '+': (a: number, b: number) => a + b,
  '-': (a: number, b: number) => a - b,
  '/': (a: number, b: number) => a / b,
  '*': (a: number, b: number) => a * b,
} as Record<Operator, (a: number, b: number) => number>;
