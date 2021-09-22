import {
  GuildSettings,
  GuildSettingsDto,
  Subscriber,
} from "@customTypes";
import { Schema, model } from "mongoose";

export const SubscriberModel = model<Subscriber>(
  "subscriber",
  new Schema<Subscriber>({
    userId: { type: String, required: true },
    hours: { type: Number, required: true },
  })
);

const GuildSettingsSchema = new Schema<GuildSettings>({
  prefix: { type: String, required: false },
});

export const GuildSettingsModel = model(
  "setting",
  new Schema<GuildSettingsDto>({
    guildId: { type: String, required: true },
    settings: { type: GuildSettingsSchema, required: true },
  })
);
