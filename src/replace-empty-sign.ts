/**
 * Replace expression with no sign by an addition with zero to be considerate
 * as a valid mathematical expression
 *
 * @example
 * //returns "(0+3)"
 * replaceEmptySign("3")
 *
 * @param {string} s
 * @return {string}
 */
export function replaceEmptySign(s: string): string {
  return s.replace(/^([0-9]*[.]?[0-9]+)$/g, "(0+$1)");
}
