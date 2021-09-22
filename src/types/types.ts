import { Client, Collection, Intents, Message, PartialTypes } from 'discord.js';
import { Logger } from 'utils/logger';

export interface GuildSettings {
  prefix?: string;
}

export interface Subscriber {
  userId: string;
  hours: number;
}

export interface GuildSettingsDto {
  guildId: string;
  settings: GuildSettings;
}

export interface Event {
  name: string;
  once?: boolean;
  execute: (...args: any[]) => void;
}

export interface Scripticus extends Client {
  readonly defaultPrefix: string;
  readonly defaultCooldown: number;
  readonly commands: Collection<string, Command>;
  readonly guildSettings: Collection<string, GuildSettings>;
  readonly db: Database;
  readonly cooldowns: Collection<string, Collection<string, number>>;
  getPrefix: (message: Message) => string;
  updateGuildPrefix: (guildId: string, prefix: string) => void;
  stop: () => void;
  login: (token: string) => Promise<string>;
}

export interface Command {
  readonly name: string;
  readonly description: string;
  readonly aliases?: string[];
  readonly usage?: string;
  readonly options?: string;
  readonly cooldown?: number;
  readonly args?: boolean;

  execute: (message: Message, args: string[]) => void;
  init?: (client: Scripticus) => void;
  stop?: () => void;
}

export type CommandImport = {
  command: Command;
};

export interface Database {
  connectToDatabase: () => Promise<void>;
  disconnect: () => Promise<void>;
  getAllGuildSettings: () => Promise<GuildSettingsDto[]>;
  getGuildSettings: (guildId: string) => Promise<GuildSettingsDto>;
  getSubscribers: () => Promise<Subscriber[]>;
  getSubscriber: (userId: string) => Promise<Subscriber | null>;
  updateGuildSettings: (
    guildId: string,
    settings: GuildSettings
  ) => Promise<void>;
  updateSubscriber: (subscriber: Subscriber) => Promise<void>;
  updateSubscribers: (subscribers: Subscriber[]) => Promise<void>;
  removeSubscriber: (unsub: Subscriber) => Promise<void>;
  removeSubscribers: (unsubs: Subscriber[]) => Promise<void>;
}

export interface ScripticusOptions {
  intents: Intents;
  partials: PartialTypes[];
  defaultPrefix: string;
  defaultCooldown: number;
  startupDisplay: string;
}

export interface AutoUpdateOptions {
  port: number;
  branch: string;
  enabled: boolean;
}

export type Ingredient = [string, string];

export interface RecipeData {
  recipe: Ingredient[];
  levelReqToCraft: number | string;
  expGiven: number | string;
  tab: number | string;
  recipeFrom: string[];
  no: number | string;
}

export interface ItemData {
  displayName: string;
  sellPrice: string;
  description?: string[];
  typeGen: 'dCard' | 'aWeapon' | string;
  Class?: 'All' | 'Archer' | 'Warrior' | 'Mage' | 'Beginner' | string;
  Weapon_Power?: string;
  STR?: string;
  AGI?: string;
  WIS?: string;
  LUK?: string;
  Defence?: string;
  Upgrade_Slots_Left?: string;
  miscUp1?: string;
  miscUp2?: string;
  cardData?: string[];
  recipeData?: RecipeData;
  detRecipeTotals?: [string, number][];
  sources?: string[];
  [key: string]: any;
}

export interface Items {
  [itemCode: string]: ItemData;
}

type MonsterDrop = [string, string, string, string];

type BossAttacks = {
  [name: string]: string | number;
};

export interface MonsterData {
  Name: string;
  AFKtype: string;
  MonsterHPTotal: string;
  ExpGiven: string;
  Defence: string;
  Type?: string;
  RespawnTime?: string;
  Damages?: string;
  Drops?: MonsterDrop[];
  hasCard?: string;
  World?: string;
  Area?: string;
  Attacks?: BossAttacks;
  [key: string]: any;
}

export interface Monsters {
  [monsterCode: string]: MonsterData;
}

export type TotalRecipe = {
  [itemCode: string]: {
    name: string;
    amount: number;
    recipe?: TotalRecipe;
  };
};
