
const log = require('loglevel');
log.enableAll();
/* eslint-disable indent */
function diceRoll(num) {
  return Math.ceil(Math.random() * num);
}

module.exports = {
  name: 'roll',
  description: 'Roll a dice! 🎲',
  usage: '<sides>',
  async execute(message, args) {
    let isNum;
    let num = -1;

    if (args.length > 0) {
      isNum = !isNaN(args[0]);
      if (!isNum) {
        let response;
        switch (args[0]) {
          case 'rick':
            response = 'https://tenor.com/view/dance-moves-dancing-singer-groovy-gif-17029825';
            break;
          case 'barrel':
            response = 'https://giphy.com/gifs/pool-EXXmpsOzC0m0E';
            break;
          default:
            response = `You must provide a number! Provided: ${args[0]}`;
        }
        return message.channel.send(response);
      }
      num = parseInt(args[0]);
      if (num < 0) return message.reply('You must provide a number great than 1!');
    }

    const sides = args.length === 0 ? 6 : num;
    const roll = diceRoll(sides);
    
    const msg = `Test Log Roll: ${roll}`;
    log.trace(msg)
    log.debug(msg)
    log.info(msg)
    log.warn(msg)
    log.error(msg)
    return message.reply(
      `You rolled a ${sides}-sided die! 🎲 You rolled ${roll}!`
    );
  },
};
