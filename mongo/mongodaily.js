const { MongoConnection } = require('./connection.js');
require('dotenv').config();

module.exports = {
  async init() {
    await MongoConnection.connectToDatabase();
  },
  async addDailySubscriber(id, hour, warninghours) {
    try {
      const myobj = { id: String(id), hour: hour, warninghours: warninghours };
    //Set the User to the inserted hour (1-24) and as many hours of warning as they'd like
     
      await MongoConnection.db.collection('dailysubscribers').insertOne(myobj);
    } catch (err) {
      console.error(err);
    }
  },
  async getDailySubscriber(id) {
    try {
      const query = { id: id };
      const options = { projection: { _id: 0, id: 1, hour: 1, warninghours: 1 } };

      const subscriber = await MongoConnection.db
        .collection('dailysubscribers')
        .findOne(query, options);
      return subscriber;
    } catch (err) {
      console.error(err);
    }
  },
  async getDailySubscribers() {
    let subscribers;
    try {
      const options = { projection: { _id: 0, id: 1, hour: 1, warninghours: 1} };

      subscribers = await MongoConnection.db
        .collection('dailysubscribers')
        .find({}, options)
        .toArray();
    } catch (err) {
      console.error(err);
    }
    return subscribers;
  },
  async updateDailySubscriber(id, hour, warninghours) {
    try {
      const filter = { id: id };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          hour: hour,
          warninghours: warninghours
        }
       };
        
      const {
        matchedCount,
        modifiedCount,
        upsertedCount,
      } = await MongoConnection.db
        .collection('dailysubscribers')
        .updateOne(filter, updateDoc, options);
      console.log(
        `Matched: ${matchedCount}, Updated: ${modifiedCount}, Upserted: ${upsertedCount}.`
      );
      
    } catch (err) {
      console.error(err);
    }
  },
  async removeDailySubscriber(id) {
    const query = { id: String(id) };
    try {
      const result = await MongoConnection.db
        .collection('dailysubscribers')
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
};
