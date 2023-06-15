import { describe, expect, it } from "vitest";
import { replaceNegative } from "../src/replace-negative";

describe("replaceNegative", () => {
  it("should replace negative sign by (0-exp)", () => {
    expect(replaceNegative("-2+4/-1")).toStrictEqual("(0-2)+4/(0-1)");
  });

  it("should do nothing if there is not negative operator", () => {
    expect(replaceNegative("3")).toStrictEqual("3");
  });
});
