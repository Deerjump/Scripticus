const Logger = require('./Logger.js');
const logger = new Logger('ItemRepository');
const itemPath = '../src/items.json';
const itemJson = require(itemPath);
const alias = require('./alias.js');


class ItemRepository {
  constructor() {
    this.items = itemJson;
  }

  getItemById(id) {
    return this.items[id];
  }

  getItemByName(name) {
    for (const item of this.items) {
      if (item.displayName === name)
        return item;
    }
  }

  getItem(name) {
    for (const key of this.items) {
      const found = alias.find(name, this.items[key]);
      if (found) {
        return value;
      }
    }
  }

  reload() {
    delete require.cache[require.resolve(itemPath)];
    try {
      this.items = require(itemPath); 
      logger.log()
    } catch(error) {
      logger.error(`Error reloading items: ${error}`);
    }
  }
}

module.exports = new ItemRepository();