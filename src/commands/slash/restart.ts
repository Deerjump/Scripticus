import { Scripticus } from "@customTypes";
import { noMentions } from "../../utils/utils";
import { ApplicationCommandOptionData, CommandInteraction, Message } from "discord.js";
import { SlashCommand } from "../commandClasses";

class RestartCommand extends SlashCommand {
  readonly name = 'restart';
  readonly description = 'Restarts the bot!';
  private readonly whitelist = ['90598254688874496', '191085842469486592'];
  
  constructor() {
    super('restart', 'Restarts the bots!');
    this.defaultPermission = false;
    this.permissions.push({
      id: '191085842469486592',
      type: 'USER',
      permission: true
    })
  }

  protected get options(): ApplicationCommandOptionData[] {
    return [];
  }

  async handleInteract(interaction: CommandInteraction) {
    await interaction.reply({ content: 'Restarting the bot!', ephemeral: true });
    this.execute(interaction.client as Scripticus);
  }

  async execute(client: Scripticus) {
    client.stop();
  }

  async handleMessage(message: Message): Promise<void> {
    if (this.whitelist.includes(message.author.id)) {
      await message.reply({
        content: 'Restarting bot!',
        ...noMentions
      });
      return (message.client as Scripticus).stop();
    }
  }
};

export const command = RestartCommand;