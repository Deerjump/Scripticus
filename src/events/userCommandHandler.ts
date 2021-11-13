import { EventHandler } from "@customTypes";
import { Interaction } from "discord.js";

const eventHandler: EventHandler = {
  event: "interactionCreate",
  async handle(interaction: Interaction) {
  //   if(!interaction.isContextMenu()) return;
  //   const client = interaction.client as Scripticus;
  //   const command = client.userCommands.get(interaction.commandName);

  //   if (command == undefined || command.handleInteract == undefined) return;
  
  //   try {
  //     logger.Log(`Executing command: ${command.name}`)
  //     await command.handleInteract(interaction);
  //   } catch (error) {
  //     logger.Error(error);
  //     await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
  //   }
  }
}

export = eventHandler;