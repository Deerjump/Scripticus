import { Event } from "@customTypes/types";
import { Interaction } from "discord.js";

const event: Event = {
  name: "interactionCreate",
  execute: function ([interaction]: [Interaction]): void {
    console.log(interaction.type);
    if (interaction.isButton()) return;
  }
}

export = event;