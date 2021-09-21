import { autoUpdateOptions } from './config/autoUpdateOptions';
import { WebhookListener } from './autoUpdate/autoUpdate';
import { clientOptions } from './config/clientOptions';
import { ScripticusBot } from './scripticus';
import { DatabaseDriver } from './database/mongo';
import 'dotenv/config';

async function main() {
  const database = new DatabaseDriver(process.env.DATABASE_URL!);
  const scripticus = new ScripticusBot(database, clientOptions);
  
  if (autoUpdateOptions.enabled) {
    new WebhookListener(scripticus, autoUpdateOptions).start();
  }

  await scripticus.login(process.env.TOKEN!);
}

main();