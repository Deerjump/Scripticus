import { formulas } from '../../resources/formulas';
import { SlashCommand } from '../commandClasses';
import { LavaFormulas } from '@customTypes';
import { CommandInteraction } from 'discord.js';

class LavaMathCommand extends SlashCommand {
  constructor() {
    super('lavamath', 'A few helpful math calculations that LavaFlame2 uses!');
    Object.entries(formulas).forEach(([key, formula]) => {
      this.commandBuilder.addSubcommand((command) => {
        command.setName(key).setDescription(formula.toString());
        command.addNumberOption(o => o.setName('x').setDescription('x').setRequired(true));

        if (formula.length > 1) {
          command.addNumberOption(o => o.setName('y').setDescription('y').setRequired(true));
          command.addNumberOption(o => o.setName('z').setDescription('z').setRequired(true));
        }

        return command;
      });
    });
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
}

export const command = LavaMathCommand;
