import { Database, GuildSettings, GuildSettingsDto, LogDocument } from '@customTypes';
import { GuildSettingsModel, LoggingModel, LoggingSchema } from './schemas';
import { connect, connection, Model } from 'mongoose';
import { format } from 'util';
import {LoggerFactory} from '../factories/_loggerfactory';
import {ILogger} from '../types/types';

export class DatabaseDriver implements Database {
  private mongoUrl: string;
  private logger: ILogger;

  constructor(mongoUrl: string) {
    this.mongoUrl = mongoUrl;
        
    const _loggerFactory = LoggerFactory.getInstance();
    this.logger = _loggerFactory.Logger('MongoDb',process.env.LOGGER_TYPE!)
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

  async connectToDatabase() {
    this.logger.Log('Connecting to database...');

    try {
      await connect(this.mongoUrl);
      this.logger.Log('Connected!');
    } catch (err) {
      this.logger.Error(err);
      this.logger.Log('Stopping process...');
      process.exit();
    }
  }

  async disconnect() {
    this.logger.Log('Disconnecting Mongo');
    try {
      await connection.close();
      this.logger.Log('Disconnected!');
    } catch (err) {
      this.logger.Error(err);
    }
  }

  async getAllGuildSettings(): Promise<GuildSettingsDto[]> {
    return await GuildSettingsModel.find(
      {},
      this.getProjectionFromModel(GuildSettingsModel)
    ).lean();
  }

  async getGuildSettings(guildId: string): Promise<GuildSettingsDto> {
    return await GuildSettingsModel.findOne(
      { guildId },
      this.getProjectionFromModel(GuildSettingsModel)
    ).lean();
  }

  async updateGuildSettings(guildId: string, settings: GuildSettings) {
    if (guildId == undefined || settings == undefined) return {};

    const result = await GuildSettingsModel.findOneAndUpdate(
      { guildId },
      { settings },
      { upsert: true, new: true, projection: { _id: 0, settings: { _id: 0 } } }
    ).lean();

    return result.settings;
  }

  async LogToDatabase(logType: string, log: LogDocument) {
    const result = await LoggingModel.insertMany(
      {logType},
      {log}
    );
  }
}
