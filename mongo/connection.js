const { MongoClient } = require('mongodb');
require('dotenv').config();

const MongoConnection = {
  connectToDatabase() {
    if (this.db) return Promise.resolve(this.db);
    return MongoClient.connect(this.url, this.options)
      .then(connection => {
        this.db = connection.db();
        this.connection = connection;
      })
      .catch(err => console.error(err));
  },
  disconnect() {
    return this.connection.close();
  }
};

MongoConnection.db = null;
MongoConnection.url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@scripticus.jwgax.mongodb.net/Scripticus?retryWrites=true&w=majority`;
MongoConnection.options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};
MongoConnection.connectToDatabase();
module.exports = { MongoConnection };