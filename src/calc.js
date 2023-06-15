"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calc = void 0;
/**
 * @param {TreeNode | null} tree
 * @return {number}
 */
function calc(tree) {
    if (tree == null)
        return 0;
    /*  */
    if (typeof tree.value === "number") {
        return tree.value;
    }
    return operatorsFunctions[tree.value](calc(tree.left), calc(tree.right));
}
exports.calc = calc;
var operatorsFunctions = {
    "+": function (a, b) { return a + b; },
    "-": function (a, b) { return a - b; },
    "/": function (a, b) { return a / b; },
    "*": function (a, b) { return a * b; },
};
