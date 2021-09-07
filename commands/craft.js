const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const items = require('../data/itemRepository');
const Logger = require('../util/Logger');

const logger = new Logger('Craft');
const codeBlock = '```';

function isPosInteger(str) {
  // Checks if a string can be converted into a positive integer, returns boolean
  if (typeof str != 'string') return false; // we only process strings!
  return (
    !isNaN(str) &&
    parseInt(Number(str)) == str &&
    !isNaN(parseInt(str, 10)) &&
    parseInt(str, 10) > 0
  );
}

function generateRecipe(item, totalRecipe = {}) {
  const recipe = item.recipeData.recipe;

  for (let i = 0; i < recipe.length; i++) {
    const [itemCode, itemQty] = recipe[i];
    const subItem = items.getItem(itemCode);

    const itemObj = {
      isRaw: !items.getItem(itemCode).recipeData,
      qty: itemQty,
      name: subItem.displayName,
    };

    totalRecipe[itemCode] = itemObj;

    if (!itemObj.isRaw) {
      itemObj.recipe = generateRecipe(subItem);
    }
  }
  return totalRecipe;
}

function generateRecipeText(
  recipe,
  depth = 0,
  multiplier = 1,
  recipeTextArr = []
) {

  const sorted = Object.values(recipe).sort(
    ({ isRaw: a }, { isRaw: b }) => b - a
  );

  for (const item of sorted) {
    const line = `${' '.repeat(depth * 3)}- ${item.name} (x${
      item.qty * multiplier
    })`;
    recipeTextArr.push(line);

    if (!item.isRaw) {
      generateRecipeText(
        item.recipe,
        depth + 1,
        multiplier * item.qty,
        recipeTextArr
      );
    }
  }
  return recipeTextArr.join('\n');
}

function generateRecipeEmbed({ itemName, recipe, amount }) {
  const title = `Crafting recipe for ${itemName} (x${amount})`;
  const text = generateRecipeText(recipe, 0, amount);

  const row = new MessageActionRow().addComponents(
    new MessageButton()
      .setCustomId('materials')
      .setLabel('Show Total Materials')
      .setStyle('PRIMARY')
  );

  return createMessage(title, `${codeBlock}${text}${codeBlock}`, row);
}

function generateTotalMaterials(
  recipeObj,
  multiplier = 1,
  totalMaterials = {}
) {
  for (const itemCode in recipeObj) {
    if (recipeObj[itemCode].isRaw) {
      if (totalMaterials[itemCode] == undefined) totalMaterials[itemCode] = 0;
      totalMaterials[itemCode] += recipeObj[itemCode].qty * multiplier;
    } else {
      generateTotalMaterials(
        recipeObj[itemCode].recipe,
        multiplier * recipeObj[itemCode].qty,
        totalMaterials
      );
    }
  }
  return totalMaterials;
}

function generateMaterialsText(materialsObj) {
  return Object.entries(materialsObj)
    .map(
      ([itemCode, qty]) => `- ${items.getItem(itemCode).displayName} (x${qty})`
    )
    .join('\n');
}

function generateMaterialsEmbed({ itemName, recipe, amount }) {
  const materials = generateTotalMaterials(recipe, amount);
  const title = `Total materials for ${itemName} (x${amount})`;
  const text = generateMaterialsText(materials);

  const row = new MessageActionRow().addComponents(
    new MessageButton()
      .setCustomId('recipe')
      .setLabel('Show Tiered Recipe')
      .setStyle('PRIMARY')
  );

  return createMessage(title, `${codeBlock}${text}${codeBlock}`, row);
}

function timeoutMessage(message) {
  const timeoutMsg = '❌ Timed out';
  const embed = message.embeds[0];

  embed.setFooter(timeoutMsg);
  message.edit({ embeds: [embed], components: [] });
}

function createMessage(title, description, row) {
  const embed = new MessageEmbed().setTitle(title).setDescription(description);

  return {
    embeds: [embed],
    components: [row],
    fetchReply: true,
    allowedMentions: { users: [] },
  };
}

module.exports = {
  name: 'craft',
  description: 'Returns all resources/sub-items needed to craft an item!',
  usage: '<item name> <item quantity>',
  args: true,
  async execute(message, args) {
    const lastArg = args[args.length - 1];
    const userInput = isPosInteger(lastArg)
      ? args.slice(0, -1).join(' ')
      : args.join(' ');
    const amount = isPosInteger(lastArg) ? args[args.length - 1] : 1;

    const item = items.getItem(userInput);

    if (!item) {
      const embed = new MessageEmbed().setDescription(
        'Invalid item, please try again! Check the [wiki](https://idleon.miraheze.org/wiki/Smithing) for a list of all craftable items!'
      );
      return message.reply({
        embeds: [embed],
        allowedMentions: { users: [] },
      });
    }

    if (!item.recipeData) {
      return message.reply({
        content: `${item.displayName} doesn't have a crafting recipe!`,
        allowedMentions: { users: [] },
      });
    }

    const details = {
      itemName: item.displayName,
      recipe: generateRecipe(item),
      amount,
    };

    const recipeEmbed = generateRecipeEmbed(details);

    const sentEmbed = await message.reply(recipeEmbed);

    const filter = (i) => i.customId === 'recipe' || i.customId === 'materials';

    const collector = sentEmbed.createMessageComponentCollector({
      filter,
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
        await interaction.update(generateRecipeEmbed(details));
      if (interaction.customId === 'materials')
        await interaction.update(generateMaterialsEmbed(details));
    });

    collector.on('end', (collected) => {
      if (collected.size === 0) return timeoutMessage(sentEmbed);
      timeoutMessage(collected.first().message);
    });
  },
};
