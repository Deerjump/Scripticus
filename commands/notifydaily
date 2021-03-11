const { CronJob } = require('cron');
const { Discord } = require('discord.js');
const {
  removeDailySubscriber,
  getDailySubscriber,
  getDailySubscribers,
  updateDailySubscriber,
  updateDailySubscribers,
} = require('../mongo/mongo.js');
const path = require('path');
//Took the notify format and made a daily version(or at least the bare bones of one)
let cronJob;

module.exports = {
  name: 'notify',
  description: 'Subscribe to a daily list of common tasks to check before reset',
  get usage() {
    return `<hours> or <check> or <${this.stopKeywords.join('/')}>`;
  },
  stopKeywords: ['clear', 'stop', 'done'], // Does this even really need to be a field? Constant seems more appropriate.
  args: true,
  // run on client start
  init(client) {
    cronJob = new CronJob(
      '0 12 * * *',
      async () => {
        try {
          let subscribers = await getDailySubscribers();
          if (subscribers.length === 0) return;

          console.log(
            `Checklist: ${new Date().toLocaleString()}\nNotifying ${
              subscribers.length
            } ${subscribers.length > 1 ? 'users' : 'user'}.`
          );

          subscribers.forEach(async (subscriber) => {
            const { id } = subscriber;

            notifyDailySubscriber(client, id);
            subscriber.hours--;

            if (subscriber.hours < 1) {
              await removeDailySubscriber(id);
            }
          }, subscribers);
          subscribers = subscribers.filter(({ hours }) => hours >= 1);
          if (subscribers.length > 0) {
            updateDailySubscribers(subscribers);
          }
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
    const param = args[0];
    if (param === 'list') return console.log(await getDailySubscribers());

    const { id } = message.author;
    const user = await getDailySubscriber(id);

    if (param === 'check') {
      const reply =
        user != null
          ? `You have ${user.hours} hours left!`
          : "You aren't subscribed to daily notifications!";
      return message.reply(reply);
    }

    const hours = parseInt(param);

    if (this.stopKeywords.includes(param) || hours === 0) {
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

    if (isNaN(param) || hours < 1) {
      return message.reply('You must provide a number of 1 or higher');
    }

    if (user && user.hours >= hours) {
      return message.reply(
        `You're already subscribed! You have ${user.hours} hours left`
      );
    }
    updateDailySubscriber(id, hours);
    console.log(
      `${message.author.username} just subscribed for ${hours} hours`
    );
    message.reply(`You've subscribed for ${hours} hours!`);
  },
};

async function notifyDailySubscriber(client, id) {
  const dailyEmbed = new Discord.MessageEmbed()
  .setTitle('Checklist of Daily Duties')
  .setImage(path.join(__dirname + '/../src/froyo-daily-alert.gif'))
  .addFields(
      
        { High Priority:},
		{ Quick Refs > Anvil > Produce > Quick Deposit (All Characters) },
        { Quick Refs > Tasks > Daily for each world completed },
        { Post Office Requests (3 Per Account) },
        //{ Kissed your homies goodnight},
        { Spent or Decanted Liquids},
        { Guild Points claimed },

        { Low Priority:},
        { Food restocked on AFK Characters },
		{ Forge Refilled with ores/ emptied of bars },
        { Bonemeal from Boops. Dr. Defecaus killed },
        { Colosseum and Boss Keys claimed},
        { Shop items to mystery roll, eye for Doojat and reset fragments bought },
        //{ Finished Daily for Event},
        { Finish Picnic Questline for King of Food Trophy},
        { Checked toolbox >Sweetspot to make sure your active leveler is getting optimal XP},
	);
  );
  try {
    const user = await client.users.fetch(id);
    if (user) {
      return user.send(dailyEmbed);
    }
  } catch (error) {
    console.error(error);
  }
}
