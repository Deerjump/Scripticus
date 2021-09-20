import aliasRepository from "./aliasRepository";
import items from "../resources/data/items";
import { Items } from "@customTypes/types";

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
    Object.values(this.items).forEach((item) => {
      if (aliasRepository.find(name, item)) return item;
    });
  }

  getItem(name: string) {
    const item = this.getItemById(name);
    if (item) return item;
    return this.getItemByName(name);
  }
}

export = new ItemRepository();
