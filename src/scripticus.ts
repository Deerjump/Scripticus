import { Client, Collection, Message } from 'discord.js';
import { Logger } from './utils/logger';
import chalk from 'chalk';
import * as fs from 'fs';
import {
  GuildSettings,
  Scripticus,
  Event,
  ScripticusOptions,
  Database,
  iUserCommand,
  iMessageCommand,
  iSlashCommand,
} from '@customTypes';

export class ScripticusBot extends Client implements Scripticus {
  private canRegisterCommands = true;
  private readonly logger: Logger;
  readonly defaultPrefix: string;
  readonly defaultCooldown: number;
  readonly commands: Collection<string, iSlashCommand>;
  readonly userCommands: Collection<string, iUserCommand>;
  readonly messageCommands: Collection<string, iMessageCommand>;
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
    this.commands = new Collection<string, iSlashCommand>();
    this.userCommands = new Collection<string, iUserCommand>();
    this.messageCommands = new Collection<string, iMessageCommand>();
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
    const slashCommands = await this.loadCommandsOf<iSlashCommand>('slash');
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
    this.logger.log(`Loading ${folder} commands...`);

    const promises = await Promise.allSettled(
      fs
        .readdirSync(`${__dirname}/commands/${folder}/`)
        .filter((file) => file.endsWith('.js'))
        .map(async (file) => await import(`./commands/${folder}/${file}`))
    );

    const commands = promises
      .filter((promise) => {
        if (promise.status === 'rejected') {
          this.logger.error(promise.reason);
        }
        return promise.status === 'fulfilled';
      })
      .map(
        (promise) =>
          new (promise as PromiseFulfilledResult<any>).value.command(this)
      );

    this.logger.log(`Loaded ${commands.length} ${folder} commands`);
    return commands;
  }

  async registerApplicationCommands() {
    if (!this.canRegisterCommands) return;
    this.logger.log('Registering application commands...');

    const devGuildId = '791017497997606922';
    const toRegister = [
      ...this.commands /*...this.userCommands, ...this.messageCommands*/,
    ];

    // register all available slash commands
    for (const [, command] of toRegister) {
      if (command.details == null) continue;
      try {
        const result = await this.application?.commands.create(command.details, devGuildId);
        if(result?.name === 'restart') {
          result.permissions.add({ permissions: [{
            id: '191085842469486592',
            type: 'USER',
            permission: true
          }]});
        }
        this.logger.log(`${command.name} registered`);
      } catch (err) {
        this.logger.error(err);
      }
    }

    const guild = await this.guilds.fetch(devGuildId);
    const commands = await guild.commands.fetch();
    this.canRegisterCommands = false;
    this.logger.log(
      `Registered ${commands?.size} command${commands?.size === 1 ? '' : 's'}.`
    );
  }

  private async loadGuildSettings() {
    await this.db.connectToDatabase();
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
    await this.loadGuildSettings();
    await this.loadEvents();
    await this.loadCommands();
    await super.login(token);

    return 'HIDDEN TOKEN';
  }

  async stop() {
    try {
      this.logger.log('-----Stopping Scripticus-----');
      await this.db.disconnect();

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
