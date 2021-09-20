import { Event } from "@customTypes/types";
import { ScripticusBot } from "scripticus";
import { Logger } from "../utils/logger";

const logger = new Logger('Ready');

const event: Event = {
  name: 'ready',
  once: true,
  execute: ([client]: [ScripticusBot]) => {
    logger.log(`${client.user?.username} is ready!`);
  }
} 

export = event;