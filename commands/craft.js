const items = require('../util/items.js');
const alias = require('../util/alias');
const { MessageEmbed } = require('discord.js');
const Logger = require('../util/Logger');


const logger = new Logger('Craft');
function convertCodeToDisplay(itemCode) {
  // Returns item's display name from its code name
  return items[itemCode].Name.replace(/[_|]+/g, ' ');
}

function convertInputToCode(inputName) {
  // Converts user input into Title Case then returns the item's code name
  inputName = convertToTitleCase(inputName);
  for (const itemCode of Object.keys(items)) {
    if (items[itemCode].Name === inputName) return itemCode;
    const found = alias.find(inputName, items[itemCode]);
    if (found) {
      return itemCode;
    }
  }
}

function convertToTitleCase(str) {
  // Converts a given string to title case and returns it
  return str
    .toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
}

function isRawMaterial(itemCode) {
  // Checks if item/material is a raw material (aka not crafted - ex: logs, ores, bars, etc.), returns boolean
  return !Object.keys(items[itemCode]).includes('recipe');
}

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

function generateRecipe(itemCode, totalRecipe = {}) {
  const recipe = items[itemCode].recipe.costs;

  for (let i = 0; i < recipe.length; i++) {
    // For some reason item quantities in each cost array has a leading space in it
    const realItemCode = recipe[i][0],
      itemQty = recipe[i][1].replace(' ', '');
    const itemObj = {
      isRaw: isRawMaterial(realItemCode),
      qty: itemQty,
      name: convertCodeToDisplay(realItemCode),
    };
    totalRecipe[realItemCode] = itemObj;
    if (!itemObj.isRaw) {
      itemObj.recipe = generateRecipe(realItemCode);
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
  // Sort recipe object so raw materials appear first
  const sorted = Object.entries(recipe).sort(
    ([, { isRaw: a }], [, { isRaw: b }]) => b - a
  );
  for (let i = 0; i < sorted.length; i++) {
    const item = sorted[i][1];
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

function generateTotalMaterialsText(materialsObj) {
  return Object.entries(materialsObj)
    .map(([itemCode, qty]) => `- ${convertCodeToDisplay(itemCode)} (x${qty})`)
    .join('\n');
}

/* ----------------------------------------------------- */
function createEmbed(title, description, footer) {
  return new MessageEmbed()
    .setTitle(title)
    .setDescription(description)
    .setFooter(footer);
}

function editEmbed(embedInstance, title, description, footer) {
  const newEmbed = createEmbed(title, '```' + description + '```', footer);
  embedInstance.edit({ embeds: [newEmbed] });
}

module.exports = {
  name: 'craft',
  description: 'Returns all resources/sub-items needed to craft an item!',
  usage: '<item name> <item quantity>',
  args: true,
  execute(message, args) {
    const lastArg = args[args.length - 1];
    const userInput = isPosInteger(lastArg)
      ? args.slice(0, -1).join(' ')
      : args.join(' ');
    const itemQty = isPosInteger(lastArg) ? args[args.length - 1] : 1;

    try {
      const codeName = convertInputToCode(userInput);
      const recipeObj = generateRecipe(codeName);
      const recipeTitle = `Crafting recipe for ${convertToTitleCase(
        items[codeName].Name
      )} (x${itemQty})`;
      const recipeText = generateRecipeText(recipeObj, 0, itemQty);
      const recipeFooter = 'To see total material costs, click 🔄';

      const materialsObj = generateTotalMaterials(recipeObj, itemQty);
      const materialsTitle = `Total material costs for ${convertToTitleCase(
        items[codeName].Name
      )} (x${itemQty})`;
      const materialsText = generateTotalMaterialsText(materialsObj);
      const materialsFooter = 'To see full recipe, click 🔄';

      const initialEmbed = createEmbed(
        recipeTitle,
        '```' + recipeText + '```',
        recipeFooter
      );

      message.channel.send({ embeds: [initialEmbed] }).then(async (sentEmbed) => {
        await sentEmbed.react('🔄');

        const filter = (reaction, user) =>
          reaction.emoji.name === '🔄' && user.id === message.author.id;
        const collectorLifespan = 30000;
        const collector = sentEmbed.createReactionCollector({
          filter,
          time: collectorLifespan,
          dispose: true
        });
        collector.on('collect', (reaction) => {
          if (reaction.emoji.name === '🔄') {
            editEmbed(
              sentEmbed,
              materialsTitle,
              materialsText,
              materialsFooter
            );
          }
        });

        collector.on('remove', (reaction) => {
          if (reaction.emoji.name === '🔄') {
            editEmbed(sentEmbed, recipeTitle, recipeText, recipeFooter);
          }
        });

        collector.on('end', () => {
          const expiredEmbed = createEmbed(
            sentEmbed.embeds[0].title,
            sentEmbed.embeds[0].description,
            '❌Message has expired! '
          );
          sentEmbed.edit({ embeds: [expiredEmbed] });
        });
      });
    } catch (err) {
      // Swallowing errors because generateRecipe() relies on an error for logic. Consider editing later 
      const embed = new MessageEmbed().setDescription(
        'Invalid item, please try again! Check the [wiki](https://idleon.miraheze.org/wiki/Smithing) for a list of all craftable items!'
      );
      message.channel.send({ embeds: [embed] });
    }
  },
};
