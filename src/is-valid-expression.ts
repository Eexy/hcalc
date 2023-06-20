/**
 * Check if a string a valid mathematical expression
 *
 * @example
 * //return true
 * isValidExpression("3")
 *
 * @example
 * // return false
 * isValidExpression("/2")
 *
 * @param {string} exp
 * @return {boolean}
 */
export function isValidExpression(exp: string): boolean {
  const operands: string[] = [];
  const parenthesis: string[] = [];

  let prev = "";
  for (const c of exp) {
    if (["+", "-", "*", "/", "(", ")"].includes(c)) {
      if (prev.length) {
        operands.push(prev);
        prev = "";
      }

      if (c === "(") {
        parenthesis.push("(");
      } else if (c === ")") {
        const last = parenthesis.pop();

        if (!last) return false;
      } else {
        const top = operands.pop();
        if (!top) return false;
      }
    } else {
      prev += c;
    }
  }

  if (prev.length) {
    operands.push(prev);
  }

  operands.pop();

  return operands.length === 0;
}
