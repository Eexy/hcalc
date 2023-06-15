import { describe, expect, it } from "vitest";
import { buildPostfix } from "../src/build-postfix";

describe("buildPostfix", () => {
  it("should handle precedence with multiple operators", () => {
    expect(buildPostfix("3*5-2/3")).toStrictEqual("35*23/-".split(""));
  });

  it("should handle simple expression", () => {
    expect(buildPostfix("3+5")).toStrictEqual("35+".split(""));
  });

  it("should handle parenthesis", () => {
    expect(buildPostfix("(3+5)*2")).toStrictEqual("35+2*".split(""));
  });
});
