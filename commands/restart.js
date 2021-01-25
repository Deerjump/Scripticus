const { MongoConnection } = require('../mongo/connection.js');

module.exports = {
  name: 'restart',
  description: 'Provides direct access to the Legends of Idleon Toolbox',
  whitelist: ['90598254688874496'],
  execute(message) {
    if (this.whitelist.includes(message.author.id)) {
      message.channel.send('Restarting bot!');
      MongoConnection.disconnect()
        .then(() => {
          console.log('MongoConnection disconnected');
          message.client.commands
            .filter(command => command.stop != null)
            .forEach(command => command.stop());
          process.exit(0);
        })
        .catch(err => console.error(err));
    } else {
      message.channel.send('You cannot use this command!');
    }
  },
};
