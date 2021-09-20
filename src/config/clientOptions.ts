import { ScripticusOptions } from "@customTypes/types";
import { Intents } from "discord.js";



export const clientOptions: ScripticusOptions = {
  intents: new Intents([
    "GUILDS",
    "GUILD_MESSAGES",
    "DIRECT_MESSAGES",
    "GUILD_MESSAGE_REACTIONS",
  ]),
  partials: ["CHANNEL"],
  defaultPrefix: "!",
  defaultCooldown: 2,
  startupDisplay: [
    "*******************************************************",
    "*  ______             _            _                  *",
    "* / _____)           (_)       _  (_)                 *",
    "*( (____   ____  ____ _ ____ _| |_ _  ____ _   _  ___ *",
    "* \\____ \\ / ___)/ ___) |  _ (_   _) |/ ___) | | |/___)*",
    "* _____) | (___| |   | | |_| || |_| ( (___| |_| |___ |*",
    "*(______/ \\____)_|   |_|  __/  \\__)_|\\____)____/(___/ *",
    "*                      |_|                            *",
    "*******************************************************",
  ].join("\n")
};
