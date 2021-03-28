/* eslint-disable indent */
function diceRoll(num) {
  return Math.ceil(Math.random() * (num));
}

module.exports = {
  name: 'roll',
  description: 'Roll a dice! 🎲',
  usage: '<sides>',
  async execute(message, args) {
    if (args.length > 0) {
      if (isNaN(args[0])) {
        let response;
        switch (args[0]) {
          case 'rick':
            response = 'https://tenor.com/view/dance-moves-dancing-singer-groovy-gif-17029825';
            break;
          case 'barrel':
            response = 'https://giphy.com/gifs/pool-EXXmpsOzC0m0E';
            break;
          default:
            response = `You must provide a number greater than 1! Provided: ${args[0]}`;
        }
        return message.reply(response);
      }
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
