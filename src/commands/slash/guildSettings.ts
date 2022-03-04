import { SlashCommand } from '../commandClasses';
import {
  Message,
  CommandInteraction,
  Guild,
  CommandInteractionOptionResolver,
} from 'discord.js';
import { Scripticus } from '@customTypes';

class GuildSettingsCommand extends SlashCommand {
  defaultPermission = false;
  constructor(private client: Scripticus) {
    super('settings', 'configure settings for commands for your guild');
    this.roleRequired = 'ADMIN';
  }

  // private async getCommandOptions(guild: Guild): Promise<ApplicationCommandOptionData[]> {
  //   const commands = (await guild.commands.fetch()).map(({ name }) => {
  //     return { name, value: name };
  //   });
  //   const options = [
  //     new OptionBuilder('command', 'STRING')
  //       .withDescription('The command to configure')
  //       .withChoices(...commands)
  //       .require()
  //       .build(),
  //     new OptionBuilder('role', 'ROLE').withDescription('The target role').build(),
  //     new OptionBuilder('user', 'USER').withDescription('The target user').build(),
  //     // TODO: new OptionBuilder('channel', 'CHANNEL').withDescription('The target channel').build(),
  //   ];

  //   return [
  //     new OptionBuilder('commands', 'SUB_COMMAND_GROUP')
  //       .withDescription('Configure command permissions')
  //       .withOptions(
  //         new OptionBuilder('allow', 'SUB_COMMAND')
  //           .withDescription('Allow access')
  //           .withOptions(...options)
  //           .build(),
  //         new OptionBuilder('restrict', 'SUB_COMMAND')
  //           .withDescription('Restrict access')
  //           .withOptions(...options)
  //           .build()
  //       )
  //       .build(),
  //   ];
  // }

  async configureCommands(interaction: CommandInteraction) {
    const { options, guild } = interaction;
    const subCommand = options.getSubcommand(true);
    const commandName = options.getString('command', true);
    const command = (await guild!.commands.fetch()).find((c) => c.name === commandName);

    if (command == undefined) {
      return { content: `Command: ${commandName} does not exist!` };
    }

    const role = options.getRole('role');
    const user = options.getUser('user');

    if (user?.id === interaction.user.id) {
      return { content: "You can't moderate your own permissions for commands!" };
    }

    if (user != undefined) {
      subCommand == 'allow'
        ? await command.permissions.add({
            permissions: [{ id: user.id, type: 'USER', permission: true }],
          })
        : await command.permissions.remove({ users: [user.id] });
    }

    if (role != undefined) {
      subCommand == 'allow'
        ? await command.permissions.add({
            permissions: [{ id: role.id, type: 'ROLE', permission: true }],
          })
        : await command.permissions.remove({ roles: [role.id] });
    }
    return { content: 'Done!' };
  }

  async execute(interaction: CommandInteraction) {
    // switch (interaction.options.getSubcommandGroup()) {
    //   case 'commands': {
    //     return await this.configureCommands(interaction);
    //   }
    // }
    return { content: 'This command is unavailable at the moment'}
  }

  async handleInteract(interaction: CommandInteraction) {
    await interaction.deferReply({ ephemeral: true });

    const response = await this.execute(interaction);

    await interaction.editReply(response);
  }
}

export const command = GuildSettingsCommand;
