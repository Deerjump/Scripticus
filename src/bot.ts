// import { Client, Collection, Intents } from "discord.js";
// import { Command, GuildSettings } from "@customTypes/type";
// import { clientOptions } from './clientOptions';
// import { mongoDriver } from "../src/database/mongo";
// import { Logger } from "./utils/logger";
// import * as fs from "fs";
// import "dotenv/config";
// import { GuildSettings } from "@customTypes/database";

// const logger = new Logger("Bot");


// const { GUILDS, GUILD_MESSAGES, DIRECT_MESSAGES, GUILD_MESSAGE_REACTIONS } =
//   Intents.FLAGS;
// const commands = new Collection<string, Command>();
// const guildSettings = new Collection<string, any>();

// const client = new Client({
//   intents: [GUILDS, GUILD_MESSAGES, DIRECT_MESSAGES, GUILD_MESSAGE_REACTIONS],
//   // This lets dms work properly
//   partials: ["CHANNEL"],
// });

// client.once("ready", async () => {
//   console.log('Starting bot');
//   await mongoDriver.connectToDatabase();
//   await loadCommands();
//   await loadGuildSettings();

//   logger.log(`${client.user!.username} is ready!`);
// });

// client.on("messageCreate", (message) => {
//   if (message.author.bot) return;

//   const prefix: string =
//     guildSettings.get(message.guildId!)?.prefix ?? clientOptions.defaultPrefix;
//   if (message.channel.type !== "DM" && !message.content.startsWith(prefix))
//     return;

//   const args = message.content.slice(prefix.length).trim().split(/ +/);
//   const commandName = args.shift()!.toLowerCase();

//   const command =
//     commands.get(commandName) ||
//     commands.find(
//       (cmd) => cmd.aliases != null && cmd.aliases.includes(commandName)
//     );

//   if (!command) return;

//   if (command.args && !args.length) {
//     let reply = `You didn't provide any arguments, ${message.author}`;

//     if (command.usage) {
//       reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
//     }

//     message.reply({ content: reply, allowedMentions: { users: [] } });
//     return;
//   }

//   try {
//     command.execute(message, args);
//   } catch (error) {
//     logger.error(error);
//     message.reply({
//       content: "there was an error trying to execute that command!",
//       allowedMentions: { users: [] },
//     });
//   }
// });

// async function loadCommands() {
//   logger.log("Loading commands...");

//   const commandFiles = fs
//     .readdirSync(`${__dirname}/commands`)
//     .filter((file) => file.endsWith(".ts") || file.endsWith(".js"));

//   for (const file of commandFiles) {
//     const command = (await import(`./commands/${file}`)) as Command;
    
//     // TODO: handle this better later
//     command.init?.();
//     commands.set(command.name, command);
//   }

//   logger.log("Commands loaded!");
// }

// async function loadGuildSettings() {
//   logger.log("Loading guild specific settings...");

//   const settings = await mongoDriver.getAllGuildSettings();
//   settings.forEach(({ guildId, ...rest }: GuildSettings) => guildSettings.set(guildId, rest));

//   logger.log("Settings loaded!");
// }

// client.login(process.env.TOKEN!);
