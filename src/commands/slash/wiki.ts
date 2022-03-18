import {
  CommandInteraction,
  Message,
  MessageEmbed,
} from 'discord.js';
import { SlashCommand } from '../commandClasses';
import { hidden, noMentions } from '../../utils/utils';
import { Logger } from '../../utils/logger';
import axios from 'axios';

class WikiCommand extends SlashCommand {
  private readonly wikiUrl = 'https://idleon.info/';
  private readonly logger = new Logger('Wiki');

  constructor() {
    super('wiki', 'Seach the Legends of Idleon Wiki!');
    this.commandBuilder.addStringOption((option) =>
      option.setName('query').setDescription('What you want to search for')
    )
    .addBooleanOption(hidden);
  }

  async handleMessage(message: Message, args: string[]): Promise<void> {
    const response = await this.execute(args.join(' '));

    await message.reply({ ...response, ...noMentions });
  }

  async handleInteract(interaction: CommandInteraction) {
    const hidden = interaction.options.getBoolean('hidden') ?? true;
    await interaction.deferReply({ ephemeral: hidden });
    const query = interaction.options.getString('query') ?? undefined;

    const response = await this.execute(query);

    interaction.editReply(response);
  }

  async execute(query?: string) {
    if (query == undefined || !query.length) {
      return {
        embeds: [
          new MessageEmbed()
            .setColor('#FF0000')
            .setTitle(this.wikiUrl)
            .setURL(this.wikiUrl)
            .addField('You could also:', 'Supply a search term!\n!wiki Mafioso'),
        ],
      };
    }

    try {
      const response = await axios.get(`https://idleon.info/w/index.php`, {
        params: { search: query },
      });

      return { content: response.request.res.responseUrl };
    } catch (err) {
      this.logger.error(err);
      return { content: 'An error occured while executing your query' };
    }
  }
}

export const command = WikiCommand;
