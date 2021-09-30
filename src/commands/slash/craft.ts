import { ItemData, RecipeData, TotalRecipe } from '@customTypes';
import { OptionBuilder } from '../../utils/builders/optionBuilder';
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
  ApplicationCommandOptionData,
  TextBasedChannels,
} from 'discord.js';

class CraftCommand extends SlashCommand {
  readonly usage = '<item name> <item quantity>';
  readonly args = true;

  protected get options(): ApplicationCommandOptionData[] {
    return [
      new OptionBuilder('itemname', 'STRING')
        .withDescription("The item's name")
        .require()
        .build(),
      new OptionBuilder('amount', 'NUMBER')
        .withDescription('How many you want to craft')
        .build(),
      hidden,
    ];
  }

  constructor() {
    super('craft', 'Returns all resources/sub-items needed to craft an item!');
  }

  async execute(
    itemName: string,
    amount: number,
    authorId: string,
    channel: TextBasedChannels
  ) {
    const item = itemRepository.getItem(itemName);

    if (item == undefined) {
      return {
        response: {
          embeds: [
            new MessageEmbed().setDescription(
              'Invalid item, please try again! Check the [wiki](https://idleon.miraheze.org/wiki/Smithing) for a list of all craftable items!'
            ),
          ],
        },
      };
    }

    if (item.recipeData == undefined) {
      return {
        response: {
          content: `${item.displayName} doesn't have a crafting recipe!`,
        },
      };
    }

    const recipeEmbed = this.generateRecipeEmbed(item, amount);

    const collector = channel.createMessageComponentCollector({
      filter: (i: ButtonInteraction) =>
        i.customId === 'recipe' || i.customId === 'materials',
      componentType: 'BUTTON',
      time: 60000,
    })!;

    collector.on('collect', async (interaction) => {
      if (interaction.user.id !== authorId) {
        return interaction.reply({
          content: "❌ You cannot interact with someone else's command!",
          ephemeral: true,
        });
      }

      if (interaction.customId === 'recipe')
        await interaction.update(recipeEmbed);
      if (interaction.customId === 'materials')
        await interaction.update(this.generateMaterialsEmbed(item, amount));
    });

    return { response: recipeEmbed, collector };
  }

  async handleInteract(interaction: CommandInteraction) {
    const hidden = interaction.options.getBoolean('hidden') ?? true;
    await interaction.deferReply({ ephemeral: hidden });

    const itemName = interaction.options.getString('itemname', true);
    const amount = interaction.options.getNumber('amount') ?? 1;

    const { response, collector } = await this.execute(
      itemName,
      amount,
      interaction.user.id,
      interaction.channel!
    );
    if (!interaction.replied) await interaction.followUp(response);

    if (collector == undefined) return;

    collector.on('end', async () => {
      await interaction.editReply({ components: [] });
    });
  }

  async handleMessage(message: Message, args: string[]): Promise<void> {
    const lastArg = args[args.length - 1];
    const isPositive = this.isPosInteger(lastArg);
    const userInput = isPositive ? args.slice(0, -1).join(' ') : args.join(' ');
    const amount = isPositive ? Number(lastArg) : 1;

    const { response, collector } = await this.execute(
      userInput,
      amount,
      message.author.id,
      message.channel
    );

    await message.reply({ ...response, ...noMentions });

    if (collector == undefined) return;

    collector.on('end', async () => {
      await message.edit({ components: [] });
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
      new MessageButton()
        .setCustomId('recipe')
        .setLabel('Show Tiered Recipe')
        .setStyle('PRIMARY')
    );

    return this.createMessage(title, text, row);
  }

  private generateMaterialsText(materialsObj: any) {
    return Object.entries(materialsObj)
      .map(
        ([itemCode, qty]) =>
          `- ${itemRepository.getItem(itemCode)!.displayName} (x${qty})`
      )
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
    const text = this.generateRecipeText(
      this.generateRecipe(item.recipeData!),
      0,
      amount
    );

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
        recipe:
          item.recipeData == undefined
            ? undefined
            : this.generateRecipe(item.recipeData),
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
