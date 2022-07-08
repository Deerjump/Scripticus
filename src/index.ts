import { autoUpdateOptions } from './config/autoUpdateOptions';
import { WebhookListener } from './autoUpdate/autoUpdate';
import { clientOptions } from './config/clientOptions';
import { DatabaseDriver } from './database/mongo';
import { ScripticusBot } from './scripticus';
import dotenv from 'dotenv';
dotenv.config();


/**
 * @description this won't register commands.
 * @see registerGlobalCommands.ts
 */
async function main() {
  const scripticus = new ScripticusBot(
    new DatabaseDriver(process.env.DATABASE_URL!),
    clientOptions
  );
  
  if (autoUpdateOptions.enabled) {
    new WebhookListener(scripticus, process.env.SECRET!, autoUpdateOptions).start();
  }

  await scripticus.login(process.env.TOKEN!);
}

main();
