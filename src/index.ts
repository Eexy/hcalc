import { buildExpressionTree } from "./build-expression-tree";
import { buildPostfix } from "./build-postfix";
import { calc } from "./calc";
import { isValidExpression } from "./is-valid-expression";
import { cli } from "./cli";
import { saveInHistory } from "./save-in-history";

cli()
  .command(
    "calc",
    "Eval a mathematical expression",
    (val: string) => {
      if (!isValidExpression(val)) {
        return console.error("Invalid mathematical expresion");
      }

      const postfix = buildPostfix(val);
      const tree = buildExpressionTree(postfix);
      const res = calc(tree);
      console.info(`${val} = ${res}`);
      return res;
    },
    [
      {
        param: "--save",
        description: "Save result in history",
        handler: saveInHistory,
      },
    ]
  )
  .version()
  .help()
  .parse()
  .execute();
