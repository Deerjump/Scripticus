import { Event, Scripticus } from '@customTypes';
import { Message } from 'discord.js';
import { noMentions } from '../utils/utils';
import { Logger } from '../utils/logger';

const logger = new Logger('DevCommands');

// This will listen to DMs from Deerjump for dev commands.
// Add your user id to the whitelist if needed while developing new features
const event: Event = {
  name: 'messageCreate',
  execute: async (message: Message) => {
    const whitelist = ['191085842469486592'];
    if (message.channel.type != 'DM' && !whitelist.includes(message.author.id))
      return;

    const client = message.client as Scripticus;
    const [option, arg] = message.content.split(/ +/);
    if (option == undefined) return;

    switch (option.toLowerCase()) {
      case 'restart': {
        await message.reply({ ...noMentions, content: 'Restarting bot!' });
        client.stop();
        break;
      }
      case 'registerglobals': {
        await message.reply({ ...noMentions, content: 'Registering commands' });
        await client.registerApplicationCommands();
        break;
      }
      case 'resetcommands': {
        await resetCommands(client, arg);
        break;
      }
    }
  },
};

async function resetCommands(client: Scripticus, guildId: string) {
  const commandManager: any =
    guildId == undefined
      ? client.application?.commands!
      : (await client.guilds.fetch(guildId)).commands!;

  const commands = await commandManager.fetch()!;

  for (const [id] of commands) {
    await commandManager.delete(id);
  }

  const remaining = await commandManager.fetch()!;
  logger.log(`${commands.size - remaining.size} commands deleted`);
}

export = event;
