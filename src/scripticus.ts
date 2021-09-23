import { Client, Collection, Message } from 'discord.js';
import { Logger } from './utils/logger';
import chalk from 'chalk';
import * as fs from 'fs';
import {
  GuildSettings,
  Scripticus,
  Command,
  Event,
  ScripticusOptions,
  CommandImport,
  Database,
} from '@customTypes';

export class ScripticusBot extends Client implements Scripticus {
  private readonly logger: Logger;
  readonly defaultPrefix: string;
  readonly defaultCooldown: number;
  readonly commands: Collection<string, Command>;
  readonly guildSettings: Collection<string, GuildSettings>;
  readonly db: Database;
  readonly cooldowns: Collection<string, Collection<string, number>>;

  constructor(db: Database, options: ScripticusOptions) {
    super({
      intents: options.intents,
      partials: options.partials,
    });

    const { defaultPrefix, defaultCooldown, startupDisplay } = options;
    this.guildSettings = new Collection<string, GuildSettings>();
    this.cooldowns = new Collection<string, Collection<string, number>>();
    this.commands = new Collection<string, Command>();
    this.defaultCooldown = defaultCooldown;
    this.logger = new Logger('Scripticus');
    this.defaultPrefix = defaultPrefix;
    this.db = db;
    console.log(chalk.yellow(startupDisplay));
  }

  private async loadEvents() {
    this.logger.log('Loading events...');

    const eventFiles = fs
      .readdirSync(`${__dirname}/events`)
      .filter((file) => file.endsWith('.ts') || file.endsWith('.js'));

    let count = 0;
    for (const file of eventFiles) {
      const { once, name, execute } = (await import(
        `./events/${file}`
      )) as Event;
      once ? this.once(name, execute) : this.on(name, execute);
      count++;
    }

    this.logger.log(`Loaded ${count} events`);
  }

  private async loadCommands() {
    this.logger.log('Loading commands...');

    const commandFiles = fs
      .readdirSync(`${__dirname}/commands`)
      .filter((file) => file.endsWith('.ts') || file.endsWith('.js'));

    for (const file of commandFiles) {
      const { command }: CommandImport = await import(`./commands/${file}`);

      this.commands.set(command.name, command);
      this.cooldowns.set(command.name, new Collection<string, number>());
    }

    this.logger.log(`Loaded ${this.commands.size} commands`);
  }

  private async loadGuildSettings() {
    this.logger.log('Loading guild specific settings...');

    const results = await this.db.getAllGuildSettings();
    results.forEach((result) =>
      this.guildSettings.set(result.guildId, result.settings)
    );

    this.logger.log(`Loaded settings for ${results.length} servers`);
  }

  async updateGuildPrefix(guildId: string, prefix: string) {
    const settings = this.guildSettings.get(guildId) ?? {};
    settings.prefix = prefix;
    this.guildSettings.set(guildId, settings);

    await this.db.updateGuildSettings(guildId, settings);
  }

  getPrefix(message: Message): string {
    if (message.channel.type === 'DM') return '';
    return (
      this.guildSettings.get(message.guildId!)?.prefix ?? this.defaultPrefix
    );
  }

  async login(token: string): Promise<string> {
    await this.db.connectToDatabase();
    await this.loadGuildSettings();
    await this.loadEvents();
    await this.loadCommands();
    await super.login(token);

    this.commands.forEach((command) => command.init?.(this));
    return 'HIDDEN TOKEN';    
  }

  async stop() {
    try {
      this.logger.log('-----Stopping Scripticus-----');
      await this.db.disconnect();

      this.logger.log('Running command stop() methods');
      this.commands.forEach((command) => command.stop?.());

      this.logger.log('-----Destroying client-----');
      this.destroy();
      this.logger.log('-----Exiting process-----');
      process.exit(0);
    } catch (err) {
      this.logger.error('ERROR:');
      this.logger.error(err);
    }
  }
}
