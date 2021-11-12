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
  }
  // ,{ collection : 'guildsettings' }
  )
);

// https://stackoverflow.com/questions/40079200/how-to-declare-collection-name-and-model-name-in-mongoose
export const LoggingSchema = new Schema<LogDocument>({

  logtype: { type: String, required: true },
  timestamp: { type: Date, required: true },
  message: { type: String, required: true }
});

export const LoggingModel = model('Log', 
  new Schema<LogDocument>({
    logtype: { type: String, required: true },
    timestamp: { type: Date, required: true },
    message: { type: String, required: true }
  }
  // , { collection : 'logs' }
  
  )
  
);


