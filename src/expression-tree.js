"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeNode = void 0;
/**
 * Represent a TreeNode
 */
var TreeNode = /** @class */ (function () {
    /**
     * @param {number|Operator} value
     */
    function TreeNode(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
exports.TreeNode = TreeNode;
