const { MongoConnection } = require('../mongo/connection.js');

module.exports = {
  name: 'restart',
  description: 'Provides direct access to the Legends of Idleon Toolbox',
  whitelist: ['90598254688874496', '191085842469486592'],
  async execute(message) {
    if (this.whitelist.includes(message.author.id)) {
      message.channel.send('Restarting bot!');
      await MongoConnection.disconnect()
        .then(console.log('MongoConnection disconnected'))
        .catch(err => console.error(err));
      message.client.commands
        .filter(command => command.stop)
        .forEach(command => command.stop());
      console.info('Scripticus is Restarting!');
      process.exit(0);
    } else {
      message.channel.send('You cannot use this command!');
    }
  },
};
