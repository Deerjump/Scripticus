import { hidden } from '../../utils/utils';
import { SlashCommand } from '../commandClasses';
import { ChatInputCommandInteraction, EmbedBuilder } from 'discord.js';

class ContributeCommand extends SlashCommand {
  protected generateOptions() {
    return [hidden];
  }

  constructor() {
    super('contribute', 'Learn how to contribute!');
  }

  execute() {
    return {
      embeds: [
        new EmbedBuilder()
          .setColor('#0000FF') // blue
          .setTitle('Click here to contribute to Scripticus!')
          .setURL('https://github.com/Deerjump/Scripticus')
          .addFields(
            {
              name: 'Hey!',
              value:
                'Want to help out development of this bot?\nFollow the link in the title',
            },
            {
              name: 'How to help',
              value:
                'Even if you don\'t know how to code you can still help!\nYou can suggest features through GitHub [here](https://github.com/Deerjump/Scripticus/projects/1 "Suggestions!") as well!',
            }
          ),
      ]
    };
  }

  async handleInteract(interaction: ChatInputCommandInteraction) {
    const hidden = interaction.options.getBoolean('hidden') ?? false;
    const response = this.execute();

    interaction.reply({ ephemeral: hidden!, ...response });
  }
}

export const command = ContributeCommand;
