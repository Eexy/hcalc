import { describe, expect, it } from "vitest";
import { replaceEmptySign } from "../src/replace-empty-sign";

describe("replaceEmptySign", () => {
  it("should replace expression with no sign by a addition with 0", () => {
    expect(replaceEmptySign("3")).toEqual("(0+3)");
  });
});
