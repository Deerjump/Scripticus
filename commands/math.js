const util = require('../util/util.js');

module.exports = {
  name: 'math',
  description: 'A few helpful math calculations!',
  get options() {
    return Object.keys(util).join(', ');
  },
  usage: '<option> <x> <y> <z>',
  args: true,
  execute(message, args) {
    if (!args.length) {
      return message.channel.send(
        `You must provide a formula and 1-3 numbers to use!\n**Options**: ${this.options}`
      );
    }
    let answer = 0;
    const option = args[0].toLowerCase();
    const [, ...nums] = args.map((arg) => parseFloat(arg));
    try {
      answer = util[option](nums[0], nums[1], nums[2]);
      message.channel.send(`The answer is ${answer.toFixed(2)}`);
    } catch (error) {
      message.channel.send(
        `\`${args[0]}\` is not a valid option\n**Options**: ${this.options}`
      );
    }
  },
};
