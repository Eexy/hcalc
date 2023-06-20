import { buildExpressionTree } from "./build-expression-tree";
import { buildPostfix } from "./build-postfix";
import { calc } from "./calc";
import { isValidExpression } from "./is-valid-expression";
import { replaceNegative } from "./replace-negative";
import { replaceEmptySign } from "./replace-empty-sign";
import yargs from "yargs";

yargs
  .scriptName("hcalc")
  .usage("$0 <cmd> [args]")
  .command(
    "calc [exp]",
    "Evaluate a mathematical expression",
    (yargs) => {
      yargs.positional("exp", {
        type: "string",
        default: "0",
        describe: "The expression to evaluate",
      });
    },
    function (argv: any) {
      console.info("here");

      const exp = replaceEmptySign(replaceNegative(argv.exp));

      if (!isValidExpression(exp)) {
        return console.error("Invalid mathematical expresion");
      }

      const postfix = buildPostfix(exp);
      const tree = buildExpressionTree(postfix);
      const res = calc(tree);
      console.info(`${argv.exp} = ${res}`);
    }
  )
  .help().argv;
