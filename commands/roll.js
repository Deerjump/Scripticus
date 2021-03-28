function diceRoll(num) {
  return Math.floor(Math.random() * (num + 1));
}

module.exports = {
  name: 'roll',
  description: 'Roll a dice! 🎲',
  usage: '<sides>',
  async execute(message, args) {
    if (args.length > 0 && isNaN(args[0])) {
      return message.reply(
        `You must provide a number greater than 1! Provided: ${args[0]}`
      );
    }

    let sides;
    if (args.length === 0) {
      sides = 6;
    }
    if (args.length > 0 && !isNaN(args[0])) {
      sides = parseInt(args[0]);
    }

    const roll = diceRoll(sides);

    return message.reply(
      `You rolled a ${sides}-sided die! 🎲 You rolled ${roll}!`
    );
  },
};
