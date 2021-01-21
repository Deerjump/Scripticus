const { MongoClient } = require('mongodb');
require('dotenv').config();

const url = `mongodb+srv://${process.env.MONGOUSERNAME}:${process.env.MONGOPASSWORD}@scripticus.jwgax.mongodb.net/Scripticus?retryWrites=true&w=majority`;

module.exports = {
  async addSubscriber(id, hours) {
    const client = new MongoClient(url, { useUnifiedTopology: true, useNewUrlParser: true });
    try {
      await client.connect();
      const db = client.db('Scripticus');

      const myobj = { id: String(id), hours: hours };

      await db.collection('subscribers').insertOne(myobj);
    } finally {
      await client.close();
    }
  },
  async getSubscriber(id) {
    const client = new MongoClient(url, { useUnifiedTopology: true, useNewUrlParser: true });
    try {
      await client.connect();
      const db = client.db('Scripticus');

      const query = { id: id };
      const options = { projection: { _id: 0, id: 1, hours: 1 } };

      const subscriber = await db
        .collection('subscribers')
        .findOne(query, options);
      return subscriber;
    } finally {
      await client.close();
    }
  },
  async getSubscribers() {
    const client = new MongoClient(url, { useUnifiedTopology: true, useNewUrlParser: true });
    let subscribers;
    try {
      await client.connect();
      const db = client.db('Scripticus');
      const options = { projection: { _id: 0, id: 1, hours: 1 } };

      subscribers = await db
        .collection('subscribers')
        .find({}, options)
        .toArray();
    } finally {
      await client.close();
    }
    return subscribers;
  },
  async updateSubscriber(id, hours) {
    const client = new MongoClient(url, { useUnifiedTopology: true, useNewUrlParser: true });
    try {
      await client.connect();

      const db = client.db('Scripticus');
      const filter = { id: id };
      const options = { upsert: true };
      const updateDoc = { $set: { hours: hours } };
      const { matchedCount, modifiedCount, upsertedCount } = await db
        .collection('subscribers')
        .updateOne(filter, updateDoc, options);
      console.log(
        `Matched: ${matchedCount}, Updated: ${modifiedCount}, Upserted: ${upsertedCount}.`
      );
    } finally {
      await client.close();
    }
  },
  async updateSubscribers(subscribers) {
    const client = new MongoClient(url, { useUnifiedTopology: true, useNewUrlParser: true });
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
      await client.connect();

      const db = client.db('Scripticus');
      const {
        matchedCount,
        modifiedCount,
        upsertedCount,
      } = await db.collection('subscribers').bulkWrite(operations);
      console.log(
        `Matched: ${matchedCount}, Updated: ${modifiedCount}, Upserted: ${upsertedCount}.`
      );
    } finally {
      client.close();
    }
  },
  async removeSubscriber(id) {
    const client = new MongoClient(url, { useUnifiedTopology: true, useNewUrlParser: true });
    const query = { id: String(id) };
    try {
      await client.connect();
      const database = client.db('Scripticus');
      const result = await database
        .collection('subscribers')
        .deleteOne(query);
      if (result.deletedCount === 1) {
        console.log('Successfully deleted 1 document!');
      } else {
        console.log(`No matches found for ${id}`);
      }
    } finally {
      await client.close();
    }
  },
  async removeSubscribers(subscribers) {
    const client = new MongoClient(url, { useUnifiedTopology: true, useNewUrlParser: true });
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
      await client.connect();
      const database = client.db('Scripticus');
      const result = await database
        .collection('subscribers')
        .bulkWrite(operations);
      console.log(`Deleted ${result.deletedCount} document(s)`);
    } finally {
      await client.close();
    }
  },
};
