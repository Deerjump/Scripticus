import { Command } from '@customTypes';
import { Message } from 'discord.js';
import { noMentions } from '../utils/utils';
import { formulas, LavaFormulas } from '../resources/formulas';

class MathCommand implements Command {
  public readonly name = 'math';
  public readonly description =
    'A few helpful math calculations that LavaFlame2 uses!';
  public readonly options: string;
  public readonly usage = '<option> <x> <y> <z>';
  public readonly args = true;

  constructor() {
    this.options = Object.keys(formulas).join(', ');
  }

  public execute(message: Message, args: string[]) {
    const option = args.shift()!.toLowerCase();
    const nums = args.map((arg) => parseFloat(arg));

    const formula = formulas[option as keyof LavaFormulas];

    if (formula == null) {
      return message.reply({
        content: `\`${option}\` is not a valid option\n**Options**: ${this.options}`,
        ...noMentions,
      });
    }

    const argsNeeded = formula.length;

    if (nums.length < argsNeeded) {
      return message.reply({
        content: `That formula needs ${argsNeeded} ${
          argsNeeded === 1 ? 'number' : 'numbers'
        }!`,
        ...noMentions,
      });
    }

    const answer = formula(...nums);
    message.reply({
      content: `The answer is ${answer.toFixed(2)}`,
      ...noMentions,
    });
  }
}

export const command = new MathCommand();
