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

class HelpCommand extends SlashCommand {
  readonly usage = '<commandName>';
  get options(): ApplicationCommandOptionData[] {
    return [
      {
        name: 'command',
        type: 'STRING',
        description: 'Which command to show information about',
        choices: this.client.commands.map((command) => {
          return { name: command.name, value: command.name };
        }),
      },
      hidden,
    ];
  }
  constructor(private client: Scripticus) {
    super('help', 'List all of my commands or info about a specific command');
    this.client = client;
  }

  execute(option: string, commands: Collection<string, SlashCommand>) {
    const embed = new MessageEmbed().setColor('#00FF00');

    if (option == undefined) {
      embed.setTitle('Help Command');
      embed.addField(
        'Commands:',
        commands
          .map(
            (command) =>
              `**${command.name}**: ${
                command.description
              }\n`
          )
          .join('\n')
      );
      return { embeds: [embed] };
    }

    const command =
      commands.get(option) ||
      commands.find(
        (c) => c.aliases != undefined && c.aliases.includes(option)
      );

    if (command == undefined) {
      return {
        content: "That's not a valid command",
      };
    }

    embed.setTitle(`**Command**: *${command.name}*`);
    embed.addField('Description:', command.description);
    if (command.aliases != undefined)
      embed.addField('Aliases:', command.aliases.join(', '));
    if (command.usage != undefined)
      embed.addField('Usage:', `<prefix>${command.name} ${command.usage}`);
    embed.addField(
      'SlashCommand:',
      command.details != undefined ? 'Yes' : 'No'
    );
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

  async handleMessage(message: Message, [command]: string[]): Promise<void> {
    const client = message.client as Scripticus;
    const response = this.execute(command, client.commands);

    message.reply({ ...response, ...noMentions });
  }
}

export const command = HelpCommand;
