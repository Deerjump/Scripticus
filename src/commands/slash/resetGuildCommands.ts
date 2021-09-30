import { SlashCommand } from '../commandClasses';
import { noMentions } from '../../utils/utils';
import { Scripticus } from '@customTypes';
import {
  Message,
  CommandInteraction,
  Guild,
  ApplicationCommandOptionData,
} from 'discord.js';

class ResetCommand extends SlashCommand {
  protected get options(): ApplicationCommandOptionData[] {
    return [];
  }

  constructor() {
    super('commandsreset', 'Reset the application commands in the current server');
  }

  async execute(client: Scripticus, guild: Guild | null) {
    const commandManager: any =
      guild == null ? client.application?.commands! : guild.commands!;

    const commands = await commandManager.fetch()!;

    for (const [id] of commands) {
      await commandManager.delete(id);
    }

    const remaining = await commandManager.fetch()!;

    return {
      content: `${commands.size - remaining.size} commands deleted`,
      ...noMentions,
    };
  }

  async handleMessage(message: Message) {
    const result = await this.execute(
      message.client as Scripticus,
      message.guild
    );

    await message.reply(result);
  }

  async handleInteract(interaction: CommandInteraction) {
    await interaction.deferReply({ ephemeral: true });

    const result = await this.execute(
      interaction.client as Scripticus,
      interaction.guild
    );

    await interaction.editReply(result);
  }
}

export const command = ResetCommand;
