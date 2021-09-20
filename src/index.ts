import { mongoDriver } from './database/mongo';
import { clientOptions } from './config/clientOptions';
import { ScripticusBot } from './scripticus';
import 'dotenv/config';
import { WebhookListener } from './autoUpdate/autoUpdate';
import { autoUpdateOptions } from './config/autoUpdateOptions';
import itemRepository from './repositories/itemRepository';

async function testMongo() {
  await mongoDriver.connectToDatabase();

  // updateGuildPrefix
  let guildSettings = await mongoDriver.getGuildSettings('1');
  console.log(guildSettings)

  await mongoDriver.updateGuildSettings('1', { prefix: '^' });
  await mongoDriver.updateGuildSettings('2', { prefix: '!' });
  await mongoDriver.updateGuildSettings('3', { prefix: '#' });

  const allGuildSettings = await mongoDriver.getAllGuildSettings();
  console.log(allGuildSettings)

  // updateSubscriber
  await mongoDriver.updateSubscriber({ userId: '1', hours: 50});
  const sub = await mongoDriver.getSubscriber('1'); 
  console.log(sub);

  // removeSubscriber
  await mongoDriver.removeSubscriber('1');
  const removed = await mongoDriver.getSubscriber('1');
  console.log(removed);

  const newSubs= [
    {
      userId: '1',
      hours: 5
    },
    {
      userId: '2',
      hours: 10
    },
    {
      userId: '3',
      hours: 15
    },
  ]
  
  // updateSubscribers/removeSubscribers
  await mongoDriver.updateSubscribers(newSubs);
  let subs = await mongoDriver.getSubscribers();
  console.log(subs);
  await mongoDriver.removeSubscribers(newSubs.map(sub => sub.userId));
  subs = await mongoDriver.getSubscribers(); 
  console.log(subs)

  await mongoDriver.disconnect();
}

async function main() {
  // testMongo();
  const scripticus = new ScripticusBot(clientOptions);
  // const autoUpdater = new WebhookListener(scripticus, autoUpdateOptions);
  // autoUpdater.start();
  await scripticus.login(process.env.TOKEN!);
}

function testItems() {
  console.log([
    itemRepository.getItem('copper boots'),
    itemRepository.getItem('t6 helm'),
    itemRepository.getItem('goldfish'),
    itemRepository.getItem('t4 leggings')
  ].map(item => item?.displayName));
}

testItems();
