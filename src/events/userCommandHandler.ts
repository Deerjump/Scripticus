import { Event, Scripticus } from "@customTypes";
import { Interaction } from "discord.js";
import { Logger } from "../utils/logger";

const logger = new Logger('UserCommandHandler');

const event: Event = {
  name: "interactionCreate",
  async execute(interaction: Interaction) {
  //   if(!interaction.isContextMenu()) return;
  //   const client = interaction.client as Scripticus;
  //   const command = client.userCommands.get(interaction.commandName);

  //   if (command == undefined || command.handleInteract == undefined) return;
  
  //   try {
  //     logger.log(`Executing command: ${command.name}`)
  //     await command.handleInteract(interaction);
  //   } catch (error) {
  //     logger.error(error);
  //     await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
  //   }
  }
}

export = event;