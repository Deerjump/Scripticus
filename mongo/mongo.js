const { MongoClient } = require('mongodb');
require('dotenv').config();

const MONGO = '[MongoDb]';
class Mongo {


  // url: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@scripticus.63urb.mongodb.net/scripticus?retryWrites=true&w=majority`,
  async connectToDatabase() {
    console.log(MONGO, 'Connecting to Mongo Database!');
    const url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@scripticus.jwgax.mongodb.net/Scripticus?retryWrites=true&w=majority`;
    const options = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    };
    try {
      this.connection = await MongoClient.connect(url, options);
      this.db = this.connection.db();

      if (typeof this.db !== 'undefined') {
        console.log(MONGO, 'Connected!');
      } else {
        throw new Error(`${MONGO} could not connect to the database.`);
      }
    } catch (err) {
      console.error(MONGO, err);
    }
  }
  disconnect() {
    console.log(MONGO, 'Running MongoConnection disconnect');
    return this.connection.close()
      .then(console.log(MONGO, 'MongoConnection disconnected'))
      .catch(err => console.log(MONGO, err));
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
      console.error(err);
    }
  }

  async updateGuildCooldown(guildID) {
    console.log(guildID);
  }

  async addSubscriber(id, hours) {
    try {
      const myobj = { id: String(id), hours: hours };

      await this.db.collection('subscribers').insertOne(myobj);
    } catch (err) {
      console.error(err);
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
      console.error(err);
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
      console.error(err);
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
      console.log(
        `Matched: ${matchedCount}, Updated: ${modifiedCount}, Upserted: ${upsertedCount}.`
      );
    } catch (err) {
      console.error(err);
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
      console.log(
        `Matched: ${matchedCount}, Updated: ${modifiedCount}, Upserted: ${upsertedCount}.`
      );
    } catch (err) {
      console.error(err);
    }
  }

  async removeSubscriber(id) {
    const query = { id: String(id) };
    try {
      const result = await this.db
        .collection('subscribers')
        .deleteOne(query);
      if (result.deletedCount === 1) {
        console.log('Successfully deleted 1 document!');
      } else {
        console.log(`No matches found for ${id}`);
      }
    } catch (err) {
      console.error(err);
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
      console.log(`Deleted ${result.deletedCount} document(s)`);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new Mongo();
