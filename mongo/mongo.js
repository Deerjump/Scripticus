const { MongoClient } = require('mongodb');
const Logger = require('../util/Logger.js');
require('dotenv').config();

const logger = new Logger('MongoDb');
class Mongo {

  async connectToDatabase() {
    logger.log('Connecting to Mongo Database!');
    const url = process.env.MONGO_URL;

    const options = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    };
    try {
      this.connection = await MongoClient.connect(url, options);
      this.db = this.connection.db();

      if (typeof this.db !== 'undefined') {
        logger.log('Connected!');
      } else {
        throw new Error(`[MongoDB] could not connect to the database.`);
      }
    } catch (err) {
      logger.error(err);
    }
  }
  disconnect() {
    logger.log('Running MongoConnection disconnect');
    return this.connection.close()
      .then(logger.log('MongoConnection disconnected'))
      .catch(err => logger.log(err));
  }

  async init() {
    await this.connectToDatabase();
  }

  async updateGuildPrefix(guildID, newPrefix) {
    const filter = { guildID: String(guildID) };
    const updateOp = { $set: { prefix: newPrefix } };
    const options = { upsert: true };
    await this.db
      .collection('guilds')
      .updateOne(filter, updateOp, options);
  }

  async getGuildPrefixes() {
    const query = {};
    const options = { projection: { guildID: 1, prefix: 1 } };
    try {
      return await this.db
        .collection('guilds')
        .find(query, options)
        .toArray();
    } catch (err) {
      logger.error(err);
    }
  }

  async updateGuildCooldown(guildID) {
    logger.log(guildID);
  }

  async addSubscriber(id, hours) {
    try {
      const myobj = { id: String(id), hours: hours };

      await this.db.collection('subscribers').insertOne(myobj);
    } catch (err) {
      logger.error(err);
    }
  }

  async getSubscriber(id) {
    try {
      const query = { id: id };
      const options = { projection: { _id: 0, id: 1, hours: 1 } };

      const subscriber = await this.db
        .collection('subscribers')
        .findOne(query, options);
      return subscriber;
    } catch (err) {
      logger.error(err);
    }
  }

  async getSubscribers() {
    let subscribers;
    try {
      const options = { projection: { _id: 0, id: 1, hours: 1 } };

      subscribers = await this.db
        .collection('subscribers')
        .find({}, options)
        .toArray();
    } catch (err) {
      logger.error(err);
    }
    return subscribers;
  }

  async updateSubscriber(id, hours) {
    try {
      const filter = { id: id };
      const options = { upsert: true };
      const updateDoc = { $set: { hours: hours } };
      const {
        matchedCount,
        modifiedCount,
        upsertedCount,
      } = await this.db
        .collection('subscribers')
        .updateOne(filter, updateDoc, options);
      logger.log(
        `Matched: ${matchedCount}, Updated: ${modifiedCount}, Upserted: ${upsertedCount}.`
      );
    } catch (err) {
      logger.error(err);
    }
  }

  async updateSubscribers(subscribers) {
    const operations = [];
    subscribers.forEach(({ id, hours }) => {
      const operation = {
        updateOne: {
          filter: { id: String(id) },
          update: { $set: { hours: hours } },
          upsert: true,
        },
      };
      operations.push(operation);
    });
    try {
      const {
        matchedCount,
        modifiedCount,
        upsertedCount,
      } = await this.db
        .collection('subscribers')
        .bulkWrite(operations);
      logger.log(
        `Matched: ${matchedCount}, Updated: ${modifiedCount}, Upserted: ${upsertedCount}.`
      );
    } catch (err) {
      logger.error(err);
    }
  }

  async removeSubscriber(id) {
    const query = { id: String(id) };
    try {
      const result = await this.db
        .collection('subscribers')
        .deleteOne(query);
      if (result.deletedCount === 1) {
        logger.log('Successfully deleted 1 document!');
      } else {
        logger.log(`No matches found for ${id}`);
      }
    } catch (err) {
      logger.error(err);
    }
  }

  async removeSubscribers(subscribers) {
    const operations = [];
    subscribers.forEach((id) => {
      const operation = {
        deleteOne: {
          filter: { id: String(id) },
        },
      };
      operations.push(operation);
    });
    try {
      const result = await this.db
        .collection('subscribers')
        .bulkWrite(operations);
      logger.log(`Deleted ${result.deletedCount} document(s)`);
    } catch (err) {
      logger.error(err);
    }
  }
}

module.exports = new Mongo();
