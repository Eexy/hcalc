import { buildExpressionTree } from "./build-expression-tree";
import { buildPostfix } from "./build-postfix";
import { calc } from "./calc";
import { isValidExpression } from "./is-valid-expression";
import { cli } from "./cli";
import { saveInFile } from "./save-in-file";
import { replaceNegative } from "./replace-negative";

cli()
  .command(
    "calc",
    "Eval a mathematical expression",
    (val: string) => {
      const exp = replaceNegative(val);

      if (!isValidExpression(exp)) {
        return console.error("Invalid mathematical expresion");
      }

      const postfix = buildPostfix(exp);
      const tree = buildExpressionTree(postfix);
      const res = calc(tree);
      console.info(`${val} = ${res}`);
      return res;
    },
    [
      {
        param: "--save",
        description: "Save result in history",
        handler: saveInFile,
      },
    ]
  )
  .version(1.5)
  .help()
  .parse()
  .execute();
