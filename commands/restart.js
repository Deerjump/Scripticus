const { MongoConnection } = require('../mongo/connection.js');

module.exports = {
  name: 'restart',
  description: 'Provides direct access to the Legends of Idleon Toolbox',
  whitelist: ['90598254688874496', '191085842469486592'],
  async execute(message) {
    if (this.whitelist.includes(message.author.id)) {
      try {
        await message.channel.send('Restarting bot!');
        console.info('Restarting bot!');

        await MongoConnection.disconnect();
        console.log('MongoConnection disconnected');

        console.info('Running command stop() methods');
        message.client.commands
          .filter((command) => command.stop)
          .forEach((command) => command.stop());
        console.info('Scripticus is Restarting!');
      } catch (err) {
        console.error('ERROR:', err);

      } finally {
        console.info('-----Exiting process-----');
        process.exit(0);
      }
    } else {
      message.channel.send('You cannot use this command!');
    }
  },
};
