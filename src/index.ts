import { autoUpdateOptions } from './config/autoUpdateOptions';
import { WebhookListener } from './autoUpdate/autoUpdate';
import { clientOptions } from './config/clientOptions';
import { DatabaseDriver } from './database/mongo';
import { ScripticusBot } from './scripticus';
import dotenv from 'dotenv';
dotenv.config();

import {endpoints} from './utils/utils';

/**
 * @description this won't register commands.
 * @see registerApplicationCommands.ts
 */
async function main() {

  
  const scripticus = new ScripticusBot(
    new DatabaseDriver(endpoints.MongoUrl ),
    clientOptions
  );
  let autoUpdater;
  if (autoUpdateOptions.enabled) {
    autoUpdater = new WebhookListener(scripticus, process.env.SECRET!, autoUpdateOptions).start();
  }

  await scripticus.login(process.env.TOKEN!);
}

main();
