import { Command, Scripticus, Subscriber } from '@customTypes';
import { isNumber, noMentions } from '../utils/utils';
import { Logger } from '../utils/logger';
import { Message } from 'discord.js';
import { CronJob } from 'cron';
import * as path from 'path';

class NotifyCommand implements Command {
  private readonly stopKeywords = ['clear', 'stop', 'done', 'off', '0']; // Does this even really need to be a field? Constant seems more appropriate.
  private readonly cronJob: CronJob;
  private client!: Scripticus;
  private readonly logger: Logger;
  // TODO: look into Moment/Date
  // TODO: Fix times
  private readonly cronSchedule = '0 55 */1 * * *';
  public readonly name = 'notify';
  public readonly description =
    'Subscribe to an hourly Baba Yaga/Spikefall reminder!';
  public readonly args = true;
  public readonly usage;

  public constructor() {
    this.logger = new Logger('Notify');
    this.usage = `<hours> or <check> or <${this.stopKeywords.join('/')}>`;
    this.cronJob = new CronJob(this.cronSchedule, () => this.cronFunction());
  }

  private async cronFunction() {
    const { db } = this.client;
    try {
      const subs = await db.getSubscribers();
      if (subs.length === 0) return;

      this.logger.log(
        `Notifying ${subs.length} ${subs.length > 1 ? 'users' : 'user'}.`
      );

      type Acc = { [key: string]: Subscriber[] };
      const { toRemove, toUpdate } = subs.reduce<Acc>((acc, curr) => {
        if (acc.toUpdate == null) acc.toUpdate = [];
        if (acc.toRemove == null) acc.toRemove = [];
        this.notifySubscriber(curr.userId).catch(err => {throw err});
        --curr.hours;

        if (curr.hours > 0) acc.toUpdate = [curr, ...acc.toUpdate];
        else acc.toRemove = [curr, ...acc.toRemove];
        return acc;
      }, {});

      db.removeSubscribers(toRemove);
      db.updateSubscribers(toUpdate);
    } catch (error) {
      this.logger.error(error);
    }
  }

  private async notifySubscriber(id: string) {
    try {
      const user = await this.client.users.fetch(id);
      if (user) {
        // TODO: rework pathing variable
        return user.send({
          files: [path.join(__dirname + '/../../../resources/spike-baba-alert.gif')],
        });
      }
    } catch (error) {
      this.logger.error(error);
    }
  }

  public init(client: Scripticus) {
    this.client = client;
    this.logger.log('Starting CronJob');
    this.cronJob.start();
  }

  public stop() {
    this.logger.log('Stopping Cron Job');
    this.cronJob.stop();
  }

  public async execute(message: Message, [param]: string[]) {
    const { db } = message.client as Scripticus;
    const { id: userId } = message.author;
    const subscriber = await db.getSubscriber(userId);

    const hours = Number(param);

    if (hours === 0 || !isNumber(param)) {
      if (param === 'check') {
        return message.reply({
          content:
            subscriber != null
              ? `You have ${subscriber.hours} hours left!`
              : "You aren't subscribed to notifications!",
          ...noMentions,
        });
      }

      if (this.stopKeywords.includes(param)) {
        if (subscriber == null) {
          return message.reply({
            content: "You're not subscribed!",
            ...noMentions,
          });
        }
        try {
          await db.removeSubscriber(subscriber);
          return message.reply({
            content: 'You have unsubscribed!',
            ...noMentions,
          });
        } catch (err) {
          this.logger.error(err);

          return message.reply({
            content: 'Something went wrong!',
            ...noMentions,
          });
        }
      }

      return message.reply({
        content: 'You must provide a number of 1 or higher',
        ...noMentions,
      });
    }

    if (subscriber != null && subscriber.hours >= hours) {
      return message.reply({
        content: `You're already subscribed! You have ${subscriber.hours} hours left`,
        ...noMentions,
      });
    }

    db.updateSubscriber({ userId: userId, hours });
    this.logger.log(
      `${message.author.username} just subscribed for ${hours} hours`
    );
    message.reply({
      content: `You've subscribed for ${hours} hours!`,
      ...noMentions,
    });
  }
}

export const command = new NotifyCommand();
