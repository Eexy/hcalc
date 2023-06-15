"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cli = exports.CLI = void 0;
/**
 * Represent a cli app
 */
var CLI = /** @class */ (function () {
    /**
     * Create a new CLI instance
     */
    function CLI() {
        this.commands = {};
        this.originalArgv = process.argv.slice(2);
    }
    /**
     * Add a new command
     * @param {string} name
     * @param {string} description
     * @param {CommandHandler} handler
     * @param {NewParam[]} [params]
     * @return {CLI}
     */
    CLI.prototype.command = function (name, description, handler, params) {
        var newParams = {};
        if (params) {
            for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {
                var param = params_1[_i];
                newParams[param.param] = {
                    description: param.description,
                    handler: param.handler,
                };
            }
        }
        this.commands[name] = {
            description: description,
            handler: handler,
            params: newParams,
        };
        return this;
    };
    /**
     * Parse passed arguments
     * @return {CLI}
     */
    CLI.prototype.parse = function () {
        var _a;
        var commandName = "";
        var value = "";
        var params = [];
        for (var _i = 0, _b = this.originalArgv.entries(); _i < _b.length; _i++) {
            var _c = _b[_i], i = _c[0], v = _c[1];
            if (i === 0) {
                if (this.commands[v] === undefined) {
                    console.error("Command '".concat(v, "' is not a valid command. You can see all the command by typing help"));
                }
                else {
                    commandName = v;
                }
            }
            else {
                if (/^-+/gi.test(v)) {
                    var param = v.split(/=+/gi);
                    if (param[0]) {
                        params.push({ param: param[0], value: (_a = param[1]) !== null && _a !== void 0 ? _a : undefined });
                    }
                }
                else {
                    value = v;
                }
            }
        }
        if (commandName) {
            this.parsedCommand = { command: commandName, value: value, params: params };
        }
        console.info(this.parsedCommand);
        return this;
    };
    /** execute the parsed command
     * @return {void}
     */
    CLI.prototype.execute = function () {
        if (this.parsedCommand && this.parsedCommand.command) {
            var command = this.commands[this.parsedCommand.command];
            var res = void 0;
            if (command) {
                res = command.handler(this.parsedCommand.value);
                console.info(res);
                for (var _i = 0, _a = this.parsedCommand.params; _i < _a.length; _i++) {
                    var param = _a[_i];
                    var paramHandler = command.params[param.param];
                    if (paramHandler === null || paramHandler === void 0 ? void 0 : paramHandler.handler) {
                        paramHandler.handler(res, param.value);
                    }
                }
            }
            return;
        }
        return console.info("No parsed command");
    };
    /** Add a version command to the app
     * @param {number} [version]
     * @return {CLI}
     */
    CLI.prototype.version = function (version) {
        return this.command("version", "Show version number", function () {
            return console.info("version: ".concat(version !== null && version !== void 0 ? version : 1.0));
        });
    };
    /**
     * Add a help page
     * @return {CLI}
     */
    CLI.prototype.help = function () {
        var _this = this;
        return this.command("help", "Show help", function () {
            for (var _i = 0, _a = Object.entries(_this.commands); _i < _a.length; _i++) {
                var _b = _a[_i], command = _b[0], option = _b[1];
                console.info("".concat(command, "\t").concat(option.description));
            }
        });
    };
    return CLI;
}());
exports.CLI = CLI;
/**
 * Return a new CLI instance
 * @return {CLI}
 */
function cli() {
    return new CLI();
}
exports.cli = cli;
