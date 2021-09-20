import { Command } from "@customTypes/types";
import { MessageEmbed } from "discord.js";
import { Logger } from "../utils/logger";
import fetch from 'node-fetch';

const logger = new Logger("Wiki");
const wikiUrl = "https://idleon.info/";

const command: Command = {
  name: "wiki",
  description: "Seach the Legends of Idleon Wiki!",
  usage: "<search word>",
  async execute(message, args) {
    if (!args.length) {
      return message.reply({
        embeds: [
          new MessageEmbed()
            .setColor("#FF0000")
            .setTitle(wikiUrl)
            .setURL(wikiUrl)
            .addField(
              "You could also:",
              "Supply a search term!\n!wiki Mafioso"
            ),
        ],
        allowedMentions: { users: [] },
      });
    }

    try {
      const query = new URLSearchParams({ search: args.join(" ") });
      const res = await fetch(
        `https://idleon.info/w/index.php?${query.toString()}`
      );
      await message.reply({ content: res.url, allowedMentions: { users: [] } });
    } catch (err) {
      logger.error(err);
    }
  },
};

export = command;