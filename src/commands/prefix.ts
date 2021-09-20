import { Command } from "@customTypes/types";
import { ScripticusBot } from "scripticus";
import { Logger } from "../utils/logger";
const logger = new Logger('Prefix');

const command: Command = {
  name: 'prefix',
  description: 'Changes prefix for current server',
  args: true,
  usage: '<new prefix>',
  async execute(message, args) {
    const whitelist = ['90598254688874496', '191085842469486592']
    if (!whitelist.includes(message.author.id)) {
      message.reply({
        content: 'You cannot use this command!',
        allowedMentions: { users: [] }
      });
    }

    if (message.channel.type === 'DM') {
      return message.reply({
        content: "You can't use this command in a private message!",
        allowedMentions: { users: [] },
      });
    }

    const newPrefix = args[0];
    const guildID = message.guildId!;
    const client = message.client as ScripticusBot;

    try {
      await client.updateGuildPrefix(guildID, newPrefix);

      message.reply({
        content: `Prefix is now sent to ${newPrefix}`,
        allowedMentions: { users: [] },
      });
    } catch (err) {
      logger.log(err);
    }
  },
};

export = command;