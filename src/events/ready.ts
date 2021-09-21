import { Event, Scripticus } from "@customTypes/types";
import { Logger } from "../utils/logger";

const logger = new Logger('Ready');

const event: Event = {
  name: 'ready',
  once: true,
  execute: (client: Scripticus) => {
    logger.log(`${client.user?.username} is ready!`);
  }
} 

export = event;