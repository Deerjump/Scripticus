const self = {
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
   * @param aliases the list of aliases to add
   */
  add(name, aliases) {
    const al = [name];
    al.push(...aliases);
    for (let i = 0; i < al.length; i++) {
      const alias1 = al[i];
      if (!this.aliases[alias1]) {
        this.aliases[alias1] = [];
      }
      const arr = Array.from(al);
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
  find(name, target, targetName = target.displayName.toLowerCase()) {
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
      this.aliases[part] && this.aliases[part].length > 0
        ? this.aliases[part]
        : [part]
    );
    const aliases = cartesian(...candidates);
    for (const al of aliases) {
      if (al.join(' ') === targetName) {
        return true;
      }
    }
    return false;
  },
  /**
   * Gets all the aliases for name
   * @param name a string to find all the aliases for
   */
  getAliases(name) {
    const aliases = this.aliases[name];
    if (aliases) return aliases;

    const parts = name.split(' ');
    const candidates = parts.map((part) =>
      self.aliases[part] && self.aliases[part].length > 0
        ? self.aliases[part]
        : [part]
    );
    return Array.from(cartesian(...candidates)).map((a) => a.join(' '));
  },
  aliases: {}
};

function* cartesian(head, ...tail) {
  for (const h of head) {
    const remainder = tail.length > 0 ? cartesian(...tail) : [[]];
    for (const r of remainder) yield [h, ...r];
  }
}

// Item aliases
self.add('pouch', ['bag']);
// Size aliases
self.add('cramped', ['t1']);
self.add('small', ['t2']);
self.add('average', ['t3', 'gold']);
self.add('sizable', ['t4', 'plat', 'platinum']);
self.add('big', ['t5', 'dem']);
// Bag type/skill name aliases
self.add('mining', ['mine', 'ore', 'cavern']);
self.add('choppin', ['wood', 'chop', 'logger']);
self.add('food', []);
self.add('mat', ['material', 'materials']);
self.add('fish', ['fishing', 'angler']);
self.add('bug', ['catching', 'bandito']);
// Tool name aliases
self.add('pick', ['pickaxe', 'pickolo']);
self.add('axe', ['chopper', 'hatchet', 'dicer', 'logger']);
self.add('rod', ['fishing rod', 'fish rod']);
self.add('net', []);
self.add('traps', ['box, boxes'])
self.add('skull', [])
// Material name aliases
self.add('copper', ['t1']);
self.add('iron', ['t2', 'steel', 'silver']);
self.add('gold', ['t3', 'golden', 'gilded']);
self.add('plat', ['t4', 'platinum']);
self.add('dem', ['t5', 'dementia']);
self.add('lustre', ['t6']);
self.add('dreadlo', ['t7']);
self.add('efaunts', ['efaunt']);
// Equip name aliases
self.add('helmet', ['helm', 'head', 'hat', 'beanie']);
self.add('platebody', ['chest', 'chestplate', 'platbody', 'bodyplate', 'ribcage', 'body', 'shirt', 'tee']);
self.add('platelegs', ['legs', 'pants', 'shins', 'hinds', 'hipilium']);
self.add('boots', ['shoes', 'paws', 'feet', 'trekkers', 'heels', 'broken ankles']);
self.add('ring', ['band']);
// weapons
self.add('t1', ['wooden', 'gnarled', 'boxing']);
self.add('wand', ['staff']);

self.add('wooden spear', ['spear']);
self.add('wooden bow', []);
self.add('gnarled wand', []);

self.add('the stingers', ['t2 gloves']);
self.add('steel axe', ['t2 spear']);
self.add('birch longbow', ['t2 bow']);
self.add('quarterstaff', ['t2 staff', 't2 wand']);

self.add('bandage wraps', ['t3 gloves']);
self.add('royal bayonet', ['t3 spear']);
self.add('spiked menace', ['t3 bow']);
self.add('starlight', ['t3 staff', 't3 wand']);

self.add('enforced slasher', ['t4 spear']);
self.add('pharoah bow', ['t4 bow', 'pharaoh bow']);
self.add('crows nest', ['t4 staff', 't4 wand']);
// Special cases
self.add('copper netted net', ['copper net', 't1 net']);
self.add('reinforced net', ['iron net', 't2 net']);
self.add('platinet', ['plat net', 't4 net']);
self.add('bleached designer wode patch pants', ['wood pants', 'chop pants', 'chopping pants']);
self.add('dirty coal miner baggy soot pants', ['ore pants', 'mine pants', 'mining pants']);
self.add('steel', ['silver']);
self.add('trunculus', ['ring']);

// Monsters
self.add('crystal crabal', ['crystal crab']);
self.add('crystal cattle', ['crystal sheep', 'crystal lamb']);

// World 1
self.add('green mushroom', ['spore']);
self.add('frog', []);
self.add('bored bean', ['beans']);
self.add('slime', []);
self.add('baby boa', ['snake']);
self.add('carrotman', ['carrot']);
self.add('glublin', ['goblin']);
self.add('wode board', ['planks']);
self.add('gigafrog', ['big frog', 'bullfrog']);
self.add('poop', []);
self.add('rat', []);
self.add('walking stick', ['sticks']);
self.add('nutto', ['nuts']);
self.add('wood mushroom', ['wood shrooom', 'wroom', 'tree mushroom', 'tree shroom']);
// World 2
self.add('sandy pot', ['sand pots', 'pots']);
self.add('mimic', []);
self.add('crabcake', ['crab']);
self.add('mafioso', ['coconuts']);
self.add('sand castle', ['castles']);
self.add('pincermin', ['pincer']);
self.add('mashed potato', ['potato']);
self.add('tyson', ['steak']);
self.add('moonmoon', ['moon']);
self.add('sand giant', ['sg']);
self.add('snelbie', ['snail', 'snails']);
self.add('dig doug', []);
// World 3
self.add('sheepie', ['sheep']);
self.add('frost flake', ['snowflake', 'snow flake', 'flake']);
self.add('sir stache', ['mustache', 'stache']);
self.add('bloque', ['popsicle']);
self.add('mamooth', ['mammoth']);
self.add('snowman', []);
self.add('penguin', []);
self.add('thermister', ['therm', 'thermometer']);
self.add('quenchie', []);
self.add('cryosnake', ['ice snake']);
self.add('bop box', ['speaker', 'stereo', 'bop']);
self.add('neyeptune', ['neyep', 'eyeball']);
self.add('dedotated ram', ['ram']);
self.add('xylobone', ['skeleton', 'skelly']);
self.add('bloodbone', ['red skeleton', 'red skelly']);
// Bosses
self.add('baba yaga', ['house', 'baba', 'house monster']);
self.add('dr defecaus', ['big poop', 'poop boss']);
self.add('amarok', ['w1 boss']);
self.add('chaotic amarok', ['camarok']);
self.add('biggie hours', ['hourglass']);
self.add('king doot', ['doot']);
self.add('efaunt', ['w2 boss']);
self.add('chaotic efaunt', ['cefaunt']);

module.exports = self;
