import aliasRepository from './aliasRepository';
import { Items } from '@customTypes';
import items from '../resources/data/items';

function processJson(): Items {
  return items;
}

class ItemRepository {
  private items: Items;

  constructor() {
    this.items = processJson();
  }

  getItemById(id: string) {
    return this.items[id];
  }

  getItemByName(name: string) {
    for (const item of Object.values(this.items)) {
      if (aliasRepository.find(name, item)) return item;
    }
  }

  getItem(name: string) {
    const item = this.getItemById(name);
    if (item) return item;
    return this.getItemByName(name);
  }
}

export = new ItemRepository();
