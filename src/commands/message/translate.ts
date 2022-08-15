import { MessageContextMenuCommandInteraction } from 'discord.js';
import { MessageCommand } from '../commandClasses';
import { GoogleTranslator, Translator } from '../../services/translator';

class TranslateCommand extends MessageCommand {
  private translator: Translator = new GoogleTranslator();
  constructor() {
    super('Translate');
  }

  async handleInteract(interaction: MessageContextMenuCommandInteraction) {
    await interaction.deferReply({ ephemeral: true });
    const { targetMessage } = interaction;

    if (targetMessage.content.length > 2000) {
      return await interaction.editReply({
        content: `Message must be fewer than 2000 characters! That message has ${targetMessage.content.length}`,
      });
    }

    const translated = await this.translator.translate(targetMessage.content, 'en');

    if (translated.length > 2000) {
      return await interaction.editReply({
        content: `Translated text is too large (2000 characters) to send! It has ${translated.length}.`,
      });
    }

    await interaction.editReply({ content: translated });
  }
}

export const command = TranslateCommand;
