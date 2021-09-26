import { hidden, noMentions } from '../../utils/utils';
import { SlashCommand } from '../commandClasses';
import { CommandInteraction, Message, MessageEmbed } from 'discord.js';

class ContributeCommand extends SlashCommand {
  get options() {
    return [hidden];
  }

  constructor() {
    super('contribute', 'Learn how to contribute!');
  }

  execute() {
    return {
      embeds: [
        new MessageEmbed()
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
      ],
      ...noMentions,
    };
  }

  async handleInteract(interaction: CommandInteraction) {
    const hidden = interaction.options.getBoolean('hidden') ?? false;
    const response = this.execute();

    interaction.reply({ ephemeral: hidden!, ...response });
  }

  async handleMessage(message: Message) {
    const response = this.execute();

    message.reply(response);
  }
}

export const command = ContributeCommand;
