import { EventHandler, Scripticus } from "@customTypes";
import { Logger } from "../utils/logger";

const logger = new Logger('Ready');

const eventHandler: EventHandler = {
  event: 'ready',
  once: true,
  async handle(client: Scripticus) {
    logger.log(`${client.user?.username} is ready!`);
  }
} 

export = eventHandler;