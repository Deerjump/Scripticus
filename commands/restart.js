module.exports = {
  name: 'restart',
  description: 'Restarts the bot!',
  whitelist: ['90598254688874496', '191085842469486592'],
  execute(message) {
    if (this.whitelist.includes(message.author.id)) {
      message.channel.send('Restarting bot!');
      return message.client.stop();
    }
    message.channel.send('You cannot use this command!');
  },
};
