import { InteractionFilter, ItemData, RecipeData, TotalRecipe } from '@customTypes';
import itemRepository from '../../repositories/itemRepository';
import { hidden, noMentions } from '../../utils/utils';
import { SlashCommand } from '../commandClasses';
import {
  MessageEmbed,
  MessageActionRow,
  MessageButton,
  Message,
  ButtonInteraction,
  CommandInteraction,
  TextBasedChannel,
  InteractionCollector,
} from 'discord.js';

interface CommanDetails {
  itemName: string;
  amount: number;
  authorId: string;
}

class CraftCommand extends SlashCommand {
  readonly usage = '<item name> <item quantity>';
  readonly args = true;
  private readonly COLLECTOR_TIMEOUT = 60000;
  private readonly COLLECTOR_FILTER = (i: ButtonInteraction) =>
    i.customId === 'recipe' || i.customId === 'materials';

  constructor() {
    super('craft', 'Returns all resources/sub-items needed to craft an item!');
    this.commandBuilder
      .addStringOption((option) =>
        option.setName('itemname').setDescription(`The item's name`).setRequired(true)
      )
      .addIntegerOption((option) =>
        option.setName('amount').setDescription('How many you want to craft')
      )
      .addBooleanOption(hidden);
  }

  async execute(
    { itemName, amount, authorId }: CommanDetails,
    collector: InteractionCollector<ButtonInteraction>
  ) {
    const item = itemRepository.getItem(itemName);

    if (item == undefined) {
      return {
        embeds: [
          new MessageEmbed().setDescription(
            'Invalid item, please try again! Check the [wiki](https://idleon.miraheze.org/wiki/Smithing) for a list of all craftable items!'
          ),
        ],
      };
    }

    if (item.recipeData == undefined) {
      return {
        content: `${item.displayName} doesn't have a crafting recipe!`,
      };
    }

    const recipeEmbed = this.generateRecipeEmbed(item, amount);

    collector.on('collect', async (interaction) => {
      if (interaction.user.id !== authorId) {
        return interaction.reply({
          content: "❌ You cannot interact with someone else's command!",
          ephemeral: true,
        });
      }

      if (interaction.customId === 'recipe') await interaction.update(recipeEmbed);
      if (interaction.customId === 'materials')
        await interaction.update(this.generateMaterialsEmbed(item, amount));
    });

    return recipeEmbed;
  }

  async handleInteract(interaction: CommandInteraction) {
    const hidden = interaction.options.getBoolean('hidden') ?? true;
    await interaction.deferReply({ ephemeral: hidden });
    const itemName = interaction.options.getString('itemname', true);
    const amount = interaction.options.getNumber('amount') ?? 1;

    const collector = this.createButtonCollector(
      interaction.channel!,
      (i) => i.message.interaction?.id === interaction.id
    );

    collector.on('end', async () => {
      await interaction.editReply({ components: [] });
    });

    const commandDetails = { itemName, amount, authorId: interaction.user.id };

    const response = await this.execute(commandDetails, collector);

    if (!interaction.replied) await interaction.followUp(response);
  }

  async handleMessage(message: Message, args: string[]): Promise<void> {
    const lastArg = args[args.length - 1];
    const isPositive = this.isPosInteger(lastArg);
    const itemName = isPositive ? args.slice(0, -1).join(' ') : args.join(' ');
    const amount = isPositive ? Number(lastArg) : 1;

    const collector = this.createButtonCollector(
      message.channel,
      (i) => i.message.id == message.id
    );

    const commandDetails = { itemName, amount, authorId: message.author.id };
    const response = await this.execute(commandDetails, collector);

    const msgResponse = await message.reply({ ...response, ...noMentions });

    collector.on('end', async () => {
      await msgResponse.edit({ components: [] });
    });
  }

  private createButtonCollector(
    channel: TextBasedChannel,
    filter: InteractionFilter<ButtonInteraction>,
    time = this.COLLECTOR_TIMEOUT
  ) {
    return channel.createMessageComponentCollector({
      filter: (i: ButtonInteraction) => filter(i) && this.COLLECTOR_FILTER(i),
      componentType: 'BUTTON',
      time,
    });
  }

  private createMessage(title: string, text: string, row: MessageActionRow) {
    const description = `\`\`\`${text}\`\`\``;
    return {
      embeds: [new MessageEmbed().setTitle(title).setDescription(description)],
      components: [row],
    };
  }

  private generateMaterialsEmbed(item: ItemData, amount: number) {
    const materials = this.getTotalMaterials(item, amount);
    const title = `Total materials for ${item.displayName} (x${amount})`;
    const text = this.generateMaterialsText(materials);

    const row = new MessageActionRow().addComponents(
      new MessageButton().setCustomId('recipe').setLabel('Show Tiered Recipe').setStyle('PRIMARY')
    );

    return this.createMessage(title, text, row);
  }

  private generateMaterialsText(materialsObj: any) {
    return Object.entries(materialsObj)
      .map(([itemCode, qty]) => `- ${itemRepository.getItem(itemCode)!.displayName} (x${qty})`)
      .join('\n');
  }

  private getTotalMaterials(item: ItemData, craftAmount: number) {
    // format the total materials to what we use
    return item.detRecipeTotals!.reduce(
      (obj, [itemCode, qty]) => ({ ...obj, [itemCode]: qty * craftAmount }),
      {}
    );
  }

  private generateRecipeEmbed(item: ItemData, amount: number) {
    const title = `Crafting recipe for ${item.displayName} (x${amount})`;
    const text = this.generateRecipeText(this.generateRecipe(item.recipeData!), 0, amount);

    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId('materials')
        .setLabel('Show Total Materials')
        .setStyle('PRIMARY')
    );

    return this.createMessage(title, text, row);
  }

  private generateRecipeText(
    recipe: TotalRecipe,
    depth: number = 0,
    multiplier: number = 1,
    recipeTextArr: string[] = []
  ) {
    const sorted = Object.values(recipe).sort((a) => {
      return a.recipe == undefined ? -1 : 1;
    });

    for (const item of sorted) {
      const amount = item.amount * multiplier;
      const indent = ' '.repeat(depth * 3);
      const line = `${indent}- ${item.name} (x${amount})`;
      recipeTextArr.push(line);

      if (item.recipe == undefined) continue;
      this.generateRecipeText(item.recipe, depth + 1, amount, recipeTextArr);
    }
    return recipeTextArr.join('\n');
  }

  private generateRecipe(recipeData: RecipeData): TotalRecipe {
    const totalRecipe: TotalRecipe = {};

    for (const [itemCode, itemQty] of recipeData.recipe) {
      const item = itemRepository.getItem(itemCode)!;
      const ingredientInfo = {
        name: item.displayName,
        amount: Number(itemQty),
        recipe: item.recipeData == undefined ? undefined : this.generateRecipe(item.recipeData),
      };

      totalRecipe[itemCode] = ingredientInfo;
    }

    return totalRecipe;
  }

  private isPosInteger(val: string): boolean {
    return !isNaN(Number(val)) && Number(val) > 0;
  }
}

export const command = CraftCommand;
