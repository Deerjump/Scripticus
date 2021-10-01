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
} from '@customTypes';
import {
  MessageCommand,
  SlashCommand,
  UserCommand,
} from './commands/commandClasses';

export class ScripticusBot extends Client implements Scripticus {
  readonly cooldowns = new Collection<string, Collection<string, number>>();
  readonly messageCommands = new Collection<string, MessageCommand>();
  readonly guildSettings = new Collection<string, GuildSettings>();
  readonly userCommands = new Collection<string, UserCommand>();
  readonly commands = new Collection<string, SlashCommand>();
  private logger = new Logger('Scripticus');
  readonly defaultCooldown: number;
  readonly defaultPrefix: string;

  constructor(public readonly db: Database, options: ScripticusOptions) {
    super({
      intents: options.intents,
      partials: options.partials,
    });

    const { defaultPrefix, defaultCooldown, startupDisplay } = options;
    this.defaultCooldown = defaultCooldown;
    this.defaultPrefix = defaultPrefix;

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
    this.logger.log(`Loading ${folder} commands...`);

    const imports = await Promise.all(
      fs
        .readdirSync(`${__dirname}/commands/${folder}/`)
        .filter((file) => file.endsWith('.js'))
        .map(async (file) => {
          try {
            return await import(`./commands/${folder}/${file}`);
          } catch (err) {
            this.logger.error(`Error loading ${file}`);
            this.logger.error(err);
          }
        })
    );

    const commands = imports.map(
      (imported) => new imported.command(this)
    );

    this.logger.log(`Loaded ${commands.length} ${folder} commands`);
    return commands;
  }

  // The token will potentially be necessary. Just leaving it for now.
  async registerApplicationCommands(botToken: string) {
    this.logger.log('Registering application commands...');
    const devGuildId = '791017497997606922';
    const toRegister = [
      ...this.commands /*...this.userCommands, ...this.messageCommands*/,
    ];

    const promises = toRegister
      .filter(([, command]) => command.details != null)
      .map(async ([, command]) => {
        try {
          const result = await this.application?.commands.create(
            command.details,
            devGuildId
          );
          this.logger.log(`${command.name} registered`);

          if (command.permissions.length > 0) {
            await result?.permissions.add({ permissions: command.permissions });
            this.logger.log(`Added permissions to ${command.name}`);
          }
        } catch (err) {
          this.logger.error(err);
        }
      });

    await Promise.all(promises);

    const guild = await this.guilds.fetch(devGuildId);
    const commands = await guild.commands.fetch();

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
