import { describe, it, expect } from "vitest";
import { calc } from "../src/calc";

describe("calc", () => {
  it("3+5", () => {
    expect(calc("3+5")).toBe(8);
  });

  it("3+(5^2)", () => {
    expect(calc("3+(5^2)")).toBe(28);
  });

  it("3^0-1", () => {
    expect(calc("3^0-1")).toBe(0);
  });

  it("3+5/2-10", () => {
    expect(calc("3+5/2-10")).toBe(-4.5);
  });

  it("3*2/3", () => {
    expect(calc("3*2/3")).toBe(2);
  });

  it("(3+5)/2", () => {
    expect(calc("(3+5)/2")).toBe(4);
  });

  it("(3+5)/(2-1)", () => {
    expect(calc("(3+5)/(2-1)")).toBe(8);
  });
});
