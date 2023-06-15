export type MathSymbol = "+" | "-" | "/" | "*" | "(" | ")";

export type Operator = Exclude<MathSymbol, "(" | ")">;
