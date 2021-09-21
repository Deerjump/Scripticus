import { Logger } from '../utils/logger';
import { Command, Scripticus } from '@customTypes/types';
import { Collection, Message, MessageEmbed } from 'discord.js';

const logger = new Logger('Help');

let commands: Collection<string, Command>;

class HelpCommand implements Command {
  public readonly name = 'help';
  public readonly description =
    'List all of my commands or info about a specific command';
  public readonly aliases = ['commands'];
  public readonly usage = '<commandName>';

  public init(client: Scripticus) {
    commands = client?.commands ?? new Collection<string, Command>();
  }

  public async execute(message: Message, args: string[]) {
    const embed = new MessageEmbed().setColor('#00FF00');

    if (!args.length) {
      embed.setTitle('Help Command');
      embed.addField(
        'Commands:',
        commands
          .map((command) => `**${command.name}**: ${command.description}`)
          .join('\n')
      );
      try {
        await message.author.send({
          embeds: [embed],
          allowedMentions: { users: [] },
        });
        if (message.channel.type === 'DM') return;
        return message.reply({
          content: "I've sent you a DM with all my commands!",
          allowedMentions: { users: [] },
        });
      } catch (error) {
        logger.error(error);
        message.reply({
          content: "it seems like I can't DM you! Do you have DM's disabled?",
          allowedMentions: { users: [] },
        });
      }
      return;
    }
    const name = args[0].toLowerCase();
    const command =
      commands.get(name) ||
      commands.find((c) => c.aliases != null && c.aliases.includes(name));

    if (command == null) {
      return message.reply({
        content: "That's not a valid command",
        allowedMentions: { users: [] },
      });
    }

    embed.setTitle(`**Command**: *${command.name}*`);
    embed.addField('Description:', command.description);
    if (command.aliases != null)
      embed.addField('Aliases:', command.aliases.join(', '));
    if (command.usage != null)
      embed.addField('Usage:', `<prefix>${command.name} ${command.usage}`);
    if (command.options != null) embed.addField('Options:', command.options);

    const client = message.client as Scripticus;
    embed.addField(
      'Cooldown:',
      `${command.cooldown ?? client.defaultCooldown} seconds(s)`
    );

    message.reply({ embeds: [embed], allowedMentions: { users: [] } });
  }
}

export const command = new HelpCommand();
