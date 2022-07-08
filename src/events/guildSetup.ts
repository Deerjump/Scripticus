import { EventHandler, Scripticus } from '@customTypes';
import { Guild } from 'discord.js';
import { Logger } from '../utils/logger';

const logger = new Logger('GuildSetup');

// TODO: registering commands per guild isn't necessary anymore
const eventHandler: EventHandler = {
  // When the bot joins a guild
  event: 'guildCreate',
  once: true,
  async handle(guild: Guild) {
    const client = guild.client as Scripticus;
    const { commands } = client;

    logger.log(`Joined ${guild.name}!`);
    // logger.log(`Configuring guild-specific commands...`);

    // const owner = await guild.fetchOwner();
    // const toRegister = commands.filter((cmd) => !cmd.global).map((cmd) => cmd.commandBuilder.toJSON())

    // const registered = await guild.commands.set(toRegister);

    // logger.log(`Registered ${registered.size} guild command(s)`);

    // for (const [name, command] of commands) {
    //   const { id } = registered.find((c) => c.name === name)!;
    //   if (command.roleRequired === 'ADMIN') {
    //     await guild.commands.permissions.add({
    //       command: id,
    //       permissions: [{ id: owner.id, type: 'USER', permission: true }],
    //     });
    //   }
    // }

    // try {
    //   owner.send({ content: client.joinMessage });
    // } catch (err) {
    //   logger.error(err);
    //   logger.error(`Error sending DM to ${owner.user.username}`);
    // }
  },
};

export = eventHandler;
