const { Client, Collection } = require('discord.js');
const { prefix: DEFAULT_PREFIX, DEFAULT_COOLDOWN } = require('./config.json');
const { getServerPrefixes } = require('./mongo/settings.js');
const fs = require('fs');
require('dotenv').config();


const client = new Client();
client.commands = new Collection();
client.guildSettings = new Collection();
const commandFiles = fs
  .readdirSync('./commands')
  .filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
  if (command.init) command.init(client);
}

const shouldIgnore = (message, prefix) =>
  !message.content.startsWith(prefix) || message.author.bot;
const cooldowns = new Collection();

client.once('ready', async () => {
  console.log(`${client.user.username} is ready!`);
  client.user.setActivity('Legends of Idleon');
  try {
    const prefixes = await getServerPrefixes();
    prefixes.forEach(({ guildID, prefix: guildPrefix }) => {
      const guild = client.guildSettings.get(guildID) || {};
      client.guildSettings.set(guildID, { ...guild, prefix: guildPrefix });
    });
  } catch (err) {
    console.error(err);
  }
});

client.on('message', (message) => {
  // Ensures each server uses its own prefix (if defined), uses default prefix in dms
  let prefix;
  if (message.channel.type !== 'dm') {
    prefix = client.guildSettings.get(message.guild.id).prefix || DEFAULT_PREFIX;
  }

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

  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || DEFAULT_COOLDOWN) * 1000;

  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      message.react('❌').then(() => message.react('⏲️'));
      return message.author.send(
        `please wait ${timeLeft.toFixed(1)} more second(s) before using the \`${
          command.name
        }\` command again!`
      );
    }
  } else {
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
  }

  if (command.args && !args.length) {
    let reply = `You didn't provide any arguments, ${message.author}`;

    if (command.usage) {
      reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
    }

    return message.channel.send(reply);
  }

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('there was an error trying to execute that command!');
  }
});

client.login(process.env.TOKEN);