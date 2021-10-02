import { EventHandler, Scripticus } from '@customTypes';
import { Guild } from 'discord.js';
import { Logger } from '../utils/logger';

const logger = new Logger('GuildSetup');

const event: EventHandler = {
  // When the bot joins a guild
  event: 'guildCreate',
  once: true,
  async handle(guild: Guild) {
    const client = guild.client as Scripticus;
    const { commands } = client;

    logger.log(`Joined ${guild.name}!`);
    logger.log(`Configuring guild-specific commands...`);
    const probablyModRoles = guild.roles.cache.filter(
      (role) =>
        role.permissions.has('MANAGE_MESSAGES', true) ||
        role.permissions.has('MANAGE_ROLES', true)
    );

    const toRegister = commands
      .filter((cmd) => !cmd.global)
      .map((cmd) => cmd.details);

    const registered = await guild.commands.set(toRegister);

    logger.log(`Registered ${registered.size} guild command(s)`);

    const permissions = commands
      .filter((cmd) => cmd.details != undefined && cmd.permissions.length !== 0)
      .map((cmd) => {
        const { id } = registered.find((c) => c.name === cmd.name)!;
        let perms = [...cmd.permissions];

        if (cmd.roleRequired != 'EVERYONE') {
          probablyModRoles.forEach((role) => {
            perms.push({ id: role.id, type: 'ROLE', permission: true });
          });
        }

        return { id: id!, permissions: perms };
      });

    const results = await client.application?.commands.permissions.set({
      guild: guild,
      fullPermissions: permissions,
    });

    const numPerms = results?.reduce((acc, curr) => acc + curr.length, 0);
    logger.log(`Added ${numPerms} permissions`);
  },
};

export = event;
