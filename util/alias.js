const alias = {
  /*
    Adds the aliases to the name and the name to the aliases
    So e.g. alias.add("axe", ["chopper", "hatchet", "dicer", "logger"]
    adds entries
    "axe" -> ["axe", "chopper", "hatchet", "dicer", "logger"],
    "chopper" -> ["axe", "chopper", "hatchet", "dicer", "logger"],
    "hatchet" -> ["axe", "chopper", "hatchet", "dicer", "logger"],
    and so on.
    The name itself is added to the list of known aliases so it works when that
    part of the given input is a part of the actual name.
    @param name the name to add all the aliases to
    @param aliases the list of aliases to add
   */
  add(name, aliases) {
    let al = [name];
    al.push(...aliases);
    for (let i = 0; i < al.length; i++) {
      let alias1 = al[i];
      if (!this.aliases[alias1])
        this.aliases[alias1] = [];
      let arr = Array.from(al);
      this.aliases[alias1] = this.aliases[alias1].concat(arr);
      this.aliases[alias1] = Array.from(new Set(this.aliases[alias1]));
    }
  },
  /**
   *
   * @param name the name of the item/monster as input by the user
   * @param target an object from the item or monster list
   * @param targetName the displayed name of the target object, included because monster names have underscores
   * @returns a boolean
   */
  find(name, target, targetName = target.Name.toLowerCase()) {
    name = name.toLowerCase();
    // if (target.Name === 'Gold Platebody') {
    //   console.log('test');
    // }
    // first try finding the whole name to catch special cases
    if (this.aliases[name]) {
      for (let cand of this.aliases[name]) {
        if (cand === targetName) {
          return true;
        }
      }
      return false;
    }
    // e.g. name = "t3 mat bag"
    let parts = name.split(' ');
    let candidates = parts.map(part => this.aliases[part] && this.aliases[part].length > 0 ? this.aliases[part] : [part]);
    let aliases = cartesian(...candidates);
    for (const alias of aliases) {
      if (alias.join(' ') === targetName) {
        return true;
      }
    }
    return false;
  },
  /*
   * Gets all the aliases for name
   * @param name a string to find all the aliases for
   */
  getAliases(name) {
    let aliases = this.aliases[name];
    if (aliases) return aliases;

    let parts = name.split(' ');
    let candidates = parts.map(part => alias.aliases[part] && alias.aliases[part].length > 0 ? alias.aliases[part] : [part]);
    return Array.from(cartesian(...candidates)).map(a => a.join(" "));
  },
  aliases: {}
};

function* cartesian(head, ...tail) {
  for (let h of head) {
    const remainder = tail.length > 0 ? cartesian(...tail) : [[]];
    for (let r of remainder) yield [h, ...r];
  }
}
// Item aliases
alias.add('pouch', ['bag']);
// Size aliases
alias.add('cramped', ['t1']);
alias.add('small', ['t2']);
alias.add('average', ['t3', 'gold']);
alias.add('sizable', ['t4', 'plat', 'platinum']);
alias.add('big', ['t5', 'dem']);
// Bag type/skill name aliases
alias.add('mining', ['mine', 'ore', 'cavern']);
alias.add('choppin', ['wood', 'chop', 'logger']);
alias.add('food', []);
alias.add('mat', ['material', 'materials']);
alias.add('fish', ['fishing', 'angler']);
alias.add('bug', ['catching', 'bandito']);
// Tool name aliases
alias.add('pick', ['pickaxe', 'pickolo']);
alias.add('axe', ['chopper', 'hatchet', 'dicer', 'logger']);
alias.add('rod', ['fishing rod', 'fish rod']);
alias.add('net', []);
// Material name aliases
alias.add('copper', ['t1']);
alias.add('iron', ['t2']);
alias.add('gold', ['t3', 'golden', 'gilded']);
alias.add('plat', ['t4', 'platinum']);
alias.add('dem', ['t5', 'dementia']);
alias.add('lustre', ['t6']);
alias.add('dreadlo', ['t7']);
// Equip name aliases
alias.add('helmet', ['helm', 'head', 'hat', 'beanie']);
alias.add('platebody', ['chest', 'chestplate', 'platbody', 'bodyplate', 'body', 'shirt', 'tee']);
alias.add('platelegs', ['legs', 'pants', 'shins', 'hinds']);
alias.add('boots', ['shoes', 'paws', 'feet', 'trekkers', 'heels']);
// Special cases
alias.add('copper netted net', ['copper net', 't1 net']);
alias.add('reinforced net', ['iron net', 't2 net']);
alias.add('platinet', ['plat net', 't4 net']);
alias.add('bleached designer wode patch pants', ['wood pants', 'chop pants', 'chopping pants']);
alias.add('dirty coal miner baggy soot pants', ['ore pants', 'mine pants', 'mining pants']);

// Monsters
// World 1
alias.add('green mushroom', ['spore']);
alias.add('frog', []);
alias.add('bored bean', ['beans']);
alias.add('slime', []);
alias.add('baby boa', ['snake']);
alias.add('carrotman', ['carrot']);
alias.add('glublin', ['goblin']);
alias.add('wode board', ['planks']);
alias.add('gigafrog', ['big frog', 'bullfrog']);
alias.add('poop', []);
alias.add('rat', []);
alias.add('walking stick', ['sticks']);
alias.add('nutto', ['nuts']);
// World 2
alias.add('sandy pot', ['sand pots', 'pots']);
alias.add('mimic', []);
alias.add('crabcake', ['crab']);
alias.add('mafioso', ['coconuts']);
alias.add('sand castle', ['castles']);
alias.add('pincermin', ['pincer']);
alias.add('mashed potato', ['potato']);
alias.add('tyson', ['steak']);
alias.add('moonmoon', ['moon']);
alias.add('sand giant', ['sg']);
alias.add('snelbie', ['snail', 'snails']);
alias.add('dig doug', []);
// Bosses
alias.add('baba yaga', ['house', 'baba', 'house monster']);
alias.add('dr defecaus', ['big poop', 'poop boss']);
alias.add('amarok', ['w1 boss']);
alias.add('chaotic amarok', ['camarok']);
alias.add('biggie hours', ['hourglass']);
alias.add('king doot', ['doot']);
alias.add('efaunt', ['w2 boss']);

module.exports = alias;
