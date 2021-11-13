import { UserCommand } from '../commandClasses';
import {
  User,
  Guild,
  MessageEmbed,
  ContextMenuInteraction,
} from 'discord.js';

class UserInfoCommand extends UserCommand {
  constructor() {
    super('User Details');
  }

  async execute(user: User, guild: Guild) {
    const member = guild.members.cache.get(user.id);
    const embed = new MessageEmbed()
      .setAuthor(`User info for ${user.username}`, user.displayAvatarURL())
      .addFields([
        {
          name: 'Acount created:',
          value: `${user.createdAt.toLocaleDateString()}`,
        },
        {
          name: 'Joined Server:',
          value: `${member!.joinedAt!.toLocaleDateString()}`,
        },
      ]);

    return { embeds: [embed] };
  }

  async handleInteract(interaction: ContextMenuInteraction) {
    await interaction.deferReply();

    const response = await this.execute(interaction.user, interaction.guild!);

    interaction.editReply(response);
  }
}

export const command = UserInfoCommand;
