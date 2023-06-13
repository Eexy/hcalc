type CommandHandler = (...args: any[]) => any;

type CommandParam = {
  description?: string;
  handler?: CommandHandler;
};

type Command = {
  description: string;
  handler: CommandHandler;
  params: Record<string, CommandParam>;
};

type NewParam = CommandParam & { param: string };

type ParsedParam = { param: string; value?: any };

type ParsedCommand = { command: string; value: string; params: ParsedParam[] };

/**
 * Represent a cli app
 */
export class CLI {
  commands: Record<string, Command>;
  originalArgv: string[];
  parsedCommand?: ParsedCommand;

  /**
   * Create a new CLI instance
   */
  constructor() {
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
  command(
    name: string,
    description: string,
    handler: CommandHandler,
    params?: NewParam[]
  ): CLI {
    const newParams: Record<string, CommandParam> = {};

    if (params) {
      for (const param of params) {
        newParams[param.param] = {
          description: param.description,
          handler: param.handler,
        };
      }
    }

    this.commands[name] = {
      description,
      handler,
      params: newParams,
    };

    return this;
  }

  /**
   * Parse passed arguments
   * @return {CLI}
   */
  parse(): CLI {
    let commandName = "";
    let value = "";
    const params: ParsedParam[] = [];

    for (const [i, v] of this.originalArgv.entries()) {
      if (i === 0) {
        if (this.commands[v] === undefined) {
          console.error(
            `Command '${v}' is not a valid command. You can see all the command by typing help`
          );
        } else {
          commandName = v;
        }
      } else {
        if (/^-+/gi.test(v)) {
          const param = v.split(/=+/gi);
          if (param[0]) {
            params.push({ param: param[0], value: param[1] ?? undefined });
          }
        } else {
          value = v;
        }
      }
    }

    if (commandName) {
      this.parsedCommand = { command: commandName, value, params };
    }

    console.info(this.parsedCommand);

    return this;
  }

  /** execute the parsed command
   * @return {void}
   */
  execute(): void | undefined {
    if (this.parsedCommand && this.parsedCommand.command) {
      const command = this.commands[this.parsedCommand.command];
      let res: any;

      if (command) {
        res = command.handler(this.parsedCommand.value);

        console.info(res);

        for (const param of this.parsedCommand.params) {
          const paramHandler = command.params[param.param];

          if (paramHandler?.handler) {
            paramHandler.handler(res, param.value);
          }
        }
      }

      return;
    }

    return console.info("No parsed command");
  }

  /** Add a version command to the app
   * @param {number} [version]
   * @return {CLI}
   */
  version(version?: number): CLI {
    return this.command("version", "Show version number", () =>
      console.info(`version: ${version ?? 1.0}`)
    );
  }

  /**
   * Add a help page
   * @return {CLI}
   */
  help(): CLI {
    return this.command("help", "Show help", () => {
      for (const [command, option] of Object.entries(this.commands)) {
        console.info(`${command}\t${option.description}`);
      }
    });
  }
}

/**
 * Return a new CLI instance
 * @return {CLI}
 */
export function cli(): CLI {
  return new CLI();
}
