import { OptionBuilder } from '../../utils/builders/optionBuilder';
import { SlashCommand } from '../commandClasses';
import { Scripticus } from '@customTypes';
import {
  ApplicationCommandOptionData,
  Message,
  CommandInteraction,
  Guild,
  MessageEmbed
} from 'discord.js';

class CommandsCommand extends SlashCommand {
  constructor() {
    super('commands', 'See what commands are on the server');
  }
  protected get options(): ApplicationCommandOptionData[] {
    return [
      new OptionBuilder('guildid', 'STRING')
        .withDescription('A different guildId to use')
        .build(),
    ];
  }

  handleMessage() {
    return;
  }

  async handleInteract(interaction: CommandInteraction) {
    await interaction.deferReply({ ephemeral: true });
    const guildId = interaction.options.getString('guildid');
    const client = interaction.client as Scripticus;

    const guild = guildId == null ? interaction.guild : await client.guilds.fetch(guildId) ;
    
    const response = await this.execute(client, guild);

    await interaction.editReply(response);
  }

  async execute(client: Scripticus, guild: Guild | null) {

    const commands = guild == null ? await client.application?.commands.fetch()! : await guild.commands.fetch() ;

    const embed = new MessageEmbed().setTitle('Commands').addFields(
      commands.map((command) => {
        return { name: command.name, value: command.description };
      })
    );

    return { embeds: [embed] };
  }
}

export const command = CommandsCommand;
