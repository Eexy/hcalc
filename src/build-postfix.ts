import { MathSymbol } from "./type";

const operatorsPrecedence: Record<MathSymbol, number> = {
  "+": 0,
  "-": 0,
  "*": 1,
  "/": 1,
  "(": 2,
  ")": 2,
  "^": 3,
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
export function buildPostfix(s: string): string[] {
  const operands = [] as string[];
  const operators = [] as MathSymbol[];

  let temp = s;

  if (s[0] === "-" || s[0] === "+") {
    temp = "0" + s;
  }

  let prev = "";
  for (const c of temp) {
    if (["+", "/", "-", "*", "(", ")", "^"].includes(c)) {
      /*
        When we find an operator we can insert the new operand because it's means we have completed it
      */
      if (prev.length > 0) {
        operands.push(prev);
        prev = "";
      }

      /*
        We check if the new operator has a bigger precedence that the one on top of the stack
         - if the operator's stack is empty we put the new operator on top
         - if the operator has a precedence < to the one on stock
          - if the operator on top is a '(' we put the new operator on the stack
          - else we put all operators in the stack in the operand's stack and we put the new operator on the new empty operator stack
         - if the operator has a bigger precedence than the one on the top
          - if the new operator is ')' we unroll all the operator in the stack and put them in the operand stack until we find the '('
          - else we put the new operator on the stack 
      */
      const newOperator = c as MathSymbol;
      const newOperatorPrecedence = operatorsPrecedence[newOperator];

      if (!operators.length) {
        operators.push(newOperator);
      } else if (newOperator === ")") {
        let i = operators.length - 1;
        while (i >= 0 && operators[i] !== "(") {
          const op = operators.pop();

          if (op) {
            operands.push(op);
          }

          --i;
        }

        operators.pop();
      } else {
        const top = operators[operators.length - 1];
        if (top) {
          if (
            (operatorsPrecedence[top] !== undefined &&
              newOperatorPrecedence > operatorsPrecedence[top]) ||
            top === "("
          ) {
            operators.push(newOperator);
          } else {
            operands.push(...operators.reverse());
            operators.splice(0, operators.length, newOperator);
          }
        }
      }
    } else {
      prev += c;
    }
  }

  // We insert the last operand in the array
  if (prev.length > 0) {
    operands.push(prev);
  }

  operands.push(...operators.reverse());

  return operands;
}
