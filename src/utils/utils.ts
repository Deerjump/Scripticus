import { OptionBuilder } from './builders/optionBuilder';
import dotenv from 'dotenv';
import { env } from 'process';
dotenv.config();
export const noMentions = { allowedMentions: { users: [] } };

export function isNumber(val: string | number): boolean {
  return !isNaN(Number(val));
}

export const hidden = new OptionBuilder('hidden', 'BOOLEAN')
  .withDescription('Whether to show the response or not')
  .build();

// this is currently overkill, but it should cut down on dotnet imports, and a lot of process.env.xxx
export const endpoints = {
MongoUrl: process.env.DATABASE_URL ?? '',
logType: process.env.LOGGER_TYPE ??''

}