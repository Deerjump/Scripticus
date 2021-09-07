const WebhookListener = require('./auto-update/WebhookListener.js');
const { Client, Collection, Intents } = require('discord.js');
const Logger = require('./util/Logger.js');
const mongo = require('./mongo/mongo.js');
const chalk = require('chalk');
const { GUILDS, GUILD_MESSAGES, DIRECT_MESSAGES, GUILD_MESSAGE_REACTIONS } =
  Intents.FLAGS;
require('dotenv').config();
const fs = require('fs');
const {
  DEFAULT_PREFIX,
  DEFAULT_COOLDOWN,
  autoUpdate,
} = require('./config.json');

const logger = new Logger('Bot');

const display =
  '*******************************************************\n' +
  '*  ______             _            _                  *\n' +
  '* / _____)           (_)       _  (_)                 *\n' +
  '*( (____   ____  ____ _ ____ _| |_ _  ____ _   _  ___ *\n' +
  '* \\____ \\ / ___)/ ___) |  _ (_   _) |/ ___) | | |/___)*\n' +
  '* _____) | (___| |   | | |_| || |_| ( (___| |_| |___ |*\n' +
  '*(______/ \\____)_|   |_|  __/  \\__)_|\\____)____/(___/ *\n' +
  '*                      |_|                            *\n' +
  '*******************************************************';
console.info(chalk.yellow(display));

const client = new Client({
  intents: [GUILDS, GUILD_MESSAGES, DIRECT_MESSAGES, GUILD_MESSAGE_REACTIONS],
  // This lets dms work properly
  partials: ['CHANNEL'],
});
client.commands = new Collection();
client.guildSettings = new Collection();
client.mongo = mongo;
const commandFiles = fs
  .readdirSync('./commands')
  .filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

const shouldIgnore = (message, prefix) =>
  (message.channel.type !== 'dm' && !message.content.startsWith(prefix)) ||
  message.author.bot;
const cooldowns = new Collection();

client.once('ready', async () => {
  try {
    logger.log('-----Starting up Scripticus!-----');

    if (autoUpdate.enabled) {
      client.githubListener = new WebhookListener(client).start();
    }

    await mongo.connectToDatabase();

    // run each command's init() method if it exists
    client.commands.forEach((command) => command.init?.(client));

    const prefixes = await mongo.getGuildPrefixes();
    if (prefixes) {
      prefixes.forEach(({ guildId, prefix }) => {
        const guild = client.guildSettings.get(guildId) || {};
        client.guildSettings.set(guildId, { ...guild, prefix });
      });
    }
  } catch (err) {
    logger.error(err);
  }
  client.user.setActivity('Legends of Idleon');
  logger.log(`${chalk.yellow(client.user.username)} is ready!`);
});

client.on('messageCreate', (message) => {
  // Ensures each server uses its own settings (if defined), doesn't use prefix in dms
  const prefix = client.getPrefix(message);

  if (shouldIgnore(message, prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command =
    client.commands.get(commandName) ||
    client.commands.find(
      (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
    );

  if (!command) return;

  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Collection());
  }

  // Cooldown implementation
  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || DEFAULT_COOLDOWN) * 1000;

  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      message.react('❌');
      message.react('⏲️');
      return message.author.send(
        `please wait ${timeLeft.toFixed(1)} more second(s) before using the \`${
          command.name
        }\` command again!`
      );
    }
  } else {
    if (message.channel.type !== 'DM') {
      timestamps.set(message.author.id, now);
      setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    }
  }

  // Handles command uses with missing arguments
  if (command.args && !args.length) {
    let reply = `You didn't provide any arguments, ${message.author}`;

    if (command.usage) {
      reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
    }

    return message.reply({ content: reply, allowedMentions: { users: [] } });
  }

  try {
    command.execute(message, args);
  } catch (error) {
    logger.error(error);
    message.reply({
      content: 'there was an error trying to execute that command!',
      allowedMentions: { users: [] },
    });
  }
});

client.getPrefix = function (message) {
  if (message.channel.type === 'DM') return '';

  const settings = client.guildSettings.get(message.guild.id);
  return settings ? settings.prefix : DEFAULT_PREFIX;
};

client.stop = function () {
  try {
    logger.log('-----Stopping Scripticus!-----');
    mongo.disconnect();

    logger.log('Running command stop() methods');
    this.commands.forEach((command) => command.stop?.());

    logger.log('-----Destroying client-----');
    client.destroy();
    logger.log('-----Exiting process-----');
    process.exit(0);
  } catch (err) {
    logger.error('ERROR:', err);
  }
};

client.login(process.env.TOKEN);
