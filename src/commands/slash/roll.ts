import { hidden, isNumber, noMentions } from '../../utils/utils';
import { SlashCommand } from '../commandClasses';
import { ChatInputCommandInteraction, Message } from 'discord.js';

class RollCommand extends SlashCommand {
  readonly usage = '<sides>';
  readonly args = true;

  constructor() {
    super('roll', 'Roll a dice! 🎲');
    this.commandBuilder
      .addIntegerOption((option) =>
        option.setName('max').setDescription('How high you can roll').setRequired(true)
      )
      .addBooleanOption(hidden);
  }

  private diceRoll(num: number): number {
    return Math.ceil(Math.random() * num);
  }

  execute(max: number) {
    if (max <= 0) {
      return {
        content: 'You must provide a number greater than 1!',
      };
    }
    const roll = this.diceRoll(max);

    return {
      content: `You rolled a ${roll} out of ${max}! 🎲`,
    };
  }

  async handleInteract(interaction: ChatInputCommandInteraction) {
    const hidden = interaction.options.getBoolean('hiddden') ?? true;
    await interaction.deferReply({ ephemeral: hidden });
    const max = interaction.options.getInteger('max', true);

    const response = this.execute(max);

    await interaction.editReply(response);
  }

  async handleMessage(message: Message, [arg]: string[]): Promise<any> {
    if (!isNumber(arg)) {
      return message.reply({
        content: 'You must provide a number greater than 1!',
        ...noMentions,
      });
    }
    const max = Number(arg);

    const response = this.execute(max);

    return message.reply({ ...response, ...noMentions });
  }
}

export const command = RollCommand;
