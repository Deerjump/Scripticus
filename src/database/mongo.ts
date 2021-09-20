import { DatabaseDriver, GuildSettings, GuildSettingsDto, Subscriber } from "@customTypes/types";
import { GuildSettingsModel, SubscriberModel } from "./schemas";
import { connect, connection } from "mongoose";
import { Logger } from "../utils/logger";
import "dotenv/config";

const logger = new Logger("MongoDb");

class Database implements DatabaseDriver {
  private mongoUrl: string;

  constructor(mongoUrl: string) {
    this.mongoUrl = mongoUrl;
  }

  async connectToDatabase() {
    logger.log("Connecting to Mongo Database!");

    try {
      await connect(this.mongoUrl);
      logger.log("Connected!");
    } catch (err) {
      logger.error(err);
    }
  }

  async disconnect() {
    logger.log("Disconecting Mongo");
    try {
      await connection.close();
      logger.log("Disconnected!");
    } catch (err) {
      logger.error(err);
    }
  }

  async getAllGuildSettings(): Promise<GuildSettingsDto[]> {
    return await GuildSettingsModel.find().lean();
  }

  async getGuildSettings(guildId: string): Promise<GuildSettingsDto> {
    return await GuildSettingsModel.findOne({ guildId }).lean();
  }

  async getSubscribers(): Promise<Subscriber[]> {
    return await SubscriberModel.find().lean();
  }

  async getSubscriber(userId: string) {
    return await SubscriberModel.findOne({ userId }).lean();
  }

  async updateGuildSettings(guildId: string, settings: GuildSettings) {
    await GuildSettingsModel.findOneAndUpdate({ guildId }, { settings });
  }

  async updateSubscriber({ userId, hours }: Subscriber) {
    try {
      await SubscriberModel.findOneAndUpdate(
        { userId },
        { hours },
        { upsert: true }
      );
    } catch (err) {
      logger.error(err);
    }
  }

  async updateSubscribers(subscribers: Subscriber[]) {
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
      logger.log(`Matched: ${matchedCount}, Updated: ${modifiedCount}.`);
    } catch (err) {
      logger.error(err);
    }
  }

  async removeSubscriber(userId: string) {
    const result = await SubscriberModel.findOneAndDelete({ userId });
    if (result) logger.log("Removed 1 Subscriber!");
  }

  // TODO: should the argument be Subscriber[]?
  async removeSubscribers(userIds: string[]) {
    try {
      const { deletedCount } = await SubscriberModel.deleteMany({
        userId: { $in: userIds },
      });
      logger.log(`${deletedCount} removed;`);
    } catch (err) {
      logger.error(err);
    }
  }
}

export const mongoDriver = new Database(process.env.MONGO_URL!);
