import { formulas } from '../../resources/formulas';

module.exports = {
  name: 'math',
  description: 'A few helpful math calculations that LavaFlame2 uses!',
  get options() {
    return Object.keys(formulas).join(', ');
  },
  usage: '<option> <x> <y> <z>',
  args: true,
  execute(message, args) {
    if (!args.length) {
      return message.reply({
        content: `You must provide a formula and 1-3 numbers to use!\n**Options**: ${this.options}`,
        allowedMentions: { users: [] },
      });
    }

    const option = args[0].toLowerCase();
    const [, ...nums] = args.map((arg) => parseFloat(arg));
    const formula = formulas[option];
    const formulaArgs = formula.length;
    
    if (nums.length < formulaArgs)
      return message.reply({
        content: `That formula needs ${formulaArgs} ${
          formulaArgs === 1 ? 'number' : 'numbers'
        }!`,
        allowedMentions: { users: [] },
      });
    try {
      const answer = formula(nums[0], nums[1], nums[2]);
      message.reply({
        content: `The answer is ${answer.toFixed(2)}`,
        allowedMentions: { users: [] },
      });
    } catch (error) {
      message.reply({
        content: `\`${args[0]}\` is not a valid option\n**Options**: ${this.options}`,
        allowedMentions: { users: [] },
      });
    }
  },
};
