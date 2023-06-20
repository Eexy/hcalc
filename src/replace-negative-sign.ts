/**
 * Replace negative sign in a expression by a substraction to 0
 *
 * @example
 * // return "(0-3)"
 * replaceNegativeSign("-3")
 *
 * replaceNegativeSign("3")
 *
 * @param {string} exp - a mathematical expression
 * @return {string}
 */
export function replaceNegativeSign(exp: string): string {
  /* 
    Replace negative case in this 3 case
     - when the expression start with a negative number
     - when negative sign is after anoter operator for example 1/-2
     - when there is a negative number inside parenthesis like (-1)
  */

  return exp
    .replace(/^-([0-9]*[.]?[0-9]+).*/g, "(0-$1)")
    .replace(/([+|/|*]+)(-[0-9]*[.]?[0-9]+)/g, "$1(0$2)")
    .replace(/\((-[0-9]*[.]?[0-9]+)\)/g, "(0$1)");
}
