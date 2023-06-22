import yargs from "yargs";
import { calc } from "./calc";
import { saveInFile } from "./save-in-file";
import { readFileSync } from "fs";
import { deleteLog } from "./delete-log";

yargs
  .scriptName("hcalc")
  .usage("$0 <cmd> [args]")
  .command(
    "calc [exp]",
    "Evaluate a mathematical expression",
    (yargs) => {
      yargs
        .positional("exp", {
          type: "string",
          default: "0",
          describe: "A mathematical expresion to evaluate",
        })
        .option("s", {
          defaultDescription: "Save result in a file",
          type: "string",
          alias: "save",
          boolean: true,
        });
    },
    (argv: any) => {
      try {
        const res = calc(argv.exp);
        console.info(`${argv.exp} = ${res}`);

        if (argv.s) {
          saveInFile(`${argv.exp} = ${res}`, "history.txt");
        }
      } catch {
        console.error("Unable to evaluate mathematical expression");
      }
    }
  )
  .command(
    "log",
    "Show log",
    (yargs) => {
      yargs.option("--delete", {
        alias: "d",
        defaultDescription: "Delete log history",
        boolean: true,
      });
    },
    (argv: any) => {
      if (argv.delete) {
        deleteLog();
      } else {
        try {
          const data = readFileSync("./history.txt", {
            encoding: "utf8",
            flag: "r",
          });
          console.info(data);
        } catch {
          console.error("Unable to read history");
        }
      }
    }
  )
  .help().version("2.5.0").argv;
