const { CronJob } = require('cron');
const { MessageAttachment } = require('discord.js');
const path = require('path');


const NOTIFY = '[Notify]';
let cronJob;

module.exports = {
  name: 'notify',
  description: 'Subscribe to an hourly Baba Yaga/Spikefall reminder!',
  get usage() {
    return `<hours> or <check> or <${this.stopKeywords.join('/')}>`;
  },
  stopKeywords: ['clear', 'stop', 'done'], // Does this even really need to be a field? Constant seems more appropriate.
  args: true,
  // run on client start
  init(client) {
    const { mongo } = client;
    cronJob = new CronJob(
      '0 55 */1 * * *',
      async () => {
        try {
          let subscribers = await mongo.getSubscribers();
          if (subscribers.length === 0) return;

          console.log(
            NOTIFY,
            `Firing Baba/Spikes Alert: ${new Date().toLocaleString()}\nNotifying ${
              subscribers.length
            } ${subscribers.length > 1 ? 'users' : 'user'}.`
          );

          subscribers.forEach(async (subscriber) => {
            const { id } = subscriber;

            notifySubscriber(client, id);
            subscriber.hours--;

            if (subscriber.hours < 1) {
              await mongo.removeSubscriber(id);
            }
          }, subscribers);
          subscribers = subscribers.filter(({ hours }) => hours >= 1);
          if (subscribers.length > 0) {
            mongo.updateSubscribers(subscribers);
          }
        } catch (error) {
          console.error(NOTIFY, error);
        }
      },
      null,
      true,
      null
    );
    console.log(NOTIFY, 'Starting CronJob for notify command.');
    cronJob.start();
  },
  stop() {
    console.log(NOTIFY, 'Stopping Cron Job');
    cronJob.stop();
  },
  async execute(message, args) {
    const { mongo } = message.client;
    const param = args[0];
    if (param === 'list') return console.log(NOTIFY, await mongo.getSubscribers());

    const { id } = message.author;
    const user = await mongo.getSubscriber(id);

    if (param === 'check') {
      const reply =
        user != null
          ? `You have ${user.hours} hours left!`
          : "You aren't subscribed to notifications!";
      return message.reply(reply);
    }

    const hours = parseInt(param);

    if (this.stopKeywords.includes(param) || hours === 0) {
      let reply;
      if (!user) {
        reply = "You're not subscribed!";
      } else if (mongo.removeSubscriber(id)) {
        reply = 'You have unsubscribed to notifications!';
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
    mongo.updateSubscriber(id, hours);
    console.log(
      NOTIFY, 
      `${message.author.username} just subscribed for ${hours} hours`
    );
    message.reply(`You've subscribed for ${hours} hours!`);
  },
};

async function notifySubscriber(client, id) {
  const attachment = new MessageAttachment().setFile(
    path.join(__dirname + '/../src/spike-baba-alert.gif')
  );
  try {
    const user = await client.users.fetch(id);
    if (user) {
      return user.send(attachment);
    }
  } catch (error) {
    console.error(NOTIFY, error);
  }
}
