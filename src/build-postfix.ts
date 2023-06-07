import { Operator } from "./types/Operator";

const operatorsPrecedence: Record<Operator, number> = {
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
export function buildPostfix(s: string): string[] {
  const operands = [] as string[];
  const operators = [] as Operator[];

  let prev = "";
  for (const c of s) {
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
      const newOperator = c as Operator;
      const newOperatorPrecedence = operatorsPrecedence[newOperator];

      if (
        operators[0] !== undefined &&
        newOperatorPrecedence <= operatorsPrecedence[operators[0]]
      ) {
        operands.push(...operators);
        operators.splice(0, operators.length, newOperator);
      } else {
        operators.unshift(newOperator);
      }
    } else {
      prev += c;
    }
  }

  // We insert the last operand in the array
  if (prev.length > 0) {
    operands.push(prev);
  }

  operands.push(...operators);

  return operands;
}
