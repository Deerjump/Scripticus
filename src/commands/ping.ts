import { Message } from "discord.js";
import { Command } from "@customTypes/types";

const command: Command = {
  name: "ping",
  description: "Pong!",
  execute: function (message: Message, args?: string[]): void {
    message.reply({ content: "Pong!", allowedMentions: { users: [] } });
  },
  aliases: [],
};

export = command;
