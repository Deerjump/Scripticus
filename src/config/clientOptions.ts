import { ScripticusOptions } from '@customTypes';
import { Intents } from 'discord.js';

export const clientOptions: ScripticusOptions = {
  intents: new Intents(['GUILDS', 'GUILD_MESSAGES', 'DIRECT_MESSAGES', 'GUILD_MESSAGE_REACTIONS']),
  partials: ['CHANNEL'],
  devGuildId: '791017497997606922',
  defaultPrefix: '!',
  defaultCooldown: 2,
  joinMessage: [
    'Thanks for adding me to your server!',
    'To configure me, use the `/settings` command!',
    'To start out, you are the only one that can access this command.',
  ].join('\n'),
  startupDisplay: [
    '*********************************************************',
    '*   ______             _            _                   *',
    '*  / _____)           (_)       _  (_)                  *',
    '* ( (____   ____  ____ _ ____ _| |_ _  ____ _   _  ___  *',
    '*  \\____ \\ / ___)/ ___) |  _ (_   _) |/ ___) | | |/___) *',
    '*  _____) | (___| |   | | |_| || |_| ( (___| |_| |___ | *',
    '* (______/ \\____)_|   |_|  __/  \\__)_|\\____)____/(___/  *',
    '*                       |_|                             *',
    '*********************************************************',
  ].join('\n'),
};
