import { Message, MessageEmbed } from 'discord.js';
import { Command, Scripticus } from '@customTypes';
import { noMentions } from '../utils/utils';
import { Logger } from '../utils/logger';

class HelpCommand implements Command {
  public readonly name = 'help';
  public readonly description =
    'List all of my commands or info about a specific command';
  public readonly aliases = ['commands'];
  public readonly usage = '<commandName>';
  private readonly logger: Logger;

  constructor() {
    this.logger = new Logger('Help');
  }

  public async execute(message: Message, args: string[]) {
    const embed = new MessageEmbed().setColor('#00FF00');
    const client = message.client as Scripticus;
    const { commands } = client;

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
          ...noMentions,
        });
        if (message.channel.type === 'DM') return;
        return message.reply({
          content: "I've sent you a DM with all my commands!",
          ...noMentions,
        });
      } catch (error) {
        this.logger.error(error);
        message.reply({
          content: "it seems like I can't DM you! Do you have DM's disabled?",
          ...noMentions,
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
        ...noMentions,
      });
    }

    embed.setTitle(`**Command**: *${command.name}*`);
    embed.addField('Description:', command.description);
    if (command.aliases != null)
      embed.addField('Aliases:', command.aliases.join(', '));
    if (command.usage != null)
      embed.addField('Usage:', `<prefix>${command.name} ${command.usage}`);
    if (command.options != null) embed.addField('Options:', command.options);

    embed.addField(
      'Cooldown:',
      `${command.cooldown ?? client.defaultCooldown} seconds(s)`
    );

    message.reply({ embeds: [embed], ...noMentions });
  }
}

export const command = new HelpCommand();
