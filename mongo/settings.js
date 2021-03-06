const { MongoConnection } = require('./connection.js');

module.exports = {
  async updateGuildPrefix(guildID, newPrefix) {
    const filter = { guildID: String(guildID) };
    const updateOp = { $set: { prefix: newPrefix } };
    const options = { upsert: true };
    await MongoConnection.db
      .collection('guilds')
      .updateOne(filter, updateOp, options);
  },
  async getGuildPrefixes() {
    const query = {};
    const options = { projection: { guildID: 1, prefix: 1 } };
    try {
      return await MongoConnection.db
        .collection('guilds')
        .find(query, options)
        .toArray();
    } catch (err) {
      console.error(err);
    }
  },
  async updateGuildCooldown(guildID) {
    console.log(guildID);
  },
};
