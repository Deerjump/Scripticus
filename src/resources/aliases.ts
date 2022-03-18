type AliasData = {
  [key: string]: string[];
};

const aliases: AliasData = {
  // Item aliases
  pouch: ['bag', 'sack'],
  'desert topaz': ['w1 gem', 'amarok gem', 'desert gem'],
  'glacier quartz': ['w2 gem', 'efaunt gem', 'ice gem'],
  'galaxial amethyst': ['w3 gem', 'chizoar gem', 'space gem'],
  gem: ['topaz', 'quartz', 'amethyst'],

  // Size aliases
  cramped: ['t1'],
  small: ['t2'],
  average: ['t3', 'gold'],
  sizable: ['t4', 'plat', 'platinum'],
  big: ['t5', 'dem'],

  // Bag type/skill name aliases
  mining: ['mine', 'ore', 'cavern'],
  choppin: ['wood', 'chop', 'logger'],
  food: [],
  mat: ['material', 'materials'],
  fish: ['fishing', 'angler'],
  bug: ['catching', 'bandito'],

  // Tool name aliases
  pick: ['pickaxe', 'pickolo', 'pik'],
  axe: ['chopper', 'hatchet', 'dicer', 'logger'],
  rod: ['fishing rod', 'fish rod'],
  net: [],
  traps: ['box, boxes'],
  skull: [],

  // Critter aliases
  'poison froge': ['shiny froge'],
  'mutant crabbo': ['shiny crabbo', 'shiny crab'],
  'crescent scorpie': ['shiny scorpie', 'shiny scorpion'],
  'nakeo moleo': ['shiny moleo', 'shiny rat', 'shiny mouse'],
  minervowl: ['shiny owl', 'shiny owlio'],
  'Eternal Lord of The Undying Ember': ['shiny penguin', 'shiny pingy'],
  purbunni: ['shiny bunny'],
  'jade scarab': ['shiny scarab', 'shiny dung beat', 'shiny dung beetle'],
  'diamond duck': ['shiny duck', 'shiny honker'],

  // Material name aliases
  copper: ['t1'],
  iron: ['t2', 'steel', 'silver'],
  gold: ['t3', 'golden', 'gilded'],
  plat: ['t4', 'platinum'],
  dem: ['t5', 'dementia'],
  void: ['t6', 'void imperium'],
  dreadlo: ['t7'],
  efaunts: ['efaunt'],

  // Equip name aliases
  helmet: ['helm', 'head', 'hat', 'beanie'],
  platebody: [
    'chest',
    'chestplate',
    'platbody',
    'bodyplate',
    'ribcage',
    'body',
    'shirt',
    'tee',
  ],
  platelegs: ['legs', 'pants', 'shins', 'hinds', 'hipilium', 'leggings'],
  boots: [
    'shoes',
    'paws',
    'feet',
    'trekkers',
    'heels',
    'broken ankles',
    'kicks',
  ],
  ring: ['band'],

  // weapons
  t1: ['wooden', 'gnarled', 'boxing'],
  wand: ['staff'],

  'wooden spear': ['spear'],
  'wooden bow': [],
  'gnarled wand': [],

  'the stingers': ['t2 gloves'],
  'steel axe': ['t2 spear'],
  'birch longbow': ['t2 bow'],
  quarterstaff: ['t2 staff', 't2 wand'],

  'bandage wraps': ['t3 gloves'],
  'royal bayonet': ['t3 spear'],
  'spiked menace': ['t3 bow'],
  starlight: ['t3 staff', 't3 wand'],

  'enforced slasher': ['t4 spear'],
  'pharoah bow': ['t4 bow', 'pharaoh bow'],
  'crows nest': ['t4 staff', 't4 wand'],

  'uninflated glove': ['t5 gloves', 'ice gloves'],
  'the ice breaker': ['t5 spear', 't5 axe'],
  'blizzard bow': ['t5 bow'],
  'spriggly storm': ['t5 staff', 't5 wand'],

  'eclectic ordeal': ['t6 gloves', 'electric gloves', 'lightning gloves'],
  deuscythe: ['t6 spear', 't6 axe', 'scythe', 'void axe', 'void spear'],
  'blackhole bow': ['t6 bow', 'void bow'],
  'grey gatsby': ['t6 staff', 't6 wand', 'void staff', 'void wand'],

  // Special cases
  'copper netted net': ['copper net', 't1 net'],
  'reinforced net': ['iron net', 't2 net'],
  platinet: ['plat net', 't4 net'],
  'bleached designer wode patch pants': [
    'wood pants',
    'chop pants',
    'chopping pants',
  ],
  'dirty coal miner baggy soot pants': [
    'ore pants',
    'mine pants',
    'mining pants',
  ],
  steel: ['silver'],
  trunculus: ['ring'],

  // Monsters
  'crystal crabal': ['crystal crab'],
  'crystal cattle': ['crystal sheep', 'crystal lamb'],

  // World 1
  'green mushroom': ['spore'],
  frog: [],
  'bored bean': ['beans'],
  slime: [],
  'baby boa': ['snake'],
  carrotman: ['carrot'],
  glublin: ['goblin'],
  'wode board': ['planks'],
  gigafrog: ['big frog', 'bullfrog'],
  poop: [],
  rat: [],
  'walking stick': ['sticks'],
  nutto: ['nuts'],
  'wood mushroom': ['wood shrooom', 'wroom', 'tree mushroom', 'tree shroom'],

  // World 2
  'sandy pot': ['sand pots', 'pots'],
  mimic: [],
  crabcake: ['crab'],
  mafioso: ['coconuts'],
  'sand castle': ['castles'],
  pincermin: ['pincer'],
  'mashed potato': ['potato'],
  tyson: ['steak'],
  moonmoon: ['moon'],
  'sand giant': ['sg'],
  snelbie: ['snail', 'snails'],
  'dig doug': [],

  // World 3
  sheepie: ['sheep'],
  'frost flake': ['snowflake', 'snow flake', 'flake'],
  'sir stache': ['mustache', 'stache'],
  bloque: ['popsicle'],
  mamooth: ['mammoth'],
  snowman: [],
  penguin: [],
  thermister: ['therm', 'thermometer'],
  quenchie: [],
  cryosnake: ['ice snake'],
  'bop box': ['speaker', 'stereo', 'bop'],
  neyeptune: ['neyep', 'eyeball'],
  'dedotated ram': ['ram'],
  xylobone: ['skeleton', 'skelly'],
  bloodbone: ['red skeleton', 'red skelly'],

  // Bosses
  'baba yaga': ['house', 'baba', 'house monster'],
  'dr defecaus': ['big poop', 'poop boss', 'dr d'],
  amarok: ['w1 boss'],
  'chaotic amarok': ['camarok'],
  'nightmare amarok': ['namarok'],
  'biggie hours': ['hourglass'],
  'king doot': ['doot', 'mummy boss'],
  efaunt: ['w2 boss'],
  'chaotic efaunt': ['cefaunt'],
  'nightmare efaunt': ['nefaunt'],
  chizoar: ['w3 boss'],
  'chaotic chizoar': ['cchizoar'],
  'nightmare chizoar': ['nchizoar'],
};

export = aliases;
