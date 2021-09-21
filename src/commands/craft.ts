import { Command, ItemData, RecipeData, TotalRecipe } from '@customTypes/types';
import {
  MessageEmbed,
  MessageActionRow,
  MessageButton,
  Message,
  ButtonInteraction,
} from 'discord.js';
import itemRepository from '../repositories/itemRepository';

class CraftCommand implements Command {
  public readonly name = 'craft';
  public readonly description =
    'Returns all resources/sub-items needed to craft an item!';
  public readonly usage = '<item name> <item quantity>';
  public readonly args = true;

  public async execute(message: Message, args: string[]) {
    const lastArg = args[args.length - 1];
    const isPositive = this.isPosInteger(lastArg);
    const userInput = isPositive ? args.slice(0, -1).join(' ') : args.join(' ');
    const amount = isPositive ? Number(lastArg) : 1;
    const item = itemRepository.getItem(userInput);

    if (item == null) {
      return message.reply({
        embeds: [
          new MessageEmbed().setDescription(
            'Invalid item, please try again! Check the [wiki](https://idleon.miraheze.org/wiki/Smithing) for a list of all craftable items!'
          ),
        ],
        allowedMentions: { users: [] },
      });
    }

    if (item.recipeData == null) {
      return message.reply({
        content: `${item.displayName} doesn't have a crafting recipe!`,
        allowedMentions: { users: [] },
      });
    }

    const recipeEmbed = this.generateRecipeEmbed(item, amount);
    const sentEmbed = await message.reply(recipeEmbed);

    const collector = sentEmbed.createMessageComponentCollector({
      filter: (i: ButtonInteraction) =>
        i.customId === 'recipe' || i.customId === 'materials',
      componentType: 'BUTTON',
      time: 60000,
    });

    collector.on('collect', async (interaction) => {
      if (interaction.user.id !== message.author.id) {
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

    collector.on('end', (collected) => {
      if (collected.size === 0) return this.timeoutMessage(sentEmbed);
      this.timeoutMessage(collected.first()!.message as Message);
    });
  }

  private createMessage(title: string, text: string, row: MessageActionRow) {
    const description = `${'```'}${text}${'```'}`;
    return {
      embeds: [new MessageEmbed().setTitle(title).setDescription(description)],
      components: [row],
      fetchReply: true,
      allowedMentions: { users: [] },
    };
  }

  private timeoutMessage(message: Message) {
    const timeoutMsg = '❌ Timed out';
    const embed = message.embeds[0];

    embed.setFooter(timeoutMsg);
    message.edit({ embeds: [embed], components: [] });
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
      return a.recipe == null ? -1 : 1;
    });

    for (const item of sorted) {
      const amount = item.amount * multiplier;
      const indent = ' '.repeat(depth * 3);
      const line = `${indent}- ${item.name} (x${amount})`;
      recipeTextArr.push(line);

      if (item.recipe == null) continue;
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
          item.recipeData == null
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

export const command = new CraftCommand();
