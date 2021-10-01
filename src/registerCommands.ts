import { clientOptions } from './config/clientOptions';
import { DatabaseDriver } from './database/mongo';
import { ScripticusBot } from './scripticus';
import dotenv from 'dotenv';
dotenv.config();

async function registerCommands() {
  const scripticus = new ScripticusBot(
    new DatabaseDriver(process.env.DATABASE_URL!),
    clientOptions
  );

  await scripticus.login(process.env.TOKEN!);
  await scripticus.registerApplicationCommands();
  scripticus.stop();
}

registerCommands();
