import { clientOptions } from './config/clientOptions';
import { DatabaseDriver } from './database/mongo';
import { ScripticusBot } from './scripticus';
import dotenv from 'dotenv';
dotenv.config();


// Since all commands are currently guild-specific this isn't needed right now
async function registerCommands() {
  const scripticus = new ScripticusBot(
    new DatabaseDriver(process.env.DATABASE_URL!),
    clientOptions
  );

  await scripticus.login(process.env.TOKEN!);
  await scripticus.registerGlobalCommands();
  scripticus.stop();
}

registerCommands();
