import {
  ContextMenuCommandInteraction,
  CommandInteraction,
  MessageContextMenuCommandInteraction,
  UserContextMenuCommandInteraction,
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  ContextMenuCommandBuilder,
  ApplicationCommandType,
  ContextMenuCommandType,
} from 'discord.js';

export abstract class ApplicationCommand {
  private readonly MAX_NAME_LENGTH = 32;
  protected defaultPermission = true;
  abstract commandBuilder: SlashCommandBuilder | ContextMenuCommandBuilder;
  roleRequired: string = 'EVERYONE';
  global = true;
  name: string;

  constructor(name: string) {
    if (!name || name === '') {
      throw new TypeError(`"name" field cannot be null or empty!`);
    }
    if (name.length > this.MAX_NAME_LENGTH) {
      throw new RangeError(`"name" field must be less than ${this.MAX_NAME_LENGTH} characters`);
    }

    this.name = name;
  }

  abstract handleInteract(interaction: CommandInteraction): void;
}

export abstract class SlashCommand extends ApplicationCommand {
  type = ApplicationCommandType.ChatInput;
  commandBuilder = new SlashCommandBuilder();
  description: string;

  constructor(name: string, description: string) {
    super(name);
    const nameRegex = /^[[a-z0-9_\]-]*$/;

    if (!nameRegex.test(name)) {
      throw new TypeError(`"name" must be all lower case without spaces. Provided: '${name}'`);
    }

    if (description.length < 1 || description.length > 100) {
      throw new TypeError(
        `"description" field must be betweeen 1 and 100 characters! Provided ${description.length}`
      );
    }

    this.description = description;
    this.commandBuilder
      .setName(this.name)
      .setDescription(this.description);
  }

  abstract handleInteract(interaction: ChatInputCommandInteraction): void;
}

export abstract class ContextMenuCommand extends ApplicationCommand {
  commandBuilder = new ContextMenuCommandBuilder();
  constructor(name: string, type: ContextMenuCommandType) {
    super(name);
    this.commandBuilder.setName(this.name);
    this.commandBuilder.setType(type);
  }

  abstract handleInteract(interaction: ContextMenuCommandInteraction): void;
}

export abstract class MessageCommand extends ContextMenuCommand {
  constructor(name: string) {
    super(name, ApplicationCommandType.Message);
  }

  abstract handleInteract(interaction: MessageContextMenuCommandInteraction): void;
}

export abstract class UserCommand extends ContextMenuCommand {
  
  constructor(name: string) {
    super(name, ApplicationCommandType.User);
  }

  abstract handleInteract(interaction: UserContextMenuCommandInteraction): void;
}
