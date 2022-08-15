// import { UserCommand } from '../commandClasses';
// import {
//   User,
//   Guild,
//   EmbedBuilder,
//   UserContextMenuCommandInteraction,
// } from 'discord.js';

// class UserInfoCommand extends UserCommand {
//   constructor() {
//     super('User Details');
//   }

//   async execute(user: User, guild: Guild) {
//     const member = guild.members.cache.get(user.id);
//     const embed = new EmbedBuilder()
//       .setAuthor({
//         name: `User info for ${user.username}`,
//       })
//       .addFields([
//         {
//           name: 'Acount created:',
//           value: `${user.createdAt.toLocaleDateString()}`,
//         },
//         {
//           name: 'Joined Server:',
//           value: `${member!.joinedAt!.toLocaleDateString()}`,
//         },
//       ]);

//     return { embeds: [embed] };
//   }

//   async handleInteract(interaction: UserContextMenuCommandInteraction) {
//     await interaction.deferReply();

//     const response = await this.execute(interaction.user, interaction.guild!);

//     interaction.editReply(response);
//   }
// }

// export const command = UserInfoCommand;
