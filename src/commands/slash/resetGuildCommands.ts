import { Scripticus, iSlashCommand } from '@customTypes';
import { noMentions } from '../../utils/utils';
import {
  Message,
  CommandInteraction,
  Guild,
  ChatInputApplicationCommandData,
} from 'discord.js';

class ResetCommand implements iSlashCommand {
  readonly name = 'commandsreset';
  readonly description = 'Reset the application commands in the current server';
  details: ChatInputApplicationCommandData;

  constructor() {
    this.details = {
      name: this.name,
      description: this.description,
      type: 'CHAT_INPUT',
    };
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
