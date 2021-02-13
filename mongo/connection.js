const { MongoClient } = require('mongodb');
require('dotenv').config();

const MONGO = '[MongoDb]';

const MongoConnection = {
  url: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@scripticus.jwgax.mongodb.net/Scripticus?retryWrites=true&w=majority`,
  // url: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@scripticus.63urb.mongodb.net/scripticus?retryWrites=true&w=majority`,
  options:  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  },
  async connectToDatabase() {
    console.log(MONGO, 'Connecting to Mongo Database!');
    try{
      const connection = await MongoClient.connect(this.url, this.options);
      this.db = connection.db();
      this.connection = connection;
      console.log(MONGO, 'Connected!');
    } catch (err) {
      console.error(MONGO, err);
    }
  },
  disconnect() {
    return this.connection.close();
  }
};

module.exports = { MongoConnection };