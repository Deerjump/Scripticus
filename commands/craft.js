const craftInfo = require('../util/craftInfo.js');

function convertCodeToDisplay(itemCode) {
	//Returns item's display name from its code name
	return craftInfo.itemDefinitions[itemCode].replace(/[_|]+/g, ' ');
}

function convertInputToCode(inputName) {
	//Converts user input into Title Case, and then into the game's item codename
	inputName = inputName.toLowerCase().split(' ').map(str => str.charAt(0).toUpperCase() + str.substring(1)).join(' ');
	for (const itemCode of Object.keys(craftInfo.itemDefinitions)) {
		if (craftInfo.itemDefinitions[itemCode] === inputName) return itemCode;
	}
}

function isRawMaterial(itemCode) {
	//Checks if item/material is a raw material (aka not crafted - ex: logs, ores, bars, etc.)
	return !craftInfo.codes.includes(itemCode);
}

function getItemFullRecipe(itemCode) {
	let totalStrArray = []
	totalStrArray.push(convertCodeToDisplay(itemCode));
	
	function generateLine(itemCode, depth = 0, multiplier = 1) {
		let recipeIndex = craftInfo.codes.indexOf(itemCode);
		let recipe = craftInfo.costs[recipeIndex];

		for (const itemInfo of recipe) {
			let [itemCode, itemQty] = itemInfo;
				itemQty = Number(itemQty);

			let line = `${' '.repeat(depth*3 + 2)}- ${convertCodeToDisplay(itemCode)} (x${itemQty*multiplier})`;
			totalStrArray.push(line)
			
			if (!isRawMaterial(itemCode)) generateLine(itemCode, depth+1, multiplier*itemQty);
		}
	}

	generateLine(itemCode);
	return totalStrArray;
}

module.exports = {
	name: 'craft',
	description: 'Returns all resources/sub-items needed to craft an item!',
	usage: '<item name>',
	execute(message, args) {
		if (!args.length) {
			return message.channel.send('You must provide an item.')
		}
		let userInput = args[0];
		try {
			//Gets recipe string array, then converts into Markdown code block
			let recipeStrArray = getItemFullRecipe(convertInputToCode(userInput));
			let recipeStr = recipeStrArray.slice(1).join('\n');
			let descriptionBlock = '```\n' + recipeStr + '```';
			let embed = new MessageEmbed()
				.setTitle(`Full crafting recipe for ${recipeStrArray[0]}`)
				.setDescription(descriptionBlock);

			message.channel.send(embed);
		} catch {
			message.channel.send('Invalid item, please try again! (Mind your spelling!)');
		}

	}

}