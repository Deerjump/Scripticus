const { MongoConnection } = require('./connection.js');

module.exports = {
  async updateServerPrefix(guildID, newPrefix) {
    const filter = { guildID: String(guildID) };
    const updateOp = { $set: { prefix: newPrefix } };
    const options = { upsert: true };
    await MongoConnection.db
      .collection('servers')
      .updateOne(filter, updateOp, options);
  },
  async getServerPrefixes() {
    const query = {};
    const options = { projection: { guildID: 1, prefix: 1 } };
    try {
      const serverPrefixes = await MongoConnection.db
        .collection('servers')
        .find(query, options)
        .toArray();
      return serverPrefixes;
    } catch (err) {
      console.error(err);
    }
  }
};