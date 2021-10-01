import { Event, Scripticus } from "@customTypes";
import { Logger } from "../utils/logger";

const logger = new Logger('Ready');

const event: Event = {
  name: 'ready',
  once: true,
  async execute(client: Scripticus) {
    logger.log(`${client.user?.username} is ready!`);
  }
} 

export = event;