import {
  Client,
  ClientEvents,
  Collection,
  Guild,
  Intents,
  PartialTypes,
} from 'discord.js';
import { ApplicationCommandTypes } from 'discord.js/typings/enums';
import { SlashCommand, UserCommand, MessageCommand } from '../commands/commandClasses';

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
  readonly cooldowns: Collection<string, Collection<string, number>>;
  readonly messageCommands: Collection<string, MessageCommand>;
  readonly guildSettings: Collection<string, GuildSettings>;
  readonly userCommands: Collection<string, UserCommand>;
  readonly commands: Collection<string, SlashCommand>;
  readonly defaultCooldown: number;
  readonly defaultPrefix: string;
  readonly joinMessage: string;
  readonly db: Database;
  registerGlobalCommands: () => Promise<void>;
  getPrefix: (guild: Guild) => string;
  updateGuildPrefix: (guildId: string, prefix: string) => Promise<string>;
  stop: () => void;
  login: (token: string) => Promise<string>;
}

export interface Database {
  connectToDatabase: () => Promise<void>;
  disconnect: () => Promise<void>;
  getAllGuildSettings: () => Promise<GuildSettingsDto[]>;
  getGuildSettings: (guildId: string) => Promise<GuildSettingsDto>;
  updateGuildSettings: (guildId: string, settings: GuildSettings) => Promise<GuildSettings>;
}

export interface ScripticusOptions {
  intents: Intents;
  partials: PartialTypes[];
  defaultPrefix: string;
  devGuildId?: string;
  defaultCooldown: number;
  startupDisplay: string;
  joinMessage: string;
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
}

export interface LavaFormulas {
  [key: string]: (...args: number[]) => number;
}

export type ModerationLevel = 'ADMIN' | 'MOD' | 'EVERYONE';

export type CommandType =
  | ('CHAT_INPUT' | ApplicationCommandTypes.CHAT_INPUT)
  | ('MESSAGE' | ApplicationCommandTypes.MESSAGE)
  | ('USER' | ApplicationCommandTypes.USER);

export type OptionallyAsync<T> = Promise<T> | T;

export type InteractionFilter<T> = (interaction: T) => boolean;