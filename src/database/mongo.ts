import {
  Database,
  GuildSettings,
  GuildSettingsDto,
} from '@customTypes';
import { GuildSettingsModel } from './schemas';
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

  public async updateGuildSettings(guildId: string, settings: GuildSettings) {
    if (guildId == undefined || settings == undefined) return;
    
    await GuildSettingsModel.findOneAndUpdate(
      { guildId },
      { settings },
      { upsert: true }
    );
  }
}
