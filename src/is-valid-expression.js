"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidExpression = void 0;
/**
 * @param {string} s
 * @return {boolean}
 */
function isValidExpression(s) {
    var operands = [];
    var temp = s;
    if (s[0] === "-" || s[0] === "+") {
        temp = "0" + s;
    }
    var prev = "";
    for (var _i = 0, temp_1 = temp; _i < temp_1.length; _i++) {
        var c = temp_1[_i];
        if (["+", "-", "*", "/"].includes(c)) {
            if (prev.length) {
                operands.push(prev);
                prev = "";
            }
            var top_1 = operands.pop();
            if (!top_1)
                return false;
        }
        else {
            prev += c;
        }
    }
    if (prev.length) {
        operands.push(prev);
    }
    return operands.length === 1;
}
exports.isValidExpression = isValidExpression;
