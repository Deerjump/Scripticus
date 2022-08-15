import aliasData from '../resources/aliases';

class AliasRepository {
  aliases: any;

  constructor() {
    this.aliases = [];
    Object.entries(aliasData).forEach(([base, aliases]: [string, string[]]) =>
      this.add(base, aliases)
    );
  }

  /**
   * Adds the aliases to the name and the name to the aliases
   * So e.g. alias.add("axe", ["chopper", "hatchet", "dicer", "logger"]
   * adds entries
   * "axe" -> ["axe", "chopper", "hatchet", "dicer", "logger"],
   * "chopper" -> ["axe", "chopper", "hatchet", "dicer", "logger"],
   * "hatchet" -> ["axe", "chopper", "hatchet", "dicer", "logger"],
   * and so on.
   * The name itself is added to the list of known aliases so it works when that
   * part of the given input is a part of the actual name.
   * @param name the name to add all the aliases to
   * @param list the list of aliases to add
   */
  private add(name: string, list: string[]) {
    const newEntries = [name, ...list];

    for (const alias of newEntries) {
      this.aliases[alias] = Array.from(new Set([...newEntries, ...(this.aliases[alias] ?? [])]));
    }
  }

  /**
   *
   * @param name the name of the item/monster as input by the user
   * @param target an object from the item or monster list
   * @param targetName the displayed name of the target object, included because monster names have underscores
   * @returns boolean
   */
  find(name: string, target: any, targetName: string = target.displayName.toLowerCase()) {
    name = name.toLowerCase();
    // first try finding the whole name to catch special cases
    if (this.aliases[name]) {
      for (const cand of this.aliases[name]) {
        if (cand === targetName) {
          return true;
        }
      }
      return false;
    }
    // e.g. name = "t3 mat bag"
    const parts = name.split(' ');
    const candidates = parts.map((part) =>
      this.aliases[part]?.length > 0 ? this.aliases[part] : [part]
    );
    const aliases = this.cartesian(candidates);
    for (const al of aliases) {
      if (al.join(' ') === targetName) {
        return true;
      }
    }
    return false;
  }

  /**
   * Gets all the aliases for name
   * @param name a string to find all the aliases for
   */
  getAliases(name: string): string[] {
    const aliases = this.aliases[name];
    if (aliases) return aliases.filter((str: string) => str !== name);

    const parts = name.split(' ');
    const candidates = parts.map((part) =>
      this.aliases[part] && this.aliases[part].length > 0 ? this.aliases[part] : [part]
    );
    return Array.from(this.cartesian(candidates))
      .map((a: any) => a.join(' '))
      .filter((a: string) => a !== name);
  }

  private *cartesian([head, ...tail]: any[]): any {
    for (const h of head) {
      const remainder = tail.length > 0 ? this.cartesian(tail) : [[]];
      for (const r of remainder) yield [h, ...r];
    }
  }
}

export = new AliasRepository();
