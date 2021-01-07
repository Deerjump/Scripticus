const items = require('../util/items.js');
const { MessageEmbed } = require('discord.js');

function convertCodeToDisplay(itemCode) {
	// Returns item's display name from its code name
	return items[itemCode].name.replace(/[_|]+/g, ' ');
}

function convertInputToCode(inputName) {
	// Converts user input into Title Case then returns the item's code name
	inputName = convertToTitleCase(inputName);
	for (const itemCode of Object.keys(items)) {
		if (items[itemCode].name === inputName) return itemCode;
	}
}

function convertToTitleCase(str) {
	//Converts a given string to title case and returns it 
	return str.toLowerCase().split(' ').map(str => str.charAt(0).toUpperCase() + str.substring(1)).join(' ');
}

function isRawMaterial(itemCode) {
	// Checks if item/material is a raw material (aka not crafted - ex: logs, ores, bars, etc.), returns boolean
	return !Object.keys(items[itemCode]).includes('recipe');
}

function isPosInteger(str) {
	//Checks if a string can be converted into a positive integer, returns boolean
	if (typeof str != "string") return false // we only process strings!  
	return !isNaN(str) && 
		   parseInt(Number(str)) == str && 
		   !isNaN(parseInt(str, 10)) &&
		   parseInt(str, 10) > 0;
}

function generateRecipe(itemCode, totalRecipe={}) {
	//Input: item code (e.g. EquipmentHats8, MaxCapBagB5, etc.)
	//1. Get recipe for given itemCode
	//2. For each item in the recipe, create an object with information
		//a. If item is not raw, get its recipe using its item code and add to object
		//b. Repeat starting from step 1
	//3. Add each item to 'totalRecipe'
	//Returns a nested object
	const recipe = items[itemCode].recipe.costs;

	for (let i = 0; i < recipe.length; i++) {
		let itemCode = recipe[i][0], itemQty = recipe[i][1].replace(' ', ''); //for some reason item quantities in each cost array has a leading space in it
		let itemObj = {
			isRaw: isRawMaterial(itemCode),
			qty: itemQty
		};
		if (!itemObj.isRaw) {
			itemObj.recipe = generateRecipe(itemCode);
		}
		totalRecipe[itemCode] = itemObj;
	}

	return totalRecipe
}

function generateRecipeText(recipe, depth=0, multiplier=1, recipeTextArr = []) {
	//Print raw materials first
	//Print craftables second
	for (const itemCode in recipe) {
		if (recipe[itemCode].isRaw) {
			let line = `${' '.repeat(depth*3)}- ${convertCodeToDisplay(itemCode)} (x${recipe[itemCode].qty * multiplier})`;
			recipeTextArr.push(line);
		}
	}
	for (const itemCode in recipe) {
		if (!recipe[itemCode].isRaw) {
			let line = `${' '.repeat(depth*3)}- ${convertCodeToDisplay(itemCode)} (x${recipe[itemCode].qty * multiplier})`;
			recipeTextArr.push(line);
			generateRecipeText(recipe[itemCode].recipe, depth+1, multiplier*recipe[itemCode].qty, recipeTextArr);
		}
	}
	return recipeTextArr;
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
		let userInput = isPosInteger(lastArg) ? args.slice(0, -1).join(' ') : args.join(' ');
		let itemQty = isPosInteger(lastArg) ? args[args.length-1] : 1;
		
		try {
			let recipeObj = generateRecipe(convertInputToCode(userInput));
			let recipeText = generateRecipeText(recipeObj, 0, itemQty).join('\n');

			let title = `Crafting recipe for ${convertToTitleCase(userInput)} (x${itemQty})`;
			let descriptionBlock = '```\n' + recipeText + '```';
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
