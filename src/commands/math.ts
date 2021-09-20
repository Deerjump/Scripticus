import { Command } from "@customTypes/types";
import { Message } from "discord.js";
import { formulas, LavaFormulas } from "../resources/formulas";

const command: Command = {
  name: "math",
  description: "A few helpful math calculations that LavaFlame2 uses!",
  get options() {
    return Object.keys(formulas).join(", ");
  },
  usage: "<option> <x> <y> <z>",
  args: true,
  execute: function (message: Message, args: string[]) {
    const option = args.shift()!.toLowerCase();
    const nums = args.map((arg) => parseFloat(arg));

    const formula = formulas[option as keyof LavaFormulas];

    if (formula == null) {
      return message.reply({
        content: `\`${option}\` is not a valid option\n**Options**: ${this.options}`,
        allowedMentions: { users: [] },
      });
    }

    const argsNeeded = formula.length

    if (nums.length < argsNeeded) {
      return message.reply({
        content: `That formula needs ${argsNeeded} ${
          argsNeeded === 1 ? "number" : "numbers"
        }!`,
        allowedMentions: { users: [] },
      });
    }

    const answer = formula(...nums);
    message.reply({
      content: `The answer is ${answer.toFixed(2)}`,
      allowedMentions: { users: [] },
    });
  },
};

export = command;
