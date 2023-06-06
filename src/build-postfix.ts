type Operator = '+' | '-' | '/' | '*';

const operatorsPrecedence = {
  '+': 0,
  '-': 0,
  '*': 1,
  '/': 1,
} as Record<Operator, number>;

/**
 * Build postfix expression fron infix
 * @example
 * // returns ["3","5","+"]
 * buildPostfix("3+5");
 */
export function buildPostfix(s: string): string[] {
  const operands = <string[]>[];
  const operators = <Operator[]>[];

  let prev = '';
  for (const c of s) {
    if (['+', '/', '-', '*'].includes(c)) {
      /* 
        When we find an operator we can insert the new operand because it's means we have completed it 
      */
      if (prev.length) {
        operands.push(prev);
        prev = '';
      }

      /* 
        We chech if the new operator has a bigger precedence that the one on top of the stack
         - if it's bigger we put in on the stack
         - else we put all operators on the operand stack and put the new operator in a new empty stack
      */
      const newOperator = c as Operator;
      const newOperatorPrecedence = operatorsPrecedence[newOperator];

      if (
        operators[0] &&
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
  if (prev.length) {
    operands.push(prev);
  }

  operands.push(...operators);

  return operands;
}
