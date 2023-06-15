import { describe, expect, it } from "vitest";
import { isValidExpression } from "../src/is-valid-expression";

describe("isValidExpression", () => {
  it("3+5 => true", () => {
    expect(isValidExpression("3+5")).toEqual(true);
  });

  it("+3/ => false", () => {
    expect(isValidExpression("+3/")).toEqual(false);
  });

  it("3+5/2*4 => true", () => {
    expect(isValidExpression("3+5/2*4")).toEqual(true);
  });

  it("3+5/2-7* => false", () => {
    expect(isValidExpression("3+5/2-7*")).toEqual(false);
  });

  it("-3 => true", () => {
    expect(isValidExpression("-3")).toEqual(true);
  });

  it("(3+5)", () => {
    expect(isValidExpression("3+5")).toEqual(true);
  });

  it("((3+5)*1)", () => {
    expect(isValidExpression("((3+5)*1)")).toEqual(true);
  });
});

it("(3+5)*1)", () => {
  expect(isValidExpression("(3+5)*1)")).toEqual(false);
});
