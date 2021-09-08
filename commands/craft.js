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

function generateRecipe(item) {
  const { recipe } = item.recipeData;
  const totalRecipe = {};

  for (const [itemCode, itemQty] of recipe) {
    const subItem = items.getItem(itemCode);

    const itemObj = {
      isRaw: !items.getItem(itemCode).recipeData,
      qty: itemQty,
      name: subItem.displayName,
    };

    totalRecipe[itemCode] = itemObj;

    if (!itemObj.isRaw) {
      itemObj['recipe'] = generateRecipe(subItem);
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

function getTotalMaterials(item, craftAmount) {
  // format the total materials to what we use
  return item.detRecipeTotals.reduce(
    (obj, [itemCode, qty]) => ({ ...obj, [itemCode]: qty * craftAmount }),
    {}
  );
}

function generateMaterialsText(materialsObj) {
  return Object.entries(materialsObj)
    .map(
      ([itemCode, qty]) => `- ${items.getItem(itemCode).displayName} (x${qty})`
    )
    .join('\n');
}

function generateMaterialsEmbed(item, amount) {
  const materials = getTotalMaterials(item, amount);
  const title = `Total materials for ${item.displayName} (x${amount})`;
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
  return {
    embeds: [new MessageEmbed().setTitle(title).setDescription(description)],
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
    const amount = isPosInteger(lastArg) ? lastArg : 1;
    const item = items.getItem(userInput);

    if (!item) {
      return message.reply({
        embeds: [
          new MessageEmbed().setDescription(
            'Invalid item, please try again! Check the [wiki](https://idleon.miraheze.org/wiki/Smithing) for a list of all craftable items!'
          ),
        ],
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
        await interaction.update(generateRecipeEmbed(details));
      if (interaction.customId === 'materials')
        await interaction.update(generateMaterialsEmbed(item, amount));
    });

    collector.on('end', (collected) => {
      if (collected.size === 0) return timeoutMessage(sentEmbed);
      timeoutMessage(collected.first().message);
    });
  },
};
