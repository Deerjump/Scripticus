const { MessageAttachment } = require('discord.js');
const Logger = require('../util/Logger.js');
const { CronJob } = require('cron');
const path = require('path');

const logger = new Logger('Notify');

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
    this.cronJob = new CronJob(
      '0 55 */1 * * *',
      () => cronFunction(client),
      null,
      true,
      null
    );
    logger.log('Starting CronJob for notify command.');
    this.cronJob.start();
  },
  stop() {
    logger.log('Stopping Cron Job');
    this.cronJob.stop();
  },
  async execute(message, args) {
    const { mongo } = message.client;
    const param = args[0];
    if (param === 'list') return logger.log(await mongo.getSubscribers());

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
    logger.log(`${message.author.username} just subscribed for ${hours} hours`);
    message.reply(`You've subscribed for ${hours} hours!`);
  },
};

const cronFunction = async (client) => {
  const { mongo } = client;
  try {
    const subscribers = await mongo.getSubscribers();
    if (subscribers.length === 0) return;

    logger.log(
      `Notifying ${subscribers.length} ${
        subscribers.length > 1 ? 'users' : 'user'
      }.`
    );

    const updated = subscribers.map(({ id, hours }) => {
      notifySubscriber(client, id);

      return { id, hours: --hours };
    });

    const unsubscribers = updated
      .filter(({ hours }) => hours < 1)
      .map(({ id }) => id);
    if (unsubscribers.length > 0) mongo.removeSubscribers(unsubscribers);

    subsToUpdate = updated.filter(({ hours }) => hours > 0);

    if (subsToUpdate.length > 0) {
      mongo.updateSubscribers(subsToUpdate);
    }
  } catch (error) {
    logger.error(error);
  }
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
    logger.error(error);
  }
}
