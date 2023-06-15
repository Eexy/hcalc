import { Operator } from "./type";

/**
 * Represent a TreeNode
 */
export class TreeNode {
  value: number | Operator;
  left: TreeNode | null;
  right: TreeNode | null;

  /**
   * @param {number|Operator} value
   */
  constructor(value: number | Operator) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
