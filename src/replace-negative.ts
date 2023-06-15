/**
 * @param {string} s
 * @return {string}
 */
export function replaceNegative(s: string): string {
  return s.replace(/[+|\\|*|-]*(-[0-9]*[.]?[0-9]+)/g, "(0$1)");
}
