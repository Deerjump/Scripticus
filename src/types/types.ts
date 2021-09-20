import { Collection, Intents, Message, PartialTypes } from "discord.js";
import { Logger } from "utils/logger";

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
  execute: (...args: any[]) => void
}

export interface Scripticus {
  defaultPrefix: string;
  defaultCooldown: number;
  commands: Collection<string, Command>;
  guildSettings: Collection<string, GuildSettings>;
  db: DatabaseDriver;
  logger: Logger;
  updateGuildPrefix: (guildId: string, prefix: string) => void;
  stop: () => void;
  login: (token: string) => void;
}

export interface Command {
  readonly name: string
  readonly description: string
  readonly aliases?: string[]
  readonly usage?: string
  readonly options?: string
  readonly cooldown?: number
  readonly args?: boolean

  init?: (client: Scripticus) => void
  execute: (message: Message, args: string[]) => void
  stop?: () => void
}

export interface DatabaseDriver {
  connectToDatabase: () => Promise<void>;
  disconnect: () => Promise<void>;
  getAllGuildSettings: () => Promise<GuildSettingsDto[]>;
  getGuildSettings: (guildId: string) => Promise<GuildSettingsDto>;
  getSubscribers: () => Promise<Subscriber[]>;
  getSubscriber: (userId: string) => Promise<Subscriber | null>;
  updateGuildSettings: (guildId: string, settings: GuildSettings) => Promise<void>;
  updateSubscriber: (subscriber: Subscriber) => Promise<void>;
  updateSubscribers: (subscribers: Subscriber[]) => Promise<void>;
  removeSubscriber: (userId: string) => Promise<void>;
  removeSubscribers: (userIds: string[]) => Promise<void>;
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

export interface RecipeData {
  recipe: string[][];
  levelReqToCraft: number | string;
  expGiven: number | string;
  tab: number | string;
  recipeFrom: string[];
  no: number | string;
};

interface test2{
  string: string
}

export interface ItemData {
  displayName: string;
  sellPrice: string;
  description?: string[];
  typeGen: "dCard" | "aWeapon" | string;
  Class?: "All" | "Archer" | "Warrior" | "Mage" | "Beginner" | string;
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
  detRecipeTotals?: [string , number][];
  sources?: string[];
  [key: string]: any;
}

export interface Items {
  [itemCode: string]: ItemData;
};