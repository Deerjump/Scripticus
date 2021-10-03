import { EventHandler, Scripticus } from '@customTypes';
import { Collection, Message } from 'discord.js';
import { noMentions } from '../utils/utils';
import { Logger } from '../utils/logger';
import { SlashCommand } from '../commands/commandClasses';

const logger = new Logger('MessageCreate');

function isOnCooldown(
  userId: string,
  cooldowns: Collection<string, number> | undefined
) {
  if (cooldowns == undefined || cooldowns.size === 0) return false;
  const expiration = cooldowns.get(userId);

  return expiration != undefined && Date.now() < expiration;
}

function putOnCooldown(
  userId: string,
  command: SlashCommand | undefined,
  { defaultCooldown, cooldowns }: Scripticus
) {
  if (command == undefined) return;
  const cmdCooldowns = cooldowns.get(command.name)!;
  const cooldown = defaultCooldown * 1000;

  cmdCooldowns.set(userId, Date.now() + cooldown);
  setTimeout(() => cmdCooldowns.delete(userId), cooldown);
}

/**
 * @param message
 * @param commandName
 * @returns whether the messsageCreate handler should exit
 */
function handleCooldowns(message: Message, commandName: string): boolean {
  if (message.channel.type === 'DM') return false;

  const client = message.client as Scripticus;
  const authorId = message.author.id;
  const cmdCooldowns = client.cooldowns.get(commandName)!;

  if (!isOnCooldown(authorId, cmdCooldowns)) {
    putOnCooldown(authorId, client.commands.get(commandName), client);
    return false;
  }

  const timeLeft = (cmdCooldowns.get(authorId)! - Date.now()) / 1000;
  message.react('❌');
  message.react('⏲️');
  message.author.send(
    `Please wait ${timeLeft.toFixed(1)} more ${
      timeLeft == 1 ? 'second' : 'seconds'
    } to use \`${commandName}\` again`
  );

  return true;
}

const eventHandler: EventHandler = {
  event: 'messageCreate',
  handle: (message: Message) => {
    const client = message.client as Scripticus;
    const prefix = client.getPrefix(message);

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift()!.toLowerCase();

    const command =
      client.commands.get(commandName) ||
      client.commands.find(
        (cmd) => cmd.aliases != undefined && cmd.aliases.includes(commandName)
      );

    if (command == undefined) return;

    // Handles command uses with missing arguments
    if (command.args && args.length === 0) {
      let reply = `You didn't provide any arguments, ${message.author}`;
      if (command.usage != undefined) {
        reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
      }

      return message.reply({ content: reply, ...noMentions });
    }

    if (handleCooldowns(message, command.name)) return;

    try {
      command.handleMessage(message, args);
    } catch (error) {
      logger.error(error);
      message.reply({
        content: 'there was an error trying to execute that command!',
        ...noMentions,
      });
    }
  },
};

export = eventHandler;
