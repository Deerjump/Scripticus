import { MessageContextMenuCommandInteraction } from 'discord.js';
import { MessageCommand } from '../commandClasses';
import translate from '@vitalets/google-translate-api';

class TranslateCommand extends MessageCommand {
  constructor() {
    super('Translate');
  }

  private trimEmojis(message: string): [string, string[]] {
    if (!message || message === '') return ['', []];
    const discordEmojiRegex = /(<:\w+:\d+>)/gm;

    const emojis = message.match(discordEmojiRegex) ?? [];

    emojis.forEach((match, index) => {
      message = message.replace(match, `<{${index}}>`);
    });

    return [message.replaceAll(discordEmojiRegex, ''), emojis];
  }

  private insertEmojis(message: string, emojis: string[]): string {
    if (emojis.length == 0) return message;

    emojis.forEach((emoji, index) => {
      message = message.replace(`<{${index}}>`, emoji);
    });

    return message;
  }

  async handleInteract(interaction: MessageContextMenuCommandInteraction) {
    await interaction.deferReply({ ephemeral: true });
    const { targetMessage } = interaction;
    // const message = interaction.options.resolved.messages?.first() as Message;

    if (targetMessage.content.length > 2000) {
      return await interaction.editReply({
        content: `Message must be fewer than 2000 characters! That message has ${targetMessage.content.length}`,
      });
    }

    const [trimmed, emojis] = this.trimEmojis(targetMessage.content);
    const result = await translate(trimmed, { to: 'en', autoCorrect: true });
    const responseString = this.insertEmojis(result.text, emojis);

    if (responseString.length > 2000) {
      return await interaction.editReply({ content: `Translated text is too large (2000 characters) to send! It has ${responseString.length}.`})
    }

    await interaction.editReply({ content: responseString });
  }
}

export const command = TranslateCommand;
