import { mongoDriver } from "./database/mongo";
import {
  GuildSettings,
  DatabaseDriver,
  Scripticus,
  Command,
  Event,
  ScripticusOptions,
} from "@customTypes/types";
import { Client, Collection } from "discord.js";
import { Logger } from "./utils/logger";
import * as fs from "fs";

export class ScripticusBot extends Client implements Scripticus {
  defaultPrefix: string;
  defaultCooldown: number;
  commands: Collection<string, Command>;
  guildSettings: Collection<string, GuildSettings>;
  db: DatabaseDriver;
  logger: any;

  constructor({
    intents,
    partials,
    defaultPrefix,
    defaultCooldown,
  }: ScripticusOptions) {
    super({
      intents: intents,
      partials: partials,
    });

    this.defaultPrefix = defaultPrefix;
    this.defaultCooldown = defaultCooldown;
    this.db = mongoDriver;
    this.commands = new Collection<string, Command>();
    this.guildSettings = new Collection<string, GuildSettings>();
    this.logger = new Logger("Scripticus");
  }

  private async loadEvents() {
    this.logger.log("Loading events...");

    const eventFiles = fs
      .readdirSync(`${__dirname}/events`)
      .filter((file) => file.endsWith(".ts") || file.endsWith(".js"));

    let count = 0;
    for (const file of eventFiles) {
      const event = (await import(`./events/${file}`)) as Event;
      if (event.once) {
        this.once(event.name, (...args) => event.execute(args));
      } else {
        this.on(event.name, (...args) => event.execute(args));
      }
      count++;
    }

    this.logger.log(`${count} events loaded!`);
  }

  private async loadGuildSettings() {
    this.logger.log("Loading guild specific settings...");

    const results = await mongoDriver.getAllGuildSettings();
    results.forEach((result) =>
      this.guildSettings.set(result.guildId, result.settings)
    );

    this.logger.log("Settings loaded!");
  }

  private async loadCommands() {
    this.logger.log("Loading commands...");

    const commandFiles = fs
      .readdirSync(`${__dirname}/commands`)
      .filter((file) => file.endsWith(".ts") || file.endsWith(".js"));

    for (const file of commandFiles) {
      const command = (await import(`./commands/${file}`)) as Command;

      // TODO: handle this better later
      command.init?.();
      this.commands.set(command.name, command);
    }

    this.logger.log(`${this.commands.size} commands loaded!`);
  }

  async updateGuildPrefix(guildId: string, prefix: string) {
    const settings = this.guildSettings.get(guildId) ?? {};
    settings.prefix = prefix;
    this.guildSettings.set(guildId, settings);

    await this.db.updateGuildSettings(guildId, settings);
  }

  getPrefix(guildId: string): string {
    return this.guildSettings.get(guildId!)?.prefix ?? this.defaultPrefix;
  }

  async login(token: string) {
    await this.loadEvents();
    await this.loadCommands();
    await this.db.connectToDatabase();
    await this.loadGuildSettings();

    return super.login(token);
  }

  async stop() {
    try {
      this.logger.log("-----Stopping Scripticus!-----");
      await this.db.disconnect();

      this.logger.log("Running command stop() methods");
      this.commands.forEach((command) => command.stop?.());

      this.logger.log("-----Destroying client-----");
      this.destroy();
      this.logger.log("-----Exiting process-----");
      process.exit(0);
    } catch (err) {
      this.logger.error("ERROR:");
      this.logger.error(err);
    }
  }
}
