import { OptionBuilder } from '../../utils/builders/optionBuilder';
import { SlashCommand } from '../commandClasses';
import { isNumber } from '../../utils/utils';
import {
  ApplicationCommandOptionData,
  CommandInteraction,
  Message,
} from 'discord.js';

class PingCommand extends SlashCommand {
  protected get options(): ApplicationCommandOptionData[] {
    return [
      new OptionBuilder('delay', 'NUMBER')
        .withDescription('How long to wait before responding')
        .build()  ,
    ];
  }

  constructor() {
    super('ping', 'Pong!');
  }

  private async wait(time: number) {
    return new Promise<void>((resolve) => {
      setTimeout(() => resolve(), time * 1000);
    });
  }

  async execute(delay: string | number | undefined) {
    if (delay != undefined && isNumber(delay)) {
      await this.wait(Number(delay));
    }
    return 'Pong!';
  }

  async handleInteract(interaction: CommandInteraction) {
    const delay = interaction.options.getNumber('delay');
    await interaction.deferReply();

    const content = await this.execute(delay!);

    interaction.editReply({ content });
  }

  async handleMessage(message: Message, [delay]: string[]) {
    const content = await this.execute(delay);

    message.reply({ content });
  }
}

export const command = PingCommand;
