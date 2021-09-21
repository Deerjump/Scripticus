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
} from '@customTypes/types';

export class ScripticusBot extends Client implements Scripticus {
  defaultPrefix: string;
  defaultCooldown: number;
  commands: Collection<string, Command>;
  guildSettings: Collection<string, GuildSettings>;
  db: Database;
  logger: any;

  constructor(db: Database, options: ScripticusOptions) {
    super({
      intents: options.intents,
      partials: options.partials,
    });

    const { defaultPrefix, defaultCooldown, startupDisplay } = options;
    this.db = db;
    this.defaultPrefix = defaultPrefix;
    this.defaultCooldown = defaultCooldown;
    this.commands = new Collection<string, Command>();
    this.guildSettings = new Collection<string, GuildSettings>();
    this.logger = new Logger('Scripticus');

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

    this.logger.log(`${count} events loaded`);
  }

  private async loadCommands() {
    this.logger.log('Loading commands...');

    const commandFiles = fs
      .readdirSync(`${__dirname}/commands`)
      .filter((file) => file.endsWith('.ts') || file.endsWith('.js'));

    for (const file of commandFiles) {
      const { command }: CommandImport = await import(`./commands/${file}`);

      command.init?.(this);
      this.commands.set(command.name, command);
    }

    this.logger.log(`${this.commands.size} commands loaded`);
  }

  private async loadGuildSettings() {
    this.logger.log('Loading guild specific settings...');

    const results = await this.db.getAllGuildSettings();
    results.forEach((result) =>
      this.guildSettings.set(result.guildId, result.settings)
    );

    this.logger.log(`Settings loaded for ${results.length} servers`);
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

  async login(token: string) {
    await this.loadEvents();
    await this.loadCommands();
    await this.db.connectToDatabase();
    await this.loadGuildSettings();

    return super.login(token);
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
