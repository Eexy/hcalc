import yargs from "yargs";
import { calc } from "./calc";

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
        describe: "A mathematical expresion to evaluate",
      });
    },
    (argv: any) => {
      try {
        const res = calc(argv.exp);
        console.info(res);
      } catch {
        console.error("Unable to evaluate mathematical expression");
      }
    }
  )
  .help().argv;
