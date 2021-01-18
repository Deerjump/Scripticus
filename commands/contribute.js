const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'contribute',
  description: 'Seach the Legends of Idleon Wiki!',
  execute(message) {
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
    message.channel.send(embed);
  },
};
