import { SlashCommand } from '../commandClasses';
import { isNumber } from '../../utils/utils';
import { ChatInputCommandInteraction } from 'discord.js';

class PingCommand extends SlashCommand {

  constructor() {
    super('ping', 'Pong!');
    this.commandBuilder.addIntegerOption((option) =>
      option.setName('delay').setDescription('How long to wait before responding')
    );
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

  async handleInteract(interaction: ChatInputCommandInteraction) {
    const delay = interaction.options.getInteger('delay');
    await interaction.deferReply();

    const content = await this.execute(delay!);

    interaction.editReply({ content });
  }
}

export const command = PingCommand;
