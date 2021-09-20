import { Event } from "@customTypes/types";
import { Message } from "discord.js";
import { ScripticusBot } from "scripticus";
import { Logger } from '../utils/logger';

const logger = new Logger('MessageCreate');

const event: Event = {
  name: "messageCreate",
  execute: function ([message]: [Message]) {
    // Ensures each server uses its own settings (if defined), doesn't use prefix in dms
    const client = message.client as ScripticusBot;
    const prefix = client.getPrefix(message.guildId!);
    const shouldIgnore =
      (message.channel.type !== "DM" && !message.content.startsWith(prefix)) ||
      message.author.bot;

    if (shouldIgnore) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift()!.toLowerCase();

    const command =
      client.commands.get(commandName) ||
      client.commands.find(
        (cmd) => cmd.aliases != null && cmd.aliases.includes(commandName)
      );

    if (command == null) return;

    // Handles command uses with missing arguments
    if (command.args && args.length === 0) {
      let reply = `You didn't provide any arguments, ${message.author}`;

      if (command.usage) {
        reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
      }

      return message.reply({ content: reply, allowedMentions: { users: [] } });
    }

    try {
      command.execute(message, args);
    } catch (error) {
      logger.error(error);
      message.reply({
        content: "there was an error trying to execute that command!",
        allowedMentions: { users: [] },
      });
    }
  },
};

export = event;
