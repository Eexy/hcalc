"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showHelp = void 0;
var fs_1 = require("fs");
/**
 * @return {void}
 */
function showHelp() {
    try {
        var content = (0, fs_1.readFileSync)("./help.txt", "utf-8");
        console.info(content);
    }
    catch (_a) {
        console.error("Unable to read help");
    }
}
exports.showHelp = showHelp;
