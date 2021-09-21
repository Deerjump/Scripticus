import { Command } from '@customTypes/types';
import { Message } from 'discord.js';

class RollCommand implements Command {
  public readonly name = 'roll';
  public readonly description = 'Roll a dice! 🎲';
  public readonly usage = '<sides>';
  public readonly args = true;

  public execute(message: Message, args: string[]) {
    let num = -1;

    if (this.isNumber(args[0])) {
      num = parseInt(args[0]);
      if (num <= 0)
        return message.reply({
          content: 'You must provide a number greater than 1!',
          allowedMentions: { users: [] },
        });
      const roll = this.diceRoll(num);

      return message.reply({
        content: `You rolled a ${num}-sided die! 🎲 You rolled ${roll}!`,
        allowedMentions: { users: [] },
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
      allowedMentions: { users: [] },
    });
  }
  
  private diceRoll(num: number): number {
    return Math.ceil(Math.random() * num);
  }

  private isNumber(val: string | number): boolean {
    return !isNaN(Number(val));
  } 

}

export const command = new RollCommand();
