import { ScripticusOptions } from '@customTypes';
import { IntentsBitField, Partials } from 'discord.js';

export const clientOptions: ScripticusOptions = {
  intents: new IntentsBitField(['Guilds', 'GuildMessages', 'DirectMessages', 'GuildMessageReactions']),
  partials: [Partials.Channel],
  devGuildId: '791017497997606922',
  defaultPrefix: '!',
  defaultCooldown: 2,
  joinMessage: [
    'Thanks for adding me to your server!',
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
