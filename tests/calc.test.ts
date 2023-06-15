import { describe, it, expect } from "vitest";
import { buildPostfix } from "../src/build-postfix";
import { buildExpressionTree } from "../src/build-expression-tree";
import { calc } from "../src/calc";

describe("calc", () => {
  it("3+5", () => {
    const postfix = buildPostfix("3+5");
    const tree = buildExpressionTree(postfix);
    expect(calc(tree)).toBe(8);
  });

  it("3", () => {
    const postfix = buildPostfix("3");
    const tree = buildExpressionTree(postfix);
    expect(calc(tree)).toBe(3);
  })

  it("3+5/2-10", () => {
    const postfix = buildPostfix("3+5/2-10");
    const tree = buildExpressionTree(postfix);
    expect(calc(tree)).toBe(-4.5);
  });

  it("3*2/3", () => {
    const postfix = buildPostfix("3*2/3");
    const tree = buildExpressionTree(postfix);
    expect(calc(tree)).toBe(2);
  });

  it("(3+5)/2", () => {
    const postfix = buildPostfix("(3+5)/2");
    const tree = buildExpressionTree(postfix);
    expect(calc(tree)).toBe(4);
  });

  it("(3+5)/(2-1)", () => {
    const postfix = buildPostfix("(3+5)/(2-1)");
    const tree = buildExpressionTree(postfix);
    expect(calc(tree)).toBe(8);
  });
});
