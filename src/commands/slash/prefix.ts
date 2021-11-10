import { OptionBuilder } from '../../utils/builders/optionBuilder';
import { SlashCommand } from '../commandClasses';
import { noMentions } from '../../utils/utils';
import { format } from 'util';
import {LoggerFactory} from '../../factories/_loggerfactory';
import {ILogger} from '../../types/types';

const _loggerFactory = LoggerFactory.getInstance();
import { ModerationLevel, Scripticus } from '@customTypes';
import { ApplicationCommandOptionData, CommandInteraction, Message } from 'discord.js';

class PrefixCommand extends SlashCommand {
  private logger: ILogger;
  readonly roleRequired: ModerationLevel = 'MOD';
  readonly defaultPermission = false;
  readonly usage = '<new prefix>';
  readonly global = false;
  readonly args = true;
  
  protected generateOptions(): ApplicationCommandOptionData[] {
    return [
      new OptionBuilder('prefix', 'STRING')
      .withDescription('The new bot prefix for your guild')
      .require()
      .build(),
    ];
  }
  
  constructor() {
    super('prefix', 'Changes prefix for current server');
    this.logger = _loggerFactory.Logger('Prefix',format(process.env.LOGGER_TYPE));

  }

  async execute(prefix: string, client: Scripticus, guildId?: string | null) {
    if (guildId == undefined) {
      return {
        content: "You can't use this command in a private message!",
      };
    }

    try {
      await client.updateGuildPrefix(guildId, prefix);

      return { content: `Prefix is now sent to ${prefix}` };
    } catch (err) {
      this.logger.Log(err);
      return { content: `Error setting prefix! ${err}` };
    }
  }

  async handleInteract(interaction: CommandInteraction) {
    await interaction.deferReply({ ephemeral: true });
    const prefix = interaction.options.getString('prefix')!;
    const { client, guildId } = interaction;
    const response = await this.execute(prefix, client as Scripticus, guildId);

    await interaction.editReply(response);
  }

  async handleMessage(message: Message, args: string[]): Promise<void> {
    const newPrefix = args[0];

    const canUse = message.author.id === '191085842469486592';
    if (!canUse) return;

    const response = await this.execute(newPrefix, message.client as Scripticus, message.guildId);

    await message.reply({ ...response, ...noMentions });
  }
}

export const command = PrefixCommand;
