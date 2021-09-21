import { Command } from '@customTypes/types';
import { Message, MessageEmbed } from 'discord.js';

class ContributeCommand implements Command {
  public readonly name = 'contribute';
  public readonly description = 'Learn how to contribute!';

  public execute(message: Message) {
    const embed = new MessageEmbed()
      .setColor('#0000FF')
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
      );
    message.reply({ embeds: [embed], allowedMentions: { users: [] } });
  }
}

export const command = new ContributeCommand();
