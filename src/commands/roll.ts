import { Command } from '@customTypes';
import { isNumber, noMentions } from '../utils/utils';
import { Message } from 'discord.js';

class RollCommand implements Command {
  public readonly name = 'roll';
  public readonly description = 'Roll a dice! 🎲';
  public readonly usage = '<sides>';
  public readonly args = true;

  public execute(message: Message, args: string[]) {
    let num = -1;

    if (isNumber(args[0])) {
      num = parseInt(args[0]);
      if (num <= 0)
        return message.reply({
          content: 'You must provide a number greater than 1!',
          ...noMentions,
        });
      const roll = this.diceRoll(num);

      return message.reply({
        content: `You rolled a ${num}-sided die! 🎲 You rolled ${roll}!`,
        ...noMentions,
      });
    }

    let response;
    switch (args[0]) {
      case 'rick':
        response =
          'https://tenor.com/view/dance-moves-dancing-singer-groovy-gif-17029825';
        break;
      case 'barrel':
        response = 'https://giphy.com/gifs/pool-EXXmpsOzC0m0E';
        break;
      default:
        response = `You must provide a number! Provided: ${args[0]}`;
    }
    return message.reply({
      content: response,
      ...noMentions,
    });
  }
  
  private diceRoll(num: number): number {
    return Math.ceil(Math.random() * num);
  }
}

export const command = new RollCommand();
