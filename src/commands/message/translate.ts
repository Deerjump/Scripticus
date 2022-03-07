import { MessageContextMenuInteraction, CacheType, Message } from "discord.js";
import { MessageCommand } from "../commandClasses";

class TranslateCommand extends MessageCommand {

  constructor() {
    super("Translate")
  }
  

  async handleInteract(interaction: MessageContextMenuInteraction<CacheType>) {
    await interaction.deferReply({ ephemeral: true });
    const message = interaction.options.resolved.messages?.first() as Message;

    

    // await interaction.editReply(results);
  }
}