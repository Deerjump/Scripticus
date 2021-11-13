import {
  ApplicationCommandOptionChoice,
  ApplicationCommandSubCommandData,
  ApplicationCommandChoicesData,
  ApplicationCommandNonOptionsData,
  ApplicationCommandOptionType,
  ApplicationCommandOptionData,
} from 'discord.js';

import { LoggerFactory } from '../../factories/_loggerfactory';
import { ILogger } from '../../types/types';
export class OptionBuilder {
  private choices: ApplicationCommandOptionChoice[] = [];
  private subCommands: ApplicationCommandSubCommandData[] = [];
  private options: (ApplicationCommandChoicesData | ApplicationCommandNonOptionsData)[] = [];
  private logger: ILogger;

  constructor(
    private name: string,
    private type: ApplicationCommandOptionType,
    private description?: string,
    private required: boolean = false
  ) {
    const _loggerFactory = LoggerFactory.getInstance();

    this.logger = _loggerFactory.Logger('OptionBuilder', process.env.LOGGER_TYPE!);
  }

  private readonly hasChoices = ['NUMBER', 'STRING', 'INTEGER'];

  withDescription(description: string) {
    this.description = description;
    return this;
  }

  withChoices(...choices: ApplicationCommandOptionChoice[]) {
    if (choices.length > 25 || [...this.choices, ...choices].length > 25) {
      throw new RangeError('Exceeded 25 ApplicationChoice limit');
    }
    if (!this.hasChoices.includes(this.type)) {
      this.logger.warn(`Tried to add choices to option of type: ${this.type}. They won't be added`);
      return this;
    }
    this.choices = choices;
    return this;
  }

  withOptions(...options: ApplicationCommandOptionData[]) {
    if (
      options.length > 25 ||
      [...options, ...this.options].length > 25 ||
      [...options, ...this.subCommands].length > 25
    ) {
      throw new RangeError(`Exceeded 25 ApplicationCommand limit`);
    }
    if (this.type === 'SUB_COMMAND_GROUP')
      this.subCommands = [...(options as ApplicationCommandSubCommandData[]), ...this.subCommands];

    this.options = [
      ...this.options,
      ...(options as (ApplicationCommandChoicesData | ApplicationCommandNonOptionsData)[]),
    ];

    return this;
  }

  require() {
    this.required = true;
    return this;
  }

  build(): ApplicationCommandOptionData {
    const base = {
      name: this.name!,
      description: this.description!,
      required: this.required,
    };

    // this is to satisfy typings.
    if (this.type === 'SUB_COMMAND_GROUP') {
      return {
        ...base,
        type: 'SUB_COMMAND_GROUP',
        options: this.subCommands,
      };
    }

    return {
      ...base,
      type: this.type,
      choices: this.choices,
      options: this.options,
    };
  }
}
