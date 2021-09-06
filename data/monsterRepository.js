const jsonPath = '../resources/Enemies.json';
const enemies = require(jsonPath);
const alias = require('../util/alias');

function parseMonsterData() {
  return (
    Object.entries(enemies)
      // Filter out the world bosses
      .filter(([, value]) => !value.Attacks)
      // create a new object from the resulting array
      .reduce((acc, [key, monster]) => {
        return { ...acc, [key]: monster };
      }, {})
  );
}

function parseBossData() {
  // filter for world bosses
  return (
    Object.entries(enemies)
      // Filter for the world bosses
      .filter(([, value]) => value.Attacks)
      .reduce((obj, [key, boss]) => {
        return {
          ...obj,
          [key]: {
            Name: boss.Name,
            AFKtype: boss.AFKtype,
            Attacks: boss.Attacks,
            MonsterHPTotal: boss.health,
            Defence: boss.defence,
            ExpGiven: boss.exp,
            hasCard: boss.hasCard,
          },
        };
      }, {})
  );
}

function searchObjFor(object, name) {
  for (const key in object) {
    const monster = object[key];
    const displayName = monster.Name.toLowerCase();
    if (displayName === name) return monster;

    const found = alias.find(name, monster, displayName);
    if (found) return monster;
  }
}

class MonsterRepository {
  constructor() {
    this.monsters = parseMonsterData();
    this.bosses = parseBossData();
  }

  getMonster(name) {
    const boss = searchObjFor(this.bosses, name);
    if (boss) return boss;

    return searchObjFor(this.monsters, name);
  }

  reload() {
    delete require.cache[require.resolve(jsonPath)];
    try {
      this.items = require(jsonPath);
    } catch (error) {
      logger.error(`Error reloading monsters: ${error}`);
    }
  }
}

module.exports = new MonsterRepository();
