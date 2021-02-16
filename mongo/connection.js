const { MongoClient } = require('mongodb');
require('dotenv').config();

const MongoConnection = {
  url: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@scripticus.jwgax.mongodb.net/Scripticus?retryWrites=true&w=majority`,
  options:  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  },
  async connectToDatabase() {
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

(async () => await MongoConnection.connectToDatabase())();

module.exports = { MongoConnection };