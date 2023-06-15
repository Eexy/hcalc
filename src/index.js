"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var build_expression_tree_1 = require("./build-expression-tree");
var build_postfix_1 = require("./build-postfix");
var calc_1 = require("./calc");
var is_valid_expression_1 = require("./is-valid-expression");
var cli_1 = require("./cli");
var save_in_file_1 = require("./save-in-file");
(0, cli_1.cli)()
    .command("calc", "Eval a mathematical expression", function (val) {
    if (!(0, is_valid_expression_1.isValidExpression)(val)) {
        return console.error("Invalid mathematical expresion");
    }
    var postfix = (0, build_postfix_1.buildPostfix)(val);
    var tree = (0, build_expression_tree_1.buildExpressionTree)(postfix);
    var res = (0, calc_1.calc)(tree);
    console.info("".concat(val, " = ").concat(res));
    return res;
}, [
    {
        param: "--save",
        description: "Save result in history",
        handler: save_in_file_1.saveInFile,
    },
])
    .version()
    .help()
    .parse()
    .execute();
