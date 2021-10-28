import { OptionBuilder } from '../../utils/builders/optionBuilder';
import { formulas } from '../../resources/formulas';
import { SlashCommand } from '../commandClasses';
import { noMentions } from '../../utils/utils';
import { LavaFormulas } from '@customTypes';
import { ApplicationCommandOptionData, CommandInteraction, Message } from 'discord.js';

class LavaMathCommand extends SlashCommand {
  protected generateOptions(): ApplicationCommandOptionData[] {
    return Object.entries(formulas).map(([key, formula]) => {
      const params =
        formula.length === 1
          ? [new OptionBuilder('x', 'NUMBER').withDescription('x').require().build()]
          : [
              new OptionBuilder('x', 'NUMBER').withDescription('x').require().build(),
              new OptionBuilder('y', 'NUMBER').withDescription('y').require().build(),
              new OptionBuilder('z', 'NUMBER').withDescription('z').require().build(),
            ];
      return new OptionBuilder(key, 'SUB_COMMAND')
        .withDescription(formula.toString())
        .withOptions(...params)
        .build();
    });
  }
  readonly usage = '<option> <x> <y> <z>';
  readonly args = true;
  constructor() {
    super('lavamath', 'A few helpful math calculations that LavaFlame2 uses!');
  }

  execute(option: string, ...args: number[]) {
    const formula = formulas[option as keyof LavaFormulas];

    if (formula == undefined) {
      return {
        content: `\`${option}\` is not a valid option`,
      };
    }

    const argsNeeded = formula.length;

    if (args.length < argsNeeded) {
      return {
        content: `That formula needs ${argsNeeded} ${argsNeeded === 1 ? 'number' : 'numbers'}!`,
      };
    }

    const answer = formula(...args);
    return {
      content: `The answer is ${answer.toFixed(2)}`,
      ...noMentions,
    };
  }

  async handleInteract(interaction: CommandInteraction) {
    const hidden = interaction.options.getBoolean('hiddden') ?? true;
    await interaction.deferReply({ ephemeral: hidden });
    const option = interaction.options.getSubcommand();
    const x = interaction.options.getNumber('x')!;
    const y = interaction.options.getNumber('y')!;
    const z = interaction.options.getNumber('z')!;

    const result = this.execute(option, x, y, z);

    interaction.editReply(result);
  }

  async handleMessage(message: Message, args: string[]): Promise<void> {
    const option = args.shift()!.toLowerCase();
    const nums = args.map((arg) => parseFloat(arg));

    const result = this.execute(option, ...nums);

    await message.reply({ ...result, ...noMentions });
  }
}

export const command = LavaMathCommand;
