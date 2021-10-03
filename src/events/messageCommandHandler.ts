import { EventHandler, Scripticus } from "@customTypes";
import { Interaction } from "discord.js";
import { Logger } from "../utils/logger";

const logger = new Logger('MessageCommandHandler');

const eventHandler: EventHandler = {
  event: "interactionCreate",
  async handle(interaction: Interaction) {
    // if(!interaction.isContextMenu()) return;

    // const client = interaction.client as Scripticus;
    // const command = client.messageCommands.get(interaction.commandName);

    // if (command == undefined || command.handleInteract == undefined) return;
  
    // try {
    //   await command.handleInteract(interaction);
    // } catch (error) {
    //   logger.error(error);
    //   await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    // }
  }
}

export = eventHandler;