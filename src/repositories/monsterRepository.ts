import { Monsters } from '@customTypes/types';
import aliasRepository from './aliasRepository';
import monsters from '../resources/data/monsters';
import ignoredEnemies from '../resources/data/ignoreEnemies.json';

class MonsterRepository {
  monsters: Monsters;
  bosses: Monsters;

  constructor() {
    this.monsters = this.parseMonsterData();
    this.bosses = this.parseBossData();
  }

  private parseMonsterData(): Monsters {
    return (
      Object.entries(monsters)
        // Filter out the world bosses, placeholder enemies, and special non enemy things
        .filter(
          ([monsterId, monster]) =>
            monster.Attacks != null &&
            monster.Type !== 'FISH_TYPE' &&
            !(monster.MoveSPEED == 0 && monster.AFKtype === 'FIGHTING') &&
            !ignoredEnemies.includes(monsterId)
        )
        // create a new object from the resulting array
        .reduce((acc, [key, monster]) => {
          return { ...acc, [key]: monster };
        }, {})
    );
  }

  private parseBossData() {
    // filter for world bosses
    return (
      Object.entries(monsters)
        // Filter for the world bosses
        .filter(([, value]) => value.Attacks == null)
        .reduce((acc, [key, boss]) => {
          return { ...acc, [key]: boss };
        }, {})
    );
  }

  private searchObjFor(object: Monsters, name: string) {
    for (const monster of Object.values(object)) {
      const displayName = monster.Name.toLowerCase();
  
      if (displayName === name) return monster;
      if (aliasRepository.find(name, monster, displayName)) return monster;
    }
  }

  getMonster(name: string) {
    const boss = this.searchObjFor(this.bosses, name);
    if (boss != null) return boss;

    return this.searchObjFor(this.monsters, name);
  }
}

export = new MonsterRepository();
