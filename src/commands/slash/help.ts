import { hidden, noMentions } from '../../utils/utils';
import { Scripticus } from '@customTypes';
import { SlashCommand } from '../commandClasses';
import {
  ApplicationCommandOptionData,
  Collection,
  CommandInteraction,
  Message,
  MessageEmbed,
} from 'discord.js';

const test: [name: string, value: string][] = [['test', 'testy']];

class HelpCommand extends SlashCommand {

  constructor(private client: Scripticus) {
    super('help', 'List all of my commands or info about a specific command');
    this.client = client;
    this.commandBuilder.addBooleanOption(hidden).addStringOption((option) =>
      option
        .setName('command')
        .setDescription('which command to show information about')
        .setChoices(
          this.client.commands.map((command) => {
            const tuple: [name: string, value: string] = [command.name, command.name];
            return tuple;
          })
        )
    );
  }

  execute(option: string, commands: Collection<string, SlashCommand>) {
    const embed = new MessageEmbed().setColor('#00FF00');

    if (option == undefined) {
      embed.setTitle('Help Command');
      embed.addField(
        'Commands:',
        commands.map((command) => `**${command.name}**: ${command.description}\n`).join('\n')
      );
      return { embeds: [embed] };
    }

    const command = commands.get(option);

    if (command == undefined) {
      return {
        content: "That's not a valid command",
      };
    }

    embed.setTitle(`**Command**: *${command.name}*`);
    embed.addField('Description:', command.description);

    return { embeds: [embed] };
  }

  async handleInteract(interaction: CommandInteraction) {
    const hidden = interaction.options.getBoolean('hidden') ?? true;
    await interaction.deferReply({ ephemeral: hidden });

    const client = interaction.client as Scripticus;
    const command = interaction.options.getString('command')!;
    const response = this.execute(command!, client.commands);

    interaction.editReply(response);
  }
}

export const command = HelpCommand;
