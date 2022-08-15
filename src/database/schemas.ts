import { GuildSettings, GuildSettingsDto } from '@customTypes';
import { Schema, model } from 'mongoose';

const GuildSettingsSchema = new Schema<GuildSettings>({
  prefix: { type: String, required: false },
});

export const GuildSettingsModel = model(
  'guildSettings',
  new Schema<GuildSettingsDto>({
    guildId: { type: String, required: true },
    settings: { type: GuildSettingsSchema, required: true },
  })
);
