import { describe, expect, it } from "vitest";
import { replaceNegativeSign } from "../src/replace-negative-sign";

describe("formatExpression", () => {
  it("-4", () => {
    expect(replaceNegativeSign("-4")).toBe("(0-4)");
  });

  it("(-4)", () => {
    expect(replaceNegativeSign("(-4)")).toBe("(0-4)");
  });

  it("1-4", () => {
    expect(replaceNegativeSign("1-4")).toBe("1-4");
  });

  it("1/-4", () => {
    expect(replaceNegativeSign("1/-4")).toBe("1/(0-4)");
  });
});
