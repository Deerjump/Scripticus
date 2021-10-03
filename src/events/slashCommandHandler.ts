import { EventHandler, Scripticus } from "@customTypes";
import { Interaction } from "discord.js";
import { Logger } from "../utils/logger";

const logger = new Logger('SlashCommandHandler');

const eventHandler: EventHandler = {
  event: "interactionCreate",
  async handle(interaction: Interaction) {
    if(!interaction.isCommand()) return;
    const client = interaction.client as Scripticus;
    const command = client.commands.get(interaction.commandName);

    if (command == undefined || command.handleInteract == undefined) return;
  
    try {
      logger.log(`Executing command: ${command.name}`)
      await command.handleInteract(interaction);
    } catch (error) {
      logger.error(error);
      await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
  }
}

export = eventHandler;