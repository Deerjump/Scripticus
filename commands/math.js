const formulas = require('../util/formulas.js');

module.exports = {
  name: 'math',
  description: 'A few helpful math calculations!',
  get options() {
    return Object.keys(formulas).join(', ');
  },
  usage: '<option> <x> <y> <z>',
  args: true,
  execute(message, args) {
    const { channel } = message 
    if (!args.length) {
      return channel.send(
        `You must provide a formula and 1-3 numbers to use!\n**Options**: ${this.options}`
      );
    }
    let answer = 0;
    const option = args[0].toLowerCase();
    const [, ...nums] = args.map((arg) => parseFloat(arg));
    const formula = formulas[option];
    const formulaArgs = formula.length;
    if (nums.length < formulaArgs )
      return channel.send(`That formula needs ${formulaArgs} ${formulaArgs === 1 ? 'number' : 'numbers' }!`);
    try {
      answer = formula(nums[0], nums[1], nums[2]);
      channel.send(`The answer is ${answer.toFixed(2)}`);
    } catch (error) {
      channel.send(
        `\`${args[0]}\` is not a valid option\n**Options**: ${this.options}`
      );
    }
  },
};
