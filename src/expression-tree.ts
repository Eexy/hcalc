import { Operator } from './types/Operator';

export class TreeNode {
  value: number | Operator;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number | Operator) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
