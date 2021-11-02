import {
  ContextMenuInteraction,
  Message,
  MessageEmbed,
  User,
} from 'discord.js';
import { MessageCommand } from '../commandClasses';

class MessageInfoCommand extends MessageCommand {
  constructor() {
    super('message info')
  }

  execute(user: User, message: Message) {
    const embed = new MessageEmbed()
      .setAuthor(
        `${message.author.username}`,
        message.author.displayAvatarURL()
      )
      .setDescription(message.content)
      .setFooter(`Queried by ${user.username}`, user.displayAvatarURL());

    return { embeds: [embed] };
  }

  async handleInteract(interaction: ContextMenuInteraction) {
    await interaction.deferReply({ ephemeral: true });
    const message = interaction.options.data[0].message as Message;

    const results = this.execute(interaction.user, message);

    await interaction.editReply(results);
  }
}

export const command = MessageInfoCommand;
