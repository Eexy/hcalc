"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveInFile = void 0;
var fs_1 = require("fs");
/**
 * @param {string} val
 * @param {string} file
 */
function saveInFile(val, file) {
    if (file === void 0) { file = "history.txt"; }
    var content = "[".concat(generateTimestampString(), "] ").concat(val, "\n");
    console.info(file);
    try {
        (0, fs_1.appendFileSync)("./".concat(file), content);
    }
    catch (_a) {
        console.error("Unable to save in history");
    }
}
exports.saveInFile = saveInFile;
/**
 * @return {string}
 */
function generateTimestampString() {
    var date = new Date();
    var day = date.getDate().toString().padStart(2, "0");
    var month = date.getMonth().toString().padStart(2, "0");
    var year = date.getFullYear().toString().padStart(2, "0");
    var time = "".concat(date.getHours(), ":").concat(date.getMinutes(), ":").concat(date.getSeconds());
    return "".concat(day, " ").concat(month, " ").concat(year, " ").concat(time);
}
