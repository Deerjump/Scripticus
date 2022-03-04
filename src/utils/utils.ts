import { SlashCommandBooleanOption } from '@discordjs/builders';

export const noMentions = { allowedMentions: { users: [] } };

export function isNumber(val: string | number): boolean {
  return !isNaN(Number(val));
}

export const hidden: (builder: SlashCommandBooleanOption) => SlashCommandBooleanOption = (option) =>
  option.setName('hidden').setDescription('Whether to show the response or not');
