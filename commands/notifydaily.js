const { CronJob } = require('cron');
const { Discord } = require('discord.js');
const {
  removeDailySubscriber,
  getDailySubscriber,
  getDailySubscribers,
  updateDailySubscriber,
} = require('../mongo/mongodaily.js');
const path = require('path');
//Took the notify format and made a daily version(or at least the bare bones of one)
let cronJob;

module.exports = {
  name: 'notifydaily',
  description: 'Subscribe to a daily list of common tasks to check before reset',
  get usage() {
    return `<hour> or <check> or <${this.stopKeywords.join('/')}>`;
  },
  stopKeywords: ['clear', 'stop', 'done'], // Does this even really need to be a field? Constant seems more appropriate.
  args: true,
  // run on client start
  init(client) {
    cronJob = new CronJob(
      '0 12 * * *',
      async () => {
        try {
          var now = new Date().getHours;
          let subscribers = subscribers.filter(({ hour }) => now - (hour-1) <= warninghours); //if hour is within x hours of warning hour
          if (subscribers.length === 0) return;

          console.log(
            `Checklist: ${new Date().toLocaleString()}\nNotifying ${
              subscribers.length
            } ${subscribers.length > 1 ? 'users' : 'user'}.`
          );

          subscribers.forEach(async (subscriber) => {
            const { id } = subscriber;

            notifyDailySubscriber(client, id);

          }, subscribers);
          
        } catch (error) {
          console.error(error);
        }
      },
      null,
      true,
      null
    );
    cronJob.start();
  },
  stop() {
    cronJob.stop();
  },
  async execute(message, args) {
    const hourparam = args[0];
    const warningparam = args[1];
    if (hourparam === 'list') return console.log(await getDailySubscribers());

    const { id } = message.author;
    const user = await getDailySubscriber(id);

    if (hourparam === 'forcecheck') {
      const reply =
        user != null
          ? await PostMessage()
          : "You aren't subscribed to daily notifications!";
      return message.reply(reply);
    } if (hourparam === 'checkhour') {
      const reply =
        user != null
          ? `You roll over at ${user.hour}!`
          : "You aren't subscribed to daily notifications!";
      return message.reply(reply);
    }
    if (hourparam === 'checkwarning') {
      const reply =
        user != null
          ? `You are warned ${user.warninghours} hours beforehand!`
          : "You aren't subscribed to daily notifications!";
      return message.reply(reply);
    }

    const hour = parseInt(hourparam);
    const warning = parseInt(warningparam);

    if (this.stopKeywords.includes(hourparam)) {
      let reply;
      if (!user) {
        reply = "You're not subscribed!";
      } else if (removeDailySubscriber(id)) {
        reply = 'You have unsubscribed from daily notifications!';
      } else {
        reply = 'Something went wrong!';
      }
      return message.reply(reply);
    }

    if (isNaN(hourparam) || hour < 1 || hour >= 24) {
      return message.reply('You must provide a number between 1 and 24, representing the hour you wish to be notified each day');
    }

    if (user && user.hour >= 0) {
      return message.reply(
        `You're already subscribed!`
      );0
    }
    updateDailySubscriber(id, hour, warning);
    console.log(
      `${message.author.username} you're subscribed`
    );
    message.reply(`You've subscribed !`);
  },
};

async function notifyDailySubscriber(client, id) {
  const dailyEmbed = new Discord.MessageEmbed()
  .setTitle('Checklist of Daily Duties')
  .setImage(path.join(__dirname + '/../src/froyo-daily-alert.gif'));
  var dict = ReturnDict();
  var message = FormatDailyMessage(dict);
  
  try {
    const user = await client.users.fetch(id);
    if (user) {
    
    dailyEmbed.addField('TaskList', message, true);
      return user.send(dailyEmbed);
    }
  } catch (error) {
    console.error(error);
  }
}

async function ReturnDict()
{
  var dict = {
      
    'High Priority:': true,
    'Quick Refs > Anvil > Produce > Quick Deposit (All Characters)': true ,
    'Quick Refs > Tasks > Daily for each world completed': true ,
    'Post Office Requests (3 Per Account)': true ,
   
    'Spent or Decanted Liquids': true,
    'Guild Points claimed': true ,
    'Low Priority:': true,
    'Food restocked on AFK Characters': true ,
    'Forge Refilled with ores/ emptied of bars': true ,
    'Bonemeal from Boops. Dr. Defecaus killed': true ,
    'Colosseum and Boss Keys claimed': true,
    'Shop items to mystery roll, eye for Doojat and reset fragments bought': true ,
    'Finished Daily for Event': false,
    'Finish Picnic Questline for King of Food Trophy': true,
    'Checked toolbox > Sweetspot to make sure your active leveler is getting optimal XP': true
   };
   try{
   return dict;
  } catch (error) {
    console.error(error);
  }
}
async function FormatDailyMessage(dict)
{
 try{
  var message = "";
  for(var key in dict)
  {
    if(dict[key] == true)
    {
      message += key + '\n';
    }
  }
  return message;
 } catch (error) {
  console.error(error);
}
}
async function PostMessage()
{
  try{
  var dict = ReturnDict();
  var message = FormatDailyMessage(dict);
  console.log(message);
} catch (error) {
  console.error(error);
}
}
//Hung up on an empty promise being returned.