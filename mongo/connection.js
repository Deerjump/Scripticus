const { MongoClient } = require('mongodb');
require('dotenv').config();

class Connection {
  static mongoConnect() {
    if (this.db) return Promise.resolve(this.db);
    return MongoClient.connect(this.url, this.options)
      .then(client => this.db = client.db())
      .catch(err => console.error(err));
  }
}

Connection.db = null;
Connection.url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@scripticus.jwgax.mongodb.net/Scripticus?retryWrites=true&w=majority`;
Connection.options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

module.exports = { Connection };