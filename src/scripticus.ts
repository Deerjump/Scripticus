import { GuildSettings, Scripticus, EventHandler, ScripticusOptions, Database, ILogger } from '@customTypes';
import { MessageCommand, SlashCommand, UserCommand } from './commands/commandClasses';
import { Client, Collection, Guild } from 'discord.js';
import {LoggerFactory} from './factories/_loggerfactory';
import { format } from 'util';
import 'module-alias/register'; //added to fix compile issues for aliases
import chalk from 'chalk';
import * as fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

export class ScripticusBot extends Client implements Scripticus {
  readonly cooldowns = new Collection<string, Collection<string, number>>();
  readonly messageCommands = new Collection<string, MessageCommand>();
  readonly guildSettings = new Collection<string, GuildSettings>();
  readonly userCommands = new Collection<string, UserCommand>();
  readonly commands = new Collection<string, SlashCommand>();

  private logger: ILogger;
  readonly defaultCooldown: number;
  readonly defaultPrefix: string;
  readonly joinMessage: string;

  constructor(public readonly db: Database, options: ScripticusOptions) {
    super({
      intents: options.intents,
      partials: options.partials,
    });

    const { defaultPrefix, defaultCooldown, startupDisplay } = options;
    this.defaultCooldown = defaultCooldown;
    this.defaultPrefix = defaultPrefix;
    this.joinMessage = options.joinMessage;

    const _loggerFactory = LoggerFactory.getInstance();
    this.logger = _loggerFactory.Logger('Scripticus',format(process.env.LOGGER_TYPE));
    console.log(chalk.yellow(startupDisplay));
  }

  private async loadEvents() {
    this.logger.Log('Loading events...');

    const eventFiles = fs
      .readdirSync(`${__dirname}/events`)
      .filter((file) => file.endsWith('.ts') || file.endsWith('.js'));

    let count = 0;
    for (const file of eventFiles) {
      const { once, event, handle } = (await import(`./events/${file}`)) as EventHandler;
      once ? this.once(event, handle) : this.on(event, handle);
      count++;
    }

    this.logger.Log(`Loaded ${count} events`);
  }

  private async loadCommands() {
    const slashCommands = await this.loadCommandsOf<SlashCommand>('slash');
    slashCommands.forEach((command) => {
      this.commands.set(command.name, command);
      this.cooldowns.set(command.name, new Collection<string, number>());
    });

    // const userCommands = await this.loadCommandsOf<UserCommand>('user');
    // userCommands.forEach(command => this.userCommands.set(command.name, command));

    // const messageCommands = await this.loadCommandsOf<MessageCommand>('message');
    // messageCommands.forEach(command => this.messageCommands.set(command.name, command))
  }

  private async loadCommandsOf<T>(folder: string): Promise<T[]> {
    this.logger.Log(`Loading ${folder} commands...`);

    const imports = await Promise.all(
      fs
        .readdirSync(`${__dirname}/commands/${folder}/`)
        .filter((file) => file.endsWith('.js'))
        .map(async (file) => {
          try {
            return await import(`./commands/${folder}/${file}`);
          } catch (err) {
            this.logger.Error(`Error loading ${file}`);
            this.logger.Error(err);
          }
        })
    );

    const commands = imports
      .filter((imported) => imported != undefined)
      .map((imported) => new imported.command(this));

    this.logger.Log(`Loaded ${commands.length} ${folder} commands`);
    return commands;
  }

  async registerGlobalCommands() {
    this.logger.Log('Registering application commands...');
    const commands = [...this.commands /*...this.userCommands, ...this.messageCommands*/];

    const toRegister = await Promise.all(
      commands
        .filter(([, command]) => command.global)
        .map(([, command]) => command.generateDetails())
    );

    const results = await this.application?.commands.set(toRegister)!;
    this.logger.Log(`Registered ${results.size} command${results.size === 1 ? '' : 's'}`);
  }

  private async loadGuildSettings() {
    await this.db.connectToDatabase();
    this.logger.Log('Loading guild specific settings...');

    const results = await this.db.getAllGuildSettings();
    results.forEach((result) => this.guildSettings.set(result.guildId, result.settings));

    this.logger.Log(`Loaded settings for ${results.length} servers`);
  }

  async updateGuildPrefix(guildId: string, prefix: string = this.defaultPrefix) {
    const settings = this.guildSettings.get(guildId) ?? {};
    const newSettings = { ...settings, prefix };
    this.guildSettings.set(guildId, newSettings);

    const results = await this.db.updateGuildSettings(guildId, newSettings);
    return results.prefix!;
  }

  getPrefix(guild?: Guild): string {
    if (guild == undefined) return '';
    return this.guildSettings.get(guild.id)?.prefix ?? this.defaultPrefix;
  }

  async login(token: string): Promise<string> {
    await this.loadGuildSettings();
    await this.loadEvents();
    await this.loadCommands();
    await super.login(token);

    return 'HIDDEN TOKEN';
  }

  async stop() {
    try {
      this.logger.Log('-----Stopping Scripticus-----');
      await this.db.disconnect();

      this.logger.Log('-----Destroying client-----');
      this.destroy();

      this.logger.Log('-----Exiting process-----');
      process.exit(0);
    } catch (err) {
      this.logger.Error('ERROR:');
      this.logger.Error(err);
    }
  }
}
