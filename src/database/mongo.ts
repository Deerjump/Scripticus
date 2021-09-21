import {
  Database,
  GuildSettings,
  GuildSettingsDto,
  Subscriber,
} from '@customTypes/types';
import { GuildSettingsModel, SubscriberModel } from './schemas';
import { connect, connection } from 'mongoose';
import { Logger } from '../utils/logger';

export class DatabaseDriver implements Database {
  private mongoUrl: string;
  private logger: Logger;

  constructor(mongoUrl: string) {
    this.mongoUrl = mongoUrl;
    this.logger = new Logger('MongoDb');
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
    return await GuildSettingsModel.find().lean();
  }

  public async getGuildSettings(guildId: string): Promise<GuildSettingsDto> {
    return await GuildSettingsModel.findOne({ guildId }).lean();
  }

  public async getSubscribers(): Promise<Subscriber[]> {
    return await SubscriberModel.find().lean();
  }

  public async getSubscriber(userId: string) {
    return await SubscriberModel.findOne({ userId }).lean();
  }

  public async updateGuildSettings(guildId: string, settings: GuildSettings) {
    await GuildSettingsModel.findOneAndUpdate(
      { guildId },
      { settings },
      { upsert: true }
    );
  }

  public async updateSubscriber({ userId, hours }: Subscriber) {
    try {
      await SubscriberModel.findOneAndUpdate(
        { userId },
        { hours },
        { upsert: true }
      );
    } catch (err) {
      this.logger.error(err);
    }
  }

  public async updateSubscribers(subscribers: Subscriber[]) {
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

  public async removeSubscriber(userId: string) {
    const result = await SubscriberModel.findOneAndDelete({ userId });
    if (result) this.logger.log('Removed 1 Subscriber!');
  }

  // TODO: should the argument be Subscriber[]?
  public async removeSubscribers(userIds: string[]) {
    try {
      const { deletedCount } = await SubscriberModel.deleteMany({
        userId: { $in: userIds },
      });
      this.logger.log(`${deletedCount} removed;`);
    } catch (err) {
      this.logger.error(err);
    }
  }
}