const { MongoClient } = require('mongodb');
require('dotenv').config();

class MongoConnection {
  static connectToDatabase() {
    if (this.db) return Promise.resolve(this.db);
    return MongoClient.connect(this.url, this.options)
      .then(client => this.db = client.db())
      .catch(err => console.error(err));
  }
}

MongoConnection.db = null;
MongoConnection.url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@scripticus.jwgax.mongodb.net/Scripticus?retryWrites=true&w=majority`;
MongoConnection.options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

module.exports = { MongoConnection };