import { Command, Scripticus } from "@customTypes";
import { noMentions } from "../utils/utils";
import { Message } from "discord.js";

class RestartCommand implements Command {
  public readonly name = 'restart';
  public readonly description = 'Restarts the bot!';
  private readonly whitelist = ['90598254688874496', '191085842469486592'];
  
  public async execute(message: Message) {
    if (this.whitelist.includes(message.author.id)) {
      await message.reply({
        content: 'Restarting bot!',
        ...noMentions
      });
      return (message.client as Scripticus).stop();
    }
    message.reply({
      content: 'You cannot use this command!',
      ...noMentions
    });
  }
};

export const command = new RestartCommand();