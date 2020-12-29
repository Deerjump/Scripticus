const craftInfo = require('../util/craftInfo.js');
const { MessageEmbed } = require('discord.js');

function convertCodeToDisplay(itemCode) {
	// Returns item's display name from its code name
	return craftInfo.itemDefinitions[itemCode].replace(/[_|]+/g, ' ');
}

function convertInputToCode(inputName) {
	// Converts user input into Title Case, and then into the game's item codename
	inputName = inputName.toLowerCase().split(' ').map(str => str.charAt(0).toUpperCase() + str.substring(1)).join(' ');
	for (const itemCode of Object.keys(craftInfo.itemDefinitions)) {
		if (convertCodeToDisplay(itemCode) === inputName) return itemCode;
	}
}

function isRawMaterial(itemCode) {
	// Checks if item/material is a raw material (aka not crafted - ex: logs, ores, bars, etc.)
	return !craftInfo.codes.includes(itemCode);
}

function isNumeric(str) {
	// shout out to stack overflow
	if (typeof str != "string") return false // we only process strings!  
	return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
		   !isNaN(parseFloat(str)); // ...and ensure strings of whitespace fail
  }

function getItemFullRecipe(itemCode, baseItemQty) {
	const totalStrArray = [];
	totalStrArray.push(convertCodeToDisplay(itemCode));

	function generateLine(itemCode, depth = 0, multiplier = 1) {
		const recipeIndex = craftInfo.codes.indexOf(itemCode);
		const recipe = craftInfo.costs[recipeIndex];

		for (const itemInfo of recipe) {
			let [itemCode, itemQty] = itemInfo;
				itemQty = Number(itemQty);

			const line = `${' '.repeat(depth*3)}- ${convertCodeToDisplay(itemCode)} (x${itemQty*multiplier})`;
			totalStrArray.push(line);

			if (!isRawMaterial(itemCode)) generateLine(itemCode, depth+1, multiplier*itemQty);
		}
	}

	generateLine(itemCode, undefined, baseItemQty);
	return totalStrArray;
}

module.exports = {
	name: 'craft',
	description: 'Returns all resources/sub-items needed to craft an item!',
	usage: '<item name> <item quantity>',
	execute(message, args) {
		if (!args.length) {
			return message.channel.send('You must provide an item: !craft <item name> <item quantity>')
		}

		let lastArg = args[args.length-1];
		let userInput = isNumeric(lastArg) ? args.slice(0, -1).join(' ') : args.join(' ');
		let itemQty = isNumeric(lastArg) ? args[args.length-1] : 1;

		try {
			// Gets recipe string array, then converts into Markdown code block
			let recipeStrArray = getItemFullRecipe(convertInputToCode(userInput), itemQty);
			let recipeStr = recipeStrArray.slice(1).join('\n');
			let title = `Crafting recipe for ${recipeStrArray[0]} (x${itemQty})`;
			let descriptionBlock = '```\n' + recipeStr + '```';
			let embed = new MessageEmbed()
				.setTitle(title)
				.setDescription(descriptionBlock);
			message.channel.send(embed);
		} catch {
			let embed = new MessageEmbed()
				.setDescription('Invalid item, please try again! Check the [wiki](https://idleon.miraheze.org/wiki/Smithing) for a list of all craftable items!');
			message.channel.send(embed);
		}

	}

}