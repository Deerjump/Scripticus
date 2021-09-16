const Logger = require('../util/Logger.js');

const logger = new Logger('Reload');

module.exports = {
  name: 'reload',
  description: 'Reloads a command',
  args: true,
  execute(message, args) {
    if (message.author.id != '191085842469486592') return;
    const { client } = message;
    const commandName = args[0].toLowerCase();
    const command =
      client.commands.get(commandName) ||
      client.commands.find(
        (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
      );
    if (!command) {
      return message.reply({
        content: `There is no command with name or alias \`${commandName}\`, ${message.author}!`,
        allowedMentions: { users: [] },
      });
    }

    command.stop?.();
    delete require.cache[require.resolve(`./${command.name}.js`)];

    try {
      const newCommand = require(`./${commandName}.js`);
      client.commands.set(newCommand.name, newCommand);

      newCommand.init?.(client);
      message.channel.send(`Command \`${command.name}\` was reloaded!`);
    } catch (error) {
      logger.error(error);
      message.reply({
        content: `There was an error while reloading a command \`${command.name}\`:\n\`${error.message}\``,
        allowedMentions: { users: [] },
      });
    }
  },
};
