const Logger = require('./Logger.js');
const logger = new Logger('ItemRepository');
const itemPath = '../src/items.json';
const itemJson = require(itemPath);
const alias = require('./alias.js');

function processJson() {
  return itemJson;
}

class ItemRepository {
  constructor() {
    this.items = processJson();
  }

  getItemById(id) {
    return this.items[id];
  }

  getItemByName(name) {
    for (const key in this.items) {
      const found = alias.find(name, this.items[key]);
      if (found) {
        return this.items[key];
      }
    }
  }
  
  getItem(name) {
    const item = this.getItemById(name)
    if (item) return item;
    return this.getItemByName(name);
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