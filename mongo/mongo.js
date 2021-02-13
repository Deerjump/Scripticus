const { MongoConnection } = require('./connection.js');
require('dotenv').config();

module.exports = {
  async init() {
    await MongoConnection.connectToDatabase();
  },
  async addSubscriber(id, hours) {
    try {
      const myobj = { id: String(id), hours: hours };

      await MongoConnection.db.collection('subscribers').insertOne(myobj);
    } catch (err) {
      console.error(err);
    }
  },
  async getSubscriber(id) {
    try {
      const query = { id: id };
      const options = { projection: { _id: 0, id: 1, hours: 1 } };

      const subscriber = await MongoConnection.db
        .collection('subscribers')
        .findOne(query, options);
      return subscriber;
    } catch (err) {
      console.error(err);
    }
  },
  async getSubscribers() {
    let subscribers;
    try {
      const options = { projection: { _id: 0, id: 1, hours: 1 } };

      subscribers = await MongoConnection.db
        .collection('subscribers')
        .find({}, options)
        .toArray();
    } catch (err) {
      console.error(err);
    }
    return subscribers;
  },
  async updateSubscriber(id, hours) {
    try {
      const filter = { id: id };
      const options = { upsert: true };
      const updateDoc = { $set: { hours: hours } };
      const { matchedCount, modifiedCount, upsertedCount } = await MongoConnection.db
        .collection('subscribers')
        .updateOne(filter, updateDoc, options);
      console.log(
        `Matched: ${matchedCount}, Updated: ${modifiedCount}, Upserted: ${upsertedCount}.`
      );
    } catch (err) {
      console.error(err);
    }
  },
  async updateSubscribers(subscribers) {
    // const client = new MongoClient(url, { useUnifiedTopology: true, useNewUrlParser: true });
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
      } = await MongoConnection.db.collection('subscribers').bulkWrite(operations);
      console.log(
        `Matched: ${matchedCount}, Updated: ${modifiedCount}, Upserted: ${upsertedCount}.`
      );
    } catch (err) {
      console.error(err);
    }
  },
  async removeSubscriber(id) {
    const query = { id: String(id) };
    try {
      const result = await MongoConnection.db
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
  },
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
      const result = await MongoConnection.db
        .collection('subscribers')
        .bulkWrite(operations);
      console.log(`Deleted ${result.deletedCount} document(s)`);
    } catch (err) {
      console.error(err);
    }
  },
};
