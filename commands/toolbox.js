
const { MessageEmbed } = require('discord.js');
module.exports = {
   name: 'toolbox',
   description: 'Provides direct access to the Legends of Idleon Toolbox',
   execute(message, args) {
    const embed = new MessageEmbed()
       .setColor('#F9AF9F')
       .setTitle('Click here to reach the idleon Toolbox!')
       .setURL('https://docs.google.com/spreadsheets/d/1cY3vg1Z-AgOtIcV128D6kSLQRJE_-MUMtyqW0086Zmk/edit?usp=sharing')
       .addFields(
          { name: 'Credit', value: 'Created by Abgreyd and Hateling' },
       );
    message.channel.send(embed);
 },
};
