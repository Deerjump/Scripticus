import { Client, ClientEvents, Collection, Intents, Message, PartialTypes } from 'discord.js';
import {
  SlashCommand,
  UserCommand,
  MessageCommand,
} from '../commands/commandClasses';

export interface GuildSettings {
  prefix?: string;
}

export interface GuildSettingsDto {
  guildId: string;
  settings: GuildSettings;
}

export interface EventHandler {
  event: keyof ClientEvents;
  once?: boolean;
  handle: (...args: any[]) => void;
}

export interface Scripticus extends Client {
  readonly defaultPrefix: string;
  readonly defaultCooldown: number;
  readonly commands: Collection<string, SlashCommand>;
  readonly userCommands: Collection<string, UserCommand>;
  readonly messageCommands: Collection<string, MessageCommand>;
  readonly guildSettings: Collection<string, GuildSettings>;
  readonly db: Database;
  readonly cooldowns: Collection<string, Collection<string, number>>;
  registerApplicationCommands: (devGuildId?: string) => Promise<void>;
  getPrefix: (message: Message) => string;
  updateGuildPrefix: (guildId: string, prefix: string) => Promise<void>;
  stop: () => void;
  login: (token: string) => Promise<string>;
}

export interface Database {
  connectToDatabase: () => Promise<void>;
  disconnect: () => Promise<void>;
  getAllGuildSettings: () => Promise<GuildSettingsDto[]>;
  getGuildSettings: (guildId: string) => Promise<GuildSettingsDto>;
  updateGuildSettings: (
    guildId: string,
    settings: GuildSettings
  ) => Promise<void>;
}

export interface ScripticusOptions {
  intents: Intents;
  partials: PartialTypes[];
  defaultPrefix: string;
  devGuildId?: string;
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

export interface TotalRecipe {
  [itemCode: string]: {
    name: string;
    amount: number;
    recipe?: TotalRecipe;
  };
};

export interface LavaFormulas {
  [key: string]: (...args: number[]) => number;
}

export type ModerationLevel = 'ADMINISTRATOR' | 'MODERATOR' | 'EVERYONE';