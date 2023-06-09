/**
 * @param {string} s
 * @return {boolean}
 */
export function isValidExpression(s: string): boolean {
  const operands = [] as string[];
  let temp = s;

  if (s[0] === "-" || s[0] === "+") {
    temp = "0" + s;
  }

  let prev = "";
  for (const c of temp) {
    if (["+", "-", "*", "/"].includes(c)) {
      if (prev.length) {
        operands.push(prev);
        prev = "";
      }

      const top = operands.pop();

      if (!top) return false;
    } else {
      prev += c;
    }
  }

  if (prev.length) {
    operands.push(prev);
  }

  return operands.length === 1;
}
