"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPostfix = void 0;
var operatorsPrecedence = {
    "+": 0,
    "-": 0,
    "*": 1,
    "/": 1,
};
/**
 * Build postfix expression fron infix
 * @example
 * // returns ["3","5","+"]
 * buildPostfix("3+5");
 *
 * @param {string} s
 * @return {string[]}
 */
function buildPostfix(s) {
    var operands = [];
    var operators = [];
    var temp = s;
    if (s[0] === "-" || s[0] === "+") {
        temp = "0" + s;
    }
    var prev = "";
    for (var _i = 0, temp_1 = temp; _i < temp_1.length; _i++) {
        var c = temp_1[_i];
        if (["+", "/", "-", "*"].includes(c)) {
            /*
              When we find an operator we can insert the new operand because it's means we have completed it
            */
            if (prev.length > 0) {
                operands.push(prev);
                prev = "";
            }
            /*
              We chech if the new operator has a bigger precedence that the one on top of the stack
               - if it's bigger we put in on the stack
               - else we put all operators on the operand stack and put the new operator in a new empty stack
            */
            var newOperator = c;
            var newOperatorPrecedence = operatorsPrecedence[newOperator];
            if (operators[0] !== undefined &&
                newOperatorPrecedence <= operatorsPrecedence[operators[0]]) {
                operands.push.apply(operands, operators);
                operators.splice(0, operators.length, newOperator);
            }
            else {
                operators.unshift(newOperator);
            }
        }
        else {
            prev += c;
        }
    }
    // We insert the last operand in the array
    if (prev.length > 0) {
        operands.push(prev);
    }
    operands.push.apply(operands, operators);
    return operands;
}
exports.buildPostfix = buildPostfix;
