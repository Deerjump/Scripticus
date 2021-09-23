import {
  Database,
  GuildSettings,
  GuildSettingsDto,
  Subscriber,
} from '@customTypes';
import { GuildSettingsModel, SubscriberModel } from './schemas';
import { connect, connection, Model } from 'mongoose';
import { Logger } from '../utils/logger';

export class DatabaseDriver implements Database {
  private mongoUrl: string;
  private logger: Logger;

  constructor(mongoUrl: string) {
    this.mongoUrl = mongoUrl;
    this.logger = new Logger('MongoDb');
  }

  private getProjectionFromModel(model: Model<any>) {
    const projection = Object.keys(model.schema.obj).reduce(
      (acc, key) => {
        return { [key]: 1, ...acc };
      },
      { _id: 0 }
    );

    return projection;
  }

  public async connectToDatabase() {
    this.logger.log('Connecting to database...');

    try {
      await connect(this.mongoUrl);
      this.logger.log('Connected!');
    } catch (err) {
      this.logger.error(err);
    }
  }

  public async disconnect() {
    this.logger.log('Disconecting Mongo');
    try {
      await connection.close();
      this.logger.log('Disconnected!');
    } catch (err) {
      this.logger.error(err);
    }
  }

  public async getAllGuildSettings(): Promise<GuildSettingsDto[]> {
    return await GuildSettingsModel.find(
      {},
      this.getProjectionFromModel(GuildSettingsModel)
    ).lean();
  }

  public async getGuildSettings(guildId: string): Promise<GuildSettingsDto> {
    return await GuildSettingsModel.findOne(
      { guildId },
      this.getProjectionFromModel(GuildSettingsModel)
    ).lean();
  }

  public async getSubscribers(): Promise<Subscriber[]> {
    return await SubscriberModel.find(
      {},
      this.getProjectionFromModel(SubscriberModel)
    ).lean();
  }

  public async getSubscriber(userId: string): Promise<Subscriber> {
    return await SubscriberModel.findOne(
      { userId },
      this.getProjectionFromModel(SubscriberModel)
    ).lean();
  }

  public async updateGuildSettings(guildId: string, settings: GuildSettings) {
    if (guildId == undefined || settings == undefined) return;
    
    await GuildSettingsModel.findOneAndUpdate(
      { guildId },
      { settings },
      { upsert: true }
    );
  }

  public async updateSubscriber(sub: Subscriber) {
    if (sub == undefined) return;

    await SubscriberModel.findOneAndUpdate(
      { userId: sub.userId },
      { hours: sub.hours },
      { upsert: true }
    );
  }

  public async updateSubscribers(subscribers: Subscriber[]) {
    if (subscribers.length === 0) return;

    const operations = subscribers.map(({ userId, hours }) => {
      return {
        updateOne: {
          filter: { userId },
          update: { hours },
          upsert: true,
        },
      };
    });

    try {
      const { matchedCount, modifiedCount } = await SubscriberModel.bulkWrite(
        operations
      );
      this.logger.log(`Matched: ${matchedCount}, Updated: ${modifiedCount}.`);
    } catch (err) {
      this.logger.error(err);
    }
  }

  public async removeSubscriber({ userId }: Subscriber) {
    if (userId == undefined) return;

    const result = await SubscriberModel.findOneAndDelete({ userId });
    if (result?.$isDeleted) this.logger.log('Removed 1 Subscriber!');
  }

  public async removeSubscribers(unsubs: Subscriber[]) {
    if (unsubs.length === 0) return;

    try {
      const { deletedCount } = await SubscriberModel.deleteMany({
        userId: { $in: unsubs.map(({ userId }) => userId) },
      });
      this.logger.log(`${deletedCount} removed;`);
    } catch (err) {
      this.logger.error(err);
    }
  }
}
