import { CommandType, ModerationLevel, OptionallyAsync } from '@customTypes';
import {
  ChatInputApplicationCommandData,
  MessageApplicationCommandData,
  ApplicationCommandOptionData,
  UserApplicationCommandData,
  ContextMenuInteraction,
  CommandInteraction,
  Message,
  Guild,
  BaseApplicationCommandData,
} from 'discord.js';
import { ApplicationCommandTypes } from 'discord.js/typings/enums';

export abstract class ApplicationCommand {
  protected defaultPermission = true;
  // You can't set permissions on global commands yet, (only guild specific commands)
  abstract type: CommandType;
  name: string;
  roleRequired: ModerationLevel = 'EVERYONE';
  global = false;

  constructor(name: string) {
    // https://discord.com/developers/docs/interactions/application-commands#application-commands
    const regex = /^[[a-z0-9_\]-]{1,32}$/;
    if (!regex.test(name)) {
      throw new TypeError(
        '"name" must be all lower case without spaces and less than 32 characters long'
      );
    }
    this.name = name;
  }

  abstract generateDetails(): Promise<BaseApplicationCommandData>;

  protected get details(): BaseApplicationCommandData {
    return {
      name: this.name,
      defaultPermission: this.defaultPermission,
    };
  }

  protected abstract execute(...args: any[]): any;
}

export abstract class SlashCommand extends ApplicationCommand {
  type: 'CHAT_INPUT' | ApplicationCommandTypes.CHAT_INPUT = 'CHAT_INPUT';
  description: string;
  usage?: string;
  args?: boolean;
  aliases?: string[];

  constructor(name: string, description: string) {
    super(name);
    if (description.length < 1 || description.length > 100)
      throw new TypeError(
        `"description" field must be betweeen 1 and 100 characters! Provided ${description.length}`
      );
    this.description = description;
  }

  protected generateOptions(guild?: Guild): OptionallyAsync<ApplicationCommandOptionData[]> {
    return [];
  }

  async generateDetails(guild?: Guild): Promise<ChatInputApplicationCommandData> {
    return {
      ...super.details,
      type: this.type,
      description: this.description,
      options: await this.generateOptions(guild),
    };
  }

  abstract handleMessage(message: Message, args: string[]): any;
  abstract handleInteract(interaction: CommandInteraction): any;
}

export abstract class ContextMenuCommand extends ApplicationCommand {
  abstract handleInteract(interaction: ContextMenuInteraction): any;
}

export abstract class UserCommand extends ContextMenuCommand {
  type: 'USER' | ApplicationCommandTypes.USER = 'USER';

  async generateDetails(): Promise<UserApplicationCommandData> {
    return {
      ...super.details,
      type: this.type,
    }
  }
}

export abstract class MessageCommand extends ContextMenuCommand {
  type: 'MESSAGE' | ApplicationCommandTypes.MESSAGE = 'MESSAGE';

  async generateDetails(): Promise<MessageApplicationCommandData> {
    return {
      ...super.details,
      type: this.type
    }
  } 
}
