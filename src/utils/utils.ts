import { OptionBuilder } from './builders/optionBuilder';

export const noMentions = { allowedMentions: { users: [] } };

export function isNumber(val: string | number): boolean {
  return !isNaN(Number(val));
}

export const hidden = new OptionBuilder('hidden', 'BOOLEAN')
  .withDescription('Whether to show the response or not')
  .build();
