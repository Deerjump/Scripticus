import {
  GuildSettings,
  GuildSettingsDto,
  LogDocument,
} from "@customTypes";
import { Schema, model, Model } from "mongoose";

const GuildSettingsSchema = new Schema<GuildSettings>({
  prefix: { type: String, required: false },
});

export const GuildSettingsModel = model(
  "guildSettings",
  new Schema<GuildSettingsDto>({
    guildId: { type: String, required: true },
    settings: { type: GuildSettingsSchema, required: true }
  })
);


export const LoggingSchema = new Schema<LogDocument>({

  logType: { type: String, required: true },
  timeStamp: { type: Date, required: true },
  message: { type: String, required: true }
});

export const LoggingModel = model('Log', 

  new Schema<LogDocument>({
    logType: { type: String, required: true },
    timeStamp: { type: Date, required: true },
    message: { type: String, required: true }
  })
);


