import { Scripticus, iSlashCommand } from '@customTypes';
import { noMentions } from '../../utils/utils';
import { Logger } from '../../utils/logger';
import {
  ChatInputApplicationCommandData,
  CommandInteraction,
  Message,
} from 'discord.js';

class PrefixCommand implements iSlashCommand {
  readonly name = 'prefix';
  readonly description = 'Changes prefix for current server';
  readonly args = true;
  readonly usage = '<new prefix>';
  readonly details: ChatInputApplicationCommandData;
  private readonly logger: Logger;

  constructor() {
    this.details = {
      name: this.name,
      description: this.description,
      type: 'CHAT_INPUT',
      options: [
        {
          name: 'prefix',
          description: 'The new bot prefix for your guild',
          type: 'STRING',
          required: true,
        },
      ],
    };
    this.logger = new Logger('Prefix');
  }

  async execute(
    prefix: string,
    userId: string,
    client: Scripticus,
    guildId?: string | null
  ) {
    const whitelist = ['90598254688874496', '191085842469486592'];
    if (!whitelist.includes(userId)) {
      return {
        content: 'You cannot use this command!',
      };
    }

    if (guildId == undefined) {
      return {
        content: "You can't use this command in a private message!",
      };
    }

    try {
      await client.updateGuildPrefix(guildId, prefix);

      return { content: `Prefix is now sent to ${prefix}` };
    } catch (err) {
      this.logger.log(err);
      return { content: `Error setting prefix! ${err}` };
    }
  }

  async handleInteract(interaction: CommandInteraction) {
    await interaction.deferReply({ ephemeral: true });
    const prefix = interaction.options.getString('prefix')!;
    const userId = interaction.user.id;
    const { client, guildId } = interaction;
    const response = await this.execute(
      prefix,
      userId,
      client as Scripticus,
      guildId
    );

    await interaction.editReply(response);
  }

  async handleMessage(message: Message, args: string[]): Promise<void> {
    const newPrefix = args[0];
    const response = await this.execute(
      newPrefix,
      message.author.id,
      message.client as Scripticus,
      message.guildId
    );

    await message.reply({ ...response, ...noMentions });
  }
}

export const command = PrefixCommand;
