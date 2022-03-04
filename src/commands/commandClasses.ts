import { SlashCommandBuilder, ContextMenuCommandBuilder } from '@discordjs/builders';
import {
  ContextMenuInteraction,
  CommandInteraction,
  BaseCommandInteraction,
  MessageContextMenuInteraction,
  UserContextMenuInteraction,
} from 'discord.js';
import { ApplicationCommandTypes } from 'discord.js/typings/enums';

export abstract class ApplicationCommand {
  protected abstract type: ApplicationCommandTypes;
  protected defaultPermission = true;
  abstract commandBuilder: SlashCommandBuilder | ContextMenuCommandBuilder;
  name: string;
  roleRequired: string = 'EVERYONE';
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

  abstract handleInteract(interaction: BaseCommandInteraction): void;
}

export abstract class SlashCommand extends ApplicationCommand {
  type: ApplicationCommandTypes.CHAT_INPUT = ApplicationCommandTypes.CHAT_INPUT;
  commandBuilder = new SlashCommandBuilder();
  description: string;

  constructor(name: string, description: string) {
    super(name);
    if (description.length < 1 || description.length > 100)
      throw new TypeError(
        `"description" field must be betweeen 1 and 100 characters! Provided ${description.length}`
      );
    this.description = description;
    this.commandBuilder
      .setName(this.name)
      .setDefaultPermission(this.defaultPermission)
      .setDescription(this.description);
  }

  abstract handleInteract(interaction: CommandInteraction): void;
}

export abstract class ContextMenuCommand extends ApplicationCommand {
  abstract type: Exclude<ApplicationCommandTypes, ApplicationCommandTypes.CHAT_INPUT>;
  commandBuilder = new ContextMenuCommandBuilder();

  constructor(name: string) {
    super(name);
    this.commandBuilder.setName(this.name).setDefaultPermission(this.defaultPermission);
  } 

  abstract handleInteract(interaction: ContextMenuInteraction): void;
}

export abstract class MessageCommand extends ContextMenuCommand {
  type: ApplicationCommandTypes.MESSAGE = ApplicationCommandTypes.MESSAGE;

  abstract handleInteract(interaction: MessageContextMenuInteraction): void;
}

export abstract class UserCommand extends ContextMenuCommand {
  type: ApplicationCommandTypes.USER = ApplicationCommandTypes.USER;

  abstract handleInteract(interaction: UserContextMenuInteraction): void;
}
