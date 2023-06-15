"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildExpressionTree = void 0;
var expression_tree_1 = require("./expression-tree");
/**
 * @param {string[]} exp
 * @return {TreeNode | null}
 */
function buildExpressionTree(exp) {
    var nodes = [];
    for (var _i = 0, _a = exp.entries(); _i < _a.length; _i++) {
        var _b = _a[_i], i = _b[0], v = _b[1];
        if (["+", "-", "*", "/"].includes(v)) {
            var node = new expression_tree_1.TreeNode(v);
            var right = nodes.pop();
            var left = nodes.pop();
            if (left !== undefined)
                node.left = left;
            if (right !== undefined)
                node.right = right;
            if (i === exp.length - 1)
                return node;
            nodes.push(node);
        }
        else {
            var num = Number(v);
            nodes.push(new expression_tree_1.TreeNode(num));
        }
    }
    return null;
}
exports.buildExpressionTree = buildExpressionTree;
