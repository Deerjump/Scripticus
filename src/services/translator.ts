import translate from '@vitalets/google-translate-api';

export interface Translator {
  translate(text: string, language: string): Promise<string>
}

export class GoogleTranslator implements Translator {

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

  async translate(text: string, language: string) {
    const [trimmed, emojis] = this.trimEmojis(text);
    const result = await translate(trimmed, { to: language, autoCorrect: true });
    return this.insertEmojis(result.text, emojis);
  }
}