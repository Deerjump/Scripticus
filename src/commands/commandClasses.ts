import { ModerationLevel } from '@customTypes';
import {
  ChatInputApplicationCommandData,
  MessageApplicationCommandData,
  ApplicationCommandOptionData,
  UserApplicationCommandData,
  ApplicationCommandData,
  ContextMenuInteraction,
  CommandInteraction,
  Message,
  ApplicationCommandPermissions,
} from 'discord.js';

export abstract class ApplicationCommand {
  protected defaultPermission = true;
  // You can't set permissions on global commands yet, (only guild specific commands)
  permissions: ApplicationCommandPermissions[] = [];
  name: string;
  roleRequired: ModerationLevel = 'EVERYONE';
  global = true;

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

  get details(): ApplicationCommandData {
    return {
      name: this.name,
      defaultPermission: this.defaultPermission,
      // This description is just to satisfy ApplicationCommandData. Will never be used.
      description: ''
    };
  }

  abstract execute(...args: any[]): any;
}

export abstract class SlashCommand extends ApplicationCommand {
  description: string;
  // this isn't a property to allow for dynamic stuff like help's ability to see all commands.
  protected abstract get options(): ApplicationCommandOptionData[];
  usage?: string;
  args?: boolean;
  aliases?: string[];

  constructor(name: string, description: string) {
    super(name);
    if (description.length < 1 || description.length > 100)
      throw new TypeError(
        `"description" field must be betweeen 1 and 100 characters! Provided${description.length}`
      );
    this.description = description;
  }

  get details(): ChatInputApplicationCommandData {
    return {
      ...super.details,
      type: 'CHAT_INPUT',
      description: this.description,
      options: this.options,
    };
  }

  abstract handleMessage(message: Message, args: string[]): any;
  abstract handleInteract(interaction: CommandInteraction): any;
}

export abstract class ContextMenuCommand extends ApplicationCommand {
  abstract handleInteract(interaction: ContextMenuInteraction): any;
}

export abstract class UserCommand extends ContextMenuCommand {
  get details(): UserApplicationCommandData {
    return {
      ...super.details,
      type: 'USER',
    };
  }
}

export abstract class MessageCommand extends ContextMenuCommand {
  get details(): MessageApplicationCommandData {
    return {
      ...super.details,
      type: 'MESSAGE',
    };
  }
}
