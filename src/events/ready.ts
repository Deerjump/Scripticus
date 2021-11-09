import { EventHandler, Scripticus } from '@customTypes';
import { OAuth2Guild } from 'discord.js';
import { Logger } from '../utils/loggers';

const logger = new Logger('Ready');

async function registerCommands(oAuth2Guild: OAuth2Guild) {
  const client = oAuth2Guild.client as Scripticus;
  const clientCommands = client.commands.filter((cmd) => !cmd.global);
  const guild = await oAuth2Guild.fetch();
  const guildCommands = await guild.commands.fetch();
  const existingCommands = clientCommands.filter((command) =>
    guildCommands.some((c) => c.name === command.name)
  );
  if (existingCommands.size !== 0 && existingCommands.size === guildCommands.size) return;

  const toRegister = await Promise.all(clientCommands.map((c) => c.generateDetails(guild)));
  try {
    return await guild.commands.set(toRegister);
  } catch (err) {
    console.error(err);
  }
}

const eventHandler: EventHandler = {
  event: 'ready',
  once: true,
  async handle(client: Scripticus) {
    const guilds = await client.guilds.fetch();
    const results = await Promise.all(guilds.map(registerCommands));

    interface Total {
      guildTotal: number;
      commandTotal: number;
    }

    const { guildTotal, commandTotal } = results
      .filter((x) => x != undefined)
      .reduce(
        (acc, curr): Total => {
          return { guildTotal: ++acc.guildTotal, commandTotal: acc.commandTotal + curr!.size };
        },
        { guildTotal: 0, commandTotal: 0 }
      );
    logger.log(`Registered ${commandTotal} commands for ${guildTotal} guilds`);
    logger.log(`${client.user?.username} is ready!`);
  },
};

export = eventHandler;
