const { Setting, Subscriber } = require('./schemas.js');
const mongoose = require('mongoose');
const Logger = require('../util/Logger.js');
require('dotenv').config();

const logger = new Logger('MongoDb');
class Mongo {
  async connectToDatabase() {
    logger.log('Connecting to Mongo Database!');

    try {
      this.db = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      if (typeof this.db !== 'undefined') {
        logger.log('Connected!');
      } else {
        throw new Error('Could not connect to the database!');
      }
    } catch (err) {
      logger.error(err);
    }
  }

  async disconnect() {
    logger.log('Disconecting Mongo');
    try {
      await mongoose.connection.close();
      logger.log('Disconnected!');
    } catch (err) {
      logger.error(err);
    }
  }

  async updateGuildPrefix(id, prefix) {
    await Setting.findOneAndUpdate(
      { _id: id },
      { prefix },
      { upsert: true, useFindAndModify: false }
    );
  }

  async getGuildPrefixes() {
    const settings = await this.getGuildSettings();
    return settings.map((settings) => {
      return { guildId: settings._id, prefix: settings.prefix };
    });
  }

  async getGuildSettings() {
    return await Setting.find();
  }

  async getSubscribers() {
    const results = await Subscriber.find();

    return results.map(({ _id, hours }) => {
      return { id: _id, hours };
    });
  }

  async getSubscriber(id) {
    return await Subscriber.findOne({ _id: id });
  }

  async updateSubscriber(id, hours) {
    try {
      await Subscriber.findByIdAndUpdate(
        { _id: id },
        { hours },
        { upsert: true, useFindAndModify: false }
      );
    } catch (err) {
      logger.error(err);
    }
  }

  async updateSubscribers(subscribers) {
    const operations = subscribers.map(({ id, hours }) => {
      return {
        updateOne: {
          filter: { _id: id },
          update: { hours },
          upsert: true,
        },
      };
    });

    try {
      const { matchedCount, modifiedCount } = await Subscriber.bulkWrite(
        operations
      );
      logger.log(`Matched: ${matchedCount}, Updated: ${modifiedCount}.`);
    } catch (err) {
      logger.error(err);
    }
  }

  async removeSubscriber(id) {
    const result = await Subscriber.findByIdAndDelete({ _id: id });
    if (result) logger.log('Removed 1 Subscriber!');
  }

  async removeSubscribers(ids) {
    try {
      const { deletedCount } = await Subscriber.deleteMany({
        _id: { $in: ids },
      });
      logger.log(`${deletedCount} removed;`);
    } catch (err) {
      logger.error(err);
    }
  }
}

module.exports = new Mongo();
