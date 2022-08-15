import { EventHandler, Scripticus } from '@customTypes';
import { OAuth2Guild } from 'discord.js';
import { Logger } from '../utils/logger';

const logger = new Logger('Ready');

async function registerCommands(oAuth2Guild: OAuth2Guild) {
  const client = oAuth2Guild.client as Scripticus;
  const allCommands = [...client.commands.values(), ...client.messageCommands.values()];
  const clientCommands = allCommands.filter((cmd) => !cmd.global);
  const guild = await oAuth2Guild.fetch();
  const guildCommands = await guild.commands.fetch();
  const extraCommands = guildCommands.filter((command) =>
    clientCommands.every(({ name }) => name != command.name)
  );
  const missingCommands = clientCommands.filter((command) =>
    guildCommands.every(({ name }) => name != command.name)
  );

  if (
    missingCommands.length === 0 &&
    extraCommands.size === 0 &&
    guildCommands.size === clientCommands.length
  )
    return;

  const toRegister = await Promise.all(clientCommands.map((c) => c.commandBuilder.toJSON()));
  console.log(toRegister.map((command) => command.name));

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
    // const guilds = await client.guilds.fetch();
    // const results = await Promise.all(guilds.map(registerCommands));
    // interface Total {
    //   guildTotal: number;
    //   commandTotal: number;
    // }

    // const { guildTotal, commandTotal } = results
    //   .filter((x) => x != undefined)
    //   .reduce(
    //     (acc, curr): Total => {
    //       return { guildTotal: ++acc.guildTotal, commandTotal: acc.commandTotal + curr!.size };
    //     },
    //     { guildTotal: 0, commandTotal: 0 }
    //   );
    // logger.log(`Registered ${commandTotal} commands for ${guildTotal} guilds`);
    logger.log(`${client.user?.username} is ready!`);
  },
};

export = eventHandler;
