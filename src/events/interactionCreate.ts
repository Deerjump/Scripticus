import { Event } from "@customTypes/types";
import { Interaction } from "discord.js";

const event: Event = {
  name: "interactionCreate",
  execute: function (interaction: Interaction): void {
    if(!interaction.isCommand()) return;
  }
}

export = event;