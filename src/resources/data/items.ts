import { Items } from '@customTypes';

const items: Items = {
  "Copper": {
    "displayName": "Copper Ore",
    "sellPrice": "3",
    "typeGen": "bOre",
    "ID": "0",
    "Type": "Ore",
    "Effect": "Ore",
    "sources": ["Mining", "Dewdrop Bronze Chest"],
    "detdrops": [["Dewdrop Bronze Chest", "0.6", "30"]],
    "uses": [
      ["EquipmentHats1", "15", "Crafting"],
      ["MaxCapBag1", "120", "Crafting"],
      ["EquipmentHats20", "150", "Crafting"],
      ["Peanut", "1", "Crafting"],
      ["EquipmentShoes16", "1500", "Crafting"],
      ["Simple Shippin", "Lots", "Post Office"],
      ["Learning to Swing", "5", "Quests"],
      ["Swift Steppin", "Lots", "Alchemy"],
      ["Lotto Skills", "Lots", "Alchemy"],
      ["Copper Corona", "Lots", "Alchemy"],
      ["Refining Redox Salts", "Lots", "Construction"],
      ["StampA3", "Lots", "Stamps"],
      ["StampB3", "Lots", "Stamps"],
      ["StampC16", "Lots", "Stamps"],
      ["StampC17", "Lots", "Stamps"]
    ],
    "description": [
      "Smelt down 2 Ores into 1 Bar",
      "at the Forge.",
      "Smelting will take 100 seconds per",
      "Bar using Forge Slot 1."
    ],
    "hascard": true,
    "notes": " "
  },
  "Iron": {
    "displayName": "Iron Ore",
    "sellPrice": "7",
    "typeGen": "bOre",
    "ID": "1",
    "Type": "Ore",
    "Effect": "Ore",
    "sources": ["Mining", "Dewdrop Silver Chest"],
    "detdrops": [["Dewdrop Silver Chest", "0.6", "50"]],
    "uses": [
      ["MaxCapBag2", "700", "Crafting"],
      ["EquipmentHats8", "50", "Crafting"],
      ["FoodMining1", "5", "Crafting"],
      ["EquipmentPants18", "200", "Crafting"],
      ["EquipmentShoes16", "1200", "Crafting"],
      ["Simple Shippin", "Lots", "Post Office"],
      ["Sticks and Stone Something Something Bones...", "1500", "Quests"],
      ["A Plot to be Perfect", "200", "Quests"],
      ["Hammer Hammer", "Lots", "Alchemy"],
      ["Level Up Gift", "Lots", "Alchemy"],
      ["StampA6", "Lots", "Stamps"]
    ],
    "description": [
      "Smelt down 4 Ores into 1 Bar",
      "at the Forge.",
      "Smelting will take 400 seconds per",
      "Bar using Forge Slot 1."
    ],
    "hascard": true,
    "notes": " "
  },
  "Gold": {
    "displayName": "Gold Ore",
    "sellPrice": "13",
    "typeGen": "bOre",
    "ID": "2",
    "Type": "Ore",
    "Effect": "Ore",
    "sources": ["Mining", "Dewdrop Golden Chest", "Sandstone Bronze Chest"],
    "detdrops": [
      ["Dewdrop Golden Chest", "0.1", "20"],
      ["Sandstone Bronze Chest", "0.6", "75"]
    ],
    "uses": [
      ["MaxCapBag3", "1400", "Crafting"],
      ["BulletB", "15", "Crafting"],
      ["Simple Shippin", "Lots", "Post Office"],
      ["The Scientific Method, According to a Rock", "200", "Quests"],
      ["Anvilnomics", "Lots", "Alchemy"],
      ["Name I Guess", "Lots", "Alchemy"],
      ["Gold Guzzle", "Lots", "Alchemy"],
      ["StampB14", "Lots", "Stamps"]
    ],
    "description": [
      "Smelt down 7 Ores into 1 Bar",
      "at the Forge.",
      "Smelting will take 1000 seconds per",
      "Bar using Forge Slot 1."
    ],
    "hascard": true,
    "notes": " "
  },
  "Plat": {
    "displayName": "Platinum Ore",
    "sellPrice": "20",
    "typeGen": "bOre",
    "ID": "3",
    "Type": "Ore",
    "Effect": "Ore",
    "sources": ["Mining", "Sandstone Silver Chest"],
    "detdrops": [["Sandstone Silver Chest", "0.6", "50"]],
    "uses": [
      ["MaxCapBag4", "6750", "Crafting"],
      ["CatchingNet5", "3000", "Crafting"],
      ["Stronk Tools", "Lots", "Alchemy"],
      ["Blue Flav", "Lots", "Alchemy"],
      ["StampB22", "Lots", "Stamps"]
    ],
    "description": [
      "Smelt down 16 Ores into 1 Bar",
      "at the Forge.",
      "Smelting will take 2200 seconds per",
      "Bar using Forge Slot 1."
    ],
    "hascard": true,
    "notes": " "
  },
  "Dementia": {
    "displayName": "Dementia Ore",
    "sellPrice": "35",
    "typeGen": "bOre",
    "ID": "4",
    "Type": "Ore",
    "Effect": "Ore",
    "sources": ["Mining", "Sandstone Golden Chest", "Chillsnap Silver Chest"],
    "detdrops": [
      ["Sandstone Golden Chest", "0.1", "80"],
      ["Chillsnap Silver Chest", "0.6", "100"]
    ],
    "uses": [
      ["MaxCapBag5", "17500", "Crafting"],
      ["Laaarrrryyyy", "Lots", "Alchemy"],
      ["Kraken Cosplayer", "Lots", "Building"],
      ["StampA20", "Lots", "Stamps"]
    ],
    "description": [
      "Smelt down 40 Ores into 1 Bar",
      "at the Forge.",
      "Smelting will take 3500 seconds per",
      "Bar using Forge Slot 1."
    ],
    "hascard": true,
    "notes": " "
  },
  "Void": {
    "displayName": "Void Ore",
    "sellPrice": "48",
    "typeGen": "bOre",
    "ID": "5",
    "Type": "Ore",
    "Effect": "Ore",
    "sources": ["Mining", "Chillsnap Golden Chest"],
    "detdrops": [["Chillsnap Golden Chest", "0.1", "120"]],
    "uses": [
      ["MaxCapBagMi6", "25000", "Crafting"],
      ["Void Vial", "Lots", "Alchemy"],
      ["Crescent Shrine", "Lots", "Building"]
    ],
    "description": [
      "Smelt down 100 Ores into 1 Bar",
      "at the Forge.",
      "Smelting will take 6000 seconds per",
      "Bar using Forge Slot 1."
    ],
    "hascard": true,
    "notes": " "
  },
  "Lustre": {
    "displayName": "Lustre Ore",
    "sellPrice": "60",
    "typeGen": "bOre",
    "ID": "6",
    "Type": "Ore",
    "Effect": "Ore",
    "sources": ["Mining"],
    "description": [
      "Smelt down 250 Ores into 1 Bar",
      "at the Forge.",
      "Smelting will take 12500 seconds per",
      "Bar using Forge Slot 1."
    ],
    "hascard": true,
    "notes": " "
  },
  "Starfire": {
    "displayName": "Starfire Ore",
    "sellPrice": "100",
    "typeGen": "bOre",
    "ID": "7",
    "Type": "Ore",
    "Effect": "Ore",
    "sources": ["Mining"],
    "description": [
      "Smelt down 500 Ores into 1 Bar",
      "at the Forge.",
      "Smelting will take 25000 seconds per",
      "Bar using Forge Slot 1."
    ],
    "notes": " "
  },
  "Dreadlo": {
    "displayName": "Dreadlo Ore",
    "sellPrice": "130",
    "typeGen": "bOre",
    "ID": "8",
    "Type": "Ore",
    "Effect": "Ore",
    "sources": ["Mining"],
    "description": [
      "Smelt down 1000 Ores into 1 Bar",
      "at the Forge.",
      "Smelting will take 100 seconds per",
      "Bar using Forge Slot 1."
    ],
    "notes": " "
  },
  "Godshard": {
    "displayName": "Godshard Ore",
    "sellPrice": "250",
    "typeGen": "bOre",
    "ID": "9",
    "Type": "Ore",
    "Effect": "Ore",
    "sources": ["Mining"],
    "description": [
      "Smelt down 5000 Ores into 1 Bar",
      "at the Forge.",
      "Smelting will take 100 seconds per",
      "Bar using Forge Slot 1."
    ],
    "notes": " "
  },
  "CopperBar": {
    "displayName": "Copper Bar",
    "sellPrice": "7",
    "typeGen": "bBar",
    "ID": "0",
    "Type": "Bar",
    "sources": ["Forging", "Dewdrop Bronze Chest", "Dewdrop Silver Chest"],
    "detdrops": [
      ["Dewdrop Bronze Chest", "0.2", "20"],
      ["Dewdrop Silver Chest", "0.35", "50"]
    ],
    "uses": [
      ["TestObj1", "10", "Crafting"],
      ["EquipmentPants1", "8", "Crafting"],
      ["EquipmentShoes9", "20", "Crafting"],
      ["EquipmentTools2", "13", "Crafting"],
      ["EquipmentToolsHatchet3", "13", "Crafting"],
      ["EquipmentPunching2", "20", "Crafting"],
      ["MaxCapBag8", "15", "Crafting"],
      ["EquipmentHats17", "30", "Crafting"],
      ["EquipmentShirts11", "45", "Crafting"],
      ["EquipmentPants2", "60", "Crafting"],
      ["EquipmentShoes1", "125", "Crafting"],
      ["EquipmentWands2", "100", "Crafting"],
      ["EquipmentRings2", "300", "Crafting"],
      ["FishingRod2", "200", "Crafting"],
      ["Simple Shippin", "Lots", "Post Office"],
      ["Learning to Smelt", "1", "Quests"],
      ["Hearty Diggy", "Lots", "Alchemy"],
      ["Mage Is Best", "Lots", "Alchemy"],
      ["Barium Mixture", "Lots", "Alchemy"],
      ["StampA4", "Lots", "Stamps"]
    ],
    "notes": " "
  },
  "IronBar": {
    "displayName": "Iron Bar",
    "sellPrice": "32",
    "typeGen": "bBar",
    "ID": "1",
    "Type": "Bar",
    "sources": ["Forging", "Dewdrop Golden Chest"],
    "detdrops": [["Dewdrop Golden Chest", "0.1", "15"]],
    "uses": [
      ["EquipmentHats20", "25", "Crafting"],
      ["EquipmentHats3", "25", "Crafting"],
      ["EquipmentHats16", "25", "Crafting"],
      ["EquipmentHats21", "200", "Crafting"],
      ["EquipmentTools3", "100", "Crafting"],
      ["EquipmentHats18", "125", "Crafting"],
      ["EquipmentShirts12", "150", "Crafting"],
      ["EquipmentPants3", "170", "Crafting"],
      ["EquipmentSmithingTabs2", "250", "Crafting"],
      ["EquipmentShoes15", "125", "Crafting"],
      ["EquipmentRings3", "600", "Crafting"],
      ["EquipmentShirts10", "500", "Crafting"],
      ["EquipmentShirts18", "400", "Crafting"],
      ["FishingRod3", "300", "Crafting"],
      ["Simple Shippin", "Lots", "Post Office"],
      ["The Scientific Method, According to a Rock", "100", "Quests"],
      ["Luncheon with the Inlaws", "100", "Quests"],
      ["Molto Loggo", "Lots", "Alchemy"],
      ["Barley Brew", "Lots", "Alchemy"],
      ["Boulder Roller", "Lots", "Building"],
      ["StampA13", "Lots", "Stamps"]
    ],
    "notes": " "
  },
  "GoldBar": {
    "displayName": "Gold Bar",
    "sellPrice": "115",
    "typeGen": "bBar",
    "ID": "2",
    "Type": "Bar",
    "sources": ["Forging", "Sandstone Bronze Chest", "Sandstone Silver Chest"],
    "detdrops": [
      ["Sandstone Bronze Chest", "0.2", "20"],
      ["Sandstone Silver Chest", "0.35", "60"]
    ],
    "uses": [
      ["PeanutG", "50", "Crafting"],
      ["EquipmentHats28", "250", "Crafting"],
      ["EquipmentShirts13", "350", "Crafting"],
      ["EquipmentPants4", "475", "Crafting"],
      ["EquipmentShoes3", "600", "Crafting"],
      ["EquipmentBows5", "250", "Crafting"],
      ["EquipmentTools5", "800", "Crafting"],
      ["TestObj13", "400", "Crafting"],
      ["Quest36", "80", "Crafting"],
      ["Simple Shippin", "Lots", "Post Office"],
      ["Sanic Tools", "Lots", "Alchemy"],
      ["Prowesessary", "Lots", "Alchemy"],
      ["Crystal Shrine", "Lots", "Building"],
      ["StampA24", "Lots", "Stamps"]
    ],
    "notes": " "
  },
  "PlatBar": {
    "displayName": "Platinum Bar",
    "sellPrice": "460",
    "typeGen": "bBar",
    "ID": "3",
    "Type": "Bar",
    "sources": [
      "Forging",
      "Sandstone Golden Chest",
      "Chillsnap Bronze Chest",
      "Chillsnap Bronze Chest"
    ],
    "detdrops": [
      ["Sandstone Golden Chest", "0.2", "20"],
      ["Chillsnap Bronze Chest", "0.35", "60"]
    ],
    "uses": [
      ["BadgeG2", "1000", "Crafting"],
      ["EquipmentHats19", "750", "Crafting"],
      ["EquipmentShirts14", "1000", "Crafting"],
      ["EquipmentPants5", "1250", "Crafting"],
      ["EquipmentTools6", "800", "Crafting"],
      ["FishingRod5", "800", "Crafting"],
      ["EquipmentSmithingTabs3", "2000", "Crafting"],
      ["All For Kill", "Lots", "Alchemy"],
      ["StampA21", "Lots", "Stamps"]
    ],
    "notes": " "
  },
  "DementiaBar": {
    "displayName": "Dementia Bar",
    "sellPrice": "1500",
    "typeGen": "bBar",
    "ID": "4",
    "Type": "Bar",
    "sources": ["Forging", "Chillsnap Golden Chest"],
    "detdrops": [["Chillsnap Golden Chest", "0.2", "80"]],
    "uses": [
      ["EquipmentHats53", "300", "Crafting"],
      ["EquipmentShirts15", "350", "Crafting"],
      ["EquipmentPants6", "400", "Crafting"],
      ["EquipmentShoes5", "500", "Crafting"],
      ["EquipmentTools7", "275", "Crafting"],
      ["FishingRod6", "300", "Crafting"],
      ["StampB31", "Lots", "Stamps"]
    ],
    "notes": " "
  },
  "VoidBar": {
    "displayName": "Void Bar",
    "sellPrice": "6200",
    "typeGen": "bBar",
    "ID": "5",
    "Type": "Bar",
    "sources": ["Forging"],
    "uses": [
      ["EquipmentHats54", "1000", "Crafting"],
      ["EquipmentShirts27", "500", "Crafting"],
      ["EquipmentPants21", "650", "Crafting"],
      ["EquipmentShoes22", "725", "Crafting"],
      ["EquipmentTools11", "400", "Crafting"],
      ["Refining Red Salt", "Lots", "Construction"]
    ],
    "notes": " "
  },
  "LustreBar": {
    "displayName": "Lustre Bar",
    "sellPrice": "12500",
    "typeGen": "bBar",
    "ID": "6",
    "Type": "Bar",
    "sources": ["Forging"],
    "notes": " "
  },
  "StarfireBar": {
    "displayName": "Starfire Bar",
    "sellPrice": "1",
    "typeGen": "bBar",
    "ID": "7",
    "Type": "Bar",
    "sources": ["Forging"],
    "notes": " "
  },
  "DreadloBar": {
    "displayName": "Dreadlo Bar",
    "sellPrice": "1",
    "typeGen": "bBar",
    "ID": "8",
    "Type": "Bar",
    "sources": ["Forging"],
    "notes": " "
  },
  "GodshardBar": {
    "displayName": "Godshard Bar",
    "sellPrice": "1",
    "typeGen": "bBar",
    "ID": "9",
    "Type": "Bar",
    "sources": ["Forging"],
    "notes": " "
  },
  "OilBarrel1": {
    "displayName": "Crude Oil",
    "sellPrice": "8",
    "typeGen": "cOil",
    "ID": "0",
    "Type": "Barrel",
    "Effect": "SpeedForge",
    "Trigger": "1",
    "sources": ["Blunder Hills Vendor", "Learning to Smelt"],
    "uses": [
      ["EquipmentHats8", "60", "Crafting"],
      ["OilBarrel5", "1", "Crafting"],
      ["Luncheon with the Inlaws", "200", "Quests"]
    ],
    "description": [
      "Increases Forging Speed by 15%",
      "for the Forge Slot it's in.",
      "75% chance to be consumed when",
      "a bar is forged."
    ],
    "shopData": [
      {
        "vendor": "Blunder Hills",
        "quantity": "1000",
        "no": 8
      }
    ],
    "notes": " "
  },
  "OilBarrel2": {
    "displayName": "Toxic Sludge",
    "sellPrice": "20",
    "typeGen": "cOil",
    "ID": "0",
    "Type": "Barrel",
    "Effect": "DoubleBarsForge",
    "Trigger": "1",
    "sources": ["Slime"],
    "detdrops": [["Slime", "0.0003", "10"]],
    "description": [
      "Increases Extra Bar chance",
      "by 20% for the Slot it's in.",
      "60% chance to be consumed when",
      "a bar is forged."
    ],
    "notes": " "
  },
  "OilBarrel3": {
    "displayName": "Radioactive Waste",
    "sellPrice": "50",
    "typeGen": "cOil",
    "ID": "0",
    "Type": "Barrel",
    "Effect": "SpeedForge",
    "Trigger": "1",
    "description": [
      "Increases chance to Not Use Up",
      "Ores by 3% for the Slot it's in.",
      "60% chance to be consumed when",
      "a bar is forged."
    ],
    "notes": " "
  },
  "OilBarrel4": {
    "displayName": "Glumlee's Special Tutorial Oil",
    "sellPrice": "350",
    "typeGen": "cOil",
    "ID": "0",
    "Type": "Barrel",
    "Effect": "SpeedForge",
    "Trigger": "1",
    "sources": ["Learning to Swing"],
    "description": [
      "Increases Forging Speed by 999%",
      "for the Forge Slot it's in.",
      "200% chance to be consumed when",
      "a bar is forged."
    ],
    "notes": " "
  },
  "OilBarrel5": {
    "displayName": "Eco Friendly Oil",
    "sellPrice": "12",
    "typeGen": "cOil",
    "ID": "0",
    "Type": "Barrel",
    "Effect": "SpeedForge",
    "Trigger": "1",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "description": [
      "Increases Forging Speed by 10%",
      "for the Forge Slot it's in.",
      "30% chance to be consumed when",
      "a bar is forged."
    ],
    "recipeData": {
      "recipe": [
        ["OilBarrel1", "1"],
        ["Leaf1", "1"]
      ],
      "levelReqToCraft": "4",
      "expGiven": "3",
      "no": 47,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "OilBarrel1", "1"],
      [0, "Leaf1", "1"]
    ],
    "detRecipeTotals": [
      ["OilBarrel1", 1],
      ["Leaf1", 1]
    ],
    "notes": " "
  },
  "OakTree": {
    "displayName": "Oak Logs",
    "sellPrice": "2",
    "typeGen": "bLog",
    "ID": "0",
    "Type": "Log",
    "sources": ["Choppin", "Dewdrop Bronze Chest"],
    "detdrops": [["Dewdrop Bronze Chest", "0.6", "40"]],
    "uses": [
      ["EquipmentWands1", "30", "Crafting"],
      ["EquipmentShirts1", "15", "Crafting"],
      ["EquipmentToolsHatchet3", "30", "Crafting"],
      ["MaxCapBag7", "150", "Crafting"],
      ["EquipmentHats15", "45", "Crafting"],
      ["EquipmentPunching2", "75", "Crafting"],
      ["MaxCapBag8", "60", "Crafting"],
      ["EquipmentHats16", "200", "Crafting"],
      ["EquipmentShirts2", "50", "Crafting"],
      ["Simple Shippin", "Lots", "Post Office"],
      ["A noob's first swing", "10", "Quests"],
      ["A noob's 2nd first swing", "100", "Quests"],
      ["It's Just a Plank, Bro!", "1000", "Quests"],
      ["Roid Ragin", "Lots", "Alchemy"],
      ["Lotto Skills", "Lots", "Alchemy"],
      ["Sippy Splinters", "Lots", "Alchemy"],
      ["Chest Space", "Lots", "Building"],
      ["StampA2", "Lots", "Stamps"],
      ["StampB1", "Lots", "Stamps"]
    ],
    "hascard": true,
    "notes": " "
  },
  "BirchTree": {
    "displayName": "Bleach Logs",
    "sellPrice": "3",
    "typeGen": "bLog",
    "ID": "0",
    "Type": "Log",
    "sources": ["Choppin", "Dewdrop Silver Chest"],
    "detdrops": [["Dewdrop Silver Chest", "0.1", "25"]],
    "uses": [
      ["EquipmentPants2", "150", "Crafting"],
      ["EquipmentBows3", "250", "Crafting"],
      ["MaxCapBag9", "800", "Crafting"],
      ["EquipmentHats8", "100", "Crafting"],
      ["EquipmentShirts20", "325", "Crafting"],
      ["EquipmentPants15", "700", "Crafting"],
      ["Peanut", "1", "Crafting"],
      ["EquipmentShirts25", "100", "Crafting"],
      ["Simple Shippin", "Lots", "Post Office"],
      ["King of the Cavern", "1200", "Quests"],
      ["Brunchin' with the Blobs", "1500", "Quests"],
      ["Investigator by Day, Prankster by Night", "3", "Quests"],
      ["Big Meaty Claws", "Lots", "Alchemy"],
      ["Archer Or Bust", "Lots", "Alchemy"],
      ["Le Brain Tools", "Lots", "Alchemy"],
      ["Frozone Malone", "Lots", "Building"],
      ["StampA9", "Lots", "Stamps"]
    ],
    "hascard": true,
    "notes": " "
  },
  "JungleTree": {
    "displayName": "Jungle Logs",
    "sellPrice": "6",
    "typeGen": "bLog",
    "ID": "0",
    "Type": "Log",
    "sources": ["Choppin", "Dewdrop Silver Chest"],
    "detdrops": [["Dewdrop Silver Chest", "0.4", "15"]],
    "uses": [
      ["EquipmentToolsHatchet1", "250", "Crafting"],
      ["EquipmentShirts12", "600", "Crafting"],
      ["FoodChoppin1", "6", "Crafting"],
      ["EquipmentShoes7", "1000", "Crafting"],
      ["CatchingNet2", "500", "Crafting"],
      ["EquipmentShoes17", "1600", "Crafting"],
      ["Simple Shippin", "Lots", "Post Office"],
      ["Hearty Diggy", "Lots", "Alchemy"],
      ["Bappity Boopity", "Lots", "Alchemy"],
      ["Level Up Gift", "Lots", "Alchemy"],
      ["Jungle Juice", "Lots", "Alchemy"],
      ["Pantheon Shrine", "Lots", "Building"],
      ["StampB4", "Lots", "Stamps"]
    ],
    "hascard": true,
    "notes": " "
  },
  "ForestTree": {
    "displayName": "Forest Fibres",
    "sellPrice": "10",
    "typeGen": "bLog",
    "ID": "0",
    "Type": "Log",
    "sources": ["Choppin"],
    "uses": [
      ["EquipmentSmithingTabs2", "400", "Crafting"],
      ["EquipmentHats22", "2500", "Crafting"],
      ["CatchingNet3", "800", "Crafting"],
      ["TestObj3", "1250", "Crafting"],
      ["MaxCapBagT3", "1800", "Crafting"],
      ["Bullet", "10", "Crafting"],
      ["EquipmentShoes17", "1000", "Crafting"],
      ["Exotic Pranks... I mean Logs!", "1", "Quests"],
      ["Dressing like a Dork", "1000", "Quests"],
      ["Literally Physics", "1000", "Quests"],
      ["Anvilnomics", "Lots", "Alchemy"],
      ["Hocus Choppus", "Lots", "Alchemy"],
      ["Refining Explosive Salts", "Lots", "Construction"],
      ["StampB13", "Lots", "Stamps"]
    ],
    "hascard": true,
    "notes": " "
  },
  "ToiletTree": {
    "displayName": "Potty Rolls",
    "sellPrice": "15",
    "typeGen": "bLog",
    "ID": "0",
    "Type": "Log",
    "sources": ["Choppin", "Dewdrop Golden Chest"],
    "detdrops": [["Dewdrop Golden Chest", "0.5", "50"]],
    "uses": [
      ["EquipmentPunching3", "2000", "Crafting"],
      ["Simple Shippin", "Lots", "Post Office"],
      ["Wicked Party Cleanup", "10000", "Quests"],
      ["Cookin Roadkill", "Lots", "Alchemy"],
      ["Prowesessary", "Lots", "Alchemy"],
      ["Tea With Pea", "Lots", "Alchemy"],
      ["StampB24", "Lots", "Stamps"]
    ],
    "hascard": true,
    "notes": " "
  },
  "PalmTree": {
    "displayName": "Tropilogs",
    "sellPrice": "20",
    "typeGen": "bLog",
    "ID": "0",
    "Type": "Log",
    "sources": ["Choppin", "Sandstone Silver Chest"],
    "detdrops": [["Sandstone Silver Chest", "0.5", "100"]],
    "uses": [
      ["EquipmentShoes4", "7000", "Crafting"],
      ["EquipmentToolsHatchet4", "6500", "Crafting"],
      ["MaxCapBagT4", "6750", "Crafting"],
      ["EquipmentHats41", "2000", "Crafting"],
      ["Simple Shippin", "Lots", "Post Office"],
      ["Shaquracy", "Lots", "Alchemy"]
    ],
    "hascard": true,
    "notes": " "
  },
  "StumpTree": {
    "displayName": "Veiny Logs",
    "sellPrice": "25",
    "typeGen": "bLog",
    "ID": "0",
    "Type": "Log",
    "sources": ["Choppin", "Dewdrop Golden Chest"],
    "detdrops": [["Dewdrop Golden Chest", "0.5", "50"]],
    "uses": [
      ["BadgeG2", "2000", "Crafting"],
      ["Simple Shippin", "Lots", "Post Office"],
      ["All For Kill", "Lots", "Alchemy"],
      ["Candy Pile", "Lots", "Building"]
    ],
    "hascard": true,
    "notes": " "
  },
  "SaharanFoal": {
    "displayName": "Tundra Logs",
    "sellPrice": "30",
    "typeGen": "bLog",
    "ID": "0",
    "Type": "Log",
    "sources": ["Choppin", "Chillsnap Silver Chest"],
    "detdrops": [["Chillsnap Silver Chest", "0.5", "100"]],
    "uses": [
      ["EquipmentWands3", "10000", "Crafting"],
      ["EquipmentToolsHatchet5", "15000", "Crafting"],
      ["MaxCapBagT5", "20000", "Crafting"],
      ["Call Me Ash", "Lots", "Alchemy"],
      ["The Spanish Sahara", "Lots", "Alchemy"],
      ["StampC20", "Lots", "Stamps"]
    ],
    "hascard": true,
    "notes": " "
  },
  "Tree7": {
    "displayName": "Wispy Lumber",
    "sellPrice": "40",
    "typeGen": "bLog",
    "ID": "0",
    "Type": "Log",
    "sources": ["Choppin"],
    "uses": [
      ["EquipmentPants21", "75000", "Crafting"],
      ["EquipmentToolsHatchet7", "50000", "Crafting"],
      ["MaxCapBagT6", "30000", "Crafting"],
      ["Ignore Overdues", "Lots", "Alchemy"],
      ["Refining Red Salt", "Lots", "Construction"],
      ["Undead Shrine", "Lots", "Building"]
    ],
    "hascard": true,
    "notes": " "
  },
  "AlienTree": {
    "displayName": "Alien Hive Chunk",
    "sellPrice": "5000",
    "typeGen": "bLog",
    "ID": "0",
    "Type": "Log",
    "sources": ["Choppin"],
    "notes": " "
  },
  "Leaf1": {
    "displayName": "Grass Leaf",
    "sellPrice": "4",
    "typeGen": "bLeaf",
    "ID": "0",
    "Type": "Leaf",
    "sources": ["Choppin", "DropTable5"],
    "detdrops": [
      ["Crystal Carrot", "0.25", "5.0"],
      ["Choppin Oak Tree", "0.004", "5.0"],
      ["Choppin Birch Tree", "0.00425", "5.0"],
      ["Choppin Jungle Tree", "0.0045", "5.0"],
      ["Choppin Forest Tree", "0.00475", "5.0"],
      ["Choppin Toilet Tree", "0.0053", "5.0"],
      ["Choppin Stump Tree", "0.0051", "5.0"]
    ],
    "uses": [
      ["EquipmentShoes9", "20", "Crafting"],
      ["OilBarrel5", "1", "Crafting"],
      ["EquipmentShoes20", "125", "Crafting"],
      ["Brunchin' with the Blobs", "50", "Quests"],
      ["Leaf Him Alone!", "200", "Quests"],
      ["StampA10", "Lots", "Stamps"]
    ],
    "notes": " "
  },
  "Leaf2": {
    "displayName": "Twisty Leaf",
    "sellPrice": "50",
    "typeGen": "bLeaf",
    "ID": "0",
    "Type": "Leaf",
    "sources": ["Choppin", "DropTable11"],
    "detdrops": [["Choppin Palm Tree", "0.0075", "8.0"]],
    "uses": [
      ["Leaf Him Alone!", "50", "Quests"],
      ["StampC18", "Lots", "Stamps"]
    ],
    "notes": " "
  },
  "Leaf3": {
    "displayName": "Arctic Leaf",
    "sellPrice": "100",
    "typeGen": "bLeaf",
    "ID": "0",
    "Type": "Leaf",
    "sources": ["Choppin", "DropTable17"],
    "detdrops": [
      ["Crystal Cattle", "0.3", "3.0"],
      ["Choppin Saharan Foal", "0.00445", "3.0"],
      ["Choppin Wispy Tree", "0.00445", "3.0"]
    ],
    "uses": [["StampC15", "Lots", "Stamps"]],
    "notes": " "
  },
  "FillerMaterial": {
    "displayName": "Not Yet",
    "sellPrice": "4",
    "typeGen": "dFish",
    "ID": "0",
    "Type": "Fish",
    "Effect": "_",
    "sources": ["Fishing"],
    "uses": [
      ["EquipmentSmithingTabs4", "6", "Crafting"],
      ["Junk Pile", "Lots", "Building"],
      ["Coming Soon", "Lots", "Building"],
      ["Poisonic Elder", "Lots", "Building"]
    ],
    "description": [
      "Sorry gamer, but this material isn't in the game yet! You'll have to wait for the next update to get it."
    ],
    "notes": " "
  },
  "Fish1": {
    "displayName": "Goldfish",
    "sellPrice": "4",
    "typeGen": "dFish",
    "ID": "0",
    "Type": "Fish",
    "Effect": "_",
    "sources": ["Fishing", "Sandstone Bronze Chest"],
    "detdrops": [["Sandstone Bronze Chest", "0.6", "50"]],
    "uses": [
      ["EquipmentPants22", "500", "Crafting"],
      ["FishingRod2", "180", "Crafting"],
      ["MaxCapBagFi1", "180", "Crafting"],
      ["EquipmentPants4", "500", "Crafting"],
      ["EquipmentRings11", "10000", "Crafting"],
      ["EquipmentShoes18", "1250", "Crafting"],
      ["Simple Shippin", "Lots", "Post Office"],
      ["Don't Step to Me, Bro!", "400", "Quests"],
      ["A Normal Quest.", "1", "Quests"],
      ["Mopey Dick", "20", "Quests"],
      ["Lil Big Damage", "Lots", "Alchemy"],
      ["Droppin Loads", "Lots", "Alchemy"],
      ["Seawater", "Lots", "Alchemy"],
      ["Refining Spontaneity Salts", "Lots", "Construction"],
      ["StampA16", "Lots", "Stamps"],
      ["StampB19", "Lots", "Stamps"]
    ],
    "description": [
      "It's not a snack, and it certainly doesn't smile back... for copyright reasons!"
    ],
    "hascard": true,
    "notes": " "
  },
  "Fish2": {
    "displayName": "Hermit Can",
    "sellPrice": "11",
    "typeGen": "dFish",
    "ID": "0",
    "Type": "Fish",
    "Effect": "_",
    "sources": ["Fishing", "Sandstone Bronze Chest"],
    "detdrops": [["Sandstone Bronze Chest", "0.4", "50"]],
    "uses": [
      ["FishingRod3", "650", "Crafting"],
      ["MaxCapBagFi2", "425", "Crafting"],
      ["FishingRod4", "2500", "Crafting"],
      ["MaxCapBagFi3", "1500", "Crafting"],
      ["Quest13", "250", "Crafting"],
      ["EquipmentShoes18", "1000", "Crafting"],
      ["FoodFish1", "5", "Crafting"],
      ["Simple Shippin", "Lots", "Post Office"],
      ["Don't Step to Me, Bro!", "100", "Quests"],
      ["Sploosh Sploosh", "Lots", "Alchemy"],
      ["Noodubble", "Lots", "Alchemy"],
      ["Slug Slurp", "Lots", "Alchemy"],
      ["StampB23", "Lots", "Stamps"]
    ],
    "description": [
      "The branding on the soda can must have gotten washed off by some kind of liquidy, wavey substance. Oh, right."
    ],
    "hascard": true,
    "notes": " "
  },
  "Fish3": {
    "displayName": "Jellyfish",
    "sellPrice": "14",
    "typeGen": "dFish",
    "ID": "0",
    "Type": "Fish",
    "Effect": "_",
    "sources": ["Fishing", "Sandstone Silver Chest"],
    "detdrops": [["Sandstone Silver Chest", "0.4", "100"]],
    "uses": [
      ["EquipmentHats19", "2250", "Crafting"],
      ["EquipmentShoes4", "3000", "Crafting"],
      ["Simple Shippin", "Lots", "Post Office"],
      ["Don't Step to Me, Bro!", "25", "Quests"],
      ["Genie Dieting", "150", "Quests"],
      ["Undeveloped Costs", "Lots", "Alchemy"],
      ["StampA27", "Lots", "Stamps"]
    ],
    "description": [
      "Don't let it sting you, unless you're into getting tinkled on by random beach-goers."
    ],
    "hascard": true,
    "notes": " "
  },
  "Fish4": {
    "displayName": "Bloach",
    "sellPrice": "18",
    "typeGen": "dFish",
    "ID": "0",
    "Type": "Fish",
    "Effect": "_",
    "sources": ["Fishing", "Sandstone Golden Chest"],
    "detdrops": [["Sandstone Golden Chest", "0.2", "150"]],
    "uses": [
      ["EquipmentBows6", "1400", "Crafting"],
      ["FishingRod5", "2000", "Crafting"],
      ["MaxCapBagFi4", "2500", "Crafting"],
      ["EquipmentSmithingTabs3", "2000", "Crafting"],
      ["BadgeD2", "4000", "Crafting"],
      ["MaxCapBagFi6", "50000", "Crafting"],
      ["Simple Shippin", "Lots", "Post Office"],
      ["Shaquracy", "Lots", "Alchemy"],
      ["Brewstachio", "Lots", "Alchemy"],
      ["Refining Red Salt", "Lots", "Construction"],
      ["StampB16", "Lots", "Stamps"]
    ],
    "description": [
      "The result of putting Blood and Leech into a bad pokemon generator."
    ],
    "hascard": true,
    "notes": " "
  },
  "Bug1": {
    "displayName": "Fly",
    "sellPrice": "3",
    "typeGen": "dBugs",
    "ID": "0",
    "Type": "Bug",
    "Effect": "_",
    "sources": ["Catching", "Sandstone Bronze Chest"],
    "detdrops": [["Sandstone Bronze Chest", "0.6", "65"]],
    "uses": [
      ["EquipmentPants23", "500", "Crafting"],
      ["CatchingNet2", "400", "Crafting"],
      ["MaxCapBagB1", "180", "Crafting"],
      ["EquipmentHats28", "2000", "Crafting"],
      ["Bullet", "10", "Crafting"],
      ["EquipmentShoes19", "2000", "Crafting"],
      ["Simple Shippin", "Lots", "Post Office"],
      ["Wyoming Blood", "Lots", "Alchemy"],
      ["Droppin Loads", "Lots", "Alchemy"],
      ["Fly In My Drink", "Lots", "Alchemy"],
      ["Refining Spontaneity Salts", "Lots", "Construction"],
      ["StampB17", "Lots", "Stamps"]
    ],
    "description": [
      "I don't know whyyyy she swallowed a flyyy, perhaps she'll cry from being perpetually made fun of in the form of a nursey rhyme just because she made one bad decision... er, die!"
    ],
    "hascard": true,
    "notes": " "
  },
  "Bug2": {
    "displayName": "Butterfly",
    "sellPrice": "9",
    "typeGen": "dBugs",
    "ID": "0",
    "Type": "Bug",
    "Effect": "_",
    "sources": ["Catching"],
    "uses": [
      ["CatchingNet3", "850", "Crafting"],
      ["MaxCapBagB2", "425", "Crafting"],
      ["CatchingNet4", "2500", "Crafting"],
      ["MaxCapBagB3", "1600", "Crafting"],
      ["EquipmentShoes19", "1250", "Crafting"],
      ["FoodCatch1", "5", "Crafting"],
      ["Simple Shippin", "Lots", "Post Office"],
      ["'Accidental' Exploit", "1500", "Quests"],
      ["Stamp Tramp", "Lots", "Alchemy"],
      ["StampB21", "Lots", "Stamps"]
    ],
    "description": [
      "Butter Fly? Get it??? Sorry... I promise I wont make this kind of joke again"
    ],
    "hascard": true,
    "notes": " "
  },
  "Bug3": {
    "displayName": "Sentient Cereal",
    "sellPrice": "15",
    "typeGen": "dBugs",
    "ID": "0",
    "Type": "Bug",
    "Effect": "_",
    "sources": ["Catching", "Sandstone Silver Chest"],
    "detdrops": [["Sandstone Silver Chest", "0.4", "125"]],
    "uses": [
      ["EquipmentPants5", "5000", "Crafting"],
      ["Simple Shippin", "Lots", "Post Office"],
      ["Bug]", "Lots", "Alchemy"],
      ["Le Brain Tools", "Lots", "Alchemy"],
      ["Refining Red Salt", "Lots", "Construction"],
      ["StampA17", "Lots", "Stamps"]
    ],
    "description": [
      "Honestly, I was shocked too at first when I learned that cereal in real life was harvested from Cereal Bugs. Seriously, look it up! Most cereal before 1960 were made from harvested Cereal Bug Nests!"
    ],
    "hascard": true,
    "notes": " "
  },
  "Bug4": {
    "displayName": "Fruitfly",
    "sellPrice": "20",
    "typeGen": "dBugs",
    "ID": "0",
    "Type": "Bug",
    "Effect": "_",
    "sources": ["Catching", "Sandstone Golden Chest"],
    "detdrops": [["Sandstone Golden Chest", "0.2", "169"]],
    "uses": [
      ["EquipmentWands6", "4000", "Crafting"],
      ["CatchingNet5", "7000", "Crafting"],
      ["MaxCapBagB4", "6750", "Crafting"],
      ["EquipmentSmithingTabs3", "2000", "Crafting"],
      ["BadgeD2", "8000", "Crafting"],
      ["Simple Shippin", "Lots", "Post Office"],
      ["Fmj", "Lots", "Alchemy"],
      ["StampA26", "Lots", "Stamps"]
    ],
    "description": ["Hahaha I had my fingers crossed!"],
    "hascard": true,
    "notes": " "
  },
  "Bug5": {
    "displayName": "Mosquisnow",
    "sellPrice": "32",
    "typeGen": "dBugs",
    "ID": "0",
    "Type": "Bug",
    "Effect": "_",
    "sources": ["Catching", "Chillsnap Silver Chest"],
    "detdrops": [["Chillsnap Silver Chest", "0.4", "150"]],
    "uses": [
      ["CatchingNet6", "15000", "Crafting"],
      ["MaxCapBagB5", "10000", "Crafting"],
      ["Cheap Shot", "Lots", "Alchemy"],
      ["Gospel Leader", "Lots", "Alchemy"],
      ["Ew Gross Gross", "Lots", "Alchemy"],
      ["Party Starter", "Lots", "Building"],
      ["StampB32", "Lots", "Stamps"]
    ],
    "description": [
      "I'm so tired of all these blood sucking vermin in IdleOn... and these mosquisnow bugs are annoying too!"
    ],
    "hascard": true,
    "notes": " "
  },
  "Bug6": {
    "displayName": "Flycicle",
    "sellPrice": "40",
    "typeGen": "dBugs",
    "ID": "0",
    "Type": "Bug",
    "Effect": "_",
    "sources": ["Catching", "Chillsnap Golden Chest"],
    "detdrops": [["Chillsnap Golden Chest", "0.2", "150"]],
    "uses": [
      ["EquipmentShoes22", "60000", "Crafting"],
      ["CatchingNet7", "50000", "Crafting"],
      ["MaxCapBagB6", "35000", "Crafting"],
      ["Fast Boi Talent", "Lots", "Alchemy"],
      ["Refining Red Salt", "Lots", "Construction"],
      ["Summereading Shrine", "Lots", "Building"]
    ],
    "description": ["Ok these bugs are really not making any sense anymore."],
    "hascard": true,
    "notes": " "
  },
  "Critter1": {
    "displayName": "Froge",
    "sellPrice": "3",
    "typeGen": "dCritters",
    "ID": "0",
    "Type": "Critter",
    "Effect": "_",
    "sources": ["Trapping", "Chillsnap Bronze Chest"],
    "detdrops": [["Chillsnap Bronze Chest", "0.6", "65"]],
    "uses": [
      ["MaxCapBagTr1", "200", "Crafting"],
      ["EquipmentHats53", "5000", "Crafting"],
      ["Frogecoin to the MOON!", "100", "Quests"],
      ["Brittley Spears", "Lots", "Alchemy"],
      ["Talent Book Library", "Lots", "Building"],
      ["Fireball Lobber", "Lots", "Building"],
      ["Salt Lick Upgrades", "Lots", "Salt Lick"]
    ],
    "description": [
      "The living embodiment of the classic cryptocurrency 'Frogecoin'. Very ribbit, much green, wow!!"
    ],
    "notes": " "
  },
  "Critter1A": {
    "displayName": "Poison Froge",
    "sellPrice": "100",
    "typeGen": "dCritters",
    "ID": "0",
    "Type": "Critter",
    "Effect": "_",
    "sources": ["Trapping"],
    "uses": [
      ["TrapBoxSet2", "1", "Crafting"],
      ["EquipmentShoes5", "3", "Crafting"],
      ["Frogecoin to the MOON!", "1", "Quests"],
      ["Poison Tincture", "Lots", "Alchemy"]
    ],
    "description": [
      "Ew, it's the living embodiment of that scam alt-coin crypto ripoff, 'Frogecoin Cash'"
    ],
    "notes": " "
  },
  "Critter2": {
    "displayName": "Crabbo",
    "sellPrice": "5",
    "typeGen": "dCritters",
    "ID": "0",
    "Type": "Critter",
    "Effect": "_",
    "sources": ["Trapping", "Chillsnap Silver Chest"],
    "detdrops": [["Chillsnap Silver Chest", "0.4", "350"]],
    "uses": [
      ["MaxCapBagTr3", "1000", "Crafting"],
      ["FoodTrapping1", "100", "Crafting"],
      ["Yet another Cartoon Reference", "250", "Quests"],
      ["Call Me Pope", "Lots", "Alchemy"],
      ["Crab Juice", "Lots", "Alchemy"],
      ["Salt Lick", "Lots", "Building"],
      ["StampB25", "Lots", "Stamps"]
    ],
    "description": ["Argg, yer spendin' all me money!"],
    "notes": " "
  },
  "Critter2A": {
    "displayName": "Mutant Crabbo",
    "sellPrice": "2000",
    "typeGen": "dCritters",
    "ID": "0",
    "Type": "Critter",
    "Effect": "_",
    "sources": ["Trapping"],
    "uses": [
      ["TrapBoxSet3", "2", "Crafting"],
      ["Yet another Cartoon Reference", "1", "Quests"]
    ],
    "description": [
      "Argghgg, yershpend inall memuh knee!!... Yea, mutants can't speak very well, probably on account of the radiation poisioning and all that."
    ],
    "notes": " "
  },
  "Critter3": {
    "displayName": "Scorpie",
    "sellPrice": "10",
    "typeGen": "dCritters",
    "ID": "0",
    "Type": "Critter",
    "Effect": "_",
    "sources": ["Trapping"],
    "uses": [
      ["Small Stingers, Big Owie", "500", "Quests"],
      ["Big Game Hunter", "Lots", "Alchemy"],
      ["Refining Dioxide Synthesis", "Lots", "Construction"],
      ["Stormcaller", "Lots", "Building"],
      ["StampB26", "Lots", "Stamps"]
    ],
    "description": [
      "This cutie will stab its way into your heart if you aren't careful! No seriosuly, be careful, the bugger pricked my foot the other day and it hurt bad."
    ],
    "notes": " "
  },
  "Critter3A": {
    "displayName": "Crescent Scorpie",
    "sellPrice": "10",
    "typeGen": "dCritters",
    "ID": "0",
    "Type": "Critter",
    "Effect": "_",
    "Trigger": "10000",
    "sources": ["Trapping"],
    "uses": [
      ["MaxCapBagFi5", "4", "Crafting"],
      ["Small Stingers, Big Owie", "2", "Quests"],
      ["To Trap or not to Trap", "500", "Quests"]
    ],
    "description": [
      "This chrome coloured scorpion came straight from the future! Fuuuutuuuuureee! FUUTUUURREE!!! SOMEONE DIRECT ME TO THE CAN OPENERRRR!!!!"
    ]
  },
  "Critter4": {
    "displayName": "Mousey",
    "sellPrice": "15",
    "typeGen": "dCritters",
    "ID": "0",
    "Type": "Critter",
    "Effect": "_",
    "sources": ["Trapping"],
    "uses": [
      ["MaxCapBagTr4", "10000", "Crafting"],
      ["The Mouse n the Molerat", "1000", "Quests"],
      ["Buff Boi Talent", "Lots", "Alchemy"],
      ["Bubonic Burp", "Lots", "Alchemy"],
      ["Refining Red Salt", "Lots", "Construction"],
      ["Salt Lick Upgrades", "Lots", "Salt Lick"],
      ["StampB27", "Lots", "Stamps"]
    ],
    "description": [
      "Adorable!!! Look how cute it's tail is, and that itty bitty nose, and the fact that it's a mouse and not a rat so I don't want to hit it with a broom!"
    ],
    "notes": " "
  },
  "Critter4A": {
    "displayName": "Nakeo Moleo",
    "sellPrice": "3",
    "typeGen": "dCritters",
    "ID": "0",
    "Type": "Critter",
    "Effect": "_",
    "Trigger": "25000",
    "sources": ["Trapping"],
    "uses": [
      ["TrapBoxSet4", "5", "Crafting"],
      ["The Mouse n the Molerat", "2", "Quests"]
    ],
    "description": [
      "This mole ain't got no fur! Ew, gross!! Disgusting even!!! What kind of wretched abomination has skin but no thick layer of fur??"
    ],
    "notes": " "
  },
  "Critter5": {
    "displayName": "Owlio",
    "sellPrice": "23",
    "typeGen": "dCritters",
    "ID": "0",
    "Type": "Critter",
    "Effect": "_",
    "sources": ["Trapping"],
    "uses": [
      ["Happy Tree Friend", "1500", "Quests"],
      ["Green Bargain", "Lots", "Alchemy"],
      ["StampB28", "Lots", "Stamps"]
    ],
    "description": ["Hoot hoot! Yea thats all I got for this one."],
    "notes": " "
  },
  "Critter5A": {
    "displayName": "Minervowl",
    "sellPrice": "3",
    "typeGen": "dCritters",
    "ID": "0",
    "Type": "Critter",
    "Effect": "_",
    "Trigger": "100000",
    "sources": ["Trapping"],
    "uses": [
      ["EquipmentPunching5", "50", "Crafting"],
      ["FishingRod7", "3", "Crafting"],
      ["Happy Tree Friend", "3", "Quests"]
    ],
    "description": [
      "It's a more expensive hoot, I guess. I ain't got no jokes for owls, they're too cool."
    ],
    "notes": " "
  },
  "Critter6": {
    "displayName": "Pingy",
    "sellPrice": "35",
    "typeGen": "dCritters",
    "ID": "0",
    "Type": "Critter",
    "Effect": "_",
    "sources": ["Trapping"],
    "uses": [
      ["MaxCapBagTr5", "30000", "Crafting"],
      ["Noot Noot!", "2500", "Quests"],
      ["Yellow Bargain", "Lots", "Alchemy"],
      ["Salt Lick Upgrades", "Lots", "Salt Lick"]
    ],
    "description": ["It's basically just Gunter but with RTX off."],
    "notes": " "
  },
  "Critter6A": {
    "displayName": "Eternal Lord of The Undying Ember",
    "sellPrice": "3",
    "typeGen": "dCritters",
    "ID": "0",
    "Type": "Critter",
    "Effect": "_",
    "Trigger": "200000",
    "sources": ["Trapping"],
    "uses": [
      ["EquipmentSword3", "15", "Crafting"],
      ["TrapBoxSet5", "6", "Crafting"],
      ["EquipmentSmithingTabs4", "1", "Crafting"],
      ["Noot Noot!", "4", "Quests"],
      ["To Trap or not to Trap", "250", "Quests"]
    ],
    "description": [
      "Bow before the destroyer of all that lies outside his domain, the ruler of the 8th dimension and all that it's flame encompasses, the bringer of light to the blind, and darkness to those who recite his title in full. ...ah crap."
    ],
    "notes": " "
  },
  "Critter7": {
    "displayName": "Bunny",
    "sellPrice": "47",
    "typeGen": "dCritters",
    "ID": "0",
    "Type": "Critter",
    "Effect": "_",
    "sources": ["Trapping"],
    "uses": [
      ["Bunny you Should Say That!", "4000", "Quests"],
      ["Bunny Brew", "Lots", "Alchemy"]
    ],
    "description": ["It could use a carrot, the lil' guy needs some food!"],
    "notes": " "
  },
  "Critter7A": {
    "displayName": "Purbunni",
    "sellPrice": "3",
    "typeGen": "dCritters",
    "ID": "0",
    "Type": "Critter",
    "Effect": "_",
    "Trigger": "500000",
    "sources": ["Trapping"],
    "uses": [["Bunny you Should Say That!", "6", "Quests"]],
    "description": [
      "The other bunny is brilliant...",
      "But I like this one more."
    ],
    "notes": " "
  },
  "Critter8": {
    "displayName": "Dung Beat",
    "sellPrice": "55",
    "typeGen": "dCritters",
    "ID": "0",
    "Type": "Critter",
    "Effect": "_",
    "sources": ["Trapping"],
    "uses": [["Rollin' Thunder!", "8000", "Quests"]],
    "description": [
      "You lean closer to the critter, and hear it say 'Dodo tshh do dodo tss dodo tss badabada dodoooo'. So no, that name isn't a typo."
    ],
    "notes": " "
  },
  "Critter8A": {
    "displayName": "Jade Scarab",
    "sellPrice": "3",
    "typeGen": "dCritters",
    "ID": "0",
    "Type": "Critter",
    "Effect": "_",
    "Trigger": "1000000",
    "sources": ["Trapping"],
    "uses": [["Rollin' Thunder!", "10", "Quests"]],
    "description": [
      "Oh I guess this one is a scarab, not a beetle. You can tell because of the way it is."
    ],
    "notes": " "
  },
  "Critter9": {
    "displayName": "Honker",
    "sellPrice": "80",
    "typeGen": "dCritters",
    "ID": "0",
    "Type": "Critter",
    "Effect": "_",
    "sources": ["Trapping"],
    "uses": [
      ["Untitled Quest", "65000", "Quests"],
      ["Goosey Glug", "Lots", "Alchemy"]
    ],
    "description": ["HONK! HONK!"],
    "notes": " "
  },
  "Critter9A": {
    "displayName": "Diamond Duck",
    "sellPrice": "3",
    "typeGen": "dCritters",
    "ID": "0",
    "Type": "Critter",
    "Effect": "_",
    "Trigger": "5000000",
    "sources": ["Trapping"],
    "uses": [
      ["Untitled Quest", "1", "Quests"],
      ["To Trap or not to Trap", "100", "Quests"]
    ],
    "description": [
      "One of the only beings strong enough to take on the Eternal Lord of the Undying Ember realm. Their battle would be legendary."
    ],
    "notes": " "
  },
  "Soul1": {
    "displayName": "Forest Soul",
    "sellPrice": "3",
    "typeGen": "dSouls",
    "ID": "0",
    "Type": "Soul",
    "Effect": "_",
    "sources": ["Worship", "Chillsnap Bronze Chest"],
    "detdrops": [["Chillsnap Bronze Chest", "0.6", "50"]],
    "uses": [
      ["WorshipSkull2", "250", "Crafting"],
      ["MaxCapBagS1", "200", "Crafting"],
      ["EquipmentShirts15", "1000", "Crafting"],
      ["EquipmentBows7", "7000", "Crafting"],
      ["Bow Jack", "Lots", "Alchemy"],
      ["Purple Bargain", "Lots", "Alchemy"],
      ["Sippy Soul", "Lots", "Alchemy"],
      ["Death Note", "Lots", "Building"],
      ["Isaccian Shrine", "Lots", "Building"],
      ["StampB33", "Lots", "Stamps"]
    ],
    "description": [
      "The soul moans ooOOOOooOOOoo, because it's the only key on his keyboard that works."
    ],
    "notes": " "
  },
  "Soul2": {
    "displayName": "Dune Soul",
    "sellPrice": "9",
    "typeGen": "dSouls",
    "ID": "0",
    "Type": "Soul",
    "Effect": "_",
    "sources": ["Worship", "Chillsnap Golden Chest"],
    "detdrops": [["Chillsnap Golden Chest", "0.4", "400"]],
    "uses": [
      ["WorshipSkull3", "1200", "Crafting"],
      ["MaxCapBagS3", "1500", "Crafting"],
      ["FoodWorship1", "70", "Crafting"],
      ["Sample It", "Lots", "Alchemy"],
      ["Chonker Chug", "Lots", "Alchemy"],
      ["Refining Dioxide Synthesis", "Lots", "Construction"],
      ["Salt Lick Upgrades", "Lots", "Salt Lick"],
      ["StampB36", "Lots", "Stamps"]
    ],
    "description": [
      "Fat chonker this one is! It must be the moonmoon diet these ghosts have, they should start eating some of those fruits for a change!"
    ],
    "notes": " "
  },
  "Soul3": {
    "displayName": "Rooted Soul",
    "sellPrice": "20",
    "typeGen": "dSouls",
    "ID": "0",
    "Type": "Soul",
    "Effect": "_",
    "sources": ["Worship"],
    "uses": [
      ["WorshipSkull4", "7000", "Crafting"],
      ["MaxCapBagS4", "8000", "Crafting"],
      ["MaxCapBagS5", "30000", "Crafting"],
      ["Cuz I Catch Em All", "Lots", "Alchemy"],
      ["Clover Shrine", "Lots", "Building"]
    ],
    "description": ["It's smiling as if it knows something that you don't..."],
    "notes": " "
  },
  "Soul4": {
    "displayName": "Frigid Soul",
    "sellPrice": "35",
    "typeGen": "dSouls",
    "ID": "0",
    "Type": "Soul",
    "Effect": "_",
    "sources": ["Worship"],
    "uses": [
      ["EquipmentWands7", "8000", "Crafting"],
      ["WorshipSkull5", "12000", "Crafting"],
      ["EquipmentSmithingTabs4", "22", "Crafting"],
      ["Orange Bargain", "Lots", "Alchemy"],
      ["Slowergy Drink", "Lots", "Alchemy"],
      ["Refining Red Salt", "Lots", "Construction"],
      ["Salt Lick Upgrades", "Lots", "Salt Lick"]
    ],
    "description": [
      "Well, his mom did warn him if that he kept making funny faces that it'd freeze that way!"
    ],
    "notes": " "
  },
  "Soul5": {
    "displayName": "Squiddy Soul",
    "sellPrice": "50",
    "typeGen": "dSouls",
    "ID": "0",
    "Type": "Soul",
    "Effect": "_",
    "sources": ["Worship"],
    "description": [
      "The soul moans ooOOOOooOOOoo, because it's the only key on his keyboard that works."
    ],
    "notes": " "
  },
  "Soul6": {
    "displayName": "Cryo Soul",
    "sellPrice": "70",
    "typeGen": "dSouls",
    "ID": "0",
    "Type": "Soul",
    "Effect": "_",
    "sources": ["Worship"],
    "uses": [["Spook Pint", "Lots", "Alchemy"]],
    "description": [
      "The soul moans ooOOOOooOOOoo, because it's the only key on his keyboard that works."
    ],
    "notes": " "
  },
  "EquipmentHats1": {
    "displayName": "Farmer Brim",
    "sellPrice": "60",
    "typeGen": "aHelmet",
    "ID": "4",
    "Type": "Helmet",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "Defence": "2",
    "Upgrade_Slots_Left": "1",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [["Plan-it Express", "Lots", "Post Office"]],
    "recipeData": {
      "recipe": [
        ["Grasslands1", "5"],
        ["Copper", "15"]
      ],
      "levelReqToCraft": "1",
      "expGiven": "3",
      "no": 5,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "Grasslands1", "5"],
      [0, "Copper", "15"]
    ],
    "detRecipeTotals": [
      ["Grasslands1", 5],
      ["Copper", 15]
    ],
    "notes": " "
  },
  "TestObj15": {
    "displayName": "Slime Cap",
    "sellPrice": "200",
    "typeGen": "aHelmet",
    "ID": "2",
    "Type": "Helmet",
    "lvReqToEquip": "15",
    "Class": "Beginner",
    "AGI": "4",
    "LUK": "2",
    "Upgrade_Slots_Left": "4",
    "notes": " "
  },
  "EquipmentHatsBeg1": {
    "displayName": "Ice Cream Sunday",
    "sellPrice": "200",
    "typeGen": "aHelmet",
    "ID": "24",
    "Type": "Helmet",
    "lvReqToEquip": "30",
    "Class": "Beginner",
    "WIS": "6",
    "Defence": "5",
    "Upgrade_Slots_Left": "5",
    "miscUp1": "10% Gold Food Effect",
    "notes": " "
  },
  "EquipmentHats61": {
    "displayName": "Mark of Member",
    "sellPrice": "8897750",
    "typeGen": "aHelmet",
    "ID": "64",
    "Type": "Helmet",
    "lvReqToEquip": "80",
    "Class": "Beginner",
    "LUK": "20",
    "Defence": "50",
    "Upgrade_Slots_Left": "5",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "miscUp1": "15% Xp From Monsters",
    "recipeData": {
      "recipe": [
        ["EquipmentHats39", "1"],
        ["EquipmentHats54", "1"],
        ["Refinery4", "500"]
      ],
      "levelReqToCraft": "49",
      "expGiven": "1000000",
      "no": 49,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "EquipmentHats39", "1"],
      [0, "EquipmentHats54", "1"],
      [1, "Refinery3", "500"],
      [1, "EquipmentHats53", "2"],
      [2, "Critter1", "10000"],
      [2, "EquipmentHats19", "4"],
      [3, "Fish3", "9000"],
      [3, "EquipmentHats18", "16"],
      [4, "IronBar", "2000"],
      [4, "Forest1", "4800"],
      [3, "PlatBar", "3000"],
      [2, "DementiaBar", "600"],
      [1, "VoidBar", "1000"],
      [1, "PureWater2", "5"],
      [0, "Refinery4", "500"]
    ],
    "detRecipeTotals": [
      ["EquipmentHats39", 1],
      ["Refinery4", 500],
      ["Refinery3", 500],
      ["VoidBar", 1000],
      ["PureWater2", 5],
      ["Critter1", 10000],
      ["DementiaBar", 600],
      ["Fish3", 9000],
      ["PlatBar", 3000],
      ["IronBar", 2000],
      ["Forest1", 4800]
    ],
    "notes": " "
  },
  "EquipmentHats15": {
    "displayName": "Leather Cap",
    "sellPrice": "254",
    "typeGen": "aHelmet",
    "ID": "18",
    "Type": "Helmet",
    "lvReqToEquip": "6",
    "Class": "All",
    "STR": "2",
    "AGI": "2",
    "WIS": "2",
    "Defence": "4",
    "Upgrade_Slots_Left": "2",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [["Plan-it Express", "Lots", "Post Office"]],
    "recipeData": {
      "recipe": [
        ["Grasslands2", "25"],
        ["OakTree", "45"],
        ["CraftMat1", "13"]
      ],
      "levelReqToCraft": "4",
      "expGiven": "12",
      "no": 13,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "Grasslands2", "25"],
      [0, "OakTree", "45"],
      [0, "CraftMat1", "13"]
    ],
    "detRecipeTotals": [
      ["Grasslands2", 25],
      ["OakTree", 45],
      ["CraftMat1", 13]
    ],
    "notes": " "
  },
  "EquipmentHats5": {
    "displayName": "White Headband",
    "sellPrice": "200",
    "typeGen": "aHelmet",
    "ID": "8",
    "Type": "Helmet",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "LUK": "1",
    "Upgrade_Slots_Left": "2",
    "sources": ["DropTable1"],
    "detdrops": [
      ["Crystal Carrot", "0.006", "1.0"],
      ["Green Mushroom", "0.00003", "1.0"],
      ["Frog", "0.000038", "1.0"],
      ["Bored Bean", "0.000044999999999999996", "1.0"],
      ["Red Mushroom", "0.000052", "1.0"],
      ["Amarok", "0.01", "2.0"],
      ["Chaotic Amarok", "0.01", "4.0"],
      ["Nightmare Amarok", "0.01", "2.0"],
      ["Baba Yaga", "0.01", "2.0"],
      ["Dewdrop Bronze Chest", "0.01", "1.0"]
    ],
    "uses": [["Beatboxing Starterpack", "1", "Quests"]],
    "notes": " "
  },
  "EquipmentHats6": {
    "displayName": "Green Headband",
    "sellPrice": "150",
    "typeGen": "aHelmet",
    "ID": "9",
    "Type": "Helmet",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "2",
    "AGI": "4",
    "WIS": "1",
    "LUK": "1",
    "Upgrade_Slots_Left": "2",
    "sources": ["Frog"],
    "detdrops": [["Frog", "0.00025", "1"]],
    "notes": " "
  },
  "EquipmentHats7": {
    "displayName": "Red Headband",
    "sellPrice": "200",
    "typeGen": "aHelmet",
    "ID": "10",
    "Type": "Helmet",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "2",
    "AGI": "1",
    "Upgrade_Slots_Left": "2",
    "sources": ["Gear Up, Gamer!"],
    "notes": " "
  },
  "EquipmentHats8": {
    "displayName": "Purple Tupacband",
    "sellPrice": "1130",
    "typeGen": "aHelmet",
    "ID": "11",
    "Type": "Helmet",
    "lvReqToEquip": "1",
    "Class": "All",
    "AGI": "2",
    "WIS": "5",
    "Upgrade_Slots_Left": "2",
    "sources": ["Smithing", "Recipe from Should We Tell Him?"],
    "uses": [["Should We Tell Him?", "1", "Quests"]],
    "recipeData": {
      "recipe": [
        ["BirchTree", "100"],
        ["Iron", "50"],
        ["OilBarrel1", "60"]
      ],
      "levelReqToCraft": "5",
      "expGiven": "20",
      "no": 41,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Should We Tell Him?"]
    },
    "detrecipe": [
      [0, "BirchTree", "100"],
      [0, "Iron", "50"],
      [0, "OilBarrel1", "60"]
    ],
    "detRecipeTotals": [
      ["BirchTree", 100],
      ["Iron", 50],
      ["OilBarrel1", 60]
    ],
    "notes": " "
  },
  "EquipmentHats9": {
    "displayName": "Yellow Headband",
    "sellPrice": "200",
    "typeGen": "aHelmet",
    "ID": "12",
    "Type": "Helmet",
    "lvReqToEquip": "1",
    "Class": "All",
    "AGI": "2",
    "WIS": "3",
    "LUK": "8",
    "Upgrade_Slots_Left": "2",
    "sources": ["Sandy Pot"],
    "detdrops": [["Sandy Pot", ".0001", "1"]],
    "uses": [["Bob's Brand New Bandana", "1", "Quests"]],
    "notes": " "
  },
  "EquipmentHats10": {
    "displayName": "Pink Headband",
    "sellPrice": "200",
    "typeGen": "aHelmet",
    "ID": "13",
    "Type": "Helmet",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "4",
    "AGI": "4",
    "WIS": "4",
    "LUK": "4",
    "Upgrade_Slots_Left": "2",
    "notes": " "
  },
  "EquipmentHats11": {
    "displayName": "Grey Beret",
    "sellPrice": "5",
    "typeGen": "aHelmet",
    "ID": "14",
    "Type": "Helmet",
    "lvReqToEquip": "1",
    "Class": "All",
    "AGI": "1",
    "Upgrade_Slots_Left": "1",
    "sources": ["Starter Hat"],
    "notes": " "
  },
  "EquipmentHats12": {
    "displayName": "Traffic Cone",
    "sellPrice": "5",
    "typeGen": "aHelmet",
    "ID": "15",
    "Type": "Helmet",
    "lvReqToEquip": "1",
    "Class": "All",
    "LUK": "1",
    "Upgrade_Slots_Left": "1",
    "sources": ["Starter Hat"],
    "notes": " "
  },
  "EquipmentHats13": {
    "displayName": "Propeller Cap",
    "sellPrice": "5",
    "typeGen": "aHelmet",
    "ID": "16",
    "Type": "Helmet",
    "lvReqToEquip": "1",
    "Class": "All",
    "WIS": "1",
    "Upgrade_Slots_Left": "1",
    "sources": ["Starter Hat"],
    "notes": " "
  },
  "EquipmentHats14": {
    "displayName": "Baseball Hat",
    "sellPrice": "5",
    "typeGen": "aHelmet",
    "ID": "17",
    "Type": "Helmet",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "1",
    "Upgrade_Slots_Left": "1",
    "sources": ["Starter Hat"],
    "notes": " "
  },
  "TestObj14": {
    "displayName": "Trojan Helmet",
    "sellPrice": "200",
    "typeGen": "aHelmet",
    "ID": "1",
    "Type": "Helmet",
    "lvReqToEquip": "15",
    "Class": "All",
    "STR": "2",
    "AGI": "2",
    "Upgrade_Slots_Left": "2",
    "notes": " "
  },
  "TestObj16": {
    "displayName": "Demon Horns",
    "sellPrice": "200",
    "typeGen": "aHelmet",
    "ID": "3",
    "Type": "Helmet",
    "lvReqToEquip": "15",
    "Class": "All",
    "Weapon_Power": "50",
    "STR": "3",
    "AGI": "3",
    "LUK": "3",
    "Defence": "10000",
    "Upgrade_Slots_Left": "2",
    "notes": " "
  },
  "EquipmentHats4Choppin": {
    "displayName": "Stump Prop",
    "sellPrice": "200",
    "typeGen": "aHelmet",
    "ID": "7",
    "Type": "Helmet",
    "lvReqToEquip": "4",
    "Class": "All",
    "Weapon_Power": "5",
    "AGI": "3",
    "LUK": "4",
    "Defence": "2",
    "Upgrade_Slots_Left": "3",
    "sources": ["It's Just a Plank, Bro!"],
    "miscUp1": "5% Chop Efficiency",
    "notes": " "
  },
  "EquipmentHats17": {
    "displayName": "Copper Helmet",
    "sellPrice": "560",
    "typeGen": "aHelmet",
    "ID": "20",
    "Type": "Helmet",
    "lvReqToEquip": "8",
    "Class": "All",
    "STR": "3",
    "AGI": "3",
    "WIS": "3",
    "Defence": "5",
    "Upgrade_Slots_Left": "2",
    "sources": ["Dewdrop Silver Chest", "Smithing", "Recipe from Start"],
    "detdrops": [["Dewdrop Silver Chest", "0.02", "1"]],
    "uses": [
      ["EquipmentHats20", "2", "Crafting"],
      ["EquipmentHats3", "2", "Crafting"],
      ["EquipmentHats16", "2", "Crafting"],
      ["EquipmentHats21", "4", "Crafting"],
      ["EquipmentHats28", "4", "Crafting"]
    ],
    "recipeData": {
      "recipe": [
        ["CopperBar", "30"],
        ["Grasslands3", "50"]
      ],
      "levelReqToCraft": "6",
      "expGiven": "35",
      "no": 17,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "CopperBar", "30"],
      [0, "Grasslands3", "50"]
    ],
    "detRecipeTotals": [
      ["CopperBar", 30],
      ["Grasslands3", 50]
    ],
    "notes": " "
  },
  "EquipmentHats18": {
    "displayName": "Iron Helmet",
    "sellPrice": "10000",
    "typeGen": "aHelmet",
    "ID": "21",
    "Type": "Helmet",
    "lvReqToEquip": "15",
    "Class": "All",
    "STR": "5",
    "AGI": "5",
    "WIS": "5",
    "Defence": "9",
    "Upgrade_Slots_Left": "2",
    "sources": ["Sandstone Silver Chest", "Smithing", "Recipe from Start"],
    "detdrops": [["Sandstone Silver Chest", "0.02", "1"]],
    "uses": [
      ["EquipmentHats19", "4", "Crafting"],
      ["Plan-it Express", "Lots", "Post Office"],
      ["Early Evening Eating Endeavor", "1", "Quests"]
    ],
    "recipeData": {
      "recipe": [
        ["IronBar", "125"],
        ["Forest1", "300"]
      ],
      "levelReqToCraft": "12",
      "expGiven": "520",
      "no": 33,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "IronBar", "125"],
      [0, "Forest1", "300"]
    ],
    "detRecipeTotals": [
      ["IronBar", 125],
      ["Forest1", 300]
    ],
    "notes": " "
  },
  "EquipmentHats28": {
    "displayName": "Gold Helmet",
    "sellPrice": "36990",
    "typeGen": "aHelmet",
    "ID": "32",
    "Type": "Helmet",
    "lvReqToEquip": "35",
    "Class": "All",
    "STR": "7",
    "AGI": "7",
    "WIS": "7",
    "Defence": "15",
    "Upgrade_Slots_Left": "3",
    "sources": ["Chillsnap Silver Chest", "Smithing", "Recipe from Start"],
    "detdrops": [["Chillsnap Silver Chest", "0.02", "1"]],
    "uses": [["Plan-it Express", "Lots", "Post Office"]],
    "miscUp1": "3% Defence",
    "recipeData": {
      "recipe": [
        ["Bug1", "2000"],
        ["EquipmentHats17", "4"],
        ["GoldBar", "250"]
      ],
      "levelReqToCraft": "15",
      "expGiven": "900",
      "no": 1,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "Bug1", "2000"],
      [0, "EquipmentHats17", "4"],
      [1, "CopperBar", "120"],
      [1, "Grasslands3", "200"],
      [0, "GoldBar", "250"]
    ],
    "detRecipeTotals": [
      ["Bug1", 2000],
      ["GoldBar", 250],
      ["CopperBar", 120],
      ["Grasslands3", 200]
    ],
    "notes": " "
  },
  "EquipmentHats22": {
    "displayName": "Amarok Helmet",
    "sellPrice": "30720",
    "typeGen": "aHelmet",
    "ID": "26",
    "Type": "Helmet",
    "lvReqToEquip": "38",
    "Class": "All",
    "STR": "4",
    "AGI": "4",
    "WIS": "4",
    "LUK": "4",
    "Defence": "20",
    "Upgrade_Slots_Left": "6",
    "sources": ["Smithing"],
    "uses": [["BadgeG2", "1", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["Quest17", "20"],
        ["ForestTree", "2500"],
        ["TreeInterior1b", "8"]
      ],
      "levelReqToCraft": "23",
      "expGiven": "6000",
      "no": 65,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Blunder Hills Merit Shop"]
    },
    "detrecipe": [
      [0, "Quest17", "20"],
      [0, "ForestTree", "2500"],
      [0, "TreeInterior1b", "8"]
    ],
    "detRecipeTotals": [
      ["Quest17", 20],
      ["ForestTree", 2500],
      ["TreeInterior1b", 8]
    ],
    "notes": " "
  },
  "EquipmentHats19": {
    "displayName": "Platinum Helmet",
    "sellPrice": "416500",
    "typeGen": "aHelmet",
    "ID": "22",
    "Type": "Helmet",
    "lvReqToEquip": "55",
    "Class": "All",
    "STR": "9",
    "AGI": "9",
    "WIS": "9",
    "Defence": "25",
    "Upgrade_Slots_Left": "4",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [["EquipmentHats53", "2", "Crafting"]],
    "miscUp1": "5% Defence",
    "recipeData": {
      "recipe": [
        ["Fish3", "2250"],
        ["EquipmentHats18", "4"],
        ["PlatBar", "750"]
      ],
      "levelReqToCraft": "29",
      "expGiven": "20000",
      "no": 21,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "Fish3", "2250"],
      [0, "EquipmentHats18", "4"],
      [1, "IronBar", "500"],
      [1, "Forest1", "1200"],
      [0, "PlatBar", "750"]
    ],
    "detRecipeTotals": [
      ["Fish3", 2250],
      ["PlatBar", 750],
      ["IronBar", 500],
      ["Forest1", 1200]
    ],
    "notes": " "
  },
  "EquipmentHats53": {
    "displayName": "Dementia Helmet",
    "sellPrice": "1298000",
    "typeGen": "aHelmet",
    "ID": "56",
    "Type": "Helmet",
    "lvReqToEquip": "70",
    "Class": "All",
    "STR": "12",
    "AGI": "12",
    "WIS": "12",
    "LUK": "12",
    "Defence": "34",
    "Upgrade_Slots_Left": "4",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [["EquipmentHats54", "2", "Crafting"]],
    "miscUp1": "6% Defence",
    "recipeData": {
      "recipe": [
        ["Critter1", "5000"],
        ["EquipmentHats19", "2"],
        ["DementiaBar", "300"]
      ],
      "levelReqToCraft": "36",
      "expGiven": "100000",
      "no": 1,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "Critter1", "5000"],
      [0, "EquipmentHats19", "2"],
      [1, "Fish3", "4500"],
      [1, "EquipmentHats18", "8"],
      [2, "IronBar", "1000"],
      [2, "Forest1", "2400"],
      [1, "PlatBar", "1500"],
      [0, "DementiaBar", "300"]
    ],
    "detRecipeTotals": [
      ["Critter1", 5000],
      ["DementiaBar", 300],
      ["Fish3", 4500],
      ["PlatBar", 1500],
      ["IronBar", 1000],
      ["Forest1", 2400]
    ],
    "notes": " "
  },
  "EquipmentHats52": {
    "displayName": "Efaunt Helmet",
    "sellPrice": "118300",
    "typeGen": "aHelmet",
    "ID": "55",
    "Type": "Helmet",
    "lvReqToEquip": "80",
    "Class": "All",
    "Weapon_Power": "1",
    "STR": "8",
    "AGI": "8",
    "WIS": "8",
    "LUK": "8",
    "Defence": "38",
    "Upgrade_Slots_Left": "6",
    "sources": ["Smithing"],
    "uses": [["BadgeD3", "1", "Crafting"]],
    "miscUp1": "5% Drop Chance",
    "recipeData": {
      "recipe": [
        ["EfauntDrop1", "20"],
        ["EquipmentPants19", "1"],
        ["StoneA3b", "2"],
        ["Quest36", "3"]
      ],
      "levelReqToCraft": "43",
      "expGiven": "250000",
      "no": 61,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Yum Yum Desert Merit Shop"]
    },
    "detrecipe": [
      [0, "EfauntDrop1", "20"],
      [0, "EquipmentPants19", "1"],
      [0, "StoneA3b", "2"],
      [0, "Quest36", "3"],
      [1, "Quest37", "3"],
      [1, "GoldBar", "240"],
      [1, "DesertC2b", "3"]
    ],
    "detRecipeTotals": [
      ["EfauntDrop1", 20],
      ["EquipmentPants19", 1],
      ["StoneA3b", 2],
      ["Quest37", 3],
      ["GoldBar", 240],
      ["DesertC2b", 3]
    ],
    "notes": " "
  },
  "EquipmentHats54": {
    "displayName": "Void Imperium Helmet",
    "sellPrice": "8846250",
    "typeGen": "aHelmet",
    "ID": "57",
    "Type": "Helmet",
    "lvReqToEquip": "90",
    "Class": "All",
    "STR": "15",
    "AGI": "15",
    "WIS": "15",
    "LUK": "15",
    "Defence": "46",
    "Upgrade_Slots_Left": "5",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [
      ["EquipmentHats61", "1", "Crafting"],
      ["EquipmentHats58", "1", "Crafting"],
      ["EquipmentHats59", "1", "Crafting"],
      ["EquipmentHats60", "1", "Crafting"]
    ],
    "miscUp1": "8% Defence",
    "recipeData": {
      "recipe": [
        ["Refinery3", "500"],
        ["EquipmentHats53", "2"],
        ["VoidBar", "1000"],
        ["PureWater2", "5"]
      ],
      "levelReqToCraft": "43",
      "expGiven": "275000",
      "no": 25,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "Refinery3", "500"],
      [0, "EquipmentHats53", "2"],
      [1, "Critter1", "10000"],
      [1, "EquipmentHats19", "4"],
      [2, "Fish3", "9000"],
      [2, "EquipmentHats18", "16"],
      [3, "IronBar", "2000"],
      [3, "Forest1", "4800"],
      [2, "PlatBar", "3000"],
      [1, "DementiaBar", "600"],
      [0, "VoidBar", "1000"],
      [0, "PureWater2", "5"]
    ],
    "detRecipeTotals": [
      ["Refinery3", 500],
      ["VoidBar", 1000],
      ["PureWater2", 5],
      ["Critter1", 10000],
      ["DementiaBar", 600],
      ["Fish3", 9000],
      ["PlatBar", 3000],
      ["IronBar", 2000],
      ["Forest1", 4800]
    ],
    "notes": " "
  },
  "EquipmentHats21": {
    "displayName": "Party Hat",
    "sellPrice": "8640",
    "typeGen": "aHelmet",
    "ID": "25",
    "Type": "Helmet",
    "lvReqToEquip": "10",
    "Class": "Beginner",
    "LUK": "5",
    "Defence": "10",
    "Upgrade_Slots_Left": "5",
    "sources": ["Smithing", "[[Alchemy#Level up Gift|Level up Gift]]"],
    "miscUp1": "5% Xp From Monsters",
    "recipeData": {
      "recipe": [
        ["IronBar", "200"],
        ["EquipmentHats17", "4"]
      ],
      "levelReqToCraft": "12",
      "expGiven": "50",
      "no": 24,
      "tab": "Anvil Tab 1",
      "recipeFrom": []
    },
    "detrecipe": [
      [0, "IronBar", "200"],
      [0, "EquipmentHats17", "4"],
      [1, "CopperBar", "120"],
      [1, "Grasslands3", "200"]
    ],
    "detRecipeTotals": [
      ["IronBar", 200],
      ["CopperBar", 120],
      ["Grasslands3", 200]
    ],
    "notes": " "
  },
  "EquipmentHats23": {
    "displayName": "Farmer Brimer",
    "sellPrice": "150",
    "typeGen": "aHelmet",
    "ID": "27",
    "Type": "Helmet",
    "lvReqToEquip": "3",
    "Class": "All",
    "AGI": "4",
    "WIS": "2",
    "Defence": "4",
    "Upgrade_Slots_Left": "2",
    "notes": " "
  },
  "EquipmentHats24": {
    "displayName": "Farmer Brimest",
    "sellPrice": "400",
    "typeGen": "aHelmet",
    "ID": "28",
    "Type": "Helmet",
    "lvReqToEquip": "5",
    "Class": "All",
    "STR": "3",
    "AGI": "3",
    "WIS": "3",
    "LUK": "3",
    "Defence": "6",
    "Upgrade_Slots_Left": "3",
    "notes": " "
  },
  "EquipmentHats25": {
    "displayName": "Bored Beanie",
    "sellPrice": "500",
    "typeGen": "aHelmet",
    "ID": "29",
    "Type": "Helmet",
    "lvReqToEquip": "8",
    "Class": "All",
    "AGI": "7",
    "LUK": "3",
    "Defence": "5",
    "Upgrade_Slots_Left": "2",
    "sources": ["Bored Bean"],
    "detdrops": [["Bored Bean", "0.000035", "1"]],
    "notes": " "
  },
  "EquipmentHats2": {
    "displayName": "Royal Turban",
    "sellPrice": "200",
    "typeGen": "aHelmet",
    "ID": "5",
    "Type": "Helmet",
    "lvReqToEquip": "70",
    "Class": "All",
    "AGI": "15",
    "Defence": "7",
    "Upgrade_Slots_Left": "6",
    "sources": [
      "Efaunt",
      "Chaotic Efaunt",
      "Nightmare Amarok",
      "Chizoar",
      "Chaotic Chizoar",
      "Nightmare Chizoar"
    ],
    "detdrops": [
      ["Efaunt", "0.000667", "1"],
      ["Chaotic Efaunt", "0.002", "1"],
      ["Nightmare Amarok", "0.000667", "1"],
      ["Chizoar", "0.000667", "1"],
      ["Chaotic Chizoar", "0.000667", "1"],
      ["Nightmare Chizoar", "0.000667", "1"]
    ],
    "miscUp1": "15% Gold Food Effect",
    "notes": " "
  },
  "EquipmentHats27": {
    "displayName": "Paper Boat",
    "sellPrice": "1500",
    "typeGen": "aHelmet",
    "ID": "31",
    "Type": "Helmet",
    "lvReqToEquip": "30",
    "Class": "All",
    "STR": "4",
    "WIS": "10",
    "Defence": "12",
    "Upgrade_Slots_Left": "4",
    "miscUp1": "5% Fishin Efficincy",
    "notes": " "
  },
  "EquipmentHats29": {
    "displayName": "Alien Headband",
    "sellPrice": "1000",
    "typeGen": "aHelmet",
    "ID": "33",
    "Type": "Helmet",
    "lvReqToEquip": "13",
    "Class": "All",
    "AGI": "3",
    "WIS": "11",
    "Defence": "4",
    "Upgrade_Slots_Left": "3",
    "sources": ["Slovakian Scare"],
    "miscUp1": "10% Mana Regen",
    "notes": " "
  },
  "EquipmentHats30": {
    "displayName": "Cowbo Galloneer",
    "sellPrice": "1500",
    "typeGen": "aHelmet",
    "ID": "34",
    "Type": "Helmet",
    "lvReqToEquip": "6",
    "Class": "All",
    "STR": "2",
    "Defence": "3",
    "Upgrade_Slots_Left": "2",
    "sources": ["A Hat in Crime"],
    "miscUp1": "25 Base Damage",
    "notes": " "
  },
  "EquipmentHats39": {
    "displayName": "Grandma Disguise",
    "sellPrice": "1500",
    "typeGen": "aHelmet",
    "ID": "42",
    "Type": "Helmet",
    "lvReqToEquip": "35",
    "Class": "All",
    "WIS": "15",
    "Defence": "5",
    "Upgrade_Slots_Left": "6",
    "sources": ["Amarok", "Chaotic Amarok", "Nightmare Amarok"],
    "detdrops": [
      ["Amarok", "0.001", "1"],
      ["Chaotic Amarok", "0.004", "1"],
      ["Nightmare Amarok", "0.001", "1"]
    ],
    "uses": [["EquipmentHats61", "1", "Crafting"]],
    "miscUp1": "7% Xp From Monsters",
    "notes": " "
  },
  "EquipmentHats42": {
    "displayName": "Santa Hat",
    "sellPrice": "1",
    "typeGen": "aHelmet",
    "ID": "45",
    "Type": "Helmet",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "Upgrade_Slots_Left": "3",
    "miscUp1": "5% Xp From Monsters",
    "notes": " "
  },
  "EquipmentHats44": {
    "displayName": "Jar",
    "sellPrice": "1",
    "typeGen": "aHelmet",
    "ID": "47",
    "Type": "Helmet",
    "lvReqToEquip": "25",
    "Class": "All",
    "Defence": "25",
    "Upgrade_Slots_Left": "3",
    "sources": ["PSA. You Are Being Eaten!"],
    "notes": " "
  },
  "EquipmentHats51": {
    "displayName": "Big Pretty Bow",
    "sellPrice": "1",
    "typeGen": "aHelmet",
    "ID": "54",
    "Type": "Helmet",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "Upgrade_Slots_Left": "3",
    "miscUp1": "5% Xp From Monsters",
    "notes": " "
  },
  "EquipmentHats55": {
    "displayName": "Steam Cap",
    "sellPrice": "1",
    "typeGen": "aHelmet",
    "ID": "58",
    "Type": "Helmet",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "LUK": "1",
    "miscUp1": "3% Xp From Monsters",
    "notes": " "
  },
  "EquipmentHats56": {
    "displayName": "Bunny Ears",
    "sellPrice": "1",
    "typeGen": "aHelmet",
    "ID": "59",
    "Type": "Helmet",
    "lvReqToEquip": "1",
    "Class": "All",
    "AGI": "4",
    "Upgrade_Slots_Left": "3",
    "miscUp1": "4% Xp From Monsters",
    "notes": " "
  },
  "EquipmentHats63": {
    "displayName": "Summer Shell",
    "sellPrice": "1",
    "typeGen": "aHelmet",
    "ID": "66",
    "Type": "Helmet",
    "lvReqToEquip": "1",
    "Class": "All",
    "AGI": "4",
    "Upgrade_Slots_Left": "3",
    "miscUp1": "4% Xp From Monsters"
  },
  "EquipmentHats20": {
    "displayName": "Militia Helm",
    "sellPrice": "2370",
    "typeGen": "aHelmet",
    "ID": "23",
    "Type": "Helmet",
    "lvReqToEquip": "10",
    "Class": "Warrior",
    "STR": "7",
    "AGI": "2",
    "Defence": "11",
    "Upgrade_Slots_Left": "2",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [
      ["TestObj13", "5", "Crafting"],
      ["StampB7", "Lots", "Stamps"]
    ],
    "recipeData": {
      "recipe": [
        ["IronBar", "25"],
        ["Copper", "150"],
        ["EquipmentHats17", "2"]
      ],
      "levelReqToCraft": "10",
      "expGiven": "300",
      "no": 21,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "IronBar", "25"],
      [0, "Copper", "150"],
      [0, "EquipmentHats17", "2"],
      [1, "CopperBar", "60"],
      [1, "Grasslands3", "100"]
    ],
    "detRecipeTotals": [
      ["IronBar", 25],
      ["Copper", 150],
      ["CopperBar", 60],
      ["Grasslands3", 100]
    ],
    "notes": " "
  },
  "TestObj13": {
    "displayName": "Viking Cap",
    "sellPrice": "57970",
    "typeGen": "aHelmet",
    "ID": "0",
    "Type": "Helmet",
    "lvReqToEquip": "40",
    "Class": "Warrior",
    "STR": "13",
    "WIS": "3",
    "Defence": "21",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "miscUp1": "10% Mining Efficincy",
    "recipeData": {
      "recipe": [
        ["EquipmentHats20", "5"],
        ["GoldBar", "400"],
        ["DesertA1b", "2"]
      ],
      "levelReqToCraft": "24",
      "expGiven": "7450",
      "no": 46,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "EquipmentHats20", "5"],
      [1, "IronBar", "125"],
      [1, "Copper", "750"],
      [1, "EquipmentHats17", "10"],
      [2, "CopperBar", "300"],
      [2, "Grasslands3", "500"],
      [0, "GoldBar", "400"],
      [0, "DesertA1b", "2"]
    ],
    "detRecipeTotals": [
      ["GoldBar", 400],
      ["DesertA1b", 2],
      ["IronBar", 125],
      ["Copper", 750],
      ["CopperBar", 300],
      ["Grasslands3", 500]
    ],
    "notes": " "
  },
  "EquipmentHats58": {
    "displayName": "Murmillo Helm",
    "sellPrice": "8896250",
    "typeGen": "aHelmet",
    "ID": "61",
    "Type": "Helmet",
    "lvReqToEquip": "100",
    "Class": "Warrior",
    "Weapon_Power": "1",
    "STR": "20",
    "WIS": "10",
    "Defence": "55",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "miscUp1": "10% Defence",
    "recipeData": {
      "recipe": [
        ["Refinery4", "500"],
        ["EquipmentHats54", "1"]
      ],
      "levelReqToCraft": "48",
      "expGiven": "750000",
      "no": 50,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Refinery4", "500"],
      [0, "EquipmentHats54", "1"],
      [1, "Refinery3", "500"],
      [1, "EquipmentHats53", "2"],
      [2, "Critter1", "10000"],
      [2, "EquipmentHats19", "4"],
      [3, "Fish3", "9000"],
      [3, "EquipmentHats18", "16"],
      [4, "IronBar", "2000"],
      [4, "Forest1", "4800"],
      [3, "PlatBar", "3000"],
      [2, "DementiaBar", "600"],
      [1, "VoidBar", "1000"],
      [1, "PureWater2", "5"]
    ],
    "detRecipeTotals": [
      ["Refinery4", 500],
      ["Refinery3", 500],
      ["VoidBar", 1000],
      ["PureWater2", 5],
      ["Critter1", 10000],
      ["DementiaBar", 600],
      ["Fish3", 9000],
      ["PlatBar", 3000],
      ["IronBar", 2000],
      ["Forest1", 4800]
    ],
    "notes": " "
  },
  "EquipmentHats3": {
    "displayName": "Thief Hood",
    "sellPrice": "2370",
    "typeGen": "aHelmet",
    "ID": "6",
    "Type": "Helmet",
    "lvReqToEquip": "10",
    "Class": "Archer",
    "STR": "3",
    "AGI": "6",
    "Defence": "9",
    "Upgrade_Slots_Left": "2",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [
      ["EquipmentHats41", "5", "Crafting"],
      ["StampB5", "Lots", "Stamps"]
    ],
    "recipeData": {
      "recipe": [
        ["IronBar", "25"],
        ["CraftMat1", "150"],
        ["EquipmentHats17", "2"]
      ],
      "levelReqToCraft": "10",
      "expGiven": "300",
      "no": 22,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "IronBar", "25"],
      [0, "CraftMat1", "150"],
      [0, "EquipmentHats17", "2"],
      [1, "CopperBar", "60"],
      [1, "Grasslands3", "100"]
    ],
    "detRecipeTotals": [
      ["IronBar", 25],
      ["CraftMat1", 150],
      ["CopperBar", 60],
      ["Grasslands3", 100]
    ],
    "notes": " "
  },
  "EquipmentHats41": {
    "displayName": "Sleek Coif",
    "sellPrice": "51970",
    "typeGen": "aHelmet",
    "ID": "44",
    "Type": "Helmet",
    "lvReqToEquip": "40",
    "Class": "Archer",
    "STR": "4",
    "AGI": "12",
    "Defence": "18",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "recipeData": {
      "recipe": [
        ["EquipmentHats3", "5"],
        ["PalmTree", "2000"],
        ["DesertA1b", "2"]
      ],
      "levelReqToCraft": "24",
      "expGiven": "7450",
      "no": 47,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "EquipmentHats3", "5"],
      [1, "IronBar", "125"],
      [1, "CraftMat1", "750"],
      [1, "EquipmentHats17", "10"],
      [2, "CopperBar", "300"],
      [2, "Grasslands3", "500"],
      [0, "PalmTree", "2000"],
      [0, "DesertA1b", "2"]
    ],
    "detRecipeTotals": [
      ["PalmTree", 2000],
      ["DesertA1b", 2],
      ["IronBar", 125],
      ["CraftMat1", 750],
      ["CopperBar", 300],
      ["Grasslands3", 500]
    ],
    "notes": " "
  },
  "EquipmentHats59": {
    "displayName": "Conquistador Plume",
    "sellPrice": "8896250",
    "typeGen": "aHelmet",
    "ID": "62",
    "Type": "Helmet",
    "lvReqToEquip": "100",
    "Class": "Archer",
    "Weapon_Power": "1",
    "STR": "7",
    "AGI": "23",
    "Defence": "47",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "miscUp1": "6% Movement Speed",
    "recipeData": {
      "recipe": [
        ["Refinery4", "500"],
        ["EquipmentHats54", "1"]
      ],
      "levelReqToCraft": "48",
      "expGiven": "750000",
      "no": 51,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Refinery4", "500"],
      [0, "EquipmentHats54", "1"],
      [1, "Refinery3", "500"],
      [1, "EquipmentHats53", "2"],
      [2, "Critter1", "10000"],
      [2, "EquipmentHats19", "4"],
      [3, "Fish3", "9000"],
      [3, "EquipmentHats18", "16"],
      [4, "IronBar", "2000"],
      [4, "Forest1", "4800"],
      [3, "PlatBar", "3000"],
      [2, "DementiaBar", "600"],
      [1, "VoidBar", "1000"],
      [1, "PureWater2", "5"]
    ],
    "detRecipeTotals": [
      ["Refinery4", 500],
      ["Refinery3", 500],
      ["VoidBar", 1000],
      ["PureWater2", 5],
      ["Critter1", 10000],
      ["DementiaBar", 600],
      ["Fish3", 9000],
      ["PlatBar", 3000],
      ["IronBar", 2000],
      ["Forest1", 4800]
    ],
    "notes": " "
  },
  "EquipmentHats16": {
    "displayName": "Top Hat",
    "sellPrice": "2320",
    "typeGen": "aHelmet",
    "ID": "19",
    "Type": "Helmet",
    "lvReqToEquip": "10",
    "Class": "Mage",
    "WIS": "8",
    "LUK": "1",
    "Defence": "7",
    "Upgrade_Slots_Left": "2",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [
      ["EquipmentHats26", "5", "Crafting"],
      ["Plan-it Express", "Lots", "Post Office"]
    ],
    "recipeData": {
      "recipe": [
        ["IronBar", "25"],
        ["OakTree", "200"],
        ["EquipmentHats17", "2"]
      ],
      "levelReqToCraft": "10",
      "expGiven": "300",
      "no": 23,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "IronBar", "25"],
      [0, "OakTree", "200"],
      [0, "EquipmentHats17", "2"],
      [1, "CopperBar", "60"],
      [1, "Grasslands3", "100"]
    ],
    "detRecipeTotals": [
      ["IronBar", 25],
      ["OakTree", 200],
      ["CopperBar", 60],
      ["Grasslands3", 100]
    ],
    "notes": " "
  },
  "EquipmentHats26": {
    "displayName": "Witch Hat",
    "sellPrice": "131720",
    "typeGen": "aHelmet",
    "ID": "30",
    "Type": "Helmet",
    "lvReqToEquip": "40",
    "Class": "Mage",
    "AGI": "1",
    "WIS": "16",
    "Defence": "15",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "recipeData": {
      "recipe": [
        ["EquipmentHats16", "5"],
        ["Sewers1", "4000"],
        ["DesertA1b", "2"]
      ],
      "levelReqToCraft": "24",
      "expGiven": "7450",
      "no": 48,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "EquipmentHats16", "5"],
      [1, "IronBar", "125"],
      [1, "OakTree", "1000"],
      [1, "EquipmentHats17", "10"],
      [2, "CopperBar", "300"],
      [2, "Grasslands3", "500"],
      [0, "Sewers1", "4000"],
      [0, "DesertA1b", "2"]
    ],
    "detRecipeTotals": [
      ["Sewers1", 4000],
      ["DesertA1b", 2],
      ["IronBar", 125],
      ["OakTree", 1000],
      ["CopperBar", 300],
      ["Grasslands3", 500]
    ],
    "notes": " "
  },
  "EquipmentHats60": {
    "displayName": "Adornment of the High Priest",
    "sellPrice": "8896250",
    "typeGen": "aHelmet",
    "ID": "63",
    "Type": "Helmet",
    "lvReqToEquip": "100",
    "Class": "Mage",
    "Weapon_Power": "1",
    "AGI": "5",
    "WIS": "25",
    "Defence": "40",
    "Upgrade_Slots_Left": "5",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "miscUp1": "30% Crit Damage",
    "recipeData": {
      "recipe": [
        ["Refinery4", "500"],
        ["EquipmentHats54", "1"]
      ],
      "levelReqToCraft": "48",
      "expGiven": "750000",
      "no": 52,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Refinery4", "500"],
      [0, "EquipmentHats54", "1"],
      [1, "Refinery3", "500"],
      [1, "EquipmentHats53", "2"],
      [2, "Critter1", "10000"],
      [2, "EquipmentHats19", "4"],
      [3, "Fish3", "9000"],
      [3, "EquipmentHats18", "16"],
      [4, "IronBar", "2000"],
      [4, "Forest1", "4800"],
      [3, "PlatBar", "3000"],
      [2, "DementiaBar", "600"],
      [1, "VoidBar", "1000"],
      [1, "PureWater2", "5"]
    ],
    "detRecipeTotals": [
      ["Refinery4", 500],
      ["Refinery3", 500],
      ["VoidBar", 1000],
      ["PureWater2", 5],
      ["Critter1", 10000],
      ["DementiaBar", 600],
      ["Fish3", 9000],
      ["PlatBar", 3000],
      ["IronBar", 2000],
      ["Forest1", 4800]
    ],
    "notes": " "
  },
  "EquipmentPunching1": {
    "displayName": "Boxing Gloves",
    "sellPrice": "16",
    "typeGen": "aWeapon",
    "ID": "1",
    "Type": "Fisticuff",
    "lvReqToEquip": "2",
    "Class": "All",
    "Speed": "5",
    "Reach": "55",
    "Weapon_Power": "4",
    "STR": "2",
    "LUK": "2",
    "sources": ["Smithing", "Recipe from Start"],
    "recipeData": {
      "recipe": [
        ["CraftMat2", "1"],
        ["CraftMat3", "5"]
      ],
      "levelReqToCraft": "1",
      "expGiven": "3",
      "no": 1,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "CraftMat2", "1"],
      [0, "CraftMat3", "5"]
    ],
    "detRecipeTotals": [
      ["CraftMat2", 1],
      ["CraftMat3", 5]
    ],
    "notes": "This item is required for the task [[Tasks/Blunder_Hills#Such Rock Very Dog Wow|Such Rock Very Dog Wow 3]] and the quest [[Carpetiem#Quest Information for Carpetiem|Be like Buster!]]"
  },
  "EquipmentPunching2": {
    "displayName": "The Stingers",
    "sellPrice": "530",
    "typeGen": "aWeapon",
    "ID": "2",
    "Type": "Fisticuff",
    "lvReqToEquip": "6",
    "Class": "All",
    "Speed": "5",
    "Reach": "60",
    "Weapon_Power": "11",
    "STR": "5",
    "LUK": "5",
    "Upgrade_Slots_Left": "2",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [["EquipmentPunching3", "5", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["CopperBar", "20"],
        ["OakTree", "75"],
        ["CraftMat5", "20"]
      ],
      "levelReqToCraft": "6",
      "expGiven": "15",
      "no": 14,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "CopperBar", "20"],
      [0, "OakTree", "75"],
      [0, "CraftMat5", "20"]
    ],
    "detRecipeTotals": [
      ["CopperBar", 20],
      ["OakTree", 75],
      ["CraftMat5", 20]
    ],
    "notes": " "
  },
  "EquipmentPunching3": {
    "displayName": "Bandage Wraps",
    "sellPrice": "47650",
    "typeGen": "aWeapon",
    "ID": "3",
    "Type": "Fisticuff",
    "lvReqToEquip": "25",
    "Class": "Beginner",
    "Speed": "7",
    "Reach": "65",
    "Weapon_Power": "20",
    "STR": "6",
    "LUK": "10",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [
      ["EquipmentRings16", "1", "Crafting"],
      ["EquipmentPunching4", "3", "Crafting"],
      ["Plan-it Express", "Lots", "Post Office"]
    ],
    "recipeData": {
      "recipe": [
        ["CraftMat3", "5000"],
        ["EquipmentPunching2", "5"],
        ["ToiletTree", "2000"]
      ],
      "levelReqToCraft": "18",
      "expGiven": "3300",
      "no": 5,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "CraftMat3", "5000"],
      [0, "EquipmentPunching2", "5"],
      [1, "CopperBar", "100"],
      [1, "OakTree", "375"],
      [1, "CraftMat5", "100"],
      [0, "ToiletTree", "2000"]
    ],
    "detRecipeTotals": [
      ["CraftMat3", 5000],
      ["ToiletTree", 2000],
      ["CopperBar", 100],
      ["OakTree", 375],
      ["CraftMat5", 100]
    ],
    "notes": " "
  },
  "EquipmentPunching4": {
    "displayName": "Uninflated Glove",
    "sellPrice": "15192950",
    "typeGen": "aWeapon",
    "ID": "4",
    "Type": "Fisticuff",
    "lvReqToEquip": "50",
    "Class": "Beginner",
    "Speed": "8",
    "Reach": "65",
    "Weapon_Power": "27",
    "LUK": "13",
    "Upgrade_Slots_Left": "4",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["EquipmentShirts31", "2", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["SnowA2", "70000"],
        ["EquipmentPunching3", "3"]
      ],
      "levelReqToCraft": "40",
      "expGiven": "3",
      "no": 5,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "SnowA2", "70000"],
      [0, "EquipmentPunching3", "3"],
      [1, "CraftMat3", "15000"],
      [1, "EquipmentPunching2", "15"],
      [2, "CopperBar", "300"],
      [2, "OakTree", "1125"],
      [2, "CraftMat5", "300"],
      [1, "ToiletTree", "6000"]
    ],
    "detRecipeTotals": [
      ["SnowA2", 70000],
      ["CraftMat3", 15000],
      ["ToiletTree", 6000],
      ["CopperBar", 300],
      ["OakTree", 1125],
      ["CraftMat5", 300]
    ],
    "notes": " "
  },
  "EquipmentPunching5": {
    "displayName": "Eclectic Ordeal",
    "sellPrice": "317500",
    "typeGen": "aWeapon",
    "ID": "5",
    "Type": "Fisticuff",
    "lvReqToEquip": "85",
    "Class": "Beginner",
    "Speed": "9",
    "Reach": "85",
    "Weapon_Power": "32",
    "LUK": "17",
    "Upgrade_Slots_Left": "4",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "miscUp1": "5% Crit Chance",
    "recipeData": {
      "recipe": [
        ["SnowA2a", "100"],
        ["Critter5A", "50"],
        ["Quest36", "10"],
        ["PureWater2", "15"]
      ],
      "levelReqToCraft": "45",
      "expGiven": "500000",
      "no": 29,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "SnowA2a", "100"],
      [0, "Critter5A", "50"],
      [0, "Quest36", "10"],
      [1, "Quest37", "10"],
      [1, "GoldBar", "800"],
      [1, "DesertC2b", "10"],
      [0, "PureWater2", "15"]
    ],
    "detRecipeTotals": [
      ["SnowA2a", 100],
      ["Critter5A", 50],
      ["PureWater2", 15],
      ["Quest37", 10],
      ["GoldBar", 800],
      ["DesertC2b", 10]
    ]
  },
  "TestObj1": {
    "displayName": "Wooden Spear",
    "sellPrice": "145",
    "typeGen": "aWeapon",
    "ID": "4",
    "Type": "Spear",
    "lvReqToEquip": "4",
    "Class": "All",
    "Speed": "5",
    "Reach": "70",
    "Weapon_Power": "7",
    "STR": "3",
    "WIS": "1",
    "Upgrade_Slots_Left": "1",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [
      ["EquipmentPendant10", "3", "Crafting"],
      ["Plan-it Express", "Lots", "Post Office"]
    ],
    "recipeData": {
      "recipe": [
        ["Grasslands1", "25"],
        ["CopperBar", "10"]
      ],
      "levelReqToCraft": "3",
      "expGiven": "5",
      "no": 2,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "Grasslands1", "25"],
      [0, "CopperBar", "10"]
    ],
    "detRecipeTotals": [
      ["Grasslands1", 25],
      ["CopperBar", 10]
    ],
    "notes": " "
  },
  "TestObj7": {
    "displayName": "Steel Axe",
    "sellPrice": "4375",
    "typeGen": "aWeapon",
    "ID": "6",
    "Type": "Spear",
    "lvReqToEquip": "11",
    "Class": "Warrior",
    "Speed": "5",
    "Reach": "62",
    "Weapon_Power": "14",
    "STR": "7",
    "WIS": "3",
    "Upgrade_Slots_Left": "2",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [
      ["EquipmentShirts20", "1", "Crafting"],
      ["TestObj3", "3", "Crafting"],
      ["U Cool?", "1", "Quests"],
      ["StampA19", "Lots", "Stamps"]
    ],
    "recipeData": {
      "recipe": [
        ["Jungle1", "125"],
        ["CraftMat6", "125"]
      ],
      "levelReqToCraft": "12",
      "expGiven": "270",
      "no": 25,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Jungle1", "125"],
      [0, "CraftMat6", "125"]
    ],
    "detRecipeTotals": [
      ["Jungle1", 125],
      ["CraftMat6", 125]
    ],
    "notes": " "
  },
  "TestObj3": {
    "displayName": "Royal Bayonet",
    "sellPrice": "26025",
    "typeGen": "aWeapon",
    "ID": "3",
    "Type": "Spear",
    "lvReqToEquip": "30",
    "Class": "Warrior",
    "Speed": "5",
    "Reach": "95",
    "Weapon_Power": "20",
    "STR": "10",
    "WIS": "2",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [
      ["EquipmentSword1", "2", "Crafting"],
      ["Plan-it Express", "Lots", "Post Office"]
    ],
    "recipeData": {
      "recipe": [
        ["ForestTree", "1250"],
        ["TestObj7", "3"],
        ["PureWater", "8"]
      ],
      "levelReqToCraft": "17",
      "expGiven": "1900",
      "no": 6,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "ForestTree", "1250"],
      [0, "TestObj7", "3"],
      [1, "Jungle1", "375"],
      [1, "CraftMat6", "375"],
      [0, "PureWater", "8"]
    ],
    "detRecipeTotals": [
      ["ForestTree", 1250],
      ["PureWater", 8],
      ["Jungle1", 375],
      ["CraftMat6", 375]
    ],
    "notes": " "
  },
  "EquipmentSword1": {
    "displayName": "Enforced Slasher",
    "sellPrice": "202290",
    "typeGen": "aWeapon",
    "ID": "7",
    "Type": "Spear",
    "lvReqToEquip": "50",
    "Class": "Warrior",
    "Speed": "5",
    "Reach": "80",
    "Weapon_Power": "26",
    "STR": "11",
    "WIS": "4",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["EquipmentSword2", "2", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["DesertA3b", "3"],
        ["CraftMat9", "2500"],
        ["TestObj3", "2"]
      ],
      "levelReqToCraft": "23",
      "expGiven": "10000",
      "no": 26,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "DesertA3b", "3"],
      [0, "CraftMat9", "2500"],
      [0, "TestObj3", "2"],
      [1, "ForestTree", "2500"],
      [1, "TestObj7", "6"],
      [2, "Jungle1", "750"],
      [2, "CraftMat6", "750"],
      [1, "PureWater", "16"]
    ],
    "detRecipeTotals": [
      ["DesertA3b", 3],
      ["CraftMat9", 2500],
      ["ForestTree", 2500],
      ["PureWater", 16],
      ["Jungle1", 750],
      ["CraftMat6", 750]
    ],
    "notes": " "
  },
  "EquipmentSword2": {
    "displayName": "The Ice Breaker",
    "sellPrice": "5794580",
    "typeGen": "aWeapon",
    "ID": "8",
    "Type": "Spear",
    "lvReqToEquip": "75",
    "Class": "Warrior",
    "Speed": "5",
    "Reach": "76",
    "Weapon_Power": "33",
    "STR": "13",
    "WIS": "6",
    "Upgrade_Slots_Left": "4",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["EquipmentSword3", "3", "Crafting"]],
    "miscUp1": "5% Crit Damage",
    "recipeData": {
      "recipe": [
        ["SnowA2", "25000"],
        ["EquipmentSword1", "2"],
        ["Refinery1", "150"]
      ],
      "levelReqToCraft": "39",
      "expGiven": "200000",
      "no": 6,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "SnowA2", "25000"],
      [0, "EquipmentSword1", "2"],
      [1, "DesertA3b", "6"],
      [1, "CraftMat9", "5000"],
      [1, "TestObj3", "4"],
      [2, "ForestTree", "5000"],
      [2, "TestObj7", "12"],
      [3, "Jungle1", "1500"],
      [3, "CraftMat6", "1500"],
      [2, "PureWater", "32"],
      [0, "Refinery1", "150"]
    ],
    "detRecipeTotals": [
      ["SnowA2", 25000],
      ["Refinery1", 150],
      ["DesertA3b", 6],
      ["CraftMat9", 5000],
      ["ForestTree", 5000],
      ["PureWater", 32],
      ["Jungle1", 1500],
      ["CraftMat6", 1500]
    ],
    "notes": " "
  },
  "EquipmentSword3": {
    "displayName": "Deuscythe",
    "sellPrice": "17484135",
    "typeGen": "aWeapon",
    "ID": "9",
    "Type": "Spear",
    "lvReqToEquip": "90",
    "Class": "Warrior",
    "Speed": "6",
    "Reach": "88",
    "Weapon_Power": "40",
    "STR": "20",
    "Upgrade_Slots_Left": "4",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "miscUp1": "5% Crit Damage",
    "recipeData": {
      "recipe": [
        ["SnowC4a", "10"],
        ["Critter6A", "15"],
        ["EquipmentSword2", "3"],
        ["PureWater2", "7"]
      ],
      "levelReqToCraft": "45",
      "expGiven": "450000",
      "no": 30,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "SnowC4a", "10"],
      [0, "Critter6A", "15"],
      [0, "EquipmentSword2", "3"],
      [1, "SnowA2", "75000"],
      [1, "EquipmentSword1", "6"],
      [2, "DesertA3b", "18"],
      [2, "CraftMat9", "15000"],
      [2, "TestObj3", "12"],
      [3, "ForestTree", "15000"],
      [3, "TestObj7", "36"],
      [4, "Jungle1", "4500"],
      [4, "CraftMat6", "4500"],
      [3, "PureWater", "96"],
      [1, "Refinery1", "450"],
      [0, "PureWater2", "7"]
    ],
    "detRecipeTotals": [
      ["SnowC4a", 10],
      ["Critter6A", 15],
      ["PureWater2", 7],
      ["SnowA2", 75000],
      ["Refinery1", 450],
      ["DesertA3b", 18],
      ["CraftMat9", 15000],
      ["ForestTree", 15000],
      ["PureWater", 96],
      ["Jungle1", 4500],
      ["CraftMat6", 4500]
    ],
    "notes": " "
  },
  "TestObj4": {
    "displayName": "Frozen Impaler",
    "sellPrice": "120",
    "typeGen": "aWeapon",
    "ID": "99",
    "Type": "Spear",
    "lvReqToEquip": "45",
    "Class": "Warrior",
    "Speed": "3",
    "Reach": "100",
    "Weapon_Power": "66",
    "STR": "4",
    "AGI": "2",
    "WIS": "9",
    "LUK": "2",
    "Upgrade_Slots_Left": "2",
    "notes": " "
  },
  "TestObj5": {
    "displayName": "Blood Screamer",
    "sellPrice": "200",
    "typeGen": "aWeapon",
    "ID": "2",
    "Type": "Spear",
    "lvReqToEquip": "55",
    "Class": "Warrior",
    "Speed": "4",
    "Reach": "84",
    "Weapon_Power": "87",
    "STR": "5",
    "AGI": "15",
    "WIS": "5",
    "LUK": "5",
    "Upgrade_Slots_Left": "2",
    "notes": " "
  },
  "TestObj8": {
    "displayName": "Flaming Katana",
    "sellPrice": "200",
    "typeGen": "aWeapon",
    "ID": "99",
    "Type": "Sword",
    "lvReqToEquip": "85",
    "Class": "Warrior",
    "Speed": "7",
    "Reach": "74",
    "Weapon_Power": "36",
    "WIS": "6",
    "LUK": "8",
    "Upgrade_Slots_Left": "2",
    "notes": " "
  },
  "TestObj9": {
    "displayName": "Emerald Eizon",
    "sellPrice": "200",
    "typeGen": "aWeapon",
    "ID": "99",
    "Type": "Sword",
    "lvReqToEquip": "95",
    "Class": "Warrior",
    "Speed": "7",
    "Reach": "76",
    "Weapon_Power": "45",
    "WIS": "3",
    "LUK": "2",
    "Upgrade_Slots_Left": "2",
    "notes": " "
  },
  "TestObj10": {
    "displayName": "Stalagmite",
    "sellPrice": "200",
    "typeGen": "aWeapon",
    "ID": "99",
    "Type": "Sword",
    "lvReqToEquip": "155",
    "Class": "Warrior",
    "Speed": "8",
    "Reach": "78",
    "Weapon_Power": "55",
    "STR": "10",
    "AGI": "5",
    "WIS": "6",
    "Upgrade_Slots_Left": "2",
    "notes": " "
  },
  "EquipmentWeapons1": {
    "displayName": "Iron Sword",
    "sellPrice": "200",
    "typeGen": "aWeapon",
    "ID": "1",
    "Type": "Spear",
    "lvReqToEquip": "1",
    "Class": "Warrior",
    "Speed": "9",
    "Reach": "78",
    "Weapon_Power": "25",
    "STR": "3",
    "LUK": "1",
    "Upgrade_Slots_Left": "2",
    "notes": " "
  },
  "TestObj2": {
    "displayName": "Steel Spear",
    "sellPrice": "223400",
    "typeGen": "aWeapon",
    "ID": "99",
    "Type": "Spear",
    "lvReqToEquip": "25",
    "Class": "Warrior",
    "Speed": "2",
    "Reach": "90",
    "Weapon_Power": "40",
    "STR": "2",
    "WIS": "3",
    "LUK": "1",
    "Upgrade_Slots_Left": "2",
    "notes": " "
  },
  "EquipmentBows1": {
    "displayName": "Wooden Bow",
    "sellPrice": "165",
    "typeGen": "aWeapon",
    "ID": "1",
    "Type": "Bow",
    "lvReqToEquip": "1",
    "Class": "All",
    "Speed": "5",
    "Reach": "150",
    "Weapon_Power": "7",
    "STR": "2",
    "AGI": "3",
    "Upgrade_Slots_Left": "1",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [["EquipmentPendant10", "3", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["Grasslands1", "25"],
        ["CraftMat1", "30"]
      ],
      "levelReqToCraft": "3",
      "expGiven": "8",
      "no": 3,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "Grasslands1", "25"],
      [0, "CraftMat1", "30"]
    ],
    "detRecipeTotals": [
      ["Grasslands1", 25],
      ["CraftMat1", 30]
    ],
    "notes": " "
  },
  "EquipmentBows3": {
    "displayName": "Birch Longbow",
    "sellPrice": "2000",
    "typeGen": "aWeapon",
    "ID": "4",
    "Type": "Bow",
    "lvReqToEquip": "12",
    "Class": "Archer",
    "Speed": "6",
    "Reach": "170",
    "Weapon_Power": "12",
    "STR": "4",
    "AGI": "5",
    "Upgrade_Slots_Left": "2",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [
      ["EquipmentBows5", "3", "Crafting"],
      ["Plan-it Express", "Lots", "Post Office"],
      ["U Cool?", "1", "Quests"]
    ],
    "recipeData": {
      "recipe": [
        ["Jungle1", "125"],
        ["BirchTree", "250"]
      ],
      "levelReqToCraft": "12",
      "expGiven": "270",
      "no": 26,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Jungle1", "125"],
      [0, "BirchTree", "250"]
    ],
    "detRecipeTotals": [
      ["Jungle1", 125],
      ["BirchTree", 250]
    ],
    "notes": " "
  },
  "EquipmentBows4": {
    "displayName": "Carrot Launcher",
    "sellPrice": "5000",
    "typeGen": "aWeapon",
    "ID": "3",
    "Type": "Bow",
    "lvReqToEquip": "18",
    "Class": "Archer",
    "Speed": "2",
    "Reach": "225",
    "Weapon_Power": "22",
    "AGI": "8",
    "Upgrade_Slots_Left": "2",
    "sources": ["Carrotman"],
    "detdrops": [["Carrotman", "0.00004", "1"]],
    "uses": [
      ["BadgeG3", "2", "Crafting"],
      ["Plan-it Express", "Lots", "Post Office"]
    ],
    "notes": " "
  },
  "EquipmentBows5": {
    "displayName": "Spiked Menace",
    "sellPrice": "35150",
    "typeGen": "aWeapon",
    "ID": "5",
    "Type": "Bow",
    "lvReqToEquip": "30",
    "Class": "Archer",
    "Speed": "6",
    "Reach": "175",
    "Weapon_Power": "17",
    "STR": "5",
    "AGI": "8",
    "LUK": "3",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [
      ["EquipmentBows6", "2", "Crafting"],
      ["Plan-it Express", "Lots", "Post Office"]
    ],
    "recipeData": {
      "recipe": [
        ["GoldBar", "250"],
        ["EquipmentBows3", "3"],
        ["PureWater", "8"]
      ],
      "levelReqToCraft": "17",
      "expGiven": "1900",
      "no": 7,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "GoldBar", "250"],
      [0, "EquipmentBows3", "3"],
      [1, "Jungle1", "375"],
      [1, "BirchTree", "750"],
      [0, "PureWater", "8"]
    ],
    "detRecipeTotals": [
      ["GoldBar", 250],
      ["PureWater", 8],
      ["Jungle1", 375],
      ["BirchTree", 750]
    ],
    "notes": " "
  },
  "EquipmentBows6": {
    "displayName": "Pharoah Bow",
    "sellPrice": "95770",
    "typeGen": "aWeapon",
    "ID": "6",
    "Type": "Bow",
    "lvReqToEquip": "50",
    "Class": "Archer",
    "Speed": "6",
    "Reach": "200",
    "Weapon_Power": "23",
    "STR": "1",
    "AGI": "13",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [
      ["EquipmentRings16", "1", "Crafting"],
      ["EquipmentBows7", "2", "Crafting"],
      ["Plan-it Express", "Lots", "Post Office"]
    ],
    "recipeData": {
      "recipe": [
        ["TreeInterior1b", "3"],
        ["Fish4", "1400"],
        ["EquipmentBows5", "2"]
      ],
      "levelReqToCraft": "23",
      "expGiven": "10000",
      "no": 27,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "TreeInterior1b", "3"],
      [0, "Fish4", "1400"],
      [0, "EquipmentBows5", "2"],
      [1, "GoldBar", "500"],
      [1, "EquipmentBows3", "6"],
      [2, "Jungle1", "750"],
      [2, "BirchTree", "1500"],
      [1, "PureWater", "16"]
    ],
    "detRecipeTotals": [
      ["TreeInterior1b", 3],
      ["Fish4", 1400],
      ["GoldBar", 500],
      ["PureWater", 16],
      ["Jungle1", 750],
      ["BirchTree", 1500]
    ],
    "notes": " "
  },
  "EquipmentBows7": {
    "displayName": "Blizzard Bow",
    "sellPrice": "227540",
    "typeGen": "aWeapon",
    "ID": "7",
    "Type": "Bow",
    "lvReqToEquip": "75",
    "Class": "Archer",
    "Speed": "6",
    "Reach": "205",
    "Weapon_Power": "30",
    "AGI": "15",
    "Upgrade_Slots_Left": "4",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["EquipmentBows8", "3", "Crafting"]],
    "miscUp1": "5% Crit Damage",
    "recipeData": {
      "recipe": [
        ["Soul1", "7000"],
        ["EquipmentBows6", "2"],
        ["Refinery1", "150"]
      ],
      "levelReqToCraft": "39",
      "expGiven": "200000",
      "no": 7,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Soul1", "7000"],
      [0, "EquipmentBows6", "2"],
      [1, "TreeInterior1b", "6"],
      [1, "Fish4", "2800"],
      [1, "EquipmentBows5", "4"],
      [2, "GoldBar", "1000"],
      [2, "EquipmentBows3", "12"],
      [3, "Jungle1", "1500"],
      [3, "BirchTree", "3000"],
      [2, "PureWater", "32"],
      [0, "Refinery1", "150"]
    ],
    "detRecipeTotals": [
      ["Soul1", 7000],
      ["Refinery1", 150],
      ["TreeInterior1b", 6],
      ["Fish4", 2800],
      ["GoldBar", 1000],
      ["PureWater", 32],
      ["Jungle1", 1500],
      ["BirchTree", 3000]
    ],
    "notes": " "
  },
  "EquipmentBows8": {
    "displayName": "Blackhole Bow",
    "sellPrice": "757970",
    "typeGen": "aWeapon",
    "ID": "2",
    "Type": "Bow",
    "lvReqToEquip": "90",
    "Class": "Archer",
    "Speed": "7",
    "Reach": "230",
    "Weapon_Power": "36",
    "STR": "10",
    "AGI": "13",
    "Upgrade_Slots_Left": "4",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "miscUp1": "5% Crit Damage",
    "recipeData": {
      "recipe": [
        ["SnowC4a", "4"],
        ["Refinery3", "350"],
        ["EquipmentBows7", "3"],
        ["PureWater2", "7"]
      ],
      "levelReqToCraft": "45",
      "expGiven": "450000",
      "no": 31,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "SnowC4a", "4"],
      [0, "Refinery3", "350"],
      [0, "EquipmentBows7", "3"],
      [1, "Soul1", "21000"],
      [1, "EquipmentBows6", "6"],
      [2, "TreeInterior1b", "18"],
      [2, "Fish4", "8400"],
      [2, "EquipmentBows5", "12"],
      [3, "GoldBar", "3000"],
      [3, "EquipmentBows3", "36"],
      [4, "Jungle1", "4500"],
      [4, "BirchTree", "9000"],
      [3, "PureWater", "96"],
      [1, "Refinery1", "450"],
      [0, "PureWater2", "7"]
    ],
    "detRecipeTotals": [
      ["SnowC4a", 4],
      ["Refinery3", 350],
      ["PureWater2", 7],
      ["Soul1", 21000],
      ["Refinery1", 450],
      ["TreeInterior1b", 18],
      ["Fish4", 8400],
      ["GoldBar", 3000],
      ["PureWater", 96],
      ["Jungle1", 4500],
      ["BirchTree", 9000]
    ],
    "notes": " "
  },
  "EquipmentWands1": {
    "displayName": "Gnarled Wand",
    "sellPrice": "135",
    "typeGen": "aWeapon",
    "ID": "3",
    "Type": "Wand",
    "lvReqToEquip": "4",
    "Class": "All",
    "Speed": "5",
    "Reach": "115",
    "Weapon_Power": "7",
    "WIS": "4",
    "Upgrade_Slots_Left": "1",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [["EquipmentPendant10", "3", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["Grasslands1", "25"],
        ["OakTree", "30"]
      ],
      "levelReqToCraft": "3",
      "expGiven": "12",
      "no": 4,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "Grasslands1", "25"],
      [0, "OakTree", "30"]
    ],
    "detRecipeTotals": [
      ["Grasslands1", 25],
      ["OakTree", 30]
    ],
    "notes": " "
  },
  "EquipmentWands2": {
    "displayName": "Quarterstaff",
    "sellPrice": "1950",
    "typeGen": "aWeapon",
    "ID": "1",
    "Type": "Wand",
    "lvReqToEquip": "12",
    "Class": "Mage",
    "Speed": "4",
    "Reach": "120",
    "Weapon_Power": "16",
    "WIS": "9",
    "Upgrade_Slots_Left": "2",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [
      ["EquipmentWands5", "3", "Crafting"],
      ["U Cool?", "1", "Quests"]
    ],
    "recipeData": {
      "recipe": [
        ["Jungle1", "125"],
        ["CopperBar", "100"]
      ],
      "levelReqToCraft": "12",
      "expGiven": "270",
      "no": 27,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Jungle1", "125"],
      [0, "CopperBar", "100"]
    ],
    "detRecipeTotals": [
      ["Jungle1", 125],
      ["CopperBar", 100]
    ],
    "notes": " "
  },
  "EquipmentWands5": {
    "displayName": "Starlight",
    "sellPrice": "46250",
    "typeGen": "aWeapon",
    "ID": "5",
    "Type": "Wand",
    "lvReqToEquip": "30",
    "Class": "Mage",
    "Speed": "4",
    "Reach": "145",
    "Weapon_Power": "23",
    "AGI": "1",
    "WIS": "11",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [
      ["EquipmentWands6", "2", "Crafting"],
      ["Plan-it Express", "Lots", "Post Office"]
    ],
    "recipeData": {
      "recipe": [
        ["CraftMat7", "1000"],
        ["EquipmentWands2", "3"],
        ["PureWater", "8"]
      ],
      "levelReqToCraft": "17",
      "expGiven": "1900",
      "no": 8,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "CraftMat7", "1000"],
      [0, "EquipmentWands2", "3"],
      [1, "Jungle1", "375"],
      [1, "CopperBar", "300"],
      [0, "PureWater", "8"]
    ],
    "detRecipeTotals": [
      ["CraftMat7", 1000],
      ["PureWater", 8],
      ["Jungle1", 375],
      ["CopperBar", 300]
    ],
    "notes": " "
  },
  "EquipmentWands6": {
    "displayName": "Crows Nest",
    "sellPrice": "174000",
    "typeGen": "aWeapon",
    "ID": "4",
    "Type": "Wand",
    "lvReqToEquip": "50",
    "Class": "Mage",
    "Speed": "5",
    "Reach": "160",
    "Weapon_Power": "30",
    "AGI": "5",
    "WIS": "9",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["EquipmentWands3", "2", "Crafting"]],
    "miscUp1": "5% Movement Speed",
    "recipeData": {
      "recipe": [
        ["Sewers1b", "3"],
        ["Bug4", "4000"],
        ["EquipmentWands5", "2"]
      ],
      "levelReqToCraft": "23",
      "expGiven": "10000",
      "no": 28,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Sewers1b", "3"],
      [0, "Bug4", "4000"],
      [0, "EquipmentWands5", "2"],
      [1, "CraftMat7", "2000"],
      [1, "EquipmentWands2", "6"],
      [2, "Jungle1", "750"],
      [2, "CopperBar", "600"],
      [1, "PureWater", "16"]
    ],
    "detRecipeTotals": [
      ["Sewers1b", 3],
      ["Bug4", 4000],
      ["CraftMat7", 2000],
      ["PureWater", 16],
      ["Jungle1", 750],
      ["CopperBar", 600]
    ],
    "notes": " "
  },
  "EquipmentWands3": {
    "displayName": "Spriggly Storm",
    "sellPrice": "663000",
    "typeGen": "aWeapon",
    "ID": "2",
    "Type": "Wand",
    "lvReqToEquip": "75",
    "Class": "Mage",
    "Speed": "5",
    "Reach": "155",
    "Weapon_Power": "36",
    "WIS": "15",
    "LUK": "1",
    "Upgrade_Slots_Left": "4",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["EquipmentWands7", "3", "Crafting"]],
    "miscUp1": "5% Crit Damage",
    "recipeData": {
      "recipe": [
        ["SaharanFoal", "10000"],
        ["EquipmentWands6", "2"],
        ["Refinery1", "150"]
      ],
      "levelReqToCraft": "39",
      "expGiven": "200000",
      "no": 8,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "SaharanFoal", "10000"],
      [0, "EquipmentWands6", "2"],
      [1, "Sewers1b", "6"],
      [1, "Bug4", "8000"],
      [1, "EquipmentWands5", "4"],
      [2, "CraftMat7", "4000"],
      [2, "EquipmentWands2", "12"],
      [3, "Jungle1", "1500"],
      [3, "CopperBar", "1200"],
      [2, "PureWater", "32"],
      [0, "Refinery1", "150"]
    ],
    "detRecipeTotals": [
      ["SaharanFoal", 10000],
      ["Refinery1", 150],
      ["Sewers1b", 6],
      ["Bug4", 8000],
      ["CraftMat7", 4000],
      ["PureWater", 32],
      ["Jungle1", 1500],
      ["CopperBar", 1200]
    ],
    "notes": " "
  },
  "EquipmentWands7": {
    "displayName": "Grey Gatsby",
    "sellPrice": "2309350",
    "typeGen": "aWeapon",
    "ID": "6",
    "Type": "Wand",
    "lvReqToEquip": "90",
    "Class": "Mage",
    "Speed": "6",
    "Reach": "170",
    "Weapon_Power": "43",
    "AGI": "10",
    "WIS": "13",
    "LUK": "1",
    "Upgrade_Slots_Left": "4",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "miscUp1": "5% Crit Damage",
    "recipeData": {
      "recipe": [
        ["SnowC4a", "4"],
        ["Soul4", "8000"],
        ["EquipmentWands3", "3"],
        ["PureWater2", "7"]
      ],
      "levelReqToCraft": "45",
      "expGiven": "450000",
      "no": 32,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "SnowC4a", "4"],
      [0, "Soul4", "8000"],
      [0, "EquipmentWands3", "3"],
      [1, "SaharanFoal", "30000"],
      [1, "EquipmentWands6", "6"],
      [2, "Sewers1b", "18"],
      [2, "Bug4", "24000"],
      [2, "EquipmentWands5", "12"],
      [3, "CraftMat7", "12000"],
      [3, "EquipmentWands2", "36"],
      [4, "Jungle1", "4500"],
      [4, "CopperBar", "3600"],
      [3, "PureWater", "96"],
      [1, "Refinery1", "450"],
      [0, "PureWater2", "7"]
    ],
    "detRecipeTotals": [
      ["SnowC4a", 4],
      ["Soul4", 8000],
      ["PureWater2", 7],
      ["SaharanFoal", 30000],
      ["Refinery1", 450],
      ["Sewers1b", 18],
      ["Bug4", 24000],
      ["CraftMat7", 12000],
      ["PureWater", 96],
      ["Jungle1", 4500],
      ["CopperBar", 3600]
    ],
    "notes": " "
  },
  "EquipmentWands4": {
    "displayName": "Microphone",
    "sellPrice": "200",
    "typeGen": "aWeapon",
    "ID": "2",
    "Type": "Wand",
    "lvReqToEquip": "1",
    "Class": "Mage",
    "Speed": "8",
    "Reach": "160",
    "Weapon_Power": "13",
    "AGI": "5",
    "WIS": "9",
    "Upgrade_Slots_Left": "3",
    "miscUp1": "5% Movement Speed",
    "notes": " "
  },
  "EquipmentShirts1": {
    "displayName": "Orange Tee",
    "sellPrice": "60",
    "typeGen": "aShirt",
    "ID": "3",
    "Type": "Shirt",
    "lvReqToEquip": "2",
    "Class": "All",
    "STR": "2",
    "AGI": "1",
    "Defence": "3",
    "Upgrade_Slots_Left": "1",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [
      ["EquipmentShirts2", "2", "Crafting"],
      ["EquipmentShirts25", "3", "Crafting"],
      ["EquipmentShirts24", "3", "Crafting"],
      ["EquipmentShirts3", "5", "Crafting"]
    ],
    "recipeData": {
      "recipe": [
        ["Grasslands1", "10"],
        ["OakTree", "15"]
      ],
      "levelReqToCraft": "1",
      "expGiven": "5",
      "no": 6,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "Grasslands1", "10"],
      [0, "OakTree", "15"]
    ],
    "detRecipeTotals": [
      ["Grasslands1", 10],
      ["OakTree", 15]
    ],
    "notes": " "
  },
  "EquipmentShirts2": {
    "displayName": "Blue Tee",
    "sellPrice": "295",
    "typeGen": "aShirt",
    "ID": "3",
    "Type": "Shirt",
    "lvReqToEquip": "4",
    "Class": "All",
    "AGI": "1",
    "WIS": "2",
    "Defence": "3",
    "Upgrade_Slots_Left": "2",
    "sources": ["Smithing", "Recipe from The Smithing Grind"],
    "uses": [
      ["EquipmentShirts3", "3", "Crafting"],
      ["Plan-it Express", "Lots", "Post Office"]
    ],
    "recipeData": {
      "recipe": [
        ["Grasslands1", "25"],
        ["OakTree", "50"],
        ["EquipmentShirts1", "2"]
      ],
      "levelReqToCraft": "3",
      "expGiven": "15",
      "no": 37,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["The Smithing Grind"]
    },
    "detrecipe": [
      [0, "Grasslands1", "25"],
      [0, "OakTree", "50"],
      [0, "EquipmentShirts1", "2"],
      [1, "Grasslands1", "20"],
      [1, "OakTree", "30"]
    ],
    "detRecipeTotals": [
      ["Grasslands1", 45],
      ["OakTree", 80]
    ],
    "notes": " "
  },
  "EquipmentShirts16": {
    "displayName": "Spore Tee",
    "sellPrice": "125",
    "typeGen": "aShirt",
    "ID": "3",
    "Type": "Shirt",
    "lvReqToEquip": "1",
    "Class": "All",
    "AGI": "3",
    "Defence": "3",
    "Upgrade_Slots_Left": "1",
    "sources": ["Green Mushroom"],
    "detdrops": [["Green Mushroom", "0.00035", "1"]],
    "uses": [
      ["InvBag102", "2", "Crafting"],
      ["EquipmentShirts24", "2", "Crafting"]
    ],
    "notes": " "
  },
  "EquipmentShirts3": {
    "displayName": "Black Tee",
    "sellPrice": "6105",
    "typeGen": "aShirt",
    "ID": "3",
    "Type": "Shirt",
    "lvReqToEquip": "1",
    "Class": "All",
    "Defence": "5",
    "Upgrade_Slots_Left": "5",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["Plan-it Express", "Lots", "Post Office"]],
    "recipeData": {
      "recipe": [
        ["EquipmentShirts1", "5"],
        ["EquipmentShirts2", "3"],
        ["EquipmentShirts25", "3"],
        ["EquipmentShirts24", "3"]
      ],
      "levelReqToCraft": "9",
      "expGiven": "120",
      "no": 56,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "EquipmentShirts1", "5"],
      [1, "Grasslands1", "50"],
      [1, "OakTree", "75"],
      [0, "EquipmentShirts2", "3"],
      [1, "Grasslands1", "75"],
      [1, "OakTree", "150"],
      [1, "EquipmentShirts1", "6"],
      [2, "Grasslands1", "60"],
      [2, "OakTree", "90"],
      [0, "EquipmentShirts25", "3"],
      [1, "Grasslands4", "120"],
      [1, "BirchTree", "300"],
      [1, "EquipmentShirts1", "9"],
      [2, "Grasslands1", "90"],
      [2, "OakTree", "135"],
      [0, "EquipmentShirts24", "3"],
      [1, "CraftMat1", "450"],
      [1, "EquipmentShirts16", "6"],
      [1, "EquipmentShirts1", "9"],
      [2, "Grasslands1", "90"],
      [2, "OakTree", "135"]
    ],
    "detRecipeTotals": [
      ["Grasslands1", 365],
      ["OakTree", 585],
      ["Grasslands4", 120],
      ["BirchTree", 300],
      ["CraftMat1", 450],
      ["EquipmentShirts16", 6]
    ],
    "notes": " "
  },
  "EquipmentShirts4": {
    "displayName": "Tanned Hide",
    "sellPrice": "200",
    "typeGen": "aShirt",
    "ID": "3",
    "Type": "Shirt",
    "lvReqToEquip": "15",
    "Class": "Archer",
    "Weapon_Power": "5",
    "STR": "3",
    "AGI": "3",
    "LUK": "3",
    "Upgrade_Slots_Left": "2",
    "notes": " "
  },
  "EquipmentShirts6": {
    "displayName": "Paralax Chest",
    "sellPrice": "200",
    "typeGen": "aShirt",
    "ID": "3",
    "Type": "Shirt",
    "lvReqToEquip": "15",
    "Class": "Warrior",
    "Weapon_Power": "5",
    "STR": "3",
    "AGI": "3",
    "LUK": "3",
    "Upgrade_Slots_Left": "2",
    "notes": " "
  },
  "EquipmentShirts7": {
    "displayName": "Molten Chest",
    "sellPrice": "200",
    "typeGen": "aShirt",
    "ID": "3",
    "Type": "Shirt",
    "lvReqToEquip": "15",
    "Class": "Warrior",
    "Weapon_Power": "5",
    "STR": "3",
    "AGI": "3",
    "LUK": "3",
    "Upgrade_Slots_Left": "2",
    "notes": " "
  },
  "EquipmentShirts9": {
    "displayName": "REPLACE ME",
    "sellPrice": "200",
    "typeGen": "aShirt",
    "ID": "3",
    "Type": "Shirt",
    "lvReqToEquip": "15",
    "Class": "All",
    "Weapon_Power": "5",
    "STR": "3",
    "AGI": "3",
    "LUK": "3",
    "Upgrade_Slots_Left": "2",
    "notes": " "
  },
  "EquipmentShirts21": {
    "displayName": "Tattered Cloth",
    "sellPrice": "200",
    "typeGen": "aShirt",
    "ID": "3",
    "Type": "Shirt",
    "lvReqToEquip": "15",
    "Class": "Mage",
    "WIS": "8",
    "LUK": "3",
    "Upgrade_Slots_Left": "2",
    "sources": ["DropTable2"],
    "detdrops": [
      ["Crystal Carrot", "0.005", "1.0"],
      ["Slime", "0.00004", "1.0"],
      ["Baby Boa", "0.00005", "1.0"],
      ["Carrotman", "0.00006", "1.0"],
      ["Amarok", "0.01", "2.0"],
      ["Chaotic Amarok", "0.01", "4.0"],
      ["Nightmare Amarok", "0.01", "2.0"],
      ["Baba Yaga", "0.01", "1.0"],
      ["Dewdrop Silver Chest", "0.01", "1.0"]
    ],
    "uses": [["EquipmentShirts22", "4", "Crafting"]],
    "notes": " "
  },
  "EquipmentShirts10": {
    "displayName": "Fur Shirt",
    "sellPrice": "26000",
    "typeGen": "aShirt",
    "ID": "3",
    "Type": "Shirt",
    "lvReqToEquip": "18",
    "Class": "Archer",
    "STR": "5",
    "AGI": "9",
    "Defence": "13",
    "Upgrade_Slots_Left": "3",
    "sources": [
      "Smithing",
      "Recipe from Glublin",
      "Recipe from Videogame Highscores are COOL!"
    ],
    "uses": [["EquipmentShirts23", "4", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["Forest1", "500"],
        ["IronBar", "500"]
      ],
      "levelReqToCraft": "14",
      "expGiven": "800",
      "no": 45,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Glublin", "Videogame Highscores are COOL!"]
    },
    "detrecipe": [
      [0, "Forest1", "500"],
      [0, "IronBar", "500"]
    ],
    "detRecipeTotals": [
      ["Forest1", 500],
      ["IronBar", 500]
    ],
    "notes": " "
  },
  "EquipmentShirts11": {
    "displayName": "Copper Platebody",
    "sellPrice": "1755",
    "typeGen": "aShirt",
    "ID": "3",
    "Type": "Shirt",
    "lvReqToEquip": "8",
    "Class": "All",
    "STR": "2",
    "AGI": "2",
    "WIS": "2",
    "Defence": "7",
    "Upgrade_Slots_Left": "2",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [
      ["EquipmentShirts20", "2", "Crafting"],
      ["EquipmentShirts13", "5", "Crafting"],
      ["Plan-it Express", "Lots", "Post Office"]
    ],
    "recipeData": {
      "recipe": [
        ["CopperBar", "45"],
        ["CraftMat5", "120"]
      ],
      "levelReqToCraft": "7",
      "expGiven": "55",
      "no": 18,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "CopperBar", "45"],
      [0, "CraftMat5", "120"]
    ],
    "detRecipeTotals": [
      ["CopperBar", 45],
      ["CraftMat5", 120]
    ],
    "notes": " "
  },
  "EquipmentShirts12": {
    "displayName": "Iron Platebody",
    "sellPrice": "8400",
    "typeGen": "aShirt",
    "ID": "3",
    "Type": "Shirt",
    "lvReqToEquip": "15",
    "Class": "All",
    "STR": "3",
    "AGI": "3",
    "WIS": "3",
    "Defence": "12",
    "Upgrade_Slots_Left": "2",
    "sources": ["Dewdrop Golden Chest", "Smithing", "Recipe from Start"],
    "detdrops": [["Dewdrop Golden Chest", "0.04", "1"]],
    "uses": [
      ["EquipmentShirts14", "5", "Crafting"],
      ["StampA15", "Lots", "Stamps"]
    ],
    "miscUp1": "50",
    "recipeData": {
      "recipe": [
        ["IronBar", "150"],
        ["JungleTree", "600"]
      ],
      "levelReqToCraft": "13",
      "expGiven": "600",
      "no": 34,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "IronBar", "150"],
      [0, "JungleTree", "600"]
    ],
    "detRecipeTotals": [
      ["IronBar", 150],
      ["JungleTree", 600]
    ],
    "notes": " "
  },
  "EquipmentShirts13": {
    "displayName": "Gold Platebody",
    "sellPrice": "139025",
    "typeGen": "aShirt",
    "ID": "3",
    "Type": "Shirt",
    "lvReqToEquip": "35",
    "Class": "All",
    "STR": "5",
    "AGI": "5",
    "WIS": "5",
    "Defence": "18",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Start"],
    "recipeData": {
      "recipe": [
        ["DesertA1", "1500"],
        ["EquipmentShirts11", "5"],
        ["GoldBar", "350"]
      ],
      "levelReqToCraft": "16",
      "expGiven": "1400",
      "no": 2,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "DesertA1", "1500"],
      [0, "EquipmentShirts11", "5"],
      [1, "CopperBar", "225"],
      [1, "CraftMat5", "600"],
      [0, "GoldBar", "350"]
    ],
    "detRecipeTotals": [
      ["DesertA1", 1500],
      ["GoldBar", 350],
      ["CopperBar", 225],
      ["CraftMat5", 600]
    ],
    "notes": " "
  },
  "EquipmentShirts18": {
    "displayName": "Amarok Bodyplate",
    "sellPrice": "42300",
    "typeGen": "aShirt",
    "ID": "3",
    "Type": "Shirt",
    "lvReqToEquip": "35",
    "Class": "All",
    "STR": "3",
    "AGI": "3",
    "WIS": "3",
    "Defence": "22",
    "Upgrade_Slots_Left": "5",
    "sources": ["Smithing"],
    "recipeData": {
      "recipe": [
        ["Quest17", "10"],
        ["IronBar", "400"],
        ["Sewers1", "900"]
      ],
      "levelReqToCraft": "21",
      "expGiven": "3000",
      "no": 66,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Blunder Hills Merit Shop"]
    },
    "detrecipe": [
      [0, "Quest17", "10"],
      [0, "IronBar", "400"],
      [0, "Sewers1", "900"]
    ],
    "detRecipeTotals": [
      ["Quest17", 10],
      ["IronBar", 400],
      ["Sewers1", 900]
    ],
    "notes": " "
  },
  "EquipmentShirts14": {
    "displayName": "Platinum Platbody",
    "sellPrice": "1167000",
    "typeGen": "aShirt",
    "ID": "3",
    "Type": "Shirt",
    "lvReqToEquip": "50",
    "Class": "All",
    "STR": "8",
    "AGI": "8",
    "WIS": "8",
    "Defence": "25",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [["EquipmentShirts15", "2", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["DesertB4", "5000"],
        ["EquipmentShirts12", "5"],
        ["PlatBar", "1000"]
      ],
      "levelReqToCraft": "30",
      "expGiven": "36000",
      "no": 22,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "DesertB4", "5000"],
      [0, "EquipmentShirts12", "5"],
      [1, "IronBar", "750"],
      [1, "JungleTree", "3000"],
      [0, "PlatBar", "1000"]
    ],
    "detRecipeTotals": [
      ["DesertB4", 5000],
      ["PlatBar", 1000],
      ["IronBar", 750],
      ["JungleTree", 3000]
    ],
    "notes": " "
  },
  "EquipmentShirts15": {
    "displayName": "Dementia Body",
    "sellPrice": "2862000",
    "typeGen": "aShirt",
    "ID": "3",
    "Type": "Shirt",
    "lvReqToEquip": "70",
    "Class": "All",
    "STR": "10",
    "AGI": "10",
    "WIS": "10",
    "Defence": "35",
    "Upgrade_Slots_Left": "4",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [["EquipmentShirts27", "2", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["Soul1", "1000"],
        ["EquipmentShirts14", "2"],
        ["DementiaBar", "350"]
      ],
      "levelReqToCraft": "37",
      "expGiven": "120000",
      "no": 2,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "Soul1", "1000"],
      [0, "EquipmentShirts14", "2"],
      [1, "DesertB4", "10000"],
      [1, "EquipmentShirts12", "10"],
      [2, "IronBar", "1500"],
      [2, "JungleTree", "6000"],
      [1, "PlatBar", "2000"],
      [0, "DementiaBar", "350"]
    ],
    "detRecipeTotals": [
      ["Soul1", 1000],
      ["DementiaBar", 350],
      ["DesertB4", 10000],
      ["PlatBar", 2000],
      ["IronBar", 1500],
      ["JungleTree", 6000]
    ],
    "notes": " "
  },
  "EquipmentShirts26": {
    "displayName": "Efaunt Ribcage",
    "sellPrice": "4260",
    "typeGen": "aShirt",
    "ID": "3",
    "Type": "Shirt",
    "lvReqToEquip": "80",
    "Class": "All",
    "STR": "5",
    "AGI": "5",
    "WIS": "5",
    "Defence": "30",
    "Upgrade_Slots_Left": "6",
    "sources": ["Smithing"],
    "miscUp1": "4% Mastery",
    "recipeData": {
      "recipe": [
        ["EfauntDrop1", "10"],
        ["MidnightCookie", "10"],
        ["PureWater", "25"]
      ],
      "levelReqToCraft": "39",
      "expGiven": "50000",
      "no": 62,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Yum Yum Desert Merit Shop"]
    },
    "detrecipe": [
      [0, "EfauntDrop1", "10"],
      [0, "MidnightCookie", "10"],
      [0, "PureWater", "25"]
    ],
    "detRecipeTotals": [
      ["EfauntDrop1", 10],
      ["MidnightCookie", 10],
      ["PureWater", 25]
    ],
    "notes": " "
  },
  "EquipmentShirts27": {
    "displayName": "Void Imperium Platebody",
    "sellPrice": "40699200",
    "typeGen": "aShirt",
    "ID": "3",
    "Type": "Shirt",
    "lvReqToEquip": "90",
    "Class": "All",
    "STR": "13",
    "AGI": "13",
    "WIS": "13",
    "Defence": "45",
    "Upgrade_Slots_Left": "4",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [
      ["EquipmentShirts31", "1", "Crafting"],
      ["EquipmentShirts28", "1", "Crafting"],
      ["EquipmentShirts29", "1", "Crafting"],
      ["EquipmentShirts30", "1", "Crafting"]
    ],
    "recipeData": {
      "recipe": [
        ["SnowC3", "75000"],
        ["EquipmentShirts15", "2"],
        ["VoidBar", "500"],
        ["PureWater2", "4"]
      ],
      "levelReqToCraft": "44",
      "expGiven": "300000",
      "no": 26,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "SnowC3", "75000"],
      [0, "EquipmentShirts15", "2"],
      [1, "Soul1", "2000"],
      [1, "EquipmentShirts14", "4"],
      [2, "DesertB4", "20000"],
      [2, "EquipmentShirts12", "20"],
      [3, "IronBar", "3000"],
      [3, "JungleTree", "12000"],
      [2, "PlatBar", "4000"],
      [1, "DementiaBar", "700"],
      [0, "VoidBar", "500"],
      [0, "PureWater2", "4"]
    ],
    "detRecipeTotals": [
      ["SnowC3", 75000],
      ["VoidBar", 500],
      ["PureWater2", 4],
      ["Soul1", 2000],
      ["DementiaBar", 700],
      ["DesertB4", 20000],
      ["PlatBar", 4000],
      ["IronBar", 3000],
      ["JungleTree", 12000]
    ],
    "notes": " "
  },
  "EquipmentShirts17": {
    "displayName": "MCR Tshirt",
    "sellPrice": "200",
    "typeGen": "aShirt",
    "ID": "3",
    "Type": "Shirt",
    "lvReqToEquip": "25",
    "Class": "All",
    "Weapon_Power": "2",
    "AGI": "8",
    "Defence": "1",
    "Upgrade_Slots_Left": "4",
    "sources": ["Shoe Shopping with Sprout"],
    "notes": " "
  },
  "EquipmentShirts19": {
    "displayName": "Planktop",
    "sellPrice": "200",
    "typeGen": "aShirt",
    "ID": "3",
    "Type": "Shirt",
    "lvReqToEquip": "10",
    "Class": "All",
    "STR": "6",
    "Defence": "4",
    "Upgrade_Slots_Left": "3",
    "sources": ["Wode Board"],
    "detdrops": [["Wode Board", "0.00001", "1"]],
    "notes": " "
  },
  "EquipmentShirts20": {
    "displayName": "Hide Shirt",
    "sellPrice": "8860",
    "typeGen": "aShirt",
    "ID": "3",
    "Type": "Shirt",
    "lvReqToEquip": "15",
    "Class": "Warrior",
    "STR": "6",
    "Defence": "4",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["EquipmentShirts5", "4", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["BirchTree", "325"],
        ["EquipmentShirts11", "2"],
        ["TestObj7", "1"]
      ],
      "levelReqToCraft": "14",
      "expGiven": "600",
      "no": 46,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "BirchTree", "325"],
      [0, "EquipmentShirts11", "2"],
      [1, "CopperBar", "90"],
      [1, "CraftMat5", "240"],
      [0, "TestObj7", "1"],
      [1, "Jungle1", "125"],
      [1, "CraftMat6", "125"]
    ],
    "detRecipeTotals": [
      ["BirchTree", 325],
      ["CopperBar", 90],
      ["CraftMat5", 240],
      ["Jungle1", 125],
      ["CraftMat6", 125]
    ],
    "notes": " "
  },
  "EquipmentShirts24": {
    "displayName": "Green Tee",
    "sellPrice": "880",
    "typeGen": "aShirt",
    "ID": "3",
    "Type": "Shirt",
    "lvReqToEquip": "2",
    "Class": "All",
    "LUK": "3",
    "Defence": "4",
    "Upgrade_Slots_Left": "1",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [
      ["EquipmentShirts3", "3", "Crafting"],
      ["Plan-it Express", "Lots", "Post Office"]
    ],
    "recipeData": {
      "recipe": [
        ["CraftMat1", "150"],
        ["EquipmentShirts16", "2"],
        ["EquipmentShirts1", "3"]
      ],
      "levelReqToCraft": "7",
      "expGiven": "60",
      "no": 55,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "CraftMat1", "150"],
      [0, "EquipmentShirts16", "2"],
      [0, "EquipmentShirts1", "3"],
      [1, "Grasslands1", "30"],
      [1, "OakTree", "45"]
    ],
    "detRecipeTotals": [
      ["CraftMat1", 150],
      ["EquipmentShirts16", 2],
      ["Grasslands1", 30],
      ["OakTree", 45]
    ],
    "notes": " "
  },
  "EquipmentShirts25": {
    "displayName": "Purple Tee",
    "sellPrice": "760",
    "typeGen": "aShirt",
    "ID": "3",
    "Type": "Shirt",
    "lvReqToEquip": "2",
    "Class": "All",
    "WIS": "3",
    "Defence": "3",
    "Upgrade_Slots_Left": "1",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["EquipmentShirts3", "3", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["Grasslands4", "40"],
        ["BirchTree", "100"],
        ["EquipmentShirts1", "3"]
      ],
      "levelReqToCraft": "5",
      "expGiven": "30",
      "no": 54,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Grasslands4", "40"],
      [0, "BirchTree", "100"],
      [0, "EquipmentShirts1", "3"],
      [1, "Grasslands1", "30"],
      [1, "OakTree", "45"]
    ],
    "detRecipeTotals": [
      ["Grasslands4", 40],
      ["BirchTree", 100],
      ["Grasslands1", 30],
      ["OakTree", 45]
    ],
    "notes": " "
  },
  "EquipmentShirts31": {
    "displayName": "Member Hoodie",
    "sellPrice": "71135100",
    "typeGen": "aShirt",
    "ID": "3",
    "Type": "Shirt",
    "lvReqToEquip": "80",
    "Class": "Beginner",
    "LUK": "25",
    "Defence": "40",
    "Upgrade_Slots_Left": "4",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "miscUp1": "15% Xp From Monsters",
    "recipeData": {
      "recipe": [
        ["Refinery4", "500"],
        ["EquipmentPunching4", "2"],
        ["EquipmentShirts27", "1"]
      ],
      "levelReqToCraft": "50",
      "expGiven": "1200000",
      "no": 53,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Refinery4", "500"],
      [0, "EquipmentPunching4", "2"],
      [1, "SnowA2", "140000"],
      [1, "EquipmentPunching3", "6"],
      [2, "CraftMat3", "30000"],
      [2, "EquipmentPunching2", "30"],
      [3, "CopperBar", "600"],
      [3, "OakTree", "2250"],
      [3, "CraftMat5", "600"],
      [2, "ToiletTree", "12000"],
      [0, "EquipmentShirts27", "1"],
      [1, "SnowC3", "75000"],
      [1, "EquipmentShirts15", "2"],
      [2, "Soul1", "2000"],
      [2, "EquipmentShirts14", "4"],
      [3, "DesertB4", "20000"],
      [3, "EquipmentShirts12", "20"],
      [4, "IronBar", "3000"],
      [4, "JungleTree", "12000"],
      [3, "PlatBar", "4000"],
      [2, "DementiaBar", "700"],
      [1, "VoidBar", "500"],
      [1, "PureWater2", "4"]
    ],
    "detRecipeTotals": [
      ["Refinery4", 500],
      ["SnowA2", 140000],
      ["SnowC3", 75000],
      ["VoidBar", 500],
      ["PureWater2", 4],
      ["CraftMat3", 30000],
      ["ToiletTree", 12000],
      ["Soul1", 2000],
      ["DementiaBar", 700],
      ["CopperBar", 600],
      ["OakTree", 2250],
      ["CraftMat5", 600],
      ["DesertB4", 20000],
      ["PlatBar", 4000],
      ["IronBar", 3000],
      ["JungleTree", 12000]
    ],
    "notes": " "
  },
  "EquipmentShirts5": {
    "displayName": "Studded Hide",
    "sellPrice": "315520",
    "typeGen": "aShirt",
    "ID": "3",
    "Type": "Shirt",
    "lvReqToEquip": "40",
    "Class": "Warrior",
    "STR": "10",
    "WIS": "4",
    "Defence": "22",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "miscUp1": "10% Fishin Efficincy",
    "recipeData": {
      "recipe": [
        ["EquipmentShirts20", "4"],
        ["DesertA2", "4000"],
        ["DesertA3b", "1"]
      ],
      "levelReqToCraft": "26",
      "expGiven": "14700",
      "no": 50,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "EquipmentShirts20", "4"],
      [1, "BirchTree", "1300"],
      [1, "EquipmentShirts11", "8"],
      [2, "CopperBar", "360"],
      [2, "CraftMat5", "960"],
      [1, "TestObj7", "4"],
      [2, "Jungle1", "500"],
      [2, "CraftMat6", "500"],
      [0, "DesertA2", "4000"],
      [0, "DesertA3b", "1"]
    ],
    "detRecipeTotals": [
      ["DesertA2", 4000],
      ["DesertA3b", 1],
      ["BirchTree", 1300],
      ["CopperBar", 360],
      ["CraftMat5", 960],
      ["Jungle1", 500],
      ["CraftMat6", 500]
    ],
    "notes": " "
  },
  "EquipmentShirts23": {
    "displayName": "Feral Leathering",
    "sellPrice": "374080",
    "typeGen": "aShirt",
    "ID": "3",
    "Type": "Shirt",
    "lvReqToEquip": "40",
    "Class": "Archer",
    "STR": "2",
    "AGI": "12",
    "Defence": "18",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "miscUp1": "10% Catch Efficincy",
    "recipeData": {
      "recipe": [
        ["EquipmentShirts10", "4"],
        ["TreeInterior1", "3000"],
        ["DesertA3b", "1"]
      ],
      "levelReqToCraft": "26",
      "expGiven": "19000",
      "no": 51,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "EquipmentShirts10", "4"],
      [1, "Forest1", "2000"],
      [1, "IronBar", "2000"],
      [0, "TreeInterior1", "3000"],
      [0, "DesertA3b", "1"]
    ],
    "detRecipeTotals": [
      ["TreeInterior1", 3000],
      ["DesertA3b", 1],
      ["Forest1", 2000],
      ["IronBar", 2000]
    ],
    "notes": " "
  },
  "EquipmentShirts22": {
    "displayName": "Furled Robes",
    "sellPrice": "90880",
    "typeGen": "aShirt",
    "ID": "3",
    "Type": "Shirt",
    "lvReqToEquip": "40",
    "Class": "Mage",
    "AGI": "1",
    "WIS": "13",
    "Defence": "14",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "miscUp1": "10% Chop Efficiency",
    "recipeData": {
      "recipe": [
        ["EquipmentShirts21", "4"],
        ["CraftMat9", "1500"],
        ["DesertA3b", "1"]
      ],
      "levelReqToCraft": "26",
      "expGiven": "14700",
      "no": 52,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "EquipmentShirts21", "4"],
      [0, "CraftMat9", "1500"],
      [0, "DesertA3b", "1"]
    ],
    "detRecipeTotals": [
      ["EquipmentShirts21", 4],
      ["CraftMat9", 1500],
      ["DesertA3b", 1]
    ],
    "notes": " "
  },
  "EquipmentShirts28": {
    "displayName": "Damascus Plates",
    "sellPrice": "40749200",
    "typeGen": "aShirt",
    "ID": "3",
    "Type": "Shirt",
    "lvReqToEquip": "95",
    "Class": "Warrior",
    "STR": "17",
    "WIS": "5",
    "Defence": "52",
    "Upgrade_Slots_Left": "5",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "recipeData": {
      "recipe": [
        ["Refinery4", "500"],
        ["EquipmentShirts27", "1"]
      ],
      "levelReqToCraft": "49",
      "expGiven": "1000000",
      "no": 54,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Refinery4", "500"],
      [0, "EquipmentShirts27", "1"],
      [1, "SnowC3", "75000"],
      [1, "EquipmentShirts15", "2"],
      [2, "Soul1", "2000"],
      [2, "EquipmentShirts14", "4"],
      [3, "DesertB4", "20000"],
      [3, "EquipmentShirts12", "20"],
      [4, "IronBar", "3000"],
      [4, "JungleTree", "12000"],
      [3, "PlatBar", "4000"],
      [2, "DementiaBar", "700"],
      [1, "VoidBar", "500"],
      [1, "PureWater2", "4"]
    ],
    "detRecipeTotals": [
      ["Refinery4", 500],
      ["SnowC3", 75000],
      ["VoidBar", 500],
      ["PureWater2", 4],
      ["Soul1", 2000],
      ["DementiaBar", 700],
      ["DesertB4", 20000],
      ["PlatBar", 4000],
      ["IronBar", 3000],
      ["JungleTree", 12000]
    ],
    "notes": " "
  },
  "EquipmentShirts29": {
    "displayName": "Evergreen Wraps",
    "sellPrice": "40749200",
    "typeGen": "aShirt",
    "ID": "3",
    "Type": "Shirt",
    "lvReqToEquip": "95",
    "Class": "Archer",
    "STR": "4",
    "AGI": "19",
    "Defence": "49",
    "Upgrade_Slots_Left": "5",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "recipeData": {
      "recipe": [
        ["Refinery4", "500"],
        ["EquipmentShirts27", "1"]
      ],
      "levelReqToCraft": "49",
      "expGiven": "1000000",
      "no": 55,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Refinery4", "500"],
      [0, "EquipmentShirts27", "1"],
      [1, "SnowC3", "75000"],
      [1, "EquipmentShirts15", "2"],
      [2, "Soul1", "2000"],
      [2, "EquipmentShirts14", "4"],
      [3, "DesertB4", "20000"],
      [3, "EquipmentShirts12", "20"],
      [4, "IronBar", "3000"],
      [4, "JungleTree", "12000"],
      [3, "PlatBar", "4000"],
      [2, "DementiaBar", "700"],
      [1, "VoidBar", "500"],
      [1, "PureWater2", "4"]
    ],
    "detRecipeTotals": [
      ["Refinery4", 500],
      ["SnowC3", 75000],
      ["VoidBar", 500],
      ["PureWater2", 4],
      ["Soul1", 2000],
      ["DementiaBar", 700],
      ["DesertB4", 20000],
      ["PlatBar", 4000],
      ["IronBar", 3000],
      ["JungleTree", 12000]
    ],
    "notes": " "
  },
  "EquipmentShirts30": {
    "displayName": "Elegantine Robes",
    "sellPrice": "40749200",
    "typeGen": "aShirt",
    "ID": "3",
    "Type": "Shirt",
    "lvReqToEquip": "95",
    "Class": "Mage",
    "AGI": "1",
    "WIS": "23",
    "Defence": "47",
    "Upgrade_Slots_Left": "5",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "recipeData": {
      "recipe": [
        ["Refinery4", "500"],
        ["EquipmentShirts27", "1"]
      ],
      "levelReqToCraft": "49",
      "expGiven": "1000000",
      "no": 56,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Refinery4", "500"],
      [0, "EquipmentShirts27", "1"],
      [1, "SnowC3", "75000"],
      [1, "EquipmentShirts15", "2"],
      [2, "Soul1", "2000"],
      [2, "EquipmentShirts14", "4"],
      [3, "DesertB4", "20000"],
      [3, "EquipmentShirts12", "20"],
      [4, "IronBar", "3000"],
      [4, "JungleTree", "12000"],
      [3, "PlatBar", "4000"],
      [2, "DementiaBar", "700"],
      [1, "VoidBar", "500"],
      [1, "PureWater2", "4"]
    ],
    "detRecipeTotals": [
      ["Refinery4", 500],
      ["SnowC3", 75000],
      ["VoidBar", 500],
      ["PureWater2", 4],
      ["Soul1", 2000],
      ["DementiaBar", 700],
      ["DesertB4", 20000],
      ["PlatBar", 4000],
      ["IronBar", 3000],
      ["JungleTree", 12000]
    ],
    "notes": " "
  },
  "EquipmentPants1": {
    "displayName": "Torn Jeans",
    "sellPrice": "201",
    "typeGen": "aPants",
    "ID": "3",
    "Type": "Pants",
    "lvReqToEquip": "4",
    "Class": "All",
    "AGI": "2",
    "WIS": "1",
    "Defence": "4",
    "Upgrade_Slots_Left": "1",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [
      ["EquipmentPants15", "10", "Crafting"],
      ["EquipmentPants18", "8", "Crafting"]
    ],
    "recipeData": {
      "recipe": [
        ["Grasslands2", "20"],
        ["CopperBar", "8"],
        ["CraftMat1", "15"]
      ],
      "levelReqToCraft": "4",
      "expGiven": "7",
      "no": 7,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "Grasslands2", "20"],
      [0, "CopperBar", "8"],
      [0, "CraftMat1", "15"]
    ],
    "detRecipeTotals": [
      ["Grasslands2", 20],
      ["CopperBar", 8],
      ["CraftMat1", 15]
    ],
    "notes": " "
  },
  "EquipmentPants2": {
    "displayName": "Copper Platelegs",
    "sellPrice": "870",
    "typeGen": "aPants",
    "ID": "3",
    "Type": "Pants",
    "lvReqToEquip": "8",
    "Class": "All",
    "STR": "2",
    "AGI": "2",
    "WIS": "2",
    "Defence": "6",
    "Upgrade_Slots_Left": "2",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [["EquipmentPants4", "6", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["CopperBar", "60"],
        ["BirchTree", "150"]
      ],
      "levelReqToCraft": "8",
      "expGiven": "75",
      "no": 19,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "CopperBar", "60"],
      [0, "BirchTree", "150"]
    ],
    "detRecipeTotals": [
      ["CopperBar", 60],
      ["BirchTree", 150]
    ],
    "notes": " "
  },
  "EquipmentPants3": {
    "displayName": "Iron Platelegs",
    "sellPrice": "11065",
    "typeGen": "aPants",
    "ID": "3",
    "Type": "Pants",
    "lvReqToEquip": "15",
    "Class": "All",
    "STR": "3",
    "AGI": "3",
    "WIS": "3",
    "Defence": "11",
    "Upgrade_Slots_Left": "2",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [["EquipmentPants5", "6", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["IronBar", "170"],
        ["CraftMat6", "225"]
      ],
      "levelReqToCraft": "14",
      "expGiven": "750",
      "no": 35,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "IronBar", "170"],
      [0, "CraftMat6", "225"]
    ],
    "detRecipeTotals": [
      ["IronBar", 170],
      ["CraftMat6", 225]
    ],
    "notes": " "
  },
  "EquipmentPants4": {
    "displayName": "Gold Platelegs",
    "sellPrice": "61845",
    "typeGen": "aPants",
    "ID": "3",
    "Type": "Pants",
    "lvReqToEquip": "35",
    "Class": "All",
    "STR": "4",
    "AGI": "4",
    "WIS": "4",
    "Defence": "16",
    "Upgrade_Slots_Left": "3",
    "sources": ["Sandstone Golden Chest", "Smithing", "Recipe from Start"],
    "detdrops": [["Sandstone Golden Chest", "0.04", "1"]],
    "recipeData": {
      "recipe": [
        ["Fish1", "500"],
        ["EquipmentPants2", "6"],
        ["GoldBar", "475"]
      ],
      "levelReqToCraft": "18",
      "expGiven": "2500",
      "no": 3,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "Fish1", "500"],
      [0, "EquipmentPants2", "6"],
      [1, "CopperBar", "360"],
      [1, "BirchTree", "900"],
      [0, "GoldBar", "475"]
    ],
    "detRecipeTotals": [
      ["Fish1", 500],
      ["GoldBar", 475],
      ["CopperBar", 360],
      ["BirchTree", 900]
    ],
    "notes": " "
  },
  "EquipmentPants17": {
    "displayName": "Amarok Hinds",
    "sellPrice": "38500",
    "typeGen": "aPants",
    "ID": "3",
    "Type": "Pants",
    "lvReqToEquip": "40",
    "Class": "All",
    "STR": "2",
    "AGI": "2",
    "WIS": "2",
    "Defence": "18",
    "Upgrade_Slots_Left": "5",
    "sources": ["Smithing"],
    "recipeData": {
      "recipe": [
        ["Quest17", "6"],
        ["CraftMat7", "400"],
        ["Forest3", "700"]
      ],
      "levelReqToCraft": "17",
      "expGiven": "1500",
      "no": 67,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Blunder Hills Merit Shop"]
    },
    "detrecipe": [
      [0, "Quest17", "6"],
      [0, "CraftMat7", "400"],
      [0, "Forest3", "700"]
    ],
    "detRecipeTotals": [
      ["Quest17", 6],
      ["CraftMat7", 400],
      ["Forest3", 700]
    ],
    "notes": " "
  },
  "EquipmentPants5": {
    "displayName": "Platinum Shins",
    "sellPrice": "716390",
    "typeGen": "aPants",
    "ID": "3",
    "Type": "Pants",
    "lvReqToEquip": "50",
    "Class": "All",
    "STR": "6",
    "AGI": "6",
    "WIS": "6",
    "Defence": "23",
    "Upgrade_Slots_Left": "3",
    "sources": ["Chillsnap Golden Chest", "Smithing", "Recipe from Start"],
    "detdrops": [["Chillsnap Golden Chest", "0.04", "1"]],
    "uses": [
      ["EquipmentPants6", "2", "Crafting"],
      ["Plan-it Express", "Lots", "Post Office"]
    ],
    "recipeData": {
      "recipe": [
        ["Bug3", "5000"],
        ["EquipmentPants3", "6"],
        ["PlatBar", "1250"]
      ],
      "levelReqToCraft": "31",
      "expGiven": "50000",
      "no": 23,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "Bug3", "5000"],
      [0, "EquipmentPants3", "6"],
      [1, "IronBar", "1020"],
      [1, "CraftMat6", "1350"],
      [0, "PlatBar", "1250"]
    ],
    "detRecipeTotals": [
      ["Bug3", 5000],
      ["PlatBar", 1250],
      ["IronBar", 1020],
      ["CraftMat6", 1350]
    ],
    "notes": " "
  },
  "EquipmentPants6": {
    "displayName": "Dementia Shins",
    "sellPrice": "3632780",
    "typeGen": "aPants",
    "ID": "3",
    "Type": "Pants",
    "lvReqToEquip": "70",
    "Class": "All",
    "STR": "7",
    "AGI": "7",
    "WIS": "7",
    "Defence": "28",
    "Upgrade_Slots_Left": "4",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [["EquipmentPants21", "2", "Crafting"]],
    "miscUp1": "3% Defence",
    "recipeData": {
      "recipe": [
        ["SnowA1", "8000"],
        ["EquipmentPants5", "2"],
        ["DementiaBar", "400"]
      ],
      "levelReqToCraft": "38",
      "expGiven": "150000",
      "no": 3,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "SnowA1", "8000"],
      [0, "EquipmentPants5", "2"],
      [1, "Bug3", "10000"],
      [1, "EquipmentPants3", "12"],
      [2, "IronBar", "2040"],
      [2, "CraftMat6", "2700"],
      [1, "PlatBar", "2500"],
      [0, "DementiaBar", "400"]
    ],
    "detRecipeTotals": [
      ["SnowA1", 8000],
      ["DementiaBar", 400],
      ["Bug3", 10000],
      ["PlatBar", 2500],
      ["IronBar", 2040],
      ["CraftMat6", 2700]
    ],
    "notes": " "
  },
  "EquipmentPants20": {
    "displayName": "Efaunt Hipilium",
    "sellPrice": "1260",
    "typeGen": "aPants",
    "ID": "3",
    "Type": "Pants",
    "lvReqToEquip": "75",
    "Class": "All",
    "STR": "4",
    "AGI": "4",
    "WIS": "4",
    "Defence": "32",
    "Upgrade_Slots_Left": "6",
    "sources": ["Smithing"],
    "miscUp1": "5% Defence",
    "recipeData": {
      "recipe": [
        ["EfauntDrop1", "7"],
        ["Hgg", "3"],
        ["PureWater", "25"]
      ],
      "levelReqToCraft": "37",
      "expGiven": "40000",
      "no": 63,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Yum Yum Desert Merit Shop"]
    },
    "detrecipe": [
      [0, "EfauntDrop1", "7"],
      [0, "Hgg", "3"],
      [0, "PureWater", "25"]
    ],
    "detRecipeTotals": [
      ["EfauntDrop1", 7],
      ["Hgg", 3],
      ["PureWater", 25]
    ],
    "notes": " "
  },
  "EquipmentPants21": {
    "displayName": "Void Imperium Shardshins",
    "sellPrice": "14295760",
    "typeGen": "aPants",
    "ID": "3",
    "Type": "Pants",
    "lvReqToEquip": "90",
    "Class": "All",
    "STR": "9",
    "AGI": "9",
    "WIS": "9",
    "Defence": "38",
    "Upgrade_Slots_Left": "4",
    "sources": ["Smithing", "Recipe from Start"],
    "miscUp1": "7% Defence",
    "recipeData": {
      "recipe": [
        ["Tree7", "75000"],
        ["EquipmentPants6", "2"],
        ["VoidBar", "650"],
        ["PureWater2", "4"]
      ],
      "levelReqToCraft": "45",
      "expGiven": "370000",
      "no": 27,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "Tree7", "75000"],
      [0, "EquipmentPants6", "2"],
      [1, "SnowA1", "16000"],
      [1, "EquipmentPants5", "4"],
      [2, "Bug3", "20000"],
      [2, "EquipmentPants3", "24"],
      [3, "IronBar", "4080"],
      [3, "CraftMat6", "5400"],
      [2, "PlatBar", "5000"],
      [1, "DementiaBar", "800"],
      [0, "VoidBar", "650"],
      [0, "PureWater2", "4"]
    ],
    "detRecipeTotals": [
      ["Tree7", 75000],
      ["VoidBar", 650],
      ["PureWater2", 4],
      ["SnowA1", 16000],
      ["DementiaBar", 800],
      ["Bug3", 20000],
      ["PlatBar", 5000],
      ["IronBar", 4080],
      ["CraftMat6", 5400]
    ],
    "notes": " "
  },
  "EquipmentPants7": {
    "displayName": "Gilded Pilates",
    "sellPrice": "200",
    "typeGen": "aPants",
    "ID": "3",
    "Type": "Pants",
    "lvReqToEquip": "15",
    "Class": "Warrior",
    "Weapon_Power": "5",
    "STR": "3",
    "AGI": "3",
    "LUK": "3",
    "Upgrade_Slots_Left": "2",
    "notes": " "
  },
  "EquipmentPants8": {
    "displayName": "Twisted Scales",
    "sellPrice": "200",
    "typeGen": "aPants",
    "ID": "3",
    "Type": "Pants",
    "lvReqToEquip": "15",
    "Class": "All",
    "Weapon_Power": "5",
    "STR": "3",
    "AGI": "3",
    "LUK": "3",
    "Upgrade_Slots_Left": "2",
    "notes": " "
  },
  "EquipmentPants9": {
    "displayName": "Crystallax Shins",
    "sellPrice": "200",
    "typeGen": "aPants",
    "ID": "3",
    "Type": "Pants",
    "lvReqToEquip": "15",
    "Class": "Warrior",
    "Weapon_Power": "5",
    "STR": "3",
    "AGI": "3",
    "LUK": "3",
    "Upgrade_Slots_Left": "2",
    "notes": " "
  },
  "EquipmentPants10": {
    "displayName": "Give Up On Life Pants",
    "sellPrice": "200",
    "typeGen": "aPants",
    "ID": "3",
    "Type": "Pants",
    "lvReqToEquip": "7",
    "Class": "All",
    "WIS": "6",
    "Defence": "3",
    "Upgrade_Slots_Left": "2",
    "sources": ["DropTable1"],
    "detdrops": [
      ["Crystal Carrot", "0.012", "1.0"],
      ["Green Mushroom", "0.00006", "1.0"],
      ["Frog", "0.000076", "1.0"],
      ["Bored Bean", "0.00008999999999999999", "1.0"],
      ["Red Mushroom", "0.000104", "1.0"],
      ["Amarok", "0.02", "2.0"],
      ["Chaotic Amarok", "0.02", "4.0"],
      ["Nightmare Amarok", "0.02", "2.0"],
      ["Baba Yaga", "0.02", "2.0"],
      ["Dewdrop Bronze Chest", "0.02", "1.0"]
    ],
    "uses": [["Beatboxing Starterpack", "1", "Quests"]],
    "notes": " "
  },
  "EquipmentPants11": {
    "displayName": "Yellow Belt Ninja Pants",
    "sellPrice": "200",
    "typeGen": "aPants",
    "ID": "3",
    "Type": "Pants",
    "lvReqToEquip": "15",
    "Class": "All",
    "STR": "3",
    "AGI": "3",
    "LUK": "3",
    "Upgrade_Slots_Left": "2",
    "notes": " "
  },
  "EquipmentPants12": {
    "displayName": "Merchantile Pants",
    "sellPrice": "200",
    "typeGen": "aPants",
    "ID": "3",
    "Type": "Pants",
    "lvReqToEquip": "15",
    "Class": "All",
    "STR": "3",
    "AGI": "3",
    "LUK": "3",
    "Upgrade_Slots_Left": "2",
    "notes": " "
  },
  "EquipmentPants13": {
    "displayName": "Ancient Leggings",
    "sellPrice": "200",
    "typeGen": "aPants",
    "ID": "3",
    "Type": "Pants",
    "lvReqToEquip": "15",
    "Class": "All",
    "STR": "3",
    "AGI": "3",
    "LUK": "3",
    "Upgrade_Slots_Left": "2",
    "notes": " "
  },
  "EquipmentPants14": {
    "displayName": "Forensic Leggings",
    "sellPrice": "200",
    "typeGen": "aPants",
    "ID": "3",
    "Type": "Pants",
    "lvReqToEquip": "15",
    "Class": "All",
    "STR": "3",
    "AGI": "3",
    "LUK": "3",
    "Upgrade_Slots_Left": "2",
    "notes": " "
  },
  "EquipmentPants15": {
    "displayName": "Bleached Designer Wode Patch Pants",
    "sellPrice": "10985",
    "typeGen": "aPants",
    "ID": "3",
    "Type": "Pants",
    "lvReqToEquip": "25",
    "Class": "All",
    "AGI": "3",
    "WIS": "7",
    "Defence": "11",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Wode Board"],
    "uses": [["EquipmentPants22", "3", "Crafting"]],
    "miscUp1": "5% Chop Efficiency",
    "recipeData": {
      "recipe": [
        ["EquipmentPants1", "10"],
        ["Forest2", "275"],
        ["BirchTree", "700"]
      ],
      "levelReqToCraft": "12",
      "expGiven": "400",
      "no": 49,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Wode Board"]
    },
    "detrecipe": [
      [0, "EquipmentPants1", "10"],
      [1, "Grasslands2", "200"],
      [1, "CopperBar", "80"],
      [1, "CraftMat1", "150"],
      [0, "Forest2", "275"],
      [0, "BirchTree", "700"]
    ],
    "detRecipeTotals": [
      ["Forest2", 275],
      ["BirchTree", 700],
      ["Grasslands2", 200],
      ["CopperBar", 80],
      ["CraftMat1", 150]
    ],
    "notes": " "
  },
  "EquipmentPants16": {
    "displayName": "Adam's Leaf",
    "sellPrice": "200",
    "typeGen": "aPants",
    "ID": "3",
    "Type": "Pants",
    "lvReqToEquip": "15",
    "Class": "All",
    "STR": "4",
    "WIS": "13",
    "Defence": "2",
    "Upgrade_Slots_Left": "3",
    "sources": ["Justice Wears No Clothes"],
    "notes": " "
  },
  "EquipmentPants18": {
    "displayName": "Dirty Coal Miner Baggy Soot Pants",
    "sellPrice": "3008",
    "typeGen": "aPants",
    "ID": "3",
    "Type": "Pants",
    "lvReqToEquip": "25",
    "Class": "All",
    "STR": "7",
    "Defence": "12",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["EquipmentPants23", "3", "Crafting"]],
    "miscUp1": "5% Mining Efficincy",
    "recipeData": {
      "recipe": [
        ["EquipmentPants1", "8"],
        ["Iron", "200"]
      ],
      "levelReqToCraft": "12",
      "expGiven": "400",
      "no": 50,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "EquipmentPants1", "8"],
      [1, "Grasslands2", "160"],
      [1, "CopperBar", "64"],
      [1, "CraftMat1", "120"],
      [0, "Iron", "200"]
    ],
    "detRecipeTotals": [
      ["Iron", 200],
      ["Grasslands2", 160],
      ["CopperBar", 64],
      ["CraftMat1", 120]
    ],
    "notes": " "
  },
  "EquipmentPants19": {
    "displayName": "Trimmed Rune Platelegs",
    "sellPrice": "200",
    "typeGen": "aPants",
    "ID": "3",
    "Type": "Pants",
    "lvReqToEquip": "82",
    "Class": "All",
    "STR": "4",
    "AGI": "2",
    "Defence": "20",
    "Upgrade_Slots_Left": "5",
    "sources": ["King Doot"],
    "detdrops": [["King Doot", "0.04", "1"]],
    "uses": [["EquipmentHats52", "1", "Crafting"]],
    "miscUp1": "10% Defence",
    "notes": " "
  },
  "EquipmentPants22": {
    "displayName": "Fishing Overalls",
    "sellPrice": "34955",
    "typeGen": "aPants",
    "ID": "3",
    "Type": "Pants",
    "lvReqToEquip": "35",
    "Class": "All",
    "STR": "8",
    "Defence": "15",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Walking Stick"],
    "miscUp1": "12% Fishin Efficincy",
    "recipeData": {
      "recipe": [
        ["EquipmentPants15", "3"],
        ["Fish1", "500"]
      ],
      "levelReqToCraft": "14",
      "expGiven": "1",
      "no": 69,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Walking Stick"]
    },
    "detrecipe": [
      [0, "EquipmentPants15", "3"],
      [1, "EquipmentPants1", "30"],
      [2, "Grasslands2", "600"],
      [2, "CopperBar", "240"],
      [2, "CraftMat1", "450"],
      [1, "Forest2", "825"],
      [1, "BirchTree", "2100"],
      [0, "Fish1", "500"]
    ],
    "detRecipeTotals": [
      ["Fish1", 500],
      ["Forest2", 825],
      ["BirchTree", 2100],
      ["Grasslands2", 600],
      ["CopperBar", 240],
      ["CraftMat1", 450]
    ]
  },
  "EquipmentPants23": {
    "displayName": "Bandito Pantaloon",
    "sellPrice": "10524",
    "typeGen": "aPants",
    "ID": "3",
    "Type": "Pants",
    "lvReqToEquip": "35",
    "Class": "All",
    "AGI": "9",
    "Defence": "14",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Poop"],
    "miscUp1": "12% Catch Efficincy",
    "recipeData": {
      "recipe": [
        ["EquipmentPants18", "3"],
        ["Bug1", "500"]
      ],
      "levelReqToCraft": "14",
      "expGiven": "1",
      "no": 70,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Poop"]
    },
    "detrecipe": [
      [0, "EquipmentPants18", "3"],
      [1, "EquipmentPants1", "24"],
      [2, "Grasslands2", "480"],
      [2, "CopperBar", "192"],
      [2, "CraftMat1", "360"],
      [1, "Iron", "600"],
      [0, "Bug1", "500"]
    ],
    "detRecipeTotals": [
      ["Bug1", 500],
      ["Iron", 600],
      ["Grasslands2", 480],
      ["CopperBar", 192],
      ["CraftMat1", 360]
    ]
  },
  "EquipmentShoes1": {
    "displayName": "Copper Boots",
    "sellPrice": "875",
    "typeGen": "aShoes",
    "ID": "3",
    "Type": "Shoes",
    "lvReqToEquip": "8",
    "Class": "All",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "LUK": "2",
    "Defence": "2",
    "Upgrade_Slots_Left": "2",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [
      ["EquipmentShoes15", "2", "Crafting"],
      ["EquipmentShoes7", "2", "Crafting"],
      ["Plan-it Express", "Lots", "Post Office"]
    ],
    "recipeData": {
      "recipe": [["CopperBar", "125"]],
      "levelReqToCraft": "10",
      "expGiven": "110",
      "no": 20,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [[0, "CopperBar", "125"]],
    "detRecipeTotals": [["CopperBar", 125]],
    "notes": " "
  },
  "EquipmentShoes15": {
    "displayName": "Iron Boots",
    "sellPrice": "11750",
    "typeGen": "aShoes",
    "ID": "3",
    "Type": "Shoes",
    "lvReqToEquip": "15",
    "Class": "All",
    "STR": "2",
    "AGI": "2",
    "WIS": "2",
    "Defence": "4",
    "Upgrade_Slots_Left": "2",
    "sources": ["Smithing"],
    "uses": [
      ["EquipmentShoes20", "1", "Crafting"],
      ["EquipmentShoes3", "2", "Crafting"],
      ["Plan-it Express", "Lots", "Post Office"],
      ["Shoe Shopping with Sprout", "2", "Quests"]
    ],
    "recipeData": {
      "recipe": [
        ["CraftMat5", "500"],
        ["IronBar", "125"],
        ["EquipmentShoes1", "2"]
      ],
      "levelReqToCraft": "13",
      "expGiven": "600",
      "no": 39,
      "tab": "Anvil Tab 1",
      "recipeFrom": []
    },
    "detrecipe": [
      [0, "CraftMat5", "500"],
      [0, "IronBar", "125"],
      [0, "EquipmentShoes1", "2"],
      [1, "CopperBar", "250"]
    ],
    "detRecipeTotals": [
      ["CraftMat5", 500],
      ["IronBar", 125],
      ["CopperBar", 250]
    ],
    "notes": " "
  },
  "EquipmentShoes3": {
    "displayName": "Gold Boots",
    "sellPrice": "92700",
    "typeGen": "aShoes",
    "ID": "3",
    "Type": "Shoes",
    "lvReqToEquip": "30",
    "Class": "All",
    "STR": "3",
    "AGI": "3",
    "WIS": "3",
    "LUK": "3",
    "Defence": "8",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [
      ["EquipmentShoes4", "3", "Crafting"],
      ["EquipmentShoes16", "1", "Crafting"],
      ["EquipmentShoes18", "1", "Crafting"],
      ["EquipmentShoes17", "1", "Crafting"],
      ["EquipmentShoes19", "1", "Crafting"],
      ["Plan-it Express", "Lots", "Post Office"]
    ],
    "recipeData": {
      "recipe": [
        ["GoldBar", "600"],
        ["EquipmentShoes15", "2"],
        ["PureWater", "4"]
      ],
      "levelReqToCraft": "20",
      "expGiven": "4200",
      "no": 4,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "GoldBar", "600"],
      [0, "EquipmentShoes15", "2"],
      [1, "CraftMat5", "1000"],
      [1, "IronBar", "250"],
      [1, "EquipmentShoes1", "4"],
      [2, "CopperBar", "500"],
      [0, "PureWater", "4"]
    ],
    "detRecipeTotals": [
      ["GoldBar", 600],
      ["PureWater", 4],
      ["CraftMat5", 1000],
      ["IronBar", 250],
      ["CopperBar", 500]
    ],
    "notes": " "
  },
  "EquipmentShoes20": {
    "displayName": "Amarok Paws",
    "sellPrice": "13500",
    "typeGen": "aShoes",
    "ID": "3",
    "Type": "Shoes",
    "lvReqToEquip": "35",
    "Class": "All",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "Defence": "10",
    "Upgrade_Slots_Left": "5",
    "sources": ["Smithing"],
    "miscUp1": "3% Defence",
    "recipeData": {
      "recipe": [
        ["Quest17", "5"],
        ["Leaf1", "125"],
        ["EquipmentShoes15", "1"]
      ],
      "levelReqToCraft": "14",
      "expGiven": "700",
      "no": 68,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Blunder Hills Merit Shop"]
    },
    "detrecipe": [
      [0, "Quest17", "5"],
      [0, "Leaf1", "125"],
      [0, "EquipmentShoes15", "1"],
      [1, "CraftMat5", "500"],
      [1, "IronBar", "125"],
      [1, "EquipmentShoes1", "2"],
      [2, "CopperBar", "250"]
    ],
    "detRecipeTotals": [
      ["Quest17", 5],
      ["Leaf1", 125],
      ["CraftMat5", 500],
      ["IronBar", 125],
      ["CopperBar", 250]
    ],
    "notes": " "
  },
  "EquipmentShoes4": {
    "displayName": "Platinum Boots",
    "sellPrice": "460100",
    "typeGen": "aShoes",
    "ID": "3",
    "Type": "Shoes",
    "lvReqToEquip": "50",
    "Class": "All",
    "STR": "5",
    "AGI": "5",
    "WIS": "5",
    "LUK": "5",
    "Defence": "15",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [
      ["EquipmentShoes21", "1", "Crafting"],
      ["EquipmentShoes5", "1", "Crafting"],
      ["Plan-it Express", "Lots", "Post Office"]
    ],
    "miscUp1": "5% Defence",
    "recipeData": {
      "recipe": [
        ["PalmTree", "7000"],
        ["Fish3", "3000"],
        ["EquipmentShoes3", "3"]
      ],
      "levelReqToCraft": "32",
      "expGiven": "55000",
      "no": 24,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "PalmTree", "7000"],
      [0, "Fish3", "3000"],
      [0, "EquipmentShoes3", "3"],
      [1, "GoldBar", "1800"],
      [1, "EquipmentShoes15", "6"],
      [2, "CraftMat5", "3000"],
      [2, "IronBar", "750"],
      [2, "EquipmentShoes1", "12"],
      [3, "CopperBar", "1500"],
      [1, "PureWater", "12"]
    ],
    "detRecipeTotals": [
      ["PalmTree", 7000],
      ["Fish3", 3000],
      ["GoldBar", 1800],
      ["PureWater", 12],
      ["CraftMat5", 3000],
      ["IronBar", 750],
      ["CopperBar", 1500]
    ],
    "notes": " "
  },
  "EquipmentShoes5": {
    "displayName": "Dementia Boots",
    "sellPrice": "1210400",
    "typeGen": "aShoes",
    "ID": "3",
    "Type": "Shoes",
    "lvReqToEquip": "65",
    "Class": "All",
    "STR": "7",
    "AGI": "7",
    "WIS": "7",
    "LUK": "7",
    "Defence": "22",
    "Upgrade_Slots_Left": "4",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [["EquipmentShoes22", "2", "Crafting"]],
    "miscUp1": "7% Defence",
    "recipeData": {
      "recipe": [
        ["Critter1A", "3"],
        ["EquipmentShoes4", "1"],
        ["DementiaBar", "500"]
      ],
      "levelReqToCraft": "39",
      "expGiven": "200000",
      "no": 4,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "Critter1A", "3"],
      [0, "EquipmentShoes4", "1"],
      [1, "PalmTree", "7000"],
      [1, "Fish3", "3000"],
      [1, "EquipmentShoes3", "3"],
      [2, "GoldBar", "1800"],
      [2, "EquipmentShoes15", "6"],
      [3, "CraftMat5", "3000"],
      [3, "IronBar", "750"],
      [3, "EquipmentShoes1", "12"],
      [4, "CopperBar", "1500"],
      [2, "PureWater", "12"],
      [0, "DementiaBar", "500"]
    ],
    "detRecipeTotals": [
      ["Critter1A", 3],
      ["DementiaBar", 500],
      ["PalmTree", 7000],
      ["Fish3", 3000],
      ["GoldBar", 1800],
      ["PureWater", 12],
      ["CraftMat5", 3000],
      ["IronBar", 750],
      ["CopperBar", 1500]
    ],
    "notes": " "
  },
  "EquipmentShoes21": {
    "displayName": "Efaunts Broken Ankles",
    "sellPrice": "460345",
    "typeGen": "aShoes",
    "ID": "3",
    "Type": "Shoes",
    "lvReqToEquip": "75",
    "Class": "All",
    "STR": "2",
    "AGI": "2",
    "WIS": "2",
    "Defence": "18",
    "Upgrade_Slots_Left": "6",
    "sources": ["Smithing"],
    "miscUp1": "2% Movement Speed",
    "recipeData": {
      "recipe": [
        ["EfauntDrop1", "5"],
        ["DesertA3b", "3"],
        ["EquipmentShoes4", "1"]
      ],
      "levelReqToCraft": "32",
      "expGiven": "25000",
      "no": 64,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Yum Yum Desert Merit Shop"]
    },
    "detrecipe": [
      [0, "EfauntDrop1", "5"],
      [0, "DesertA3b", "3"],
      [0, "EquipmentShoes4", "1"],
      [1, "PalmTree", "7000"],
      [1, "Fish3", "3000"],
      [1, "EquipmentShoes3", "3"],
      [2, "GoldBar", "1800"],
      [2, "EquipmentShoes15", "6"],
      [3, "CraftMat5", "3000"],
      [3, "IronBar", "750"],
      [3, "EquipmentShoes1", "12"],
      [4, "CopperBar", "1500"],
      [2, "PureWater", "12"]
    ],
    "detRecipeTotals": [
      ["EfauntDrop1", 5],
      ["DesertA3b", 3],
      ["PalmTree", 7000],
      ["Fish3", 3000],
      ["GoldBar", 1800],
      ["PureWater", 12],
      ["CraftMat5", 3000],
      ["IronBar", 750],
      ["CopperBar", 1500]
    ],
    "notes": " "
  },
  "EquipmentShoes22": {
    "displayName": "Void Imperium Kicks",
    "sellPrice": "9316000",
    "typeGen": "aShoes",
    "ID": "3",
    "Type": "Shoes",
    "lvReqToEquip": "85",
    "Class": "All",
    "STR": "9",
    "AGI": "9",
    "WIS": "9",
    "LUK": "9",
    "Defence": "30",
    "Upgrade_Slots_Left": "4",
    "sources": ["Smithing", "Recipe from Start"],
    "miscUp1": "8% Defence",
    "recipeData": {
      "recipe": [
        ["Bug6", "60000"],
        ["EquipmentShoes5", "2"],
        ["VoidBar", "725"],
        ["PureWater2", "4"]
      ],
      "levelReqToCraft": "46",
      "expGiven": "500000",
      "no": 28,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "Bug6", "60000"],
      [0, "EquipmentShoes5", "2"],
      [1, "Critter1A", "6"],
      [1, "EquipmentShoes4", "2"],
      [2, "PalmTree", "14000"],
      [2, "Fish3", "6000"],
      [2, "EquipmentShoes3", "6"],
      [3, "GoldBar", "3600"],
      [3, "EquipmentShoes15", "12"],
      [4, "CraftMat5", "6000"],
      [4, "IronBar", "1500"],
      [4, "EquipmentShoes1", "24"],
      [5, "CopperBar", "3000"],
      [3, "PureWater", "24"],
      [1, "DementiaBar", "1000"],
      [0, "VoidBar", "725"],
      [0, "PureWater2", "4"]
    ],
    "detRecipeTotals": [
      ["Bug6", 60000],
      ["VoidBar", 725],
      ["PureWater2", 4],
      ["Critter1A", 6],
      ["DementiaBar", 1000],
      ["PalmTree", 14000],
      ["Fish3", 6000],
      ["GoldBar", 3600],
      ["PureWater", 24],
      ["CraftMat5", 6000],
      ["IronBar", 1500],
      ["CopperBar", 3000]
    ],
    "notes": " "
  },
  "EquipmentShoes6": {
    "displayName": "Hermes Boots",
    "sellPrice": "200",
    "typeGen": "aShoes",
    "ID": "3",
    "Type": "Shoes",
    "lvReqToEquip": "15",
    "Class": "All",
    "Weapon_Power": "5",
    "STR": "3",
    "AGI": "3",
    "LUK": "3",
    "Upgrade_Slots_Left": "2",
    "notes": " "
  },
  "EquipmentShoes7": {
    "displayName": "Goo Galoshes",
    "sellPrice": "13750",
    "typeGen": "aShoes",
    "ID": "3",
    "Type": "Shoes",
    "lvReqToEquip": "10",
    "Class": "All",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "LUK": "2",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Slime"],
    "uses": [["Shoe Shopping with Sprout", "2", "Quests"]],
    "miscUp1": "5% Money",
    "recipeData": {
      "recipe": [
        ["Jungle1", "600"],
        ["JungleTree", "1000"],
        ["EquipmentShoes1", "2"]
      ],
      "levelReqToCraft": "11",
      "expGiven": "300",
      "no": 44,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Slime"]
    },
    "detrecipe": [
      [0, "Jungle1", "600"],
      [0, "JungleTree", "1000"],
      [0, "EquipmentShoes1", "2"],
      [1, "CopperBar", "250"]
    ],
    "detRecipeTotals": [
      ["Jungle1", 600],
      ["JungleTree", 1000],
      ["CopperBar", 250]
    ],
    "notes": " "
  },
  "EquipmentShoes8": {
    "displayName": "Yeti Walkers",
    "sellPrice": "200",
    "typeGen": "aShoes",
    "ID": "3",
    "Type": "Shoes",
    "lvReqToEquip": "15",
    "Class": "All",
    "Weapon_Power": "5",
    "STR": "3",
    "AGI": "3",
    "LUK": "3",
    "Upgrade_Slots_Left": "2",
    "notes": " "
  },
  "EquipmentShoes9": {
    "displayName": "Flip Flops",
    "sellPrice": "430",
    "typeGen": "aShoes",
    "ID": "3",
    "Type": "Shoes",
    "lvReqToEquip": "4",
    "Class": "All",
    "AGI": "3",
    "Upgrade_Slots_Left": "1",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [
      ["Plan-it Express", "Lots", "Post Office"],
      ["Shoe Shopping with Sprout", "2", "Quests"],
      ["Beatboxing Starterpack", "1", "Quests"]
    ],
    "miscUp1": "2% Movement Speed",
    "recipeData": {
      "recipe": [
        ["Grasslands3", "30"],
        ["CopperBar", "20"],
        ["Leaf1", "20"]
      ],
      "levelReqToCraft": "6",
      "expGiven": "10",
      "no": 8,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "Grasslands3", "30"],
      [0, "CopperBar", "20"],
      [0, "Leaf1", "20"]
    ],
    "detRecipeTotals": [
      ["Grasslands3", 30],
      ["CopperBar", 20],
      ["Leaf1", 20]
    ],
    "notes": " "
  },
  "EquipmentShoes10": {
    "displayName": "Flap Flops",
    "sellPrice": "200",
    "typeGen": "aShoes",
    "ID": "3",
    "Type": "Shoes",
    "lvReqToEquip": "10",
    "Class": "All",
    "STR": "3",
    "AGI": "3",
    "LUK": "3",
    "Upgrade_Slots_Left": "2",
    "miscUp1": "3% Movement Speed",
    "notes": " "
  },
  "EquipmentShoes11": {
    "displayName": "Floop Flops",
    "sellPrice": "200",
    "typeGen": "aShoes",
    "ID": "3",
    "Type": "Shoes",
    "lvReqToEquip": "25",
    "Class": "All",
    "STR": "3",
    "AGI": "3",
    "LUK": "3",
    "Upgrade_Slots_Left": "2",
    "miscUp1": "4% Movement Speed",
    "notes": " "
  },
  "EquipmentShoes12": {
    "displayName": "Flux Flops",
    "sellPrice": "200",
    "typeGen": "aShoes",
    "ID": "3",
    "Type": "Shoes",
    "lvReqToEquip": "50",
    "Class": "All",
    "STR": "5",
    "AGI": "3",
    "LUK": "8",
    "Defence": "40",
    "Upgrade_Slots_Left": "3",
    "miscUp1": "5% Movement Speed",
    "notes": " "
  },
  "EquipmentShoes13": {
    "displayName": "Gaia Shoes",
    "sellPrice": "200",
    "typeGen": "aShoes",
    "ID": "3",
    "Type": "Shoes",
    "lvReqToEquip": "15",
    "Class": "All",
    "STR": "2",
    "AGI": "6",
    "Upgrade_Slots_Left": "2",
    "miscUp1": "2% Xp From Monsters",
    "notes": " "
  },
  "EquipmentShoes14": {
    "displayName": "Cauldrunners",
    "sellPrice": "200",
    "typeGen": "aShoes",
    "ID": "3",
    "Type": "Shoes",
    "lvReqToEquip": "30",
    "Class": "Mage",
    "WIS": "9",
    "Defence": "4",
    "Upgrade_Slots_Left": "3",
    "miscUp1": "4% Brew Speed",
    "notes": " "
  },
  "EquipmentShoes16": {
    "displayName": "Cavern Trekkers",
    "sellPrice": "106050",
    "typeGen": "aShoes",
    "ID": "3",
    "Type": "Shoes",
    "lvReqToEquip": "30",
    "Class": "All",
    "STR": "5",
    "WIS": "1",
    "Defence": "10",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "miscUp1": "20% Mining Efficincy",
    "recipeData": {
      "recipe": [
        ["EquipmentShoes3", "1"],
        ["PureWater", "9"],
        ["Copper", "1500"],
        ["Iron", "1200"]
      ],
      "levelReqToCraft": "22",
      "expGiven": "5500",
      "no": 53,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "EquipmentShoes3", "1"],
      [1, "GoldBar", "600"],
      [1, "EquipmentShoes15", "2"],
      [2, "CraftMat5", "1000"],
      [2, "IronBar", "250"],
      [2, "EquipmentShoes1", "4"],
      [3, "CopperBar", "500"],
      [1, "PureWater", "4"],
      [0, "PureWater", "9"],
      [0, "Copper", "1500"],
      [0, "Iron", "1200"]
    ],
    "detRecipeTotals": [
      ["PureWater", 13],
      ["Copper", 1500],
      ["Iron", 1200],
      ["GoldBar", 600],
      ["CraftMat5", 1000],
      ["IronBar", 250],
      ["CopperBar", 500]
    ],
    "notes": " "
  },
  "EquipmentShoes17": {
    "displayName": "Logger Heels",
    "sellPrice": "112750",
    "typeGen": "aShoes",
    "ID": "3",
    "Type": "Shoes",
    "lvReqToEquip": "30",
    "Class": "All",
    "WIS": "7",
    "Defence": "6",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "miscUp1": "20% Chop Efficiency",
    "recipeData": {
      "recipe": [
        ["EquipmentShoes3", "1"],
        ["PureWater", "9"],
        ["JungleTree", "1600"],
        ["ForestTree", "1000"]
      ],
      "levelReqToCraft": "22",
      "expGiven": "5000",
      "no": 55,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "EquipmentShoes3", "1"],
      [1, "GoldBar", "600"],
      [1, "EquipmentShoes15", "2"],
      [2, "CraftMat5", "1000"],
      [2, "IronBar", "250"],
      [2, "EquipmentShoes1", "4"],
      [3, "CopperBar", "500"],
      [1, "PureWater", "4"],
      [0, "PureWater", "9"],
      [0, "JungleTree", "1600"],
      [0, "ForestTree", "1000"]
    ],
    "detRecipeTotals": [
      ["PureWater", 13],
      ["JungleTree", 1600],
      ["ForestTree", 1000],
      ["GoldBar", 600],
      ["CraftMat5", 1000],
      ["IronBar", 250],
      ["CopperBar", 500]
    ],
    "notes": " "
  },
  "EquipmentShoes18": {
    "displayName": "Angler Boots",
    "sellPrice": "109150",
    "typeGen": "aShoes",
    "ID": "3",
    "Type": "Shoes",
    "lvReqToEquip": "30",
    "Class": "All",
    "STR": "6",
    "Defence": "8",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "miscUp1": "20% Fishin Efficincy",
    "recipeData": {
      "recipe": [
        ["EquipmentShoes3", "1"],
        ["PureWater", "9"],
        ["Fish1", "1250"],
        ["Fish2", "1000"]
      ],
      "levelReqToCraft": "24",
      "expGiven": "6500",
      "no": 54,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "EquipmentShoes3", "1"],
      [1, "GoldBar", "600"],
      [1, "EquipmentShoes15", "2"],
      [2, "CraftMat5", "1000"],
      [2, "IronBar", "250"],
      [2, "EquipmentShoes1", "4"],
      [3, "CopperBar", "500"],
      [1, "PureWater", "4"],
      [0, "PureWater", "9"],
      [0, "Fish1", "1250"],
      [0, "Fish2", "1000"]
    ],
    "detRecipeTotals": [
      ["PureWater", 13],
      ["Fish1", 1250],
      ["Fish2", 1000],
      ["GoldBar", 600],
      ["CraftMat5", 1000],
      ["IronBar", 250],
      ["CopperBar", 500]
    ],
    "notes": " "
  },
  "EquipmentShoes19": {
    "displayName": "Bandito Boots",
    "sellPrice": "110400",
    "typeGen": "aShoes",
    "ID": "3",
    "Type": "Shoes",
    "lvReqToEquip": "30",
    "Class": "All",
    "AGI": "6",
    "Defence": "8",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "miscUp1": "20% Catch Efficincy",
    "recipeData": {
      "recipe": [
        ["EquipmentShoes3", "1"],
        ["PureWater", "9"],
        ["Bug1", "2000"],
        ["Bug2", "1250"]
      ],
      "levelReqToCraft": "24",
      "expGiven": "6500",
      "no": 56,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "EquipmentShoes3", "1"],
      [1, "GoldBar", "600"],
      [1, "EquipmentShoes15", "2"],
      [2, "CraftMat5", "1000"],
      [2, "IronBar", "250"],
      [2, "EquipmentShoes1", "4"],
      [3, "CopperBar", "500"],
      [1, "PureWater", "4"],
      [0, "PureWater", "9"],
      [0, "Bug1", "2000"],
      [0, "Bug2", "1250"]
    ],
    "detRecipeTotals": [
      ["PureWater", 13],
      ["Bug1", 2000],
      ["Bug2", 1250],
      ["GoldBar", 600],
      ["CraftMat5", 1000],
      ["IronBar", 250],
      ["CopperBar", 500]
    ],
    "notes": " "
  },
  "EquipmentShoes2": {
    "displayName": "Eyern Boots",
    "sellPrice": "20",
    "typeGen": "aShoes",
    "ID": "3",
    "Type": "Shoes",
    "lvReqToEquip": "15",
    "Class": "All",
    "Defence": "1",
    "Upgrade_Slots_Left": "2",
    "miscUp1": "100% Novelty",
    "notes": " "
  },
  "EquipmentPendant1": {
    "displayName": "Mint Icey",
    "sellPrice": "420",
    "typeGen": "aPendant",
    "ID": "3",
    "Type": "Pendant",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "1",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "LUK": "1",
    "miscUp1": "1% Xp From Monsters",
    "notes": " "
  },
  "EquipmentPendant2": {
    "displayName": "Strawbu Icey",
    "sellPrice": "420",
    "typeGen": "aPendant",
    "ID": "3",
    "Type": "Pendant",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "2",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "LUK": "1",
    "miscUp1": "2% Xp From Monsters",
    "notes": " "
  },
  "EquipmentPendant3": {
    "displayName": "Rok Road Icey",
    "sellPrice": "420",
    "typeGen": "aPendant",
    "ID": "3",
    "Type": "Pendant",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "3",
    "STR": "2",
    "AGI": "2",
    "WIS": "2",
    "LUK": "2",
    "Upgrade_Slots_Left": "1",
    "miscUp1": "3% Xp From Monsters",
    "notes": " "
  },
  "EquipmentPendant4": {
    "displayName": "Rainbo Icey",
    "sellPrice": "420",
    "typeGen": "aPendant",
    "ID": "3",
    "Type": "Pendant",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "5",
    "STR": "2",
    "AGI": "2",
    "WIS": "2",
    "LUK": "2",
    "Upgrade_Slots_Left": "1",
    "miscUp1": "4% Xp From Monsters",
    "notes": " "
  },
  "EquipmentPendant5": {
    "displayName": "Chocotastic Icey",
    "sellPrice": "420",
    "typeGen": "aPendant",
    "ID": "3",
    "Type": "Pendant",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "7",
    "STR": "3",
    "AGI": "3",
    "WIS": "3",
    "LUK": "3",
    "Upgrade_Slots_Left": "1",
    "miscUp1": "5% Xp From Monsters",
    "notes": " "
  },
  "EquipmentPendant6": {
    "displayName": "Blubbery Icey",
    "sellPrice": "420",
    "typeGen": "aPendant",
    "ID": "3",
    "Type": "Pendant",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "10",
    "STR": "3",
    "AGI": "3",
    "WIS": "3",
    "LUK": "3",
    "Upgrade_Slots_Left": "2",
    "miscUp1": "6% Xp From Monsters",
    "notes": " "
  },
  "EquipmentPendant7": {
    "displayName": "Lava Icey",
    "sellPrice": "420",
    "typeGen": "aPendant",
    "ID": "3",
    "Type": "Pendant",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "12",
    "STR": "4",
    "AGI": "4",
    "WIS": "4",
    "LUK": "4",
    "Upgrade_Slots_Left": "2",
    "miscUp1": "8% Xp From Monsters",
    "notes": " "
  },
  "EquipmentPendant8": {
    "displayName": "Legends Icey",
    "sellPrice": "27",
    "typeGen": "aPendant",
    "ID": "3",
    "Type": "Pendant",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "15",
    "STR": "5",
    "AGI": "5",
    "WIS": "5",
    "LUK": "5",
    "Upgrade_Slots_Left": "3",
    "miscUp1": "10% Xp From Monsters",
    "notes": " "
  },
  "EquipmentPendant9": {
    "displayName": "Little Wooden Katana",
    "sellPrice": "200",
    "typeGen": "aPendant",
    "ID": "3",
    "Type": "Pendant",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "2",
    "AGI": "1",
    "Upgrade_Slots_Left": "1",
    "sources": ["Beating Up Frogs for some Sauce"],
    "notes": " "
  },
  "EquipmentPendant10": {
    "displayName": "Sleek Shank",
    "sellPrice": "2235",
    "typeGen": "aPendant",
    "ID": "3",
    "Type": "Pendant",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "1",
    "Defence": "4",
    "Upgrade_Slots_Left": "2",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "recipeData": {
      "recipe": [
        ["CraftMat1", "300"],
        ["TestObj1", "3"],
        ["EquipmentBows1", "3"],
        ["EquipmentWands1", "3"]
      ],
      "levelReqToCraft": "10",
      "expGiven": "350",
      "no": 38,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "CraftMat1", "300"],
      [0, "TestObj1", "3"],
      [1, "Grasslands1", "75"],
      [1, "CopperBar", "30"],
      [0, "EquipmentBows1", "3"],
      [1, "Grasslands1", "75"],
      [1, "CraftMat1", "90"],
      [0, "EquipmentWands1", "3"],
      [1, "Grasslands1", "75"],
      [1, "OakTree", "90"]
    ],
    "detRecipeTotals": [
      ["CraftMat1", 390],
      ["Grasslands1", 225],
      ["CopperBar", 30],
      ["OakTree", 90]
    ],
    "notes": " "
  },
  "EquipmentPendant11": {
    "displayName": "Carrot Horror",
    "sellPrice": "500",
    "typeGen": "aPendant",
    "ID": "3",
    "Type": "Pendant",
    "lvReqToEquip": "14",
    "Class": "All",
    "AGI": "2",
    "WIS": "5",
    "LUK": "2",
    "Upgrade_Slots_Left": "2",
    "sources": ["Investigator by Day, Prankster by Night"],
    "notes": " "
  },
  "EquipmentPendant12": {
    "displayName": "Tarantulight",
    "sellPrice": "6500",
    "typeGen": "aPendant",
    "ID": "3",
    "Type": "Pendant",
    "lvReqToEquip": "20",
    "Class": "All",
    "STR": "2",
    "AGI": "2",
    "WIS": "2",
    "LUK": "5",
    "Upgrade_Slots_Left": "3",
    "sources": ["Encroaching Forest Villas Vendor"],
    "shopData": [
      {
        "vendor": "Encroaching Forest Villas",
        "quantity": "1",
        "no": 7
      }
    ],
    "notes": " "
  },
  "EquipmentPendant13": {
    "displayName": "Quartz Pendant",
    "sellPrice": "6500",
    "typeGen": "aPendant",
    "ID": "3",
    "Type": "Pendant",
    "lvReqToEquip": "20",
    "Class": "All",
    "STR": "2",
    "AGI": "2",
    "WIS": "2",
    "LUK": "5",
    "Upgrade_Slots_Left": "3",
    "notes": " "
  },
  "EquipmentPendant14": {
    "displayName": "Fuscismatia",
    "sellPrice": "10000",
    "typeGen": "aPendant",
    "ID": "3",
    "Type": "Pendant",
    "lvReqToEquip": "70",
    "Class": "All",
    "WIS": "10",
    "Defence": "5",
    "Upgrade_Slots_Left": "3",
    "sources": ["Snelbie"],
    "detdrops": [["Snelbie", "0.000002", "1"]],
    "uses": [["BadgeD3", "1", "Crafting"]],
    "miscUp1": "30 Purple Depth",
    "notes": " "
  },
  "EquipmentPendant15": {
    "displayName": "Lucky Fish Head",
    "sellPrice": "6500",
    "typeGen": "aPendant",
    "ID": "3",
    "Type": "Pendant",
    "lvReqToEquip": "20",
    "Class": "All",
    "STR": "2",
    "AGI": "2",
    "WIS": "2",
    "LUK": "5",
    "Upgrade_Slots_Left": "3",
    "notes": " "
  },
  "EquipmentPendant16": {
    "displayName": "Strung Bludgeon",
    "sellPrice": "271600",
    "typeGen": "aPendant",
    "ID": "3",
    "Type": "Pendant",
    "lvReqToEquip": "20",
    "Class": "All",
    "Weapon_Power": "4",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Mafioso"],
    "recipeData": {
      "recipe": [
        ["Forest3", "9000"],
        ["DesertA1b", "10"],
        ["PureWater", "20"]
      ],
      "levelReqToCraft": "28",
      "expGiven": "28000",
      "no": 18,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Mafioso"]
    },
    "detrecipe": [
      [0, "Forest3", "9000"],
      [0, "DesertA1b", "10"],
      [0, "PureWater", "20"]
    ],
    "detRecipeTotals": [
      ["Forest3", 9000],
      ["DesertA1b", 10],
      ["PureWater", 20]
    ],
    "notes": " "
  },
  "EquipmentPendant17": {
    "displayName": "Chaotic Amarok Pendant",
    "sellPrice": "4150",
    "typeGen": "aPendant",
    "ID": "3",
    "Type": "Pendant",
    "lvReqToEquip": "30",
    "Class": "All",
    "Weapon_Power": "2",
    "WIS": "12",
    "Upgrade_Slots_Left": "4",
    "sources": ["Smithing"],
    "recipeData": {
      "recipe": [
        ["Quest29", "4"],
        ["Quest17", "10"],
        ["PureWater", "25"]
      ],
      "levelReqToCraft": "25",
      "expGiven": "15000",
      "no": 72,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Blunder Hills Merit Shop"]
    },
    "detrecipe": [
      [0, "Quest29", "4"],
      [0, "Quest17", "10"],
      [0, "PureWater", "25"]
    ],
    "detRecipeTotals": [
      ["Quest29", 4],
      ["Quest17", 10],
      ["PureWater", 25]
    ],
    "notes": " "
  },
  "EquipmentPendant18": {
    "displayName": "Strung Steamy",
    "sellPrice": "1",
    "typeGen": "aPendant",
    "ID": "3",
    "Type": "Pendant",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "LUK": "3",
    "miscUp1": "3% Drop Chance",
    "notes": "Limited-time reward for players on Steam during the release on the Steam platform"
  },
  "EquipmentRings1": {
    "displayName": "Gold Ring",
    "sellPrice": "200",
    "typeGen": "aRing",
    "ID": "3",
    "Type": "Ring",
    "lvReqToEquip": "15",
    "Class": "All",
    "Weapon_Power": "5",
    "STR": "3",
    "AGI": "3",
    "LUK": "3",
    "Upgrade_Slots_Left": "2",
    "notes": " "
  },
  "EquipmentRings2": {
    "displayName": "Copper Band",
    "sellPrice": "2100",
    "typeGen": "aRing",
    "ID": "3",
    "Type": "Ring",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "LUK": "3",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from DropTable1"],
    "uses": [
      ["EquipmentRings14", "1", "Crafting"],
      ["Plan-it Express", "Lots", "Post Office"]
    ],
    "recipeData": {
      "recipe": [["CopperBar", "300"]],
      "levelReqToCraft": "11",
      "expGiven": "330",
      "no": 28,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["DropTable1"]
    },
    "detrecipe": [[0, "CopperBar", "300"]],
    "detRecipeTotals": [["CopperBar", 300]],
    "notes": " "
  },
  "EquipmentRings3": {
    "displayName": "Steel Band",
    "sellPrice": "19200",
    "typeGen": "aRing",
    "ID": "3",
    "Type": "Ring",
    "lvReqToEquip": "15",
    "Class": "All",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "LUK": "4",
    "Defence": "1",
    "Upgrade_Slots_Left": "4",
    "sources": [
      "Smithing",
      "Recipe from DropTable3",
      "Recipe from Tasks Unlocks"
    ],
    "uses": [["EquipmentRings14", "1", "Crafting"]],
    "recipeData": {
      "recipe": [["IronBar", "600"]],
      "levelReqToCraft": "13",
      "expGiven": "700",
      "no": 40,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["DropTable3", "Tasks Unlocks"]
    },
    "detrecipe": [[0, "IronBar", "600"]],
    "detRecipeTotals": [["IronBar", 600]],
    "notes": " "
  },
  "EquipmentRings4": {
    "displayName": "Molden Crust",
    "sellPrice": "200",
    "typeGen": "aRing",
    "ID": "3",
    "Type": "Ring",
    "lvReqToEquip": "15",
    "Class": "All",
    "Weapon_Power": "5",
    "STR": "3",
    "AGI": "3",
    "LUK": "3",
    "Upgrade_Slots_Left": "2",
    "notes": " "
  },
  "EquipmentRings5": {
    "displayName": "Toxic Bubbles Band",
    "sellPrice": "200",
    "typeGen": "aRing",
    "ID": "3",
    "Type": "Ring",
    "lvReqToEquip": "15",
    "Class": "All",
    "Weapon_Power": "5",
    "STR": "3",
    "AGI": "3",
    "LUK": "3",
    "Upgrade_Slots_Left": "2",
    "notes": " "
  },
  "EquipmentRings6": {
    "displayName": "Death Wish",
    "sellPrice": "200",
    "typeGen": "aRing",
    "ID": "3",
    "Type": "Ring",
    "lvReqToEquip": "55",
    "Class": "All",
    "Weapon_Power": "4",
    "Defence": "6",
    "Upgrade_Slots_Left": "4",
    "sources": ["Waitin' for the Cards to Drop"],
    "miscUp1": "5% Boss Damage",
    "notes": " "
  },
  "EquipmentRings7": {
    "displayName": "Pugilist Demise",
    "sellPrice": "4000",
    "typeGen": "aRing",
    "ID": "3",
    "Type": "Ring",
    "lvReqToEquip": "9",
    "Class": "All",
    "STR": "3",
    "Upgrade_Slots_Left": "2",
    "sources": ["Blunder Hills Vendor"],
    "miscUp1": "4% Boss Damage",
    "shopData": [
      {
        "vendor": "Blunder Hills",
        "quantity": "1",
        "no": 12
      }
    ],
    "notes": " "
  },
  "EquipmentRings8": {
    "displayName": "The Used Bandaid",
    "sellPrice": "2500",
    "typeGen": "aRing",
    "ID": "3",
    "Type": "Ring",
    "lvReqToEquip": "9",
    "Class": "All",
    "Weapon_Power": "3",
    "STR": "6",
    "AGI": "4",
    "LUK": "1",
    "UQ1txt": "%_BOSS_DAMAGE",
    "Upgrade_Slots_Left": "2",
    "notes": " "
  },
  "EquipmentRings9": {
    "displayName": "Chat Ring",
    "sellPrice": "2500",
    "typeGen": "aRing",
    "ID": "3",
    "Type": "Ring",
    "lvReqToEquip": "12",
    "Class": "All",
    "Weapon_Power": "3",
    "STR": "6",
    "AGI": "2",
    "UQ1txt": "%_BOSS_DAMAGE",
    "Upgrade_Slots_Left": "2",
    "notes": " "
  },
  "EquipmentRings10": {
    "displayName": "Spikeweed Ring",
    "sellPrice": "2500",
    "typeGen": "aRing",
    "ID": "3",
    "Type": "Ring",
    "lvReqToEquip": "9",
    "Class": "All",
    "Weapon_Power": "3",
    "STR": "6",
    "AGI": "2",
    "Upgrade_Slots_Left": "2",
    "notes": " "
  },
  "EquipmentRings11": {
    "displayName": "Defenders Dignity",
    "sellPrice": "42750",
    "typeGen": "aRing",
    "ID": "3",
    "Type": "Ring",
    "lvReqToEquip": "30",
    "Class": "All",
    "Defence": "15",
    "Upgrade_Slots_Left": "2",
    "sources": ["Smithing", "Recipe from Mimic"],
    "recipeData": {
      "recipe": [
        ["Fish1", "10000"],
        ["Sewers1b", "4"],
        ["PureWater", "15"]
      ],
      "levelReqToCraft": "23",
      "expGiven": "10000",
      "no": 17,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Mimic"]
    },
    "detrecipe": [
      [0, "Fish1", "10000"],
      [0, "Sewers1b", "4"],
      [0, "PureWater", "15"]
    ],
    "detRecipeTotals": [
      ["Fish1", 10000],
      ["Sewers1b", 4],
      ["PureWater", 15]
    ],
    "notes": " "
  },
  "EquipmentRingsFishing1": {
    "displayName": "Shallow Watering",
    "sellPrice": "2500",
    "typeGen": "aRing",
    "ID": "3",
    "Type": "Ring",
    "lvReqToEquip": "9",
    "Class": "All",
    "Weapon_Power": "3",
    "STR": "6",
    "AGI": "2",
    "Upgrade_Slots_Left": "2",
    "miscUp1": "20 Yellow Depth",
    "notes": " "
  },
  "EquipmentRingsFishing2": {
    "displayName": "Oceanic Ring",
    "sellPrice": "2500",
    "typeGen": "aRing",
    "ID": "3",
    "Type": "Ring",
    "lvReqToEquip": "9",
    "Class": "All",
    "Weapon_Power": "3",
    "STR": "6",
    "AGI": "2",
    "Upgrade_Slots_Left": "2",
    "miscUp1": "30 Red Depth",
    "notes": " "
  },
  "EquipmentRingsFishing3": {
    "displayName": "Deepwater Trench Ring",
    "sellPrice": "2500",
    "typeGen": "aRing",
    "ID": "3",
    "Type": "Ring",
    "lvReqToEquip": "9",
    "Class": "All",
    "Weapon_Power": "3",
    "STR": "6",
    "AGI": "2",
    "Upgrade_Slots_Left": "2",
    "miscUp1": "40 Purple Depth",
    "notes": " "
  },
  "EquipmentRings12": {
    "displayName": "Frisbee Ring",
    "sellPrice": "5000",
    "typeGen": "aRing",
    "ID": "3",
    "Type": "Ring",
    "lvReqToEquip": "45",
    "Class": "All",
    "STR": "12",
    "Upgrade_Slots_Left": "4",
    "sources": ["Frisbee Fanatic"],
    "miscUp1": "20 Accuracy",
    "notes": " "
  },
  "EquipmentRings13": {
    "displayName": "Silver Stopwatch",
    "sellPrice": "5000",
    "typeGen": "aRing",
    "ID": "3",
    "Type": "Ring",
    "lvReqToEquip": "17",
    "Class": "All",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "LUK": "1",
    "Upgrade_Slots_Left": "3",
    "sources": ["Partycrastination"],
    "miscUp1": "2% Fight Afk Gain",
    "notes": " "
  },
  "EquipmentRings14": {
    "displayName": "Dooble Goopi",
    "sellPrice": "31300",
    "typeGen": "aRing",
    "ID": "3",
    "Type": "Ring",
    "lvReqToEquip": "30",
    "Class": "All",
    "LUK": "1",
    "Defence": "2",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Slime"],
    "miscUp1": "5% Money",
    "recipeData": {
      "recipe": [
        ["Jungle1", "1000"],
        ["EquipmentRings2", "1"],
        ["EquipmentRings3", "1"]
      ],
      "levelReqToCraft": "16",
      "expGiven": "800",
      "no": 48,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Slime"]
    },
    "detrecipe": [
      [0, "Jungle1", "1000"],
      [0, "EquipmentRings2", "1"],
      [1, "CopperBar", "300"],
      [0, "EquipmentRings3", "1"],
      [1, "IronBar", "600"]
    ],
    "detRecipeTotals": [
      ["Jungle1", 1000],
      ["CopperBar", 300],
      ["IronBar", 600]
    ],
    "notes": " "
  },
  "EquipmentRings15": {
    "displayName": "Sanic Ring",
    "sellPrice": "1",
    "typeGen": "aRing",
    "ID": "3",
    "Type": "Ring",
    "lvReqToEquip": "60",
    "Class": "All",
    "AGI": "8",
    "LUK": "4",
    "Defence": "5",
    "Upgrade_Slots_Left": "4",
    "sources": [
      "Has a 1/1M chance to drop from active kills if the Blue Hedgehog [[Star Signs|Starsign]] is equipped."
    ],
    "miscUp1": "1% Movement Speed",
    "notes": " "
  },
  "EquipmentRings16": {
    "displayName": "Efaunt Trunculus",
    "sellPrice": "143439",
    "typeGen": "aRing",
    "ID": "3",
    "Type": "Ring",
    "lvReqToEquip": "85",
    "Class": "All",
    "Weapon_Power": "3",
    "AGI": "10",
    "Defence": "8",
    "Upgrade_Slots_Left": "4",
    "sources": ["Smithing"],
    "miscUp1": "2% Crit Chance",
    "recipeData": {
      "recipe": [
        ["EfauntDrop2", "4"],
        ["EfauntDrop1", "15"],
        ["EquipmentPunching3", "1"],
        ["EquipmentBows6", "1"]
      ],
      "levelReqToCraft": "45",
      "expGiven": "500000",
      "no": 65,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Yum Yum Desert Merit Shop"]
    },
    "detrecipe": [
      [0, "EfauntDrop2", "4"],
      [0, "EfauntDrop1", "15"],
      [0, "EquipmentPunching3", "1"],
      [1, "CraftMat3", "5000"],
      [1, "EquipmentPunching2", "5"],
      [2, "CopperBar", "100"],
      [2, "OakTree", "375"],
      [2, "CraftMat5", "100"],
      [1, "ToiletTree", "2000"],
      [0, "EquipmentBows6", "1"],
      [1, "TreeInterior1b", "3"],
      [1, "Fish4", "1400"],
      [1, "EquipmentBows5", "2"],
      [2, "GoldBar", "500"],
      [2, "EquipmentBows3", "6"],
      [3, "Jungle1", "750"],
      [3, "BirchTree", "1500"],
      [2, "PureWater", "16"]
    ],
    "detRecipeTotals": [
      ["EfauntDrop2", 4],
      ["EfauntDrop1", 15],
      ["CraftMat3", 5000],
      ["ToiletTree", 2000],
      ["TreeInterior1b", 3],
      ["Fish4", 1400],
      ["CopperBar", 100],
      ["OakTree", 375],
      ["CraftMat5", 100],
      ["GoldBar", 500],
      ["PureWater", 16],
      ["Jungle1", 750],
      ["BirchTree", 1500]
    ],
    "notes": " "
  },
  "EquipmentRingsChat1": {
    "displayName": "Love Ring",
    "sellPrice": "2500",
    "typeGen": "aChatRingMTX",
    "ID": "1",
    "Type": "Chat Ring",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "1",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "LUK": "1",
    "Upgrade_Slots_Left": "3",
    "sources": ["[[Gem Shop]]"],
    "miscUp1": "69% Love",
    "notes": " "
  },
  "EquipmentRingsChat2": {
    "displayName": "Leafy Ring",
    "sellPrice": "2500",
    "typeGen": "aChatRingMTX",
    "ID": "2",
    "Type": "Chat Ring",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "1",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "LUK": "1",
    "Upgrade_Slots_Left": "3",
    "sources": ["[[Gem Shop]]"],
    "miscUp1": "100% All Natural",
    "notes": " "
  },
  "EquipmentRingsChat3": {
    "displayName": "Wealth Ring",
    "sellPrice": "2500",
    "typeGen": "aChatRingMTX",
    "ID": "3",
    "Type": "Chat Ring",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "1",
    "STR": "3",
    "AGI": "3",
    "WIS": "3",
    "LUK": "3",
    "Upgrade_Slots_Left": "3",
    "sources": ["[[Gem Shop]]"],
    "miscUp1": "777% Coolness",
    "notes": " "
  },
  "EquipmentRingsChat4": {
    "displayName": "Bob Ring",
    "sellPrice": "2500",
    "typeGen": "aChatRingMTX",
    "ID": "4",
    "Type": "Chat Ring",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "1",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "LUK": "1",
    "Upgrade_Slots_Left": "3",
    "sources": ["[[Gem Shop]]"],
    "miscUp1": "808% Bob",
    "notes": " "
  },
  "EquipmentRingsChat5": {
    "displayName": "Bubble Ring",
    "sellPrice": "2500",
    "typeGen": "aChatRingMTX",
    "ID": "5",
    "Type": "Chat Ring",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "1",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "LUK": "1",
    "UQ1txt": "%_POP_CHANCE",
    "Upgrade_Slots_Left": "3",
    "sources": ["[[Gem Shop]]"],
    "notes": " "
  },
  "EquipmentRingsChat6": {
    "displayName": "Cthulu's Ring",
    "sellPrice": "2500",
    "typeGen": "aChatRingMTX",
    "ID": "6",
    "Type": "Chat Ring",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "1",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "LUK": "1",
    "Upgrade_Slots_Left": "3",
    "sources": ["[[Gem Shop]]"],
    "miscUp1": "666% Pure Evil",
    "notes": " "
  },
  "EquipmentRingsChat8": {
    "displayName": "Lava Sez Buy More Gems",
    "sellPrice": "2500",
    "typeGen": "aChatRingMTX",
    "ID": "7",
    "Type": "Chat Ring",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "1",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "LUK": "1",
    "Upgrade_Slots_Left": "3",
    "sources": ["[[Gem Shop]]"],
    "miscUp1": "-1% Self Esteem",
    "notes": " "
  },
  "EquipmentRingsChat9": {
    "displayName": "HONK Ring",
    "sellPrice": "2500",
    "typeGen": "aChatRingMTX",
    "ID": "8",
    "Type": "Chat Ring",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "1",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "LUK": "1",
    "Upgrade_Slots_Left": "3",
    "sources": ["[[Gem Shop]]"],
    "miscUp1": "100% Honk",
    "notes": " "
  },
  "EquipmentTools1": {
    "displayName": "Junk Pickaxe",
    "sellPrice": "50",
    "typeGen": "aPick",
    "ID": "0",
    "Type": "Pickaxe",
    "lvReqToEquip": "2",
    "Class": "All",
    "Speed": "3",
    "Weapon_Power": "2",
    "STR": "1",
    "sources": ["Certified Swinger, of Pickaxes of course!"],
    "notes": " "
  },
  "EquipmentTools2": {
    "displayName": "Copper Pickaxe",
    "sellPrice": "241",
    "typeGen": "aPick",
    "ID": "1",
    "Type": "Pickaxe",
    "lvReqToEquip": "5",
    "Class": "All",
    "Speed": "3",
    "Weapon_Power": "6",
    "STR": "3",
    "Upgrade_Slots_Left": "2",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [["StampB12", "Lots", "Stamps"]],
    "recipeData": {
      "recipe": [
        ["CopperBar", "13"],
        ["Grasslands2", "30"]
      ],
      "levelReqToCraft": "3",
      "expGiven": "10",
      "no": 9,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "CopperBar", "13"],
      [0, "Grasslands2", "30"]
    ],
    "detRecipeTotals": [
      ["CopperBar", 13],
      ["Grasslands2", 30]
    ],
    "notes": " "
  },
  "EquipmentTools3": {
    "displayName": "Iron Pickaxe",
    "sellPrice": "6200",
    "typeGen": "aPick",
    "ID": "0",
    "Type": "Pickaxe",
    "lvReqToEquip": "10",
    "Class": "All",
    "Speed": "4",
    "Weapon_Power": "10",
    "STR": "5",
    "AGI": "2",
    "Upgrade_Slots_Left": "2",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [
      ["EquipmentTools5", "3", "Crafting"],
      ["Plan-it Express", "Lots", "Post Office"]
    ],
    "recipeData": {
      "recipe": [
        ["IronBar", "100"],
        ["Jungle3", "200"]
      ],
      "levelReqToCraft": "13",
      "expGiven": "500",
      "no": 29,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "IronBar", "100"],
      [0, "Jungle3", "200"]
    ],
    "detRecipeTotals": [
      ["IronBar", 100],
      ["Jungle3", 200]
    ],
    "notes": " "
  },
  "EquipmentTools5": {
    "displayName": "Gold Pickaxe",
    "sellPrice": "285600",
    "typeGen": "aPick",
    "ID": "2",
    "Type": "Pickaxe",
    "lvReqToEquip": "17",
    "Class": "All",
    "Speed": "4",
    "Weapon_Power": "13",
    "STR": "8",
    "AGI": "3",
    "Upgrade_Slots_Left": "2",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["EquipmentTools6", "2", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["DesertA2", "2500"],
        ["GoldBar", "800"],
        ["EquipmentTools3", "3"]
      ],
      "levelReqToCraft": "20",
      "expGiven": "4400",
      "no": 9,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "DesertA2", "2500"],
      [0, "GoldBar", "800"],
      [0, "EquipmentTools3", "3"],
      [1, "IronBar", "300"],
      [1, "Jungle3", "600"]
    ],
    "detRecipeTotals": [
      ["DesertA2", 2500],
      ["GoldBar", 800],
      ["IronBar", 300],
      ["Jungle3", 600]
    ],
    "notes": " "
  },
  "EquipmentTools6": {
    "displayName": "Platinum Pickaxe",
    "sellPrice": "2199200",
    "typeGen": "aPick",
    "ID": "3",
    "Type": "Pickaxe",
    "lvReqToEquip": "27",
    "Class": "All",
    "Speed": "4",
    "Weapon_Power": "16",
    "STR": "11",
    "AGI": "4",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [
      ["EquipmentTools7", "2", "Crafting"],
      ["Plan-it Express", "Lots", "Post Office"]
    ],
    "miscUp1": "1% Mining Efficincy",
    "recipeData": {
      "recipe": [
        ["PlatBar", "800"],
        ["DesertB3", "10500"],
        ["EquipmentTools5", "2"]
      ],
      "levelReqToCraft": "26",
      "expGiven": "16000",
      "no": 29,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "PlatBar", "800"],
      [0, "DesertB3", "10500"],
      [0, "EquipmentTools5", "2"],
      [1, "DesertA2", "5000"],
      [1, "GoldBar", "1600"],
      [1, "EquipmentTools3", "6"],
      [2, "IronBar", "600"],
      [2, "Jungle3", "1200"]
    ],
    "detRecipeTotals": [
      ["PlatBar", 800],
      ["DesertB3", 10500],
      ["DesertA2", 5000],
      ["GoldBar", 1600],
      ["IronBar", 600],
      ["Jungle3", 1200]
    ],
    "notes": " "
  },
  "EquipmentTools7": {
    "displayName": "Dementia Pickaxe",
    "sellPrice": "8560900",
    "typeGen": "aPick",
    "ID": "4",
    "Type": "Pickaxe",
    "lvReqToEquip": "37",
    "Class": "All",
    "Speed": "4",
    "Weapon_Power": "19",
    "STR": "15",
    "AGI": "5",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["EquipmentTools11", "2", "Crafting"]],
    "miscUp1": "2% Mining Efficincy",
    "recipeData": {
      "recipe": [
        ["DementiaBar", "275"],
        ["SnowA3", "15000"],
        ["EquipmentTools6", "2"]
      ],
      "levelReqToCraft": "38",
      "expGiven": "150000",
      "no": 9,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "DementiaBar", "275"],
      [0, "SnowA3", "15000"],
      [0, "EquipmentTools6", "2"],
      [1, "PlatBar", "1600"],
      [1, "DesertB3", "21000"],
      [1, "EquipmentTools5", "4"],
      [2, "DesertA2", "10000"],
      [2, "GoldBar", "3200"],
      [2, "EquipmentTools3", "12"],
      [3, "IronBar", "1200"],
      [3, "Jungle3", "2400"]
    ],
    "detRecipeTotals": [
      ["DementiaBar", 275],
      ["SnowA3", 15000],
      ["PlatBar", 1600],
      ["DesertB3", 21000],
      ["DesertA2", 10000],
      ["GoldBar", 3200],
      ["IronBar", 1200],
      ["Jungle3", 2400]
    ],
    "notes": " "
  },
  "EquipmentTools11": {
    "displayName": "Void Imperium Pik",
    "sellPrice": "19602050",
    "typeGen": "aPick",
    "ID": "5",
    "Type": "Pickaxe",
    "lvReqToEquip": "47",
    "Class": "All",
    "Speed": "5",
    "Weapon_Power": "24",
    "STR": "18",
    "AGI": "6",
    "Upgrade_Slots_Left": "4",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "miscUp1": "8% Mining Efficincy",
    "recipeData": {
      "recipe": [
        ["VoidBar", "400"],
        ["EquipmentTools7", "2"],
        ["PureWater2", "5"]
      ],
      "levelReqToCraft": "45",
      "expGiven": "400000",
      "no": 33,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "VoidBar", "400"],
      [0, "EquipmentTools7", "2"],
      [1, "DementiaBar", "550"],
      [1, "SnowA3", "30000"],
      [1, "EquipmentTools6", "4"],
      [2, "PlatBar", "3200"],
      [2, "DesertB3", "42000"],
      [2, "EquipmentTools5", "8"],
      [3, "DesertA2", "20000"],
      [3, "GoldBar", "6400"],
      [3, "EquipmentTools3", "24"],
      [4, "IronBar", "2400"],
      [4, "Jungle3", "4800"],
      [0, "PureWater2", "5"]
    ],
    "detRecipeTotals": [
      ["VoidBar", 400],
      ["PureWater2", 5],
      ["DementiaBar", 550],
      ["SnowA3", 30000],
      ["PlatBar", 3200],
      ["DesertB3", 42000],
      ["DesertA2", 20000],
      ["GoldBar", 6400],
      ["IronBar", 2400],
      ["Jungle3", 4800]
    ],
    "notes": " "
  },
  "EquipmentTools8": {
    "displayName": "Lustre Pickaxe",
    "sellPrice": "200",
    "typeGen": "aPick",
    "ID": "4",
    "Type": "Pickaxe",
    "lvReqToEquip": "60",
    "Class": "All",
    "Speed": "5",
    "Weapon_Power": "28",
    "STR": "22",
    "AGI": "7",
    "Upgrade_Slots_Left": "4",
    "miscUp1": "5% Mining Efficincy",
    "notes": " "
  },
  "EquipmentTools9": {
    "displayName": "Dreadlo Pickolo",
    "sellPrice": "200",
    "typeGen": "aPick",
    "ID": "0",
    "Type": "Pickaxe",
    "lvReqToEquip": "70",
    "Class": "All",
    "Speed": "5",
    "Weapon_Power": "35",
    "STR": "26",
    "AGI": "9",
    "Upgrade_Slots_Left": "4",
    "miscUp1": "8% Mining Efficincy",
    "notes": " "
  },
  "EquipmentTools10": {
    "displayName": "Poopy Pickaxe",
    "sellPrice": "200",
    "typeGen": "aPick",
    "ID": "1",
    "Type": "Pickaxe",
    "lvReqToEquip": "15",
    "Class": "All",
    "Speed": "2",
    "Weapon_Power": "18",
    "Defence": "3",
    "Upgrade_Slots_Left": "6",
    "sources": ["Dr Defecaus", "Fired for BS Reasons!"],
    "detdrops": [["Dr Defecaus", "0.01", "1"]],
    "miscUp1": "2% Mining Efficincy",
    "notes": " "
  },
  "EquipmentToolsHatchet0": {
    "displayName": "Old Hatchet",
    "sellPrice": "50",
    "typeGen": "aHatchet",
    "ID": "0",
    "Type": "Hatchet",
    "lvReqToEquip": "2",
    "Class": "All",
    "Speed": "3",
    "Weapon_Power": "3",
    "WIS": "1",
    "Upgrade_Slots_Left": "1",
    "sources": ["A noob's 2nd first swing"],
    "notes": " "
  },
  "EquipmentToolsHatchet3": {
    "displayName": "Copper Chopper",
    "sellPrice": "196",
    "typeGen": "aHatchet",
    "ID": "2",
    "Type": "Hatchet",
    "lvReqToEquip": "5",
    "Class": "All",
    "Speed": "3",
    "Weapon_Power": "7",
    "AGI": "1",
    "WIS": "3",
    "Upgrade_Slots_Left": "2",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [
      ["The Hamazing Plot Twist", "1", "Quests"],
      ["StampA11", "Lots", "Stamps"]
    ],
    "recipeData": {
      "recipe": [
        ["CopperBar", "13"],
        ["OakTree", "30"],
        ["CraftMat1", "15"]
      ],
      "levelReqToCraft": "4",
      "expGiven": "10",
      "no": 11,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "CopperBar", "13"],
      [0, "OakTree", "30"],
      [0, "CraftMat1", "15"]
    ],
    "detRecipeTotals": [
      ["CopperBar", 13],
      ["OakTree", 30],
      ["CraftMat1", 15]
    ],
    "notes": " "
  },
  "EquipmentToolsHatchet1": {
    "displayName": "Iron Hatchet",
    "sellPrice": "4625",
    "typeGen": "aHatchet",
    "ID": "0",
    "Type": "Hatchet",
    "lvReqToEquip": "10",
    "Class": "All",
    "Speed": "3",
    "Weapon_Power": "10",
    "STR": "2",
    "WIS": "5",
    "Upgrade_Slots_Left": "2",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [
      ["EquipmentToolsHatchet2", "3", "Crafting"],
      ["Plan-it Express", "Lots", "Post Office"],
      ["StampB10", "Lots", "Stamps"]
    ],
    "recipeData": {
      "recipe": [
        ["JungleTree", "250"],
        ["CraftMat6", "125"]
      ],
      "levelReqToCraft": "14",
      "expGiven": "680",
      "no": 31,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "JungleTree", "250"],
      [0, "CraftMat6", "125"]
    ],
    "detRecipeTotals": [
      ["JungleTree", 250],
      ["CraftMat6", 125]
    ],
    "notes": " "
  },
  "EquipmentToolsHatchet2b": {
    "displayName": "Stinky Axe",
    "sellPrice": "10000",
    "typeGen": "aHatchet",
    "ID": "2",
    "Type": "Hatchet",
    "lvReqToEquip": "15",
    "Class": "All",
    "Speed": "2",
    "Weapon_Power": "18",
    "WIS": "8",
    "LUK": "4",
    "Upgrade_Slots_Left": "6",
    "sources": ["Dr Defecaus"],
    "detdrops": [["Dr Defecaus", "0.02", "1"]],
    "notes": " "
  },
  "EquipmentToolsHatchet2": {
    "displayName": "Golden Axe",
    "sellPrice": "191375",
    "typeGen": "aHatchet",
    "ID": "1",
    "Type": "Hatchet",
    "lvReqToEquip": "17",
    "Class": "All",
    "Speed": "4",
    "Weapon_Power": "14",
    "WIS": "8",
    "LUK": "4",
    "Upgrade_Slots_Left": "2",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["EquipmentToolsHatchet4", "2", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["Quest19", "5"],
        ["DesertA3", "2000"],
        ["EquipmentToolsHatchet1", "3"]
      ],
      "levelReqToCraft": "20",
      "expGiven": "4400",
      "no": 11,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Quest19", "5"],
      [0, "DesertA3", "2000"],
      [0, "EquipmentToolsHatchet1", "3"],
      [1, "JungleTree", "750"],
      [1, "CraftMat6", "375"]
    ],
    "detRecipeTotals": [
      ["Quest19", 5],
      ["DesertA3", 2000],
      ["JungleTree", 750],
      ["CraftMat6", 375]
    ],
    "notes": " "
  },
  "EquipmentToolsHatchet4": {
    "displayName": "Plat Hatchet",
    "sellPrice": "712750",
    "typeGen": "aHatchet",
    "ID": "3",
    "Type": "Hatchet",
    "lvReqToEquip": "25",
    "Class": "All",
    "Speed": "4",
    "Weapon_Power": "18",
    "AGI": "5",
    "WIS": "14",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [
      ["EquipmentToolsHatchet5", "2", "Crafting"],
      ["Plan-it Express", "Lots", "Post Office"]
    ],
    "recipeData": {
      "recipe": [
        ["PalmTree", "6500"],
        ["CraftMat7", "5000"],
        ["EquipmentToolsHatchet2", "2"]
      ],
      "levelReqToCraft": "26",
      "expGiven": "16000",
      "no": 31,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "PalmTree", "6500"],
      [0, "CraftMat7", "5000"],
      [0, "EquipmentToolsHatchet2", "2"],
      [1, "Quest19", "10"],
      [1, "DesertA3", "4000"],
      [1, "EquipmentToolsHatchet1", "6"],
      [2, "JungleTree", "1500"],
      [2, "CraftMat6", "750"]
    ],
    "detRecipeTotals": [
      ["PalmTree", 6500],
      ["CraftMat7", 5000],
      ["Quest19", 10],
      ["DesertA3", 4000],
      ["JungleTree", 1500],
      ["CraftMat6", 750]
    ],
    "notes": " "
  },
  "EquipmentToolsHatchet5": {
    "displayName": "Dementia Dicer",
    "sellPrice": "1880500",
    "typeGen": "aHatchet",
    "ID": "4",
    "Type": "Hatchet",
    "lvReqToEquip": "35",
    "Class": "All",
    "Speed": "4",
    "Weapon_Power": "23",
    "AGI": "6",
    "WIS": "17",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["EquipmentToolsHatchet7", "2", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["SaharanFoal", "15000"],
        ["Refinery1", "50"],
        ["EquipmentToolsHatchet4", "2"]
      ],
      "levelReqToCraft": "38",
      "expGiven": "150000",
      "no": 11,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "SaharanFoal", "15000"],
      [0, "Refinery1", "50"],
      [0, "EquipmentToolsHatchet4", "2"],
      [1, "PalmTree", "13000"],
      [1, "CraftMat7", "10000"],
      [1, "EquipmentToolsHatchet2", "4"],
      [2, "Quest19", "20"],
      [2, "DesertA3", "8000"],
      [2, "EquipmentToolsHatchet1", "12"],
      [3, "JungleTree", "3000"],
      [3, "CraftMat6", "1500"]
    ],
    "detRecipeTotals": [
      ["SaharanFoal", 15000],
      ["Refinery1", 50],
      ["PalmTree", 13000],
      ["CraftMat7", 10000],
      ["Quest19", 20],
      ["DesertA3", 8000],
      ["JungleTree", 3000],
      ["CraftMat6", 1500]
    ],
    "notes": " "
  },
  "EquipmentToolsHatchet7": {
    "displayName": "Void Imperium Axe",
    "sellPrice": "5761250",
    "typeGen": "aHatchet",
    "ID": "6",
    "Type": "Hatchet",
    "lvReqToEquip": "45",
    "Class": "All",
    "Speed": "5",
    "Weapon_Power": "26",
    "AGI": "7",
    "WIS": "20",
    "Upgrade_Slots_Left": "4",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "recipeData": {
      "recipe": [
        ["Tree7", "50000"],
        ["EquipmentToolsHatchet5", "2"],
        ["PureWater2", "5"]
      ],
      "levelReqToCraft": "45",
      "expGiven": "400000",
      "no": 35,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Tree7", "50000"],
      [0, "EquipmentToolsHatchet5", "2"],
      [1, "SaharanFoal", "30000"],
      [1, "Refinery1", "100"],
      [1, "EquipmentToolsHatchet4", "4"],
      [2, "PalmTree", "26000"],
      [2, "CraftMat7", "20000"],
      [2, "EquipmentToolsHatchet2", "8"],
      [3, "Quest19", "40"],
      [3, "DesertA3", "16000"],
      [3, "EquipmentToolsHatchet1", "24"],
      [4, "JungleTree", "6000"],
      [4, "CraftMat6", "3000"],
      [0, "PureWater2", "5"]
    ],
    "detRecipeTotals": [
      ["Tree7", 50000],
      ["PureWater2", 5],
      ["SaharanFoal", 30000],
      ["Refinery1", 100],
      ["PalmTree", 26000],
      ["CraftMat7", 20000],
      ["Quest19", 40],
      ["DesertA3", 16000],
      ["JungleTree", 6000],
      ["CraftMat6", 3000]
    ],
    "notes": " "
  },
  "EquipmentToolsHatchet6": {
    "displayName": "Lustre Logger",
    "sellPrice": "200",
    "typeGen": "aHatchet",
    "ID": "5",
    "Type": "Hatchet",
    "lvReqToEquip": "65",
    "Class": "All",
    "Speed": "5",
    "Weapon_Power": "29",
    "WIS": "24",
    "LUK": "8",
    "Upgrade_Slots_Left": "4",
    "notes": " "
  },
  "EquipmentToolsHatchet8": {
    "displayName": "Starfire Hatchet",
    "sellPrice": "200",
    "typeGen": "aHatchet",
    "ID": "7",
    "Type": "Hatchet",
    "lvReqToEquip": "80",
    "Class": "All",
    "Speed": "5",
    "Weapon_Power": "35",
    "AGI": "9",
    "WIS": "28",
    "LUK": "3",
    "Upgrade_Slots_Left": "5",
    "notes": " "
  },
  "EquipmentToolsHatchet9": {
    "displayName": "Dreadlo Eviscerator",
    "sellPrice": "200",
    "typeGen": "aHatchet",
    "ID": "8",
    "Type": "Hatchet",
    "lvReqToEquip": "90",
    "Class": "All",
    "Speed": "5",
    "Weapon_Power": "40",
    "STR": "4",
    "AGI": "4",
    "WIS": "32",
    "LUK": "4",
    "Upgrade_Slots_Left": "5",
    "notes": " "
  },
  "EquipmentToolsHatchet10": {
    "displayName": "Annihilator of the Yggdrasil",
    "sellPrice": "200",
    "typeGen": "aHatchet",
    "ID": "9",
    "Type": "Hatchet",
    "lvReqToEquip": "100",
    "Class": "All",
    "Speed": "6",
    "Weapon_Power": "50",
    "STR": "5",
    "AGI": "5",
    "WIS": "40",
    "LUK": "5",
    "Upgrade_Slots_Left": "6",
    "notes": " "
  },
  "FishingRod1": {
    "displayName": "Wood Fishing Rod",
    "sellPrice": "200",
    "typeGen": "aFishingRod",
    "ID": "0",
    "Type": "Fishing Rod",
    "lvReqToEquip": "2",
    "Class": "All",
    "Speed": "3",
    "Weapon_Power": "3",
    "STR": "1",
    "Upgrade_Slots_Left": "2",
    "notes": " "
  },
  "FishingRod2": {
    "displayName": "Copper Fish Rod",
    "sellPrice": "2120",
    "typeGen": "aFishingRod",
    "ID": "0",
    "Type": "Fishing Rod",
    "lvReqToEquip": "5",
    "Class": "All",
    "Speed": "3",
    "Weapon_Power": "8",
    "STR": "2",
    "Upgrade_Slots_Left": "2",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "recipeData": {
      "recipe": [
        ["CopperBar", "200"],
        ["Fish1", "180"]
      ],
      "levelReqToCraft": "10",
      "expGiven": "200",
      "no": 73,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "CopperBar", "200"],
      [0, "Fish1", "180"]
    ],
    "detRecipeTotals": [
      ["CopperBar", 200],
      ["Fish1", 180]
    ],
    "notes": " "
  },
  "FishingRod3": {
    "displayName": "Iron Fishing Rod",
    "sellPrice": "16900",
    "typeGen": "aFishingRod",
    "ID": "1",
    "Type": "Fishing Rod",
    "lvReqToEquip": "10",
    "Class": "All",
    "Speed": "4",
    "Weapon_Power": "13",
    "STR": "4",
    "WIS": "1",
    "Upgrade_Slots_Left": "2",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["FishingRod4", "3", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["IronBar", "300"],
        ["Fish2", "650"],
        ["PureWater", "3"]
      ],
      "levelReqToCraft": "16",
      "expGiven": "750",
      "no": 77,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "IronBar", "300"],
      [0, "Fish2", "650"],
      [0, "PureWater", "3"]
    ],
    "detRecipeTotals": [
      ["IronBar", 300],
      ["Fish2", 650],
      ["PureWater", 3]
    ],
    "notes": " "
  },
  "FishingRod4": {
    "displayName": "Gold Fishing Rod",
    "sellPrice": "138200",
    "typeGen": "aFishingRod",
    "ID": "2",
    "Type": "Fishing Rod",
    "lvReqToEquip": "15",
    "Class": "All",
    "Speed": "4",
    "Weapon_Power": "19",
    "STR": "6",
    "LUK": "4",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [
      ["FishingRod5", "2", "Crafting"],
      ["Plan-it Express", "Lots", "Post Office"]
    ],
    "recipeData": {
      "recipe": [
        ["Fish2", "2500"],
        ["CraftMat9", "1000"],
        ["FishingRod3", "3"]
      ],
      "levelReqToCraft": "22",
      "expGiven": "5500",
      "no": 13,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Fish2", "2500"],
      [0, "CraftMat9", "1000"],
      [0, "FishingRod3", "3"],
      [1, "IronBar", "900"],
      [1, "Fish2", "1950"],
      [1, "PureWater", "9"]
    ],
    "detRecipeTotals": [
      ["Fish2", 4450],
      ["CraftMat9", 1000],
      ["IronBar", 900],
      ["PureWater", 9]
    ],
    "notes": " "
  },
  "FishingRod5": {
    "displayName": "Plat Fishing Rod",
    "sellPrice": "680400",
    "typeGen": "aFishingRod",
    "ID": "3",
    "Type": "Fishing Rod",
    "lvReqToEquip": "25",
    "Class": "All",
    "Speed": "5",
    "Weapon_Power": "25",
    "STR": "9",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [
      ["FishingRod6", "2", "Crafting"],
      ["Plan-it Express", "Lots", "Post Office"]
    ],
    "recipeData": {
      "recipe": [
        ["Fish4", "2000"],
        ["PlatBar", "800"],
        ["FishingRod4", "2"]
      ],
      "levelReqToCraft": "29",
      "expGiven": "29000",
      "no": 33,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Fish4", "2000"],
      [0, "PlatBar", "800"],
      [0, "FishingRod4", "2"],
      [1, "Fish2", "5000"],
      [1, "CraftMat9", "2000"],
      [1, "FishingRod3", "6"],
      [2, "IronBar", "1800"],
      [2, "Fish2", "3900"],
      [2, "PureWater", "18"]
    ],
    "detRecipeTotals": [
      ["Fish4", 2000],
      ["PlatBar", 800],
      ["Fish2", 8900],
      ["CraftMat9", 2000],
      ["IronBar", 1800],
      ["PureWater", 18]
    ],
    "notes": " "
  },
  "FishingRod6": {
    "displayName": "Dementia Rod for Fishing",
    "sellPrice": "1815800",
    "typeGen": "aFishingRod",
    "ID": "4",
    "Type": "Fishing Rod",
    "lvReqToEquip": "33",
    "Class": "All",
    "Speed": "5",
    "Weapon_Power": "30",
    "STR": "12",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["FishingRod7", "2", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["DementiaBar", "300"],
        ["Refinery1", "50"],
        ["FishingRod5", "2"]
      ],
      "levelReqToCraft": "38",
      "expGiven": "150000",
      "no": 13,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "DementiaBar", "300"],
      [0, "Refinery1", "50"],
      [0, "FishingRod5", "2"],
      [1, "Fish4", "4000"],
      [1, "PlatBar", "1600"],
      [1, "FishingRod4", "4"],
      [2, "Fish2", "10000"],
      [2, "CraftMat9", "4000"],
      [2, "FishingRod3", "12"],
      [3, "IronBar", "3600"],
      [3, "Fish2", "7800"],
      [3, "PureWater", "36"]
    ],
    "detRecipeTotals": [
      ["DementiaBar", 300],
      ["Refinery1", 50],
      ["Fish4", 4000],
      ["PlatBar", 1600],
      ["Fish2", 17800],
      ["CraftMat9", 4000],
      ["IronBar", 3600],
      ["PureWater", 36]
    ],
    "notes": " "
  },
  "FishingRod7": {
    "displayName": "Void Imperium Rod",
    "sellPrice": "3651859",
    "typeGen": "aFishingRod",
    "ID": "5",
    "Type": "Fishing Rod",
    "lvReqToEquip": "40",
    "Class": "All",
    "Speed": "5",
    "Weapon_Power": "36",
    "STR": "15",
    "Upgrade_Slots_Left": "4",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "recipeData": {
      "recipe": [
        ["Refinery3", "200"],
        ["Critter5A", "3"],
        ["FishingRod6", "2"],
        ["PureWater2", "5"]
      ],
      "levelReqToCraft": "45",
      "expGiven": "400000",
      "no": 37,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Refinery3", "200"],
      [0, "Critter5A", "3"],
      [0, "FishingRod6", "2"],
      [1, "DementiaBar", "600"],
      [1, "Refinery1", "100"],
      [1, "FishingRod5", "4"],
      [2, "Fish4", "8000"],
      [2, "PlatBar", "3200"],
      [2, "FishingRod4", "8"],
      [3, "Fish2", "20000"],
      [3, "CraftMat9", "8000"],
      [3, "FishingRod3", "24"],
      [4, "IronBar", "7200"],
      [4, "Fish2", "15600"],
      [4, "PureWater", "72"],
      [0, "PureWater2", "5"]
    ],
    "detRecipeTotals": [
      ["Refinery3", 200],
      ["Critter5A", 3],
      ["PureWater2", 5],
      ["DementiaBar", 600],
      ["Refinery1", 100],
      ["Fish4", 8000],
      ["PlatBar", 3200],
      ["Fish2", 35600],
      ["CraftMat9", 8000],
      ["IronBar", 7200],
      ["PureWater", 72]
    ],
    "notes": " "
  },
  "CatchingNet1": {
    "displayName": "Bug Net",
    "sellPrice": "100",
    "typeGen": "aBugNet",
    "ID": "0",
    "Type": "Bug Catching Net",
    "lvReqToEquip": "2",
    "Class": "All",
    "Speed": "4",
    "Weapon_Power": "4",
    "AGI": "2",
    "Upgrade_Slots_Left": "2",
    "notes": " "
  },
  "CatchingNet2": {
    "displayName": "Copper Netted Net",
    "sellPrice": "4200",
    "typeGen": "aBugNet",
    "ID": "1",
    "Type": "Bug Catching Net",
    "lvReqToEquip": "5",
    "Class": "All",
    "Speed": "4",
    "Weapon_Power": "9",
    "STR": "1",
    "AGI": "3",
    "Upgrade_Slots_Left": "2",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "recipeData": {
      "recipe": [
        ["JungleTree", "500"],
        ["Bug1", "400"]
      ],
      "levelReqToCraft": "10",
      "expGiven": "200",
      "no": 75,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "JungleTree", "500"],
      [0, "Bug1", "400"]
    ],
    "detRecipeTotals": [
      ["JungleTree", 500],
      ["Bug1", 400]
    ],
    "notes": " "
  },
  "CatchingNet3": {
    "displayName": "Reinforced Net",
    "sellPrice": "15800",
    "typeGen": "aBugNet",
    "ID": "0",
    "Type": "Bug Catching Net",
    "lvReqToEquip": "10",
    "Class": "All",
    "Speed": "4",
    "Weapon_Power": "14",
    "STR": "2",
    "AGI": "4",
    "Upgrade_Slots_Left": "2",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["CatchingNet4", "3", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["ForestTree", "800"],
        ["Bug2", "850"],
        ["PureWater", "3"]
      ],
      "levelReqToCraft": "16",
      "expGiven": "750",
      "no": 79,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "ForestTree", "800"],
      [0, "Bug2", "850"],
      [0, "PureWater", "3"]
    ],
    "detRecipeTotals": [
      ["ForestTree", 800],
      ["Bug2", 850],
      ["PureWater", 3]
    ],
    "notes": " "
  },
  "CatchingNet4": {
    "displayName": "Gilded Net",
    "sellPrice": "87400",
    "typeGen": "aBugNet",
    "ID": "2",
    "Type": "Bug Catching Net",
    "lvReqToEquip": "17",
    "Class": "All",
    "Speed": "5",
    "Weapon_Power": "20",
    "STR": "2",
    "AGI": "6",
    "Upgrade_Slots_Left": "2",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [
      ["CatchingNet5", "2", "Crafting"],
      ["Plan-it Express", "Lots", "Post Office"]
    ],
    "recipeData": {
      "recipe": [
        ["Quest19", "5"],
        ["Bug2", "2500"],
        ["CatchingNet3", "3"]
      ],
      "levelReqToCraft": "22",
      "expGiven": "5500",
      "no": 15,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Quest19", "5"],
      [0, "Bug2", "2500"],
      [0, "CatchingNet3", "3"],
      [1, "ForestTree", "2400"],
      [1, "Bug2", "2550"],
      [1, "PureWater", "9"]
    ],
    "detRecipeTotals": [
      ["Quest19", 5],
      ["Bug2", 5050],
      ["ForestTree", 2400],
      ["PureWater", 9]
    ],
    "notes": " "
  },
  "CatchingNet5": {
    "displayName": "Platinet",
    "sellPrice": "374800",
    "typeGen": "aBugNet",
    "ID": "3",
    "Type": "Bug Catching Net",
    "lvReqToEquip": "25",
    "Class": "All",
    "Speed": "5",
    "Weapon_Power": "26",
    "STR": "3",
    "AGI": "7",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["CatchingNet6", "2", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["Bug4", "7000"],
        ["Plat", "3000"],
        ["CatchingNet4", "2"]
      ],
      "levelReqToCraft": "29",
      "expGiven": "29000",
      "no": 35,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Bug4", "7000"],
      [0, "Plat", "3000"],
      [0, "CatchingNet4", "2"],
      [1, "Quest19", "10"],
      [1, "Bug2", "5000"],
      [1, "CatchingNet3", "6"],
      [2, "ForestTree", "4800"],
      [2, "Bug2", "5100"],
      [2, "PureWater", "18"]
    ],
    "detRecipeTotals": [
      ["Bug4", 7000],
      ["Plat", 3000],
      ["Quest19", 10],
      ["Bug2", 10100],
      ["ForestTree", 4800],
      ["PureWater", 18]
    ],
    "notes": " "
  },
  "CatchingNet6": {
    "displayName": "Dementia Net",
    "sellPrice": "1234600",
    "typeGen": "aBugNet",
    "ID": "5",
    "Type": "Bug Catching Net",
    "lvReqToEquip": "35",
    "Class": "All",
    "Speed": "5",
    "Weapon_Power": "31",
    "STR": "4",
    "AGI": "9",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["CatchingNet7", "2", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["Bug5", "15000"],
        ["Refinery1", "50"],
        ["CatchingNet5", "2"]
      ],
      "levelReqToCraft": "38",
      "expGiven": "150000",
      "no": 15,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Bug5", "15000"],
      [0, "Refinery1", "50"],
      [0, "CatchingNet5", "2"],
      [1, "Bug4", "14000"],
      [1, "Plat", "6000"],
      [1, "CatchingNet4", "4"],
      [2, "Quest19", "20"],
      [2, "Bug2", "10000"],
      [2, "CatchingNet3", "12"],
      [3, "ForestTree", "9600"],
      [3, "Bug2", "10200"],
      [3, "PureWater", "36"]
    ],
    "detRecipeTotals": [
      ["Bug5", 15000],
      ["Refinery1", 50],
      ["Bug4", 14000],
      ["Plat", 6000],
      ["Quest19", 20],
      ["Bug2", 20200],
      ["ForestTree", 9600],
      ["PureWater", 36]
    ],
    "notes": " "
  },
  "CatchingNet7": {
    "displayName": "Void Imperium Net",
    "sellPrice": "4469450",
    "typeGen": "aBugNet",
    "ID": "4",
    "Type": "Bug Catching Net",
    "lvReqToEquip": "45",
    "Class": "All",
    "Speed": "5",
    "Weapon_Power": "37",
    "STR": "6",
    "AGI": "12",
    "Upgrade_Slots_Left": "4",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "recipeData": {
      "recipe": [
        ["Bug6", "50000"],
        ["CatchingNet6", "2"],
        ["PureWater2", "5"]
      ],
      "levelReqToCraft": "45",
      "expGiven": "400000",
      "no": 39,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Bug6", "50000"],
      [0, "CatchingNet6", "2"],
      [1, "Bug5", "30000"],
      [1, "Refinery1", "100"],
      [1, "CatchingNet5", "4"],
      [2, "Bug4", "28000"],
      [2, "Plat", "12000"],
      [2, "CatchingNet4", "8"],
      [3, "Quest19", "40"],
      [3, "Bug2", "20000"],
      [3, "CatchingNet3", "24"],
      [4, "ForestTree", "19200"],
      [4, "Bug2", "20400"],
      [4, "PureWater", "72"],
      [0, "PureWater2", "5"]
    ],
    "detRecipeTotals": [
      ["Bug6", 50000],
      ["PureWater2", 5],
      ["Bug5", 30000],
      ["Refinery1", 100],
      ["Bug4", 28000],
      ["Plat", 12000],
      ["Quest19", 40],
      ["Bug2", 40400],
      ["ForestTree", 19200],
      ["PureWater", 72]
    ],
    "notes": " "
  },
  "TrapBoxSet1": {
    "displayName": "Cardboard Traps",
    "sellPrice": "5000",
    "typeGen": "aTrap",
    "ID": "1",
    "Type": "Trap Box Set",
    "lvReqToEquip": "1",
    "Class": "All",
    "Speed": "4",
    "Weapon_Power": "4",
    "AGI": "2",
    "Upgrade_Slots_Left": "1",
    "sources": ["Frostbite Towndra Vendor", "Pelt for the Pelt God"],
    "uses": [["Pelt for the Pelt God", "1", "Quests"]],
    "shopData": [
      {
        "vendor": "Frostbite Towndra",
        "quantity": "99",
        "no": 3
      }
    ],
    "notes": " "
  },
  "TrapBoxSet2": {
    "displayName": "Silkskin Traps",
    "sellPrice": "600",
    "typeGen": "aTrap",
    "ID": "2",
    "Type": "Trap Box Set",
    "lvReqToEquip": "10",
    "Class": "All",
    "Speed": "4",
    "Weapon_Power": "8",
    "AGI": "4",
    "Upgrade_Slots_Left": "1",
    "sources": ["Smithing", "Recipe from Start"],
    "recipeData": {
      "recipe": [
        ["Critter1A", "1"],
        ["Refinery1", "5"]
      ],
      "levelReqToCraft": "16",
      "expGiven": "750",
      "no": 81,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "Critter1A", "1"],
      [0, "Refinery1", "5"]
    ],
    "detRecipeTotals": [
      ["Critter1A", 1],
      ["Refinery1", 5]
    ],
    "notes": " "
  },
  "TrapBoxSet3": {
    "displayName": "Wooden Traps",
    "sellPrice": "6000",
    "typeGen": "aTrap",
    "ID": "3",
    "Type": "Trap Box Set",
    "lvReqToEquip": "20",
    "Class": "All",
    "Speed": "4",
    "Weapon_Power": "13",
    "AGI": "7",
    "Upgrade_Slots_Left": "2",
    "sources": ["Smithing"],
    "uses": [["TrapBoxSet4", "2", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["Critter2A", "2"],
        ["Refinery1", "20"]
      ],
      "levelReqToCraft": "29",
      "expGiven": "4000",
      "no": 69,
      "tab": "Anvil Tab 2",
      "recipeFrom": []
    },
    "detrecipe": [
      [0, "Critter2A", "2"],
      [0, "Refinery1", "20"]
    ],
    "detRecipeTotals": [
      ["Critter2A", 2],
      ["Refinery1", 20]
    ],
    "notes": " "
  },
  "TrapBoxSet4": {
    "displayName": "Natural Traps",
    "sellPrice": "17015",
    "typeGen": "aTrap",
    "ID": "4",
    "Type": "Trap Box Set",
    "lvReqToEquip": "30",
    "Class": "All",
    "Speed": "4",
    "Weapon_Power": "20",
    "AGI": "10",
    "Upgrade_Slots_Left": "2",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["TrapBoxSet5", "1", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["Critter4A", "5"],
        ["Refinery1", "50"],
        ["TrapBoxSet3", "2"]
      ],
      "levelReqToCraft": "40",
      "expGiven": "225000",
      "no": 17,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Critter4A", "5"],
      [0, "Refinery1", "50"],
      [0, "TrapBoxSet3", "2"],
      [1, "Critter2A", "4"],
      [1, "Refinery1", "40"]
    ],
    "detRecipeTotals": [
      ["Critter4A", 5],
      ["Refinery1", 90],
      ["Critter2A", 4]
    ],
    "notes": " "
  },
  "TrapBoxSet5": {
    "displayName": "Steel Traps",
    "sellPrice": "17283",
    "typeGen": "aTrap",
    "ID": "5",
    "Type": "Trap Box Set",
    "lvReqToEquip": "40",
    "Class": "All",
    "Speed": "4",
    "Weapon_Power": "26",
    "AGI": "12",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "recipeData": {
      "recipe": [
        ["Critter6A", "6"],
        ["TrapBoxSet4", "1"],
        ["PureWater2", "5"]
      ],
      "levelReqToCraft": "46",
      "expGiven": "500000",
      "no": 41,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Critter6A", "6"],
      [0, "TrapBoxSet4", "1"],
      [1, "Critter4A", "5"],
      [1, "Refinery1", "50"],
      [1, "TrapBoxSet3", "2"],
      [2, "Critter2A", "4"],
      [2, "Refinery1", "40"],
      [0, "PureWater2", "5"]
    ],
    "detRecipeTotals": [
      ["Critter6A", 6],
      ["PureWater2", 5],
      ["Critter4A", 5],
      ["Refinery1", 90],
      ["Critter2A", 4]
    ],
    "notes": " "
  },
  "TrapBoxSet6": {
    "displayName": "Royal Traps",
    "sellPrice": "5",
    "typeGen": "aTrap",
    "ID": "6",
    "Type": "Trap Box Set",
    "lvReqToEquip": "50",
    "Class": "All",
    "Speed": "4",
    "Weapon_Power": "34",
    "AGI": "15",
    "Upgrade_Slots_Left": "4",
    "notes": " "
  },
  "WorshipSkull1": {
    "displayName": "Wax Skull",
    "sellPrice": "5000",
    "typeGen": "aSkull",
    "ID": "0",
    "Type": "Worship Skull",
    "lvReqToEquip": "1",
    "Class": "All",
    "Speed": "4",
    "Weapon_Power": "4",
    "WIS": "2",
    "Upgrade_Slots_Left": "1",
    "sources": ["Frostbite Towndra Vendor"],
    "shopData": [
      {
        "vendor": "Frostbite Towndra",
        "quantity": "99",
        "no": 4
      }
    ]
  },
  "WorshipSkull2": {
    "displayName": "Ceramic Skull",
    "sellPrice": "1250",
    "typeGen": "aSkull",
    "ID": "0",
    "Type": "Worship Skull",
    "lvReqToEquip": "10",
    "Class": "All",
    "Speed": "5",
    "Weapon_Power": "8",
    "WIS": "4",
    "Upgrade_Slots_Left": "1",
    "sources": ["Smithing", "Recipe from Start"],
    "recipeData": {
      "recipe": [
        ["Soul1", "250"],
        ["Refinery1", "5"]
      ],
      "levelReqToCraft": "16",
      "expGiven": "750",
      "no": 83,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "Soul1", "250"],
      [0, "Refinery1", "5"]
    ],
    "detRecipeTotals": [
      ["Soul1", 250],
      ["Refinery1", 5]
    ],
    "notes": " "
  },
  "WorshipSkull3": {
    "displayName": "Horned Skull",
    "sellPrice": "13300",
    "typeGen": "aSkull",
    "ID": "0",
    "Type": "Worship Skull",
    "lvReqToEquip": "25",
    "Class": "All",
    "Speed": "5",
    "Weapon_Power": "13",
    "WIS": "7",
    "Upgrade_Slots_Left": "2",
    "sources": ["Smithing"],
    "uses": [["WorshipSkull4", "2", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["Soul2", "1200"],
        ["Refinery1", "25"]
      ],
      "levelReqToCraft": "29",
      "expGiven": "4000",
      "no": 71,
      "tab": "Anvil Tab 2",
      "recipeFrom": []
    },
    "detrecipe": [
      [0, "Soul2", "1200"],
      [0, "Refinery1", "25"]
    ],
    "detRecipeTotals": [
      ["Soul2", 1200],
      ["Refinery1", 25]
    ],
    "notes": " "
  },
  "WorshipSkull4": {
    "displayName": "Prickle Skull",
    "sellPrice": "171600",
    "typeGen": "aSkull",
    "ID": "0",
    "Type": "Worship Skull",
    "lvReqToEquip": "35",
    "Class": "All",
    "Speed": "6",
    "Weapon_Power": "20",
    "WIS": "10",
    "Upgrade_Slots_Left": "2",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["WorshipSkull5", "2", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["Soul3", "7000"],
        ["Refinery1", "50"],
        ["WorshipSkull3", "2"]
      ],
      "levelReqToCraft": "40",
      "expGiven": "225000",
      "no": 19,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Soul3", "7000"],
      [0, "Refinery1", "50"],
      [0, "WorshipSkull3", "2"],
      [1, "Soul2", "2400"],
      [1, "Refinery1", "50"]
    ],
    "detRecipeTotals": [
      ["Soul3", 7000],
      ["Refinery1", 100],
      ["Soul2", 2400]
    ],
    "notes": " "
  },
  "WorshipSkull5": {
    "displayName": "Manifested Skull",
    "sellPrice": "763450",
    "typeGen": "aSkull",
    "ID": "0",
    "Type": "Worship Skull",
    "lvReqToEquip": "55",
    "Class": "All",
    "Speed": "7",
    "Weapon_Power": "26",
    "WIS": "12",
    "Upgrade_Slots_Left": "3",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "recipeData": {
      "recipe": [
        ["Soul4", "12000"],
        ["WorshipSkull4", "2"],
        ["PureWater2", "5"]
      ],
      "levelReqToCraft": "46",
      "expGiven": "500000",
      "no": 43,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Soul4", "12000"],
      [0, "WorshipSkull4", "2"],
      [1, "Soul3", "14000"],
      [1, "Refinery1", "100"],
      [1, "WorshipSkull3", "4"],
      [2, "Soul2", "4800"],
      [2, "Refinery1", "100"],
      [0, "PureWater2", "5"]
    ],
    "detRecipeTotals": [
      ["Soul4", 12000],
      ["PureWater2", 5],
      ["Soul3", 14000],
      ["Refinery1", 200],
      ["Soul2", 4800]
    ],
    "notes": " "
  },
  "WorshipSkull6": {
    "displayName": "Wax Skull",
    "sellPrice": "100",
    "typeGen": "aSkull",
    "ID": "0",
    "Type": "Worship Skull",
    "lvReqToEquip": "70",
    "Class": "All",
    "Speed": "4",
    "Weapon_Power": "34",
    "WIS": "15",
    "Upgrade_Slots_Left": "4"
  },
  "FoodHealth1": {
    "displayName": "Nomwich",
    "sellPrice": "2",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Health Food",
    "Effect": "Health",
    "Trigger": "50",
    "sources": [
      "Blunder Hills Vendor",
      "Green Mushroom",
      "Mr. Worldwide",
      "DropTable1"
    ],
    "detdrops": [
      ["Green Mushroom", "0.005", "3"],
      ["Crystal Carrot", "0.15", "10.0"],
      ["Frog", "0.00095", "10.0"],
      ["Bored Bean", "0.001125", "10.0"],
      ["Red Mushroom", "0.0013", "10.0"],
      ["Amarok", "0.25", "20.0"],
      ["Chaotic Amarok", "0.25", "40.0"],
      ["Nightmare Amarok", "0.25", "20.0"],
      ["Baba Yaga", "0.25", "20.0"],
      ["Dewdrop Bronze Chest", "0.25", "10.0"]
    ],
    "uses": [
      ["MaxCapBag8", "75", "Crafting"],
      ["The Hungry Stowaway", "50", "Quests"]
    ],
    "description": [
      "Auto-Used when your health goes",
      "below 50%.",
      "Restores 20 HP.",
      "Has a 30 second Cooldown."
    ],
    "shopData": [
      {
        "vendor": "Blunder Hills",
        "quantity": "750",
        "no": 0
      }
    ],
    "notes": " "
  },
  "FoodHealth3": {
    "displayName": "Hot Dog",
    "sellPrice": "7",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Health Food",
    "Effect": "Health",
    "Trigger": "50",
    "sources": [
      "Blunder Hills Vendor",
      "Encroaching Forest Villas Vendor",
      "DropTable2"
    ],
    "detdrops": [
      ["Crystal Carrot", "0.175", "15.0"],
      ["Slime", "0.0014", "15.0"],
      ["Baby Boa", "0.0017499999999999998", "15.0"],
      ["Carrotman", "0.0021", "15.0"],
      ["Amarok", "0.35", "30.0"],
      ["Chaotic Amarok", "0.35", "60.0"],
      ["Nightmare Amarok", "0.35", "30.0"],
      ["Baba Yaga", "0.35", "15.0"],
      ["Dewdrop Silver Chest", "0.35", "15.0"]
    ],
    "uses": [
      ["MaxCapBag8", "25", "Crafting"],
      ["Peanut", "2", "Crafting"]
    ],
    "description": [
      "Auto-Used when your health goes",
      "below 50%.",
      "Restores 50 HP.",
      "Has a 30 second Cooldown."
    ],
    "shopData": [
      {
        "vendor": "Blunder Hills",
        "quantity": "750",
        "no": 1
      },
      {
        "vendor": "Encroaching Forest Villas",
        "quantity": "1000",
        "no": 0
      }
    ],
    "notes": " "
  },
  "FoodHealth2": {
    "displayName": "Cheezy Pizza",
    "sellPrice": "20",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Health Food",
    "Effect": "Health",
    "Trigger": "50",
    "sources": [
      "Blunder Hills Vendor",
      "Encroaching Forest Villas Vendor",
      "Baby Boa",
      "Carrotman",
      "DropTable3"
    ],
    "detdrops": [
      ["Baby Boa", "0.005", "3"],
      ["Carrotman", "0.006", "4"],
      ["Crystal Carrot", "0.168", "15.0"],
      ["Glublin", "0.00168", "15.0"],
      ["Wode Board", "0.0018899999999999998", "15.0"],
      ["Gigafrog", "0.0021", "15.0"],
      ["Amarok", "0.42", "30.0"],
      ["Chaotic Amarok", "0.42", "60.0"],
      ["Nightmare Amarok", "0.42", "30.0"],
      ["Dr Defecaus", "0.42", "30.0"],
      ["Baba Yaga", "0.42", "7.5"],
      ["Dewdrop Golden Chest", "0.42", "15.0"]
    ],
    "uses": [["Mushroom Munchies", "25", "Quests"]],
    "description": [
      "Auto-Used when your health goes",
      "below 50%.",
      "Restores 125 HP.",
      "Has a 30 second Cooldown."
    ],
    "shopData": [
      {
        "vendor": "Blunder Hills",
        "quantity": "750",
        "no": 2
      },
      {
        "vendor": "Encroaching Forest Villas",
        "quantity": "1000",
        "no": 1
      }
    ],
    "notes": " "
  },
  "Peanut": {
    "displayName": "Peanut",
    "sellPrice": "20",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Health Food",
    "Effect": "Health",
    "Trigger": "75",
    "sources": [
      "Simple Shippin",
      "Smithing",
      "[[Picnic Stowaway#Brunchin' with the Blobs|Recipe from Brunchin' with the Blobs]]"
    ],
    "uses": [
      ["PeanutG", "100", "Crafting"],
      ["Brunchin' with the Blobs", "100", "Quests"],
      ["A Peanut for your Thoughts", "50", "Quests"],
      ["Honk if you Love Peanuts!", "200", "Quests"],
      ["A Peanut Saved is a Peanut not Eaten!", "400", "Quests"],
      ["How It's Made, Episode 7. The Super Peanut", "500", "Quests"],
      ["Mushroom Munchies", "100", "Quests"]
    ],
    "description": [
      "Auto-Used when your health goes",
      "below 75%.",
      "Restores 80 HP.",
      "Has a 20 second Cooldown.",
      "The favorite snack of all bloblytes!"
    ],
    "recipeData": {
      "recipe": [
        ["FoodHealth3", "2"],
        ["Copper", "1"],
        ["BirchTree", "1"]
      ],
      "levelReqToCraft": "5",
      "expGiven": "2",
      "no": 51,
      "tab": "Anvil Tab 1",
      "recipeFrom": [
        "[[Picnic Stowaway#Brunchin' with the Blobs|Brunchin' with the Blobs]]"
      ]
    },
    "detrecipe": [
      [0, "FoodHealth3", "2"],
      [0, "Copper", "1"],
      [0, "BirchTree", "1"]
    ],
    "detRecipeTotals": [
      ["FoodHealth3", 2],
      ["Copper", 1],
      ["BirchTree", 1]
    ],
    "notes": " "
  },
  "FoodHealth4": {
    "displayName": "Saucy Weiner",
    "sellPrice": "120",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Health Food",
    "Effect": "Health",
    "Trigger": "50",
    "sources": ["YumYum Grotto Vendor"],
    "description": [
      "Auto-Used when your health goes",
      "below 50%.",
      "Restores 700 HP.",
      "Has a 30 second Cooldown."
    ],
    "shopData": [
      {
        "vendor": "YumYum Grotto",
        "quantity": "25000",
        "no": 2
      }
    ],
    "notes": " "
  },
  "FoodHealth6": {
    "displayName": "Kebab Sticks",
    "sellPrice": "48",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Health Food",
    "Effect": "Health",
    "Trigger": "50",
    "sources": ["YumYum Grotto Vendor", "DropTable6"],
    "detdrops": [
      ["Crystal Crabal", "0.252", "15.0"],
      ["Sandy Pot", "0.00126", "15.0"],
      ["Mimic", "0.001344", "15.0"],
      ["Crabcake", "0.0015119999999999999", "15.0"],
      ["Efaunt", "0.42", "30.0"],
      ["Nightmare Amarok", "0.42", "30.0"],
      ["Chizoar", "0.42", "30.0"],
      ["Nightmare Chizoar", "0.42", "30.0"],
      ["Biggie Hours", "0.21", "15.0"],
      ["Sandstone Bronze Chest", "0.42", "15.0"]
    ],
    "uses": [
      ["FoodCatch1", "1", "Crafting"],
      ["Early Evening Eating Endeavor", "500", "Quests"],
      ["More like 'Sleepius' lmao", "130", "Quests"]
    ],
    "description": [
      "Auto-Used when your health goes",
      "below 50%.",
      "Restores 300 HP.",
      "Has a 30 second Cooldown."
    ],
    "shopData": [
      {
        "vendor": "YumYum Grotto",
        "quantity": "25000",
        "no": 0
      }
    ],
    "notes": " "
  },
  "FoodHealth7": {
    "displayName": "Meat Pie",
    "sellPrice": "80",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Health Food",
    "Effect": "Health",
    "Trigger": "50",
    "sources": ["YumYum Grotto Vendor", "DropTable7"],
    "detdrops": [
      ["Crystal Crabal", "0.21", "15.0"],
      ["Mafioso", "0.001344", "15.0"],
      ["Sand Castle", "0.00147", "15.0"],
      ["Pincermin", "0.001554", "15.0"],
      ["Mashed Potato", "0.001638", "15.0"],
      ["Dig Doug", "0.001344", "15.0"],
      ["Efaunt", "0.42", "30.0"],
      ["Chaotic Efaunt", "0.42", "30.0"],
      ["Nightmare Amarok", "0.42", "30.0"],
      ["Chizoar", "0.42", "30.0"],
      ["Chaotic Chizoar", "0.42", "30.0"],
      ["Nightmare Chizoar", "0.42", "30.0"],
      ["Sandstone Silver Chest", "0.42", "15.0"]
    ],
    "uses": [
      ["MaxCapBagF3", "250", "Crafting"],
      ["StampC5", "Lots", "Stamps"]
    ],
    "description": [
      "Auto-Used when your health goes",
      "below 50%.",
      "Restores 500 HP.",
      "Has a 30 second Cooldown."
    ],
    "shopData": [
      {
        "vendor": "YumYum Grotto",
        "quantity": "25000",
        "no": 1
      }
    ],
    "notes": " "
  },
  "FoodHealth10": {
    "displayName": "Mountain Bread",
    "sellPrice": "140",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Health Food",
    "Effect": "Health",
    "Trigger": "50",
    "sources": ["Frostbite Towndra Vendor", "Snowman", "DropTable15"],
    "detdrops": [
      ["Snowman", ".009", "1"],
      ["Crystal Cattle", "0.25", "15.0"],
      ["Bloque", "0.00125", "15.0"],
      ["Mamooth", "0.00135", "15.0"],
      ["Penguin", "0.00155", "15.0"],
      ["Thermister", "0.00165", "15.0"],
      ["Chillsnap Silver Chest", "0.5", "15.0"]
    ],
    "description": [
      "Auto-Used when your health goes",
      "below 50%.",
      "Restores 750 HP.",
      "Has a 30 second Cooldown."
    ],
    "shopData": [
      {
        "vendor": "Frostbite Towndra",
        "quantity": "25000",
        "no": 0
      }
    ],
    "notes": " "
  },
  "FoodHealth9": {
    "displayName": "Yeti Ham",
    "sellPrice": "190",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Health Food",
    "Effect": "Health",
    "Trigger": "60",
    "sources": ["Frostbite Towndra Vendor", "Bop Box"],
    "detdrops": [["Bop Box", ".007", "1"]],
    "uses": [["MaxCapBagF5", "10000", "Crafting"]],
    "description": [
      "Auto-Used when your health goes",
      "below 60%.",
      "Restores 1000 HP.",
      "Has a 30 second Cooldown."
    ],
    "shopData": [
      {
        "vendor": "Frostbite Towndra",
        "quantity": "25000",
        "no": 1
      }
    ],
    "notes": " "
  },
  "FoodHealth11": {
    "displayName": "Sheepie Dairy",
    "sellPrice": "310",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Health Food",
    "Effect": "Health",
    "Trigger": "50",
    "sources": ["Frostbite Towndra Vendor"],
    "description": [
      "Auto-Used when your health goes",
      "below 50%.",
      "Restores 1500 HP.",
      "Has a 30 second Cooldown."
    ],
    "shopData": [
      {
        "vendor": "Frostbite Towndra",
        "quantity": "25000",
        "no": 2
      }
    ],
    "notes": " "
  },
  "FoodHealth5": {
    "displayName": "Cranberry Jam",
    "sellPrice": "32",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Health Food",
    "Effect": "Health",
    "Trigger": "50",
    "sources": ["Encroaching Forest Villas Vendor"],
    "description": [
      "Auto-Used when your health goes",
      "below 50%.",
      "Restores 200 HP.",
      "Has a 30 second Cooldown."
    ],
    "shopData": [
      {
        "vendor": "Encroaching Forest Villas",
        "quantity": "1000",
        "no": 2
      }
    ],
    "notes": " "
  },
  "FoodHealth8": {
    "displayName": "Crabby Cake Supreme",
    "sellPrice": "120",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Health Food",
    "Effect": "Health",
    "Trigger": "35",
    "description": [
      "Auto-Used when your health goes",
      "below 35%.",
      "Restores 700 HP.",
      "Has a 60 second Cooldown."
    ],
    "notes": " "
  },
  "FoodEvent8": {
    "displayName": "Milk Choco",
    "sellPrice": "10",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Health Food",
    "Effect": "Health",
    "Trigger": "80",
    "sources": ["Loveulyte", "Chocco Box", "Valentslime"],
    "detdrops": [
      ["Loveulyte", "0.25", "2"],
      ["Chocco Box", "0.25", "2"],
      ["Valentslime", "0.25", "2"]
    ],
    "description": [
      "Auto-Used when your health goes",
      "below 80%.",
      "Restores 420 HP.",
      "Has a 20 second Cooldown."
    ],
    "notes": " "
  },
  "Meatloaf": {
    "displayName": "Magic Meatloaf",
    "sellPrice": "300",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Health Food",
    "Effect": "Health",
    "Trigger": "30",
    "sources": ["Amarok", "Chaotic Amarok", "Nightmare Amarok"],
    "detdrops": [
      ["Amarok", "0.05", "1"],
      ["Chaotic Amarok", "0.10", "3"],
      ["Nightmare Amarok", "0.05", "1"]
    ],
    "uses": [["The Last Supper, at Least for Today!", "1", "Quests"]],
    "description": [
      "Auto-Used when your health goes",
      "below 30%.",
      "Restores 2000 HP.",
      "Has a 10 second Cooldown."
    ],
    "notes": " "
  },
  "FoodPotOr1": {
    "displayName": "Small Strength Potion",
    "sellPrice": "5",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Boost Food",
    "Effect": "BaseDmgBoosts",
    "Trigger": "-1",
    "sources": [
      "Blunder Hills Vendor",
      "DropTable5",
      "DropTable11",
      "DropTable12"
    ],
    "detdrops": [
      ["Crystal Carrot", "0.05", "5.0"],
      ["Choppin Oak Tree", "0.0008", "5.0"],
      ["Choppin Birch Tree", "0.0008500000000000001", "5.0"],
      ["Choppin Jungle Tree", "0.0009", "5.0"],
      ["Choppin Forest Tree", "0.00095", "5.0"],
      ["Choppin Toilet Tree", "0.00106", "5.0"],
      ["Choppin Stump Tree", "0.00102", "5.0"],
      ["Choppin Palm Tree", "0.0010500000000000002", "10.0"],
      ["Crystal Crabal", "0.035", "5.0"],
      ["Catching Flies", "0.0010500000000000002", "5.0"],
      ["Catching Butterflies", "0.0010500000000000002", "5.0"],
      ["Catching Sentient Cereal", "0.0010500000000000002", "5.0"],
      ["Catching Fruitflies", "0.0010500000000000002", "5.0"]
    ],
    "description": [
      "Increases Base Dmg by 10.",
      "15% chance to be consumed every",
      "time you defeat a monster.",
      "Must be equipped in a Food Slot to",
      "give its bonus."
    ],
    "shopData": [
      {
        "vendor": "Blunder Hills",
        "quantity": "400",
        "no": 5
      }
    ],
    "notes": " "
  },
  "FoodPotOr2": {
    "displayName": "Average Strength Potion",
    "sellPrice": "25",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Boost Food",
    "Effect": "BaseDmgBoosts",
    "Trigger": "-1",
    "sources": [
      "Encroaching Forest Villas Vendor",
      "YumYum Grotto Vendor",
      "DropTable2"
    ],
    "detdrops": [
      ["Crystal Carrot", "0.1", "10.0"],
      ["Slime", "0.0008", "10.0"],
      ["Baby Boa", "0.001", "10.0"],
      ["Carrotman", "0.0012000000000000001", "10.0"],
      ["Amarok", "0.2", "20.0"],
      ["Chaotic Amarok", "0.2", "40.0"],
      ["Nightmare Amarok", "0.2", "20.0"],
      ["Baba Yaga", "0.2", "10.0"],
      ["Dewdrop Silver Chest", "0.2", "10.0"]
    ],
    "uses": [
      ["FoodFish1", "2", "Crafting"],
      ["Mushroom Munchies", "100", "Quests"]
    ],
    "description": [
      "Increases Base Dmg by 30.",
      "13% chance to be consumed every",
      "time you defeat a monster.",
      "Must be equipped in a Food Slot to",
      "give its bonus."
    ],
    "shopData": [
      {
        "vendor": "Encroaching Forest Villas",
        "quantity": "500",
        "no": 3
      },
      {
        "vendor": "YumYum Grotto",
        "quantity": "20000",
        "no": 8
      }
    ],
    "notes": " "
  },
  "FoodPotOr3": {
    "displayName": "Decent Strength Potion",
    "sellPrice": "150",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Boost Food",
    "Effect": "BaseDmgBoosts",
    "Trigger": "-1",
    "sources": ["Frostbite Towndra Vendor", "DropTable14"],
    "detdrops": [
      ["Crystal Cattle", "0.09", "25.0"],
      ["Sheepie", "0.000375", "25.0"],
      ["Frost Flake", "0.00041999999999999996", "25.0"],
      ["Sir Stache", "0.00046499999999999997", "25.0"],
      ["Xylobone", "0.0015", "25.0"],
      ["Chillsnap Bronze Chest", "0.15", "25.0"]
    ],
    "description": [
      "Increases Base Dmg by 100.",
      "10% chance to be consumed every",
      "time you defeat a monster.",
      "Must be equipped in a Food Slot to",
      "give its bonus."
    ],
    "shopData": [
      {
        "vendor": "Frostbite Towndra",
        "quantity": "20000",
        "no": 8
      }
    ],
    "notes": " "
  },
  "FoodPotRe1": {
    "displayName": "Small Life Potion",
    "sellPrice": "4",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Boost Food",
    "Effect": "HpBaseBoosts",
    "Trigger": "-1",
    "sources": ["Blunder Hills Vendor", "DropTable3b", "DropTable3c"],
    "detdrops": [
      ["Poop", "0.0024000000000000002", "25.0"],
      ["Rat", "0.0024000000000000002", "25.0"],
      ["Walking Stick", "0.0022800000000000003", "25.0"],
      ["Nutto", "0.0026", "25.0"],
      ["Wood Mushroom", "0.0028000000000000004", "25.0"]
    ],
    "uses": [
      ["FoodChoppin1", "3", "Crafting"],
      ["Red Stuff Bad!", "8500", "Quests"]
    ],
    "description": [
      "Increases Base HP by 30.",
      "5% chance to be consumed every",
      "time you defeat a monster.",
      "Must be equipped in a Food Slot to",
      "give its bonus."
    ],
    "shopData": [
      {
        "vendor": "Blunder Hills",
        "quantity": "400",
        "no": 6
      }
    ],
    "notes": " "
  },
  "FoodPotRe2": {
    "displayName": "Average Life Potion",
    "sellPrice": "30",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Boost Food",
    "Effect": "HpBaseBoosts",
    "Trigger": "-1",
    "sources": [
      "YumYum Grotto Vendor",
      "Gigafrog",
      "The Most Important Meal of the Day"
    ],
    "detdrops": [["Gigafrog", "0.001", "5"]],
    "description": [
      "Increases Base HP by 120.",
      "4% chance to be consumed every",
      "time you defeat a monster.",
      "Must be equipped in a Food Slot to",
      "give its bonus."
    ],
    "shopData": [
      {
        "vendor": "YumYum Grotto",
        "quantity": "20000",
        "no": 10
      }
    ],
    "notes": " "
  },
  "FoodPotRe3": {
    "displayName": "Decent Life Potion",
    "sellPrice": "200",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Boost Food",
    "Effect": "HpBaseBoosts",
    "Trigger": "-1",
    "sources": ["Frostbite Towndra Vendor", "DropTable8"],
    "detdrops": [
      ["Crystal Crabal", "0.16000000000000003", "25.0"],
      ["Tyson", "0.00128", "25.0"],
      ["Moonmoon", "0.0014000000000000002", "25.0"],
      ["Sand Giant", "0.0014800000000000002", "25.0"],
      ["Snelbie", "0.00156", "25.0"],
      ["Efaunt", "0.4", "50.0"],
      ["Chaotic Efaunt", "0.4", "50.0"],
      ["Nightmare Amarok", "0.4", "50.0"],
      ["Chizoar", "0.4", "50.0"],
      ["Chaotic Chizoar", "0.4", "50.0"],
      ["Nightmare Chizoar", "0.4", "50.0"],
      ["Sandstone Golden Chest", "0.4", "25.0"]
    ],
    "description": [
      "Increases Base HP by 250.",
      "3% chance to be consumed every",
      "time you defeat a monster.",
      "Must be equipped in a Food Slot to",
      "give its bonus."
    ],
    "shopData": [
      {
        "vendor": "Frostbite Towndra",
        "quantity": "20000",
        "no": 10
      }
    ],
    "notes": " "
  },
  "FoodPotGr1": {
    "displayName": "Small Speed Potion",
    "sellPrice": "7",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Boost Food",
    "Effect": "MoveSpdBoosts",
    "Trigger": "-2",
    "sources": [
      "Blunder Hills Vendor",
      "DropTable2",
      "DropTable4",
      "DropTable10"
    ],
    "detdrops": [
      ["Crystal Carrot", "0.05", "5.0"],
      ["Slime", "0.0004", "5.0"],
      ["Baby Boa", "0.0005", "5.0"],
      ["Carrotman", "0.0006000000000000001", "5.0"],
      ["Amarok", "0.1", "10.0"],
      ["Chaotic Amarok", "0.1", "20.0"],
      ["Nightmare Amarok", "0.1", "10.0"],
      ["Baba Yaga", "0.1", "5.0"],
      ["Dewdrop Silver Chest", "0.1", "5.0"],
      ["Mining Copper", "0.0013", "5.0"],
      ["Mining Iron", "0.0014000000000000002", "5.0"],
      ["Mining Gold", "0.0015", "5.0"],
      ["Mining Plat", "0.0015400000000000001", "5.0"],
      ["Mining Dementia", "0.0016400000000000002", "5.0"],
      ["Mining Void", "0.0018", "10.0"],
      ["Mining Lustre", "0.0019", "10.0"]
    ],
    "description": [
      "Increases Move Spd by 5%.",
      "15% chance to be consumed",
      "every 10 meters walked.",
      "Must be equipped in a Food Slot to",
      "give its bonus."
    ],
    "shopData": [
      {
        "vendor": "Blunder Hills",
        "quantity": "400",
        "no": 7
      }
    ],
    "notes": " "
  },
  "FoodPotGr2": {
    "displayName": "Average Speed Potion",
    "sellPrice": "60",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Boost Food",
    "Effect": "MoveSpdBoosts",
    "Trigger": "-2",
    "sources": [
      "YumYum Grotto Vendor",
      "Plan-it Express",
      "Brunchin' with the Blobs",
      "Outta the Way Slimes",
      "DropTable6"
    ],
    "detdrops": [
      ["Crystal Crabal", "0.24", "25.0"],
      ["Sandy Pot", "0.0012000000000000001", "25.0"],
      ["Mimic", "0.00128", "25.0"],
      ["Crabcake", "0.00144", "25.0"],
      ["Efaunt", "0.4", "50.0"],
      ["Nightmare Amarok", "0.4", "50.0"],
      ["Chizoar", "0.4", "50.0"],
      ["Nightmare Chizoar", "0.4", "50.0"],
      ["Biggie Hours", "0.2", "25.0"],
      ["Sandstone Bronze Chest", "0.4", "25.0"]
    ],
    "description": [
      "Increases Move Spd by 10%.",
      "13% chance to be consumed",
      "every 10 meters walked.",
      "Must be equipped in a Food Slot to",
      "give its bonus."
    ],
    "shopData": [
      {
        "vendor": "YumYum Grotto",
        "quantity": "20000",
        "no": 9
      }
    ],
    "notes": " "
  },
  "FoodPotGr3": {
    "displayName": "Decent Speed Potion",
    "sellPrice": "400",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Boost Food",
    "Effect": "MoveSpdBoosts",
    "Trigger": "-2",
    "sources": ["Frostbite Towndra Vendor", "Sir Stache"],
    "detdrops": [["Sir Stache", ".002", "1"]],
    "description": [
      "Increases Move Spd by 15%.",
      "10% chance to be consumed",
      "every 10 meters walked.",
      "Must be equipped in a Food Slot to",
      "give its bonus."
    ],
    "shopData": [
      {
        "vendor": "Frostbite Towndra",
        "quantity": "20000",
        "no": 9
      }
    ],
    "notes": " "
  },
  "FoodEvent7": {
    "displayName": "Minto Choco",
    "sellPrice": "10",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Boost Food",
    "Effect": "MoveSpdBoosts",
    "Trigger": "-2",
    "sources": ["Loveulyte", "Chocco Box", "Valentslime"],
    "detdrops": [
      ["Loveulyte", "0.25", "2"],
      ["Chocco Box", "0.25", "2"],
      ["Valentslime", "0.25", "2"]
    ],
    "description": [
      "Increases Move Spd by 8%.",
      "4% chance to be consumed",
      "every 10 meters walked.",
      "Must be equipped in a Food Slot to",
      "give its bonus."
    ],
    "notes": " "
  },
  "FoodPotMana1": {
    "displayName": "Small Mana Potion",
    "sellPrice": "5",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Boost Food",
    "Effect": "ManaRegenBoosts",
    "Trigger": "-3",
    "sources": [
      "Blunder Hills Vendor",
      "Frog",
      "DropTable1",
      "DropTable3b",
      "DropTable3c"
    ],
    "detdrops": [
      ["Frog", "0.002", "1"],
      ["Crystal Carrot", "0.06", "5.0"],
      ["Green Mushroom", "0.00030000000000000003", "5.0"],
      ["Bored Bean", "0.00045", "5.0"],
      ["Red Mushroom", "0.00052", "5.0"],
      ["Amarok", "0.1", "10.0"],
      ["Chaotic Amarok", "0.1", "20.0"],
      ["Nightmare Amarok", "0.1", "10.0"],
      ["Baba Yaga", "0.1", "10.0"],
      ["Dewdrop Bronze Chest", "0.1", "5.0"],
      ["Poop", "0.0024000000000000002", "25.0"],
      ["Rat", "0.0024000000000000002", "25.0"],
      ["Walking Stick", "0.0022800000000000003", "25.0"],
      ["Nutto", "0.0026", "25.0"],
      ["Wood Mushroom", "0.0028000000000000004", "25.0"]
    ],
    "uses": [
      ["FoodMining1", "2", "Crafting"],
      ["A Plot to be Perfect", "50", "Quests"]
    ],
    "description": [
      "Boosts Mana Regen Rate by 10%",
      "40% chance to be consumed",
      "every 100% Mana Regenerated.",
      "Must be equipped in a Food Slot to",
      "give its bonus."
    ],
    "shopData": [
      {
        "vendor": "Blunder Hills",
        "quantity": "500",
        "no": 4
      }
    ],
    "notes": " "
  },
  "FoodPotMana2": {
    "displayName": "Average Mana Potion",
    "sellPrice": "25",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Boost Food",
    "Effect": "ManaRegenBoosts",
    "Trigger": "-3",
    "sources": ["DropTable3"],
    "detdrops": [
      ["Crystal Carrot", "0.1", "10.0"],
      ["Glublin", "0.001", "10.0"],
      ["Wode Board", "0.001125", "10.0"],
      ["Gigafrog", "0.00125", "10.0"],
      ["Amarok", "0.25", "20.0"],
      ["Chaotic Amarok", "0.25", "40.0"],
      ["Nightmare Amarok", "0.25", "20.0"],
      ["Dr Defecaus", "0.25", "20.0"],
      ["Baba Yaga", "0.25", "5.0"],
      ["Dewdrop Golden Chest", "0.25", "10.0"]
    ],
    "uses": [["Genie Dieting", "200", "Quests"]],
    "description": [
      "Boosts Mana Regen Rate by 17%",
      "35% chance to be consumed",
      "every 100% Mana Regenerated.",
      "Must be equipped in a Food Slot to",
      "give its bonus."
    ],
    "notes": " "
  },
  "FoodPotMana3": {
    "displayName": "Decent Mana Potion",
    "sellPrice": "175",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Boost Food",
    "Effect": "ManaRegenBoosts",
    "Trigger": "-3",
    "sources": ["Bloque"],
    "detdrops": [["Bloque", ".0025", "1"]],
    "description": [
      "Boosts Mana Regen Rate by 25%",
      "30% chance to be consumed",
      "every 100% Mana Regenerated.",
      "Must be equipped in a Food Slot to",
      "give its bonus."
    ],
    "notes": " "
  },
  "FoodPotYe1": {
    "displayName": "Small EXP Potion",
    "sellPrice": "25",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Boost Food",
    "Effect": "ClassEXP",
    "Trigger": "-1",
    "sources": [
      "Encroaching Forest Villas Vendor",
      "Plan-it Express",
      "[[Alchemy#Level up Gift|Level up Gift]]"
    ],
    "description": [
      "Increases Exp Gain by 5%",
      "10% chance to be consumed every",
      "time you defeat a monster.",
      "Must be equipped in a Food Slot to",
      "give its bonus."
    ],
    "shopData": [
      {
        "vendor": "Encroaching Forest Villas",
        "quantity": "500",
        "no": 4
      }
    ],
    "notes": " "
  },
  "FoodPotYe2": {
    "displayName": "Average EXP Potion",
    "sellPrice": "250",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Boost Food",
    "Effect": "ClassEXP",
    "Trigger": "-1",
    "sources": [
      "Dudes Next Door",
      "DropTable16",
      "[[Alchemy#Level up Gift|Level up Gift]]",
      "[[Guild Giftbox]]"
    ],
    "detdrops": [
      ["Crystal Cattle", "0.04000000000000001", "25.0"],
      ["Dedotated Ram", "0.00034", "25.0"],
      ["Quenchie", "0.00025", "25.0"],
      ["Cryosnake", "0.00028000000000000003", "25.0"],
      ["Bop Box", "0.00030000000000000003", "25.0"],
      ["Neyeptune", "0.00032", "25.0"],
      ["Bloodbone", "0.0005", "25.0"],
      ["Chillsnap Golden Chest", "0.1", "25.0"]
    ],
    "description": [
      "Increases Exp Gain by 10%",
      "8% chance to be consumed every",
      "time you defeat a monster.",
      "Must be equipped in a Food Slot to",
      "give its bonus."
    ],
    "notes": " "
  },
  "FoodPotYe3": {
    "displayName": "Decent EXP Potion",
    "sellPrice": "1500",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Boost Food",
    "Effect": "ClassEXP",
    "Trigger": "-1",
    "sources": ["[[Alchemy#Level up Gift|Level up Gift]]", "[[Guild Giftbox]]"],
    "description": [
      "Increases Exp Gain by 15%",
      "6% chance to be consumed every",
      "time you defeat a monster.",
      "Must be equipped in a Food Slot to",
      "give its bonus."
    ],
    "notes": " "
  },
  "FoodEvent6": {
    "displayName": "Lemony Choco",
    "sellPrice": "10",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Boost Food",
    "Effect": "ClassEXP",
    "Trigger": "-1",
    "sources": ["Loveulyte", "Chocco Box", "Valentslime"],
    "detdrops": [
      ["Loveulyte", "0.25", "3"],
      ["Chocco Box", "0.25", "3"],
      ["Valentslime", "0.25", "3"]
    ],
    "description": [
      "Increases Exp Gain by 10%",
      "6% chance to be consumed every",
      "time you defeat a monster.",
      "Must be equipped in a Food Slot to",
      "give its bonus."
    ],
    "notes": " "
  },
  "Pearl3": {
    "displayName": "Shiny Pearl",
    "sellPrice": "10",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Boost Food",
    "Effect": "ClassEXP",
    "Trigger": "-1",
    "description": [
      "Increases Exp Gain by 25%",
      "1% chance to be consumed every",
      "time you defeat a monster.",
      "Must be equipped in a Food Slot to",
      "give its bonus."
    ]
  },
  "FoodMining1": {
    "displayName": "Icing Ironbite",
    "sellPrice": "45",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Boost Food",
    "Effect": "MiningSpeedBoosts",
    "Trigger": "-4",
    "sources": [
      "A Plot to be Perfect",
      "Smithing",
      "Recipe from Tasks Unlocks"
    ],
    "uses": [
      ["MaxCapBagF3", "600", "Crafting"],
      ["Genie Dieting", "600", "Quests"],
      ["StampC6", "Lots", "Stamps"]
    ],
    "description": [
      "Increases Mining Speed by 15%",
      "10% chance to be consumed every",
      "time you swing your pickaxe.",
      "Must be equipped in a Food Slot to",
      "give its bonus."
    ],
    "recipeData": {
      "recipe": [
        ["Iron", "5"],
        ["FoodPotMana1", "2"]
      ],
      "levelReqToCraft": "2",
      "expGiven": "5",
      "no": 42,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Iron", "5"],
      [0, "FoodPotMana1", "2"]
    ],
    "detRecipeTotals": [
      ["Iron", 5],
      ["FoodPotMana1", 2]
    ],
    "notes": " "
  },
  "FoodEvent1": {
    "displayName": "Giftybread Man",
    "sellPrice": "10",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Boost Food",
    "Effect": "MiningSpeedBoosts",
    "Trigger": "-4",
    "sources": ["Giftmas Blobulyte", "Meaning of Giftmas", "Ghost"],
    "detdrops": [
      ["Giftmas Blobulyte", "0.25", "3"],
      ["Meaning of Giftmas", "0.25", "3"],
      ["Ghost", "0.3", "2"]
    ],
    "description": [
      "Increases Mining Speed by 25%",
      "3% chance to be consumed every",
      "time you swing your pickaxe.",
      "Must be equipped in a Food Slot to",
      "give its bonus."
    ],
    "notes": " "
  },
  "Pearl2": {
    "displayName": "Stained Pearl",
    "sellPrice": "10",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Boost Food",
    "Effect": "MiningSpeedBoosts",
    "Trigger": "-4",
    "description": [
      "Increases Mining Speed by 30%",
      "1% chance to be consumed every",
      "time you swing your pickaxe.",
      "Must be equipped in a Food Slot to",
      "give its bonus."
    ],
    "notes": " "
  },
  "FoodChoppin1": {
    "displayName": "Saucy Logfries",
    "sellPrice": "48",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Boost Food",
    "Effect": "ChoppinSpeedBoosts",
    "Trigger": "-6",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["MaxCapBagF3", "600", "Crafting"]],
    "description": [
      "Increases Choppin' Speed by 15%",
      "10% chance to be consumed every",
      "time you swing your hatchet.",
      "Must be equipped in a Food Slot to",
      "give its bonus."
    ],
    "recipeData": {
      "recipe": [
        ["JungleTree", "6"],
        ["FoodPotRe1", "3"]
      ],
      "levelReqToCraft": "1",
      "expGiven": "5",
      "no": 43,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "JungleTree", "6"],
      [0, "FoodPotRe1", "3"]
    ],
    "detRecipeTotals": [
      ["JungleTree", 6],
      ["FoodPotRe1", 3]
    ],
    "notes": " "
  },
  "FoodEvent2": {
    "displayName": "Chogg Nog",
    "sellPrice": "10",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Boost Food",
    "Effect": "ChoppinSpeedBoosts",
    "Trigger": "-6",
    "sources": ["Giftmas Blobulyte", "Meaning of Giftmas", "Ghost"],
    "detdrops": [
      ["Giftmas Blobulyte", "0.25", "3"],
      ["Meaning of Giftmas", "0.25", "3"],
      ["Ghost", "0.3", "2"]
    ],
    "description": [
      "Increases Choppin' Speed by 25%",
      "1% chance to be consumed every",
      "time you swing your hatchet.",
      "Must be equipped in a Food Slot to",
      "give its bonus."
    ],
    "notes": " "
  },
  "FoodFish1": {
    "displayName": "Slurpin Herm",
    "sellPrice": "105",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Boost Food",
    "Effect": "FishingSpeedBoosts",
    "Trigger": "-7",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["MaxCapBagF5", "1500", "Crafting"]],
    "description": [
      "Increases Fishing Spd by 20%",
      "10% chance to be consumed every",
      "time you reel in a fish.",
      "Must be equipped in a Food Slot to",
      "give its bonus."
    ],
    "recipeData": {
      "recipe": [
        ["Fish2", "5"],
        ["FoodPotOr2", "2"]
      ],
      "levelReqToCraft": "24",
      "expGiven": "15",
      "no": 57,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Fish2", "5"],
      [0, "FoodPotOr2", "2"]
    ],
    "detRecipeTotals": [
      ["Fish2", 5],
      ["FoodPotOr2", 2]
    ],
    "notes": " "
  },
  "FoodEvent3": {
    "displayName": "Candy Canes",
    "sellPrice": "10",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Boost Food",
    "Effect": "FishingSpeedBoosts",
    "Trigger": "-7",
    "sources": ["Giftmas Blobulyte", "Meaning of Giftmas", "Ghost"],
    "detdrops": [
      ["Giftmas Blobulyte", "0.25", "2"],
      ["Meaning of Giftmas", "0.25", "2"],
      ["Ghost", "0.3", "2"]
    ],
    "description": [
      "Increases Fishing Spd by 25%",
      "3% chance to be consumed every",
      "time you reel in a fish.",
      "Must be equipped in a Food Slot to",
      "give its bonus."
    ],
    "notes": " "
  },
  "Pearl1": {
    "displayName": "Aqua Pearl",
    "sellPrice": "10",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Boost Food",
    "Effect": "FishingSpeedBoosts",
    "Trigger": "-7",
    "description": [
      "Increases Fishing Spd by 30%",
      "1% chance to be consumed every",
      "time you reel in a fish.",
      "Must be equipped in a Food Slot to",
      "give its bonus."
    ],
    "notes": " "
  },
  "FoodCatch1": {
    "displayName": "Buttered Toasted Butter",
    "sellPrice": "93",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Boost Food",
    "Effect": "CatchingSpeedBoosts",
    "Trigger": "-8",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["MaxCapBagF5", "1500", "Crafting"]],
    "description": [
      "Increases Catching Spd by 20%",
      "10% chance to be consumed every",
      "time you swing your net.",
      "Must be equipped in a Food Slot to",
      "give its bonus."
    ],
    "recipeData": {
      "recipe": [
        ["Bug2", "5"],
        ["FoodHealth6", "1"]
      ],
      "levelReqToCraft": "24",
      "expGiven": "15",
      "no": 58,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Bug2", "5"],
      [0, "FoodHealth6", "1"]
    ],
    "detRecipeTotals": [
      ["Bug2", 5],
      ["FoodHealth6", 1]
    ],
    "notes": " "
  },
  "FoodEvent4": {
    "displayName": "Mistleberries",
    "sellPrice": "10",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Boost Food",
    "Effect": "CatchingSpeedBoosts",
    "Trigger": "-8",
    "sources": ["Giftmas Blobulyte", "Meaning of Giftmas", "Ghost"],
    "detdrops": [
      ["Giftmas Blobulyte", "0.25", "2"],
      ["Meaning of Giftmas", "0.25", "2"],
      ["Ghost", "0.3", "2"]
    ],
    "description": [
      "Increases Catching Spd by 25%",
      "1% chance to be consumed every",
      "time you swing your net.",
      "Must be equipped in a Food Slot to",
      "give its bonus."
    ],
    "notes": " "
  },
  "FoodTrapping1": {
    "displayName": "Critter Numnums",
    "sellPrice": "550",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Boost Food",
    "Effect": "TrappingSpeedBoosts",
    "Trigger": "-9",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["MaxCapBagF6", "30", "Crafting"]],
    "description": [
      "Increases Shiny Odds by 25%",
      "125% chance to be consumed every",
      "time you open a trap.",
      "Must be equipped in a Food Slot to",
      "give its bonus."
    ],
    "recipeData": {
      "recipe": [
        ["Critter2", "100"],
        ["PureWater", "1"]
      ],
      "levelReqToCraft": "36",
      "expGiven": "10000",
      "no": 57,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Critter2", "100"],
      [0, "PureWater", "1"]
    ],
    "detRecipeTotals": [
      ["Critter2", 100],
      ["PureWater", 1]
    ],
    "notes": " "
  },
  "FoodWorship1": {
    "displayName": "Soulble Gum",
    "sellPrice": "680",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Boost Food",
    "Effect": "WorshipSoulBoosts",
    "Trigger": "-10",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["MaxCapBagF6", "30", "Crafting"]],
    "description": [
      "Increases Soul Gain by 25%",
      "125% chance to be consumed every",
      "time you Worship.",
      "Must be equipped in a Food Slot to",
      "give its bonus."
    ],
    "recipeData": {
      "recipe": [
        ["Soul2", "70"],
        ["PureWater", "1"]
      ],
      "levelReqToCraft": "36",
      "expGiven": "10000",
      "no": 58,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Soul2", "70"],
      [0, "PureWater", "1"]
    ],
    "detRecipeTotals": [
      ["Soul2", 70],
      ["PureWater", 1]
    ],
    "notes": " "
  },
  "Bullet": {
    "displayName": "Bullet",
    "sellPrice": "130",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Boost Food",
    "Effect": "WeaponPowerBoosts",
    "Trigger": "-1",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [
      ["BulletB", "2", "Crafting"],
      ["Bullets for Bandit Bob!", "300", "Quests"]
    ],
    "description": [
      "Increases Weapon Power by 1.",
      "15% chance to be consumed every",
      "time you defeat a monster.",
      "Must be equipped in a Food Slot to",
      "give its bonus."
    ],
    "recipeData": {
      "recipe": [
        ["ForestTree", "10"],
        ["Bug1", "10"]
      ],
      "levelReqToCraft": "16",
      "expGiven": "1",
      "no": "43",
      "tab": "2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "ForestTree", "10"],
      [0, "Bug1", "10"]
    ],
    "detRecipeTotals": [
      ["ForestTree", 10],
      ["Bug1", 10]
    ],
    "notes": " "
  },
  "BulletB": {
    "displayName": "FMJ Bullet",
    "sellPrice": "455",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Boost Food",
    "Effect": "WeaponPowerBoosts",
    "Trigger": "-1",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "description": [
      "Increases Weapon Power by 2.",
      "12% chance to be consumed every",
      "time you defeat a monster.",
      "Must be equipped in a Food Slot to",
      "give its bonus."
    ],
    "recipeData": {
      "recipe": [
        ["Gold", "15"],
        ["Bullet", "2"]
      ],
      "levelReqToCraft": "20",
      "expGiven": "1",
      "no": 44,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Gold", "15"],
      [0, "Bullet", "2"],
      [1, "ForestTree", "20"],
      [1, "Bug1", "20"]
    ],
    "detRecipeTotals": [
      ["Gold", 15],
      ["ForestTree", 20],
      ["Bug1", 20]
    ],
    "notes": " "
  },
  "MidnightCookie": {
    "displayName": "Midnight Cookie",
    "sellPrice": "300",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Boost Food",
    "Effect": "WeaponPowerBoosts",
    "Trigger": "-1",
    "sources": [
      "Efaunt",
      "Chaotic Efaunt",
      "Nightmare Amarok",
      "Chizoar",
      "Chaotic Chizoar",
      "Nightmare Chizoar",
      "King Doot",
      "DropTable8"
    ],
    "detdrops": [
      ["Efaunt", "0.07", "1"],
      ["Chaotic Efaunt", "0.07", "1"],
      ["Nightmare Amarok", "0.07", "1"],
      ["Chizoar", "0.07", "1"],
      ["Chaotic Chizoar", "0.07", "1"],
      ["Nightmare Chizoar", "0.07", "1"],
      ["King Doot", ".2", "2"],
      ["Crystal Crabal", "0.0012000000000000001", "1.0"],
      ["Tyson", "0.000009600000000000001", "1.0"],
      ["Moonmoon", "0.000010500000000000001", "1.0"],
      ["Sand Giant", "0.0000111", "1.0"],
      ["Snelbie", "0.0000117", "1.0"],
      ["Sandstone Golden Chest", "0.003", "1.0"]
    ],
    "uses": [
      ["EquipmentShirts26", "10", "Crafting"],
      ["A Midnight Snack", "2", "Quests"]
    ],
    "description": [
      "Increases Weapon Power by 5.",
      "2% chance to be consumed every",
      "time you defeat a monster.",
      "Must be equipped in a Food Slot to",
      "give its bonus."
    ],
    "notes": " "
  },
  "FoodEvent5": {
    "displayName": "Cherry Choco",
    "sellPrice": "10",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Boost Food",
    "Effect": "WeaponPowerBoosts",
    "Trigger": "-1",
    "sources": ["Loveulyte", "Chocco Box", "Valentslime"],
    "detdrops": [
      ["Loveulyte", "0.25", "3"],
      ["Chocco Box", "0.25", "3"],
      ["Valentslime", "0.25", "3"]
    ],
    "description": [
      "Increases Weapon Power by 1.",
      "10% chance to be consumed every",
      "time you defeat a monster.",
      "Must be equipped in a Food Slot to",
      "give its bonus."
    ],
    "notes": " "
  },
  "PeanutG": {
    "displayName": "Golden Peanut",
    "sellPrice": "7750",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Golden Food",
    "Effect": "MiningEff",
    "Amount": "30",
    "Trigger": "-1337",
    "Cooldown": "1",
    "sources": ["Smithing"],
    "uses": [
      ["BadgeG3", "30", "Crafting"],
      ["If Life Gives you Peanuts, make Shiny Peanuts!", "5", "Quests"]
    ],
    "description": [
      "Increases Mining Efficiency",
      "by [%.",
      "Golden foods are never consumed."
    ],
    "recipeData": {
      "recipe": [
        ["Peanut", "100"],
        ["GoldBar", "50"]
      ],
      "levelReqToCraft": 1,
      "expGiven": 1,
      "no": 51,
      "tab": 1,
      "recipeFrom": []
    },
    "detrecipe": [
      [0, "Peanut", "100"],
      [1, "FoodHealth3", "200"],
      [1, "Copper", "100"],
      [1, "BirchTree", "100"],
      [0, "GoldBar", "50"]
    ],
    "detRecipeTotals": [
      ["GoldBar", 50],
      ["FoodHealth3", 200],
      ["Copper", 100],
      ["BirchTree", 100]
    ],
    "notes": " "
  },
  "FoodG1": {
    "displayName": "Golden Jam",
    "sellPrice": "50",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Golden Food",
    "Effect": "MaxHPpct",
    "Amount": "30",
    "Trigger": "-1337",
    "Cooldown": "1",
    "sources": [
      "Dewdrop Golden Chest",
      "Simple Shippin",
      "Live-Action Entertainment",
      "The Most Important Meal of the Day",
      "Brunchin' with the Blobs",
      "Luncheon with the Inlaws",
      "Afternoon Tea in a Jiffy",
      "Early Evening Eating Endeavor",
      "Brochure Building"
    ],
    "detdrops": [["Dewdrop Golden Chest", "0.5", "1"]],
    "description": [
      "Increases your Max Health by",
      "[%.",
      "Golden foods are never consumed."
    ],
    "notes": "Not to be mixed up with [[Golden Jam (quest)]] which is needed for [[Scripticus]] quest The Unoccupied Picnic"
  },
  "FoodG2": {
    "displayName": "Golden Kebabs",
    "sellPrice": "200",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Golden Food",
    "Effect": "Damage",
    "Amount": "20",
    "Trigger": "-1337",
    "Cooldown": "1",
    "sources": [
      "Sandstone Silver Chest",
      "Dudes Next Door",
      "Luncheon with the Inlaws",
      "Afternoon Tea in a Jiffy",
      "Early Evening Eating Endeavor",
      "The Last Supper, at Least for Today!"
    ],
    "detdrops": [["Sandstone Silver Chest", "0.5", "1"]],
    "description": [
      "Increases Total Damage to",
      "all monsters by [%.",
      "Golden foods are never consumed."
    ],
    "notes": " "
  },
  "FoodG3": {
    "displayName": "Golden Meat Pie",
    "sellPrice": "350",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Golden Food",
    "Effect": "Defence",
    "Amount": "30",
    "Trigger": "-1337",
    "Cooldown": "1",
    "sources": [
      "Sandstone Golden Chest",
      "The Last Supper, at Least for Today!",
      "Don't Desert the Dessert",
      "A Midnight Snack",
      "SuperDropTable2"
    ],
    "detdrops": [
      ["Sandstone Golden Chest", "0.5", "1"],
      ["Crystal Crabal", "0.0018", "1.0"],
      ["Sandy Pot", "0.000009", "1.0"],
      ["Mimic", "0.000009600000000000001", "1.0"],
      ["Crabcake", "0.0000108", "1.0"],
      ["Efaunt", "0.003", "2.0"],
      ["Nightmare Amarok", "0.003", "2.0"],
      ["Chizoar", "0.003", "2.0"],
      ["Nightmare Chizoar", "0.003", "2.0"],
      ["Biggie Hours", "0.0015", "1.0"],
      ["Sandstone Bronze Chest", "0.003", "1.0"],
      ["Mafioso", "0.000009600000000000001", "1.0"],
      ["Sand Castle", "0.000010500000000000001", "1.0"],
      ["Pincermin", "0.0000111", "1.0"],
      ["Mashed Potato", "0.0000117", "1.0"],
      ["Dig Doug", "0.000009600000000000001", "1.0"],
      ["Chaotic Efaunt", "0.003", "2.0"],
      ["Chaotic Chizoar", "0.003", "2.0"],
      ["Sandstone Silver Chest", "0.003", "1.0"],
      ["Tyson", "0.000009600000000000001", "1.0"],
      ["Moonmoon", "0.000010500000000000001", "1.0"],
      ["Sand Giant", "0.0000111", "1.0"],
      ["Snelbie", "0.0000117", "1.0"],
      ["Fishing Small Fish", "0.000036", "1.0"],
      ["Fishing Goldfish", "0.000036", "1.0"],
      ["Fishing Hermit Can", "0.000036", "1.0"],
      ["Fishing Jellyfish", "0.000036", "1.0"],
      ["Fishing Bloach", "0.000036", "1.0"],
      ["Choppin Palm Tree", "0.000044999999999999996", "2.0"],
      ["Catching Flies", "0.000044999999999999996", "1.0"],
      ["Catching Butterflies", "0.000044999999999999996", "1.0"],
      ["Catching Sentient Cereal", "0.000044999999999999996", "1.0"],
      ["Catching Fruitflies", "0.000044999999999999996", "1.0"]
    ],
    "uses": [["MaxCapBagF4", "9", "Crafting"]],
    "description": [
      "Increases your Total Defence",
      "by [%.",
      "Golden foods are never consumed"
    ],
    "notes": " "
  },
  "FoodG4": {
    "displayName": "Golden Nomwich",
    "sellPrice": "100",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Golden Food",
    "Effect": "BaseDamage",
    "Amount": "400",
    "Trigger": "-1337",
    "Cooldown": "1",
    "sources": ["Dewdrop Silver Chest", "Plan-it Express", "SuperDropTable1"],
    "detdrops": [
      ["Dewdrop Silver Chest", "0.5", "1"],
      ["Crystal Carrot", "0.0012", "1.0"],
      ["Green Mushroom", "0.000006", "1.0"],
      ["Frog", "0.0000076", "1.0"],
      ["Bored Bean", "0.000009", "1.0"],
      ["Red Mushroom", "0.0000104", "1.0"],
      ["Amarok", "0.002", "2.0"],
      ["Chaotic Amarok", "0.002", "4.0"],
      ["Nightmare Amarok", "0.002", "2.0"],
      ["Baba Yaga", "0.002", "2.0"],
      ["Dewdrop Bronze Chest", "0.002", "1.0"],
      ["Slime", "0.000009", "1.0"],
      ["Baby Boa", "0.000011249999999999999", "1.0"],
      ["Carrotman", "0.0000135", "1.0"],
      ["Glublin", "0.00001", "1.0"],
      ["Wode Board", "0.000011249999999999999", "1.0"],
      ["Gigafrog", "0.0000125", "1.0"],
      ["Dr Defecaus", "0.0025", "2.0"],
      ["Dewdrop Golden Chest", "0.0025", "1.0"],
      ["Poop", "0.000016499999999999998", "1.0"],
      ["Rat", "0.000016499999999999998", "1.0"],
      ["Walking Stick", "0.000015674999999999998", "1.0"],
      ["Nutto", "0.000017874999999999997", "1.0"],
      ["Wood Mushroom", "0.00001925", "1.0"],
      ["Mining Copper", "0.0000195", "1.0"],
      ["Mining Iron", "0.000021000000000000002", "1.0"],
      ["Mining Gold", "0.000022499999999999998", "1.0"],
      ["Mining Plat", "0.000023100000000000002", "1.0"],
      ["Mining Dementia", "0.0000246", "1.0"],
      ["Mining Void", "0.000027", "2.0"],
      ["Mining Lustre", "0.0000285", "2.0"],
      ["Choppin Oak Tree", "0.000024", "1.0"],
      ["Choppin Birch Tree", "0.000025500000000000003", "1.0"],
      ["Choppin Jungle Tree", "0.000027", "1.0"],
      ["Choppin Forest Tree", "0.0000285", "1.0"],
      ["Choppin Toilet Tree", "0.0000318", "1.0"],
      ["Choppin Stump Tree", "0.000030600000000000005", "1.0"]
    ],
    "uses": [["StampC7", "Lots", "Stamps"]],
    "description": [
      "Increases Base Damage Dealt to",
      "all monsters by [.",
      "Golden foods are never consumed."
    ],
    "notes": " "
  },
  "FoodG5": {
    "displayName": "Golden Ham",
    "sellPrice": "100",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Golden Food",
    "Effect": "SkillExp",
    "Amount": "18",
    "Trigger": "-1337",
    "Cooldown": "1",
    "sources": ["Chillsnap Silver Chest", "SuperDropTable3"],
    "detdrops": [
      ["Chillsnap Silver Chest", "0.5", "1"],
      ["Crystal Cattle", "0.0018", "1.0"],
      ["Sheepie", "0.0000075", "1.0"],
      ["Frost Flake", "0.000008400000000000001", "1.0"],
      ["Sir Stache", "0.000009299999999999999", "1.0"],
      ["Xylobone", "0.00003", "1.0"],
      ["Chillsnap Bronze Chest", "0.003", "1.0"],
      ["Bloque", "0.0000075", "1.0"],
      ["Mamooth", "0.0000081", "1.0"],
      ["Snowman", "0.0000087", "1.0"],
      ["Penguin", "0.000009299999999999999", "1.0"],
      ["Thermister", "0.0000099", "1.0"],
      ["Dedotated Ram", "0.000010199999999999999", "1.0"],
      ["Quenchie", "0.0000075", "1.0"],
      ["Cryosnake", "0.000008400000000000001", "1.0"],
      ["Bop Box", "0.000009", "1.0"],
      ["Neyeptune", "0.000009600000000000001", "1.0"],
      ["Bloodbone", "0.000015", "1.0"],
      ["Chillsnap Golden Chest", "0.003", "1.0"],
      ["Choppin Saharan Foal", "0.000026700000000000002", "1.0"],
      ["Choppin Wispy Tree", "0.000026700000000000002", "1.0"],
      ["Catching Mosquisnow", "0.000044999999999999996", "1.0"],
      ["Catching Flycicle", "0.000044999999999999996", "1.0"]
    ],
    "uses": [["MaxCapBagF6", "10", "Crafting"]],
    "description": [
      "Increases Skill EXP earned",
      "from all skills by [%.",
      "Golden foods are never consumed."
    ],
    "notes": " "
  },
  "FoodG6": {
    "displayName": "Golden Bread",
    "sellPrice": "100",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Golden Food",
    "Effect": "ShrineEffect",
    "Amount": "20",
    "Trigger": "-1337",
    "Cooldown": "1",
    "sources": ["Chillsnap Golden Chest"],
    "detdrops": [["Chillsnap Golden Chest", "0.3", "1"]],
    "description": [
      "Claiming AFK gains levels",
      "up shrines [% faster.",
      "Golden foods are never consumed."
    ],
    "notes": " "
  },
  "ButterBar": {
    "displayName": "Butter Bar",
    "sellPrice": "1",
    "typeGen": "cFood",
    "ID": "0",
    "Type": "Golden Food",
    "Effect": "BaseAcc",
    "Amount": "60",
    "Trigger": "-1337",
    "Cooldown": "1",
    "sources": ["Catching Butterflies"],
    "detdrops": [["Catching Butterflies", "0.01", "1"]],
    "description": [
      "Increases your Base Accuracy",
      "by [. And tastes great!",
      "This is technically golden food!"
    ]
  },
  "rtt0": {
    "displayName": "Bottled Town Teleport",
    "sellPrice": "50",
    "typeGen": "dQuest",
    "ID": "1",
    "Type": "Teleport",
    "sources": [
      "Blunder Hills Vendor",
      "Encroaching Forest Villas Vendor",
      "YumYum Grotto Vendor",
      "Frostbite Towndra Vendor",
      "What Lies at the Heart of the Forest",
      "I'm Ready, Promotion!",
      "DropTable2",
      "DropTable3"
    ],
    "detdrops": [
      ["Crystal Carrot", "0.01", "1.0"],
      ["Slime", "0.00008", "1.0"],
      ["Baby Boa", "0.0001", "1.0"],
      ["Carrotman", "0.00012", "1.0"],
      ["Amarok", "0.02", "2.0"],
      ["Chaotic Amarok", "0.02", "4.0"],
      ["Nightmare Amarok", "0.02", "2.0"],
      ["Baba Yaga", "0.02", "1.0"],
      ["Dewdrop Silver Chest", "0.02", "1.0"],
      ["Glublin", "0.0002", "1.0"],
      ["Wode Board", "0.000225", "1.0"],
      ["Gigafrog", "0.00025", "1.0"],
      ["Dr Defecaus", "0.05", "2.0"],
      ["Dewdrop Golden Chest", "0.05", "1.0"]
    ],
    "description": ["Hold down on this item to be", "teleported back to Town."],
    "questAss": [],
    "shopData": [
      {
        "vendor": "Blunder Hills",
        "quantity": "15",
        "no": 22
      },
      {
        "vendor": "Encroaching Forest Villas",
        "quantity": "15",
        "no": 12
      },
      {
        "vendor": "YumYum Grotto",
        "quantity": "15",
        "no": 17
      },
      {
        "vendor": "Frostbite Towndra",
        "quantity": "20",
        "no": 18
      }
    ],
    "notes": " "
  },
  "ResetFrag": {
    "displayName": "Talent Point Reset Fragment",
    "sellPrice": "200",
    "typeGen": "dQuest",
    "ID": "1",
    "Type": "Fragment",
    "sources": [
      "Blunder Hills Vendor",
      "Encroaching Forest Villas Vendor",
      "YumYum Grotto Vendor",
      "Faraway Piers Vendor",
      "Frostbite Towndra Vendor",
      "Three Right Answers",
      "More like 'Sleepius' lmao",
      "SuperDropTable1",
      "SuperDropTable2",
      "SuperDropTable3",
      "[[Guild Giftbox]]"
    ],
    "detdrops": [
      ["Crystal Carrot", "0.00023999999999999998", "1.0"],
      ["Green Mushroom", "0.0000012000000000000002", "1.0"],
      ["Frog", "0.00000152", "1.0"],
      ["Bored Bean", "0.0000018000000000000001", "1.0"],
      ["Red Mushroom", "0.00000208", "1.0"],
      ["Amarok", "0.0004", "2.0"],
      ["Chaotic Amarok", "0.0004", "4.0"],
      ["Nightmare Amarok", "0.0004", "2.0"],
      ["Baba Yaga", "0.0004", "2.0"],
      ["Dewdrop Bronze Chest", "0.0004", "1.0"],
      ["Slime", "0.0000018000000000000001", "1.0"],
      ["Baby Boa", "0.00000225", "1.0"],
      ["Carrotman", "0.0000027", "1.0"],
      ["Dewdrop Silver Chest", "0.00045", "1.0"],
      ["Glublin", "0.0000020000000000000003", "1.0"],
      ["Wode Board", "0.00000225", "1.0"],
      ["Gigafrog", "0.0000025", "1.0"],
      ["Dr Defecaus", "0.0005", "2.0"],
      ["Dewdrop Golden Chest", "0.0005", "1.0"],
      ["Poop", "0.0000032999999999999997", "1.0"],
      ["Rat", "0.0000032999999999999997", "1.0"],
      ["Walking Stick", "0.0000031349999999999996", "1.0"],
      ["Nutto", "0.0000035749999999999997", "1.0"],
      ["Wood Mushroom", "0.00000385", "1.0"],
      ["Mining Copper", "0.0000039", "1.0"],
      ["Mining Iron", "0.0000042000000000000004", "1.0"],
      ["Mining Gold", "0.0000045", "1.0"],
      ["Mining Plat", "0.000004620000000000001", "1.0"],
      ["Mining Dementia", "0.00000492", "1.0"],
      ["Mining Void", "0.0000054", "2.0"],
      ["Mining Lustre", "0.0000057000000000000005", "2.0"],
      ["Choppin Oak Tree", "0.000004800000000000001", "1.0"],
      ["Choppin Birch Tree", "0.000005100000000000001", "1.0"],
      ["Choppin Jungle Tree", "0.0000054", "1.0"],
      ["Choppin Forest Tree", "0.0000057000000000000005", "1.0"],
      ["Choppin Toilet Tree", "0.00000636", "1.0"],
      ["Choppin Stump Tree", "0.0000061200000000000015", "1.0"],
      ["Crystal Crabal", "0.00054", "1.0"],
      ["Sandy Pot", "0.0000027", "1.0"],
      ["Mimic", "0.0000028800000000000004", "1.0"],
      ["Crabcake", "0.00000324", "1.0"],
      ["Efaunt", "0.0009", "2.0"],
      ["Chizoar", "0.0009", "2.0"],
      ["Nightmare Chizoar", "0.0009", "2.0"],
      ["Biggie Hours", "0.00045", "1.0"],
      ["Sandstone Bronze Chest", "0.0009", "1.0"],
      ["Mafioso", "0.0000028800000000000004", "1.0"],
      ["Sand Castle", "0.0000031500000000000003", "1.0"],
      ["Pincermin", "0.00000333", "1.0"],
      ["Mashed Potato", "0.00000351", "1.0"],
      ["Dig Doug", "0.0000028800000000000004", "1.0"],
      ["Chaotic Efaunt", "0.0009", "2.0"],
      ["Chaotic Chizoar", "0.0009", "2.0"],
      ["Sandstone Silver Chest", "0.0009", "1.0"],
      ["Tyson", "0.0000028800000000000004", "1.0"],
      ["Moonmoon", "0.0000031500000000000003", "1.0"],
      ["Sand Giant", "0.00000333", "1.0"],
      ["Snelbie", "0.00000351", "1.0"],
      ["Sandstone Golden Chest", "0.0009", "1.0"],
      ["Fishing Small Fish", "0.0000108", "1.0"],
      ["Fishing Goldfish", "0.0000108", "1.0"],
      ["Fishing Hermit Can", "0.0000108", "1.0"],
      ["Fishing Jellyfish", "0.0000108", "1.0"],
      ["Fishing Bloach", "0.0000108", "1.0"],
      ["Choppin Palm Tree", "0.000013499999999999998", "2.0"],
      ["Catching Flies", "0.000013499999999999998", "1.0"],
      ["Catching Butterflies", "0.000013499999999999998", "1.0"],
      ["Catching Sentient Cereal", "0.000013499999999999998", "1.0"],
      ["Catching Fruitflies", "0.000013499999999999998", "1.0"],
      ["Crystal Cattle", "0.00054", "1.0"],
      ["Sheepie", "0.00000225", "1.0"],
      ["Frost Flake", "0.00000252", "1.0"],
      ["Sir Stache", "0.0000027899999999999995", "1.0"],
      ["Xylobone", "0.000009", "1.0"],
      ["Chillsnap Bronze Chest", "0.0009", "1.0"],
      ["Bloque", "0.00000225", "1.0"],
      ["Mamooth", "0.00000243", "1.0"],
      ["Snowman", "0.00000261", "1.0"],
      ["Penguin", "0.0000027899999999999995", "1.0"],
      ["Thermister", "0.00000297", "1.0"],
      ["Chillsnap Silver Chest", "0.0009", "1.0"],
      ["Dedotated Ram", "0.0000030599999999999995", "1.0"],
      ["Quenchie", "0.00000225", "1.0"],
      ["Cryosnake", "0.00000252", "1.0"],
      ["Bop Box", "0.0000027", "1.0"],
      ["Neyeptune", "0.0000028800000000000004", "1.0"],
      ["Bloodbone", "0.0000045", "1.0"],
      ["Chillsnap Golden Chest", "0.0009", "1.0"],
      ["Choppin Saharan Foal", "0.00000801", "1.0"],
      ["Choppin Wispy Tree", "0.00000801", "1.0"],
      ["Catching Mosquisnow", "0.000013499999999999998", "1.0"],
      ["Catching Flycicle", "0.000013499999999999998", "1.0"]
    ],
    "uses": [["ResetCompletedS", "25", "Crafting"]],
    "description": [
      "Hold down on this item to turn 10 Fragments into 1 Talent Point Reset Potion. You'll need 1 open inventory space for this to work."
    ],
    "questAss": [],
    "shopData": [
      {
        "vendor": "Blunder Hills",
        "quantity": "1",
        "no": 23
      },
      {
        "vendor": "Encroaching Forest Villas",
        "quantity": "1",
        "no": 13
      },
      {
        "vendor": "YumYum Grotto",
        "quantity": "2",
        "no": 18
      },
      {
        "vendor": "Faraway Piers",
        "quantity": "1",
        "no": 12
      },
      {
        "vendor": "Frostbite Towndra",
        "quantity": "3",
        "no": 19
      }
    ],
    "notes": " "
  },
  "ResetCompleted": {
    "displayName": "Talent Point Reset Potion",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "1",
    "Type": "Reset Potion",
    "sources": [
      "Should We Tell Him?",
      "Three Right Answers",
      "Slovakian Scare",
      "Mushroom Munchies",
      "More like 'Sleepius' lmao",
      "Rollin' Thunder!",
      "[[Gem Shop]]"
    ],
    "description": [
      "Hold down on this item to respec all your Talent Points! Well, except for the Star tab points, there's a different potion for that."
    ],
    "questAss": [],
    "notes": " "
  },
  "ResetCompletedS": {
    "displayName": "Star Talent Reset Potion",
    "sellPrice": "5250",
    "typeGen": "dQuest",
    "ID": "1",
    "Type": "Reset Potion",
    "sources": [
      "Bunny you Should Say That!",
      "Smithing",
      "Recipe from Efaunt",
      "Recipe from Biggie Hours",
      "[[Gem Shop]]"
    ],
    "description": [
      "Hold down on this item to refund all your Star Talent Points! Well, except for the Star tab points, there's a different potion for... no wait, this IS the potion for that!"
    ],
    "questAss": [],
    "recipeData": {
      "recipe": [
        ["ResetFrag", "25"],
        ["PureWater", "5"]
      ],
      "levelReqToCraft": "28",
      "expGiven": "4000",
      "no": 76,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Efaunt", "Biggie Hours"]
    },
    "detrecipe": [
      [0, "ResetFrag", "25"],
      [0, "PureWater", "5"]
    ],
    "detRecipeTotals": [
      ["ResetFrag", 25],
      ["PureWater", 5]
    ],
    "notes": " "
  },
  "ClassSwap": {
    "displayName": "Sub Class Swap Token",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "1",
    "Type": "Usable",
    "sources": ["[[Gem Shop]]"],
    "description": [
      "Hold down on this item to change sub class within your class. It won't let you change classes, you'll need to reach world 3 to do that."
    ],
    "questAss": [],
    "notes": " "
  },
  "ResetBox": {
    "displayName": "Post Office Box Reseto Magnifico",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "1",
    "Type": "Usable",
    "sources": ["Untitled Quest", "[[Gem Shop]]"],
    "description": [
      "Hold down to reset all post office upgrades made on this character! You'll get all the Box Points refunded of course, no problemo!"
    ],
    "questAss": [],
    "notes": " "
  },
  "Ht": {
    "displayName": "Hat Premiumifier",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "1",
    "Type": "Usable",
    "sources": ["[[Gem Shop]]"],
    "description": [
      "Drag this onto any normal hat to turn it into a premium hat! Doing so will wipe all it's stats, and give it {1 all stat and 5 Premium Upgrade Slots, just like any other premium hat."
    ],
    "questAss": [],
    "notes": " "
  },
  "StonePremRestore": {
    "displayName": "Premium Stone Refunder",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "1",
    "Type": "Usable",
    "sources": ["[[Gem Shop]]"],
    "description": [
      "Drag this onto any Premium Hat to refund all Premium Stones used on it. You must have at least 4 open inventory spaces to use this btw"
    ],
    "questAss": [],
    "notes": " "
  },
  "ExpBalloon1": {
    "displayName": "Small Experience Balloon",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "50",
    "Type": "Exp Balloon",
    "sources": [
      "Simple Shippin",
      "Plan-it Express",
      "Dudes Next Door",
      "Roll of Anger",
      "The Rats are to Blame!",
      "Sticks and Stone Something Something Bones...",
      "Justice Wears No Clothes",
      "What Lies at the Heart of the Forest",
      "Brunchin' with the Blobs",
      "Afternoon Tea in a Jiffy",
      "The Witcher, but not Really",
      "No Stone Unturned",
      "Restoring Power to the Portal",
      "Crystal Crime Stopper",
      "Stamp Collecting",
      "Bullets for Bandit Bob!",
      "Old Timey Craftin'",
      "Rhyming is Key!",
      "Say Goodbye to your Dubloon!",
      "The Notorious B.O.B",
      "The Worst Trade Deal in History",
      "DropTable13",
      "[[Guild Giftbox]]"
    ],
    "detdrops": [
      ["Biggie Hours", "0.2", "1.0"],
      ["King Doot", "0.25", "1.0"]
    ],
    "description": [
      "Hold down to gain EXP in the skill that's displayed in the corner of your screen. If you're in a town, you will gain EXP in the town skill. The amount of EXP you get is based on your skill's Lv."
    ],
    "questAss": [],
    "notes": " "
  },
  "ExpBalloon2": {
    "displayName": "Medium Experience Balloon",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "120",
    "Type": "Exp Balloon",
    "sources": [
      "Peanut De-Aging",
      "Peanut De-Aging",
      "Blame it on the Glublins",
      "Restoring Power to another Portal",
      "PSA. You Are Being Eaten!",
      "You Can't Run, but you Can Hide",
      "Literally Physics",
      "Children? What'd they ever do for Me...",
      "Frogecoin to the MOON!",
      "[[Guild Giftbox]]"
    ],
    "description": [
      "Hold down to gain EXP in the skill that's displayed in the corner of your screen. If you're in a town, you will gain EXP in the town skill. The amount of EXP you get is based on your skill's Lv."
    ],
    "questAss": [],
    "notes": " "
  },
  "ExpBalloon3": {
    "displayName": "Large Experience Balloon",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "200",
    "Type": "Exp Balloon",
    "sources": [
      "Peanut De-Aging",
      "Puzzles and Math, a Winning Combination!",
      "Small Stingers, Big Owie",
      "[[Guild Giftbox]]"
    ],
    "description": [
      "Hold down to gain EXP in the skill that's displayed in the corner of your screen. If you're in a town, you will gain EXP in the town skill. The amount of EXP you get is based on your skill's Lv."
    ],
    "questAss": [],
    "notes": " "
  },
  "JobApplication": {
    "displayName": "Job Application",
    "sellPrice": "200",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["Dr Defecaus"],
    "detdrops": [["Dr Defecaus", "1", "1"]],
    "uses": [["Fired for BS Reasons!", "1", "Quests"]],
    "description": [
      "It's a registration form for the",
      "job of Sanitation Comissioner.",
      "One of the requirements is being",
      "able to pick up dog poop without",
      "immediately throwing the bag",
      "on the ground afterward."
    ],
    "questAss": ["Fired for BS Reasons!"],
    "notes": " "
  },
  "SmithingHammerChisel": {
    "displayName": "Sculpting Tools",
    "sellPrice": "800",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["Blunder Hills Vendor"],
    "uses": [
      ["Visualizing the Sculpture Within...", "1", "Quests"],
      ["Luncheon with the Inlaws", "1", "Quests"]
    ],
    "description": [
      "You gotta embrace the marble!",
      "You gotta sniff the marble!",
      "You gotta lick the marble!",
      "You gotta wash the marble!",
      "You gotta BE THE MARBLE!"
    ],
    "questAss": [
      "Visualizing the Sculpture Within...",
      "Luncheon with the Inlaws"
    ],
    "shopData": [
      {
        "vendor": "Blunder Hills",
        "quantity": "4",
        "no": 14
      }
    ],
    "notes": " "
  },
  "SmithingHammerChisel2": {
    "displayName": "Guilding Tools",
    "sellPrice": "12500",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["YumYum Grotto Vendor"],
    "description": [
      "Drop this on the statue man, and you'll turn him to gold and unlock Golden Statues!"
    ],
    "questAss": [],
    "shopData": [
      {
        "vendor": "YumYum Grotto",
        "quantity": "1",
        "no": 16
      }
    ]
  },
  "BobJoePickle": {
    "displayName": "BobJoePickle",
    "sellPrice": "40000",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["YumYum Grotto Vendor"],
    "uses": [
      ["Bad Kitty, get off that altar!", "1", "Quests"],
      ["Pickle Jar", "Lots", "Alchemy"]
    ],
    "description": [
      "He was one of the good ones...",
      "Alas he is now just a pickle.",
      "Good for scaring a cat though!"
    ],
    "questAss": ["Bad Kitty, get off that altar!"],
    "shopData": [
      {
        "vendor": "YumYum Grotto",
        "quantity": "1",
        "no": 4
      }
    ],
    "notes": " "
  },
  "Quest1": {
    "displayName": "Mining Certificate",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["Literally Burning your Money"],
    "uses": [["Certified Swinger, of Pickaxes of course!", "1", "Quests"]],
    "description": [
      "It's proof that you can mine, and",
      "it's even signed by Glumlee himself!",
      "It says;",
      "'You passed. Good for you. Ugh'"
    ],
    "questAss": ["Certified Swinger, of Pickaxes of course!"],
    "notes": " "
  },
  "Crystal1": {
    "displayName": "Desert Topaz",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["Amarok"],
    "detdrops": [["Amarok", "1", "1"]],
    "uses": [["Restoring Power to the Portal", "1", "Quests"]],
    "description": [
      "Restores power to the Desert",
      "Portal in the Grasslands Town."
    ],
    "questAss": ["Restoring Power to the Portal"],
    "hascard": true,
    "notes": " "
  },
  "Crystal2": {
    "displayName": "Glacier Quartz",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["Efaunt"],
    "detdrops": [["Efaunt", "1", "1"]],
    "uses": [["Restoring Power to another Portal", "1", "Quests"]],
    "description": [
      "Restores power to the Glacial Portal in the desert town, allowing travel to World 3!"
    ],
    "questAss": ["Restoring Power to another Portal"],
    "hascard": true,
    "notes": " "
  },
  "Crystal3": {
    "displayName": "Galaxial Amethyst",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "description": [
      "Restores power to the Galaxy Portal in the glacier town, allowing travel to World 4!"
    ],
    "questAss": [],
    "notes": " "
  },
  "Quest2": {
    "displayName": "Mining Certificate",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "description": [],
    "questAss": [],
    "notes": " "
  },
  "PeanutS": {
    "displayName": "Stone Peanut",
    "sellPrice": "5000",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["A Peanut Saved is a Peanut not Eaten!"],
    "description": [
      "It's like a regular peanut, except",
      "it's made of stone instead of pea.",
      "I bet a Rocklyte would enjoy it!"
    ],
    "questAss": [],
    "notes": " "
  },
  "Quest3": {
    "displayName": "Ketchup Bottle",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["Frog"],
    "detdrops": [["Frog", "0.15", "1"]],
    "uses": [["Beating Up Frogs for some Sauce", "3", "Quests"]],
    "description": [
      "A tiny ketchup bottle, small enough",
      "for a Frog to use. Would go",
      "great with some Mustard!"
    ],
    "questAss": ["Beating Up Frogs for some Sauce"],
    "notes": " "
  },
  "Quest4": {
    "displayName": "Mustard Bottle",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["Frog"],
    "detdrops": [["Frog", "0.15", "1"]],
    "uses": [["Beating Up Frogs for some Sauce", "3", "Quests"]],
    "description": [
      "A tiny mustard bottle, small enough",
      "for a Frog to never use because",
      "mustard is gross. Would go great",
      "with some Ketchup!"
    ],
    "questAss": ["Beating Up Frogs for some Sauce"],
    "notes": " "
  },
  "Mayo": {
    "displayName": "Mayonnaise Bottle",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Trash",
    "description": [
      "Why did someone bury a bottle of mayo? Wait... why did you go dig it up??"
    ],
    "questAss": []
  },
  "Trash": {
    "displayName": "Broken Weapon",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Trash",
    "description": ["It's totally broken."],
    "questAss": []
  },
  "Trash2": {
    "displayName": "Dried Paint Blob",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Trash",
    "description": ["Its all hard and crusty now."],
    "questAss": []
  },
  "Trash3": {
    "displayName": "Engraved Bullet",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Trash",
    "description": ["It's a bullet, and it's got your name on it!"],
    "questAss": []
  },
  "Quest5": {
    "displayName": "Golden Jam (Quest)",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["Live-Action Entertainment"],
    "uses": [["The Unoccupied Picnic", "1", "Quests"]],
    "description": [
      "It's a fake jar filled with springs!",
      "The best way to crack a joke with",
      "your friends at their expense!"
    ],
    "questAss": ["The Unoccupied Picnic"],
    "notes": " "
  },
  "Quest6": {
    "displayName": "Scouting Report",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["Investigator by Day, Prankster by Night"],
    "uses": [["Seeking Foreign Aid", "1", "Quests"]],
    "description": [
      "It says a Giant Wolf-like Golem was",
      "seen walking with the gem even",
      "deeper into the Jungle.",
      "Stiltzcho has purposefully smudged his",
      "signature so that it's not",
      "readable."
    ],
    "questAss": ["Seeking Foreign Aid"],
    "notes": " "
  },
  "Quest7": {
    "displayName": "Strange Rock",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["Baby Boa"],
    "detdrops": [["Baby Boa", "0.2", "1"]],
    "uses": [["No Stone Unturned", "5", "Quests"]],
    "description": [
      "Looks like the piece of a golem.",
      "It even has 'Made In Golemtopia'",
      "engraved on the side of it."
    ],
    "questAss": ["No Stone Unturned"],
    "notes": " "
  },
  "Quest10": {
    "displayName": "Green Tea",
    "sellPrice": "1000",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "description": [
      "You're playing a game right now",
      "with a sub-plot that involves a",
      "jar of sand falling in love with",
      "a cup of tea. Just thought I'd",
      "point that out."
    ],
    "questAss": ["Afternoon Tea in a Jiffy"],
    "notes": " "
  },
  "Quest11": {
    "displayName": "Forest Villas Flyer Thingy",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": [
      "[[Tiki Chief#Three Strikes, you're Out!|Three Strikes, you're Out!]]"
    ],
    "description": [
      "Solid evidence that it's possible",
      "to have a negative crafting level."
    ],
    "questAss": ["Three Strikes, you're Out!"],
    "notes": " "
  },
  "Quest12": {
    "displayName": "Dog Bone",
    "sellPrice": "7",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["Wode Board"],
    "detdrops": [["Wode Board", ".1", "1"]],
    "uses": [["Why he Die???", "10", "Quests"]],
    "description": [
      "Dog Bone must have died from a blunt strike to the head, surely that's where he got his Ghost-Name from! Pretty proud of myself for solving this, even if Item Descriptions like me aren't capable of feeling pride!"
    ],
    "questAss": ["Why he Die???"],
    "notes": " "
  },
  "Quest13": {
    "displayName": "Empty Box",
    "sellPrice": "30950",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [["Signed, Sealed and Lost in the Post", "5", "Quests"]],
    "description": [
      "An empty box, the perfect place to put all your Hermit Cans, Megalodon teeth, and pure water... that you don't have anymore haha!"
    ],
    "questAss": ["Signed, Sealed and Lost in the Post"],
    "recipeData": {
      "recipe": [
        ["Fish2", "250"],
        ["DesertA2", "400"],
        ["PureWater", "4"]
      ],
      "levelReqToCraft": "18",
      "expGiven": "1500",
      "no": 41,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "Fish2", "250"],
      [0, "DesertA2", "400"],
      [0, "PureWater", "4"]
    ],
    "detRecipeTotals": [
      ["Fish2", 250],
      ["DesertA2", 400],
      ["PureWater", 4]
    ],
    "notes": " "
  },
  "Quest14": {
    "displayName": "Employment Statistics",
    "sellPrice": "50",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["Rat"],
    "detdrops": [["Rat", ".1", "1"]],
    "uses": [["The Rats are to Blame!", "50", "Quests"]],
    "description": [
      "Wait a minute, these stats have misleading Y-axes and invalid sampling methods! Even then, they show no clear evidence for rats stealing jobs! How could anyone possibly believe this data?"
    ],
    "questAss": ["The Rats are to Blame!"],
    "notes": " "
  },
  "Quest15": {
    "displayName": "Red Frisbee",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["Wood Mushroom"],
    "detdrops": [["Wood Mushroom", "0.00001", "1"]],
    "uses": [["Frisbee Fanatic", "1", "Quests"]],
    "description": [
      "Sprout's red frisbee! I hope you didn't get shrunken down by a magic apple on your way up, or your stetchy dog brother might laugh at you!"
    ],
    "questAss": ["Frisbee Fanatic"],
    "notes": " "
  },
  "Quest16": {
    "displayName": "Broken Mic",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "uses": [
      ["The Impossible Task", "1", "Quests"],
      ["He's Havin' a Bad Day", "1", "Quests"]
    ],
    "description": [
      "The guy who carelessly dropped this microphone is a moron, and that's a fact. Boom, mic drop... ah crap."
    ],
    "questAss": ["The Impossible Task", "He's Havin' a Bad Day"],
    "notes": " "
  },
  "Quest17": {
    "displayName": "Amarok Slab",
    "sellPrice": "250",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Amarok", "Chaotic Amarok", "Nightmare Amarok"],
    "detdrops": [
      ["Amarok", "0.3", "1"],
      ["Chaotic Amarok", "0.4", "3"],
      ["Nightmare Amarok", "0.3", "1"]
    ],
    "uses": [
      ["EquipmentHats22", "20", "Crafting"],
      ["EquipmentShirts18", "10", "Crafting"],
      ["EquipmentPants17", "6", "Crafting"],
      ["EquipmentShoes20", "5", "Crafting"],
      ["EquipmentPendant17", "10", "Crafting"],
      ["Dudes Next Door", "Lots", "Post Office"],
      ["Bow Wow going Dow..n!", "25", "Quests"],
      ["StampA23", "Lots", "Stamps"]
    ],
    "description": [
      "A piece of rock from the big bad wolf himself. Careful, it's overflowing with green plasma energy! No wait, that's just some moss."
    ],
    "questAss": ["Bow Wow going Dow..n!"],
    "notes": " "
  },
  "Quest18": {
    "displayName": "Loomi's Room Key",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["Moonmoon"],
    "detdrops": [["Moonmoon", "0.0001", "1"]],
    "uses": [["Rhyming is Key!", "10", "Quests"]],
    "description": [
      "A key to a door, but there are still more! Why so many? They were on sale for a penny!"
    ],
    "questAss": ["Rhyming is Key!"],
    "notes": " "
  },
  "Quest19": {
    "displayName": "Golden Dubloon",
    "sellPrice": "3500",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["YumYum Grotto Vendor"],
    "uses": [
      ["EquipmentToolsHatchet2", "5", "Crafting"],
      ["CatchingNet4", "5", "Crafting"],
      ["Say Goodbye to your Dubloon!", "1", "Quests"],
      ["You Shouldn't Have! No, really.", "1", "Quests"]
    ],
    "description": [
      "Avast, land lubber! This coin be property of the YumYum Sea Pirates! Ye best be returning it, lest ye want an underwater funeral, arg!"
    ],
    "questAss": [
      "Say Goodbye to your Dubloon!",
      "You Shouldn't Have! No, really."
    ],
    "shopData": [
      {
        "vendor": "YumYum Grotto",
        "quantity": "10000",
        "no": 3
      }
    ],
    "notes": " "
  },
  "Quest20": {
    "displayName": "Signed Arrest Warrant",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["Bringing Bob's Boxes"],
    "uses": [["Bake Him Away, Toys", "1", "Quests"]],
    "description": [
      "That's weird, Bandit Bob's signature looks an awful lot like yours..."
    ],
    "questAss": ["Bake Him Away, Toys"],
    "notes": " "
  },
  "Quest21": {
    "displayName": "Time Thingy",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["DropTable2"],
    "detdrops": [
      ["Crystal Carrot", "0.15", "1.0"],
      ["Slime", "0.0012", "1.0"],
      ["Baby Boa", "0.0015", "1.0"],
      ["Carrotman", "0.0018", "1.0"],
      ["Amarok", "0.3", "2.0"],
      ["Chaotic Amarok", "0.3", "4.0"],
      ["Nightmare Amarok", "0.3", "2.0"],
      ["Baba Yaga", "0.3", "1.0"],
      ["Dewdrop Silver Chest", "0.3", "1.0"]
    ],
    "uses": [["Partycrastination", "250", "Quests"]],
    "description": [
      "Yea yea I know, this quest doesn't really make sense. Although, if you reeeaaally think about it, you'll realize that it still makes no sense... so it's best not to think about it!"
    ],
    "questAss": ["Partycrastination"],
    "notes": " "
  },
  "Quest22": {
    "displayName": "Corporatube Sub",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": [
      "Poop",
      "Poop",
      "Poop",
      "DropTable14",
      "DropTable15",
      "DropTable16"
    ],
    "detdrops": [
      ["Poop", "0.23", "1"],
      ["Crystal Cattle", "0.12", "3.0"],
      ["Sheepie", "0.0005", "3.0"],
      ["Frost Flake", "0.0005600000000000001", "3.0"],
      ["Sir Stache", "0.00062", "3.0"],
      ["Xylobone", "0.002", "3.0"],
      ["Chillsnap Bronze Chest", "0.2", "3.0"],
      ["Bloque", "0.0005", "3.0"],
      ["Mamooth", "0.00054", "3.0"],
      ["Snowman", "0.00058", "3.0"],
      ["Penguin", "0.00062", "3.0"],
      ["Thermister", "0.00066", "3.0"],
      ["Chillsnap Silver Chest", "0.2", "3.0"],
      ["Dedotated Ram", "0.00068", "3.0"],
      ["Quenchie", "0.0005", "3.0"],
      ["Cryosnake", "0.0005600000000000001", "3.0"],
      ["Bop Box", "0.0006000000000000001", "3.0"],
      ["Neyeptune", "0.00064", "3.0"],
      ["Bloodbone", "0.001", "3.0"],
      ["Chillsnap Golden Chest", "0.2", "3.0"]
    ],
    "uses": [
      ["Clout Chasin'", "300", "Quests"],
      ["Cross Platform Promotion", "5000", "Quests"],
      ["7 Figure Followers", "200000", "Quests"]
    ],
    "description": [
      "Represents a single subscriber on the Corporatube Video Platform. It You'sed to be called something else, but no one around here remembers."
    ],
    "questAss": [
      "Clout Chasin'",
      "Cross Platform Promotion",
      "7 Figure Followers"
    ],
    "notes": " "
  },
  "Quest23": {
    "displayName": "Instablab Follower",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["Rat", "Rat", "DropTable6", "DropTable7", "DropTable8"],
    "detdrops": [
      ["Rat", "0.16", "1"],
      ["Crystal Crabal", "0.18", "3.0"],
      ["Sandy Pot", "0.0009", "3.0"],
      ["Mimic", "0.00096", "3.0"],
      ["Crabcake", "0.00108", "3.0"],
      ["Efaunt", "0.3", "6.0"],
      ["Nightmare Amarok", "0.3", "6.0"],
      ["Chizoar", "0.3", "6.0"],
      ["Nightmare Chizoar", "0.3", "6.0"],
      ["Biggie Hours", "0.15", "3.0"],
      ["Sandstone Bronze Chest", "0.3", "3.0"],
      ["Mafioso", "0.00096", "3.0"],
      ["Sand Castle", "0.00105", "3.0"],
      ["Pincermin", "0.00111", "3.0"],
      ["Mashed Potato", "0.0011699999999999998", "3.0"],
      ["Dig Doug", "0.00096", "3.0"],
      ["Chaotic Efaunt", "0.3", "6.0"],
      ["Chaotic Chizoar", "0.3", "6.0"],
      ["Sandstone Silver Chest", "0.3", "3.0"],
      ["Tyson", "0.00096", "3.0"],
      ["Moonmoon", "0.00105", "3.0"],
      ["Sand Giant", "0.00111", "3.0"],
      ["Snelbie", "0.0011699999999999998", "3.0"],
      ["Sandstone Golden Chest", "0.3", "3.0"]
    ],
    "uses": [
      ["Cross Platform Promotion", "1000", "Quests"],
      ["7 Figure Followers", "300000", "Quests"]
    ],
    "description": [
      "Represents a single follower on Instablab, who probably sound like this: 'Oh mah gawd Becky, you would not Buh Leeeeve how lame this game I'm playing is. They have a joke about Insta that tooootally isn't funnay, like seriouslayy!"
    ],
    "questAss": ["Cross Platform Promotion", "7 Figure Followers"],
    "notes": " "
  },
  "Quest24": {
    "displayName": "Cloudsound Follower",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": [
      "DropTable1",
      "DropTable2",
      "DropTable3",
      "DropTable3b",
      "DropTable3c",
      "DropTable6",
      "DropTable7",
      "DropTable8",
      "DropTable14",
      "DropTable15",
      "DropTable16"
    ],
    "detdrops": [
      ["Crystal Carrot", "0.3", "3.0"],
      ["Green Mushroom", "0.0015", "3.0"],
      ["Frog", "0.0019", "3.0"],
      ["Bored Bean", "0.00225", "3.0"],
      ["Red Mushroom", "0.0026", "3.0"],
      ["Amarok", "0.5", "6.0"],
      ["Chaotic Amarok", "0.5", "12.0"],
      ["Nightmare Amarok", "0.5", "6.0"],
      ["Baba Yaga", "0.5", "6.0"],
      ["Dewdrop Bronze Chest", "0.5", "3.0"],
      ["Slime", "0.002", "4.0"],
      ["Baby Boa", "0.0025", "4.0"],
      ["Carrotman", "0.003", "4.0"],
      ["Dewdrop Silver Chest", "0.5", "4.0"],
      ["Glublin", "0.002", "6.0"],
      ["Wode Board", "0.00225", "6.0"],
      ["Gigafrog", "0.0025", "6.0"],
      ["Dr Defecaus", "0.5", "12.0"],
      ["Dewdrop Golden Chest", "0.5", "6.0"],
      ["Poop", "0.003", "3.0"],
      ["Rat", "0.003", "3.0"],
      ["Walking Stick", "0.00285", "3.0"],
      ["Nutto", "0.00325", "3.0"],
      ["Wood Mushroom", "0.0035", "3.0"],
      ["Crystal Crabal", "0.3", "7.0"],
      ["Sandy Pot", "0.0015", "7.0"],
      ["Mimic", "0.0016", "7.0"],
      ["Crabcake", "0.0018", "7.0"],
      ["Efaunt", "0.5", "14.0"],
      ["Chizoar", "0.5", "14.0"],
      ["Nightmare Chizoar", "0.5", "14.0"],
      ["Biggie Hours", "0.25", "7.0"],
      ["Sandstone Bronze Chest", "0.5", "7.0"],
      ["Mafioso", "0.0016", "8.0"],
      ["Sand Castle", "0.00175", "8.0"],
      ["Pincermin", "0.00185", "8.0"],
      ["Mashed Potato", "0.00195", "8.0"],
      ["Dig Doug", "0.0016", "8.0"],
      ["Chaotic Efaunt", "0.5", "16.0"],
      ["Chaotic Chizoar", "0.5", "16.0"],
      ["Sandstone Silver Chest", "0.5", "8.0"],
      ["Tyson", "0.0016", "8.0"],
      ["Moonmoon", "0.00175", "8.0"],
      ["Sand Giant", "0.00185", "8.0"],
      ["Snelbie", "0.00195", "8.0"],
      ["Sandstone Golden Chest", "0.5", "8.0"],
      ["Crystal Cattle", "0.3", "8.0"],
      ["Sheepie", "0.00125", "8.0"],
      ["Frost Flake", "0.0014", "8.0"],
      ["Sir Stache", "0.00155", "8.0"],
      ["Xylobone", "0.005", "8.0"],
      ["Chillsnap Bronze Chest", "0.5", "8.0"],
      ["Bloque", "0.00125", "9.0"],
      ["Mamooth", "0.00135", "9.0"],
      ["Snowman", "0.00145", "9.0"],
      ["Penguin", "0.00155", "9.0"],
      ["Thermister", "0.00165", "9.0"],
      ["Chillsnap Silver Chest", "0.5", "9.0"],
      ["Dedotated Ram", "0.0017", "10.0"],
      ["Quenchie", "0.00125", "10.0"],
      ["Cryosnake", "0.0014", "10.0"],
      ["Bop Box", "0.0015", "10.0"],
      ["Neyeptune", "0.0016", "10.0"],
      ["Bloodbone", "0.0025", "10.0"],
      ["Chillsnap Golden Chest", "0.5", "10.0"]
    ],
    "uses": [["7 Figure Followers", "500000", "Quests"]],
    "description": [
      "Represents a single follower on Cloudsound. This isn't a website, it's literally a giant cloud that emits sound that people enjoy following around. Why, what were YOU thinking this was?"
    ],
    "questAss": ["7 Figure Followers"],
    "notes": " "
  },
  "Quest25": {
    "displayName": "Birthday Card",
    "sellPrice": "100",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["[[Alchemy#Level up Gift|Level up Gift]]"],
    "description": [
      "It'll mean more to you when you're older... or may when this game is older and I add a use for this item, can't remember which."
    ],
    "questAss": [],
    "notes": "This item has no use yet, but might be given one in the future. Only LavaFlame2 really knows."
  },
  "Quest26": {
    "displayName": "Pre Crime Box",
    "sellPrice": "100",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": [
      "[[Alchemy#Level up Gift|Level up Gift (however this item has no use anymore)]]"
    ],
    "description": [
      "The traditional gift given to those about to be victimized. A favorite amongst criminals!"
    ],
    "questAss": [],
    "notes": " "
  },
  "Quest27": {
    "displayName": "Bag o Nuts",
    "sellPrice": "100",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["Dress to Impress"],
    "description": ["Mmmmm, these nuts are so yuuuummy!"],
    "questAss": [],
    "notes": " "
  },
  "Quest28": {
    "displayName": "IOU One Blue Crystal",
    "sellPrice": "100",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "description": [
      "Hold down on this IOU, and a Blue Crystal will drop at your feet!"
    ],
    "questAss": [],
    "notes": " "
  },
  "Quest29": {
    "displayName": "Chaotic Amarok Slab",
    "sellPrice": "100",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Chaotic Amarok"],
    "detdrops": [["Chaotic Amarok", "0.2", "1"]],
    "uses": [["EquipmentPendant17", "4", "Crafting"]],
    "description": [
      "A piece of rock from the bigger badder wolf himself. Careful, it's overflowing with poisonous ooze! No wait, that's just plasma energy..."
    ],
    "questAss": [],
    "notes": " "
  },
  "GoldricP1": {
    "displayName": "Casual Confidante",
    "sellPrice": "100",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["Mimic"],
    "detdrops": [["Mimic", "0.1", "1"]],
    "uses": [["Only Winners have Portraits", "200", "Quests"]],
    "description": [
      "It's a painting of a strangely out of place gold bar fellow. They look nervous underneath their outward bravado."
    ],
    "questAss": ["Only Winners have Portraits"],
    "notes": " "
  },
  "GoldricP2": {
    "displayName": "Triumphant Treason",
    "sellPrice": "100",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["Mafioso"],
    "detdrops": [["Mafioso", "0.075", "1"]],
    "uses": [["Only Winners have Portraits", "200", "Quests"]],
    "description": [
      "It's a rendition of the Battle of Sassasge, wherein Goldrichius Von Gallbladder waged war on the municipal kingdom of Sterling S. Elvar"
    ],
    "questAss": ["Only Winners have Portraits"],
    "notes": " "
  },
  "GoldricP3": {
    "displayName": "Claiming Cashe",
    "sellPrice": "100",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["Sand Castle"],
    "detdrops": [["Sand Castle", "0.05", "1"]],
    "uses": [["Only Winners have Portraits", "200", "Quests"]],
    "description": [
      "The victory portrait of King Goldrichius Sr. after successfully dethroning S.S. Elvar from the East Yum-Yum dunedaries."
    ],
    "questAss": ["Only Winners have Portraits"],
    "notes": " "
  },
  "Quest30": {
    "displayName": "Giftmas Box",
    "sellPrice": "100",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": [
      "Giftmas Blobulyte",
      "Meaning of Giftmas",
      "Ghost",
      "Boo, Headshot!",
      "You Shouldn't Have! No, really."
    ],
    "detdrops": [
      ["Giftmas Blobulyte", "0.05", "1"],
      ["Meaning of Giftmas", "0.05", "1"],
      ["Ghost", "0.15", "1"]
    ],
    "description": [
      "Hold down to open! There's a santa hat in one of these, as well as various holiday exclusive goodies, even cards!"
    ],
    "questAss": [],
    "notes": " "
  },
  "Quest31": {
    "displayName": "Gem Note",
    "sellPrice": "100",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Lava Letter",
    "description": [
      "Did you like those 20 gems you just picked up? Well you'll LOVE the 500 gems I just added to your account. This paper is worthless btw lol it's just a picture of a gem."
    ],
    "questAss": [],
    "notes": " "
  },
  "Cutter": {
    "displayName": "Bolt Cutters",
    "sellPrice": "5000",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["Green Mushroom"],
    "detdrops": [["Green Mushroom", "0.00001", "1"]],
    "uses": [["BadgeG3", "1", "Crafting"]],
    "description": [
      "The engraving reads 'Strong enough to cut through 2 pixels of solid metal!'     How strange... theres no joke or pun in that description! It must be a serious hint or something!"
    ],
    "questAss": [],
    "notes": " "
  },
  "Quest32": {
    "displayName": "Monster Rating",
    "sellPrice": "100",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["DropTable6", "DropTable7"],
    "detdrops": [
      ["Crystal Crabal", "0.36", "1.0"],
      ["Sandy Pot", "0.0018", "1.0"],
      ["Mimic", "0.00192", "1.0"],
      ["Crabcake", "0.00216", "1.0"],
      ["Efaunt", "0.6", "2.0"],
      ["Nightmare Amarok", "0.6", "2.0"],
      ["Chizoar", "0.6", "2.0"],
      ["Nightmare Chizoar", "0.6", "2.0"],
      ["Biggie Hours", "0.3", "1.0"],
      ["Sandstone Bronze Chest", "0.6", "1.0"],
      ["Mafioso", "0.00288", "1.0"],
      ["Sand Castle", "0.00315", "1.0"],
      ["Pincermin", "0.00333", "1.0"],
      ["Mashed Potato", "0.00351", "1.0"],
      ["Dig Doug", "0.00288", "1.0"],
      ["Chaotic Efaunt", "0.9", "2.0"],
      ["Chaotic Chizoar", "0.9", "2.0"],
      ["Sandstone Silver Chest", "0.9", "1.0"]
    ],
    "uses": [["Ok, NOW it's Peak Gaming!", "1000", "Quests"]],
    "description": [
      "'I literally just die over and over, I can't even fight back other than just running into them. Honestly I wish I was dead, but even then I just keep respawning, literally the worst experience ever, 1 star!!'"
    ],
    "questAss": ["Ok, NOW it's Peak Gaming!"],
    "notes": " "
  },
  "Quest33": {
    "displayName": "Player Rating With Letter P",
    "sellPrice": "100",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "uses": [["Ok, NOW it's Peak Gaming!", "1", "Quests"]],
    "description": [
      "'WTF y do my items CONSTANTLY DISAPPEAR I HATE IT!! Complete RUBBISH! 1 STAR UNTIL YOU FIX MY SPECIFIC PROBLEM and even then I'll probably just raise it to 2 stars lol'"
    ],
    "questAss": ["Ok, NOW it's Peak Gaming!"],
    "notes": " "
  },
  "Quest34": {
    "displayName": "Player Rating With Letter S",
    "sellPrice": "100",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "uses": [["Ok, NOW it's Peak Gaming!", "1", "Quests"]],
    "description": [
      "'This is NOT an Idle game! I actually have to play it sometimes! And why are there actual pictures on the screen, instead of just words and text boxes?? I can't believe I paid 0 dollars for this trash!'"
    ],
    "questAss": ["Ok, NOW it's Peak Gaming!"],
    "notes": " "
  },
  "Quest35": {
    "displayName": "Googley Eyes",
    "sellPrice": "2929",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Summon Item",
    "sources": ["Smithing", "Recipe from Crabcake"],
    "description": [
      "I remember when I was a kid, I spent an HOUR making a GLASS container look like it was a little friend using googley eyes just like these! If only there was a CONTAINER in this game, so you could do it to!"
    ],
    "questAss": [],
    "recipeData": {
      "recipe": [
        ["TreeInterior1b", "2"],
        ["PureWater", "5"],
        ["InvBag105", "1"]
      ],
      "levelReqToCraft": "17",
      "expGiven": "900",
      "no": 42,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Crabcake"]
    },
    "detrecipe": [
      [0, "TreeInterior1b", "2"],
      [0, "PureWater", "5"],
      [0, "InvBag105", "1"]
    ],
    "detRecipeTotals": [
      ["TreeInterior1b", 2],
      ["PureWater", 5],
      ["InvBag105", 1]
    ],
    "notes": " "
  },
  "Quest36": {
    "displayName": "Dootjat Eye",
    "sellPrice": "29360",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Summon Item",
    "sources": ["Smithing", "Recipe from Sand Giant"],
    "uses": [
      ["EquipmentHats52", "3", "Crafting"],
      ["EquipmentPunching5", "10", "Crafting"]
    ],
    "description": [
      "Blinks repeatedly when close to the Black Market, where you buy the Ankh used in the ice zone to get the Hedjet... wait, wrong game, sorry!"
    ],
    "questAss": [],
    "recipeData": {
      "recipe": [
        ["Quest37", "1"],
        ["GoldBar", "80"],
        ["DesertC2b", "1"]
      ],
      "levelReqToCraft": "21",
      "expGiven": "2500",
      "no": 59,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Sand Giant"]
    },
    "detrecipe": [
      [0, "Quest37", "1"],
      [0, "GoldBar", "80"],
      [0, "DesertC2b", "1"]
    ],
    "detRecipeTotals": [
      ["Quest37", 1],
      ["GoldBar", 80],
      ["DesertC2b", 1]
    ],
    "notes": " "
  },
  "Quest37": {
    "displayName": "Silver Antique",
    "sellPrice": "20000",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Hunk Of Junk",
    "sources": [
      "Encroaching Forest Villas Vendor",
      "Journey to the Center of the Blundermines"
    ],
    "uses": [["Quest36", "1", "Crafting"]],
    "description": [
      "An old lady pawned it off to the bazaar claiming it was some 'ancient artifact of the pharoah King Doot'. It's probably just scrap metal, doubt it's even real silver. Would make for a decent Necklace!"
    ],
    "questAss": [],
    "shopData": [
      {
        "vendor": "Encroaching Forest Villas",
        "quantity": "1",
        "no": 8
      }
    ],
    "notes": " "
  },
  "Quest38": {
    "displayName": "Guild Giftbox",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Usable Box",
    "description": [
      "Hold down to open! Contains a random cool-kid item, like gems, exp balloons, or even time candy! Also, 1 in every 500 gifts contains the 'Ultra Unboxer' Trophy!"
    ],
    "questAss": [],
    "notes": " "
  },
  "Quest39": {
    "displayName": "Lovey Dovey Letter",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Event Item",
    "uses": [["Heart Hogger", "25", "Quests"]],
    "description": [
      "Hold down on 5 letters to spawn a Valentslime, or turn these in each day to the Loveulyte for a reward!"
    ],
    "questAss": ["Heart Hogger"],
    "notes": " "
  },
  "Quest40": {
    "displayName": "Choco Box",
    "sellPrice": "100",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": [
      "Loveulyte",
      "Chocco Box",
      "Valentslime",
      "Heart Hogger",
      "Heartbreaker"
    ],
    "detdrops": [
      ["Loveulyte", "0.05", "1"],
      ["Chocco Box", "0.05", "1"],
      ["Valentslime", "0.20", "1"]
    ],
    "description": [
      "Hold down to open this box of meatballs... err chestnuts... err chocolate! There's a Giant Bow Hat in one of these, as well as various holiday exclusive goodies, even cards!"
    ],
    "questAss": [],
    "notes": " "
  },
  "Quest41": {
    "displayName": "Flowies",
    "sellPrice": "100",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["Baba Yaga"],
    "detdrops": [["Baba Yaga", "1", "1"]],
    "uses": [
      ["Dressing like a Dork", "5", "Quests"],
      ["Literally Physics", "5", "Quests"]
    ],
    "description": [
      "Curse you flowey! I trusted you, I accepted your pellets of friendship, and then you had to go and throw it all away! And now here you are, trying to take over yet another video game... well I NOT GONNA LE-- oh wait, these are just normal flowers"
    ],
    "questAss": ["Dressing like a Dork", "Literally Physics"],
    "notes": " "
  },
  "Quest42": {
    "displayName": "Egg Capsule",
    "sellPrice": "100",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Event Box",
    "sources": [
      "Egggulyte",
      "Egg Capsule",
      "Floofie",
      "Shell Snake",
      "Egg Shaped Lootboxes!",
      "I've Got a Golden Tickegg!"
    ],
    "detdrops": [
      ["Egggulyte", "0.05", "1"],
      ["Egg Capsule", "0.05", "1"],
      ["Floofie", "0.1", "1"],
      ["Shell Snake", "0.1", "1"]
    ],
    "description": [
      "Hold down to open for a random reward! Or, hold down for a LONG time to open them faster... yea, dreams do come true #"
    ],
    "questAss": [],
    "notes": " "
  },
  "Quest43": {
    "displayName": "Gummy Bunny",
    "sellPrice": "100",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Event Box",
    "description": [
      "Hold down to summon a friendly easter monster. But be careful, unlike real life where all friends are genuine, these monsters are just pretending to be your friend for personal gain!"
    ],
    "questAss": [],
    "notes": " "
  },
  "Quest44": {
    "displayName": "Goldegg Capsule",
    "sellPrice": "100",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Event Box",
    "sources": ["Egg Capsule", "Floofie", "Shell Snake", "Treasure Hunt 4"],
    "detdrops": [
      ["Egg Capsule", "0.13", "1"],
      ["Floofie", "0.02", "1"],
      ["Shell Snake", "0.02", "1"]
    ],
    "description": [
      "Hold down to summon a mini boss or a green mushroom. Mostly the second thing."
    ],
    "questAss": [],
    "notes": " "
  },
  "Quest45": {
    "displayName": "Sesame Seed",
    "sellPrice": "100",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Dungeon Key",
    "uses": [["The Desert Dungeon Prequest", "1", "Quests"]],
    "description": [
      "The key to Bandit Bob's Party Dungeon! Not sure why a sesame seed opens a door out here in the desert though, seems weird."
    ],
    "questAss": ["The Desert Dungeon Prequest"]
  },
  "Quest46": {
    "displayName": "The Bobber Challenge Scroll",
    "sellPrice": "100",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["The Biggest Fish in the Sea...?"],
    "description": [
      "A great behemoth has emerged from its slumber... and it now roams the fishing minigame! If you catch 2 whales, then purposefully avoid catching the 3rd whale, the ocean behemoth will eventually appear! Catch it to win a trophy!"
    ],
    "questAss": []
  },
  "Quest47": {
    "displayName": "Elderly Peanut",
    "sellPrice": "100",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "description": [
      "It has a very peculiar stench... the smell is so unbearable, your damage is lowered by 50% and your Max HP is just 1! Only the sands of a dead Biggie Hours Miniboss could reverse the aging this peanut has undergone!"
    ],
    "questAss": []
  },
  "Quest48": {
    "displayName": "Pete the Peanut",
    "sellPrice": "100",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "uses": [["Peanut De-Aging", "1", "Quests"]],
    "description": [
      "Now that's a happy looking peanut! I wish he was MY best friend, but no one wants to be friends with sentient item dialogue ^"
    ],
    "questAss": ["Peanut De-Aging"]
  },
  "Quest49": {
    "displayName": "Summer Cooler",
    "sellPrice": "100",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Event Box",
    "sources": [
      "Coastiolyte",
      "Mr Blueberry",
      "Plasti Doug",
      "Cooler than a Cooler!",
      "Vibe Check"
    ],
    "detdrops": [
      ["Coastiolyte", "0.5", "1"],
      ["Mr Blueberry", "0.4", "1"],
      ["Plasti Doug", "0.4", "1"]
    ],
    "description": [
      "Hold down to open for a random reward! Or, hold down for a LONG time to open them faster."
    ],
    "questAss": [],
    "notes": " "
  },
  "Quest50": {
    "displayName": "Beach Oyster",
    "sellPrice": "100",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Event Box",
    "sources": [
      "Coastiolyte",
      "Summer Spirit",
      "Cooler than a Cooler!",
      "Vibe Check"
    ],
    "detdrops": [
      ["Coastiolyte", "0.13", "1"],
      ["Summer Spirit", "0.1", "1"]
    ],
    "description": [
      "Hold down to summon a bunch of Summer Monsters, and get a random Pearl!"
    ],
    "questAss": [],
    "notes": " "
  },
  "Pearl4": {
    "displayName": "Black Pearl",
    "sellPrice": "100",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Usable",
    "sources": ["Treasure Hunt 1", "Treasure Hunt 3"],
    "description": [
      "Hold down to gain 20% EXP in the skill that's shown in the corner of the screen. If you're in a town, you will gain EXP in the town skill. Only works on skills below level 30."
    ],
    "questAss": [],
    "notes": " "
  },
  "BadgeG1": {
    "displayName": "Blunderhills NPC Completion Token",
    "sellPrice": "23301",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": [
      "Smithing",
      "[[Scripticus#Champion of the Grasslands|Recipe from Champion of the Grasslands]]"
    ],
    "uses": [["Champion of the Grasslands", "1", "Quests"]],
    "description": [
      "Made up of all the tokens that you",
      "collected after completing an",
      "NPC's entire questline."
    ],
    "questAss": ["Champion of the Grasslands"],
    "recipeData": {
      "recipe": [
        ["NPCtoken1", "1"],
        ["NPCtoken2", "1"],
        ["NPCtoken3", "1"]
      ],
      "levelReqToCraft": "1",
      "expGiven": "2",
      "no": 57,
      "tab": "Anvil Tab 1",
      "recipeFrom": [
        "[[Scripticus#Champion of the Grasslands|Champion of the Grasslands]]"
      ]
    },
    "detrecipe": [
      [0, "NPCtoken1", "1"],
      [1, "NPCtoken5", "1"],
      [1, "NPCtoken6", "1"],
      [1, "NPCtoken4", "1"],
      [1, "NPCtoken9", "1"],
      [0, "NPCtoken2", "1"],
      [1, "NPCtoken10", "1"],
      [1, "NPCtoken11", "1"],
      [1, "NPCtoken13", "1"],
      [1, "NPCtoken7", "1"],
      [0, "NPCtoken3", "1"],
      [1, "Quest9", "1"],
      [1, "NPCtoken15", "1"],
      [1, "NPCtoken12", "1"],
      [1, "NPCtoken14", "1"]
    ],
    "detRecipeTotals": [
      ["NPCtoken5", 1],
      ["NPCtoken6", 1],
      ["NPCtoken4", 1],
      ["NPCtoken9", 1],
      ["NPCtoken10", 1],
      ["NPCtoken11", 1],
      ["NPCtoken13", 1],
      ["NPCtoken7", 1],
      ["Quest9", 1],
      ["NPCtoken15", 1],
      ["NPCtoken12", 1],
      ["NPCtoken14", 1]
    ],
    "notes": " "
  },
  "BadgeG2": {
    "displayName": "Blunder Skills Completion Token",
    "sellPrice": "540720",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": [
      "Smithing",
      "[[Scripticus#Champion of the Grasslands|Recipe from Champion of the Grasslands]]"
    ],
    "uses": [["Champion of the Grasslands", "1", "Quests"]],
    "description": [
      "Proof that you mastered the art",
      "of the Mining, Smithing, and ",
      "Choppin skills."
    ],
    "questAss": ["Champion of the Grasslands"],
    "recipeData": {
      "recipe": [
        ["PlatBar", "1000"],
        ["StumpTree", "2000"],
        ["EquipmentHats22", "1"]
      ],
      "levelReqToCraft": "40",
      "expGiven": "250000",
      "no": 58,
      "tab": "Anvil Tab 1",
      "recipeFrom": [
        "[[Scripticus#Champion of the Grasslands|Champion of the Grasslands]]"
      ]
    },
    "detrecipe": [
      [0, "PlatBar", "1000"],
      [0, "StumpTree", "2000"],
      [0, "EquipmentHats22", "1"],
      [1, "Quest17", "20"],
      [1, "ForestTree", "2500"],
      [1, "TreeInterior1b", "8"]
    ],
    "detRecipeTotals": [
      ["PlatBar", 1000],
      ["StumpTree", 2000],
      ["Quest17", 20],
      ["ForestTree", 2500],
      ["TreeInterior1b", 8]
    ],
    "notes": " "
  },
  "BadgeG3": {
    "displayName": "Blunderhills Misc Completion Token",
    "sellPrice": "253500",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": [
      "Smithing",
      "[[Scripticus#Champion of the Grasslands|Recipe from Champion of the Grasslands]]"
    ],
    "uses": [["Champion of the Grasslands", "1", "Quests"]],
    "description": [
      "Proof that you collected all",
      "the coolest and rarest items that",
      "Blunder Hills has to offer!"
    ],
    "questAss": ["Champion of the Grasslands"],
    "recipeData": {
      "recipe": [
        ["PeanutG", "30"],
        ["Sewers1b", "12"],
        ["Cutter", "1"],
        ["EquipmentBows4", "2"]
      ],
      "levelReqToCraft": "1",
      "expGiven": "2",
      "no": 59,
      "tab": "Anvil Tab 1",
      "recipeFrom": [
        "[[Scripticus#Champion of the Grasslands|Champion of the Grasslands]]"
      ]
    },
    "detrecipe": [
      [0, "PeanutG", "30"],
      [1, "Peanut", "3000"],
      [2, "FoodHealth3", "6000"],
      [2, "Copper", "3000"],
      [2, "BirchTree", "3000"],
      [1, "GoldBar", "1500"],
      [0, "Sewers1b", "12"],
      [0, "Cutter", "1"],
      [0, "EquipmentBows4", "2"]
    ],
    "detRecipeTotals": [
      ["Sewers1b", 12],
      ["Cutter", 1],
      ["EquipmentBows4", 2],
      ["GoldBar", 1500],
      ["FoodHealth3", 6000],
      ["Copper", 3000],
      ["BirchTree", 3000]
    ],
    "notes": " "
  },
  "BadgeD1": {
    "displayName": "Yumyum Desert NPC Completion Token",
    "sellPrice": "199000",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["Smithing"],
    "uses": [["The New Sheriff", "1", "Quests"]],
    "description": [
      "Made up of all the tokens that you",
      "collected after completing an",
      "NPC's entire questline."
    ],
    "questAss": ["The New Sheriff"],
    "recipeData": {
      "recipe": [
        ["NPCtoken28", "1"],
        ["NPCtoken29", "1"],
        ["NPCtoken30", "1"]
      ],
      "levelReqToCraft": "30",
      "expGiven": "4000",
      "no": 73,
      "tab": "Anvil Tab 2",
      "recipeFrom": []
    },
    "detrecipe": [
      [0, "NPCtoken28", "1"],
      [1, "NPCtoken16", "1"],
      [1, "NPCtoken17", "1"],
      [1, "NPCtoken18", "1"],
      [1, "NPCtoken19", "1"],
      [0, "NPCtoken29", "1"],
      [1, "NPCtoken20", "1"],
      [1, "NPCtoken21", "1"],
      [1, "NPCtoken22", "1"],
      [1, "NPCtoken27", "1"],
      [0, "NPCtoken30", "1"],
      [1, "NPCtoken24", "1"],
      [1, "NPCtoken25", "1"],
      [1, "NPCtoken26", "1"],
      [1, "NPCtoken23", "1"]
    ],
    "detRecipeTotals": [
      ["NPCtoken16", 1],
      ["NPCtoken17", 1],
      ["NPCtoken18", 1],
      ["NPCtoken19", 1],
      ["NPCtoken20", 1],
      ["NPCtoken21", 1],
      ["NPCtoken22", 1],
      ["NPCtoken27", 1],
      ["NPCtoken24", 1],
      ["NPCtoken25", 1],
      ["NPCtoken26", 1],
      ["NPCtoken23", 1]
    ]
  },
  "BadgeD2": {
    "displayName": "Yumyum Skills Completion Token",
    "sellPrice": "234500",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["Smithing"],
    "uses": [["The New Sheriff", "1", "Quests"]],
    "description": [
      "Proof that you mastered the art",
      "of the Fishing, Alchemy, and ",
      "Catching skills."
    ],
    "questAss": ["The New Sheriff"],
    "recipeData": {
      "recipe": [
        ["Fish4", "4000"],
        ["Bug4", "8000"],
        ["PureWater2", "50"]
      ],
      "levelReqToCraft": "30",
      "expGiven": "4000",
      "no": 74,
      "tab": "Anvil Tab 2",
      "recipeFrom": []
    },
    "detrecipe": [
      [0, "Fish4", "4000"],
      [0, "Bug4", "8000"],
      [0, "PureWater2", "50"]
    ],
    "detRecipeTotals": [
      ["Fish4", 4000],
      ["Bug4", 8000],
      ["PureWater2", 50]
    ]
  },
  "BadgeD3": {
    "displayName": "Yumyum Misc Completion Token",
    "sellPrice": "132313",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["Smithing"],
    "uses": [["The New Sheriff", "1", "Quests"]],
    "description": [
      "Proof that you collected all",
      "the coolest and rarest items that",
      "Yumyum Desert has to offer!"
    ],
    "questAss": ["The New Sheriff"],
    "recipeData": {
      "recipe": [
        ["Hgg", "13"],
        ["DesertC2b", "25"],
        ["EquipmentHats52", "1"],
        ["EquipmentPendant14", "1"]
      ],
      "levelReqToCraft": "30",
      "expGiven": "4000",
      "no": 75,
      "tab": "Anvil Tab 2",
      "recipeFrom": []
    },
    "detrecipe": [
      [0, "Hgg", "13"],
      [0, "DesertC2b", "25"],
      [0, "EquipmentHats52", "1"],
      [1, "EfauntDrop1", "20"],
      [1, "EquipmentPants19", "1"],
      [1, "StoneA3b", "2"],
      [1, "Quest36", "3"],
      [2, "Quest37", "3"],
      [2, "GoldBar", "240"],
      [2, "DesertC2b", "3"],
      [0, "EquipmentPendant14", "1"]
    ],
    "detRecipeTotals": [
      ["Hgg", 13],
      ["DesertC2b", 28],
      ["EquipmentPendant14", 1],
      ["EfauntDrop1", 20],
      ["EquipmentPants19", 1],
      ["StoneA3b", 2],
      ["Quest37", 3],
      ["GoldBar", 240]
    ]
  },
  "NPCtoken1": {
    "displayName": "Easy Blunderhills NPC Token",
    "sellPrice": "3600",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": [
      "Smithing",
      "[[Scripticus#Champion of the Grasslands|Recipe from Champion of the Grasslands]]"
    ],
    "uses": [["BadgeG1", "1", "Crafting"]],
    "description": [
      "Made up of the tokens from",
      "all of the Blunder NPCs whose",
      "quests are easiest to complete."
    ],
    "questAss": [],
    "recipeData": {
      "recipe": [
        ["NPCtoken5", "1"],
        ["NPCtoken6", "1"],
        ["NPCtoken4", "1"],
        ["NPCtoken9", "1"]
      ],
      "levelReqToCraft": "1",
      "expGiven": "2",
      "no": 61,
      "tab": "Anvil Tab 1",
      "recipeFrom": [
        "[[Scripticus#Champion of the Grasslands|Champion of the Grasslands]]"
      ]
    },
    "detrecipe": [
      [0, "NPCtoken5", "1"],
      [0, "NPCtoken6", "1"],
      [0, "NPCtoken4", "1"],
      [0, "NPCtoken9", "1"]
    ],
    "detRecipeTotals": [
      ["NPCtoken5", 1],
      ["NPCtoken6", 1],
      ["NPCtoken4", 1],
      ["NPCtoken9", 1]
    ],
    "notes": " "
  },
  "NPCtoken2": {
    "displayName": "Med Blunderhills NPC Token",
    "sellPrice": "7700",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": [
      "Smithing",
      "[[Scripticus#Champion of the Grasslands|Recipe from Champion of the Grasslands]]"
    ],
    "uses": [["BadgeG1", "1", "Crafting"]],
    "description": [
      "Made up of the tokens from",
      "all of the Blunder NPCs whose",
      "quests are tough to complete."
    ],
    "questAss": [],
    "recipeData": {
      "recipe": [
        ["NPCtoken10", "1"],
        ["NPCtoken11", "1"],
        ["NPCtoken13", "1"],
        ["NPCtoken7", "1"]
      ],
      "levelReqToCraft": "1",
      "expGiven": "5",
      "no": 62,
      "tab": "Anvil Tab 1",
      "recipeFrom": [
        "[[Scripticus#Champion of the Grasslands|Champion of the Grasslands]]"
      ]
    },
    "detrecipe": [
      [0, "NPCtoken10", "1"],
      [0, "NPCtoken11", "1"],
      [0, "NPCtoken13", "1"],
      [0, "NPCtoken7", "1"]
    ],
    "detRecipeTotals": [
      ["NPCtoken10", 1],
      ["NPCtoken11", 1],
      ["NPCtoken13", 1],
      ["NPCtoken7", 1]
    ],
    "notes": " "
  },
  "NPCtoken3": {
    "displayName": "Hard Blunderhills NPC Token",
    "sellPrice": "12001",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": [
      "Smithing",
      "[[Scripticus#Champion of the Grasslands|Recipe from Champion of the Grasslands]]"
    ],
    "uses": [["BadgeG1", "1", "Crafting"]],
    "description": [
      "Made up of the tokens from",
      "all of the Blunder NPCs whose",
      "quests are hardest to complete."
    ],
    "questAss": [],
    "recipeData": {
      "recipe": [
        ["Quest9", "1"],
        ["NPCtoken15", "1"],
        ["NPCtoken12", "1"],
        ["NPCtoken14", "1"]
      ],
      "levelReqToCraft": "1",
      "expGiven": "2",
      "no": 63,
      "tab": "Anvil Tab 1",
      "recipeFrom": [
        "[[Scripticus#Champion of the Grasslands|Champion of the Grasslands]]"
      ]
    },
    "detrecipe": [
      [0, "Quest9", "1"],
      [0, "NPCtoken15", "1"],
      [0, "NPCtoken12", "1"],
      [0, "NPCtoken14", "1"]
    ],
    "detRecipeTotals": [
      ["Quest9", 1],
      ["NPCtoken15", 1],
      ["NPCtoken12", 1],
      ["NPCtoken14", 1]
    ],
    "notes": " "
  },
  "NPCtoken5": {
    "displayName": "Woodsman Token",
    "sellPrice": "700",
    "typeGen": "dCurrency",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["Exotic Pranks... I mean Logs!"],
    "uses": [["NPCtoken1", "1", "Crafting"]],
    "description": [
      "Proof that you completed all",
      "of the Woodsman's quests!",
      "Hold down to add to your token bag",
      "found in Storage Info.",
      "Open items, look at the top left."
    ],
    "notes": " "
  },
  "NPCtoken6": {
    "displayName": "Glumlee Token",
    "sellPrice": "700",
    "typeGen": "dCurrency",
    "ID": "1",
    "Type": "Quest Item",
    "sources": ["He's Havin' a Bad Day"],
    "uses": [["NPCtoken1", "1", "Crafting"]],
    "description": [
      "Proof that you completed all",
      "of Glumlee's quests!",
      "Hold down to add to your token bag",
      "found in Storage Info.",
      "Open items, look at the top left."
    ],
    "notes": " "
  },
  "NPCtoken4": {
    "displayName": "Stiltzcho Token",
    "sellPrice": "700",
    "typeGen": "dCurrency",
    "ID": "2",
    "Type": "Quest Item",
    "sources": ["Time Crime Season Finale"],
    "uses": [["NPCtoken1", "1", "Crafting"]],
    "description": [
      "Proof that you completed all",
      "of Stiltzcho's main quests!",
      "Hold down to add to your token bag",
      "found in Storage Info.",
      "Open items, look at the top left."
    ],
    "notes": " "
  },
  "NPCtoken9": {
    "displayName": "Funguy Token",
    "sellPrice": "1500",
    "typeGen": "dCurrency",
    "ID": "3",
    "Type": "Quest Item",
    "sources": ["Wicked Party Cleanup"],
    "uses": [["NPCtoken1", "1", "Crafting"]],
    "description": [
      "Proof that you completed all",
      "of Funguy's quests!",
      "Hold down to add to your token bag",
      "found in Storage Info.",
      "Open items, look at the top left."
    ],
    "notes": " "
  },
  "NPCtoken10": {
    "displayName": "Krunk Token",
    "sellPrice": "1500",
    "typeGen": "dCurrency",
    "ID": "4",
    "Type": "Quest Item",
    "sources": ["[[Krunk]]"],
    "uses": [["NPCtoken2", "1", "Crafting"]],
    "description": [
      "Proof that you completed all",
      "of Krunk's quests!",
      "Hold down to add to your token bag",
      "found in Storage Info."
    ],
    "notes": "You must complete all of [[Krunk]]'s quests and talk to him after reaching Mining level 20 in order to receive the token, which falls on the ground. He says 33 at first but it's actually 20."
  },
  "NPCtoken11": {
    "displayName": "Tiki Chief Token",
    "sellPrice": "1500",
    "typeGen": "dCurrency",
    "ID": "5",
    "Type": "Quest Item",
    "sources": ["Hotel? Tikivago. Sorry, couldn't Help It!"],
    "uses": [["NPCtoken2", "1", "Crafting"]],
    "description": [
      "Proof that you completed all",
      "of Tiki Chief's quests!",
      "Hold down to add to your token bag",
      "found in Storage Info."
    ],
    "notes": " "
  },
  "NPCtoken13": {
    "displayName": "Dog Bone Token",
    "sellPrice": "4000",
    "typeGen": "dCurrency",
    "ID": "6",
    "Type": "Quest Item",
    "sources": ["Bow Wow going Dow..n!"],
    "uses": [["NPCtoken2", "1", "Crafting"]],
    "description": [
      "Proof that you completed all",
      "of Dog Bone's quests!",
      "Hold down to add to your token bag",
      "found in Storage Info."
    ],
    "notes": " "
  },
  "NPCtoken7": {
    "displayName": "Papua Piggea Token",
    "sellPrice": "700",
    "typeGen": "dCurrency",
    "ID": "7",
    "Type": "Quest Item",
    "sources": ["This Little Piggy Felt Remorse"],
    "uses": [["NPCtoken2", "1", "Crafting"]],
    "description": [
      "Proof that you completed all",
      "of Papua Piggea's quests!",
      "Hold down to add to your token bag",
      "found in Storage Info."
    ],
    "notes": " "
  },
  "Quest9": {
    "displayName": "Picnic Token",
    "sellPrice": "1",
    "typeGen": "dCurrency",
    "ID": "8",
    "Type": "Quest Item",
    "sources": ["A Midnight Snack"],
    "uses": [
      ["NPCtoken3", "1", "Crafting"],
      ["King of Food", "30", "Quests"]
    ],
    "description": [
      "Proof that you were able to",
      "feed a blobulyte all day. If you",
      "bring 30 of these to the Picnic",
      "Stowaway, you'll get a Trophy!",
      "Hold down to add to your token bag"
    ],
    "notes": " "
  },
  "NPCtoken15": {
    "displayName": "TP Pete Token",
    "sellPrice": "4000",
    "typeGen": "dCurrency",
    "ID": "9",
    "Type": "Quest Item",
    "sources": ["[[TP Pete]]"],
    "uses": [["NPCtoken3", "1", "Crafting"]],
    "description": [
      "Proof that you completed all",
      "of TP Pete's quests!",
      "Hold down to add to your token bag",
      "found in Storage Info."
    ],
    "notes": "You must complete all of [[TP Pete]]'s quests and talk to him after reaching Class Level 70 in order to receive the token, which falls on the ground."
  },
  "NPCtoken12": {
    "displayName": "Sproutinald Token",
    "sellPrice": "4000",
    "typeGen": "dCurrency",
    "ID": "10",
    "Type": "Quest Item",
    "sources": ["Frisbee Fanatic"],
    "uses": [["NPCtoken3", "1", "Crafting"]],
    "description": [
      "Proof that you completed all",
      "of Sproutinald's quests!",
      "Hold down to add to your token bag",
      "found in Storage Info."
    ],
    "notes": " "
  },
  "NPCtoken14": {
    "displayName": "Dazey Token",
    "sellPrice": "4000",
    "typeGen": "dCurrency",
    "ID": "11",
    "Type": "Quest Item",
    "sources": ["Literally Physics"],
    "uses": [["NPCtoken3", "1", "Crafting"]],
    "description": [
      "Proof that you completed all",
      "of Dazey's quests!",
      "Hold down to add to your token bag",
      "found in Storage Info."
    ],
    "notes": " "
  },
  "NPCtoken16": {
    "displayName": "Bandit Bob Token",
    "sellPrice": "4000",
    "typeGen": "dCurrency",
    "ID": "12",
    "Type": "Quest Item",
    "sources": ["The Desert Dungeon Prequest"],
    "uses": [["NPCtoken28", "1", "Crafting"]],
    "description": [
      "Proof that you completed all",
      "of Bandit Bob's quests!",
      "Hold down to add to your token bag",
      "found in Storage Info."
    ]
  },
  "NPCtoken17": {
    "displayName": "Snake Jar Token",
    "sellPrice": "4000",
    "typeGen": "dCurrency",
    "ID": "13",
    "Type": "Quest Item",
    "sources": ["A Noob, served Medium Rare!"],
    "uses": [["NPCtoken28", "1", "Crafting"]],
    "description": [
      "Proof that you completed all",
      "of Snake Jar's quests!",
      "Hold down to add to your token bag",
      "found in Storage Info."
    ]
  },
  "NPCtoken18": {
    "displayName": "Whattso Token",
    "sellPrice": "4000",
    "typeGen": "dCurrency",
    "ID": "14",
    "Type": "Quest Item",
    "sources": ["Bobbin' Bobbers"],
    "uses": [["NPCtoken28", "1", "Crafting"]],
    "description": [
      "Proof that you completed all",
      "of Whattso's quests!",
      "Hold down to add to your token bag",
      "found in Storage Info."
    ]
  },
  "NPCtoken19": {
    "displayName": "Cowbo Jones Token",
    "sellPrice": "4000",
    "typeGen": "dCurrency",
    "ID": "15",
    "Type": "Quest Item",
    "sources": ["Tomb Raid"],
    "uses": [["NPCtoken28", "1", "Crafting"]],
    "description": [
      "Proof that you completed all",
      "of Cowbo Jones's quests!",
      "Hold down to add to your token bag",
      "found in Storage Info."
    ]
  },
  "NPCtoken20": {
    "displayName": "Carpetiem Token",
    "sellPrice": "4000",
    "typeGen": "dCurrency",
    "ID": "16",
    "Type": "Quest Item",
    "sources": ["Helping 100 times over"],
    "uses": [["NPCtoken29", "1", "Crafting"]],
    "description": [
      "Proof that you completed all",
      "of Carpetiem's quests!",
      "Hold down to add to your token bag",
      "found in Storage Info."
    ]
  },
  "NPCtoken21": {
    "displayName": "Goldric Token",
    "sellPrice": "4000",
    "typeGen": "dCurrency",
    "ID": "17",
    "Type": "Quest Item",
    "sources": ["Dont lay a finger on my Sheepies!!!"],
    "uses": [["NPCtoken29", "1", "Crafting"]],
    "description": [
      "Proof that you completed all",
      "of Goldric's quests!",
      "Hold down to add to your token bag",
      "found in Storage Info."
    ]
  },
  "NPCtoken27": {
    "displayName": "Cattleprod Token",
    "sellPrice": "155000",
    "typeGen": "dCurrency",
    "ID": "18",
    "Type": "Quest Item",
    "sources": ["Faraway Piers Vendor"],
    "uses": [["NPCtoken29", "1", "Crafting"]],
    "description": [
      "Proof that Cattleprod is a little brat of a pig... like, he seriously went and SOLD his own token to the store???"
    ],
    "shopData": [
      {
        "vendor": "Faraway Piers",
        "quantity": "1",
        "no": 11
      }
    ]
  },
  "NPCtoken22": {
    "displayName": "Fishpaste Token",
    "sellPrice": "4000",
    "typeGen": "dCurrency",
    "ID": "19",
    "Type": "Quest Item",
    "sources": ["Can you do the Can Can?"],
    "uses": [["NPCtoken29", "1", "Crafting"]],
    "description": [
      "Proof that you completed all",
      "of Fishpaste's quests!",
      "Hold down to add to your token bag",
      "found in Storage Info."
    ]
  },
  "NPCtoken24": {
    "displayName": "Loominadi Token",
    "sellPrice": "4000",
    "typeGen": "dCurrency",
    "ID": "20",
    "Type": "Quest Item",
    "sources": ["The Mummy of Mystery"],
    "uses": [["NPCtoken30", "1", "Crafting"]],
    "description": [
      "Proof that you completed all",
      "of Loominadi's quests!",
      "Hold down to add to your token bag",
      "found in Storage Info."
    ]
  },
  "NPCtoken25": {
    "displayName": "Djonnut Token",
    "sellPrice": "4000",
    "typeGen": "dCurrency",
    "ID": "21",
    "Type": "Quest Item",
    "sources": ["The Blue New World"],
    "uses": [["NPCtoken30", "1", "Crafting"]],
    "description": [
      "Proof that you completed all",
      "of Djonnut's quests!",
      "Hold down to add to your token bag",
      "found in Storage Info."
    ]
  },
  "NPCtoken26": {
    "displayName": "Scubidew Token",
    "sellPrice": "4000",
    "typeGen": "dCurrency",
    "ID": "22",
    "Type": "Quest Item",
    "sources": ["A Normal Quest."],
    "uses": [["NPCtoken30", "1", "Crafting"]],
    "description": [
      "Proof that you completed all of",
      " Scubidew's quests! Well, most of ",
      "them, at least. ",
      "Hold down to add to your token pouch",
      "found in Storage Info."
    ]
  },
  "NPCtoken23": {
    "displayName": "Wellington Token",
    "sellPrice": "4000",
    "typeGen": "dCurrency",
    "ID": "23",
    "Type": "Quest Item",
    "sources": ["Puzzles and Math, a Winning Combination!"],
    "uses": [["NPCtoken30", "1", "Crafting"]],
    "description": [
      "Proof that you completed all",
      "of Wellington's quests!",
      "Hold down to add to your token bag",
      "found in Storage Info."
    ]
  },
  "NPCtoken28": {
    "displayName": "Easy Yumyum Dez NPC Token",
    "sellPrice": "16000",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["Smithing"],
    "uses": [["BadgeD1", "1", "Crafting"]],
    "description": [
      "Made up of the tokens from",
      "all of the Yumyum NPCs whose",
      "quests are easiest to complete."
    ],
    "questAss": [],
    "recipeData": {
      "recipe": [
        ["NPCtoken16", "1"],
        ["NPCtoken17", "1"],
        ["NPCtoken18", "1"],
        ["NPCtoken19", "1"]
      ],
      "levelReqToCraft": "30",
      "expGiven": "4000",
      "no": 77,
      "tab": "Anvil Tab 2",
      "recipeFrom": []
    },
    "detrecipe": [
      [0, "NPCtoken16", "1"],
      [0, "NPCtoken17", "1"],
      [0, "NPCtoken18", "1"],
      [0, "NPCtoken19", "1"]
    ],
    "detRecipeTotals": [
      ["NPCtoken16", 1],
      ["NPCtoken17", 1],
      ["NPCtoken18", 1],
      ["NPCtoken19", 1]
    ]
  },
  "NPCtoken29": {
    "displayName": "Med Yumyum Dez NPC Token",
    "sellPrice": "167000",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["Smithing"],
    "uses": [["BadgeD1", "1", "Crafting"]],
    "description": [
      "Made up of the tokens from",
      "all of the Yumyum NPCs whose",
      "quests are tough to complete."
    ],
    "questAss": [],
    "recipeData": {
      "recipe": [
        ["NPCtoken20", "1"],
        ["NPCtoken21", "1"],
        ["NPCtoken22", "1"],
        ["NPCtoken27", "1"]
      ],
      "levelReqToCraft": "30",
      "expGiven": "4000",
      "no": 78,
      "tab": "Anvil Tab 2",
      "recipeFrom": []
    },
    "detrecipe": [
      [0, "NPCtoken20", "1"],
      [0, "NPCtoken21", "1"],
      [0, "NPCtoken22", "1"],
      [0, "NPCtoken27", "1"]
    ],
    "detRecipeTotals": [
      ["NPCtoken20", 1],
      ["NPCtoken21", 1],
      ["NPCtoken22", 1],
      ["NPCtoken27", 1]
    ]
  },
  "NPCtoken30": {
    "displayName": "Hard Yumyum Dez NPC Token",
    "sellPrice": "16000",
    "typeGen": "dQuest",
    "ID": "0",
    "Type": "Quest Item",
    "sources": ["Smithing"],
    "uses": [["BadgeD1", "1", "Crafting"]],
    "description": [
      "Made up of the tokens from",
      "all of the Yumyum NPCs whose",
      "quests are hardest to complete."
    ],
    "questAss": [],
    "recipeData": {
      "recipe": [
        ["NPCtoken24", "1"],
        ["NPCtoken25", "1"],
        ["NPCtoken26", "1"],
        ["NPCtoken23", "1"]
      ],
      "levelReqToCraft": "30",
      "expGiven": "4000",
      "no": 79,
      "tab": "Anvil Tab 2",
      "recipeFrom": []
    },
    "detrecipe": [
      [0, "NPCtoken24", "1"],
      [0, "NPCtoken25", "1"],
      [0, "NPCtoken26", "1"],
      [0, "NPCtoken23", "1"]
    ],
    "detRecipeTotals": [
      ["NPCtoken24", 1],
      ["NPCtoken25", 1],
      ["NPCtoken26", 1],
      ["NPCtoken23", 1]
    ]
  },
  "EquipmentSmithingTabs2": {
    "displayName": "Anvil Tab 2",
    "sellPrice": "27500",
    "typeGen": "dQuest",
    "ID": "2",
    "Type": "Anvil Expansion",
    "sources": ["Smithing", "Recipe from Start"],
    "description": [
      "Unlocks the 2nd tab of craftable",
      "items for all anvils!"
    ],
    "questAss": [],
    "recipeData": {
      "recipe": [
        ["IronBar", "250"],
        ["CraftMat7", "200"],
        ["ForestTree", "400"],
        ["Forest3", "250"]
      ],
      "levelReqToCraft": "15",
      "expGiven": "1500",
      "no": 36,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "IronBar", "250"],
      [0, "CraftMat7", "200"],
      [0, "ForestTree", "400"],
      [0, "Forest3", "250"]
    ],
    "detRecipeTotals": [
      ["IronBar", 250],
      ["CraftMat7", 200],
      ["ForestTree", 400],
      ["Forest3", 250]
    ],
    "notes": " "
  },
  "EquipmentSmithingTabs3": {
    "displayName": "Anvil Tab 3",
    "sellPrice": "1213500",
    "typeGen": "dQuest",
    "ID": "3",
    "Type": "Anvil Expansion",
    "sources": ["Smithing", "Recipe from Start"],
    "description": [
      "Unlocks the 3rd tab of craftable",
      "items for all anvils!"
    ],
    "questAss": [],
    "recipeData": {
      "recipe": [
        ["PlatBar", "2000"],
        ["Fish4", "2000"],
        ["Bug4", "2000"],
        ["DesertC1", "1500"]
      ],
      "levelReqToCraft": "35",
      "expGiven": "135000",
      "no": 40,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "PlatBar", "2000"],
      [0, "Fish4", "2000"],
      [0, "Bug4", "2000"],
      [0, "DesertC1", "1500"]
    ],
    "detRecipeTotals": [
      ["PlatBar", 2000],
      ["Fish4", 2000],
      ["Bug4", 2000],
      ["DesertC1", 1500]
    ],
    "notes": " "
  },
  "EquipmentSmithingTabs4": {
    "displayName": "Anvil Tab 4",
    "sellPrice": "897",
    "typeGen": "dQuest",
    "ID": "4",
    "Type": "Anvil Expansion",
    "sources": ["Smithing"],
    "description": [
      "Unlocks the 4th tab of craftable",
      "items for all anvils!"
    ],
    "questAss": [],
    "recipeData": {
      "recipe": [
        ["FillerMaterial", "6"],
        ["Soul4", "22"],
        ["Critter6A", "1"],
        ["Refinery3", "1"]
      ],
      "levelReqToCraft": "50",
      "expGiven": "1500000",
      "no": 48,
      "tab": "Anvil Tab 3",
      "recipeFrom": []
    },
    "detrecipe": [
      [0, "FillerMaterial", "6"],
      [0, "Soul4", "22"],
      [0, "Critter6A", "1"],
      [0, "Refinery3", "1"]
    ],
    "detRecipeTotals": [
      ["FillerMaterial", 6],
      ["Soul4", 22],
      ["Critter6A", 1],
      ["Refinery3", 1]
    ],
    "notes": " "
  },
  "EquipmentSmithingTabs5": {
    "displayName": "Anvil Tab 5",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "5",
    "Type": "Anvil Expansion",
    "description": [
      "Unlocks the 5th tab of craftable",
      "items for all anvils!"
    ],
    "questAss": [],
    "notes": " "
  },
  "EquipmentSmithingTabs6": {
    "displayName": "Anvil Tab 6",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "6",
    "Type": "Anvil Expansion",
    "description": [
      "Unlocks the 6th tab of craftable",
      "items for all anvils!"
    ],
    "questAss": [],
    "notes": " "
  },
  "EquipmentSmithingTabs7": {
    "displayName": "Anvil Tab 7",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "7",
    "Type": "Anvil Expansion",
    "description": [
      "Unlocks the 7th tab of craftable",
      "items for all anvils!"
    ],
    "questAss": [],
    "notes": " "
  },
  "EquipmentSmithingTabs8": {
    "displayName": "Anvil Tab 8",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "8",
    "Type": "Anvil Expansion",
    "description": [
      "Unlocks the 8th tab of craftable",
      "items for all anvils!"
    ],
    "questAss": [],
    "notes": " "
  },
  "EquipmentStatues1": {
    "displayName": "Power Statue",
    "sellPrice": "10",
    "typeGen": "dStatueStone",
    "ID": "0",
    "Type": "Statue",
    "sources": [
      "Blunder Hills Vendor",
      "Simple Shippin",
      "Visualizing the Sculpture Within...",
      "Bob's Brand New Bandana",
      "DropTable2",
      "[[Alchemy#Level up Gift|Level up Gift]]"
    ],
    "detdrops": [
      ["Crystal Carrot", "0.06", "1.0"],
      ["Slime", "0.00048", "1.0"],
      ["Baby Boa", "0.0006", "1.0"],
      ["Carrotman", "0.0007199999999999999", "1.0"],
      ["Amarok", "0.12", "2.0"],
      ["Chaotic Amarok", "0.12", "4.0"],
      ["Nightmare Amarok", "0.12", "2.0"],
      ["Baba Yaga", "0.12", "1.0"],
      ["Dewdrop Silver Chest", "0.12", "1.0"]
    ],
    "uses": [["The Scientific Method, According to a Rock", "20", "Quests"]],
    "description": [
      "A stone statue sculpted in the",
      "likeness of an absolute unit.",
      "Give this to the Statue Man in",
      "return for some bonus stats."
    ],
    "shopData": [
      {
        "vendor": "Blunder Hills",
        "quantity": "3",
        "no": 13
      }
    ],
    "statueData": ["Power", "+ @ Base Damage", "30", "3"],
    "notes": " "
  },
  "EquipmentStatues2": {
    "displayName": "Speed Statue",
    "sellPrice": "10",
    "typeGen": "dStatueStone",
    "ID": "1",
    "Type": "Statue",
    "sources": [
      "King of the Cavern",
      "Outta the Way Slimes",
      "No Stone Unturned",
      "This Little Piggy Felt Remorse",
      "DropTable5b",
      "DropTable14",
      "[[Alchemy#Level up Gift|Level up Gift]]"
    ],
    "detdrops": [
      ["Crystal Carrot", "0.07", "2.0"],
      ["Crystal Crabal", "0.07", "3.0"],
      ["Crystal Cattle", "0.07", "3.0"],
      ["Wood Mushroom", "0.00014000000000000001", "1.0"],
      ["Sheepie", "0.000075", "1.0"],
      ["Frost Flake", "0.000084", "1.0"],
      ["Sir Stache", "0.000093", "1.0"],
      ["Xylobone", "0.0003", "1.0"],
      ["Chillsnap Bronze Chest", "0.03", "1.0"]
    ],
    "description": [
      "A stone statue that isnt actually",
      "fast because its made of stone",
      "and stone can't move.",
      "Give this to the Statue Man in",
      "return for some bonus stats"
    ],
    "statueData": ["Speed", "+ %@ Move Speed", "65", "0.1"],
    "notes": " "
  },
  "EquipmentStatues3": {
    "displayName": "Mining Statue",
    "sellPrice": "10",
    "typeGen": "dStatueStone",
    "ID": "2",
    "Type": "Statue",
    "sources": ["DropTable5", "[[Alchemy#Level up Gift|Level up Gift]]"],
    "detdrops": [
      ["Crystal Carrot", "0.16", "1.0"],
      ["Choppin Oak Tree", "0.00256", "1.0"],
      ["Choppin Birch Tree", "0.00272", "1.0"],
      ["Choppin Jungle Tree", "0.0028799999999999997", "1.0"],
      ["Choppin Forest Tree", "0.00304", "1.0"],
      ["Choppin Toilet Tree", "0.003392", "1.0"],
      ["Choppin Stump Tree", "0.0032640000000000004", "1.0"]
    ],
    "description": [
      "A stone statue that resembles",
      "some sort of double edged scythe.",
      "Give this to the Statue Man in",
      "return for some bonus stats"
    ],
    "statueData": ["Mining", "+ @ Mining Power", "280", "0.3"],
    "notes": " "
  },
  "EquipmentStatues4": {
    "displayName": "Feasty Statue",
    "sellPrice": "10",
    "typeGen": "dStatueStone",
    "ID": "3",
    "Type": "Statue",
    "sources": [
      "Simple Shippin",
      "Plan-it Express",
      "DropTable3b",
      "DropTable5b",
      "DropTable16",
      "[[Alchemy#Level up Gift|Level up Gift]]"
    ],
    "detdrops": [
      ["Poop", "0.00030000000000000003", "1.0"],
      ["Rat", "0.00030000000000000003", "1.0"],
      ["Crystal Carrot", "0.05", "2.0"],
      ["Crystal Crabal", "0.05", "3.0"],
      ["Crystal Cattle", "0.05", "3.0"],
      ["Wood Mushroom", "0.0001", "1.0"],
      ["Dedotated Ram", "0.00010199999999999999", "1.0"],
      ["Quenchie", "0.000075", "1.0"],
      ["Cryosnake", "0.000084", "1.0"],
      ["Bop Box", "0.00008999999999999999", "1.0"],
      ["Neyeptune", "0.000096", "1.0"],
      ["Bloodbone", "0.00015", "1.0"],
      ["Chillsnap Golden Chest", "0.03", "1.0"]
    ],
    "description": [
      "A stone statue that looks good",
      "enough to eat to anyone who",
      "doesn't notice that it's inedible.",
      "Give this to the Statue Man in",
      "return for some bonus stats"
    ],
    "statueData": ["Feasty", "+ %@ Food Effect", "320", "1"],
    "notes": " "
  },
  "EquipmentStatues5": {
    "displayName": "Health Statue",
    "sellPrice": "10",
    "typeGen": "dStatueStone",
    "ID": "4",
    "Type": "Statue",
    "sources": [
      "DropTable3",
      "DropTable3b",
      "DropTable3c",
      "[[Alchemy#Level up Gift|Level up Gift]]"
    ],
    "detdrops": [
      ["Crystal Carrot", "0.048", "1.0"],
      ["Glublin", "0.00048", "1.0"],
      ["Wode Board", "0.0005399999999999999", "1.0"],
      ["Gigafrog", "0.0006", "1.0"],
      ["Amarok", "0.12", "2.0"],
      ["Chaotic Amarok", "0.12", "4.0"],
      ["Nightmare Amarok", "0.12", "2.0"],
      ["Dr Defecaus", "0.12", "2.0"],
      ["Baba Yaga", "0.12", "0.5"],
      ["Dewdrop Golden Chest", "0.12", "1.0"],
      ["Poop", "0.00054", "1.0"],
      ["Rat", "0.00054", "1.0"],
      ["Walking Stick", "0.000513", "1.0"],
      ["Nutto", "0.0005849999999999999", "1.0"],
      ["Wood Mushroom", "0.00063", "1.0"]
    ],
    "description": [
      "A stone statue made by someone",
      "for a romantic propsal. I don't",
      "think it ended well.",
      "Give this to the Statue Man in",
      "return for some bonus stats"
    ],
    "statueData": ["Health", "+ @ Base Health", "0", "3"],
    "notes": " "
  },
  "EquipmentStatues6": {
    "displayName": "Kachow Statue",
    "sellPrice": "10",
    "typeGen": "dStatueStone",
    "ID": "5",
    "Type": "Statue",
    "sources": [
      "Plan-it Express",
      "Luncheon with the Inlaws",
      "Brochure Building",
      "[[Alchemy#Level up Gift|Level up Gift]]"
    ],
    "description": [
      "A stone statue named after the",
      "catch phrase of a very fast and",
      "very not real red car.",
      "Give this to the Statue Man in",
      "return for some bonus stats"
    ],
    "statueData": ["Kachow", "+ %@ Crit Damage", "-15", "0.4"],
    "notes": " "
  },
  "EquipmentStatues7": {
    "displayName": "Lumberbob Statue",
    "sellPrice": "10",
    "typeGen": "dStatueStone",
    "ID": "6",
    "Type": "Statue",
    "sources": ["DropTable4", "[[Alchemy#Level up Gift|Level up Gift]]"],
    "detdrops": [
      ["Crystal Carrot", "0.162", "1.0"],
      ["Mining Copper", "0.001755", "1.0"],
      ["Mining Iron", "0.0018900000000000002", "1.0"],
      ["Mining Gold", "0.002025", "1.0"],
      ["Mining Plat", "0.002079", "1.0"],
      ["Mining Dementia", "0.0022140000000000003", "1.0"],
      ["Mining Void", "0.00243", "2.0"],
      ["Mining Lustre", "0.002565", "2.0"]
    ],
    "description": [
      "A stone statue named in a world",
      "where the name Jack doesn't",
      "exist.",
      "Give this to the Statue Man in",
      "return for some bonus stats"
    ],
    "statueData": ["Lumberbob", "+ @ Choppin Power", "90", "0.3"],
    "notes": " "
  },
  "EquipmentStatues8": {
    "displayName": "Thicc Skin Statue",
    "sellPrice": "10",
    "typeGen": "dStatueStone",
    "ID": "7",
    "Type": "Statue",
    "sources": [
      "Sticks and Stone Something Something Bones...",
      "DropTable11",
      "[[Alchemy#Level up Gift|Level up Gift]]"
    ],
    "detdrops": [["Choppin Palm Tree", "0.00075", "2.0"]],
    "description": [
      "I don't think the sculptor who named this statue back in 3000 BC would be happy with how his typo would be interpreted."
    ],
    "statueData": ["Thicc Skin", "+ @ Base Defence", "210", "1"],
    "notes": " "
  },
  "EquipmentStatues9": {
    "displayName": "Oceanman Statue",
    "sellPrice": "10",
    "typeGen": "dStatueStone",
    "ID": "8",
    "Type": "Statue",
    "sources": ["DropTable12"],
    "detdrops": [
      ["Crystal Crabal", "0.0425", "1.0"],
      ["Catching Flies", "0.001275", "1.0"],
      ["Catching Butterflies", "0.001275", "1.0"],
      ["Catching Sentient Cereal", "0.001275", "1.0"],
      ["Catching Fruitflies", "0.001275", "1.0"]
    ],
    "description": [
      "What's that, statue? You want to... take me by the hand and lead me to the land? With that land pecifically being the one that you understand?"
    ],
    "statueData": ["Oceanman", "+ @ Fishing Power", "115", "0.3"],
    "notes": " "
  },
  "EquipmentStatues10": {
    "displayName": "Ol Reliable Statue",
    "sellPrice": "10",
    "typeGen": "dStatueStone",
    "ID": "9",
    "Type": "Statue",
    "sources": ["DropTable9"],
    "detdrops": [
      ["Crystal Crabal", "0.06119999999999999", "1.0"],
      ["Fishing Small Fish", "0.001224", "1.0"],
      ["Fishing Goldfish", "0.001224", "1.0"],
      ["Fishing Hermit Can", "0.001224", "1.0"],
      ["Fishing Jellyfish", "0.001224", "1.0"],
      ["Fishing Bloach", "0.001224", "1.0"]
    ],
    "description": [
      "It takes a true artist to make a realistic statue like this one. He captured the flying aspect of those stone flies perfectly!"
    ],
    "statueData": ["Ol Reliable", "+ @ Catchin Power", "45", "0.3"],
    "notes": " "
  },
  "EquipmentStatues11": {
    "displayName": "Exp Book Statue",
    "sellPrice": "10",
    "typeGen": "dStatueStone",
    "ID": "10",
    "Type": "Statue",
    "sources": ["DropTable7"],
    "detdrops": [
      ["Crystal Crabal", "0.02", "1.0"],
      ["Mafioso", "0.00012800000000000002", "1.0"],
      ["Sand Castle", "0.00014000000000000001", "1.0"],
      ["Pincermin", "0.00014800000000000002", "1.0"],
      ["Mashed Potato", "0.000156", "1.0"],
      ["Dig Doug", "0.00012800000000000002", "1.0"],
      ["Efaunt", "0.04", "2.0"],
      ["Chaotic Efaunt", "0.04", "2.0"],
      ["Nightmare Amarok", "0.04", "2.0"],
      ["Chizoar", "0.04", "2.0"],
      ["Chaotic Chizoar", "0.04", "2.0"],
      ["Nightmare Chizoar", "0.04", "2.0"],
      ["Sandstone Silver Chest", "0.04", "1.0"]
    ],
    "description": [
      "I haven't read a book since middle school, so I'm just assuming this is what they look like."
    ],
    "statueData": ["Exp", "+ %@ Class Exp", "0", "0.1"],
    "notes": " "
  },
  "EquipmentStatues12": {
    "displayName": "Anvil Statue",
    "sellPrice": "10",
    "typeGen": "dStatueStone",
    "ID": "11",
    "Type": "Statue",
    "sources": ["DropTable6"],
    "detdrops": [
      ["Crystal Crabal", "0.042", "1.0"],
      ["Sandy Pot", "0.00021000000000000004", "1.0"],
      ["Mimic", "0.00022400000000000002", "1.0"],
      ["Crabcake", "0.000252", "1.0"],
      ["Efaunt", "0.07", "2.0"],
      ["Nightmare Amarok", "0.07", "2.0"],
      ["Chizoar", "0.07", "2.0"],
      ["Nightmare Chizoar", "0.07", "2.0"],
      ["Biggie Hours", "0.035", "1.0"],
      ["Sandstone Bronze Chest", "0.07", "1.0"]
    ],
    "description": [
      "A little monument to the efforts of a most devious coyote, whose dreams were always just out of reach, and whose head often felt the crushing blow of defeat."
    ],
    "statueData": ["Anvil", "+ %@ Product Spd", "165", "0.5"],
    "notes": " "
  },
  "EquipmentStatues13": {
    "displayName": "Cauldron Statue",
    "sellPrice": "10",
    "typeGen": "dStatueStone",
    "ID": "12",
    "Type": "Statue",
    "sources": ["DropTable8"],
    "detdrops": [
      ["Crystal Crabal", "0.028000000000000004", "1.0"],
      ["Tyson", "0.00022400000000000002", "1.0"],
      ["Moonmoon", "0.00024500000000000005", "1.0"],
      ["Sand Giant", "0.00025900000000000006", "1.0"],
      ["Snelbie", "0.000273", "1.0"],
      ["Efaunt", "0.07", "2.0"],
      ["Chaotic Efaunt", "0.07", "2.0"],
      ["Nightmare Amarok", "0.07", "2.0"],
      ["Chizoar", "0.07", "2.0"],
      ["Chaotic Chizoar", "0.07", "2.0"],
      ["Nightmare Chizoar", "0.07", "2.0"],
      ["Sandstone Golden Chest", "0.07", "1.0"]
    ],
    "description": [
      "They used to tie women to these things and throw them into the ocean to see if they were a witch. If they were, they'd use all the water in the ocean to upgrade the cauldron and thus not drown! Not sure what happened if they werent."
    ],
    "statueData": ["Cauldron", "+ %@ Alchemy Exp", "280", "0.5"],
    "notes": " "
  },
  "EquipmentStatues14": {
    "displayName": "Beholder Statue",
    "sellPrice": "10",
    "typeGen": "dStatueStone",
    "ID": "13",
    "Type": "Statue",
    "sources": ["DropTable5b"],
    "detdrops": [
      ["Crystal Carrot", "0.05", "2.0"],
      ["Crystal Crabal", "0.05", "3.0"],
      ["Crystal Cattle", "0.05", "3.0"],
      ["Wood Mushroom", "0.0001", "1.0"]
    ],
    "description": ["This statue is beautiful! Well, at least to me."],
    "statueData": ["Beholder", "+ %@ Crit Chance", "300", "0.2"],
    "notes": " "
  },
  "EquipmentStatues15": {
    "displayName": "Bullseye Statue",
    "sellPrice": "10",
    "typeGen": "dStatueStone",
    "ID": "14",
    "Type": "Statue",
    "sources": ["DropTable3c"],
    "detdrops": [
      ["Walking Stick", "0.00028500000000000004", "1.0"],
      ["Nutto", "0.000325", "1.0"],
      ["Wood Mushroom", "0.00035000000000000005", "1.0"]
    ],
    "description": [
      "This statue was created by shooting a target statue into a stationary arrow statue."
    ],
    "statueData": ["Bullseye", "+ %@ Accuracy", "110", "0.8"],
    "notes": " "
  },
  "EquipmentStatues16": {
    "displayName": "Box Statue",
    "sellPrice": "10",
    "typeGen": "dStatueStone",
    "ID": "15",
    "Type": "Statue",
    "sources": ["Sheepie", "Penguin"],
    "detdrops": [
      ["Sheepie", "0.0002", "1"],
      ["Penguin", "0.0003", "1"]
    ],
    "description": ["It's more of an open container than a box, really."],
    "statueData": ["Box", "+ @ Trappin Power", "180", "0.3"],
    "notes": " "
  },
  "EquipmentStatues17": {
    "displayName": "Twosoul Statue",
    "sellPrice": "10",
    "typeGen": "dStatueStone",
    "ID": "16",
    "Type": "Statue",
    "sources": ["Sir Stache", "Quenchie"],
    "detdrops": [
      ["Sir Stache", "0.0002", "1"],
      ["Quenchie", "0.0003", "1"]
    ],
    "description": ["A statue of the soul."],
    "statueData": ["Twosoul", "+ @ Worship Power", "260", "0.3"],
    "notes": " "
  },
  "EquipmentStatues18": {
    "displayName": "EhExPee Statue",
    "sellPrice": "10",
    "typeGen": "dStatueStone",
    "ID": "17",
    "Type": "Statue",
    "sources": ["DropTable14", "DropTable15"],
    "detdrops": [
      ["Crystal Cattle", "0.03", "1.0"],
      ["Sheepie", "0.000125", "1.0"],
      ["Frost Flake", "0.00014000000000000001", "1.0"],
      ["Sir Stache", "0.000155", "1.0"],
      ["Xylobone", "0.0005", "1.0"],
      ["Chillsnap Bronze Chest", "0.05", "1.0"],
      ["Bloque", "0.0001", "1.0"],
      ["Mamooth", "0.00010800000000000001", "1.0"],
      ["Snowman", "0.000116", "1.0"],
      ["Penguin", "0.000124", "1.0"],
      ["Thermister", "0.000132", "1.0"],
      ["Chillsnap Silver Chest", "0.04", "1.0"]
    ],
    "description": [
      "The sculptor got so fed up with people misinterpreting his previous statues, he felt the need to spell this one out."
    ],
    "statueData": ["Ehexpee", "+ %@ Skill Exp", "69", "0.1"],
    "notes": " "
  },
  "EquipmentStatues19": {
    "displayName": "Seesaw Statue",
    "sellPrice": "10",
    "typeGen": "dStatueStone",
    "ID": "18",
    "Type": "Statue",
    "sources": ["Bloque", "Cryosnake"],
    "detdrops": [
      ["Bloque", "0.0002", "1"],
      ["Cryosnake", "0.0003", "1"]
    ],
    "description": [
      "The end result of someone trying to cut a slab in half with a ceramic saw, and then leaving early after they saw me watching them in the bushes, writing down what they were doing in this description."
    ],
    "statueData": ["Seesaw", "+ %@ Cons Exp", "13", "0.5"],
    "notes": " "
  },
  "MaxCapBagT2": {
    "displayName": "Miniature Mining Pouch",
    "sellPrice": "200",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Literally Burning your Money"],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 25: Ores, Bars, Barrels."
    ]
  },
  "MaxCapBag1": {
    "displayName": "Cramped Mining Pouch",
    "sellPrice": "360",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [["MaxCapBag3", "5", "Crafting"]],
    "recipeData": {
      "recipe": [["Copper", "120"]],
      "levelReqToCraft": "5",
      "expGiven": "13",
      "no": 10,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [[0, "Copper", "120"]],
    "detRecipeTotals": [["Copper", 120]],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 50: Ores, Bars, Barrels."
    ]
  },
  "MaxCapBag2": {
    "displayName": "Small Mining Pouch",
    "sellPrice": "4900",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [["MaxCapBag3", "3", "Crafting"]],
    "recipeData": {
      "recipe": [["Iron", "700"]],
      "levelReqToCraft": "14",
      "expGiven": "600",
      "no": 30,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [[0, "Iron", "700"]],
    "detRecipeTotals": [["Iron", 700]],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 100: Ores, Bars, Barrels."
    ]
  },
  "MaxCapBag3": {
    "displayName": "Average Mining Pouch",
    "sellPrice": "34700",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["MaxCapBag4", "3", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["MaxCapBag1", "5"],
        ["MaxCapBag2", "3"],
        ["Gold", "1400"]
      ],
      "levelReqToCraft": "15",
      "expGiven": "1200",
      "no": 10,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "MaxCapBag1", "5"],
      [1, "Copper", "600"],
      [0, "MaxCapBag2", "3"],
      [1, "Iron", "2100"],
      [0, "Gold", "1400"]
    ],
    "detRecipeTotals": [
      ["Gold", 1400],
      ["Copper", 600],
      ["Iron", 2100]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 250: Ores, Bars, Barrels."
    ]
  },
  "MaxCapBag4": {
    "displayName": "Sizable Mining Pouch",
    "sellPrice": "239100",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["MaxCapBag5", "2", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["Plat", "6750"],
        ["MaxCapBag3", "3"]
      ],
      "levelReqToCraft": "24",
      "expGiven": "9000",
      "no": 30,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Plat", "6750"],
      [0, "MaxCapBag3", "3"],
      [1, "MaxCapBag1", "15"],
      [2, "Copper", "1800"],
      [1, "MaxCapBag2", "9"],
      [2, "Iron", "6300"],
      [1, "Gold", "4200"]
    ],
    "detRecipeTotals": [
      ["Plat", 6750],
      ["Gold", 4200],
      ["Copper", 1800],
      ["Iron", 6300]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 500: Ores, Bars, Barrels."
    ]
  },
  "MaxCapBag5": {
    "displayName": "Big Mining Pouch",
    "sellPrice": "1090700",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["MaxCapBagMi6", "2", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["Dementia", "17500"],
        ["MaxCapBag4", "2"]
      ],
      "levelReqToCraft": "35",
      "expGiven": "65000",
      "no": 10,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Dementia", "17500"],
      [0, "MaxCapBag4", "2"],
      [1, "Plat", "13500"],
      [1, "MaxCapBag3", "6"],
      [2, "MaxCapBag1", "30"],
      [3, "Copper", "3600"],
      [2, "MaxCapBag2", "18"],
      [3, "Iron", "12600"],
      [2, "Gold", "8400"]
    ],
    "detRecipeTotals": [
      ["Dementia", 17500],
      ["Plat", 13500],
      ["Gold", 8400],
      ["Copper", 3600],
      ["Iron", 12600]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 1000: Ores, Bars, Barrels."
    ]
  },
  "MaxCapBagMi6": {
    "displayName": "Large Mining Pouch",
    "sellPrice": "3381400",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "recipeData": {
      "recipe": [
        ["Void", "25000"],
        ["MaxCapBag5", "2"]
      ],
      "levelReqToCraft": "43",
      "expGiven": "200000",
      "no": 34,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Void", "25000"],
      [0, "MaxCapBag5", "2"],
      [1, "Dementia", "35000"],
      [1, "MaxCapBag4", "4"],
      [2, "Plat", "27000"],
      [2, "MaxCapBag3", "12"],
      [3, "MaxCapBag1", "60"],
      [4, "Copper", "7200"],
      [3, "MaxCapBag2", "36"],
      [4, "Iron", "25200"],
      [3, "Gold", "16800"]
    ],
    "detRecipeTotals": [
      ["Void", 25000],
      ["Dementia", 35000],
      ["Plat", 27000],
      ["Gold", 16800],
      ["Copper", 7200],
      ["Iron", 25200]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 2000: Ores, Bars, Barrels."
    ]
  },
  "MaxCapBagT1": {
    "displayName": "Miniature Choppin Pouch",
    "sellPrice": "200",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["A noob's first swing"],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 25: Logs, Leaves."
    ]
  },
  "MaxCapBag7": {
    "displayName": "Cramped Choppin Pouch",
    "sellPrice": "660",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [["MaxCapBagT3", "5", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["OakTree", "150"],
        ["CraftMat5", "30"]
      ],
      "levelReqToCraft": "6",
      "expGiven": "13",
      "no": 12,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "OakTree", "150"],
      [0, "CraftMat5", "30"]
    ],
    "detRecipeTotals": [
      ["OakTree", 150],
      ["CraftMat5", 30]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 50: Logs, Leaves."
    ]
  },
  "MaxCapBag9": {
    "displayName": "Small Choppin Pouch",
    "sellPrice": "2400",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [["MaxCapBagT3", "3", "Crafting"]],
    "recipeData": {
      "recipe": [["BirchTree", "800"]],
      "levelReqToCraft": "15",
      "expGiven": "680",
      "no": 32,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [[0, "BirchTree", "800"]],
    "detRecipeTotals": [["BirchTree", 800]],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 100: Logs, Leaves."
    ]
  },
  "MaxCapBagT3": {
    "displayName": "Average Choppin Pouch",
    "sellPrice": "28500",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["MaxCapBagT4", "3", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["MaxCapBag7", "5"],
        ["MaxCapBag9", "3"],
        ["ForestTree", "1800"]
      ],
      "levelReqToCraft": "15",
      "expGiven": "1200",
      "no": 12,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "MaxCapBag7", "5"],
      [1, "OakTree", "750"],
      [1, "CraftMat5", "150"],
      [0, "MaxCapBag9", "3"],
      [1, "BirchTree", "2400"],
      [0, "ForestTree", "1800"]
    ],
    "detRecipeTotals": [
      ["ForestTree", 1800],
      ["OakTree", 750],
      ["CraftMat5", 150],
      ["BirchTree", 2400]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 250: Logs, Leaves."
    ]
  },
  "MaxCapBagT4": {
    "displayName": "Sizable Choppin Pouch",
    "sellPrice": "220500",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["MaxCapBagT5", "2", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["PalmTree", "6750"],
        ["MaxCapBagT3", "3"]
      ],
      "levelReqToCraft": "24",
      "expGiven": "9000",
      "no": 32,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "PalmTree", "6750"],
      [0, "MaxCapBagT3", "3"],
      [1, "MaxCapBag7", "15"],
      [2, "OakTree", "2250"],
      [2, "CraftMat5", "450"],
      [1, "MaxCapBag9", "9"],
      [2, "BirchTree", "7200"],
      [1, "ForestTree", "5400"]
    ],
    "detRecipeTotals": [
      ["PalmTree", 6750],
      ["ForestTree", 5400],
      ["OakTree", 2250],
      ["CraftMat5", 450],
      ["BirchTree", 7200]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 500: Logs, Leaves."
    ]
  },
  "MaxCapBagT5": {
    "displayName": "Big Choppin Pouch",
    "sellPrice": "1041000",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["MaxCapBagT6", "2", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["SaharanFoal", "20000"],
        ["MaxCapBagT4", "2"]
      ],
      "levelReqToCraft": "35",
      "expGiven": "65000",
      "no": 12,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "SaharanFoal", "20000"],
      [0, "MaxCapBagT4", "2"],
      [1, "PalmTree", "13500"],
      [1, "MaxCapBagT3", "6"],
      [2, "MaxCapBag7", "30"],
      [3, "OakTree", "4500"],
      [3, "CraftMat5", "900"],
      [2, "MaxCapBag9", "18"],
      [3, "BirchTree", "14400"],
      [2, "ForestTree", "10800"]
    ],
    "detRecipeTotals": [
      ["SaharanFoal", 20000],
      ["PalmTree", 13500],
      ["ForestTree", 10800],
      ["OakTree", 4500],
      ["CraftMat5", 900],
      ["BirchTree", 14400]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 1000: Logs, Leaves."
    ]
  },
  "MaxCapBagT6": {
    "displayName": "Large Choppin Pouch",
    "sellPrice": "3282000",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "recipeData": {
      "recipe": [
        ["Tree7", "30000"],
        ["MaxCapBagT5", "2"]
      ],
      "levelReqToCraft": "43",
      "expGiven": "200000",
      "no": 36,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Tree7", "30000"],
      [0, "MaxCapBagT5", "2"],
      [1, "SaharanFoal", "40000"],
      [1, "MaxCapBagT4", "4"],
      [2, "PalmTree", "27000"],
      [2, "MaxCapBagT3", "12"],
      [3, "MaxCapBag7", "60"],
      [4, "OakTree", "9000"],
      [4, "CraftMat5", "1800"],
      [3, "MaxCapBag9", "36"],
      [4, "BirchTree", "28800"],
      [3, "ForestTree", "21600"]
    ],
    "detRecipeTotals": [
      ["Tree7", 30000],
      ["SaharanFoal", 40000],
      ["PalmTree", 27000],
      ["ForestTree", 21600],
      ["OakTree", 9000],
      ["CraftMat5", 1800],
      ["BirchTree", 28800]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 2000: Logs, Leaves."
    ]
  },
  "MaxCapBag6": {
    "displayName": "Miniscule Food Pouch",
    "sellPrice": "200",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["The Hungry Stowaway"],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 25: Health Food, Boost Food, Golden Food."
    ]
  },
  "MaxCapBag8": {
    "displayName": "Cramped Food Pouch",
    "sellPrice": "550",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [["MaxCapBagF3", "7", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["FoodHealth1", "75"],
        ["FoodHealth3", "25"],
        ["OakTree", "60"],
        ["CopperBar", "15"]
      ],
      "levelReqToCraft": "7",
      "expGiven": "20",
      "no": 15,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "FoodHealth1", "75"],
      [0, "FoodHealth3", "25"],
      [0, "OakTree", "60"],
      [0, "CopperBar", "15"]
    ],
    "detRecipeTotals": [
      ["FoodHealth1", 75],
      ["FoodHealth3", 25],
      ["OakTree", 60],
      ["CopperBar", 15]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 50: Health Food, Boost Food, Golden Food."
    ]
  },
  "MaxCapBag10": {
    "displayName": "Small Food Pouch",
    "sellPrice": "5800",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Mushroom Munchies"],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 100: Health Food, Boost Food, Golden Food."
    ]
  },
  "MaxCapBagF3": {
    "displayName": "Average Food Pouch",
    "sellPrice": "79650",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [["MaxCapBagF4", "2", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["MaxCapBag8", "7"],
        ["FoodHealth7", "250"],
        ["FoodMining1", "600"],
        ["FoodChoppin1", "600"]
      ],
      "levelReqToCraft": "18",
      "expGiven": "2400",
      "no": 19,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "MaxCapBag8", "7"],
      [1, "FoodHealth1", "525"],
      [1, "FoodHealth3", "175"],
      [1, "OakTree", "420"],
      [1, "CopperBar", "105"],
      [0, "FoodHealth7", "250"],
      [0, "FoodMining1", "600"],
      [1, "Iron", "3000"],
      [1, "FoodPotMana1", "1200"],
      [0, "FoodChoppin1", "600"],
      [1, "JungleTree", "3600"],
      [1, "FoodPotRe1", "1800"]
    ],
    "detRecipeTotals": [
      ["FoodHealth7", 250],
      ["FoodHealth1", 525],
      ["FoodHealth3", 175],
      ["OakTree", 420],
      ["CopperBar", 105],
      ["Iron", 3000],
      ["FoodPotMana1", 1200],
      ["JungleTree", 3600],
      ["FoodPotRe1", 1800]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 250: Health Food, Boost Food, Golden Food."
    ]
  },
  "MaxCapBagF4": {
    "displayName": "Sizable Food Pouch",
    "sellPrice": "162770",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["MaxCapBagF5", "2", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["FoodG3", "9"],
        ["DesertA3b", "4"],
        ["MaxCapBagF3", "2"]
      ],
      "levelReqToCraft": "28",
      "expGiven": "28000",
      "no": 37,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "FoodG3", "9"],
      [0, "DesertA3b", "4"],
      [0, "MaxCapBagF3", "2"],
      [1, "MaxCapBag8", "14"],
      [2, "FoodHealth1", "1050"],
      [2, "FoodHealth3", "350"],
      [2, "OakTree", "840"],
      [2, "CopperBar", "210"],
      [1, "FoodHealth7", "500"],
      [1, "FoodMining1", "1200"],
      [2, "Iron", "6000"],
      [2, "FoodPotMana1", "2400"],
      [1, "FoodChoppin1", "1200"],
      [2, "JungleTree", "7200"],
      [2, "FoodPotRe1", "3600"]
    ],
    "detRecipeTotals": [
      ["FoodG3", 9],
      ["DesertA3b", 4],
      ["FoodHealth7", 500],
      ["FoodHealth1", 1050],
      ["FoodHealth3", 350],
      ["OakTree", 840],
      ["CopperBar", 210],
      ["Iron", 6000],
      ["FoodPotMana1", 2400],
      ["JungleTree", 7200],
      ["FoodPotRe1", 3600]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 500: Health Food, Boost Food, Golden Food."
    ]
  },
  "MaxCapBagF5": {
    "displayName": "Big Food Pouch",
    "sellPrice": "2522540",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [["MaxCapBagF6", "1", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["FoodFish1", "1500"],
        ["FoodCatch1", "1500"],
        ["FoodHealth9", "10000"],
        ["MaxCapBagF4", "2"]
      ],
      "levelReqToCraft": "39",
      "expGiven": "100000",
      "no": 23,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "FoodFish1", "1500"],
      [1, "Fish2", "7500"],
      [1, "FoodPotOr2", "3000"],
      [0, "FoodCatch1", "1500"],
      [1, "Bug2", "7500"],
      [1, "FoodHealth6", "1500"],
      [0, "FoodHealth9", "10000"],
      [0, "MaxCapBagF4", "2"],
      [1, "FoodG3", "18"],
      [1, "DesertA3b", "8"],
      [1, "MaxCapBagF3", "4"],
      [2, "MaxCapBag8", "28"],
      [3, "FoodHealth1", "2100"],
      [3, "FoodHealth3", "700"],
      [3, "OakTree", "1680"],
      [3, "CopperBar", "420"],
      [2, "FoodHealth7", "1000"],
      [2, "FoodMining1", "2400"],
      [3, "Iron", "12000"],
      [3, "FoodPotMana1", "4800"],
      [2, "FoodChoppin1", "2400"],
      [3, "JungleTree", "14400"],
      [3, "FoodPotRe1", "7200"]
    ],
    "detRecipeTotals": [
      ["FoodHealth9", 10000],
      ["Fish2", 7500],
      ["FoodPotOr2", 3000],
      ["Bug2", 7500],
      ["FoodHealth6", 1500],
      ["FoodG3", 18],
      ["DesertA3b", 8],
      ["FoodHealth7", 1000],
      ["FoodHealth1", 2100],
      ["FoodHealth3", 700],
      ["OakTree", 1680],
      ["CopperBar", 420],
      ["Iron", 12000],
      ["FoodPotMana1", 4800],
      ["JungleTree", 14400],
      ["FoodPotRe1", 7200]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 1000: Health Food, Boost Food, Golden Food."
    ]
  },
  "MaxCapBagF6": {
    "displayName": "Large Food Pouch",
    "sellPrice": "2560440",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "recipeData": {
      "recipe": [
        ["FoodG5", "10"],
        ["FoodTrapping1", "30"],
        ["FoodWorship1", "30"],
        ["MaxCapBagF5", "1"]
      ],
      "levelReqToCraft": "44",
      "expGiven": "250000",
      "no": 45,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "FoodG5", "10"],
      [0, "FoodTrapping1", "30"],
      [1, "Critter2", "3000"],
      [1, "PureWater", "30"],
      [0, "FoodWorship1", "30"],
      [1, "Soul2", "2100"],
      [1, "PureWater", "30"],
      [0, "MaxCapBagF5", "1"],
      [1, "FoodFish1", "1500"],
      [2, "Fish2", "7500"],
      [2, "FoodPotOr2", "3000"],
      [1, "FoodCatch1", "1500"],
      [2, "Bug2", "7500"],
      [2, "FoodHealth6", "1500"],
      [1, "FoodHealth9", "10000"],
      [1, "MaxCapBagF4", "2"],
      [2, "FoodG3", "18"],
      [2, "DesertA3b", "8"],
      [2, "MaxCapBagF3", "4"],
      [3, "MaxCapBag8", "28"],
      [4, "FoodHealth1", "2100"],
      [4, "FoodHealth3", "700"],
      [4, "OakTree", "1680"],
      [4, "CopperBar", "420"],
      [3, "FoodHealth7", "1000"],
      [3, "FoodMining1", "2400"],
      [4, "Iron", "12000"],
      [4, "FoodPotMana1", "4800"],
      [3, "FoodChoppin1", "2400"],
      [4, "JungleTree", "14400"],
      [4, "FoodPotRe1", "7200"]
    ],
    "detRecipeTotals": [
      ["FoodG5", 10],
      ["Critter2", 3000],
      ["PureWater", 60],
      ["Soul2", 2100],
      ["FoodHealth9", 10000],
      ["Fish2", 7500],
      ["FoodPotOr2", 3000],
      ["Bug2", 7500],
      ["FoodHealth6", 1500],
      ["FoodG3", 18],
      ["DesertA3b", 8],
      ["FoodHealth7", 1000],
      ["FoodHealth1", 2100],
      ["FoodHealth3", 700],
      ["OakTree", 1680],
      ["CopperBar", 420],
      ["Iron", 12000],
      ["FoodPotMana1", 4800],
      ["JungleTree", 14400],
      ["FoodPotRe1", 7200]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 2000: Health Food, Boost Food, Golden Food."
    ]
  },
  "MaxCapBagM1": {
    "displayName": "Mini Materials Pouch",
    "sellPrice": "200",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["The Smithing Grind"],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 25: Monster Parts, Smithing Production Items."
    ]
  },
  "MaxCapBagM2": {
    "displayName": "Cramped Material Pouch",
    "sellPrice": "1370",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [
      ["MaxCapBagM4", "7", "Crafting"],
      ["StampB8", "Lots", "Stamps"]
    ],
    "recipeData": {
      "recipe": [
        ["CraftMat5", "80"],
        ["Grasslands2", "40"],
        ["Grasslands3", "30"]
      ],
      "levelReqToCraft": "8",
      "expGiven": "25",
      "no": 16,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "CraftMat5", "80"],
      [0, "Grasslands2", "40"],
      [0, "Grasslands3", "30"]
    ],
    "detRecipeTotals": [
      ["CraftMat5", 80],
      ["Grasslands2", 40],
      ["Grasslands3", 30]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 50: Monster Parts, Smithing Production Items."
    ]
  },
  "MaxCapBagM3": {
    "displayName": "Small Material Pouch",
    "sellPrice": "200",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Seeking Foreign Aid"],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 100: Monster Parts, Smithing Production Items."
    ]
  },
  "MaxCapBagM4": {
    "displayName": "Average Material Pouch",
    "sellPrice": "59650",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [["MaxCapBagM5", "2", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["MaxCapBagM2", "7"],
        ["DesertA1b", "1"],
        ["CraftMat7", "1250"]
      ],
      "levelReqToCraft": "18",
      "expGiven": "2400",
      "no": 20,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "MaxCapBagM2", "7"],
      [1, "CraftMat5", "560"],
      [1, "Grasslands2", "280"],
      [1, "Grasslands3", "210"],
      [0, "DesertA1b", "1"],
      [0, "CraftMat7", "1250"]
    ],
    "detRecipeTotals": [
      ["DesertA1b", 1],
      ["CraftMat7", 1250],
      ["CraftMat5", 560],
      ["Grasslands2", 280],
      ["Grasslands3", 210]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 250: Monster Parts, Smithing Production Items."
    ]
  },
  "MaxCapBagM5": {
    "displayName": "Sizable Materials Pouch",
    "sellPrice": "121160",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["MaxCapBagM6", "2", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["Sewers1b", "3"],
        ["TreeInterior1b", "4"],
        ["MaxCapBagM4", "2"]
      ],
      "levelReqToCraft": "30",
      "expGiven": "41000",
      "no": 38,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Sewers1b", "3"],
      [0, "TreeInterior1b", "4"],
      [0, "MaxCapBagM4", "2"],
      [1, "MaxCapBagM2", "14"],
      [2, "CraftMat5", "1120"],
      [2, "Grasslands2", "560"],
      [2, "Grasslands3", "420"],
      [1, "DesertA1b", "2"],
      [1, "CraftMat7", "2500"]
    ],
    "detRecipeTotals": [
      ["Sewers1b", 3],
      ["TreeInterior1b", 4],
      ["DesertA1b", 2],
      ["CraftMat7", 2500],
      ["CraftMat5", 1120],
      ["Grasslands2", 560],
      ["Grasslands3", 420]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 500: Monster Parts, Smithing Production Items."
    ]
  },
  "MaxCapBagM6": {
    "displayName": "Big Materials Pouch",
    "sellPrice": "4301770",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Start"],
    "uses": [["MaxCapBagM7", "2", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["SnowB1", "15000"],
        ["SnowB2a", "3"],
        ["MaxCapBagM5", "2"]
      ],
      "levelReqToCraft": "39",
      "expGiven": "100000",
      "no": 24,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "SnowB1", "15000"],
      [0, "SnowB2a", "3"],
      [0, "MaxCapBagM5", "2"],
      [1, "Sewers1b", "6"],
      [1, "TreeInterior1b", "8"],
      [1, "MaxCapBagM4", "4"],
      [2, "MaxCapBagM2", "28"],
      [3, "CraftMat5", "2240"],
      [3, "Grasslands2", "1120"],
      [3, "Grasslands3", "840"],
      [2, "DesertA1b", "4"],
      [2, "CraftMat7", "5000"]
    ],
    "detRecipeTotals": [
      ["SnowB1", 15000],
      ["SnowB2a", 3],
      ["Sewers1b", 6],
      ["TreeInterior1b", 8],
      ["DesertA1b", 4],
      ["CraftMat7", 5000],
      ["CraftMat5", 2240],
      ["Grasslands2", 1120],
      ["Grasslands3", 840]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 1000: Monster Parts, Smithing Production Items."
    ]
  },
  "MaxCapBagM7": {
    "displayName": "Large Materials Pouch",
    "sellPrice": "38383540",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "recipeData": {
      "recipe": [
        ["SnowC3", "70000"],
        ["SnowC4a", "3"],
        ["MaxCapBagM6", "2"]
      ],
      "levelReqToCraft": "44",
      "expGiven": "250000",
      "no": 46,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "SnowC3", "70000"],
      [0, "SnowC4a", "3"],
      [0, "MaxCapBagM6", "2"],
      [1, "SnowB1", "30000"],
      [1, "SnowB2a", "6"],
      [1, "MaxCapBagM5", "4"],
      [2, "Sewers1b", "12"],
      [2, "TreeInterior1b", "16"],
      [2, "MaxCapBagM4", "8"],
      [3, "MaxCapBagM2", "56"],
      [4, "CraftMat5", "4480"],
      [4, "Grasslands2", "2240"],
      [4, "Grasslands3", "1680"],
      [3, "DesertA1b", "8"],
      [3, "CraftMat7", "10000"]
    ],
    "detRecipeTotals": [
      ["SnowC3", 70000],
      ["SnowC4a", 3],
      ["SnowB1", 30000],
      ["SnowB2a", 6],
      ["Sewers1b", 12],
      ["TreeInterior1b", 16],
      ["DesertA1b", 8],
      ["CraftMat7", 10000],
      ["CraftMat5", 4480],
      ["Grasslands2", 2240],
      ["Grasslands3", 1680]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 2000: Monster Parts, Smithing Production Items."
    ]
  },
  "MaxCapBagFi0": {
    "displayName": "Miniature Fish Pouch",
    "sellPrice": "200",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 25: Fish."
    ]
  },
  "MaxCapBagFi1": {
    "displayName": "Cramped Fish Pouch",
    "sellPrice": "720",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["MaxCapBagFi3", "5", "Crafting"]],
    "recipeData": {
      "recipe": [["Fish1", "180"]],
      "levelReqToCraft": "9",
      "expGiven": "125",
      "no": 74,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [[0, "Fish1", "180"]],
    "detRecipeTotals": [["Fish1", 180]],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 50: Fish."
    ]
  },
  "MaxCapBagFi2": {
    "displayName": "Small Fish Pouch",
    "sellPrice": "4775",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["MaxCapBagFi3", "3", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["Fish2", "425"],
        ["PureWater", "2"]
      ],
      "levelReqToCraft": "15",
      "expGiven": "450",
      "no": 78,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Fish2", "425"],
      [0, "PureWater", "2"]
    ],
    "detRecipeTotals": [
      ["Fish2", 425],
      ["PureWater", 2]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 100: Fish."
    ]
  },
  "MaxCapBagFi3": {
    "displayName": "Average Fish Pouch",
    "sellPrice": "34425",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["MaxCapBagFi4", "3", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["MaxCapBagFi1", "5"],
        ["MaxCapBagFi2", "3"],
        ["Fish2", "1500"]
      ],
      "levelReqToCraft": "17",
      "expGiven": "1850",
      "no": 14,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "MaxCapBagFi1", "5"],
      [1, "Fish1", "900"],
      [0, "MaxCapBagFi2", "3"],
      [1, "Fish2", "1275"],
      [1, "PureWater", "6"],
      [0, "Fish2", "1500"]
    ],
    "detRecipeTotals": [
      ["Fish2", 2775],
      ["Fish1", 900],
      ["PureWater", 6]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 250: Fish."
    ]
  },
  "MaxCapBagFi4": {
    "displayName": "Sizable Fish Pouch",
    "sellPrice": "148275",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["MaxCapBagFi5", "2", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["Fish4", "2500"],
        ["MaxCapBagFi3", "3"]
      ],
      "levelReqToCraft": "27",
      "expGiven": "17000",
      "no": 34,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Fish4", "2500"],
      [0, "MaxCapBagFi3", "3"],
      [1, "MaxCapBagFi1", "15"],
      [2, "Fish1", "2700"],
      [1, "MaxCapBagFi2", "9"],
      [2, "Fish2", "3825"],
      [2, "PureWater", "18"],
      [1, "Fish2", "4500"]
    ],
    "detRecipeTotals": [
      ["Fish4", 2500],
      ["Fish2", 8325],
      ["Fish1", 2700],
      ["PureWater", 18]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 500: Fish."
    ]
  },
  "MaxCapBagFi5": {
    "displayName": "Big Fish Pouch",
    "sellPrice": "301590",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["MaxCapBagFi6", "2", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["Critter3A", "4"],
        ["Refinery1", "50"],
        ["MaxCapBagFi4", "2"]
      ],
      "levelReqToCraft": "35",
      "expGiven": "65000",
      "no": 14,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Critter3A", "4"],
      [0, "Refinery1", "50"],
      [0, "MaxCapBagFi4", "2"],
      [1, "Fish4", "5000"],
      [1, "MaxCapBagFi3", "6"],
      [2, "MaxCapBagFi1", "30"],
      [3, "Fish1", "5400"],
      [2, "MaxCapBagFi2", "18"],
      [3, "Fish2", "7650"],
      [3, "PureWater", "36"],
      [2, "Fish2", "9000"]
    ],
    "detRecipeTotals": [
      ["Critter3A", 4],
      ["Refinery1", 50],
      ["Fish4", 5000],
      ["Fish2", 16650],
      ["Fish1", 5400],
      ["PureWater", 36]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 1000: Fish."
    ]
  },
  "MaxCapBagFi6": {
    "displayName": "Large Fish Pouch",
    "sellPrice": "1503180",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "recipeData": {
      "recipe": [
        ["Fish4", "50000"],
        ["MaxCapBagFi5", "2"]
      ],
      "levelReqToCraft": "43",
      "expGiven": "200000",
      "no": 38,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Fish4", "50000"],
      [0, "MaxCapBagFi5", "2"],
      [1, "Critter3A", "8"],
      [1, "Refinery1", "100"],
      [1, "MaxCapBagFi4", "4"],
      [2, "Fish4", "10000"],
      [2, "MaxCapBagFi3", "12"],
      [3, "MaxCapBagFi1", "60"],
      [4, "Fish1", "10800"],
      [3, "MaxCapBagFi2", "36"],
      [4, "Fish2", "15300"],
      [4, "PureWater", "72"],
      [3, "Fish2", "18000"]
    ],
    "detRecipeTotals": [
      ["Fish4", 60000],
      ["Critter3A", 8],
      ["Refinery1", 100],
      ["Fish2", 33300],
      ["Fish1", 10800],
      ["PureWater", 72]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 2000: Fish."
    ]
  },
  "MaxCapBagB0": {
    "displayName": "Miniature Bug Pouch",
    "sellPrice": "200",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 25: Bugs."
    ]
  },
  "MaxCapBagB1": {
    "displayName": "Cramped Bug Pouch",
    "sellPrice": "540",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["MaxCapBagB3", "5", "Crafting"]],
    "recipeData": {
      "recipe": [["Bug1", "180"]],
      "levelReqToCraft": "9",
      "expGiven": "125",
      "no": 76,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [[0, "Bug1", "180"]],
    "detRecipeTotals": [["Bug1", 180]],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 50: Bugs."
    ]
  },
  "MaxCapBagB2": {
    "displayName": "Small Bug Pouch",
    "sellPrice": "3925",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["MaxCapBagB3", "3", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["Bug2", "425"],
        ["PureWater", "2"]
      ],
      "levelReqToCraft": "15",
      "expGiven": "450",
      "no": 80,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Bug2", "425"],
      [0, "PureWater", "2"]
    ],
    "detRecipeTotals": [
      ["Bug2", 425],
      ["PureWater", 2]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 100: Bugs."
    ]
  },
  "MaxCapBagB3": {
    "displayName": "Average Bug Pouch",
    "sellPrice": "28875",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["MaxCapBagB4", "3", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["MaxCapBagB1", "5"],
        ["MaxCapBagB2", "3"],
        ["Bug2", "1600"]
      ],
      "levelReqToCraft": "17",
      "expGiven": "1850",
      "no": 16,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "MaxCapBagB1", "5"],
      [1, "Bug1", "900"],
      [0, "MaxCapBagB2", "3"],
      [1, "Bug2", "1275"],
      [1, "PureWater", "6"],
      [0, "Bug2", "1600"]
    ],
    "detRecipeTotals": [
      ["Bug2", 2875],
      ["Bug1", 900],
      ["PureWater", 6]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 250: Bugs."
    ]
  },
  "MaxCapBagB4": {
    "displayName": "Sizable Bug Pouch",
    "sellPrice": "221625",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["MaxCapBagB5", "2", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["Bug4", "6750"],
        ["MaxCapBagB3", "3"]
      ],
      "levelReqToCraft": "27",
      "expGiven": "17000",
      "no": 36,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Bug4", "6750"],
      [0, "MaxCapBagB3", "3"],
      [1, "MaxCapBagB1", "15"],
      [2, "Bug1", "2700"],
      [1, "MaxCapBagB2", "9"],
      [2, "Bug2", "3825"],
      [2, "PureWater", "18"],
      [1, "Bug2", "4800"]
    ],
    "detRecipeTotals": [
      ["Bug4", 6750],
      ["Bug2", 8625],
      ["Bug1", 2700],
      ["PureWater", 18]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 500: Bugs."
    ]
  },
  "MaxCapBagB5": {
    "displayName": "Big Bug Pouch",
    "sellPrice": "763250",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["MaxCapBagB6", "2", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["Bug5", "10000"],
        ["MaxCapBagB4", "2"]
      ],
      "levelReqToCraft": "35",
      "expGiven": "65000",
      "no": 16,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Bug5", "10000"],
      [0, "MaxCapBagB4", "2"],
      [1, "Bug4", "13500"],
      [1, "MaxCapBagB3", "6"],
      [2, "MaxCapBagB1", "30"],
      [3, "Bug1", "5400"],
      [2, "MaxCapBagB2", "18"],
      [3, "Bug2", "7650"],
      [3, "PureWater", "36"],
      [2, "Bug2", "9600"]
    ],
    "detRecipeTotals": [
      ["Bug5", 10000],
      ["Bug4", 13500],
      ["Bug2", 17250],
      ["Bug1", 5400],
      ["PureWater", 36]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 1000: Bugs."
    ]
  },
  "MaxCapBagB6": {
    "displayName": "Large Bug Pouch",
    "sellPrice": "2926500",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "recipeData": {
      "recipe": [
        ["Bug6", "35000"],
        ["MaxCapBagB5", "2"]
      ],
      "levelReqToCraft": "43",
      "expGiven": "200000",
      "no": 40,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Bug6", "35000"],
      [0, "MaxCapBagB5", "2"],
      [1, "Bug5", "20000"],
      [1, "MaxCapBagB4", "4"],
      [2, "Bug4", "27000"],
      [2, "MaxCapBagB3", "12"],
      [3, "MaxCapBagB1", "60"],
      [4, "Bug1", "10800"],
      [3, "MaxCapBagB2", "36"],
      [4, "Bug2", "15300"],
      [4, "PureWater", "72"],
      [3, "Bug2", "19200"]
    ],
    "detRecipeTotals": [
      ["Bug6", 35000],
      ["Bug5", 20000],
      ["Bug4", 27000],
      ["Bug2", 34500],
      ["Bug1", 10800],
      ["PureWater", 72]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 2000: Bugs."
    ]
  },
  "MaxCapBagTr0": {
    "displayName": "Cramped Critter Pouch",
    "sellPrice": "200",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 50: Critters."
    ]
  },
  "MaxCapBagTr1": {
    "displayName": "Small Critter Pouch",
    "sellPrice": "900",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Start"],
    "recipeData": {
      "recipe": [
        ["Critter1", "200"],
        ["Refinery1", "3"]
      ],
      "levelReqToCraft": "15",
      "expGiven": "450",
      "no": 82,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "Critter1", "200"],
      [0, "Refinery1", "3"]
    ],
    "detRecipeTotals": [
      ["Critter1", 200],
      ["Refinery1", 3]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 100: Critters."
    ]
  },
  "MaxCapBagTr2": {
    "displayName": "Average Critter Pouch",
    "sellPrice": "200",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 250: Critters."
    ]
  },
  "MaxCapBagTr3": {
    "displayName": "Sizable Critter Pouch",
    "sellPrice": "6500",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing"],
    "uses": [["MaxCapBagTr4", "2", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["Critter2", "1000"],
        ["Refinery1", "15"]
      ],
      "levelReqToCraft": "28",
      "expGiven": "4000",
      "no": 70,
      "tab": "Anvil Tab 2",
      "recipeFrom": []
    },
    "detrecipe": [
      [0, "Critter2", "1000"],
      [0, "Refinery1", "15"]
    ],
    "detRecipeTotals": [
      ["Critter2", 1000],
      ["Refinery1", 15]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 500: Critters."
    ]
  },
  "MaxCapBagTr4": {
    "displayName": "Big Critter Pouch",
    "sellPrice": "163000",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["MaxCapBagTr5", "2", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["Critter4", "10000"],
        ["MaxCapBagTr3", "2"]
      ],
      "levelReqToCraft": "37",
      "expGiven": "80000",
      "no": 18,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Critter4", "10000"],
      [0, "MaxCapBagTr3", "2"],
      [1, "Critter2", "2000"],
      [1, "Refinery1", "30"]
    ],
    "detRecipeTotals": [
      ["Critter4", 10000],
      ["Critter2", 2000],
      ["Refinery1", 30]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 1000: Critters."
    ]
  },
  "MaxCapBagTr5": {
    "displayName": "Large Critter Pouch",
    "sellPrice": "1376000",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "recipeData": {
      "recipe": [
        ["Critter6", "30000"],
        ["MaxCapBagTr4", "2"]
      ],
      "levelReqToCraft": "44",
      "expGiven": "250000",
      "no": 42,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Critter6", "30000"],
      [0, "MaxCapBagTr4", "2"],
      [1, "Critter4", "20000"],
      [1, "MaxCapBagTr3", "4"],
      [2, "Critter2", "4000"],
      [2, "Refinery1", "60"]
    ],
    "detRecipeTotals": [
      ["Critter6", 30000],
      ["Critter4", 20000],
      ["Critter2", 4000],
      ["Refinery1", 60]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 2000: Critters."
    ]
  },
  "MaxCapBagS0": {
    "displayName": "Cramped Soul Pouch",
    "sellPrice": "200",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 50: Souls."
    ]
  },
  "MaxCapBagS1": {
    "displayName": "Small Soul Pouch",
    "sellPrice": "900",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Start"],
    "recipeData": {
      "recipe": [
        ["Soul1", "200"],
        ["Refinery1", "3"]
      ],
      "levelReqToCraft": "15",
      "expGiven": "450",
      "no": 84,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Start"]
    },
    "detrecipe": [
      [0, "Soul1", "200"],
      [0, "Refinery1", "3"]
    ],
    "detRecipeTotals": [
      ["Soul1", 200],
      ["Refinery1", 3]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 100: Souls."
    ]
  },
  "MaxCapBagS2": {
    "displayName": "Average Soul Pouch",
    "sellPrice": "200",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 250: Souls."
    ]
  },
  "MaxCapBagS3": {
    "displayName": "Sizable Soul Pouch",
    "sellPrice": "15500",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing"],
    "uses": [["MaxCapBagS4", "2", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["Soul2", "1500"],
        ["Refinery1", "20"]
      ],
      "levelReqToCraft": "28",
      "expGiven": "4000",
      "no": 72,
      "tab": "Anvil Tab 2",
      "recipeFrom": []
    },
    "detrecipe": [
      [0, "Soul2", "1500"],
      [0, "Refinery1", "20"]
    ],
    "detRecipeTotals": [
      ["Soul2", 1500],
      ["Refinery1", 20]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 500: Souls."
    ]
  },
  "MaxCapBagS4": {
    "displayName": "Big Soul Pouch",
    "sellPrice": "191000",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "uses": [["MaxCapBagS5", "2", "Crafting"]],
    "recipeData": {
      "recipe": [
        ["Soul3", "8000"],
        ["MaxCapBagS3", "2"]
      ],
      "levelReqToCraft": "37",
      "expGiven": "80000",
      "no": 20,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Soul3", "8000"],
      [0, "MaxCapBagS3", "2"],
      [1, "Soul2", "3000"],
      [1, "Refinery1", "40"]
    ],
    "detRecipeTotals": [
      ["Soul3", 8000],
      ["Soul2", 3000],
      ["Refinery1", 40]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 1000: Souls."
    ]
  },
  "MaxCapBagS5": {
    "displayName": "Large Soul Pouch",
    "sellPrice": "982000",
    "typeGen": "aCarryBag",
    "Type": "Carry Bag",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "recipeData": {
      "recipe": [
        ["Soul3", "30000"],
        ["MaxCapBagS4", "2"]
      ],
      "levelReqToCraft": "44",
      "expGiven": "250000",
      "no": 44,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Soul3", "30000"],
      [0, "MaxCapBagS4", "2"],
      [1, "Soul3", "16000"],
      [1, "MaxCapBagS3", "4"],
      [2, "Soul2", "6000"],
      [2, "Refinery1", "80"]
    ],
    "detRecipeTotals": [
      ["Soul3", 46000],
      ["Soul2", 6000],
      ["Refinery1", 80]
    ],
    "description": [
      "Hold down on this bag to increase the Carry Capacity of the following items to 2000: Souls."
    ]
  },
  "ObolBronze0": {
    "displayName": "Bronze STR Obol",
    "sellPrice": "1",
    "typeGen": "aObolCircle",
    "ID": "0",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "1",
    "sources": [
      "DropTable1",
      "[[Alchemy#Liquid Shop|Mediocre Obols]]",
      "[[Alchemy#Liquid Shop|Decent Obols]]",
      "[[Alchemy#Liquid Shop|Grand Obols]]"
    ],
    "detdrops": [
      ["Crystal Carrot", "0.0003779999999999999", "1.0"],
      ["Green Mushroom", "0.0000018899999999999997", "1.0"],
      ["Frog", "0.000002394", "1.0"],
      ["Bored Bean", "0.0000028349999999999995", "1.0"],
      ["Red Mushroom", "0.0000032759999999999992", "1.0"],
      ["Amarok", "0.0006299999999999999", "2.0"],
      ["Chaotic Amarok", "0.0006299999999999999", "4.0"],
      ["Nightmare Amarok", "0.0006299999999999999", "2.0"],
      ["Baba Yaga", "0.0006299999999999999", "2.0"],
      ["Dewdrop Bronze Chest", "0.0006299999999999999", "1.0"]
    ],
    "notes": " ",
    "family": "STR"
  },
  "ObolBronze1": {
    "displayName": "Bronze AGI Obol",
    "sellPrice": "1",
    "typeGen": "aObolCircle",
    "ID": "0",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "AGI": "1",
    "sources": [
      "DropTable2",
      "[[Alchemy#Liquid Shop|Mediocre Obols]]",
      "[[Alchemy#Liquid Shop|Decent Obols]]",
      "[[Alchemy#Liquid Shop|Grand Obols]]"
    ],
    "detdrops": [
      ["Crystal Carrot", "0.00031499999999999996", "1.0"],
      ["Slime", "0.0000025199999999999996", "1.0"],
      ["Baby Boa", "0.0000031499999999999995", "1.0"],
      ["Carrotman", "0.0000037799999999999994", "1.0"],
      ["Amarok", "0.0006299999999999999", "2.0"],
      ["Chaotic Amarok", "0.0006299999999999999", "4.0"],
      ["Nightmare Amarok", "0.0006299999999999999", "2.0"],
      ["Baba Yaga", "0.0006299999999999999", "1.0"],
      ["Dewdrop Silver Chest", "0.0006299999999999999", "1.0"]
    ],
    "notes": " ",
    "family": "AGI"
  },
  "ObolBronze2": {
    "displayName": "Bronze WIS Obol",
    "sellPrice": "1",
    "typeGen": "aObolCircle",
    "ID": "0",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "WIS": "1",
    "sources": [
      "DropTable3",
      "[[Alchemy#Liquid Shop|Mediocre Obols]]",
      "[[Alchemy#Liquid Shop|Decent Obols]]",
      "[[Alchemy#Liquid Shop|Grand Obols]]"
    ],
    "detdrops": [
      ["Crystal Carrot", "0.000252", "1.0"],
      ["Glublin", "0.0000025199999999999996", "1.0"],
      ["Wode Board", "0.0000028349999999999995", "1.0"],
      ["Gigafrog", "0.0000031499999999999995", "1.0"],
      ["Amarok", "0.0006299999999999999", "2.0"],
      ["Chaotic Amarok", "0.0006299999999999999", "4.0"],
      ["Nightmare Amarok", "0.0006299999999999999", "2.0"],
      ["Dr Defecaus", "0.0006299999999999999", "2.0"],
      ["Baba Yaga", "0.0006299999999999999", "0.5"],
      ["Dewdrop Golden Chest", "0.0006299999999999999", "1.0"]
    ],
    "notes": " ",
    "family": "WIS"
  },
  "ObolBronze3": {
    "displayName": "Bronze LUK Obol",
    "sellPrice": "1",
    "typeGen": "aObolCircle",
    "ID": "0",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "LUK": "1",
    "sources": [
      "DropTable4",
      "[[Alchemy#Liquid Shop|Mediocre Obols]]",
      "[[Alchemy#Liquid Shop|Decent Obols]]"
    ],
    "detdrops": [
      ["Crystal Carrot", "0.0003779999999999999", "1.0"],
      ["Mining Copper", "0.000004094999999999999", "1.0"],
      ["Mining Iron", "0.000004409999999999999", "1.0"],
      ["Mining Gold", "0.000004724999999999999", "1.0"],
      ["Mining Plat", "0.000004851", "1.0"],
      ["Mining Dementia", "0.000005166", "1.0"],
      ["Mining Void", "0.000005669999999999999", "2.0"],
      ["Mining Lustre", "0.0000059849999999999994", "2.0"]
    ],
    "notes": " ",
    "family": "LUK"
  },
  "ObolSilver0": {
    "displayName": "Silver STR Obol",
    "sellPrice": "3",
    "typeGen": "aObolCircle",
    "ID": "1",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "2",
    "sources": [
      "Darn Lazy Gamers!",
      "DropTable6",
      "[[Alchemy#Liquid Shop|Decent Obols]]",
      "[[Alchemy#Liquid Shop|Grand Obols]]",
      "[[Gem Shop#Quality Obol Stack|Quality Obol Stack]]"
    ],
    "detdrops": [
      ["Crystal Crabal", "0.0003779999999999999", "1.0"],
      ["Sandy Pot", "0.0000018899999999999997", "1.0"],
      ["Mimic", "0.000002016", "1.0"],
      ["Crabcake", "0.0000022679999999999997", "1.0"],
      ["Efaunt", "0.0006299999999999999", "2.0"],
      ["Nightmare Amarok", "0.0006299999999999999", "2.0"],
      ["Chizoar", "0.0006299999999999999", "2.0"],
      ["Nightmare Chizoar", "0.0006299999999999999", "2.0"],
      ["Biggie Hours", "0.00031499999999999996", "1.0"],
      ["Sandstone Bronze Chest", "0.0006299999999999999", "1.0"]
    ],
    "notes": " ",
    "family": "STR"
  },
  "ObolSilver1": {
    "displayName": "Silver AGI Obol",
    "sellPrice": "3",
    "typeGen": "aObolCircle",
    "ID": "1",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "AGI": "2",
    "sources": [
      "DropTable7",
      "[[Alchemy#Liquid Shop|Decent Obols]]",
      "[[Alchemy#Liquid Shop|Grand Obols]]",
      "[[Gem Shop#Quality Obol Stack|Quality Obol Stack]]"
    ],
    "detdrops": [
      ["Crystal Crabal", "0.00031499999999999996", "1.0"],
      ["Mafioso", "0.000002016", "1.0"],
      ["Sand Castle", "0.0000022049999999999996", "1.0"],
      ["Pincermin", "0.000002331", "1.0"],
      ["Mashed Potato", "0.0000024569999999999995", "1.0"],
      ["Dig Doug", "0.000002016", "1.0"],
      ["Efaunt", "0.0006299999999999999", "2.0"],
      ["Chaotic Efaunt", "0.0006299999999999999", "2.0"],
      ["Nightmare Amarok", "0.0006299999999999999", "2.0"],
      ["Chizoar", "0.0006299999999999999", "2.0"],
      ["Chaotic Chizoar", "0.0006299999999999999", "2.0"],
      ["Nightmare Chizoar", "0.0006299999999999999", "2.0"],
      ["Sandstone Silver Chest", "0.0006299999999999999", "1.0"]
    ],
    "notes": " ",
    "family": "AGI"
  },
  "ObolSilver2": {
    "displayName": "Silver WIS Obol",
    "sellPrice": "3",
    "typeGen": "aObolCircle",
    "ID": "1",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "WIS": "2",
    "sources": [
      "DropTable8",
      "[[Alchemy#Liquid Shop|Decent Obols]]",
      "[[Alchemy#Liquid Shop|Grand Obols]]",
      "[[Gem Shop#Quality Obol Stack|Quality Obol Stack]]"
    ],
    "detdrops": [
      ["Crystal Crabal", "0.000252", "1.0"],
      ["Tyson", "0.000002016", "1.0"],
      ["Moonmoon", "0.0000022049999999999996", "1.0"],
      ["Sand Giant", "0.000002331", "1.0"],
      ["Snelbie", "0.0000024569999999999995", "1.0"],
      ["Efaunt", "0.0006299999999999999", "2.0"],
      ["Chaotic Efaunt", "0.0006299999999999999", "2.0"],
      ["Nightmare Amarok", "0.0006299999999999999", "2.0"],
      ["Chizoar", "0.0006299999999999999", "2.0"],
      ["Chaotic Chizoar", "0.0006299999999999999", "2.0"],
      ["Nightmare Chizoar", "0.0006299999999999999", "2.0"],
      ["Sandstone Golden Chest", "0.0006299999999999999", "1.0"]
    ],
    "notes": " ",
    "family": "WIS"
  },
  "ObolSilver3": {
    "displayName": "Silver LUK Obol",
    "sellPrice": "3",
    "typeGen": "aObolCircle",
    "ID": "1",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "LUK": "2",
    "sources": [
      "DropTable9",
      "[[Alchemy#Liquid Shop|Decent Obols]]",
      "[[Gem Shop#Quality Obol Stack|Quality Obol Stack]]"
    ],
    "detdrops": [
      ["Crystal Crabal", "0.0003779999999999999", "1.0"],
      ["Fishing Small Fish", "0.000007559999999999999", "1.0"],
      ["Fishing Goldfish", "0.000007559999999999999", "1.0"],
      ["Fishing Hermit Can", "0.000007559999999999999", "1.0"],
      ["Fishing Jellyfish", "0.000007559999999999999", "1.0"],
      ["Fishing Bloach", "0.000007559999999999999", "1.0"]
    ],
    "notes": " ",
    "family": "LUK"
  },
  "ObolGold0": {
    "displayName": "Gold STR Obol",
    "sellPrice": "8",
    "typeGen": "aObolCircle",
    "ID": "2",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "4",
    "sources": [
      "[[Gem Shop#Quality Obol Stack|Quality Obol Stack]]",
      "[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"
    ],
    "notes": " ",
    "family": "STR"
  },
  "ObolGold1": {
    "displayName": "Gold AGI Obol",
    "sellPrice": "8",
    "typeGen": "aObolCircle",
    "ID": "2",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "AGI": "4",
    "sources": [
      "[[Gem Shop#Quality Obol Stack|Quality Obol Stack]]",
      "[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"
    ],
    "notes": " ",
    "family": "AGI"
  },
  "ObolGold2": {
    "displayName": "Gold WIS Obol",
    "sellPrice": "8",
    "typeGen": "aObolCircle",
    "ID": "2",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "WIS": "4",
    "sources": [
      "[[Gem Shop#Quality Obol Stack|Quality Obol Stack]]",
      "[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"
    ],
    "notes": " ",
    "family": "WIS"
  },
  "ObolGold3": {
    "displayName": "Gold LUK Obol",
    "sellPrice": "8",
    "typeGen": "aObolCircle",
    "ID": "2",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "LUK": "4",
    "sources": [
      "SuperDropTable2",
      "[[Gem Shop#Quality Obol Stack|Quality Obol Stack]]",
      "[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"
    ],
    "detdrops": [
      ["Crystal Crabal", "0.00007938000000000002", "1.0"],
      ["Sandy Pot", "0.00000039690000000000007", "1.0"],
      ["Mimic", "0.0000004233600000000001", "1.0"],
      ["Crabcake", "0.0000004762800000000001", "1.0"],
      ["Efaunt", "0.00013230000000000002", "2.0"],
      ["Nightmare Amarok", "0.00013230000000000002", "2.0"],
      ["Chizoar", "0.00013230000000000002", "2.0"],
      ["Nightmare Chizoar", "0.00013230000000000002", "2.0"],
      ["Biggie Hours", "0.00006615000000000001", "1.0"],
      ["Sandstone Bronze Chest", "0.00013230000000000002", "1.0"],
      ["Mafioso", "0.0000004233600000000001", "1.0"],
      ["Sand Castle", "0.0000004630500000000001", "1.0"],
      ["Pincermin", "0.0000004895100000000001", "1.0"],
      ["Mashed Potato", "0.00000051597", "1.0"],
      ["Dig Doug", "0.0000004233600000000001", "1.0"],
      ["Chaotic Efaunt", "0.00013230000000000002", "2.0"],
      ["Chaotic Chizoar", "0.00013230000000000002", "2.0"],
      ["Sandstone Silver Chest", "0.00013230000000000002", "1.0"],
      ["Tyson", "0.0000004233600000000001", "1.0"],
      ["Moonmoon", "0.0000004630500000000001", "1.0"],
      ["Sand Giant", "0.0000004895100000000001", "1.0"],
      ["Snelbie", "0.00000051597", "1.0"],
      ["Sandstone Golden Chest", "0.00013230000000000002", "1.0"],
      ["Fishing Small Fish", "0.0000015876000000000003", "1.0"],
      ["Fishing Goldfish", "0.0000015876000000000003", "1.0"],
      ["Fishing Hermit Can", "0.0000015876000000000003", "1.0"],
      ["Fishing Jellyfish", "0.0000015876000000000003", "1.0"],
      ["Fishing Bloach", "0.0000015876000000000003", "1.0"],
      ["Choppin Palm Tree", "0.0000019845000000000002", "2.0"],
      ["Catching Flies", "0.0000019845000000000002", "1.0"],
      ["Catching Butterflies", "0.0000019845000000000002", "1.0"],
      ["Catching Sentient Cereal", "0.0000019845000000000002", "1.0"],
      ["Catching Fruitflies", "0.0000019845000000000002", "1.0"]
    ],
    "notes": " ",
    "family": "LUK"
  },
  "ObolPlatinum0": {
    "displayName": "Platinum STR Obol",
    "sellPrice": "20",
    "typeGen": "aObolCircle",
    "ID": "3",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "7",
    "sources": ["[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"],
    "family": "STR"
  },
  "ObolPlatinum1": {
    "displayName": "Platinum AGI Obol",
    "sellPrice": "20",
    "typeGen": "aObolCircle",
    "ID": "3",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "AGI": "7",
    "sources": ["[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"],
    "family": "AGI"
  },
  "ObolPlatinum2": {
    "displayName": "Platinum WIS Obol",
    "sellPrice": "20",
    "typeGen": "aObolCircle",
    "ID": "3",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "WIS": "7",
    "sources": ["[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"],
    "family": "WIS"
  },
  "ObolPlatinum3": {
    "displayName": "Platinum LUK Obol",
    "sellPrice": "20",
    "typeGen": "aObolCircle",
    "ID": "3",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "LUK": "7",
    "sources": ["[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"],
    "family": "LUK"
  },
  "ObolPink0": {
    "displayName": "Dementia STR Obol",
    "sellPrice": "50",
    "typeGen": "aObolSquare",
    "ID": "4",
    "Type": "Square Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "1",
    "STR": "12",
    "sources": ["[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"],
    "family": "STR"
  },
  "ObolPink1": {
    "displayName": "Dementia AGI Obol",
    "sellPrice": "50",
    "typeGen": "aObolSquare",
    "ID": "4",
    "Type": "Square Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "1",
    "AGI": "12",
    "sources": ["[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"],
    "family": "AGI"
  },
  "ObolPink2": {
    "displayName": "Dementia WIS Obol",
    "sellPrice": "50",
    "typeGen": "aObolSquare",
    "ID": "4",
    "Type": "Square Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "1",
    "WIS": "12",
    "sources": ["[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"],
    "family": "WIS"
  },
  "ObolPink3": {
    "displayName": "Dementia LUK Obol",
    "sellPrice": "50",
    "typeGen": "aObolSquare",
    "ID": "4",
    "Type": "Square Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "1",
    "LUK": "12",
    "sources": ["[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"],
    "family": "LUK"
  },
  "ObolBronzeDamage": {
    "displayName": "Bronze Obol of Puny Damage",
    "sellPrice": "1",
    "typeGen": "aObolCircle",
    "ID": "0",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": [
      "Bad Kitty, get off that altar!",
      "[[Alchemy#Liquid Shop|Mediocre Obols]]"
    ],
    "miscUp1": "5 Base Damage",
    "notes": " ",
    "family": "Damage"
  },
  "ObolSilverDamage": {
    "displayName": "Silver Obol of Little Damage",
    "sellPrice": "3",
    "typeGen": "aObolCircle",
    "ID": "1",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "sources": [
      "SuperDropTable1",
      "[[Alchemy#Liquid Shop|Decent Obols]]",
      "[[Alchemy#Liquid Shop|Grand Obols]]",
      "[[Gem Shop#Quality Obol Stack|Quality Obol Stack]]"
    ],
    "detdrops": [
      ["Crystal Carrot", "0.00006803999999999999", "1.0"],
      ["Green Mushroom", "0.0000003402", "1.0"],
      ["Frog", "0.00000043092", "1.0"],
      ["Bored Bean", "0.0000005103", "1.0"],
      ["Red Mushroom", "0.00000058968", "1.0"],
      ["Amarok", "0.0001134", "2.0"],
      ["Chaotic Amarok", "0.0001134", "4.0"],
      ["Nightmare Amarok", "0.0001134", "2.0"],
      ["Baba Yaga", "0.0001134", "2.0"],
      ["Dewdrop Bronze Chest", "0.0001134", "1.0"],
      ["Slime", "0.0000005103", "1.0"],
      ["Baby Boa", "0.0000006378749999999999", "1.0"],
      ["Carrotman", "0.00000076545", "1.0"],
      ["Dewdrop Silver Chest", "0.000127575", "1.0"],
      ["Glublin", "0.000000567", "1.0"],
      ["Wode Board", "0.0000006378749999999999", "1.0"],
      ["Gigafrog", "0.00000070875", "1.0"],
      ["Dr Defecaus", "0.00014175", "2.0"],
      ["Dewdrop Golden Chest", "0.00014175", "1.0"],
      ["Poop", "0.0000009355499999999999", "1.0"],
      ["Rat", "0.0000009355499999999999", "1.0"],
      ["Walking Stick", "0.0000008887724999999999", "1.0"],
      ["Nutto", "0.0000010135125", "1.0"],
      ["Wood Mushroom", "0.000001091475", "1.0"],
      ["Mining Copper", "0.00000110565", "1.0"],
      ["Mining Iron", "0.0000011907", "1.0"],
      ["Mining Gold", "0.0000012757499999999998", "1.0"],
      ["Mining Plat", "0.0000013097700000000002", "1.0"],
      ["Mining Dementia", "0.00000139482", "1.0"],
      ["Mining Void", "0.0000015309", "2.0"],
      ["Mining Lustre", "0.0000016159500000000002", "2.0"],
      ["Choppin Oak Tree", "0.0000013608", "1.0"],
      ["Choppin Birch Tree", "0.00000144585", "1.0"],
      ["Choppin Jungle Tree", "0.0000015309", "1.0"],
      ["Choppin Forest Tree", "0.0000016159500000000002", "1.0"],
      ["Choppin Toilet Tree", "0.0000018030600000000001", "1.0"],
      ["Choppin Stump Tree", "0.0000017350200000000002", "1.0"]
    ],
    "miscUp1": "10 Base Damage",
    "notes": " ",
    "family": "Damage"
  },
  "ObolGoldDamage": {
    "displayName": "Golden Obol of Big Boy Damage",
    "sellPrice": "8",
    "typeGen": "aObolCircle",
    "ID": "2",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "1",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "sources": [
      "[[Gem Shop#Quality Obol Stack|Quality Obol Stack]]",
      "[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"
    ],
    "miscUp1": "20 Base Damage",
    "notes": " ",
    "family": "Damage"
  },
  "ObolPlatinumDamage": {
    "displayName": "Platinum Obol of Lethal Damage",
    "sellPrice": "20",
    "typeGen": "aObolSquare",
    "ID": "3",
    "Type": "Square Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "2",
    "STR": "2",
    "AGI": "3",
    "WIS": "3",
    "LUK": "3",
    "sources": ["[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"],
    "miscUp1": "50 Base Damage",
    "notes": " ",
    "family": "Damage"
  },
  "ObolPinkDamage": {
    "displayName": "Dementia Obol of Infinite Damage",
    "sellPrice": "50",
    "typeGen": "aObolHexagon",
    "ID": "4",
    "Type": "Hexagon Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "3",
    "STR": "5",
    "AGI": "5",
    "WIS": "5",
    "LUK": "5",
    "sources": ["[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"],
    "miscUp1": "100 Base Damage",
    "notes": " ",
    "family": "Damage"
  },
  "ObolPlatinumSpeed": {
    "displayName": "Platinum Obol of Blinding Speed",
    "sellPrice": "20",
    "typeGen": "aObolHexagon",
    "ID": "3",
    "Type": "Hexagon Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "AGI": "4",
    "miscUp1": "2% Movement Speed",
    "notes": " ",
    "family": "Speed"
  },
  "ObolSilverMoney": {
    "displayName": "Silver Obol of Pocket Change",
    "sellPrice": "3",
    "typeGen": "aObolSquare",
    "ID": "1",
    "Type": "Square Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": [
      "SuperDropTable1",
      "[[Gem Shop#Quality Obol Stack|Quality Obol Stack]]"
    ],
    "detdrops": [
      ["Crystal Carrot", "0.00006803999999999999", "1.0"],
      ["Green Mushroom", "0.0000003402", "1.0"],
      ["Frog", "0.00000043092", "1.0"],
      ["Bored Bean", "0.0000005103", "1.0"],
      ["Red Mushroom", "0.00000058968", "1.0"],
      ["Amarok", "0.0001134", "2.0"],
      ["Chaotic Amarok", "0.0001134", "4.0"],
      ["Nightmare Amarok", "0.0001134", "2.0"],
      ["Baba Yaga", "0.0001134", "2.0"],
      ["Dewdrop Bronze Chest", "0.0001134", "1.0"],
      ["Slime", "0.0000005103", "1.0"],
      ["Baby Boa", "0.0000006378749999999999", "1.0"],
      ["Carrotman", "0.00000076545", "1.0"],
      ["Dewdrop Silver Chest", "0.000127575", "1.0"],
      ["Glublin", "0.000000567", "1.0"],
      ["Wode Board", "0.0000006378749999999999", "1.0"],
      ["Gigafrog", "0.00000070875", "1.0"],
      ["Dr Defecaus", "0.00014175", "2.0"],
      ["Dewdrop Golden Chest", "0.00014175", "1.0"],
      ["Poop", "0.0000009355499999999999", "1.0"],
      ["Rat", "0.0000009355499999999999", "1.0"],
      ["Walking Stick", "0.0000008887724999999999", "1.0"],
      ["Nutto", "0.0000010135125", "1.0"],
      ["Wood Mushroom", "0.000001091475", "1.0"],
      ["Mining Copper", "0.00000110565", "1.0"],
      ["Mining Iron", "0.0000011907", "1.0"],
      ["Mining Gold", "0.0000012757499999999998", "1.0"],
      ["Mining Plat", "0.0000013097700000000002", "1.0"],
      ["Mining Dementia", "0.00000139482", "1.0"],
      ["Mining Void", "0.0000015309", "2.0"],
      ["Mining Lustre", "0.0000016159500000000002", "2.0"],
      ["Choppin Oak Tree", "0.0000013608", "1.0"],
      ["Choppin Birch Tree", "0.00000144585", "1.0"],
      ["Choppin Jungle Tree", "0.0000015309", "1.0"],
      ["Choppin Forest Tree", "0.0000016159500000000002", "1.0"],
      ["Choppin Toilet Tree", "0.0000018030600000000001", "1.0"],
      ["Choppin Stump Tree", "0.0000017350200000000002", "1.0"]
    ],
    "miscUp1": "6% Money",
    "notes": " ",
    "family": "Money"
  },
  "ObolGoldMoney": {
    "displayName": "Golden Obol of Plentiful Riches",
    "sellPrice": "8",
    "typeGen": "aObolSquare",
    "ID": "2",
    "Type": "Square Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": [
      "[[Gem Shop#Quality Obol Stack|Quality Obol Stack]]",
      "[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"
    ],
    "miscUp1": "10% Money",
    "notes": " ",
    "family": "Money"
  },
  "ObolBronzeMining": {
    "displayName": "Bronze Obol of Small Swings",
    "sellPrice": "1",
    "typeGen": "aObolCircle",
    "ID": "0",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "1",
    "sources": ["[[Alchemy#Liquid Shop|Mediocre Obols]]"],
    "notes": " ",
    "family": "Mining"
  },
  "ObolSilverMining": {
    "displayName": "Silver Obol of Moderate Mining",
    "sellPrice": "3",
    "typeGen": "aObolCircle",
    "ID": "1",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "2",
    "STR": "1",
    "sources": [
      "[[Alchemy#Liquid Shop|Decent Obols]]",
      "[[Gem Shop#Quality Obol Stack|Quality Obol Stack]]"
    ],
    "notes": " ",
    "family": "Mining"
  },
  "ObolGoldMining": {
    "displayName": "Golden Obol of Diligent Digging",
    "sellPrice": "8",
    "typeGen": "aObolSquare",
    "ID": "2",
    "Type": "Square Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "3",
    "STR": "2",
    "sources": [
      "[[Gem Shop#Quality Obol Stack|Quality Obol Stack]]",
      "[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"
    ],
    "notes": " ",
    "family": "Mining"
  },
  "ObolPlatinumMining": {
    "displayName": "Platinum Obol of Dwarven Delving",
    "sellPrice": "20",
    "typeGen": "aObolHexagon",
    "ID": "3",
    "Type": "Hexagon Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "4",
    "STR": "3",
    "sources": ["[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"],
    "miscUp1": "2% Mining Efficincy",
    "notes": " ",
    "family": "Mining"
  },
  "ObolPinkMining": {
    "displayName": "Dementia Obol of Magisterial Metals",
    "sellPrice": "50",
    "typeGen": "aObolSparkle",
    "ID": "4",
    "Type": "Sparkle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "5",
    "STR": "5",
    "sources": ["[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"],
    "miscUp1": "8% Mining Efficincy",
    "notes": " ",
    "family": "Mining"
  },
  "ObolBronzeChoppin": {
    "displayName": "Bronze Obol of Chippin Chops",
    "sellPrice": "1",
    "typeGen": "aObolCircle",
    "ID": "0",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "1",
    "sources": ["[[Alchemy#Liquid Shop|Mediocre Obols]]"],
    "notes": " ",
    "family": "Choppin"
  },
  "ObolSilverChoppin": {
    "displayName": "Silver Obol of Big Bark",
    "sellPrice": "3",
    "typeGen": "aObolCircle",
    "ID": "1",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "2",
    "WIS": "1",
    "sources": [
      "[[Alchemy#Liquid Shop|Decent Obols]]",
      "[[Gem Shop#Quality Obol Stack|Quality Obol Stack]]"
    ],
    "notes": " ",
    "family": "Choppin"
  },
  "ObolGoldChoppin": {
    "displayName": "Golden Obol of Huge Hackin",
    "sellPrice": "8",
    "typeGen": "aObolSquare",
    "ID": "2",
    "Type": "Square Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "3",
    "WIS": "2",
    "sources": [
      "[[Gem Shop#Quality Obol Stack|Quality Obol Stack]]",
      "[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"
    ],
    "notes": " ",
    "family": "Choppin"
  },
  "ObolPlatinumChoppin": {
    "displayName": "Platinum Obol of Lumby Loggo",
    "sellPrice": "20",
    "typeGen": "aObolHexagon",
    "ID": "3",
    "Type": "Hexagon Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "4",
    "WIS": "3",
    "sources": ["[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"],
    "miscUp1": "2% Chop Efficiency",
    "notes": " ",
    "family": "Choppin"
  },
  "ObolPinkChoppin": {
    "displayName": "Dementia Obol of WOWOWOWWO",
    "sellPrice": "50",
    "typeGen": "aObolSparkle",
    "ID": "4",
    "Type": "Sparkle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "5",
    "WIS": "5",
    "miscUp1": "8% Chop Efficiency",
    "notes": " ",
    "family": "Choppin"
  },
  "ObolBronzeFishing": {
    "displayName": "Bronze Obol of Finite Fish",
    "sellPrice": "1",
    "typeGen": "aObolCircle",
    "ID": "0",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "1",
    "sources": ["[[Alchemy#Liquid Shop|Decent Obols]]"],
    "notes": " ",
    "family": "Fishing"
  },
  "ObolSilverFishing": {
    "displayName": "Silver Obol of Puny Pikes",
    "sellPrice": "3",
    "typeGen": "aObolCircle",
    "ID": "1",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "2",
    "STR": "1",
    "sources": [
      "[[Alchemy#Liquid Shop|Decent Obols]]",
      "[[Gem Shop#Quality Obol Stack|Quality Obol Stack]]"
    ],
    "notes": " ",
    "family": "Fishing"
  },
  "ObolGoldFishing": {
    "displayName": "Golden Obol of Crazy Carp",
    "sellPrice": "8",
    "typeGen": "aObolSquare",
    "ID": "2",
    "Type": "Square Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "3",
    "STR": "2",
    "sources": [
      "[[Gem Shop#Quality Obol Stack|Quality Obol Stack]]",
      "[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"
    ],
    "notes": " ",
    "family": "Fishing"
  },
  "ObolPlatinumFishing": {
    "displayName": "Platinum Obol of Tremendous Trout",
    "sellPrice": "20",
    "typeGen": "aObolHexagon",
    "ID": "3",
    "Type": "Hexagon Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "4",
    "STR": "3",
    "sources": ["[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"],
    "miscUp1": "2% Fishin Efficincy",
    "notes": " ",
    "family": "Fishing"
  },
  "ObolPinkFishing": {
    "displayName": "Dementia Obol of Monument Marlins",
    "sellPrice": "50",
    "typeGen": "aObolSparkle",
    "ID": "4",
    "Type": "Sparkle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "5",
    "STR": "5",
    "sources": ["[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"],
    "miscUp1": "8% Fishin Efficincy",
    "notes": " ",
    "family": "Fishing"
  },
  "ObolBronzeCatching": {
    "displayName": "Bronze Obol of Few Flies",
    "sellPrice": "1",
    "typeGen": "aObolCircle",
    "ID": "0",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "1",
    "sources": ["[[Alchemy#Liquid Shop|Decent Obols]]"],
    "notes": " ",
    "family": "Catching"
  },
  "ObolSilverCatching": {
    "displayName": "Silver Obol of Big Bugs",
    "sellPrice": "3",
    "typeGen": "aObolCircle",
    "ID": "1",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "2",
    "AGI": "1",
    "sources": [
      "[[Alchemy#Liquid Shop|Decent Obols]]",
      "[[Gem Shop#Quality Obol Stack|Quality Obol Stack]]"
    ],
    "notes": " ",
    "family": "Catching"
  },
  "ObolGoldCatching": {
    "displayName": "Golden Obol of Insane Insects",
    "sellPrice": "8",
    "typeGen": "aObolSquare",
    "ID": "2",
    "Type": "Square Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "3",
    "AGI": "2",
    "sources": [
      "[[Gem Shop#Quality Obol Stack|Quality Obol Stack]]",
      "[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"
    ],
    "notes": " ",
    "family": "Catching"
  },
  "ObolPlatinumCatching": {
    "displayName": "Platinum Obol of Idk Yet",
    "sellPrice": "20",
    "typeGen": "aObolHexagon",
    "ID": "3",
    "Type": "Hexagon Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "4",
    "AGI": "3",
    "sources": ["[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"],
    "miscUp1": "2% Catch Efficincy",
    "notes": " ",
    "family": "Catching"
  },
  "ObolPinkCatching": {
    "displayName": "Dementia Obol of Idk Yet",
    "sellPrice": "50",
    "typeGen": "aObolSparkle",
    "ID": "4",
    "Type": "Sparkle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "5",
    "AGI": "5",
    "sources": ["[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"],
    "miscUp1": "8% Catch Efficincy",
    "notes": " ",
    "family": "Catching"
  },
  "ObolSilverLuck": {
    "displayName": "Silver Obol of Double Sixes",
    "sellPrice": "3",
    "typeGen": "aObolSquare",
    "ID": "1",
    "Type": "Square Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "LUK": "2",
    "sources": [
      "SuperDropTable2",
      "[[Gem Shop#Quality Obol Stack|Quality Obol Stack]]"
    ],
    "detdrops": [
      ["Crystal Crabal", "0.00007938000000000002", "1.0"],
      ["Sandy Pot", "0.00000039690000000000007", "1.0"],
      ["Mimic", "0.0000004233600000000001", "1.0"],
      ["Crabcake", "0.0000004762800000000001", "1.0"],
      ["Efaunt", "0.00013230000000000002", "2.0"],
      ["Nightmare Amarok", "0.00013230000000000002", "2.0"],
      ["Chizoar", "0.00013230000000000002", "2.0"],
      ["Nightmare Chizoar", "0.00013230000000000002", "2.0"],
      ["Biggie Hours", "0.00006615000000000001", "1.0"],
      ["Sandstone Bronze Chest", "0.00013230000000000002", "1.0"],
      ["Mafioso", "0.0000004233600000000001", "1.0"],
      ["Sand Castle", "0.0000004630500000000001", "1.0"],
      ["Pincermin", "0.0000004895100000000001", "1.0"],
      ["Mashed Potato", "0.00000051597", "1.0"],
      ["Dig Doug", "0.0000004233600000000001", "1.0"],
      ["Chaotic Efaunt", "0.00013230000000000002", "2.0"],
      ["Chaotic Chizoar", "0.00013230000000000002", "2.0"],
      ["Sandstone Silver Chest", "0.00013230000000000002", "1.0"],
      ["Tyson", "0.0000004233600000000001", "1.0"],
      ["Moonmoon", "0.0000004630500000000001", "1.0"],
      ["Sand Giant", "0.0000004895100000000001", "1.0"],
      ["Snelbie", "0.00000051597", "1.0"],
      ["Sandstone Golden Chest", "0.00013230000000000002", "1.0"],
      ["Fishing Small Fish", "0.0000015876000000000003", "1.0"],
      ["Fishing Goldfish", "0.0000015876000000000003", "1.0"],
      ["Fishing Hermit Can", "0.0000015876000000000003", "1.0"],
      ["Fishing Jellyfish", "0.0000015876000000000003", "1.0"],
      ["Fishing Bloach", "0.0000015876000000000003", "1.0"],
      ["Choppin Palm Tree", "0.0000019845000000000002", "2.0"],
      ["Catching Flies", "0.0000019845000000000002", "1.0"],
      ["Catching Butterflies", "0.0000019845000000000002", "1.0"],
      ["Catching Sentient Cereal", "0.0000019845000000000002", "1.0"],
      ["Catching Fruitflies", "0.0000019845000000000002", "1.0"]
    ],
    "miscUp1": "5% Drop Chance",
    "notes": " ",
    "family": "Sixes"
  },
  "ObolGoldLuck": {
    "displayName": "Golden Obol of Triple Sixes",
    "sellPrice": "8",
    "typeGen": "aObolSquare",
    "ID": "2",
    "Type": "Square Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "LUK": "3",
    "sources": [
      "[[Gem Shop#Quality Obol Stack|Quality Obol Stack]]",
      "[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"
    ],
    "miscUp1": "7% Drop Chance",
    "family": "Sixes"
  },
  "ObolPlatinumLuck": {
    "displayName": "Platinum Obol of Yahtzee Sixes",
    "sellPrice": "20",
    "typeGen": "aObolHexagon",
    "ID": "3",
    "Type": "Hexagon Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "LUK": "5",
    "sources": ["[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"],
    "miscUp1": "10% Drop Chance",
    "family": "Sixes"
  },
  "ObolPinkLuck": {
    "displayName": "Dementia Obol of Infinisixes",
    "sellPrice": "50",
    "typeGen": "aObolSparkle",
    "ID": "4",
    "Type": "Sparkle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "LUK": "7",
    "sources": ["[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"],
    "miscUp1": "15% Drop Chance",
    "family": "Sixes"
  },
  "ObolBronzePop": {
    "displayName": "Bronze Obol of Pop",
    "sellPrice": "1",
    "typeGen": "aObolCircle",
    "ID": "0",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "LUK": "1",
    "Defence": "1",
    "sources": ["Gigafrog"],
    "detdrops": [["Gigafrog", "0.00001", "1"]],
    "miscUp1": "2% Drop Chance",
    "notes": " ",
    "family": "Pop"
  },
  "ObolSilverPop": {
    "displayName": "Silver Obol of Pop Pop",
    "sellPrice": "3",
    "typeGen": "aObolCircle",
    "ID": "1",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "LUK": "3",
    "Defence": "2",
    "miscUp1": "3% Drop Chance",
    "family": "Pop"
  },
  "ObolGoldPop": {
    "displayName": "Golden Obol of Poppity Pop",
    "sellPrice": "8",
    "typeGen": "aObolSquare",
    "ID": "2",
    "Type": "Square Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "LUK": "6",
    "Defence": "3",
    "sources": ["[[Gem Shop#Quality Obol Stack|Quality Obol Stack]]"],
    "miscUp1": "4% Drop Chance",
    "family": "Pop"
  },
  "ObolPlatinumPop": {
    "displayName": "Platinum Obol of Poppity Poppy",
    "sellPrice": "20",
    "typeGen": "aObolHexagon",
    "ID": "3",
    "Type": "Hexagon Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "LUK": "9",
    "Defence": "4",
    "sources": ["[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"],
    "miscUp1": "6% Drop Chance",
    "family": "Pop"
  },
  "ObolPinkPop": {
    "displayName": "Dementia Obol of Pop Pop Pop Pop",
    "sellPrice": "50",
    "typeGen": "aObolSparkle",
    "ID": "4",
    "Type": "Sparkle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "LUK": "12",
    "Defence": "5",
    "sources": ["[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"],
    "miscUp1": "9% Drop Chance",
    "family": "Pop"
  },
  "ObolEfauntA": {
    "displayName": "Skeletal Obol of Efaunt's Gaze",
    "sellPrice": "20",
    "typeGen": "aObolHexagon",
    "ID": "3",
    "Type": "Hexagon Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "2",
    "STR": "5",
    "AGI": "5",
    "WIS": "5",
    "LUK": "5",
    "sources": [
      "Efaunt",
      "Chaotic Efaunt",
      "Nightmare Amarok",
      "Chizoar",
      "Chaotic Chizoar",
      "Nightmare Chizoar"
    ],
    "detdrops": [
      ["Efaunt", "0.001", "1"],
      ["Chaotic Efaunt", "0.003", "1"],
      ["Nightmare Amarok", "0.001", "1"],
      ["Chizoar", "0.001", "1"],
      ["Chaotic Chizoar", "0.001", "1"],
      ["Nightmare Chizoar", "0.001", "1"]
    ],
    "miscUp1": "5% Boss Damage",
    "notes": " ",
    "family": "Bosses"
  },
  "ObolAmarokA": {
    "displayName": "Granite Obol of Amarok's Stare",
    "sellPrice": "20",
    "typeGen": "aObolHexagon",
    "ID": "3",
    "Type": "Hexagon Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "2",
    "AGI": "2",
    "WIS": "2",
    "LUK": "2",
    "Defence": "5",
    "sources": ["Amarok", "Chaotic Amarok"],
    "detdrops": [
      ["Amarok", "0.0007", "1"],
      ["Chaotic Amarok", "0.0033", "1"]
    ],
    "miscUp1": "4% Defence",
    "notes": " ",
    "family": "Bosses"
  },
  "ObolBronzeKill": {
    "displayName": "Bronze Obol of Multikill",
    "sellPrice": "1",
    "typeGen": "aObolCircle",
    "ID": "0",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["SuperDropTable3", "[[Alchemy#Liquid Shop|Grand Obols]]"],
    "detdrops": [
      ["Crystal Cattle", "0.00010962", "1.0"],
      ["Sheepie", "0.00000045675", "1.0"],
      ["Frost Flake", "0.0000005115600000000001", "1.0"],
      ["Sir Stache", "0.00000056637", "1.0"],
      ["Xylobone", "0.000001827", "1.0"],
      ["Chillsnap Bronze Chest", "0.00018270000000000002", "1.0"],
      ["Bloque", "0.00000045675", "1.0"],
      ["Mamooth", "0.00000049329", "1.0"],
      ["Snowman", "0.00000052983", "1.0"],
      ["Penguin", "0.00000056637", "1.0"],
      ["Thermister", "0.00000060291", "1.0"],
      ["Chillsnap Silver Chest", "0.00018270000000000002", "1.0"],
      ["Dedotated Ram", "0.00000062118", "1.0"],
      ["Quenchie", "0.00000045675", "1.0"],
      ["Cryosnake", "0.0000005115600000000001", "1.0"],
      ["Bop Box", "0.0000005481", "1.0"],
      ["Neyeptune", "0.0000005846400000000001", "1.0"],
      ["Bloodbone", "0.0000009135", "1.0"],
      ["Chillsnap Golden Chest", "0.00018270000000000002", "1.0"],
      ["Choppin Saharan Foal", "0.0000016260300000000002", "1.0"],
      ["Choppin Wispy Tree", "0.0000016260300000000002", "1.0"],
      ["Catching Mosquisnow", "0.0000027405", "1.0"],
      ["Catching Flycicle", "0.0000027405", "1.0"]
    ],
    "miscUp1": "1% Multikill",
    "family": "Multikill"
  },
  "ObolSilverKill": {
    "displayName": "Silver Obol of Megakill",
    "sellPrice": "3",
    "typeGen": "aObolCircle",
    "ID": "1",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "miscUp1": "2% Multikill",
    "family": "Multikill"
  },
  "ObolGoldKill": {
    "displayName": "Golden Obol of Ultrakill",
    "sellPrice": "8",
    "typeGen": "aObolSquare",
    "ID": "2",
    "Type": "Square Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "1",
    "sources": [
      "[[Gem Shop#Quality Obol Stack|Quality Obol Stack]]",
      "[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"
    ],
    "miscUp1": "3% Multikill",
    "family": "Multikill"
  },
  "ObolPlatinumKill": {
    "displayName": "Platinum Obol of Killimanjaro",
    "sellPrice": "20",
    "typeGen": "aObolHexagon",
    "ID": "3",
    "Type": "Hexagon Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "1",
    "sources": ["[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"],
    "miscUp1": "5% Multikill",
    "family": "Multikill"
  },
  "ObolPinkKill": {
    "displayName": "Dementia Obol of Killionaire",
    "sellPrice": "50",
    "typeGen": "aObolSparkle",
    "ID": "4",
    "Type": "Sparkle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "2",
    "sources": ["[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"],
    "miscUp1": "10% Multikill",
    "family": "Multikill"
  },
  "ObolBronzeEXP": {
    "displayName": "Bronze Obol of Experience",
    "sellPrice": "1",
    "typeGen": "aObolCircle",
    "ID": "0",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["SuperDropTable1"],
    "detdrops": [
      ["Crystal Carrot", "0.00007308", "1.0"],
      ["Green Mushroom", "0.00000036540000000000003", "1.0"],
      ["Frog", "0.00000046284000000000003", "1.0"],
      ["Bored Bean", "0.0000005481", "1.0"],
      ["Red Mushroom", "0.00000063336", "1.0"],
      ["Amarok", "0.0001218", "2.0"],
      ["Chaotic Amarok", "0.0001218", "4.0"],
      ["Nightmare Amarok", "0.0001218", "2.0"],
      ["Baba Yaga", "0.0001218", "2.0"],
      ["Dewdrop Bronze Chest", "0.0001218", "1.0"],
      ["Slime", "0.0000005481", "1.0"],
      ["Baby Boa", "0.000000685125", "1.0"],
      ["Carrotman", "0.00000082215", "1.0"],
      ["Dewdrop Silver Chest", "0.00013702499999999998", "1.0"],
      ["Glublin", "0.0000006090000000000001", "1.0"],
      ["Wode Board", "0.000000685125", "1.0"],
      ["Gigafrog", "0.0000007612500000000001", "1.0"],
      ["Dr Defecaus", "0.00015225000000000001", "2.0"],
      ["Dewdrop Golden Chest", "0.00015225000000000001", "1.0"],
      ["Poop", "0.00000100485", "1.0"],
      ["Rat", "0.00000100485", "1.0"],
      ["Walking Stick", "0.0000009546075", "1.0"],
      ["Nutto", "0.0000010885874999999998", "1.0"],
      ["Wood Mushroom", "0.000001172325", "1.0"],
      ["Mining Copper", "0.00000118755", "1.0"],
      ["Mining Iron", "0.0000012789000000000002", "1.0"],
      ["Mining Gold", "0.00000137025", "1.0"],
      ["Mining Plat", "0.0000014067900000000002", "1.0"],
      ["Mining Dementia", "0.0000014981400000000002", "1.0"],
      ["Mining Void", "0.0000016443", "2.0"],
      ["Mining Lustre", "0.0000017356500000000003", "2.0"],
      ["Choppin Oak Tree", "0.0000014616000000000001", "1.0"],
      ["Choppin Birch Tree", "0.0000015529500000000003", "1.0"],
      ["Choppin Jungle Tree", "0.0000016443", "1.0"],
      ["Choppin Forest Tree", "0.0000017356500000000003", "1.0"],
      ["Choppin Toilet Tree", "0.00000193662", "1.0"],
      ["Choppin Stump Tree", "0.0000018635400000000005", "1.0"]
    ],
    "miscUp1": "1% Xp From Monsters",
    "family": "Experience"
  },
  "ObolSilverEXP": {
    "displayName": "Silver Obol of Experience",
    "sellPrice": "3",
    "typeGen": "aObolCircle",
    "ID": "1",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "sources": [
      "Tomb Raid",
      "[[Gem Shop#Quality Obol Stack|Quality Obol Stack]]"
    ],
    "miscUp1": "1% Xp From Monsters",
    "family": "Experience"
  },
  "ObolGoldEXP": {
    "displayName": "Golden Obol of Experience",
    "sellPrice": "8",
    "typeGen": "aObolSquare",
    "ID": "2",
    "Type": "Square Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "2",
    "AGI": "2",
    "WIS": "2",
    "sources": [
      "[[Gem Shop#Quality Obol Stack|Quality Obol Stack]]",
      "[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"
    ],
    "miscUp1": "2% Xp From Monsters",
    "family": "Experience"
  },
  "ObolPlatinumEXP": {
    "displayName": "Platinum Obol of Experience",
    "sellPrice": "20",
    "typeGen": "aObolHexagon",
    "ID": "3",
    "Type": "Hexagon Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "3",
    "AGI": "3",
    "WIS": "3",
    "sources": ["[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"],
    "miscUp1": "3% Xp From Monsters",
    "family": "Experience"
  },
  "ObolPinkEXP": {
    "displayName": "Dementia Obol of Experience",
    "sellPrice": "50",
    "typeGen": "aObolSparkle",
    "ID": "4",
    "Type": "Sparkle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "1",
    "STR": "5",
    "AGI": "5",
    "WIS": "5",
    "sources": ["[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"],
    "miscUp1": "4% Xp From Monsters",
    "family": "Experience"
  },
  "ObolBronzeCard": {
    "displayName": "Bronze Obol of Cards",
    "sellPrice": "1",
    "typeGen": "aObolCircle",
    "ID": "0",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "miscUp1": "1% Card Drop Chance",
    "family": "Card"
  },
  "ObolSilverCard": {
    "displayName": "Silver Obol of Cards",
    "sellPrice": "3",
    "typeGen": "aObolSquare",
    "ID": "1",
    "Type": "Square Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "sources": ["[[Gem Shop#Quality Obol Stack|Quality Obol Stack]]"],
    "miscUp1": "3% Card Drop Chance",
    "family": "Card"
  },
  "ObolGoldCard": {
    "displayName": "Golden Obol of Cards",
    "sellPrice": "8",
    "typeGen": "aObolHexagon",
    "ID": "2",
    "Type": "Hexagon Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "2",
    "AGI": "2",
    "WIS": "2",
    "sources": [
      "[[Alchemy#Liquid Shop|Grand Obols]]",
      "[[Gem Shop#Quality Obol Stack|Quality Obol Stack]]",
      "[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"
    ],
    "miscUp1": "5% Card Drop Chance",
    "family": "Card"
  },
  "ObolPlatinumCard": {
    "displayName": "Platinum Obol of Cards",
    "sellPrice": "20",
    "typeGen": "aObolHexagon",
    "ID": "3",
    "Type": "Hexagon Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "3",
    "AGI": "3",
    "WIS": "3",
    "sources": ["[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"],
    "miscUp1": "7% Card Drop Chance",
    "family": "Card"
  },
  "ObolPinkCard": {
    "displayName": "Dementia Obol of Cards",
    "sellPrice": "50",
    "typeGen": "aObolSparkle",
    "ID": "4",
    "Type": "Sparkle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "1",
    "STR": "5",
    "AGI": "5",
    "WIS": "5",
    "sources": ["[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"],
    "miscUp1": "10% Card Drop Chance",
    "family": "Card"
  },
  "ObolBronzeDef": {
    "displayName": "Bronze Obol of Defence",
    "sellPrice": "1",
    "typeGen": "aObolCircle",
    "ID": "0",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Defence": "1",
    "sources": ["SuperDropTable2", "[[Alchemy#Liquid Shop|Grand Obols]]"],
    "detdrops": [
      ["Crystal Crabal", "0.00010962", "1.0"],
      ["Sandy Pot", "0.0000005481", "1.0"],
      ["Mimic", "0.0000005846400000000001", "1.0"],
      ["Crabcake", "0.00000065772", "1.0"],
      ["Efaunt", "0.00018270000000000002", "2.0"],
      ["Nightmare Amarok", "0.00018270000000000002", "2.0"],
      ["Chizoar", "0.00018270000000000002", "2.0"],
      ["Nightmare Chizoar", "0.00018270000000000002", "2.0"],
      ["Biggie Hours", "0.00009135000000000001", "1.0"],
      ["Sandstone Bronze Chest", "0.00018270000000000002", "1.0"],
      ["Mafioso", "0.0000005846400000000001", "1.0"],
      ["Sand Castle", "0.0000006394500000000001", "1.0"],
      ["Pincermin", "0.00000067599", "1.0"],
      ["Mashed Potato", "0.00000071253", "1.0"],
      ["Dig Doug", "0.0000005846400000000001", "1.0"],
      ["Chaotic Efaunt", "0.00018270000000000002", "2.0"],
      ["Chaotic Chizoar", "0.00018270000000000002", "2.0"],
      ["Sandstone Silver Chest", "0.00018270000000000002", "1.0"],
      ["Tyson", "0.0000005846400000000001", "1.0"],
      ["Moonmoon", "0.0000006394500000000001", "1.0"],
      ["Sand Giant", "0.00000067599", "1.0"],
      ["Snelbie", "0.00000071253", "1.0"],
      ["Sandstone Golden Chest", "0.00018270000000000002", "1.0"],
      ["Fishing Small Fish", "0.0000021924", "1.0"],
      ["Fishing Goldfish", "0.0000021924", "1.0"],
      ["Fishing Hermit Can", "0.0000021924", "1.0"],
      ["Fishing Jellyfish", "0.0000021924", "1.0"],
      ["Fishing Bloach", "0.0000021924", "1.0"],
      ["Choppin Palm Tree", "0.0000027405", "2.0"],
      ["Catching Flies", "0.0000027405", "1.0"],
      ["Catching Butterflies", "0.0000027405", "1.0"],
      ["Catching Sentient Cereal", "0.0000027405", "1.0"],
      ["Catching Fruitflies", "0.0000027405", "1.0"]
    ],
    "family": "Defence"
  },
  "ObolSilverDef": {
    "displayName": "Silver Obol of Defence",
    "sellPrice": "3",
    "typeGen": "aObolCircle",
    "ID": "1",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Defence": "3",
    "sources": ["[[Gem Shop#Quality Obol Stack|Quality Obol Stack]]"],
    "family": "Defence"
  },
  "ObolGoldDef": {
    "displayName": "Golden Obol of Defence",
    "sellPrice": "8",
    "typeGen": "aObolSquare",
    "ID": "2",
    "Type": "Square Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Defence": "6",
    "sources": [
      "[[Gem Shop#Quality Obol Stack|Quality Obol Stack]]",
      "[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"
    ],
    "family": "Defence"
  },
  "ObolPlatinumDef": {
    "displayName": "Platinum Obol of Defense with an S",
    "sellPrice": "20",
    "typeGen": "aObolHexagon",
    "ID": "3",
    "Type": "Hexagon Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Defence": "15",
    "sources": ["[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"],
    "family": "Defence"
  },
  "ObolPinkDef": {
    "displayName": "Dementia Obol of Defence",
    "sellPrice": "50",
    "typeGen": "aObolSparkle",
    "ID": "4",
    "Type": "Sparkle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Defence": "25",
    "sources": ["[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"],
    "family": "Defence"
  },
  "ObolBronzeTrapping": {
    "displayName": "Bronze Obol of Trapping",
    "sellPrice": "1",
    "typeGen": "aObolCircle",
    "ID": "0",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "1",
    "sources": ["DropTable15", "[[Alchemy#Liquid Shop|Grand Obols]]"],
    "detdrops": [
      ["Crystal Cattle", "0.0004725", "1.0"],
      ["Bloque", "0.0000023625", "1.0"],
      ["Mamooth", "0.0000025515", "1.0"],
      ["Snowman", "0.0000027405", "1.0"],
      ["Penguin", "0.0000029294999999999996", "1.0"],
      ["Thermister", "0.0000031185", "1.0"],
      ["Chillsnap Silver Chest", "0.000945", "1.0"]
    ],
    "family": "Trapping"
  },
  "ObolSilverTrapping": {
    "displayName": "Silver Obol of Trapping",
    "sellPrice": "3",
    "typeGen": "aObolCircle",
    "ID": "1",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "2",
    "AGI": "1",
    "sources": [
      "[[Alchemy#Liquid Shop|Grand Obols]]",
      "[[Gem Shop#Quality Obol Stack|Quality Obol Stack]]"
    ],
    "family": "Trapping"
  },
  "ObolGoldTrapping": {
    "displayName": "Golden Obol of Trapping",
    "sellPrice": "8",
    "typeGen": "aObolSquare",
    "ID": "2",
    "Type": "Square Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "3",
    "AGI": "2",
    "sources": ["[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"],
    "family": "Trapping"
  },
  "ObolPlatinumTrapping": {
    "displayName": "Platinum Obol of Trapping",
    "sellPrice": "20",
    "typeGen": "aObolHexagon",
    "ID": "3",
    "Type": "Hexagon Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "5",
    "AGI": "3",
    "family": "Trapping"
  },
  "ObolPinkTrapping": {
    "displayName": "Dementia Obol of Trapping",
    "sellPrice": "50",
    "typeGen": "aObolSparkle",
    "ID": "4",
    "Type": "Sparkle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "7",
    "AGI": "5",
    "family": "Trapping"
  },
  "ObolBronzeCons": {
    "displayName": "Bronze Obol of Construction",
    "sellPrice": "1",
    "typeGen": "aObolCircle",
    "ID": "0",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["DropTable16", "[[Alchemy#Liquid Shop|Grand Obols]]"],
    "detdrops": [
      ["Crystal Cattle", "0.000378", "1.0"],
      ["Dedotated Ram", "0.0000032129999999999996", "1.0"],
      ["Quenchie", "0.0000023625", "1.0"],
      ["Cryosnake", "0.0000026459999999999997", "1.0"],
      ["Bop Box", "0.000002835", "1.0"],
      ["Neyeptune", "0.000003024", "1.0"],
      ["Bloodbone", "0.000004725", "1.0"],
      ["Chillsnap Golden Chest", "0.000945", "1.0"]
    ],
    "miscUp1": "1% Build Spd",
    "family": "Construction"
  },
  "ObolSilverCons": {
    "displayName": "Silver Obol of Construction",
    "sellPrice": "3",
    "typeGen": "aObolCircle",
    "ID": "1",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "1",
    "sources": [
      "[[Alchemy#Liquid Shop|Grand Obols]]",
      "[[Gem Shop#Quality Obol Stack|Quality Obol Stack]]"
    ],
    "miscUp1": "2% Build Spd",
    "family": "Construction"
  },
  "ObolGoldCons": {
    "displayName": "Golden Obol of Construction",
    "sellPrice": "8",
    "typeGen": "aObolSquare",
    "ID": "2",
    "Type": "Square Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "2",
    "sources": ["[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"],
    "miscUp1": "5% Build Spd",
    "family": "Construction"
  },
  "ObolPlatinumCons": {
    "displayName": "Platinum Obol of Construction",
    "sellPrice": "20",
    "typeGen": "aObolHexagon",
    "ID": "3",
    "Type": "Hexagon Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "3",
    "miscUp1": "12% Build Spd",
    "family": "Construction"
  },
  "ObolPinkCons": {
    "displayName": "Dementia Obol of Construction",
    "sellPrice": "50",
    "typeGen": "aObolSparkle",
    "ID": "4",
    "Type": "Sparkle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "5",
    "miscUp1": "20% Build Spd",
    "family": "Construction"
  },
  "ObolBronzeWorship": {
    "displayName": "Bronze Obol of Worship",
    "sellPrice": "1",
    "typeGen": "aObolCircle",
    "ID": "0",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "1",
    "sources": ["DropTable14", "[[Alchemy#Liquid Shop|Grand Obols]]"],
    "detdrops": [
      ["Crystal Cattle", "0.000567", "1.0"],
      ["Sheepie", "0.0000023625", "1.0"],
      ["Frost Flake", "0.0000026459999999999997", "1.0"],
      ["Sir Stache", "0.0000029294999999999996", "1.0"],
      ["Xylobone", "0.00000945", "1.0"],
      ["Chillsnap Bronze Chest", "0.000945", "1.0"]
    ],
    "family": "Worship"
  },
  "ObolSilverWorship": {
    "displayName": "Silver Obol of Worship",
    "sellPrice": "3",
    "typeGen": "aObolCircle",
    "ID": "1",
    "Type": "Circle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "2",
    "WIS": "1",
    "sources": [
      "[[Alchemy#Liquid Shop|Grand Obols]]",
      "[[Gem Shop#Quality Obol Stack|Quality Obol Stack]]"
    ],
    "family": "Worship"
  },
  "ObolGoldWorship": {
    "displayName": "Golden Obol of Worship",
    "sellPrice": "8",
    "typeGen": "aObolSquare",
    "ID": "2",
    "Type": "Square Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "3",
    "WIS": "2",
    "sources": ["[[Gem Shop#Marvelous Obol Stack|Marvelous Obol Stack]]"],
    "family": "Worship"
  },
  "ObolPlatinumWorship": {
    "displayName": "Platinum Obol of Worship",
    "sellPrice": "20",
    "typeGen": "aObolHexagon",
    "ID": "3",
    "Type": "Hexagon Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "5",
    "WIS": "3",
    "family": "Worship"
  },
  "ObolPinkWorship": {
    "displayName": "Dementia Obol of Worship",
    "sellPrice": "50",
    "typeGen": "aObolSparkle",
    "ID": "4",
    "Type": "Sparkle Obol",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "7",
    "WIS": "5",
    "family": "Worship"
  },
  "StampA1": {
    "displayName": "Sword Stamp",
    "sellPrice": "500",
    "typeGen": "aStamp",
    "ID": "1",
    "Type": "Combat Stamp",
    "sources": ["Start"],
    "stampData": [
      "BaseDmg",
      "add",
      "1",
      "0",
      "5",
      "Spore Cap",
      "20",
      "5",
      "50",
      "1.3",
      "0",
      "{} Base Damage",
      "3"
    ]
  },
  "StampA2": {
    "displayName": "Heart Stamp",
    "sellPrice": "500",
    "typeGen": "aStamp",
    "ID": "2",
    "Type": "Combat Stamp",
    "sources": ["Start"],
    "stampData": [
      "BaseHP",
      "add",
      "1",
      "0",
      "5",
      "Oak Logs",
      "25",
      "7",
      "50",
      "1.3",
      "0",
      "{} Base HP",
      "3"
    ]
  },
  "StampA3": {
    "displayName": "Mana Stamp",
    "sellPrice": "2500",
    "typeGen": "aStamp",
    "ID": "3",
    "Type": "Combat Stamp",
    "sources": ["Blunder Hills Vendor"],
    "uses": [["Stamp Collecting", "5", "Quests"]],
    "stampData": [
      "BaseMP",
      "add",
      "1",
      "0",
      "5",
      "Copper Ore",
      "25",
      "7",
      "50",
      "1.3",
      "0",
      "{} Base MP",
      "0"
    ],
    "shopData": [
      {
        "vendor": "Blunder Hills",
        "quantity": "1",
        "no": 17
      }
    ]
  },
  "StampA4": {
    "displayName": "Tomahawk Stamp",
    "sellPrice": "1000",
    "typeGen": "aStamp",
    "ID": "4",
    "Type": "Combat Stamp",
    "sources": ["The Hamazing Plot Twist"],
    "stampData": [
      "PctDmg",
      "decay",
      "6",
      "40",
      "4",
      "Copper Bar",
      "15",
      "6",
      "50",
      "1.3",
      "0",
      "{}% Total Damage",
      "3"
    ]
  },
  "StampA5": {
    "displayName": "Target Stamp",
    "sellPrice": "250",
    "typeGen": "aStamp",
    "ID": "5",
    "Type": "Combat Stamp",
    "sources": ["Blunder Hills Vendor"],
    "stampData": [
      "BaseAcc",
      "add",
      "1",
      "0",
      "5",
      "Thread",
      "25",
      "6",
      "50",
      "1.3",
      "0",
      "{} Base Accuracy",
      "3"
    ],
    "shopData": [
      {
        "vendor": "Blunder Hills",
        "quantity": "1",
        "no": 15
      }
    ]
  },
  "StampA6": {
    "displayName": "Shield Stamp",
    "sellPrice": "800",
    "typeGen": "aStamp",
    "ID": "6",
    "Type": "Combat Stamp",
    "sources": ["Blunder Hills Vendor"],
    "stampData": [
      "BaseDef",
      "add",
      "1",
      "0",
      "5",
      "Iron Ore",
      "50",
      "7",
      "50",
      "1.3",
      "0",
      "{} Base Defence",
      "3"
    ],
    "shopData": [
      {
        "vendor": "Blunder Hills",
        "quantity": "1",
        "no": 16
      }
    ]
  },
  "StampA7": {
    "displayName": "Longsword Stamp",
    "sellPrice": "1000",
    "typeGen": "aStamp",
    "ID": "7",
    "Type": "Combat Stamp",
    "sources": ["Baby Boa"],
    "detdrops": [["Baby Boa", "0.00005", "1"]],
    "uses": [["Stamp Collecting", "3", "Quests"]],
    "stampData": [
      "BaseDmg",
      "add",
      "2",
      "0",
      "4",
      "Bean Slices",
      "50",
      "6",
      "50",
      "1.3",
      "0",
      "{} Base Damage",
      "6"
    ]
  },
  "StampA8": {
    "displayName": "Kapow Stamp",
    "sellPrice": "2500",
    "typeGen": "aStamp",
    "ID": "8",
    "Type": "Combat Stamp",
    "sources": ["Gigafrog"],
    "detdrops": [["Gigafrog", "0.0003", "1"]],
    "uses": [["Oinko Boinko", "1", "Quests"]],
    "stampData": [
      "CritDmg",
      "decay",
      "8",
      "40",
      "3",
      "Trusty Nails",
      "50",
      "6",
      "50",
      "1.3",
      "0",
      "{}% Critical Damage",
      "6"
    ]
  },
  "StampA9": {
    "displayName": "Fist Stamp",
    "sellPrice": "2500",
    "typeGen": "aStamp",
    "ID": "9",
    "Type": "Combat Stamp",
    "sources": ["Beatboxing Starterpack"],
    "stampData": [
      "BaseSTR",
      "add",
      "1",
      "0",
      "2",
      "Bleach Logs",
      "50",
      "7",
      "50",
      "1.3",
      "0",
      "{} STR",
      "3"
    ]
  },
  "StampA10": {
    "displayName": "Battleaxe Stamp",
    "sellPrice": "2500",
    "typeGen": "aStamp",
    "ID": "10",
    "Type": "Combat Stamp",
    "sources": ["Gigafrog"],
    "detdrops": [["Gigafrog", "0.00003", "1"]],
    "stampData": [
      "PctDmg",
      "decay",
      "10",
      "40",
      "4",
      "Grass Leaf",
      "25",
      "4",
      "50",
      "1.3",
      "0",
      "{}% Total Damage",
      "5"
    ]
  },
  "StampA11": {
    "displayName": "Agile Stamp",
    "sellPrice": "2500",
    "typeGen": "aStamp",
    "ID": "11",
    "Type": "Combat Stamp",
    "sources": ["DropTable12"],
    "detdrops": [
      ["Crystal Crabal", "0.0001", "1.0"],
      ["Catching Flies", "0.000003", "1.0"],
      ["Catching Butterflies", "0.000003", "1.0"],
      ["Catching Sentient Cereal", "0.000003", "1.0"],
      ["Catching Fruitflies", "0.000003", "1.0"]
    ],
    "stampData": [
      "BaseAGI",
      "add",
      "1",
      "0",
      "2",
      "Copper Chopper",
      "1",
      "4",
      "50",
      "1.3",
      "0",
      "{} AGI",
      "0"
    ]
  },
  "StampA12": {
    "displayName": "Vitality Stamp",
    "sellPrice": "8000",
    "typeGen": "aStamp",
    "ID": "12",
    "Type": "Combat Stamp",
    "sources": ["Encroaching Forest Villas Vendor"],
    "stampData": [
      "BaseHP",
      "add",
      "2",
      "0",
      "4",
      "Snake Skin",
      "25",
      "6",
      "50",
      "1.3",
      "0",
      "{} Base HP",
      "6"
    ],
    "shopData": [
      {
        "vendor": "Encroaching Forest Villas",
        "quantity": "1",
        "no": 6
      }
    ]
  },
  "StampA13": {
    "displayName": "Book Stamp",
    "sellPrice": "8000",
    "typeGen": "aStamp",
    "ID": "13",
    "Type": "Combat Stamp",
    "sources": ["DropTable4"],
    "detdrops": [
      ["Crystal Carrot", "0.00008999999999999999", "1.0"],
      ["Mining Copper", "0.0000009749999999999998", "1.0"],
      ["Mining Iron", "0.00000105", "1.0"],
      ["Mining Gold", "0.0000011249999999999998", "1.0"],
      ["Mining Plat", "0.000001155", "1.0"],
      ["Mining Dementia", "0.00000123", "1.0"],
      ["Mining Void", "0.0000013499999999999998", "2.0"],
      ["Mining Lustre", "0.000001425", "2.0"]
    ],
    "stampData": [
      "BaseWIS",
      "add",
      "1",
      "0",
      "2",
      "Iron Bar",
      "20",
      "5",
      "50",
      "1.35",
      "0",
      "{} WIS",
      "3"
    ]
  },
  "StampA14": {
    "displayName": "Manamoar Stamp",
    "sellPrice": "8000",
    "typeGen": "aStamp",
    "ID": "14",
    "Type": "Combat Stamp",
    "sources": ["Clout Chasin'"],
    "stampData": [
      "BaseMP",
      "add",
      "2",
      "0",
      "3",
      "Glublin Ear",
      "25",
      "6",
      "75",
      "1.32",
      "0",
      "{} Base MP",
      "2"
    ]
  },
  "StampA15": {
    "displayName": "Clover Stamp",
    "sellPrice": "12000",
    "typeGen": "aStamp",
    "ID": "15",
    "Type": "Combat Stamp",
    "sources": ["Faraway Piers Vendor"],
    "stampData": [
      "BaseLUK",
      "add",
      "1",
      "0",
      "2",
      "Iron Platebody",
      "1",
      "2",
      "300",
      "1.38",
      "0",
      "{} LUK",
      "6"
    ],
    "shopData": [
      {
        "vendor": "Faraway Piers",
        "quantity": "1",
        "no": 10
      }
    ]
  },
  "StampA16": {
    "displayName": "Scimitar Stamp",
    "sellPrice": "4000",
    "typeGen": "aStamp",
    "ID": "16",
    "Type": "Combat Stamp",
    "sources": ["Cross Platform Promotion"],
    "stampData": [
      "BaseDmg",
      "add",
      "3",
      "0",
      "4",
      "Goldfish",
      "75",
      "7",
      "2000",
      "1.33",
      "0",
      "{} Base Damage",
      "0"
    ]
  },
  "StampA17": {
    "displayName": "Bullseye Stamp",
    "sellPrice": "12500",
    "typeGen": "aStamp",
    "ID": "17",
    "Type": "Combat Stamp",
    "sources": ["7 Figure Followers"],
    "stampData": [
      "BaseAcc",
      "add",
      "2",
      "0",
      "5",
      "Sentient Cereal",
      "100",
      "10",
      "5000",
      "1.36",
      "0",
      "{} Base Accuracy",
      "0"
    ]
  },
  "StampA18": {
    "displayName": "Feather Stamp",
    "sellPrice": "6000",
    "typeGen": "aStamp",
    "ID": "18",
    "Type": "Combat Stamp",
    "sources": ["Gravity VS Salt"],
    "stampData": [
      "PctMoveSpd",
      "decay",
      "5",
      "50",
      "5",
      "Coconotnotto",
      "25",
      "6",
      "2500",
      "1.3",
      "0",
      "{} Base Move Speed",
      "0"
    ]
  },
  "StampA19": {
    "displayName": "Polearm Stamp",
    "sellPrice": "7500",
    "typeGen": "aStamp",
    "ID": "19",
    "Type": "Combat Stamp",
    "sources": ["This Little Piggy Felt Remorse"],
    "stampData": [
      "PctDmg",
      "decay",
      "16",
      "40",
      "6",
      "Steel Axe",
      "1",
      "2",
      "3000",
      "1.3",
      "0",
      "{}% Total Damage",
      "0"
    ]
  },
  "StampA20": {
    "displayName": "Violence Stamp",
    "sellPrice": "25000",
    "typeGen": "aStamp",
    "ID": "20",
    "Type": "Combat Stamp",
    "sources": ["DropTable15"],
    "detdrops": [
      ["Crystal Cattle", "0.000075", "1.0"],
      ["Bloque", "0.00000037499999999999996", "1.0"],
      ["Mamooth", "0.000000405", "1.0"],
      ["Snowman", "0.0000004349999999999999", "1.0"],
      ["Penguin", "0.00000046499999999999994", "1.0"],
      ["Thermister", "0.0000004949999999999999", "1.0"],
      ["Chillsnap Silver Chest", "0.00015", "1.0"]
    ],
    "stampData": [
      "BaseSTR",
      "add",
      "1",
      "0",
      "3",
      "Dementia Ore",
      "10",
      "7",
      "10000",
      "1.3",
      "0",
      "{} STR",
      "0"
    ]
  },
  "StampA21": {
    "displayName": "Buckler Stamp",
    "sellPrice": "12000",
    "typeGen": "aStamp",
    "ID": "21",
    "Type": "Combat Stamp",
    "sources": ["A Salty Fall"],
    "stampData": [
      "BaseDef",
      "add",
      "1",
      "0",
      "7",
      "Platinum Bar",
      "25",
      "6",
      "2200",
      "1.305",
      "0",
      "{} Base Defence",
      "0"
    ]
  },
  "StampA23": {
    "displayName": "Sukka Foo",
    "sellPrice": "10000",
    "typeGen": "aStamp",
    "ID": "23",
    "Type": "Combat Stamp",
    "sources": ["[[Alchemy#Level up Gift|Level up Gift]]"],
    "stampData": [
      "BossDmg",
      "decay",
      "24",
      "60",
      "10",
      "Amarok Slab",
      "3",
      "5",
      "10000",
      "1.34",
      "0",
      "{}% Boss Damage",
      "0"
    ]
  },
  "StampA24": {
    "displayName": "Arcane Stamp",
    "sellPrice": "6000",
    "typeGen": "aStamp",
    "ID": "24",
    "Type": "Combat Stamp",
    "sources": ["Platforms in Disguise, Platsformers!"],
    "stampData": [
      "BaseWIS",
      "add",
      "1",
      "0",
      "3",
      "Gold Bar",
      "50",
      "7",
      "1550",
      "1.36",
      "0",
      "{} Base WIS",
      "0"
    ]
  },
  "StampA26": {
    "displayName": "Steve Sword",
    "sellPrice": "50000",
    "typeGen": "aStamp",
    "ID": "26",
    "Type": "Combat Stamp",
    "sources": ["7 Figure Followers"],
    "stampData": [
      "PctDmg",
      "decay",
      "20",
      "60",
      "10",
      "Fruitfly",
      "150",
      "5",
      "10000",
      "1.32",
      "0",
      "{}% Total Damage",
      "0"
    ]
  },
  "StampA27": {
    "displayName": "Blover Stamp",
    "sellPrice": "12500",
    "typeGen": "aStamp",
    "ID": "27",
    "Type": "Combat Stamp",
    "sources": ["DropTable16"],
    "detdrops": [
      ["Crystal Cattle", "0.000032000000000000005", "1.0"],
      ["Dedotated Ram", "0.000000272", "1.0"],
      ["Quenchie", "0.00000020000000000000002", "1.0"],
      ["Cryosnake", "0.00000022400000000000002", "1.0"],
      ["Bop Box", "0.00000024000000000000003", "1.0"],
      ["Neyeptune", "0.000000256", "1.0"],
      ["Bloodbone", "0.00000040000000000000003", "1.0"],
      ["Chillsnap Golden Chest", "0.00008", "1.0"]
    ],
    "stampData": [
      "BaseLUK",
      "add",
      "1",
      "0",
      "4",
      "Jellyfish",
      "100",
      "7",
      "25000",
      "1.39",
      "0",
      "{} Base LUK",
      "0"
    ]
  },
  "StampA28": {
    "displayName": "Stat Graph Stamp",
    "sellPrice": "10000",
    "typeGen": "aStamp",
    "ID": "28",
    "Type": "Combat Stamp",
    "sources": ["Ok, NOW it's Peak Gaming!"],
    "stampData": [
      "BaseAllStat",
      "add",
      "1",
      "0",
      "2",
      "Mystery Upgrade Stone I",
      "2",
      "2",
      "2000",
      "1.36",
      "0",
      "{} All Stats",
      "0"
    ]
  },
  "StampB1": {
    "displayName": "Pickaxe Stamp",
    "sellPrice": "500",
    "typeGen": "aStamp",
    "ID": "1",
    "Type": "Skills Stamp",
    "sources": ["Start"],
    "stampData": [
      "BaseMinEff",
      "add",
      "1",
      "0",
      "10",
      "Oak Logs",
      "25",
      "7",
      "50",
      "1.3",
      "1",
      "{} Mining Efficiency",
      "0"
    ]
  },
  "StampB2": {
    "displayName": "Hatchet Stamp",
    "sellPrice": "1200",
    "typeGen": "aStamp",
    "ID": "2",
    "Type": "Skills Stamp",
    "sources": ["Start"],
    "stampData": [
      "BaseChopEff",
      "add",
      "1",
      "0",
      "10",
      "Thread",
      "25",
      "6",
      "50",
      "1.3",
      "3",
      "{} Choppin Efficiency",
      "0"
    ]
  },
  "StampB3": {
    "displayName": "Anvil Zoomer Stamp",
    "sellPrice": "800",
    "typeGen": "aStamp",
    "ID": "3",
    "Type": "Skills Stamp",
    "sources": ["DropTable1"],
    "detdrops": [
      ["Crystal Carrot", "0.0007199999999999999", "1.0"],
      ["Green Mushroom", "0.0000036", "1.0"],
      ["Frog", "0.0000045599999999999995", "1.0"],
      ["Bored Bean", "0.000005399999999999999", "1.0"],
      ["Red Mushroom", "0.0000062399999999999995", "1.0"],
      ["Amarok", "0.0012", "2.0"],
      ["Chaotic Amarok", "0.0012", "4.0"],
      ["Nightmare Amarok", "0.0012", "2.0"],
      ["Baba Yaga", "0.0012", "2.0"],
      ["Dewdrop Bronze Chest", "0.0012", "1.0"]
    ],
    "stampData": [
      "AnvilPAspd",
      "add",
      "1",
      "0",
      "5",
      "Copper Ore",
      "25",
      "6",
      "50",
      "1.3",
      "2",
      "{}% Anvil Production Spd",
      "0"
    ]
  },
  "StampB4": {
    "displayName": "Lil' Mining Baggy Stamp",
    "sellPrice": "1000",
    "typeGen": "aStamp",
    "ID": "4",
    "Type": "Skills Stamp",
    "sources": ["Peak Gaming"],
    "stampData": [
      "MinCap",
      "add",
      "1",
      "0",
      "10",
      "Jungle Logs",
      "25",
      "6",
      "50",
      "1.3",
      "1",
      "{} Mining Carry Cap",
      "0"
    ]
  },
  "StampB5": {
    "displayName": "Twin Ores Stamp",
    "sellPrice": "1000",
    "typeGen": "aStamp",
    "ID": "5",
    "Type": "Skills Stamp",
    "sources": ["Sheepie"],
    "detdrops": [["Sheepie", "0.00008", "1"]],
    "stampData": [
      "DoubleMin",
      "decay",
      "15",
      "40",
      "5",
      "Thief Hood",
      "1",
      "3",
      "10000",
      "1.3",
      "1",
      "{}% Multi Ore Chance",
      "0"
    ]
  },
  "StampB6": {
    "displayName": "Choppin' Bag Stamp",
    "sellPrice": "1000",
    "typeGen": "aStamp",
    "ID": "6",
    "Type": "Skills Stamp",
    "sources": ["Should We Tell Him?"],
    "stampData": [
      "ChopCap",
      "add",
      "1",
      "0",
      "10",
      "Carrot Cube",
      "25",
      "6",
      "50",
      "1.3",
      "3",
      "{} Choppin Carry Cap",
      "0"
    ]
  },
  "StampB7": {
    "displayName": "Duplogs Stamp",
    "sellPrice": "1000",
    "typeGen": "aStamp",
    "ID": "7",
    "Type": "Skills Stamp",
    "sources": ["Frost Flake"],
    "detdrops": [["Frost Flake", "0.00006", "1"]],
    "stampData": [
      "DoubleChop",
      "decay",
      "15",
      "40",
      "5",
      "Militia Helm",
      "1",
      "3",
      "20000",
      "1.3",
      "3",
      "{}% Multi Log Chance",
      "0"
    ]
  },
  "StampB8": {
    "displayName": "Matty Bag Stamp",
    "sellPrice": "6700",
    "typeGen": "aStamp",
    "ID": "8",
    "Type": "Skills Stamp",
    "sources": ["Faraway Piers Vendor"],
    "stampData": [
      "MatCap",
      "add",
      "1",
      "0",
      "10",
      "Cramped Material Pouch",
      "1",
      "2",
      "50",
      "1.3",
      "2",
      "{} Material Carry Cap",
      "0"
    ],
    "shopData": [
      {
        "vendor": "Faraway Piers",
        "quantity": "1",
        "no": 9
      }
    ]
  },
  "StampB9": {
    "displayName": "Smart Dirt Stamp",
    "sellPrice": "1500",
    "typeGen": "aStamp",
    "ID": "9",
    "Type": "Skills Stamp",
    "sources": ["DropTable5"],
    "detdrops": [
      ["Crystal Carrot", "0.00075", "1.0"],
      ["Choppin Oak Tree", "0.000012", "1.0"],
      ["Choppin Birch Tree", "0.000012750000000000002", "1.0"],
      ["Choppin Jungle Tree", "0.0000135", "1.0"],
      ["Choppin Forest Tree", "0.00001425", "1.0"],
      ["Choppin Toilet Tree", "0.0000159", "1.0"],
      ["Choppin Stump Tree", "0.000015300000000000003", "1.0"]
    ],
    "uses": [["Stamp Collecting", "2", "Quests"]],
    "stampData": [
      "MinExp",
      "add",
      "1",
      "0",
      "5",
      "Plank",
      "25",
      "6",
      "80",
      "1.35",
      "1",
      "{}% Mining Exp",
      "0"
    ]
  },
  "StampB10": {
    "displayName": "Cool Diggy Tool Stamp",
    "sellPrice": "1000",
    "typeGen": "aStamp",
    "ID": "10",
    "Type": "Skills Stamp",
    "sources": ["Snowman"],
    "detdrops": [["Snowman", "0.000025", "1"]],
    "stampData": [
      "BaseMinEff",
      "add",
      "2",
      "0",
      "10",
      "Iron Hatchet",
      "1",
      "2",
      "35000",
      "1.4",
      "t1",
      "{} Mining Efficiency",
      "0"
    ]
  },
  "StampB11": {
    "displayName": "High IQ Lumber Stamp",
    "sellPrice": "1800",
    "typeGen": "aStamp",
    "ID": "11",
    "Type": "Skills Stamp",
    "sources": ["DropTable4"],
    "detdrops": [
      ["Crystal Carrot", "0.00054", "1.0"],
      ["Mining Copper", "0.00000585", "1.0"],
      ["Mining Iron", "0.0000063", "1.0"],
      ["Mining Gold", "0.00000675", "1.0"],
      ["Mining Plat", "0.00000693", "1.0"],
      ["Mining Dementia", "0.0000073800000000000005", "1.0"],
      ["Mining Void", "0.000008099999999999999", "2.0"],
      ["Mining Lustre", "0.00000855", "2.0"]
    ],
    "stampData": [
      "ChopExp",
      "add",
      "1",
      "0",
      "5",
      "Bullfrog Horn",
      "25",
      "6",
      "80",
      "1.35",
      "3",
      "{}% Choppin Exp",
      "0"
    ]
  },
  "StampB12": {
    "displayName": "Swag Swingy Tool Stamp",
    "sellPrice": "2500",
    "typeGen": "aStamp",
    "ID": "12",
    "Type": "Skills Stamp",
    "sources": ["Thermister"],
    "detdrops": [["Thermister", "0.00001", "1"]],
    "stampData": [
      "BaseChopEff",
      "add",
      "2",
      "0",
      "10",
      "Copper Pickaxe",
      "1",
      "2",
      "50000",
      "1.36",
      "3",
      "{} Choppin Efficiency",
      "0"
    ]
  },
  "StampB13": {
    "displayName": "Alch Go Brrr Stamp",
    "sellPrice": "2000",
    "typeGen": "aStamp",
    "ID": "13",
    "Type": "Skills Stamp",
    "sources": ["DropTable11"],
    "detdrops": [["Choppin Palm Tree", "0.000004499999999999999", "2.0"]],
    "stampData": [
      "AlchSpd",
      "add",
      "1",
      "0",
      "4",
      "Forest Fibres",
      "40",
      "6",
      "800",
      "1.29",
      "-1",
      "{}% Alch Speed",
      "0"
    ]
  },
  "StampB14": {
    "displayName": "Brainstew Stamps",
    "sellPrice": "2500",
    "typeGen": "aStamp",
    "ID": "14",
    "Type": "Skills Stamp",
    "sources": ["Platforms in Disguise, Platsformers!"],
    "stampData": [
      "AlchExp",
      "add",
      "1",
      "0",
      "5",
      "Gold Ore",
      "40",
      "6",
      "1250",
      "1.28",
      "5",
      "{}% Alch Exp",
      "0"
    ]
  },
  "StampB15": {
    "displayName": "Drippy Drop Stamp",
    "sellPrice": "2000",
    "typeGen": "aStamp",
    "ID": "15",
    "Type": "Skills Stamp",
    "sources": ["DropTable6"],
    "detdrops": [
      ["Crystal Crabal", "0.00035999999999999997", "1.0"],
      ["Sandy Pot", "0.0000018", "1.0"],
      ["Mimic", "0.00000192", "1.0"],
      ["Crabcake", "0.0000021599999999999996", "1.0"],
      ["Efaunt", "0.0006", "2.0"],
      ["Nightmare Amarok", "0.0006", "2.0"],
      ["Chizoar", "0.0006", "2.0"],
      ["Nightmare Chizoar", "0.0006", "2.0"],
      ["Biggie Hours", "0.0003", "1.0"],
      ["Sandstone Bronze Chest", "0.0006", "1.0"]
    ],
    "stampData": [
      "LiquidSpd",
      "add",
      "1",
      "0",
      "5",
      "Pocket Sand",
      "60",
      "6",
      "1000",
      "1.3",
      "-1",
      "{}% Liquid Spd",
      "0"
    ]
  },
  "StampB16": {
    "displayName": "Droplots Stamp",
    "sellPrice": "5000",
    "typeGen": "aStamp",
    "ID": "16",
    "Type": "Skills Stamp",
    "sources": ["DropTable7"],
    "detdrops": [
      ["Crystal Crabal", "0.0002", "1.0"],
      ["Mafioso", "0.00000128", "1.0"],
      ["Sand Castle", "0.0000014000000000000001", "1.0"],
      ["Pincermin", "0.0000014800000000000002", "1.0"],
      ["Mashed Potato", "0.00000156", "1.0"],
      ["Dig Doug", "0.00000128", "1.0"],
      ["Efaunt", "0.0004", "2.0"],
      ["Chaotic Efaunt", "0.0004", "2.0"],
      ["Nightmare Amarok", "0.0004", "2.0"],
      ["Chizoar", "0.0004", "2.0"],
      ["Chaotic Chizoar", "0.0004", "2.0"],
      ["Nightmare Chizoar", "0.0004", "2.0"],
      ["Sandstone Silver Chest", "0.0004", "1.0"]
    ],
    "stampData": [
      "LiquidCap",
      "add",
      "1",
      "0",
      "2",
      "Bloach",
      "25",
      "4",
      "2500",
      "1.3",
      "-1",
      "{} Liquid Cap",
      "0"
    ]
  },
  "StampB17": {
    "displayName": "Fishing Rod Stamp",
    "sellPrice": "2000",
    "typeGen": "aStamp",
    "ID": "17",
    "Type": "Skills Stamp",
    "sources": ["'Accidental' Exploit"],
    "stampData": [
      "BaseFishEff",
      "add",
      "2",
      "0",
      "5",
      "Fly",
      "50",
      "6",
      "1000",
      "1.32",
      "4",
      "{} Fishing Efficiency",
      "0"
    ]
  },
  "StampB18": {
    "displayName": "Fishhead Stamp",
    "sellPrice": "3000",
    "typeGen": "aStamp",
    "ID": "18",
    "Type": "Skills Stamp",
    "sources": ["Wait No, I meant Pathetic Gaming"],
    "stampData": [
      "FishExp",
      "add",
      "1",
      "0",
      "5",
      "Megalodon Tooth",
      "55",
      "9",
      "1500",
      "1.33",
      "4",
      "{}% Fishing Exp",
      "0"
    ]
  },
  "StampB19": {
    "displayName": "Catch Net Stamp",
    "sellPrice": "2000",
    "typeGen": "aStamp",
    "ID": "19",
    "Type": "Skills Stamp",
    "sources": ["Peak Gaming"],
    "stampData": [
      "BaseCatchEff",
      "add",
      "2",
      "0",
      "5",
      "Goldfish",
      "50",
      "6",
      "1000",
      "1.3",
      "6",
      "{} Catching Efficiency",
      "0"
    ]
  },
  "StampB20": {
    "displayName": "Fly Intel Stamp",
    "sellPrice": "3000",
    "typeGen": "aStamp",
    "ID": "20",
    "Type": "Skills Stamp",
    "sources": ["Findin' Fingerprints"],
    "stampData": [
      "CatchExp",
      "add",
      "1",
      "0",
      "5",
      "Crabby Cakey",
      "40",
      "10",
      "1500",
      "1.33",
      "6",
      "{}% Catching Exp",
      "0"
    ]
  },
  "StampB21": {
    "displayName": "Bag o Heads Stamp",
    "sellPrice": "2000",
    "typeGen": "aStamp",
    "ID": "21",
    "Type": "Skills Stamp",
    "sources": ["DropTable12"],
    "detdrops": [
      ["Crystal Crabal", "0.00005", "1.0"],
      ["Catching Flies", "0.0000015", "1.0"],
      ["Catching Butterflies", "0.0000015", "1.0"],
      ["Catching Sentient Cereal", "0.0000015", "1.0"],
      ["Catching Fruitflies", "0.0000015", "1.0"]
    ],
    "stampData": [
      "FishCap",
      "add",
      "1",
      "0",
      "8",
      "Butterfly",
      "35",
      "7",
      "1000",
      "1.3",
      "4",
      "{}% Fish Carry Cap",
      "0"
    ]
  },
  "StampB22": {
    "displayName": "Holy Mackerel Stamp",
    "sellPrice": "3000",
    "typeGen": "aStamp",
    "ID": "22",
    "Type": "Skills Stamp",
    "sources": ["Findin' Fingerprints"],
    "stampData": [
      "DoubleFish",
      "decay",
      "20",
      "40",
      "5",
      "Platinum Ore",
      "30",
      "6",
      "1500",
      "1.3",
      "4",
      "{}% Multifish Chance",
      "0"
    ]
  },
  "StampB23": {
    "displayName": "Bugsack Stamp",
    "sellPrice": "3000",
    "typeGen": "aStamp",
    "ID": "23",
    "Type": "Skills Stamp",
    "sources": ["DropTable9"],
    "detdrops": [
      ["Crystal Crabal", "0.0006", "1.0"],
      ["Fishing Small Fish", "0.000012", "1.0"],
      ["Fishing Goldfish", "0.000012", "1.0"],
      ["Fishing Hermit Can", "0.000012", "1.0"],
      ["Fishing Jellyfish", "0.000012", "1.0"],
      ["Fishing Bloach", "0.000012", "1.0"]
    ],
    "stampData": [
      "CatchCap",
      "add",
      "1",
      "0",
      "8",
      "Hermit Can",
      "35",
      "7",
      "1000",
      "1.3",
      "6",
      "{}% Bug Carry Cap",
      "0"
    ]
  },
  "StampB24": {
    "displayName": "Buzz Buzz Stamp",
    "sellPrice": "4000",
    "typeGen": "aStamp",
    "ID": "24",
    "Type": "Skills Stamp",
    "sources": ["DropTable8"],
    "detdrops": [
      ["Crystal Crabal", "0.000059999999999999995", "1.0"],
      ["Tyson", "0.00000048", "1.0"],
      ["Moonmoon", "0.000000525", "1.0"],
      ["Sand Giant", "0.000000555", "1.0"],
      ["Snelbie", "0.0000005849999999999999", "1.0"],
      ["Efaunt", "0.00015", "2.0"],
      ["Chaotic Efaunt", "0.00015", "2.0"],
      ["Nightmare Amarok", "0.00015", "2.0"],
      ["Chizoar", "0.00015", "2.0"],
      ["Chaotic Chizoar", "0.00015", "2.0"],
      ["Nightmare Chizoar", "0.00015", "2.0"],
      ["Sandstone Golden Chest", "0.00015", "1.0"]
    ],
    "stampData": [
      "DoubleCatch",
      "decay",
      "20",
      "40",
      "5",
      "Potty Rolls",
      "45",
      "6",
      "1500",
      "1.3",
      "6",
      "{}% Multibug Chance",
      "0"
    ]
  },
  "StampB25": {
    "displayName": "Hidey Box Stamp",
    "sellPrice": "4000",
    "typeGen": "aStamp",
    "ID": "25",
    "Type": "Skills Stamp",
    "sources": ["DropTable17"],
    "detdrops": [
      ["Crystal Cattle", "0.0007199999999999999", "1.0"],
      ["Choppin Saharan Foal", "0.00001068", "1.0"],
      ["Choppin Wispy Tree", "0.00001068", "1.0"]
    ],
    "stampData": [
      "TrappingEff",
      "add",
      "2",
      "0",
      "10",
      "Crabbo",
      "100",
      "5",
      "7500",
      "1.3",
      "7",
      "{} Trapping Efficiency",
      "0"
    ]
  },
  "StampB26": {
    "displayName": "Purp Froge Stamp",
    "sellPrice": "4000",
    "typeGen": "aStamp",
    "ID": "26",
    "Type": "Skills Stamp",
    "sources": ["Gravity VS Salt"],
    "stampData": [
      "ShinyChance",
      "add",
      "1",
      "0",
      "5",
      "Scorpie",
      "125",
      "6",
      "10000",
      "1.3",
      "7",
      "{}% Shiny Chance",
      "0"
    ]
  },
  "StampB27": {
    "displayName": "Spikemouth Stamp",
    "sellPrice": "4000",
    "typeGen": "aStamp",
    "ID": "27",
    "Type": "Skills Stamp",
    "sources": ["DropTable18"],
    "detdrops": [
      ["Crystal Cattle", "0.0006", "1.0"],
      ["Catching Mosquisnow", "0.000017999999999999997", "1.0"],
      ["Catching Flycicle", "0.000017999999999999997", "1.0"]
    ],
    "stampData": [
      "TrappingExp",
      "add",
      "1",
      "0",
      "3",
      "Mousey",
      "150",
      "6",
      "12500",
      "1.3",
      "7",
      "{}% Trapping Exp",
      "0"
    ]
  },
  "StampB28": {
    "displayName": "Shiny Crab Stamp",
    "sellPrice": "4000",
    "typeGen": "aStamp",
    "ID": "28",
    "Type": "Skills Stamp",
    "stampData": [
      "ShinyChance",
      "add",
      "2",
      "0",
      "3",
      "Owlio",
      "200",
      "7",
      "15000",
      "1.3",
      "7",
      "{}% Shiny Chance",
      "0"
    ]
  },
  "StampB29": {
    "displayName": "Gear Stamp",
    "sellPrice": "4000",
    "typeGen": "aStamp",
    "ID": "29",
    "Type": "Skills Stamp",
    "stampData": [
      "BuildProd",
      "add",
      "1",
      "0",
      "3",
      "Sticky Stick",
      "100",
      "5",
      "10000",
      "1.3",
      "8",
      "{}% Building Spd",
      "0"
    ]
  },
  "StampB30": {
    "displayName": "Stample Stamp",
    "sellPrice": "4000",
    "typeGen": "aStamp",
    "ID": "30",
    "Type": "Skills Stamp",
    "sources": ["DropTable14"],
    "detdrops": [
      ["Crystal Cattle", "0.0006", "1.0"],
      ["Sheepie", "0.0000025", "1.0"],
      ["Frost Flake", "0.0000028", "1.0"],
      ["Sir Stache", "0.0000031", "1.0"],
      ["Xylobone", "0.00001", "1.0"],
      ["Chillsnap Bronze Chest", "0.001", "1.0"]
    ],
    "stampData": [
      "SampleRate",
      "decay",
      "4",
      "30",
      "4",
      "Floof Ploof",
      "100",
      "6",
      "10000",
      "1.3",
      "0",
      "{}% Sample Size",
      "0"
    ]
  },
  "StampB31": {
    "displayName": "Saw Stamp",
    "sellPrice": "4000",
    "typeGen": "aStamp",
    "ID": "31",
    "Type": "Skills Stamp",
    "sources": ["SuperDropTable3"],
    "detdrops": [
      ["Crystal Cattle", "0.000054", "1.0"],
      ["Sheepie", "0.000000225", "1.0"],
      ["Frost Flake", "0.00000025200000000000003", "1.0"],
      ["Sir Stache", "0.00000027899999999999994", "1.0"],
      ["Xylobone", "0.0000009", "1.0"],
      ["Chillsnap Bronze Chest", "0.00008999999999999999", "1.0"],
      ["Bloque", "0.000000225", "1.0"],
      ["Mamooth", "0.000000243", "1.0"],
      ["Snowman", "0.00000026099999999999997", "1.0"],
      ["Penguin", "0.00000027899999999999994", "1.0"],
      ["Thermister", "0.00000029699999999999997", "1.0"],
      ["Chillsnap Silver Chest", "0.00008999999999999999", "1.0"],
      ["Dedotated Ram", "0.00000030599999999999996", "1.0"],
      ["Quenchie", "0.000000225", "1.0"],
      ["Cryosnake", "0.00000025200000000000003", "1.0"],
      ["Bop Box", "0.00000027", "1.0"],
      ["Neyeptune", "0.00000028800000000000004", "1.0"],
      ["Bloodbone", "0.00000045", "1.0"],
      ["Chillsnap Golden Chest", "0.00008999999999999999", "1.0"],
      ["Choppin Saharan Foal", "0.000000801", "1.0"],
      ["Choppin Wispy Tree", "0.000000801", "1.0"],
      ["Catching Mosquisnow", "0.0000013499999999999998", "1.0"],
      ["Catching Flycicle", "0.0000013499999999999998", "1.0"]
    ],
    "stampData": [
      "ConstructionExp",
      "add",
      "1",
      "0",
      "3",
      "Dementia Bar",
      "20",
      "5",
      "15000",
      "1.3",
      "8",
      "{}% Construction Exp",
      "0"
    ]
  },
  "StampB32": {
    "displayName": "Amplestample Stamp",
    "sellPrice": "4000",
    "typeGen": "aStamp",
    "ID": "32",
    "Type": "Skills Stamp",
    "stampData": [
      "SampleRate",
      "decay",
      "5",
      "30",
      "4",
      "Mosquisnow",
      "200",
      "11",
      "25000",
      "1.3",
      "0",
      "{}% Sample Size",
      "0"
    ]
  },
  "StampB33": {
    "displayName": "SpoOoky Stamp",
    "sellPrice": "4000",
    "typeGen": "aStamp",
    "ID": "33",
    "Type": "Skills Stamp",
    "stampData": [
      "WorshipEff",
      "add",
      "2",
      "0",
      "10",
      "Forest Soul",
      "45",
      "6",
      "7500",
      "1.3",
      "9",
      "{} Worship Efficiency",
      "0"
    ]
  },
  "StampB34": {
    "displayName": "Flowin Stamp",
    "sellPrice": "4000",
    "typeGen": "aStamp",
    "ID": "34",
    "Type": "Skills Stamp",
    "sources": ["DropTable16"],
    "detdrops": [
      ["Crystal Cattle", "0.00004", "1.0"],
      ["Dedotated Ram", "0.00000034", "1.0"],
      ["Quenchie", "0.00000025000000000000004", "1.0"],
      ["Cryosnake", "0.00000028", "1.0"],
      ["Bop Box", "0.00000030000000000000004", "1.0"],
      ["Neyeptune", "0.00000032", "1.0"],
      ["Bloodbone", "0.0000005000000000000001", "1.0"],
      ["Chillsnap Golden Chest", "0.0001", "1.0"]
    ],
    "stampData": [
      "WorshipCharge",
      "add",
      "1",
      "0",
      "2",
      "Redox Salts",
      "2",
      "5",
      "15000",
      "1.3",
      "9",
      "{}% Charging Speed",
      "0"
    ]
  },
  "StampB35": {
    "displayName": "Prayday Stamp",
    "sellPrice": "4000",
    "typeGen": "aStamp",
    "ID": "35",
    "Type": "Skills Stamp",
    "stampData": [
      "WorshipMax",
      "add",
      "1",
      "0",
      "2",
      "Cracked Glass",
      "150",
      "6",
      "10000",
      "1.3",
      "9",
      "{}% Max Charge",
      "0"
    ]
  },
  "StampB36": {
    "displayName": "Banked Pts Stamp",
    "sellPrice": "4000",
    "typeGen": "aStamp",
    "ID": "36",
    "Type": "Skills Stamp",
    "sources": ["DropTable14"],
    "detdrops": [
      ["Crystal Cattle", "0.00035999999999999997", "1.0"],
      ["Sheepie", "0.0000014999999999999998", "1.0"],
      ["Frost Flake", "0.0000016799999999999998", "1.0"],
      ["Sir Stache", "0.0000018599999999999998", "1.0"],
      ["Xylobone", "0.000005999999999999999", "1.0"],
      ["Chillsnap Bronze Chest", "0.0006", "1.0"]
    ],
    "stampData": [
      "WorshipPTS",
      "add",
      "1",
      "0",
      "6",
      "Dune Soul",
      "100",
      "3",
      "6000",
      "1.3",
      "9",
      "{} Starting TD Pts",
      "0"
    ]
  },
  "StampC1": {
    "displayName": "Questin Stamp",
    "sellPrice": "1000",
    "typeGen": "aStamp",
    "ID": "1",
    "Type": "Misc Stamp",
    "sources": ["Three Strikes, you're Out!"],
    "stampData": [
      "QuestExp",
      "decay",
      "70",
      "50",
      "10",
      "Slime Sludge",
      "30",
      "6",
      "500",
      "1.32",
      "0",
      "{}% Quest EXP",
      "3"
    ]
  },
  "StampC2": {
    "displayName": "Mason Jar Stamp",
    "sellPrice": "10000",
    "typeGen": "aStamp",
    "ID": "2",
    "Type": "Misc Stamp",
    "sources": ["Wait No, I meant Pathetic Gaming"],
    "stampData": [
      "AllCarryCap",
      "add",
      "1",
      "0",
      "4",
      "Glass Shard",
      "1",
      "3",
      "4000",
      "1.28",
      "0",
      "{}% All Carry Cap",
      "3"
    ]
  },
  "StampC3": {
    "displayName": "Crystallin",
    "sellPrice": "2000",
    "typeGen": "aStamp",
    "ID": "3",
    "Type": "Misc Stamp",
    "sources": ["Crystal Carrot", "Crystal Crabal", "Crystal Cattle"],
    "detdrops": [
      ["Crystal Carrot", ".1", "1"],
      ["Crystal Crabal", ".1", "1"],
      ["Crystal Cattle", ".1", "1"]
    ],
    "uses": [["Crystal Crime Stopper", "1", "Quests"]],
    "stampData": [
      "CrySpawn",
      "decay",
      "110",
      "50",
      "10",
      "Boring Brick",
      "35",
      "8",
      "800",
      "1.31",
      "0",
      "{}% Spawn Chance",
      "3"
    ]
  },
  "StampC5": {
    "displayName": "Apple Stamp",
    "sellPrice": "1000",
    "typeGen": "aStamp",
    "ID": "5",
    "Type": "Misc Stamp",
    "stampData": [
      "HFood",
      "add",
      "1",
      "0",
      "5",
      "Meat Pie",
      "50",
      "5.5",
      "200",
      "1.30",
      "0",
      "{}% HP Food Effect",
      "3"
    ]
  },
  "StampC6": {
    "displayName": "Potion Stamp",
    "sellPrice": "3000",
    "typeGen": "aStamp",
    "ID": "6",
    "Type": "Misc Stamp",
    "sources": ["Stamp Collecting"],
    "stampData": [
      "BFood",
      "add",
      "1",
      "0",
      "5",
      "Icing Ironbite",
      "50",
      "8",
      "1500",
      "1.305",
      "0",
      "{}% Boost Food Effect",
      "3"
    ]
  },
  "StampC7": {
    "displayName": "Golden Apple Stamp",
    "sellPrice": "10000",
    "typeGen": "aStamp",
    "ID": "7",
    "Type": "Misc Stamp",
    "sources": ["7 Figure Followers"],
    "stampData": [
      "GFood",
      "add",
      "1",
      "0",
      "4",
      "Golden Nomwich",
      "2",
      "4",
      "3000",
      "1.30",
      "0",
      "{}% Gold Food Effect",
      "3"
    ]
  },
  "StampC9": {
    "displayName": "Card Stamp",
    "sellPrice": "3000",
    "typeGen": "aStamp",
    "ID": "9",
    "Type": "Misc Stamp",
    "sources": ["[[Alchemy#Level up Gift|Level up Gift]]"],
    "stampData": [
      "CardDrop",
      "add",
      "1",
      "0",
      "10",
      "Furled Flag",
      "25",
      "6",
      "1200",
      "1.31",
      "0",
      "{}% Card Drop Rate",
      "3"
    ]
  },
  "StampC13": {
    "displayName": "Talent I Stamp",
    "sellPrice": "1",
    "typeGen": "aStamp",
    "ID": "13",
    "Type": "Misc Stamp",
    "stampData": [
      "Talent1",
      "add",
      "1",
      "0",
      "2",
      "Frog Leg",
      "25",
      "6",
      "50",
      "1.3",
      "0",
      "{} Talent 1 Pts",
      "3"
    ]
  },
  "StampC14": {
    "displayName": "Talent II Stamp",
    "sellPrice": "12000",
    "typeGen": "aStamp",
    "ID": "14",
    "Type": "Misc Stamp",
    "sources": ["You Can't Run, but you Can Hide"],
    "stampData": [
      "Talent2",
      "add",
      "1",
      "0",
      "2",
      "Pincer Arm",
      "200",
      "8",
      "4000",
      "1.35",
      "0",
      "{} Talent 2 Pts",
      "3"
    ]
  },
  "StampC15": {
    "displayName": "Talent III Stamp",
    "sellPrice": "1",
    "typeGen": "aStamp",
    "ID": "15",
    "Type": "Misc Stamp",
    "sources": ["Big Ol Chonker"],
    "stampData": [
      "Talent3",
      "add",
      "1",
      "0",
      "2",
      "Arctic Leaf",
      "20",
      "4",
      "40000",
      "1.35",
      "0",
      "{} Talent 3 Pts",
      "3"
    ]
  },
  "StampC16": {
    "displayName": "Talent IV Stamp",
    "sellPrice": "1",
    "typeGen": "aStamp",
    "ID": "16",
    "Type": "Misc Stamp",
    "stampData": [
      "Talent4",
      "add",
      "1",
      "0",
      "2",
      "Copper Ore",
      "25",
      "6",
      "50",
      "1.3",
      "0",
      "{} Talent 4 Pts",
      "3"
    ]
  },
  "StampC17": {
    "displayName": "Talent V Stamp",
    "sellPrice": "1",
    "typeGen": "aStamp",
    "ID": "17",
    "Type": "Misc Stamp",
    "stampData": [
      "Talent5",
      "add",
      "1",
      "0",
      "2",
      "Copper Ore",
      "25",
      "6",
      "50",
      "1.3",
      "0",
      "{} Talent 5 Pts",
      "3"
    ]
  },
  "StampC18": {
    "displayName": "Talent S Stamp",
    "sellPrice": "1",
    "typeGen": "aStamp",
    "ID": "18",
    "Type": "Misc Stamp",
    "sources": ["Can you do the Can Can?"],
    "stampData": [
      "TalentS",
      "add",
      "1",
      "0",
      "2",
      "Twisty Leaf",
      "20",
      "4",
      "50",
      "1.3",
      "0",
      "{} Star Talent Pts",
      "3"
    ]
  },
  "StampC19": {
    "displayName": "Multikill Stamp",
    "sellPrice": "1",
    "typeGen": "aStamp",
    "ID": "19",
    "Type": "Misc Stamp",
    "sources": ["DropTable15"],
    "detdrops": [
      ["Crystal Cattle", "0.00015", "1.0"],
      ["Bloque", "0.0000007499999999999999", "1.0"],
      ["Mamooth", "0.00000081", "1.0"],
      ["Snowman", "0.0000008699999999999998", "1.0"],
      ["Penguin", "0.0000009299999999999999", "1.0"],
      ["Thermister", "0.0000009899999999999998", "1.0"],
      ["Chillsnap Silver Chest", "0.0003", "1.0"]
    ],
    "stampData": [
      "Overkill",
      "add",
      "1",
      "0",
      "2",
      "Spore Cap",
      "100",
      "3",
      "10000",
      "1.3",
      "0",
      "{}% Base Overkill",
      "3"
    ]
  },
  "StampC20": {
    "displayName": "Biblio Stamp",
    "sellPrice": "1",
    "typeGen": "aStamp",
    "ID": "20",
    "Type": "Misc Stamp",
    "sources": ["Big Ol Chonker"],
    "stampData": [
      "BookSpd",
      "add",
      "1",
      "0",
      "2",
      "Tundra Logs",
      "125",
      "5",
      "12500",
      "1.3",
      "0",
      "{}% Faster Books",
      "3"
    ]
  },
  "StoneWe": {
    "displayName": "Easter Weapon Stone",
    "sellPrice": "125",
    "typeGen": "dStone",
    "ID": "0",
    "Type": "Upgrade",
    "sources": ["Egggulyte", "Egg Capsule", "Floofie", "Shell Snake"],
    "detdrops": [
      ["Egggulyte", "0.25", "2"],
      ["Egg Capsule", "0.25", "2"],
      ["Floofie", "0.01", "2"],
      ["Shell Snake", "0.01", "2"]
    ],
    "description": [
      "Drag onto any Weapon to apply.",
      "+1 Weapon Power",
      "+2 Defence",
      "Success Chance; 25%",
      "Uses up 1 slots only if Successful"
    ],
    "notes": " "
  },
  "StoneWeb": {
    "displayName": "Summer Weapon Stone",
    "sellPrice": "125",
    "typeGen": "dStone",
    "ID": "0",
    "Type": "Upgrade",
    "sources": ["Summer Spirit", "Mr Blueberry", "Plasti Doug"],
    "detdrops": [
      ["Summer Spirit", "0.02", "1"],
      ["Mr Blueberry", "0.01", "2"],
      ["Plasti Doug", "0.01", "2"]
    ],
    "description": [
      "Drag onto any Weapon to apply.",
      "+1 Random Stat",
      "+3 Defence",
      "Success Chance; 40%",
      "Uses up 1 slots only if Successful"
    ],
    "notes": " "
  },
  "StoneW1": {
    "displayName": "Weapon Upgrade Stone I",
    "sellPrice": "125",
    "typeGen": "dStone",
    "ID": "0",
    "Type": "Upgrade",
    "sources": [
      "Blunder Hills Vendor",
      "Dewdrop Bronze Chest",
      "Simple Shippin",
      "Plan-it Express",
      "Dudes Next Door",
      "DropTable5",
      "[[Alchemy#Liquid Shop|Weak UPG Stone]]"
    ],
    "detdrops": [
      ["Dewdrop Bronze Chest", "0.025", "1"],
      ["Crystal Carrot", "0.015", "1.0"],
      ["Choppin Oak Tree", "0.00024", "1.0"],
      ["Choppin Birch Tree", "0.000255", "1.0"],
      ["Choppin Jungle Tree", "0.00026999999999999995", "1.0"],
      ["Choppin Forest Tree", "0.000285", "1.0"],
      ["Choppin Toilet Tree", "0.000318", "1.0"],
      ["Choppin Stump Tree", "0.000306", "1.0"]
    ],
    "description": [
      "Drag onto any Weapon to apply.",
      "+1 Weapon Power",
      "Success Chance; 100%",
      "Uses up 1 slots only if Successful"
    ],
    "shopData": [
      {
        "vendor": "Blunder Hills",
        "quantity": "3",
        "no": 9
      }
    ],
    "notes": " "
  },
  "StoneW2": {
    "displayName": "Weapon Upgrade Stone II",
    "sellPrice": "1500",
    "typeGen": "dStone",
    "ID": "0",
    "Type": "Upgrade",
    "sources": [
      "YumYum Grotto Vendor",
      "Green Mushroom",
      "Dewdrop Silver Chest",
      "Sandstone Bronze Chest",
      "Plan-it Express",
      "Dudes Next Door",
      "Alchemial Apprentice",
      "DropTable11",
      "[[Guild Giftbox]]"
    ],
    "detdrops": [
      ["Green Mushroom", "0.00005", "1"],
      ["Dewdrop Silver Chest", "0.04", "1"],
      ["Sandstone Bronze Chest", "0.025", "1"],
      ["Choppin Palm Tree", "0.00003", "2.0"]
    ],
    "description": [
      "Drag onto any Weapon to apply.",
      "+1 Weapon Power",
      "+1 Random Stat",
      "Success Chance; 80%",
      "Uses up 1 slots only if Successful"
    ],
    "shopData": [
      {
        "vendor": "YumYum Grotto",
        "quantity": "3",
        "no": 5
      }
    ],
    "notes": " "
  },
  "StoneW3": {
    "displayName": "Weapon Upgrade Stone III",
    "sellPrice": "25000",
    "typeGen": "dStone",
    "ID": "0",
    "Type": "Upgrade",
    "sources": [
      "Frostbite Towndra Vendor",
      "Sandstone Silver Chest",
      "Chillsnap Bronze Chest",
      "Chillsnap Silver Chest",
      "Dudes Next Door"
    ],
    "detdrops": [
      ["Sandstone Silver Chest", "0.04", "1"],
      ["Chillsnap Bronze Chest", "0.025", "1"],
      ["Chillsnap Silver Chest", "0.2", "1"]
    ],
    "description": [
      "Drag onto any Weapon to apply.",
      "+2 Weapon Power",
      "+1 Random Stat",
      "Success Chance; 50%",
      "Uses up 1 slots only if Successful"
    ],
    "shopData": [
      {
        "vendor": "Frostbite Towndra",
        "quantity": "4",
        "no": 5
      }
    ],
    "notes": " "
  },
  "StoneW6": {
    "displayName": "Warped Weapon Upgrade Stone",
    "sellPrice": "25000",
    "typeGen": "dStone",
    "ID": "0",
    "Type": "Upgrade",
    "Cooldown": "1",
    "sources": [
      "Wicked Party Cleanup",
      "Bullets for Bandit Bob!",
      "Criminal Code of Conduct",
      "[[Guild Giftbox]]"
    ],
    "description": [
      "Drag onto any Weapon to apply.",
      "+3 Weapon Power",
      "+4 Random Stat",
      "Success Chance; 50%",
      "Uses up 1 item slots.",
      "WARNING:Slots are used up even",
      "if the Upgrade fails!"
    ],
    "notes": " "
  },
  "StoneAe": {
    "displayName": "Easter Armor Stone",
    "sellPrice": "100",
    "typeGen": "dStone",
    "ID": "1",
    "Type": "Upgrade",
    "sources": ["Egggulyte", "Egg Capsule", "Floofie", "Shell Snake"],
    "detdrops": [
      ["Egggulyte", "0.25", "3"],
      ["Egg Capsule", "0.25", "3"],
      ["Floofie", "0.03", "3"],
      ["Shell Snake", "0.03", "3"]
    ],
    "description": [
      "Drag onto any Armor to apply.",
      "+1 Defence",
      "+3 Random Stat",
      "Success Chance; 30%",
      "Uses up 1 slots only if Successful"
    ],
    "notes": " "
  },
  "StoneAeB": {
    "displayName": "Summer Armor Stone",
    "sellPrice": "100",
    "typeGen": "dStone",
    "ID": "1",
    "Type": "Upgrade",
    "sources": ["Summer Spirit", "Mr Blueberry", "Plasti Doug"],
    "detdrops": [
      ["Summer Spirit", "0.04", "3"],
      ["Mr Blueberry", "0.02", "3"],
      ["Plasti Doug", "0.02", "3"]
    ],
    "description": [
      "Drag onto any Armor to apply.",
      "+3 Defence",
      "Success Chance; 50%",
      "Uses up 1 slots only if Successful"
    ],
    "notes": " "
  },
  "StoneA1": {
    "displayName": "Armor Upgrade Stone I",
    "sellPrice": "100",
    "typeGen": "dStone",
    "ID": "1",
    "Type": "Upgrade",
    "sources": [
      "Blunder Hills Vendor",
      "Dewdrop Bronze Chest",
      "Simple Shippin",
      "Plan-it Express",
      "Dudes Next Door",
      "Can't somebody else do it?",
      "DropTable4",
      "[[Alchemy#Liquid Shop|Weak UPG Stone]]"
    ],
    "detdrops": [
      ["Dewdrop Bronze Chest", "0.09", "1"],
      ["Crystal Carrot", "0.018", "1.0"],
      ["Mining Copper", "0.000195", "1.0"],
      ["Mining Iron", "0.00021", "1.0"],
      ["Mining Gold", "0.000225", "1.0"],
      ["Mining Plat", "0.000231", "1.0"],
      ["Mining Dementia", "0.000246", "1.0"],
      ["Mining Void", "0.00026999999999999995", "2.0"],
      ["Mining Lustre", "0.000285", "2.0"]
    ],
    "description": [
      "Drag onto any Armor to apply.",
      "+2 Defence",
      "+1 Random Stat",
      "Success Chance; 100%",
      "Uses up 1 slots only if Successful"
    ],
    "shopData": [
      {
        "vendor": "Blunder Hills",
        "quantity": "6",
        "no": 10
      }
    ],
    "notes": " "
  },
  "StoneA1b": {
    "displayName": "Armor Upgrade Stone G",
    "sellPrice": "100",
    "typeGen": "dStone",
    "ID": "1",
    "Type": "Upgrade",
    "sources": [
      "The Scientific Method, According to a Rock",
      "[[Alchemy#Liquid Shop|Weak UPG Stone]]"
    ],
    "description": [
      "Drag onto any Armor to apply.",
      "+4 Random Stat",
      "Success Chance; 42%",
      "Uses up 1 slots only if Successful"
    ],
    "notes": " "
  },
  "StoneA2": {
    "displayName": "Armor Upgrade Stone II",
    "sellPrice": "850",
    "typeGen": "dStone",
    "ID": "1",
    "Type": "Upgrade",
    "sources": [
      "Encroaching Forest Villas Vendor",
      "YumYum Grotto Vendor",
      "Bored Bean",
      "Dewdrop Silver Chest",
      "Sandstone Bronze Chest",
      "Plan-it Express",
      "Dudes Next Door",
      "Alchemial Apprentice",
      "DropTable10",
      "[[Guild Giftbox]]"
    ],
    "detdrops": [
      ["Bored Bean", "0.00005", "1"],
      ["Dewdrop Silver Chest", "0.1", "1"],
      ["Sandstone Bronze Chest", "0.09", "1"]
    ],
    "description": [
      "Drag onto any Armor to apply.",
      "+2 Defence",
      "+2 Random Stat",
      "Success Chance; 80%",
      "Uses up 1 slots only if Successful"
    ],
    "shopData": [
      {
        "vendor": "Encroaching Forest Villas",
        "quantity": "6",
        "no": 5
      },
      {
        "vendor": "YumYum Grotto",
        "quantity": "6",
        "no": 6
      }
    ],
    "notes": " "
  },
  "StoneA2b": {
    "displayName": "Armor Upgrade Stone B",
    "sellPrice": "100",
    "typeGen": "dStone",
    "ID": "1",
    "Type": "Upgrade",
    "Cooldown": "1",
    "sources": ["DropTable7"],
    "detdrops": [
      ["Crystal Crabal", "0.0025", "1.0"],
      ["Mafioso", "0.000016000000000000003", "1.0"],
      ["Sand Castle", "0.000017500000000000002", "1.0"],
      ["Pincermin", "0.000018500000000000002", "1.0"],
      ["Mashed Potato", "0.0000195", "1.0"],
      ["Dig Doug", "0.000016000000000000003", "1.0"],
      ["Efaunt", "0.005", "2.0"],
      ["Chaotic Efaunt", "0.005", "2.0"],
      ["Nightmare Amarok", "0.005", "2.0"],
      ["Chizoar", "0.005", "2.0"],
      ["Chaotic Chizoar", "0.005", "2.0"],
      ["Nightmare Chizoar", "0.005", "2.0"],
      ["Sandstone Silver Chest", "0.005", "1.0"]
    ],
    "description": [
      "Drag onto any Armor to apply.",
      "+5 Defence",
      "Success Chance; 45%",
      "Uses up 1 item slots.",
      "WARNING:Slots are used up even",
      "if the Upgrade fails!"
    ],
    "notes": " "
  },
  "StoneA3": {
    "displayName": "Armor Upgrade Stone III",
    "sellPrice": "15000",
    "typeGen": "dStone",
    "ID": "1",
    "Type": "Upgrade",
    "sources": [
      "Frostbite Towndra Vendor",
      "Sandstone Silver Chest",
      "Chillsnap Bronze Chest",
      "Chillsnap Silver Chest"
    ],
    "detdrops": [
      ["Sandstone Silver Chest", "0.09", "1"],
      ["Chillsnap Bronze Chest", "0.09", "1"],
      ["Chillsnap Silver Chest", "0.3", "1"]
    ],
    "description": [
      "Drag onto any Armor to apply.",
      "+3 Defence",
      "+4 Random Stat",
      "Success Chance; 50%",
      "Uses up 1 slots only if Successful"
    ],
    "shopData": [
      {
        "vendor": "Frostbite Towndra",
        "quantity": "10",
        "no": 6
      }
    ],
    "notes": " "
  },
  "StoneA3b": {
    "displayName": "Armor Upgrade Stone C",
    "sellPrice": "15000",
    "typeGen": "dStone",
    "ID": "1",
    "Type": "Upgrade",
    "Cooldown": "1",
    "sources": [
      "Biggie Hours",
      "King Doot",
      "Waitin' for the Cards to Drop",
      "[[Guild Giftbox]]"
    ],
    "detdrops": [
      ["Biggie Hours", "0.008", "1"],
      ["King Doot", "0.04", "1"]
    ],
    "uses": [["EquipmentHats52", "2", "Crafting"]],
    "description": [
      "Drag onto any Armor to apply.",
      "+1 Weapon Power",
      "+3 Random Stat",
      "Success Chance; 60%",
      "Uses up 1 item slots.",
      "WARNING:Slots are used up even",
      "if the Upgrade fails!"
    ],
    "notes": " "
  },
  "StoneTe": {
    "displayName": "Easter Tool Upgrade Stone",
    "sellPrice": "110",
    "typeGen": "dStone",
    "ID": "2",
    "Type": "Upgrade",
    "sources": ["Egggulyte", "Egg Capsule", "Floofie", "Shell Snake"],
    "detdrops": [
      ["Egggulyte", "0.25", "3"],
      ["Egg Capsule", "0.25", "3"],
      ["Floofie", "0.02", "3"],
      ["Shell Snake", "0.02", "3"]
    ],
    "description": [
      "Drag onto any Tool to apply.",
      "+3 Random Stat",
      "Success Chance; 30%",
      "Uses up 1 slots only if Successful"
    ],
    "notes": " "
  },
  "StoneT1": {
    "displayName": "Tool Upgrade Stone I",
    "sellPrice": "110",
    "typeGen": "dStone",
    "ID": "2",
    "Type": "Upgrade",
    "sources": [
      "Blunder Hills Vendor",
      "Faraway Piers Vendor",
      "Simple Shippin",
      "DropTable4",
      "DropTable5",
      "DropTable10",
      "DropTable11",
      "DropTable12",
      "[[Alchemy#Liquid Shop|Weak UPG Stone]]"
    ],
    "detdrops": [
      ["Crystal Carrot", "0.018", "1.0"],
      ["Mining Copper", "0.000195", "1.0"],
      ["Mining Iron", "0.00021", "1.0"],
      ["Mining Gold", "0.000225", "1.0"],
      ["Mining Plat", "0.000231", "1.0"],
      ["Mining Dementia", "0.000246", "1.0"],
      ["Mining Void", "0.00026999999999999995", "2.0"],
      ["Mining Lustre", "0.000285", "2.0"],
      ["Choppin Oak Tree", "0.00024", "1.0"],
      ["Choppin Birch Tree", "0.000255", "1.0"],
      ["Choppin Jungle Tree", "0.00026999999999999995", "1.0"],
      ["Choppin Forest Tree", "0.000285", "1.0"],
      ["Choppin Toilet Tree", "0.000318", "1.0"],
      ["Choppin Stump Tree", "0.000306", "1.0"],
      ["Choppin Palm Tree", "0.00045", "2.0"],
      ["Crystal Crabal", "0.015", "1.0"],
      ["Catching Flies", "0.00045", "1.0"],
      ["Catching Butterflies", "0.00045", "1.0"],
      ["Catching Sentient Cereal", "0.00045", "1.0"],
      ["Catching Fruitflies", "0.00045", "1.0"]
    ],
    "description": [
      "Drag onto any Tool to apply.",
      "+1 Weapon Power",
      "+1 Random Stat",
      "Success Chance; 100%",
      "Uses up 1 slots only if Successful"
    ],
    "shopData": [
      {
        "vendor": "Blunder Hills",
        "quantity": "4",
        "no": 11
      },
      {
        "vendor": "Faraway Piers",
        "quantity": "2",
        "no": 7
      }
    ],
    "notes": " "
  },
  "StoneT1e": {
    "displayName": "Giftmas Tool Upgrade Stone",
    "sellPrice": "110",
    "typeGen": "dStone",
    "ID": "2",
    "Type": "Upgrade",
    "description": [
      "Drag onto any Tool to apply.",
      "+4 Random Stat",
      "Success Chance; 60%",
      "Uses up 1 slots only if Successful"
    ],
    "notes": " "
  },
  "StoneT1eb": {
    "displayName": "Summer Tool Upgrade Stone",
    "sellPrice": "110",
    "typeGen": "dStone",
    "ID": "2",
    "Type": "Upgrade",
    "sources": ["Summer Spirit", "Mr Blueberry", "Plasti Doug"],
    "detdrops": [
      ["Summer Spirit", "0.03", "3"],
      ["Mr Blueberry", "0.012", "3"],
      ["Plasti Doug", "0.012", "3"]
    ],
    "description": [
      "Drag onto any Tool to apply.",
      "+3 Defence",
      "Success Chance; 50%",
      "Uses up 1 slots only if Successful"
    ],
    "notes": " "
  },
  "StoneT2": {
    "displayName": "Tool Upgrade Stone II",
    "sellPrice": "1250",
    "typeGen": "dStone",
    "ID": "2",
    "Type": "Upgrade",
    "sources": [
      "YumYum Grotto Vendor",
      "Faraway Piers Vendor",
      "Plan-it Express",
      "Dudes Next Door",
      "The Rats are to Blame!",
      "Uncovering the Deep Sea State!!!",
      "DropTable3",
      "DropTable12"
    ],
    "detdrops": [
      ["Crystal Carrot", "0.012", "1.0"],
      ["Glublin", "0.00012", "1.0"],
      ["Wode Board", "0.00013499999999999997", "1.0"],
      ["Gigafrog", "0.00015", "1.0"],
      ["Amarok", "0.03", "2.0"],
      ["Chaotic Amarok", "0.03", "4.0"],
      ["Nightmare Amarok", "0.03", "2.0"],
      ["Dr Defecaus", "0.03", "2.0"],
      ["Baba Yaga", "0.03", "0.5"],
      ["Dewdrop Golden Chest", "0.03", "1.0"],
      ["Crystal Crabal", "0.001", "1.0"],
      ["Catching Flies", "0.00003", "1.0"],
      ["Catching Butterflies", "0.00003", "1.0"],
      ["Catching Sentient Cereal", "0.00003", "1.0"],
      ["Catching Fruitflies", "0.00003", "1.0"]
    ],
    "description": [
      "Drag onto any Tool to apply.",
      "+2 Weapon Power",
      "+2 Random Stat",
      "Success Chance; 80%",
      "Uses up 1 slots only if Successful"
    ],
    "shopData": [
      {
        "vendor": "YumYum Grotto",
        "quantity": "4",
        "no": 7
      },
      {
        "vendor": "Faraway Piers",
        "quantity": "1",
        "no": 8
      }
    ],
    "notes": " "
  },
  "StoneT3": {
    "displayName": "Tool Upgrade Stone III",
    "sellPrice": "20000",
    "typeGen": "dStone",
    "ID": "2",
    "Type": "Upgrade",
    "sources": ["Frostbite Towndra Vendor", "Hoopsies"],
    "description": [
      "Drag onto any Tool to apply.",
      "+3 Weapon Power",
      "+4 Random Stat",
      "Success Chance; 50%",
      "Uses up 1 slots only if Successful"
    ],
    "shopData": [
      {
        "vendor": "Frostbite Towndra",
        "quantity": "7",
        "no": 7
      }
    ],
    "notes": " "
  },
  "StoneHelm1": {
    "displayName": "Helmet Upgrade Stone I",
    "sellPrice": "400",
    "typeGen": "dStone",
    "ID": "1",
    "Type": "Upgrade",
    "sources": [
      "Glublin",
      "Simple Shippin",
      "Plan-it Express",
      "[[Alchemy#Liquid Shop|Weak UPG Stone]]"
    ],
    "detdrops": [["Glublin", "0.00015", "1"]],
    "description": [
      "Drag onto any Helmet to apply.",
      "+3 Random Stat",
      "Success Chance; 70%",
      "Uses up 1 slots only if Successful"
    ],
    "notes": " "
  },
  "StoneHelm6": {
    "displayName": "Warped Helmet Upgrade Stone",
    "sellPrice": "5000",
    "typeGen": "dStone",
    "ID": "4",
    "Type": "Upgrade",
    "Cooldown": "1",
    "sources": [
      "Don't Desert the Dessert",
      "Lookin' Like a Snack",
      "A Hat in Crime",
      "Treasure Hunt 3",
      "[[Guild Giftbox]]"
    ],
    "description": [
      "Drag onto any Helmet to apply.",
      "+5 Random Stat",
      "Success Chance; 50%",
      "Uses up 1 item slots.",
      "WARNING:Slots are used up even",
      "if the Upgrade fails!"
    ],
    "notes": " "
  },
  "StoneHelm1b": {
    "displayName": "Giftmas Helmet Upgrade Stone",
    "sellPrice": "5000",
    "typeGen": "dStone",
    "ID": "4",
    "Type": "Upgrade",
    "description": [
      "Drag onto any Helmet to apply.",
      "+4 Random Stat",
      "Success Chance; 60%",
      "Uses up 1 item slots."
    ],
    "notes": " "
  },
  "StoneZ1": {
    "displayName": "Mystery Upgrade Stone I",
    "sellPrice": "777",
    "typeGen": "dStone",
    "ID": "5",
    "Type": "Upgrade",
    "sources": [
      "Nightmare Amarok",
      "Nightmare Amarok",
      "Nightmare Chizoar",
      "Biggie Hours",
      "King Doot",
      "A Peanut for your Thoughts",
      "Honk if you Love Peanuts!",
      "A Peanut Saved is a Peanut not Eaten!",
      "If Life Gives you Peanuts, make Shiny Peanuts!",
      "Hotel? Tikivago. Sorry, couldn't Help It!",
      "Rhyming is Key!",
      "Uh, Something About Vials?",
      "SuperDropTable1",
      "SuperDropTable2",
      "[[Alchemy#Level up Gift|Level up Gift]]"
    ],
    "detdrops": [
      ["Nightmare Amarok", "0.03", "1"],
      ["Nightmare Chizoar", "0.03", "1"],
      ["Biggie Hours", "0.4", "2"],
      ["King Doot", "1", "1"],
      ["Crystal Carrot", "0.0020399999999999997", "2.0"],
      ["Green Mushroom", "0.0000102", "2.0"],
      ["Frog", "0.00001292", "2.0"],
      ["Bored Bean", "0.0000153", "2.0"],
      ["Red Mushroom", "0.00001768", "2.0"],
      ["Amarok", "0.0034", "4.0"],
      ["Chaotic Amarok", "0.0034", "8.0"],
      ["Baba Yaga", "0.0034", "4.0"],
      ["Dewdrop Bronze Chest", "0.0034", "2.0"],
      ["Slime", "0.0000153", "2.0"],
      ["Baby Boa", "0.000019124999999999997", "2.0"],
      ["Carrotman", "0.00002295", "2.0"],
      ["Dewdrop Silver Chest", "0.0038249999999999994", "2.0"],
      ["Glublin", "0.000017", "2.0"],
      ["Wode Board", "0.000019124999999999997", "2.0"],
      ["Gigafrog", "0.00002125", "2.0"],
      ["Dr Defecaus", "0.00425", "4.0"],
      ["Dewdrop Golden Chest", "0.00425", "2.0"],
      ["Poop", "0.000028049999999999994", "2.0"],
      ["Rat", "0.000028049999999999994", "2.0"],
      ["Walking Stick", "0.000026647499999999995", "2.0"],
      ["Nutto", "0.000030387499999999993", "2.0"],
      ["Wood Mushroom", "0.000032725", "2.0"],
      ["Mining Copper", "0.00003315", "2.0"],
      ["Mining Iron", "0.0000357", "2.0"],
      ["Mining Gold", "0.000038249999999999995", "2.0"],
      ["Mining Plat", "0.00003927", "2.0"],
      ["Mining Dementia", "0.00004182", "2.0"],
      ["Mining Void", "0.0000459", "4.0"],
      ["Mining Lustre", "0.00004845", "4.0"],
      ["Choppin Oak Tree", "0.0000408", "2.0"],
      ["Choppin Birch Tree", "0.00004335", "2.0"],
      ["Choppin Jungle Tree", "0.0000459", "2.0"],
      ["Choppin Forest Tree", "0.00004845", "2.0"],
      ["Choppin Toilet Tree", "0.00005406", "2.0"],
      ["Choppin Stump Tree", "0.00005202000000000001", "2.0"],
      ["Crystal Crabal", "0.0025199999999999997", "3.0"],
      ["Sandy Pot", "0.0000126", "3.0"],
      ["Mimic", "0.00001344", "3.0"],
      ["Crabcake", "0.00001512", "3.0"],
      ["Efaunt", "0.0042", "6.0"],
      ["Chizoar", "0.0042", "6.0"],
      ["Sandstone Bronze Chest", "0.0042", "3.0"],
      ["Mafioso", "0.00001344", "3.0"],
      ["Sand Castle", "0.0000147", "3.0"],
      ["Pincermin", "0.00001554", "3.0"],
      ["Mashed Potato", "0.00001638", "3.0"],
      ["Dig Doug", "0.00001344", "3.0"],
      ["Chaotic Efaunt", "0.0042", "6.0"],
      ["Chaotic Chizoar", "0.0042", "6.0"],
      ["Sandstone Silver Chest", "0.0042", "3.0"],
      ["Tyson", "0.00001344", "3.0"],
      ["Moonmoon", "0.0000147", "3.0"],
      ["Sand Giant", "0.00001554", "3.0"],
      ["Snelbie", "0.00001638", "3.0"],
      ["Sandstone Golden Chest", "0.0042", "3.0"],
      ["Fishing Small Fish", "0.0000504", "3.0"],
      ["Fishing Goldfish", "0.0000504", "3.0"],
      ["Fishing Hermit Can", "0.0000504", "3.0"],
      ["Fishing Jellyfish", "0.0000504", "3.0"],
      ["Fishing Bloach", "0.0000504", "3.0"],
      ["Choppin Palm Tree", "0.00006299999999999999", "6.0"],
      ["Catching Flies", "0.00006299999999999999", "3.0"],
      ["Catching Butterflies", "0.00006299999999999999", "3.0"],
      ["Catching Sentient Cereal", "0.00006299999999999999", "3.0"],
      ["Catching Fruitflies", "0.00006299999999999999", "3.0"]
    ],
    "uses": [["StampA28", "Lots", "Stamps"]],
    "description": [
      "Drag onto any Equip to apply.",
      "+3 Mystery Stat",
      "Success Chance; 100%",
      "Uses up 1 slots only if Successful.",
      "WARNING:Mystery Stat has a chance",
      "to be Negative, and reduce stats!"
    ],
    "notes": "Mystery stones can increase or decrease an item's stats by up to +3 or as low as -3 per roll. If an item has a Misc effect, Mystery Stones can increase or decrease it by +/-1 per roll. "
  },
  "StoneZ2": {
    "displayName": "Mystery Upgrade Stone II",
    "sellPrice": "777",
    "typeGen": "dStone",
    "ID": "5",
    "Type": "Upgrade",
    "sources": ["Journey to the Center of the Blundermines", "SuperDropTable3"],
    "detdrops": [
      ["Crystal Cattle", "0.0025199999999999997", "3.0"],
      ["Sheepie", "0.0000105", "3.0"],
      ["Frost Flake", "0.000011760000000000001", "3.0"],
      ["Sir Stache", "0.000013019999999999997", "3.0"],
      ["Xylobone", "0.000042", "3.0"],
      ["Chillsnap Bronze Chest", "0.0042", "3.0"],
      ["Bloque", "0.0000105", "3.0"],
      ["Mamooth", "0.00001134", "3.0"],
      ["Snowman", "0.000012179999999999999", "3.0"],
      ["Penguin", "0.000013019999999999997", "3.0"],
      ["Thermister", "0.00001386", "3.0"],
      ["Chillsnap Silver Chest", "0.0042", "3.0"],
      ["Dedotated Ram", "0.000014279999999999997", "3.0"],
      ["Quenchie", "0.0000105", "3.0"],
      ["Cryosnake", "0.000011760000000000001", "3.0"],
      ["Bop Box", "0.0000126", "3.0"],
      ["Neyeptune", "0.00001344", "3.0"],
      ["Bloodbone", "0.000021", "3.0"],
      ["Chillsnap Golden Chest", "0.0042", "3.0"],
      ["Choppin Saharan Foal", "0.00003738", "3.0"],
      ["Choppin Wispy Tree", "0.00003738", "3.0"],
      ["Catching Mosquisnow", "0.00006299999999999999", "3.0"],
      ["Catching Flycicle", "0.00006299999999999999", "3.0"]
    ],
    "description": [
      "Drag onto any Equip to apply.",
      "+4 Mystery Stat",
      "Success Chance; 50%",
      "Uses up 1 slots only if Successful.",
      "WARNING:Mystery Stat has a chance",
      "to be Negative, and reduce stats!"
    ],
    "notes": " "
  },
  "StonePremSTR": {
    "displayName": "Premium STR Stone",
    "sellPrice": "777",
    "typeGen": "dStone",
    "ID": "6",
    "Type": "Upgrade",
    "Trigger": "1",
    "sources": ["[[Gem Shop]]"],
    "description": [
      "Drag onto any Equip to apply.",
      "+5 Str",
      "Success Chance; 101%",
      "Can only be used on Premium Equips!"
    ],
    "notes": " "
  },
  "StonePremAGI": {
    "displayName": "Premium AGI Stone",
    "sellPrice": "777",
    "typeGen": "dStone",
    "ID": "6",
    "Type": "Upgrade",
    "Trigger": "1",
    "sources": ["[[Gem Shop]]"],
    "description": [
      "Drag onto any Equip to apply.",
      "+5 Agi",
      "Success Chance; 101%",
      "Can only be used on Premium Equips!"
    ],
    "notes": " "
  },
  "StonePremWIS": {
    "displayName": "Premium WIS Stone",
    "sellPrice": "777",
    "typeGen": "dStone",
    "ID": "6",
    "Type": "Upgrade",
    "Trigger": "1",
    "sources": ["[[Gem Shop]]"],
    "description": [
      "Drag onto any Equip to apply.",
      "+5 Wis",
      "Success Chance; 101%",
      "Can only be used on Premium Equips!"
    ],
    "notes": " "
  },
  "StonePremLUK": {
    "displayName": "Premium LUK Stone",
    "sellPrice": "777",
    "typeGen": "dStone",
    "ID": "6",
    "Type": "Upgrade",
    "Trigger": "1",
    "sources": ["[[Gem Shop]]", "[[Guild Giftbox]]"],
    "description": [
      "Drag onto any Equip to apply.",
      "+5 Luk",
      "Success Chance; 101%",
      "Can only be used on Premium Equips!"
    ],
    "notes": " "
  },
  "Refinery1": {
    "displayName": "Redox Salts",
    "sellPrice": "100",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Refinery Salts",
    "sources": ["Refinery"],
    "uses": [
      ["TrapBoxSet2", "5", "Crafting"],
      ["MaxCapBagTr1", "3", "Crafting"],
      ["WorshipSkull2", "5", "Crafting"],
      ["MaxCapBagS1", "3", "Crafting"],
      ["TrapBoxSet3", "20", "Crafting"],
      ["MaxCapBagTr3", "15", "Crafting"],
      ["WorshipSkull3", "25", "Crafting"],
      ["MaxCapBagS3", "20", "Crafting"],
      ["EquipmentSword2", "150", "Crafting"],
      ["EquipmentBows7", "150", "Crafting"],
      ["EquipmentWands3", "150", "Crafting"],
      ["EquipmentToolsHatchet5", "50", "Crafting"],
      ["FishingRod6", "50", "Crafting"],
      ["MaxCapBagFi5", "50", "Crafting"],
      ["CatchingNet6", "50", "Crafting"],
      ["TrapBoxSet4", "50", "Crafting"],
      ["WorshipSkull4", "50", "Crafting"],
      ["A Salty Fall", "50", "Quests"],
      ["Matty Stafford", "Lots", "Alchemy"],
      ["Red Malt", "Lots", "Alchemy"],
      ["Refining Explosive Salts", "Lots", "Construction"],
      ["3D Printer", "Lots", "Building"],
      ["Talent Book Library", "Lots", "Building"],
      ["Pulse Mage", "Lots", "Building"],
      ["Fireball Lobber", "Lots", "Building"],
      ["Woodular Shrine", "Lots", "Building"],
      ["Isaccian Shrine", "Lots", "Building"],
      ["Salt Lick Upgrades", "Lots", "Salt Lick"],
      ["StampB34", "Lots", "Stamps"]
    ],
    "description": ["It's red, and boring."],
    "notes": " "
  },
  "Refinery2": {
    "displayName": "Explosive Salts",
    "sellPrice": "100",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Refinery Salts",
    "sources": ["Refinery"],
    "uses": [
      ["Gravity VS Salt", "75", "Quests"],
      ["Carpenter", "Lots", "Alchemy"],
      ["Orange Malt", "Lots", "Alchemy"],
      ["Refining Spontaneity Salts", "Lots", "Construction"],
      ["Death Note", "Lots", "Building"],
      ["Salt Lick", "Lots", "Building"],
      ["Chest Space", "Lots", "Building"],
      ["Boulder Roller", "Lots", "Building"],
      ["Frozone Malone", "Lots", "Building"],
      ["Crystal Shrine", "Lots", "Building"],
      ["Pantheon Shrine", "Lots", "Building"],
      ["Salt Lick Upgrades", "Lots", "Salt Lick"]
    ],
    "description": ["It's orange, and explodey."],
    "notes": " "
  },
  "Refinery3": {
    "displayName": "Spontaneity Salts",
    "sellPrice": "100",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Refinery Salts",
    "sources": ["Refinery"],
    "uses": [
      ["EquipmentHats54", "500", "Crafting"],
      ["EquipmentBows8", "350", "Crafting"],
      ["FishingRod7", "200", "Crafting"],
      ["EquipmentSmithingTabs4", "1", "Crafting"],
      ["Refining Dioxide Synthesis", "Lots", "Construction"],
      ["Stormcaller", "Lots", "Building"],
      ["Party Starter", "Lots", "Building"],
      ["Clover Shrine", "Lots", "Building"],
      ["Summereading Shrine", "Lots", "Building"],
      ["Salt Lick Upgrades", "Lots", "Salt Lick"]
    ],
    "description": [
      "It's blue, and currently has a flight scheduled to Tahiti that it booked earlier this morning on a whim."
    ],
    "notes": " "
  },
  "Refinery4": {
    "displayName": "Dioxide Synthesis",
    "sellPrice": "100",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Refinery Salts",
    "sources": ["Refinery"],
    "uses": [
      ["EquipmentHats61", "500", "Crafting"],
      ["EquipmentHats58", "500", "Crafting"],
      ["EquipmentHats59", "500", "Crafting"],
      ["EquipmentHats60", "500", "Crafting"],
      ["EquipmentShirts31", "500", "Crafting"],
      ["EquipmentShirts28", "500", "Crafting"],
      ["EquipmentShirts29", "500", "Crafting"],
      ["EquipmentShirts30", "500", "Crafting"],
      ["Refining Red Salt", "Lots", "Construction"],
      ["Junk Pile", "Lots", "Building"],
      ["Kraken Cosplayer", "Lots", "Building"],
      ["Crescent Shrine", "Lots", "Building"],
      ["Salt Lick Upgrades", "Lots", "Salt Lick"]
    ],
    "description": ["It's green, and carbony."],
    "notes": " "
  },
  "Refinery5": {
    "displayName": "Red Salt",
    "sellPrice": "100",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Refinery Salts",
    "sources": ["Refinery"],
    "uses": [
      ["Refining Red Salt", "Lots", "Construction"],
      ["Candy Pile", "Lots", "Building"],
      ["Poisonic Elder", "Lots", "Building"],
      ["Undead Shrine", "Lots", "Building"],
      ["Salt Lick Upgrades", "Lots", "Salt Lick"]
    ],
    "description": ["It's red, and boring."],
    "notes": " "
  },
  "Refinery6": {
    "displayName": "Red Salt",
    "sellPrice": "100",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Refinery Salts",
    "sources": ["Refinery"],
    "uses": [
      ["Voidinator", "Lots", "Building"],
      ["Primordial Shrine", "Lots", "Building"]
    ],
    "description": ["It's red, and boring."],
    "notes": " "
  },
  "CraftMat1": {
    "displayName": "Thread",
    "sellPrice": "3",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Material",
    "sources": ["Anvil Production"],
    "uses": [
      ["EquipmentBows1", "30", "Crafting"],
      ["EquipmentPants1", "15", "Crafting"],
      ["EquipmentToolsHatchet3", "15", "Crafting"],
      ["EquipmentHats15", "13", "Crafting"],
      ["EquipmentHats3", "150", "Crafting"],
      ["EquipmentPendant10", "300", "Crafting"],
      ["EquipmentShirts24", "150", "Crafting"],
      ["Simple Shippin", "Lots", "Post Office"],
      ["King of the Cavern", "600", "Quests"],
      ["Warriors Rule", "Lots", "Alchemy"],
      ["Stable Jenius", "Lots", "Alchemy"],
      ["Lotto Skills", "Lots", "Alchemy"],
      ["Spool Sprite", "Lots", "Alchemy"],
      ["StampA5", "Lots", "Stamps"],
      ["StampB2", "Lots", "Stamps"]
    ],
    "description": [
      "It's basically string cheese, but without the cheese. CRAFT THESE IN THE 'PRODUCE' TAB IN ANVIL!"
    ],
    "prodInfo": [1, "100", "1", "5"],
    "notes": " "
  },
  "CraftMat2": {
    "displayName": "Crimson String",
    "sellPrice": "1",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Material",
    "sources": ["Hardcore Gamer Status, Here I Come!"],
    "uses": [["EquipmentPunching1", "1", "Crafting"]],
    "description": [
      "I think Scripticus forgot to take",
      "out his... spoon? You may want to",
      "give that back."
    ],
    "notes": " "
  },
  "CraftMat3": {
    "displayName": "Cue Tape",
    "sellPrice": "3",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Material",
    "sources": ["Blunder Hills Vendor"],
    "uses": [
      ["EquipmentPunching1", "5", "Crafting"],
      ["EquipmentPunching3", "5000", "Crafting"]
    ],
    "description": ["Ohh that's why it's called Cue tape!"],
    "shopData": [
      {
        "vendor": "Blunder Hills",
        "quantity": "5000",
        "no": 3
      }
    ],
    "notes": " "
  },
  "CraftMat5": {
    "displayName": "Trusty Nails",
    "sellPrice": "12",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Material",
    "sources": ["Anvil Production"],
    "uses": [
      ["MaxCapBag7", "30", "Crafting"],
      ["EquipmentPunching2", "20", "Crafting"],
      ["MaxCapBagM2", "80", "Crafting"],
      ["EquipmentShirts11", "120", "Crafting"],
      ["EquipmentShoes15", "500", "Crafting"],
      ["Simple Shippin", "Lots", "Post Office"],
      ["King of the Cavern", "300", "Quests"],
      ["Brochure Building", "1000", "Quests"],
      ["A Hat in Crime", "750", "Quests"],
      ["Hocus Choppus", "Lots", "Alchemy"],
      ["Level Up Gift", "Lots", "Alchemy"],
      ["Thumb Pow", "Lots", "Alchemy"],
      ["StampA8", "Lots", "Stamps"]
    ],
    "description": [
      "Twice the nailage, so you can feel",
      "even dumber when you still end up",
      "hitting your thumb instead!",
      "CRAFT THESE IN THE 'PRODUCE'",
      "TAB IN ANVIL!"
    ],
    "prodInfo": [2, "250", "5", "8"],
    "notes": " "
  },
  "CraftMat6": {
    "displayName": "Boring Brick",
    "sellPrice": "25",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Material",
    "sources": ["Anvil Production"],
    "uses": [
      ["TestObj7", "125", "Crafting"],
      ["EquipmentToolsHatchet1", "125", "Crafting"],
      ["EquipmentPants3", "225", "Crafting"],
      ["Simple Shippin", "Lots", "Post Office"],
      ["Reely Smart", "Lots", "Alchemy"],
      ["Quick Slap", "Lots", "Alchemy"],
      ["StampC3", "Lots", "Stamps"]
    ],
    "description": [
      "Go get your shovel...",
      "And we'll dig a deep hole...",
      "To gain a skill level...",
      "To gain a skill level..."
    ],
    "prodInfo": [3, "500", "12", "14"],
    "notes": " "
  },
  "CraftMat7": {
    "displayName": "Chain Link",
    "sellPrice": "40",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Material",
    "sources": ["Anvil Production"],
    "uses": [
      ["EquipmentSmithingTabs2", "200", "Crafting"],
      ["EquipmentPants17", "400", "Crafting"],
      ["EquipmentWands5", "1000", "Crafting"],
      ["MaxCapBagM4", "1250", "Crafting"],
      ["EquipmentToolsHatchet4", "5000", "Crafting"],
      ["Noodubble", "Lots", "Alchemy"]
    ],
    "description": [
      "Better keep an eye on this or it",
      "might try to leave your inventory",
      "to go save Chain Zelda!"
    ],
    "prodInfo": [4, "1000", "18", "25"],
    "notes": " "
  },
  "CraftMat9": {
    "displayName": "Leather Hide",
    "sellPrice": "60",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Material",
    "sources": ["Anvil Production"],
    "uses": [
      ["FishingRod4", "1000", "Crafting"],
      ["EquipmentSword1", "2500", "Crafting"],
      ["EquipmentShirts22", "1500", "Crafting"],
      ["A Hat in Crime", "100", "Quests"],
      ["Da Daily Drip", "Lots", "Alchemy"]
    ],
    "description": [
      "I mean come on, would this really be a Fantasy MMO if it didn't have a leather material item?"
    ],
    "prodInfo": [5, "2000", "25", "40"],
    "notes": " "
  },
  "CraftMat8": {
    "displayName": "Pinion Spur",
    "sellPrice": "80",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Material",
    "sources": ["Anvil Production"],
    "uses": [["Bappity Boopity", "Lots", "Alchemy"]],
    "description": [
      "The big one is the Spur.",
      "The puny one is the Pinion.",
      "Have fun bragging in class when you",
      "get this question right on a test."
    ],
    "prodInfo": [6, "5000", "32", "80"],
    "notes": " "
  },
  "CraftMat10": {
    "displayName": "Lugi Bracket",
    "sellPrice": "100",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Material",
    "sources": ["Anvil Production"],
    "description": ["Hey look Mario! I have-a my own reference in the game!"],
    "prodInfo": [7, "12500", "40", "160"],
    "notes": " "
  },
  "PureWater": {
    "displayName": "Distilled Water",
    "sellPrice": "50",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Material",
    "sources": [
      "Old Timey Craftin'",
      "Uh, Something About Vials?",
      "DropTable14",
      "DropTable15",
      "DropTable16"
    ],
    "detdrops": [
      ["Crystal Cattle", "0.013199999999999998", "1.0"],
      ["Sheepie", "0.000054999999999999995", "1.0"],
      ["Frost Flake", "0.00006159999999999999", "1.0"],
      ["Sir Stache", "0.00006819999999999999", "1.0"],
      ["Xylobone", "0.00021999999999999998", "1.0"],
      ["Chillsnap Bronze Chest", "0.022", "1.0"],
      ["Bloque", "0.0000625", "1.0"],
      ["Mamooth", "0.0000675", "1.0"],
      ["Snowman", "0.0000725", "1.0"],
      ["Penguin", "0.0000775", "1.0"],
      ["Thermister", "0.0000825", "1.0"],
      ["Chillsnap Silver Chest", "0.025", "1.0"],
      ["Dedotated Ram", "0.0000918", "1.0"],
      ["Quenchie", "0.0000675", "1.0"],
      ["Cryosnake", "0.0000756", "1.0"],
      ["Bop Box", "0.000081", "1.0"],
      ["Neyeptune", "0.0000864", "1.0"],
      ["Bloodbone", "0.000135", "1.0"],
      ["Chillsnap Golden Chest", "0.027", "1.0"]
    ],
    "uses": [
      ["EquipmentPendant17", "25", "Crafting"],
      ["FishingRod3", "3", "Crafting"],
      ["MaxCapBagFi2", "2", "Crafting"],
      ["CatchingNet3", "3", "Crafting"],
      ["MaxCapBagB2", "2", "Crafting"],
      ["EquipmentShoes3", "4", "Crafting"],
      ["TestObj3", "8", "Crafting"],
      ["EquipmentBows5", "8", "Crafting"],
      ["EquipmentWands5", "8", "Crafting"],
      ["EquipmentRings11", "15", "Crafting"],
      ["EquipmentPendant16", "20", "Crafting"],
      ["Quest13", "4", "Crafting"],
      ["Quest35", "5", "Crafting"],
      ["EquipmentShoes16", "9", "Crafting"],
      ["EquipmentShoes18", "9", "Crafting"],
      ["EquipmentShoes17", "9", "Crafting"],
      ["EquipmentShoes19", "9", "Crafting"],
      ["EquipmentShirts26", "25", "Crafting"],
      ["EquipmentPants20", "25", "Crafting"],
      ["ResetCompletedS", "5", "Crafting"],
      ["FoodTrapping1", "1", "Crafting"],
      ["FoodWorship1", "1", "Crafting"]
    ],
    "description": [
      "The full filtration process also invovles filtering the diamonds through a vat of diamonds before using those filtered diamonds to filter the water! If only they'd filter their filtration process through diamonds so this item description wouldn't be so long."
    ],
    "notes": " "
  },
  "PureWater2": {
    "displayName": "Dense Water",
    "sellPrice": "50",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Material",
    "uses": [
      ["BadgeD2", "50", "Crafting"],
      ["EquipmentHats54", "5", "Crafting"],
      ["EquipmentShirts27", "4", "Crafting"],
      ["EquipmentPants21", "4", "Crafting"],
      ["EquipmentShoes22", "4", "Crafting"],
      ["EquipmentPunching5", "15", "Crafting"],
      ["EquipmentSword3", "7", "Crafting"],
      ["EquipmentBows8", "7", "Crafting"],
      ["EquipmentWands7", "7", "Crafting"],
      ["EquipmentTools11", "5", "Crafting"],
      ["EquipmentToolsHatchet7", "5", "Crafting"],
      ["FishingRod7", "5", "Crafting"],
      ["CatchingNet7", "5", "Crafting"],
      ["TrapBoxSet5", "5", "Crafting"],
      ["WorshipSkull5", "5", "Crafting"]
    ],
    "description": [
      "It's like a bowl of oatmeal, but double the thiccness and hold the oats."
    ],
    "notes": " "
  },
  "Grasslands1": {
    "displayName": "Spore Cap",
    "sellPrice": "3",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Green Mushroom"],
    "detdrops": [["Green Mushroom", "0.22", "1"]],
    "uses": [
      ["TestObj1", "25", "Crafting"],
      ["EquipmentBows1", "25", "Crafting"],
      ["EquipmentWands1", "25", "Crafting"],
      ["EquipmentHats1", "5", "Crafting"],
      ["EquipmentShirts1", "10", "Crafting"],
      ["EquipmentShirts2", "25", "Crafting"],
      ["InvBag102", "169", "Crafting"],
      ["Dudes Next Door", "Lots", "Post Office"],
      ["Warriors Rule", "Lots", "Alchemy"],
      ["Archer Or Bust", "Lots", "Alchemy"],
      ["Mage Is Best", "Lots", "Alchemy"],
      ["Mushroom Soup", "Lots", "Alchemy"],
      ["Refining Redox Salts", "Lots", "Construction"],
      ["StampA1", "Lots", "Stamps"],
      ["StampC19", "Lots", "Stamps"]
    ],
    "description": [
      "It's often misunderstood that this",
      "is part of the spore's head. But it's",
      "actually just a stylish hat.",
      "... well, stylish in Mushroom Culture",
      "at least."
    ],
    "notes": " "
  },
  "Grasslands2": {
    "displayName": "Frog Leg",
    "sellPrice": "5",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": [
      "Frog",
      "Mining Starfire",
      "Mining Dreadlo",
      "Mining Godshard",
      "Choppin Alien Tree",
      "Fly Nest",
      "Butterfly Bar",
      "Sentient Bowl",
      "Grocery Bag",
      "Snowden",
      "Icicle Nest"
    ],
    "detdrops": [
      ["Frog", "0.21", "1"],
      ["Mining Starfire", "0.4", "2"],
      ["Mining Dreadlo", "0.4", "2"],
      ["Mining Godshard", "0.4", "2"],
      ["Choppin Alien Tree", "0.015", "2"],
      ["Fly Nest", "0.0", "2"],
      ["Butterfly Bar", "0.0", "2"],
      ["Sentient Bowl", "0.0", "2"],
      ["Grocery Bag", "0.0", "2"],
      ["Snowden", "0.0", "2"],
      ["Icicle Nest", "0.0", "2"]
    ],
    "uses": [
      ["EquipmentPants1", "20", "Crafting"],
      ["EquipmentTools2", "30", "Crafting"],
      ["EquipmentHats15", "25", "Crafting"],
      ["MaxCapBagM2", "40", "Crafting"],
      ["Dudes Next Door", "Lots", "Post Office"],
      ["The Most Important Meal of the Day", "200", "Quests"],
      ["Stronk Tools", "Lots", "Alchemy"],
      ["StampC13", "Lots", "Stamps"]
    ],
    "description": [
      "Imagine if humans had legs like this. Actually, it would be better if you didn't, unless you want nightmares about humans violently jumping at you from 20 feet away."
    ],
    "notes": " "
  },
  "Grasslands3": {
    "displayName": "Bean Slices",
    "sellPrice": "7",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Bored Bean"],
    "detdrops": [["Bored Bean", "0.20", "1"]],
    "uses": [
      ["EquipmentShoes9", "30", "Crafting"],
      ["MaxCapBagM2", "30", "Crafting"],
      ["EquipmentHats17", "50", "Crafting"],
      ["Dudes Next Door", "Lots", "Post Office"],
      ["The Most Important Meal of the Day", "100", "Quests"],
      ["Hammer Hammer", "Lots", "Alchemy"],
      ["Dieter Drink", "Lots", "Alchemy"],
      ["StampA7", "Lots", "Stamps"]
    ],
    "description": [
      "There's something disturbing about",
      "how these beans have bones.",
      "Not as disturbing as how they",
      "also have eyeballs and walk around,",
      "but still disturbing anyway."
    ],
    "notes": " "
  },
  "Grasslands4": {
    "displayName": "Red Spore Cap",
    "sellPrice": "7",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Red Mushroom"],
    "detdrops": [["Red Mushroom", "0.20", "1"]],
    "uses": [["EquipmentShirts25", "40", "Crafting"]],
    "description": [
      "It's often misunderstood that this is just the spore's stylish hat, due to the cosmetic nature of Green Spores, but this cap is actually part of this spore's head."
    ],
    "notes": " "
  },
  "Jungle1": {
    "displayName": "Slime Sludge",
    "sellPrice": "10",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Slime"],
    "detdrops": [["Slime", "0.19", "1"]],
    "uses": [
      ["TestObj7", "125", "Crafting"],
      ["EquipmentBows3", "125", "Crafting"],
      ["EquipmentWands2", "125", "Crafting"],
      ["EquipmentShoes7", "600", "Crafting"],
      ["EquipmentRings14", "1000", "Crafting"],
      ["Dudes Next Door", "Lots", "Post Office"],
      ["Slime for Storage", "50", "Quests"],
      ["Sanic Tools", "Lots", "Alchemy"],
      ["StampC1", "Lots", "Stamps"]
    ],
    "description": ["Ewww, slimey."],
    "notes": " "
  },
  "Jungle2": {
    "displayName": "Snake Skin",
    "sellPrice": "13",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Baby Boa"],
    "detdrops": [["Baby Boa", "0.18", "1"]],
    "uses": [
      ["Dudes Next Door", "Lots", "Post Office"],
      ["Pelt for the Pelt God", "12", "Quests"],
      ["Name I Guess", "Lots", "Alchemy"],
      ["Skinny 0 Cal", "Lots", "Alchemy"],
      ["StampA12", "Lots", "Stamps"]
    ],
    "description": [
      "''Theres a snake in me boots! Oh",
      "wait no, my boots are the snake!''",
      " - Someone who wears snakeskin boots"
    ],
    "notes": " "
  },
  "Jungle3": {
    "displayName": "Carrot Cube",
    "sellPrice": "15",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Carrotman"],
    "detdrops": [["Carrotman", "0.17", "1"]],
    "uses": [
      ["EquipmentTools3", "200", "Crafting"],
      ["Dudes Next Door", "Lots", "Post Office"],
      ["Investigator by Day, Prankster by Night", "2", "Quests"],
      ["Lil Big Damage", "Lots", "Alchemy"],
      ["StampB6", "Lots", "Stamps"]
    ],
    "description": [
      "Probably the only time you'll",
      "ever see a carrot cut into",
      "a cube!"
    ],
    "notes": " "
  },
  "Forest1": {
    "displayName": "Glublin Ear",
    "sellPrice": "20",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Glublin"],
    "detdrops": [["Glublin", "0.16", "1"]],
    "uses": [
      ["EquipmentHats18", "300", "Crafting"],
      ["EquipmentShirts10", "500", "Crafting"],
      ["Dudes Next Door", "Lots", "Post Office"],
      ["Wyoming Blood", "Lots", "Alchemy"],
      ["Anearful", "Lots", "Alchemy"],
      ["StampA14", "Lots", "Stamps"]
    ],
    "description": [
      "This item will listen to anything",
      "you have to say, it's all ears!"
    ]
  },
  "Forest2": {
    "displayName": "Plank",
    "sellPrice": "25",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Wode Board"],
    "detdrops": [["Wode Board", "0.15", "1"]],
    "uses": [
      ["EquipmentPants15", "275", "Crafting"],
      ["Dudes Next Door", "Lots", "Post Office"],
      ["Brochure Building", "500", "Quests"],
      ["Startue Exp", "Lots", "Alchemy"],
      ["StampB9", "Lots", "Stamps"]
    ],
    "description": ["I wonder what the Ed Boys", "are up to these days?"],
    "notes": " "
  },
  "Forest3": {
    "displayName": "Bullfrog Horn",
    "sellPrice": "30",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Gigafrog"],
    "detdrops": [["Gigafrog", "0.14", "1"]],
    "uses": [
      ["EquipmentSmithingTabs2", "250", "Crafting"],
      ["EquipmentPants17", "700", "Crafting"],
      ["EquipmentPendant16", "9000", "Crafting"],
      ["Dudes Next Door", "Lots", "Post Office"],
      ["Ramificoction", "Lots", "Alchemy"],
      ["Refining Explosive Salts", "Lots", "Construction"],
      ["StampB11", "Lots", "Stamps"]
    ],
    "description": [
      "Makes a loud noise when thrown at",
      "someones head, although the sound",
      "doesn't come from the horn itself..."
    ],
    "notes": " "
  },
  "Sewers1": {
    "displayName": "Corn Kernels",
    "sellPrice": "30",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Poop", "Dr Defecaus"],
    "detdrops": [
      ["Poop", "0.24", "1"],
      ["Dr Defecaus", "1", "150"]
    ],
    "uses": [
      ["EquipmentShirts18", "900", "Crafting"],
      ["EquipmentHats26", "4000", "Crafting"],
      ["Dudes Next Door", "Lots", "Post Office"]
    ],
    "description": ["I guess what they say about corn is true..."],
    "notes": " "
  },
  "Sewers1b": {
    "displayName": "Golden Plop",
    "sellPrice": "500",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Poop", "Dr Defecaus"],
    "detdrops": [
      ["Poop", "0.00005", "1"],
      ["Dr Defecaus", "0.1", "1"]
    ],
    "uses": [
      ["BadgeG3", "12", "Crafting"],
      ["EquipmentRings11", "4", "Crafting"],
      ["EquipmentWands6", "3", "Crafting"],
      ["MaxCapBagM5", "3", "Crafting"],
      ["InvBag103", "1", "Crafting"],
      ["Criminal Code of Conduct", "1", "Quests"]
    ],
    "description": [
      "Conker would have called this something else.                  NOTE: This is a very rare drop from Poops"
    ],
    "notes": " "
  },
  "Sewers2": {
    "displayName": "Rats Tail",
    "sellPrice": "90",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Rat"],
    "detdrops": [["Rat", "0.19", "1"]],
    "uses": [
      ["Dudes Next Door", "Lots", "Post Office"],
      ["Tail Time", "Lots", "Alchemy"]
    ],
    "description": ["Ew why did you pick this up?"],
    "notes": " "
  },
  "Sewers3": {
    "displayName": "Bonemeal",
    "sellPrice": "90",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Boop"],
    "detdrops": [["Boop", "0.5", "1"]],
    "uses": [["Waitin' for the Cards to Drop", "777", "Quests"]],
    "description": [
      "Imagine the guy who came up with this name... ''wait, you guys HAVENT been eating this stuff?''"
    ],
    "notes": " "
  },
  "TreeInterior1": {
    "displayName": "Stick",
    "sellPrice": "90",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Walking Stick"],
    "detdrops": [["Walking Stick", "0.21", "1"]],
    "uses": [
      ["EquipmentShirts23", "3000", "Crafting"],
      ["Dudes Next Door", "Lots", "Post Office"],
      ["Sticks and Stone Something Something Bones...", "500", "Quests"]
    ],
    "description": ["Made of wood."],
    "notes": " "
  },
  "TreeInterior1b": {
    "displayName": "Woodular Circle",
    "sellPrice": "90",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Walking Stick", "Wood Mushroom"],
    "detdrops": [
      ["Walking Stick", "0.00005", "1"],
      ["Wood Mushroom", "0.000075", "1"]
    ],
    "uses": [
      ["EquipmentHats22", "8", "Crafting"],
      ["EquipmentBows6", "3", "Crafting"],
      ["MaxCapBagM5", "4", "Crafting"],
      ["Quest35", "2", "Crafting"],
      ["Literally Physics", "1", "Quests"]
    ],
    "description": [
      "Made of circle that's been carved into the shape of a wood.            NOTE: This is a very rare drop from Branches"
    ],
    "notes": " "
  },
  "TreeInterior2": {
    "displayName": "Acorn",
    "sellPrice": "90",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Nutto"],
    "detdrops": [["Nutto", "0.23", "1"]],
    "uses": [["Dudes Next Door", "Lots", "Post Office"]],
    "description": [
      "Every time I plant one of these, someone eventually steals it and puts a fully grown tree in its place! Very annoying!"
    ],
    "notes": " "
  },
  "BabaYagaETC": {
    "displayName": "Baba Yaga Baby Eggs",
    "sellPrice": "400",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Baba Yaga"],
    "detdrops": [["Baba Yaga", "0.006", "1"]],
    "description": [
      "Eventually you'll be able to turn these into a hatchable egg! Or maybe you already can! Or maybe you never will! Who knows what future content there may be!"
    ],
    "notes": " "
  },
  "DesertA1": {
    "displayName": "Pocket Sand",
    "sellPrice": "60",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Sandy Pot"],
    "detdrops": [["Sandy Pot", "0.22", "1"]],
    "uses": [
      ["EquipmentShirts13", "1500", "Crafting"],
      ["InvBag103", "777", "Crafting"],
      ["Dudes Next Door", "Lots", "Post Office"],
      ["Startue Exp", "Lots", "Alchemy"],
      ["Refining Spontaneity Salts", "Lots", "Construction"],
      ["StampB15", "Lots", "Stamps"]
    ],
    "description": ["This sand aint right, I tell you hwat!"],
    "notes": " "
  },
  "DesertA1b": {
    "displayName": "Glass Shard",
    "sellPrice": "60",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Sandy Pot"],
    "detdrops": [["Sandy Pot", "0.00005", "1"]],
    "uses": [
      ["EquipmentPendant16", "10", "Crafting"],
      ["MaxCapBagM4", "1", "Crafting"],
      ["TestObj13", "2", "Crafting"],
      ["EquipmentHats41", "2", "Crafting"],
      ["EquipmentHats26", "2", "Crafting"],
      ["You Shouldn't Have! No, really.", "1", "Quests"],
      ["StampC2", "Lots", "Stamps"]
    ],
    "description": [
      "The result of letting heat and sand get it on if you know what I'm sayin.                        NOTE: This is a very rare drop from Sandy Pots"
    ],
    "notes": " "
  },
  "DesertA2": {
    "displayName": "Megalodon Tooth",
    "sellPrice": "70",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Mimic"],
    "detdrops": [["Mimic", "0.212", "1"]],
    "uses": [
      ["EquipmentTools5", "2500", "Crafting"],
      ["Quest13", "400", "Crafting"],
      ["EquipmentShirts5", "4000", "Crafting"],
      ["Dudes Next Door", "Lots", "Post Office"],
      ["Lookin' Like a Snack", "4200", "Quests"],
      ["Molto Loggo", "Lots", "Alchemy"],
      ["Mimicraught", "Lots", "Alchemy"],
      ["StampB18", "Lots", "Stamps"]
    ],
    "description": ["Wait a minute, this isn't a real megalodon tooth!"],
    "notes": " "
  },
  "DesertA3": {
    "displayName": "Crabby Cakey",
    "sellPrice": "80",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Crabcake"],
    "detdrops": [["Crabcake", "0.205", "1"]],
    "uses": [
      ["EquipmentToolsHatchet2", "2000", "Crafting"],
      ["Dudes Next Door", "Lots", "Post Office"],
      ["More like 'Sleepius' lmao", "150", "Quests"],
      ["Reely Smart", "Lots", "Alchemy"],
      ["StampB20", "Lots", "Stamps"]
    ],
    "description": [
      "You could probably start a restaurant selling these! Just employ an overeager cook, give the place a cool name like The Crispy Crustacean, and you'd be set!"
    ],
    "notes": " "
  },
  "DesertA3b": {
    "displayName": "Nuget Cake",
    "sellPrice": "80",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Crabcake"],
    "detdrops": [["Crabcake", "0.00005", "1"]],
    "uses": [
      ["EquipmentSword1", "3", "Crafting"],
      ["MaxCapBagF4", "4", "Crafting"],
      ["EquipmentShirts5", "1", "Crafting"],
      ["EquipmentShirts23", "1", "Crafting"],
      ["EquipmentShirts22", "1", "Crafting"],
      ["EquipmentShoes21", "3", "Crafting"],
      ["Don't Desert the Dessert", "2", "Quests"]
    ],
    "description": [
      "Ohhhhh, that's what people mean when they say Love At First Sight!                             NOTE: This is a very rare drop from Crabcakes"
    ],
    "notes": " "
  },
  "DesertB1": {
    "displayName": "Coconotnotto",
    "sellPrice": "95",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Mafioso"],
    "detdrops": [["Mafioso", "0.2", "1"]],
    "uses": [
      ["Dudes Next Door", "Lots", "Post Office"],
      ["Which one of yous is the Mafia?", "2500", "Quests"],
      ["Quick Slap", "Lots", "Alchemy"],
      ["StampA18", "Lots", "Stamps"]
    ],
    "description": [
      "How many O's are in this item's name? Yep, you're right, there's six! Good job!"
    ],
    "notes": " "
  },
  "DesertB2": {
    "displayName": "Furled Flag",
    "sellPrice": "108",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Sand Castle"],
    "detdrops": [["Sand Castle", "0.19", "1"]],
    "uses": [
      ["Dudes Next Door", "Lots", "Post Office"],
      ["Big Meaty Claws", "Lots", "Alchemy"],
      ["StampC9", "Lots", "Stamps"]
    ],
    "description": [
      "It's an American Flag with red paint spilled on all the non-red bits... no wait, it's the German Flag, but they ran out of black and yellow material."
    ],
    "notes": " "
  },
  "DesertB3": {
    "displayName": "Pincer Arm",
    "sellPrice": "120",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Pincermin"],
    "detdrops": [["Pincermin", "0.18", "1"]],
    "uses": [
      ["EquipmentTools6", "10500", "Crafting"],
      ["Dudes Next Door", "Lots", "Post Office"],
      ["StampC14", "Lots", "Stamps"]
    ],
    "description": [
      "That looks sharp! Is probably what the pincermin said before you cut his arm off."
    ],
    "notes": " "
  },
  "DesertB4": {
    "displayName": "Potato Remains",
    "sellPrice": "133",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Mashed Potato"],
    "detdrops": [["Mashed Potato", "0.17", "1"]],
    "uses": [
      ["EquipmentShirts14", "5000", "Crafting"],
      ["Dudes Next Door", "Lots", "Post Office"]
    ],
    "description": ["Mashed potatos, I get it!"],
    "notes": " "
  },
  "DesertC1": {
    "displayName": "High Steaks",
    "sellPrice": "145",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Tyson"],
    "detdrops": [["Tyson", "0.18", "1"]],
    "uses": [
      ["EquipmentSmithingTabs3", "1500", "Crafting"],
      ["Dudes Next Door", "Lots", "Post Office"],
      ["Findin' Fingerprints", "2500", "Quests"],
      ["Brewstachio", "Lots", "Alchemy"]
    ],
    "description": [""],
    "notes": " "
  },
  "DesertC2": {
    "displayName": "Wakka Cherry",
    "sellPrice": "160",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Moonmoon"],
    "detdrops": [["Moonmoon", "0.165", "1"]],
    "uses": [
      ["Dudes Next Door", "Lots", "Post Office"],
      ["Findin' Fingerprints", "2500", "Quests"],
      ["Fmj", "Lots", "Alchemy"]
    ],
    "description": ["Weoweoweoweowdingding!"],
    "notes": " "
  },
  "DesertC2b": {
    "displayName": "Ghost",
    "sellPrice": "160",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Moonmoon"],
    "detdrops": [["Moonmoon", "0.00005", "1"]],
    "uses": [
      ["Quest36", "1", "Crafting"],
      ["BadgeD3", "25", "Crafting"]
    ],
    "description": [
      "In case you haven't noticed, these are all references to the famous early 90s videogame called Gex! This description is like a bad joke at Louis CK's house!"
    ],
    "notes": " "
  },
  "DesertC3": {
    "displayName": "Singlecle",
    "sellPrice": "180",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Sand Giant"],
    "detdrops": [["Sand Giant", "0.152", "1"]],
    "uses": [
      ["Dudes Next Door", "Lots", "Post Office"],
      ["Findin' Fingerprints", "2500", "Quests"],
      ["Cheap Shot", "Lots", "Alchemy"]
    ],
    "description": ["It's like a monocle, but not quite."],
    "notes": " "
  },
  "DesertC4": {
    "displayName": "Shrapshell",
    "sellPrice": "200",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Snelbie"],
    "detdrops": [["Snelbie", "0.14", "1"]],
    "uses": [
      ["Dudes Next Door", "Lots", "Post Office"],
      ["Pelt for the Pelt God", "10", "Quests"],
      ["Laaarrrryyyy", "Lots", "Alchemy"]
    ],
    "description": [
      "The very tippy top of the shell, with some of the underneath part attached as well."
    ],
    "notes": " "
  },
  "SnowA1": {
    "displayName": "Floof Ploof",
    "sellPrice": "200",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Sheepie"],
    "detdrops": [["Sheepie", "0.16", "1"]],
    "uses": [
      ["EquipmentPants6", "8000", "Crafting"],
      ["Fur Refresher", "Lots", "Alchemy"],
      ["Refining Dioxide Synthesis", "Lots", "Construction"],
      ["StampB30", "Lots", "Stamps"]
    ],
    "description": [
      "A ball of sheep wool. Well, it used to be a ball of ice cream but then I re-drew it."
    ],
    "notes": " "
  },
  "SnowA2": {
    "displayName": "Melty Cube",
    "sellPrice": "215",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Frost Flake"],
    "detdrops": [["Frost Flake", "0.16", "1"]],
    "uses": [
      ["EquipmentPunching4", "70000", "Crafting"],
      ["EquipmentSword2", "25000", "Crafting"],
      ["InvBag109", "2000", "Crafting"],
      ["The Blue New World", "2500", "Quests"],
      ["Crikey, it's cold out!", "250", "Quests"],
      ["Cogs For Hands", "Lots", "Alchemy"]
    ],
    "description": ["Eugh whats this WATER doing around my ice???"],
    "notes": " "
  },
  "SnowA2a": {
    "displayName": "Yellow Snowflake",
    "sellPrice": "230",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Frost Flake", "Chillsnap Bronze Chest"],
    "detdrops": [
      ["Frost Flake", "0.00005", "1"],
      ["Chillsnap Bronze Chest", "0.01", "1"]
    ],
    "uses": [
      ["EquipmentPunching5", "100", "Crafting"],
      ["InvBag109", "3", "Crafting"]
    ],
    "description": ["Mmm yellow, my favorite flavor of snow!"],
    "notes": " "
  },
  "SnowA3": {
    "displayName": "Moustache Comb",
    "sellPrice": "250",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Sir Stache"],
    "detdrops": [["Sir Stache", "0.16", "1"]],
    "uses": [
      ["EquipmentTools7", "15000", "Crafting"],
      ["Call Me Bob", "Lots", "Alchemy"]
    ],
    "description": [
      "Sad times I hope I remember to change this before relase."
    ],
    "notes": " "
  },
  "SnowA4": {
    "displayName": "Ram Wool",
    "sellPrice": "500",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Dedotated Ram"],
    "detdrops": [["Dedotated Ram", "0.16", "1"]],
    "description": [
      "It's got a horn stuck in it. I guess you could say this wool is kinda "
    ],
    "notes": " "
  },
  "SnowB1": {
    "displayName": "Sticky Stick",
    "sellPrice": "270",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Bloque"],
    "detdrops": [["Bloque", "0.16", "1"]],
    "uses": [
      ["MaxCapBagM6", "15000", "Crafting"],
      ["The Blue New World", "2500", "Quests"],
      ["StampB29", "Lots", "Stamps"]
    ],
    "description": ["It's ALLLLL sticky!"],
    "notes": " "
  },
  "SnowB2": {
    "displayName": "Mamooth Tusk",
    "sellPrice": "290",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Mamooth"],
    "detdrops": [["Mamooth", "0.16", "1"]],
    "uses": [
      ["The Blue New World", "2500", "Quests"],
      ["Etruscan Lager", "Lots", "Alchemy"]
    ],
    "description": [
      "No see, this is a mamOOth tusk, not a mammoth tusk, thats why you think it looks weird. Trust me, it's an incredibly drawn mamooth tusk, truly a work of art."
    ],
    "notes": " "
  },
  "SnowB2a": {
    "displayName": "Ice Age 3",
    "sellPrice": "3150",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Mamooth"],
    "detdrops": [["Mamooth", "0.00005", "1"]],
    "uses": [["MaxCapBagM6", "3", "Crafting"]],
    "description": [
      "The thrilling documentary that captures the first three years of Jonathan Ice's life, from birth to preschool. It also has thousands of 1 Star Ratings online claiming it's false advertising."
    ],
    "notes": " "
  },
  "SnowB5": {
    "displayName": "Snow Ball",
    "sellPrice": "315",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Snowman"],
    "detdrops": [["Snowman", "0.16", "1"]],
    "uses": [["Snow Slurry", "Lots", "Alchemy"]],
    "description": [
      "If you have two of these together, please be careful what other objects you put near them, I need to keep this game age appropirate!"
    ],
    "notes": " "
  },
  "SnowB3": {
    "displayName": "Pen",
    "sellPrice": "340",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Penguin"],
    "detdrops": [["Penguin", "0.16", "1"]],
    "uses": [["Visible Ink", "Lots", "Alchemy"]],
    "description": [
      "Click the pen on, then hold it down against your desk and let go, and BAM that baby will fly you straight to the principal's office!"
    ],
    "notes": " "
  },
  "SnowB4": {
    "displayName": "Cracked Glass",
    "sellPrice": "360",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Thermister"],
    "detdrops": [["Thermister", "0.16", "1"]],
    "uses": [
      ["Refining Red Salt", "Lots", "Construction"],
      ["StampB35", "Lots", "Stamps"]
    ],
    "description": [
      "Ah Mr. Thermostat, not looking so hot now that I've broken you into tiny little bits... no seriously, I can't tell the temperature now that you're broken."
    ],
    "notes": " "
  },
  "SnowC1": {
    "displayName": "Sippy Straw",
    "sellPrice": "380",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Quenchie"],
    "detdrops": [["Quenchie", "0.16", "1"]],
    "uses": [
      ["Smart Boi Talent", "Lots", "Alchemy"],
      ["Sippy Cup", "Lots", "Alchemy"]
    ],
    "description": [
      "This vacuum operated liquid transfer system is capable of dispencing over 500 mL of dangerous dihydrogen monoxide chemical compounds from one end to the other!"
    ],
    "notes": " "
  },
  "SnowC2": {
    "displayName": "Cryosnake Skin",
    "sellPrice": "400",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Cryosnake"],
    "detdrops": [["Cryosnake", "0.16", "1"]],
    "description": [
      "Wow this is just a cheap recolouring of the normal snakeskin! I want my money back!"
    ],
    "notes": " "
  },
  "SnowC3": {
    "displayName": "Audio Cord",
    "sellPrice": "425",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Bop Box"],
    "detdrops": [["Bop Box", "0.16", "1"]],
    "uses": [
      ["EquipmentShirts27", "75000", "Crafting"],
      ["MaxCapBagM7", "70000", "Crafting"]
    ],
    "description": [
      "Uhhhh... which one which one...?? The red or the blue??? Cmon think think think.. Blue...? 'BOOOOOM'.       Wait, this is an audio cord description? Whoops, I thought this was the Bomb Defuser description!!"
    ],
    "notes": " "
  },
  "SnowC4": {
    "displayName": "Contact Lense",
    "sellPrice": "450",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Neyeptune"],
    "detdrops": [["Neyeptune", "0.16", "1"]],
    "uses": [
      ["40-40 Purity", "Lots", "Alchemy"],
      ["Refining Red Salt", "Lots", "Construction"]
    ],
    "description": [
      "It's the only transparent item in IdleOn! If they weren't, they'd just be pirate eyepatches after all..."
    ],
    "notes": " "
  },
  "SnowC4a": {
    "displayName": "Black Lense",
    "sellPrice": "10000",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Neyeptune"],
    "detdrops": [["Neyeptune", "0.00005", "1"]],
    "uses": [
      ["EquipmentSword3", "10", "Crafting"],
      ["EquipmentBows8", "4", "Crafting"],
      ["EquipmentWands7", "4", "Crafting"],
      ["MaxCapBagM7", "3", "Crafting"],
      ["Voidinator", "Lots", "Building"],
      ["Primordial Shrine", "Lots", "Building"]
    ],
    "description": [
      "Why yes, I have also played that game for 100s of hours since it released over 10 years ago!"
    ],
    "notes": "This item is a reference to [https://terraria.org/ Terraria]"
  },
  "IceMountains2": {
    "displayName": "Ice A La Crem",
    "sellPrice": "1",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "description": [
      "It's just a normal ice cream. It's",
      "been given a fancy name so people",
      "would pay more for it in a store."
    ],
    "notes": " "
  },
  "Hgg": {
    "displayName": "Minuteglass",
    "sellPrice": "1",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Biggie Hours"],
    "detdrops": [["Biggie Hours", "0.3", "1"]],
    "uses": [
      ["EquipmentPants20", "3", "Crafting"],
      ["BadgeD3", "13", "Crafting"]
    ],
    "description": ["It's a bit small, so it's not quite an hourglass, is it."],
    "notes": " "
  },
  "EfauntDrop1": {
    "displayName": "Ripped Tunic",
    "sellPrice": "1",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Efaunt", "Chaotic Efaunt", "Chizoar", "Chaotic Chizoar"],
    "detdrops": [
      ["Efaunt", "0.3", "1"],
      ["Chaotic Efaunt", "0.4", "3"],
      ["Chizoar", "0.3", "1"],
      ["Chaotic Chizoar", "0.4", "3"]
    ],
    "uses": [
      ["EquipmentHats52", "20", "Crafting"],
      ["EquipmentShirts26", "10", "Crafting"],
      ["EquipmentPants20", "7", "Crafting"],
      ["EquipmentShoes21", "5", "Crafting"],
      ["EquipmentRings16", "15", "Crafting"]
    ],
    "description": [
      "A piece of Efaunt's tunic. I guess it must have gotten torn off while you were absolutely obliterating them with big time Damage."
    ],
    "notes": " "
  },
  "EfauntDrop2": {
    "displayName": "Ribbed Tunic",
    "sellPrice": "1",
    "typeGen": "bCraft",
    "ID": "0",
    "Type": "Monster Drop",
    "sources": ["Chaotic Efaunt", "Chaotic Chizoar"],
    "detdrops": [
      ["Chaotic Efaunt", "0.2", "1"],
      ["Chaotic Chizoar", "0.2", "1"]
    ],
    "uses": [["EquipmentRings16", "4", "Crafting"]],
    "description": [
      "Chaotic Efaunt is probably glad you removed a few of his ribs, for uhh... various reasons."
    ],
    "notes": " "
  },
  "Trophy1": {
    "displayName": "King of Food",
    "sellPrice": "10000",
    "typeGen": "aTrophy",
    "ID": "15",
    "Type": "Trophy",
    "lvReqToEquip": "65",
    "Class": "All",
    "Weapon_Power": "3",
    "STR": "10",
    "AGI": "10",
    "WIS": "10",
    "LUK": "10",
    "Defence": "25",
    "sources": ["King of Food"],
    "miscUp1": "20% Food Effect",
    "notes": " "
  },
  "Trophy2": {
    "displayName": "Lucky Lad",
    "sellPrice": "777",
    "typeGen": "aTrophy",
    "ID": "15",
    "Type": "Trophy",
    "lvReqToEquip": "1",
    "Class": "All",
    "LUK": "7",
    "sources": ["SuperDropTable1", "SuperDropTable2", "SuperDropTable3"],
    "detdrops": [
      ["Crystal Carrot", "0.0000007199999999999999", "1.0"],
      ["Green Mushroom", "0.0000000036", "1.0"],
      ["Frog", "0.00000000456", "1.0"],
      ["Bored Bean", "0.0000000053999999999999996", "1.0"],
      ["Red Mushroom", "0.00000000624", "1.0"],
      ["Amarok", "0.0000012", "2.0"],
      ["Chaotic Amarok", "0.0000012", "4.0"],
      ["Nightmare Amarok", "0.0000012", "2.0"],
      ["Baba Yaga", "0.0000012", "2.0"],
      ["Dewdrop Bronze Chest", "0.0000012", "1.0"],
      ["Slime", "0.0000000053999999999999996", "1.0"],
      ["Baby Boa", "0.000000006749999999999998", "1.0"],
      ["Carrotman", "0.0000000081", "1.0"],
      ["Dewdrop Silver Chest", "0.0000013499999999999998", "1.0"],
      ["Glublin", "0.000000006", "1.0"],
      ["Wode Board", "0.000000006749999999999998", "1.0"],
      ["Gigafrog", "0.0000000075", "1.0"],
      ["Dr Defecaus", "0.0000014999999999999998", "2.0"],
      ["Dewdrop Golden Chest", "0.0000014999999999999998", "1.0"],
      ["Poop", "0.000000009899999999999998", "1.0"],
      ["Rat", "0.000000009899999999999998", "1.0"],
      ["Walking Stick", "0.000000009404999999999999", "1.0"],
      ["Nutto", "0.000000010724999999999997", "1.0"],
      ["Wood Mushroom", "0.00000001155", "1.0"],
      ["Mining Copper", "0.000000011699999999999999", "1.0"],
      ["Mining Iron", "0.0000000126", "1.0"],
      ["Mining Gold", "0.000000013499999999999997", "1.0"],
      ["Mining Plat", "0.00000001386", "1.0"],
      ["Mining Dementia", "0.00000001476", "1.0"],
      ["Mining Void", "0.0000000162", "2.0"],
      ["Mining Lustre", "0.0000000171", "2.0"],
      ["Choppin Oak Tree", "0.0000000144", "1.0"],
      ["Choppin Birch Tree", "0.0000000153", "1.0"],
      ["Choppin Jungle Tree", "0.0000000162", "1.0"],
      ["Choppin Forest Tree", "0.0000000171", "1.0"],
      ["Choppin Toilet Tree", "0.00000001908", "1.0"],
      ["Choppin Stump Tree", "0.00000001836", "1.0"],
      ["Crystal Crabal", "0.0000010799999999999998", "1.0"],
      ["Sandy Pot", "0.0000000053999999999999996", "1.0"],
      ["Mimic", "0.00000000576", "1.0"],
      ["Crabcake", "0.000000006479999999999999", "1.0"],
      ["Efaunt", "0.0000018", "2.0"],
      ["Chizoar", "0.0000018", "2.0"],
      ["Nightmare Chizoar", "0.0000018", "2.0"],
      ["Biggie Hours", "0.0000009", "1.0"],
      ["Sandstone Bronze Chest", "0.0000018", "1.0"],
      ["Mafioso", "0.00000000576", "1.0"],
      ["Sand Castle", "0.0000000063", "1.0"],
      ["Pincermin", "0.00000000666", "1.0"],
      ["Mashed Potato", "0.000000007019999999999999", "1.0"],
      ["Dig Doug", "0.00000000576", "1.0"],
      ["Chaotic Efaunt", "0.0000018", "2.0"],
      ["Chaotic Chizoar", "0.0000018", "2.0"],
      ["Sandstone Silver Chest", "0.0000018", "1.0"],
      ["Tyson", "0.00000000576", "1.0"],
      ["Moonmoon", "0.0000000063", "1.0"],
      ["Sand Giant", "0.00000000666", "1.0"],
      ["Snelbie", "0.000000007019999999999999", "1.0"],
      ["Sandstone Golden Chest", "0.0000018", "1.0"],
      ["Fishing Small Fish", "0.000000021599999999999998", "1.0"],
      ["Fishing Goldfish", "0.000000021599999999999998", "1.0"],
      ["Fishing Hermit Can", "0.000000021599999999999998", "1.0"],
      ["Fishing Jellyfish", "0.000000021599999999999998", "1.0"],
      ["Fishing Bloach", "0.000000021599999999999998", "1.0"],
      ["Choppin Palm Tree", "0.000000026999999999999994", "2.0"],
      ["Catching Flies", "0.000000026999999999999994", "1.0"],
      ["Catching Butterflies", "0.000000026999999999999994", "1.0"],
      ["Catching Sentient Cereal", "0.000000026999999999999994", "1.0"],
      ["Catching Fruitflies", "0.000000026999999999999994", "1.0"],
      ["Crystal Cattle", "0.0000010799999999999998", "1.0"],
      ["Sheepie", "0.0000000045", "1.0"],
      ["Frost Flake", "0.00000000504", "1.0"],
      ["Sir Stache", "0.000000005579999999999999", "1.0"],
      ["Xylobone", "0.000000018", "1.0"],
      ["Chillsnap Bronze Chest", "0.0000018", "1.0"],
      ["Bloque", "0.0000000045", "1.0"],
      ["Mamooth", "0.00000000486", "1.0"],
      ["Snowman", "0.00000000522", "1.0"],
      ["Penguin", "0.000000005579999999999999", "1.0"],
      ["Thermister", "0.00000000594", "1.0"],
      ["Chillsnap Silver Chest", "0.0000018", "1.0"],
      ["Dedotated Ram", "0.000000006119999999999999", "1.0"],
      ["Quenchie", "0.0000000045", "1.0"],
      ["Cryosnake", "0.00000000504", "1.0"],
      ["Bop Box", "0.0000000053999999999999996", "1.0"],
      ["Neyeptune", "0.00000000576", "1.0"],
      ["Bloodbone", "0.000000009", "1.0"],
      ["Chillsnap Golden Chest", "0.0000018", "1.0"],
      ["Choppin Saharan Foal", "0.00000001602", "1.0"],
      ["Choppin Wispy Tree", "0.00000001602", "1.0"],
      ["Catching Mosquisnow", "0.000000026999999999999994", "1.0"],
      ["Catching Flycicle", "0.000000026999999999999994", "1.0"]
    ],
    "miscUp1": "7% Drop Chance",
    "notes": " "
  },
  "Trophy3": {
    "displayName": "Club Member",
    "sellPrice": "777",
    "typeGen": "aTrophy",
    "ID": "15",
    "Type": "Trophy",
    "lvReqToEquip": "1",
    "Class": "Beginner",
    "LUK": "5",
    "Defence": "5",
    "sources": ["Becoming the Best Beginner"],
    "miscUp1": "3% Xp From Monsters",
    "notes": " "
  },
  "Trophy4": {
    "displayName": "I Made This Game",
    "sellPrice": "777",
    "typeGen": "aTrophy",
    "ID": "15",
    "Type": "Trophy",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "1",
    "miscUp1": "100% Player Height",
    "miscUp2": "42% Red Colouring",
    "notes": " "
  },
  "Trophy5": {
    "displayName": "Dice Dynamo",
    "sellPrice": "777",
    "typeGen": "aTrophy",
    "ID": "15",
    "Type": "Trophy",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "1",
    "LUK": "5",
    "miscUp1": "2% Luk",
    "notes": "Roll a 1 with [[Special Talents#Roll Da Dice|Roll Da Dice]]"
  },
  "Trophy6": {
    "displayName": "Blunder Hero",
    "sellPrice": "69",
    "typeGen": "aTrophy",
    "ID": "15",
    "Type": "Trophy",
    "lvReqToEquip": "50",
    "Class": "All",
    "Weapon_Power": "2",
    "STR": "5",
    "AGI": "5",
    "WIS": "5",
    "LUK": "5",
    "Defence": "15",
    "sources": ["Champion of the Grasslands"],
    "miscUp1": "3% Skill Afk Gain",
    "notes": " "
  },
  "Trophy7": {
    "displayName": "Original Gamer",
    "sellPrice": "69",
    "typeGen": "aTrophy",
    "ID": "15",
    "Type": "Trophy",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "2",
    "AGI": "2",
    "WIS": "2",
    "LUK": "2",
    "miscUp1": "2% Xp From Monsters",
    "notes": " "
  },
  "Trophy8": {
    "displayName": "Trailblazer",
    "sellPrice": "69",
    "typeGen": "aTrophy",
    "ID": "15",
    "Type": "Trophy",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "4",
    "STR": "3",
    "AGI": "3",
    "WIS": "3",
    "LUK": "3",
    "miscUp1": "20% Xp From Monsters"
  },
  "Trophy9": {
    "displayName": "Ultra Unboxer",
    "sellPrice": "69",
    "typeGen": "aTrophy",
    "ID": "15",
    "Type": "Trophy",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "3",
    "AGI": "3",
    "WIS": "3",
    "LUK": "3",
    "Defence": "3",
    "sources": ["[[Guild Giftbox]]"],
    "miscUp1": "3% Drop Chance",
    "notes": " "
  },
  "Trophy10": {
    "displayName": "Critter Baron",
    "sellPrice": "69",
    "typeGen": "aTrophy",
    "ID": "15",
    "Type": "Trophy",
    "lvReqToEquip": "1",
    "Class": "All",
    "AGI": "10",
    "sources": ["To Trap or not to Trap"],
    "miscUp1": "3% Agi",
    "notes": " "
  },
  "Trophy11": {
    "displayName": "YumYum Sheriff",
    "sellPrice": "69",
    "typeGen": "aTrophy",
    "ID": "15",
    "Type": "Trophy",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "2",
    "STR": "8",
    "AGI": "8",
    "WIS": "8",
    "LUK": "8",
    "Defence": "25",
    "sources": ["The New Sheriff"],
    "miscUp1": "8% Boss Damage"
  },
  "Trophy12": {
    "displayName": "Megalodon",
    "sellPrice": "69",
    "typeGen": "aTrophy",
    "ID": "15",
    "Type": "Trophy",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "5",
    "STR": "15",
    "Defence": "30",
    "miscUp1": "9% Crit Chance"
  },
  "Trophy13": {
    "displayName": "Club Maestro",
    "sellPrice": "69",
    "typeGen": "aTrophy",
    "ID": "15",
    "Type": "Trophy",
    "lvReqToEquip": "70",
    "Class": "Beginner",
    "Weapon_Power": "1",
    "LUK": "20",
    "Defence": "20",
    "sources": ["Maestro! The Stro! Mman!"],
    "miscUp1": "35% Skill Exp"
  },
  "Trophy14": {
    "displayName": "Beach Bro",
    "sellPrice": "69",
    "typeGen": "aTrophy",
    "ID": "15",
    "Type": "Trophy",
    "lvReqToEquip": "1",
    "Class": "All",
    "Weapon_Power": "2",
    "STR": "5",
    "AGI": "5",
    "WIS": "5",
    "LUK": "5",
    "miscUp1": "50% Money"
  },
  "Starlight": {
    "displayName": "Starlight Ore",
    "sellPrice": "5",
    "typeGen": "bOre",
    "ID": "0",
    "Type": "Ore",
    "Effect": "Ore",
    "Amount": "4",
    "Cooldown": "100",
    "sources": ["Mining"],
    "description": [
      "These ores cannot be smelted into",
      "into bars due to the 'Keep Tutorials",
      "Simple' Act passed in 2008."
    ],
    "notes": " "
  },
  "AlienTreetutorial": {
    "displayName": "Alien Logs",
    "sellPrice": "50",
    "typeGen": "bLog",
    "ID": "0",
    "Type": "Log",
    "sources": ["Choppin"],
    "notes": " "
  },
  "EquipmentWeapons2": {
    "displayName": "Flesh Reaper",
    "sellPrice": "40",
    "typeGen": "aWeapon",
    "ID": "5",
    "Type": "Spear",
    "lvReqToEquip": "1",
    "Class": "All",
    "Speed": "5",
    "Reach": "70",
    "Weapon_Power": "690",
    "AGI": "80",
    "LUK": "420",
    "notes": " "
  },
  "Secretstone": {
    "displayName": "Secretstone",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "200",
    "Type": "Quest Item",
    "uses": [["The Few, the Proud", "1", "Quests"]],
    "description": [
      "It's almost as if the very essence",
      "of wonder and mystery has been",
      "infused into this little stone.",
      "Keep this secret to yourself,",
      "don't tell the noobs about it!"
    ],
    "questAss": ["The Few, the Proud"],
    "notes": " "
  },
  "Timecandy1": {
    "displayName": "1 HR Time Candy",
    "sellPrice": "1",
    "typeGen": "dTimeCandy",
    "ID": "60",
    "Type": "Time Candy",
    "sources": [
      "Summer Spirit",
      "Can't somebody else do it?",
      "U Cool?",
      "Clout Chasin'",
      "'Accidental' Exploit",
      "Genie Dieting",
      "A Noob, served Medium Rare!",
      "No Country for One Character",
      "Which one of yous is the Mafia?",
      "Heart Hogger",
      "Crikey, it's cold out!",
      "Trapping with the Lord",
      "Monke Tower Time!",
      "Leaf Him Alone!",
      "Skeleton? Skelegone!",
      "DropTable13",
      "[[Gem Shop]]",
      "[[Alchemy#Level up Gift|Level up Gift]]",
      "[[Guild Giftbox]]"
    ],
    "detdrops": [
      ["Summer Spirit", "0.04", "1"],
      ["Biggie Hours", "0.2", "1.0"],
      ["King Doot", "0.25", "1.0"]
    ],
    "description": ["Hold down to instantly get 1 Hour of AFK Gains."],
    "notes": " "
  },
  "Timecandy2": {
    "displayName": "2 HR Time Candy",
    "sellPrice": "1",
    "typeGen": "dTimeCandy",
    "ID": "120",
    "Type": "Time Candy",
    "sources": [
      "Summer Spirit",
      "Time Crime Episode 1",
      "More like 'Sleepius' lmao",
      "Signed, Sealed and Lost in the Post",
      "High Scorer",
      "Colosseum Champ!",
      "Boo, Headshot!",
      "I'm Seeing Stars!",
      "DropTable13",
      "[[Gem Shop]]",
      "[[Alchemy#Level up Gift|Level up Gift]]",
      "[[Guild Giftbox]]"
    ],
    "detdrops": [
      ["Summer Spirit", "0.01", "3"],
      ["Biggie Hours", "0.13360000000000002", "1.0"],
      ["King Doot", "0.167", "1.0"]
    ],
    "description": ["Hold down to instantly get 2 Hour of AFK Gains."],
    "notes": " "
  },
  "Timecandy3": {
    "displayName": "4 HR Time Candy",
    "sellPrice": "1",
    "typeGen": "dTimeCandy",
    "ID": "240",
    "Type": "Time Candy",
    "sources": [
      "Time Crime Episode 2",
      "Crystal Crime Stopper",
      "U Cool?",
      "Colosseum Champ!",
      "I'm Seeing Stars!",
      "Crikey, it's cold out!",
      "Frogecoin to the MOON!",
      "Yet another Cartoon Reference",
      "Small Stingers, Big Owie",
      "DropTable13",
      "[[Gem Shop]]",
      "[[Alchemy#Level up Gift|Level up Gift]]",
      "[[Guild Giftbox]]"
    ],
    "detdrops": [
      ["Biggie Hours", "0.048", "1.0"],
      ["King Doot", "0.06", "1.0"]
    ],
    "description": ["Hold down to instantly get 4 Hour of AFK Gains."],
    "notes": " "
  },
  "Timecandy4": {
    "displayName": "12 HR Time Candy",
    "sellPrice": "1",
    "typeGen": "dTimeCandy",
    "ID": "720",
    "Type": "Time Candy",
    "sources": [
      "Super Skillage",
      "Red Stuff Bad!",
      "Colosseum GDQ",
      "Pelt for the Pelt God",
      "Happy Tree Friend",
      "Noot Noot!",
      "Treasure Hunt 1",
      "DropTable13",
      "[[Gem Shop]]",
      "[[Alchemy#Level up Gift|Level up Gift]]",
      "[[Guild Giftbox]]"
    ],
    "detdrops": [
      ["Biggie Hours", "0.016", "1.0"],
      ["King Doot", "0.02", "1.0"]
    ],
    "description": [
      "Twelve hours, that's a long time! Hold down to instantly get 12 Hour of AFK Gains."
    ],
    "notes": " "
  },
  "Timecandy5": {
    "displayName": "24 HR Time Candy",
    "sellPrice": "1",
    "typeGen": "dTimeCandy",
    "ID": "1440",
    "Type": "Time Candy",
    "sources": [
      "Top Skillage",
      "Time Crime Season Finale",
      "Dont lay a finger on my Sheepies!!!",
      "The Mummy of Mystery",
      "Tomb Raid",
      "Untitled Quest",
      "Treasure Hunt 2",
      "DropTable13",
      "[[Alchemy#Level up Gift|Level up Gift]]"
    ],
    "detdrops": [
      ["Biggie Hours", "0.0048000000000000004", "1.0"],
      ["King Doot", "0.006", "1.0"]
    ],
    "description": [
      "An entire day, just like that! Hold down to instantly get 24 Hour of AFK Gains."
    ],
    "notes": " "
  },
  "Timecandy6": {
    "displayName": "72 HR Time Candy",
    "sellPrice": "1",
    "typeGen": "dTimeCandy",
    "ID": "4320",
    "Type": "Time Candy",
    "sources": ["DropTable13"],
    "detdrops": [
      ["Biggie Hours", "0.0004", "1.0"],
      ["King Doot", "0.0005", "1.0"]
    ],
    "description": [
      "The LEGENDARY 72 Hour candy. Hold down to instantly get 30 Seconds of AFK Gai... just kidding, you'll get 72 Hours!"
    ],
    "notes": " "
  },
  "Timecandy7": {
    "displayName": "Steamy Time Candy",
    "sellPrice": "1",
    "typeGen": "dTimeCandy",
    "ID": "1",
    "Type": "Time Candy",
    "sources": ["Treasure Hunt 4"],
    "description": [
      "Thanks for playing on Steam! Hold down to instantly get anywhere from 10 minutes to 24 hours of AFK time!"
    ],
    "notes": " "
  },
  "InvBag1": {
    "displayName": "Inventory Bag A",
    "sellPrice": "200",
    "typeGen": "aInventoryBag",
    "ID": "0",
    "Type": "Inventory G",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["Mr. Worldwide"],
    "notes": " ",
    "description": [
      "Hold down to permanently add +1 Slots to your Inventory. Can only be used once."
    ]
  },
  "InvBag2": {
    "displayName": "Inventory Bag B",
    "sellPrice": "200",
    "typeGen": "aInventoryBag",
    "ID": "1",
    "Type": "Inventory ",
    "lvReqToEquip": "3",
    "Class": "All",
    "sources": ["The Unoccupied Picnic"],
    "notes": " ",
    "description": [
      "Hold down to permanently add +1 Slots to your Inventory. Can only be used once."
    ]
  },
  "InvBag3": {
    "displayName": "Inventory Bag C",
    "sellPrice": "200",
    "typeGen": "aInventoryBag",
    "ID": "2",
    "Type": "Inventory ",
    "lvReqToEquip": "5",
    "Class": "All",
    "sources": ["Seeking Foreign Aid"],
    "notes": " ",
    "description": [
      "Hold down to permanently add +1 Slots to your Inventory. Can only be used once."
    ]
  },
  "InvBag4": {
    "displayName": "Inventory Bag D",
    "sellPrice": "200",
    "typeGen": "aInventoryBag",
    "ID": "3",
    "Type": "Inventory ",
    "lvReqToEquip": "10",
    "Class": "All",
    "sources": ["The Witcher, but not Really"],
    "notes": " ",
    "description": [
      "Hold down to permanently add +2 Slots to your Inventory. Can only be used once."
    ]
  },
  "InvBag5": {
    "displayName": "Inventory Bag E",
    "sellPrice": "200",
    "typeGen": "aInventoryBag",
    "ID": "4",
    "Type": "Inventory ",
    "lvReqToEquip": "15",
    "Class": "All",
    "sources": ["Bake Him Away, Toys"],
    "notes": " ",
    "description": [
      "Hold down to permanently add +2 Slots to your Inventory. Can only be used once."
    ]
  },
  "InvBag6": {
    "displayName": "Inventory Bag F",
    "sellPrice": "200",
    "typeGen": "aInventoryBag",
    "ID": "5",
    "Type": "Inventory ",
    "lvReqToEquip": "20",
    "Class": "All",
    "sources": ["Commence Criminal Crimes!"],
    "notes": " ",
    "description": [
      "Hold down to permanently add +2 Slots to your Inventory. Can only be used once."
    ]
  },
  "InvBag7": {
    "displayName": "Inventory Bag G",
    "sellPrice": "200",
    "typeGen": "aInventoryBag",
    "ID": "6",
    "Type": "Inventory ",
    "lvReqToEquip": "20",
    "Class": "All",
    "sources": ["DropTable6"],
    "detdrops": [
      ["Crystal Crabal", "0.0007199999999999999", "1.0"],
      ["Sandy Pot", "0.0000036", "1.0"],
      ["Mimic", "0.00000384", "1.0"],
      ["Crabcake", "0.000004319999999999999", "1.0"],
      ["Efaunt", "0.0012", "2.0"],
      ["Nightmare Amarok", "0.0012", "2.0"],
      ["Chizoar", "0.0012", "2.0"],
      ["Nightmare Chizoar", "0.0012", "2.0"],
      ["Biggie Hours", "0.0006", "1.0"],
      ["Sandstone Bronze Chest", "0.0012", "1.0"]
    ],
    "notes": " ",
    "description": [
      "Hold down to permanently add +2 Slots to your Inventory. Can only be used once."
    ]
  },
  "InvBag8": {
    "displayName": "Inventory Bag H",
    "sellPrice": "200",
    "typeGen": "aInventoryBag",
    "ID": "7",
    "Type": "Inventory ",
    "lvReqToEquip": "20",
    "Class": "All",
    "sources": ["Oh No, not the Elderly!"],
    "notes": " ",
    "description": [
      "Hold down to permanently add +2 Slots to your Inventory. Can only be used once."
    ]
  },
  "InvBag9": {
    "displayName": "Inventory Bag I",
    "sellPrice": "200",
    "typeGen": "aInventoryBag",
    "ID": "8",
    "Type": "Inventory ",
    "lvReqToEquip": "20",
    "Class": "All",
    "notes": " ",
    "description": [
      "Hold down to permanently add +2 Slots to your Inventory. Can only be used once."
    ]
  },
  "InvBag21": {
    "displayName": "Inventory Bag U",
    "sellPrice": "200",
    "typeGen": "aInventoryBag",
    "ID": "20",
    "Type": "Inventory ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["[[Gem Shop]]"],
    "notes": " ",
    "description": [
      "Hold down to permanently add +4 Slots to your Inventory. Can only be used once."
    ]
  },
  "InvBag22": {
    "displayName": "Inventory Bag V",
    "sellPrice": "200",
    "typeGen": "aInventoryBag",
    "ID": "21",
    "Type": "Inventory ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["[[Gem Shop]]"],
    "notes": " ",
    "description": [
      "Hold down to permanently add +4 Slots to your Inventory. Can only be used once."
    ]
  },
  "InvBag23": {
    "displayName": "Inventory Bag W",
    "sellPrice": "200",
    "typeGen": "aInventoryBag",
    "ID": "22",
    "Type": "Inventory ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["[[Gem Shop]]"],
    "notes": " ",
    "description": [
      "Hold down to permanently add +4 Slots to your Inventory. Can only be used once."
    ]
  },
  "InvBag24": {
    "displayName": "Inventory Bag X",
    "sellPrice": "200",
    "typeGen": "aInventoryBag",
    "ID": "23",
    "Type": "Inventory ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["[[Gem Shop]]"],
    "notes": " ",
    "description": [
      "Hold down to permanently add +4 Slots to your Inventory. Can only be used once."
    ]
  },
  "InvBag25": {
    "displayName": "Inventory Bag Y",
    "sellPrice": "200",
    "typeGen": "aInventoryBag",
    "ID": "24",
    "Type": "Inventory ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["[[Gem Shop]]"],
    "notes": " ",
    "description": [
      "Hold down to permanently add +4 Slots to your Inventory. Can only be used once."
    ]
  },
  "InvBag26": {
    "displayName": "Inventory Bag Z",
    "sellPrice": "200",
    "typeGen": "aInventoryBag",
    "ID": "25",
    "Type": "Inventory ",
    "lvReqToEquip": "1",
    "Class": "All",
    "notes": " ",
    "description": [
      "Hold down to permanently add +4 Slots to your Inventory. Can only be used once."
    ]
  },
  "InvBag100": {
    "displayName": "Snakeskinventory Bag",
    "sellPrice": "1300",
    "typeGen": "aInventoryBag",
    "ID": "100",
    "Type": "Inventory ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["Baby Boa"],
    "detdrops": [["Baby Boa", "0.00008", "1"]],
    "uses": [["InvBag103", "1", "Crafting"]],
    "notes": " ",
    "description": [
      "Hold down to permanently add +2 Slots to your Inventory. Can only be used once."
    ]
  },
  "InvBag101": {
    "displayName": "Totally Normal and not fake Bag",
    "sellPrice": "5000",
    "typeGen": "aInventoryBag",
    "ID": "101",
    "Type": "Inventory ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["Mimic"],
    "detdrops": [["Mimic", "0.000025", "1"]],
    "notes": " ",
    "description": [
      "Hold down to permanently add +2 Slots to your Inventory. Can only be used once."
    ]
  },
  "InvBag102": {
    "displayName": "Blunderbag",
    "sellPrice": "1757",
    "typeGen": "aInventoryBag",
    "ID": "102",
    "Type": "Inventory ",
    "lvReqToEquip": "5",
    "Class": "All",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "recipeData": {
      "recipe": [
        ["EquipmentShirts16", "2"],
        ["InvStorageF", "1"],
        ["Grasslands1", "169"]
      ],
      "levelReqToCraft": "8",
      "expGiven": "60",
      "no": 53,
      "tab": "Anvil Tab 1",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "EquipmentShirts16", "2"],
      [0, "InvStorageF", "1"],
      [0, "Grasslands1", "169"]
    ],
    "detRecipeTotals": [
      ["EquipmentShirts16", 2],
      ["InvStorageF", 1],
      ["Grasslands1", 169]
    ],
    "notes": " ",
    "description": [
      "Hold down to permanently add +4 Slots to your Inventory. Can only be used once."
    ]
  },
  "InvBag103": {
    "displayName": "Sandy Satchel",
    "sellPrice": "48420",
    "typeGen": "aInventoryBag",
    "ID": "103",
    "Type": "Inventory ",
    "lvReqToEquip": "20",
    "Class": "All",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "recipeData": {
      "recipe": [
        ["Sewers1b", "1"],
        ["InvBag100", "1"],
        ["DesertA1", "777"]
      ],
      "levelReqToCraft": "18",
      "expGiven": "1200",
      "no": 60,
      "tab": "Anvil Tab 2",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "Sewers1b", "1"],
      [0, "InvBag100", "1"],
      [0, "DesertA1", "777"]
    ],
    "detRecipeTotals": [
      ["Sewers1b", 1],
      ["InvBag100", 1],
      ["DesertA1", 777]
    ],
    "notes": " ",
    "description": [
      "Hold down to permanently add +4 Slots to your Inventory. Can only be used once."
    ]
  },
  "InvBag104": {
    "displayName": "Bummo Bag",
    "sellPrice": "24",
    "typeGen": "aInventoryBag",
    "ID": "104",
    "Type": "Inventory ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["Blunder Hills Vendor"],
    "shopData": [
      {
        "vendor": "Blunder Hills",
        "quantity": "1",
        "no": 18
      }
    ],
    "notes": " ",
    "description": [
      "Hold down to permanently add +1 Slots to your Inventory. Can only be used once."
    ]
  },
  "InvBag105": {
    "displayName": "Capitalist Case",
    "sellPrice": "2499",
    "typeGen": "aInventoryBag",
    "ID": "105",
    "Type": "Inventory ",
    "lvReqToEquip": "15",
    "Class": "All",
    "sources": ["Encroaching Forest Villas Vendor"],
    "uses": [["Quest35", "1", "Crafting"]],
    "shopData": [
      {
        "vendor": "Encroaching Forest Villas",
        "quantity": "2",
        "no": 9
      }
    ],
    "notes": " ",
    "description": [
      "Hold down to permanently add +1 Slots to your Inventory. Can only be used once."
    ]
  },
  "InvBag106": {
    "displayName": "Wealthy Wallet",
    "sellPrice": "249999",
    "typeGen": "aInventoryBag",
    "ID": "106",
    "Type": "Inventory ",
    "lvReqToEquip": "35",
    "Class": "All",
    "sources": ["YumYum Grotto Vendor"],
    "shopData": [
      {
        "vendor": "YumYum Grotto",
        "quantity": "1",
        "no": 11
      }
    ],
    "notes": " ",
    "description": [
      "Hold down to permanently add +1 Slots to your Inventory. Can only be used once."
    ]
  },
  "InvBag107": {
    "displayName": "Prosperous Pouch",
    "sellPrice": "24999999",
    "typeGen": "aInventoryBag",
    "ID": "107",
    "Type": "Inventory ",
    "lvReqToEquip": "70",
    "Class": "All",
    "sources": ["Frostbite Towndra Vendor"],
    "shopData": [
      {
        "vendor": "Frostbite Towndra",
        "quantity": "1",
        "no": 11
      }
    ],
    "notes": " ",
    "description": [
      "Hold down to permanently add +1 Slots to your Inventory. Can only be used once."
    ]
  },
  "InvBag108": {
    "displayName": "Sack of Success",
    "sellPrice": "2499999999",
    "typeGen": "aInventoryBag",
    "ID": "108",
    "Type": "Inventory ",
    "lvReqToEquip": "120",
    "Class": "All",
    "notes": " ",
    "description": [
      "Hold down to permanently add +2 Slots to your Inventory. Can only be used once."
    ]
  },
  "InvBag109": {
    "displayName": "Shivering Sack",
    "sellPrice": "435690",
    "typeGen": "aInventoryBag",
    "ID": "109",
    "Type": "Inventory ",
    "lvReqToEquip": "65",
    "Class": "All",
    "sources": ["Smithing", "Recipe from Tasks Unlocks"],
    "recipeData": {
      "recipe": [
        ["InvBag110", "1"],
        ["SnowA2", "2000"],
        ["SnowA2a", "3"]
      ],
      "levelReqToCraft": "35",
      "expGiven": "5000",
      "no": 59,
      "tab": "Anvil Tab 3",
      "recipeFrom": ["Tasks Unlocks"]
    },
    "detrecipe": [
      [0, "InvBag110", "1"],
      [0, "SnowA2", "2000"],
      [0, "SnowA2a", "3"]
    ],
    "detRecipeTotals": [
      ["InvBag110", 1],
      ["SnowA2", 2000],
      ["SnowA2a", 3]
    ],
    "notes": " ",
    "description": [
      "Hold down to permanently add +3 Slots to your Inventory. Can only be used once."
    ]
  },
  "InvBag110": {
    "displayName": "Mamooth Hide Bag",
    "sellPrice": "5000",
    "typeGen": "aInventoryBag",
    "ID": "110",
    "Type": "Inventory ",
    "lvReqToEquip": "55",
    "Class": "All",
    "sources": ["Mamooth"],
    "detdrops": [["Mamooth", "0.000008", "1"]],
    "uses": [["InvBag109", "1", "Crafting"]],
    "notes": " ",
    "description": [
      "Hold down to permanently add +1 Slots to your Inventory. Can only be used once."
    ]
  },
  "InvStorage1": {
    "displayName": "Storage Chest 1",
    "sellPrice": "200",
    "typeGen": "aStorageChest",
    "ID": "0",
    "Type": "Storage ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["Slime for Storage"],
    "notes": " ",
    "description": [
      "Hold down to permanently add +3 Slots to your Storage Chest. Can only be used once."
    ]
  },
  "InvStorage2": {
    "displayName": "Storage Chest 2",
    "sellPrice": "1000",
    "typeGen": "aStorageChest",
    "ID": "1",
    "Type": "Storage ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["Blunder Hills Vendor"],
    "shopData": [
      {
        "vendor": "Blunder Hills",
        "quantity": "1",
        "no": 19
      }
    ],
    "notes": " ",
    "description": [
      "Hold down to permanently add +3 Slots to your Storage Chest. Can only be used once."
    ]
  },
  "InvStorage3": {
    "displayName": "Storage Chest 3",
    "sellPrice": "800",
    "typeGen": "aStorageChest",
    "ID": "2",
    "Type": "Storage ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["The Scientific Method, According to a Rock"],
    "notes": " ",
    "description": [
      "Hold down to permanently add +3 Slots to your Storage Chest. Can only be used once."
    ]
  },
  "InvStorage4": {
    "displayName": "Storage Chest 4",
    "sellPrice": "1500",
    "typeGen": "aStorageChest",
    "ID": "3",
    "Type": "Storage ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["The Hatless Howerhouse!"],
    "notes": " ",
    "description": [
      "Hold down to permanently add +3 Slots to your Storage Chest. Can only be used once."
    ]
  },
  "InvStorage5": {
    "displayName": "Storage Chest 5",
    "sellPrice": "1",
    "typeGen": "aStorageChest",
    "ID": "4",
    "Type": "Storage ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["Beatboxing Starterpack"],
    "notes": " ",
    "description": [
      "Hold down to permanently add +3 Slots to your Storage Chest. Can only be used once."
    ]
  },
  "InvStorage6": {
    "displayName": "Storage Chest 6",
    "sellPrice": "2500",
    "typeGen": "aStorageChest",
    "ID": "5",
    "Type": "Storage ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["Blunder Hills Vendor"],
    "shopData": [
      {
        "vendor": "Blunder Hills",
        "quantity": "1",
        "no": 20
      }
    ],
    "notes": " ",
    "description": [
      "Hold down to permanently add +4 Slots to your Storage Chest. Can only be used once."
    ]
  },
  "InvStorage7": {
    "displayName": "Storage Chest 7",
    "sellPrice": "5500",
    "typeGen": "aStorageChest",
    "ID": "6",
    "Type": "Storage ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["Blunder Hills Vendor"],
    "shopData": [
      {
        "vendor": "Blunder Hills",
        "quantity": "1",
        "no": 21
      }
    ],
    "notes": " ",
    "description": [
      "Hold down to permanently add +4 Slots to your Storage Chest. Can only be used once."
    ]
  },
  "InvStorage8": {
    "displayName": "Storage Chest 8",
    "sellPrice": "5500",
    "typeGen": "aStorageChest",
    "ID": "7",
    "Type": "Storage ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["Encroaching Forest Villas Vendor"],
    "shopData": [
      {
        "vendor": "Encroaching Forest Villas",
        "quantity": "1",
        "no": 10
      }
    ],
    "notes": " ",
    "description": [
      "Hold down to permanently add +4 Slots to your Storage Chest. Can only be used once."
    ]
  },
  "InvStorage9": {
    "displayName": "Storage Chest 9",
    "sellPrice": "8900",
    "typeGen": "aStorageChest",
    "ID": "8",
    "Type": "Storage ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["YumYum Grotto Vendor"],
    "shopData": [
      {
        "vendor": "YumYum Grotto",
        "quantity": "1",
        "no": 12
      }
    ],
    "notes": " ",
    "description": [
      "Hold down to permanently add +4 Slots to your Storage Chest. Can only be used once."
    ]
  },
  "InvStorage10": {
    "displayName": "Storage Chest 10",
    "sellPrice": "25000",
    "typeGen": "aStorageChest",
    "ID": "9",
    "Type": "Storage ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["YumYum Grotto Vendor"],
    "shopData": [
      {
        "vendor": "YumYum Grotto",
        "quantity": "1",
        "no": 13
      }
    ],
    "notes": " ",
    "description": [
      "Hold down to permanently add +5 Slots to your Storage Chest. Can only be used once."
    ]
  },
  "InvStorage11": {
    "displayName": "Storage Chest 11",
    "sellPrice": "50000",
    "typeGen": "aStorageChest",
    "ID": "10",
    "Type": "Storage ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["Red Stuff Bad!"],
    "notes": " ",
    "description": [
      "Hold down to permanently add +5 Slots to your Storage Chest. Can only be used once."
    ]
  },
  "InvStorage12": {
    "displayName": "Storage Chest 12",
    "sellPrice": "7000",
    "typeGen": "aStorageChest",
    "ID": "11",
    "Type": "Storage ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["Encroaching Forest Villas Vendor"],
    "shopData": [
      {
        "vendor": "Encroaching Forest Villas",
        "quantity": "1",
        "no": 11
      }
    ],
    "notes": " ",
    "description": [
      "Hold down to permanently add +5 Slots to your Storage Chest. Can only be used once."
    ]
  },
  "InvStorage13": {
    "displayName": "Storage Chest 13",
    "sellPrice": "60000",
    "typeGen": "aStorageChest",
    "ID": "12",
    "Type": "Storage ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["YumYum Grotto Vendor"],
    "shopData": [
      {
        "vendor": "YumYum Grotto",
        "quantity": "1",
        "no": 14
      }
    ],
    "notes": " ",
    "description": [
      "Hold down to permanently add +5 Slots to your Storage Chest. Can only be used once."
    ]
  },
  "InvStorage14": {
    "displayName": "Storage Chest 14",
    "sellPrice": "1",
    "typeGen": "aStorageChest",
    "ID": "14",
    "Type": "Storage ",
    "lvReqToEquip": "1",
    "Class": "All",
    "notes": " ",
    "description": [
      "Hold down to permanently add +5 Slots to your Storage Chest. Can only be used once."
    ]
  },
  "InvStorage15": {
    "displayName": "Storage Chest 15",
    "sellPrice": "100000",
    "typeGen": "aStorageChest",
    "ID": "13",
    "Type": "Storage ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["YumYum Grotto Vendor"],
    "shopData": [
      {
        "vendor": "YumYum Grotto",
        "quantity": "1",
        "no": 15
      }
    ],
    "notes": " ",
    "description": [
      "Hold down to permanently add +6 Slots to your Storage Chest. Can only be used once."
    ]
  },
  "InvStorage16": {
    "displayName": "Storage Chest 16",
    "sellPrice": "150000",
    "typeGen": "aStorageChest",
    "ID": "15",
    "Type": "Storage ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["Frostbite Towndra Vendor"],
    "shopData": [
      {
        "vendor": "Frostbite Towndra",
        "quantity": "1",
        "no": 12
      }
    ],
    "notes": " ",
    "description": [
      "Hold down to permanently add +6 Slots to your Storage Chest. Can only be used once."
    ]
  },
  "InvStorage17": {
    "displayName": "Storage Chest 17",
    "sellPrice": "200000",
    "typeGen": "aStorageChest",
    "ID": "16",
    "Type": "Storage ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["Frostbite Towndra Vendor"],
    "shopData": [
      {
        "vendor": "Frostbite Towndra",
        "quantity": "1",
        "no": 13
      }
    ],
    "notes": " ",
    "description": [
      "Hold down to permanently add +6 Slots to your Storage Chest. Can only be used once."
    ]
  },
  "InvStorage18": {
    "displayName": "Storage Chest 18",
    "sellPrice": "350000",
    "typeGen": "aStorageChest",
    "ID": "17",
    "Type": "Storage ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["Frostbite Towndra Vendor"],
    "shopData": [
      {
        "vendor": "Frostbite Towndra",
        "quantity": "1",
        "no": 14
      }
    ],
    "notes": " ",
    "description": [
      "Hold down to permanently add +6 Slots to your Storage Chest. Can only be used once."
    ]
  },
  "InvStorage19": {
    "displayName": "Storage Chest 19",
    "sellPrice": "500000",
    "typeGen": "aStorageChest",
    "ID": "18",
    "Type": "Storage ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["Frostbite Towndra Vendor"],
    "shopData": [
      {
        "vendor": "Frostbite Towndra",
        "quantity": "1",
        "no": 15
      }
    ],
    "notes": " ",
    "description": [
      "Hold down to permanently add +6 Slots to your Storage Chest. Can only be used once."
    ]
  },
  "InvStorage20": {
    "displayName": "Storage Chest 20",
    "sellPrice": "800000",
    "typeGen": "aStorageChest",
    "ID": "19",
    "Type": "Storage ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["Frostbite Towndra Vendor"],
    "shopData": [
      {
        "vendor": "Frostbite Towndra",
        "quantity": "1",
        "no": 16
      }
    ],
    "notes": " ",
    "description": [
      "Hold down to permanently add +7 Slots to your Storage Chest. Can only be used once."
    ]
  },
  "InvStorage21": {
    "displayName": "Storage Chest 21",
    "sellPrice": "1250000",
    "typeGen": "aStorageChest",
    "ID": "20",
    "Type": "Storage ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["Frostbite Towndra Vendor"],
    "shopData": [
      {
        "vendor": "Frostbite Towndra",
        "quantity": "1",
        "no": 17
      }
    ],
    "notes": " ",
    "description": [
      "Hold down to permanently add +7 Slots to your Storage Chest. Can only be used once."
    ]
  },
  "InvStorage31": {
    "displayName": "Storage Chest 90",
    "sellPrice": "200",
    "typeGen": "aStorageChest",
    "ID": "30",
    "Type": "Storage ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["[[Gem Shop]]"],
    "notes": " ",
    "description": [
      "Hold down to permanently add +6 Slots to your Storage Chest. Can only be used once."
    ]
  },
  "InvStorage32": {
    "displayName": "Storage Chest 91",
    "sellPrice": "200",
    "typeGen": "aStorageChest",
    "ID": "31",
    "Type": "Storage ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["[[Gem Shop]]"],
    "notes": " ",
    "description": [
      "Hold down to permanently add +6 Slots to your Storage Chest. Can only be used once."
    ]
  },
  "InvStorage33": {
    "displayName": "Storage Chest 92",
    "sellPrice": "200",
    "typeGen": "aStorageChest",
    "ID": "32",
    "Type": "Storage ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["[[Gem Shop]]"],
    "notes": " ",
    "description": [
      "Hold down to permanently add +6 Slots to your Storage Chest. Can only be used once."
    ]
  },
  "InvStorage34": {
    "displayName": "Storage Chest 93",
    "sellPrice": "200",
    "typeGen": "aStorageChest",
    "ID": "33",
    "Type": "Storage ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["[[Gem Shop]]"],
    "notes": " ",
    "description": [
      "Hold down to permanently add +6 Slots to your Storage Chest. Can only be used once."
    ]
  },
  "InvStorage35": {
    "displayName": "Storage Chest 94",
    "sellPrice": "200",
    "typeGen": "aStorageChest",
    "ID": "34",
    "Type": "Storage ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["[[Gem Shop]]"],
    "notes": " ",
    "description": [
      "Hold down to permanently add +6 Slots to your Storage Chest. Can only be used once."
    ]
  },
  "InvStorage36": {
    "displayName": "Storage Chest 95",
    "sellPrice": "200",
    "typeGen": "aStorageChest",
    "ID": "35",
    "Type": "Storage ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["[[Gem Shop]]"],
    "notes": " ",
    "description": [
      "Hold down to permanently add +6 Slots to your Storage Chest. Can only be used once."
    ]
  },
  "InvStorage37": {
    "displayName": "Storage Chest 96",
    "sellPrice": "200",
    "typeGen": "aStorageChest",
    "ID": "36",
    "Type": "Storage ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["[[Gem Shop]]"],
    "notes": " ",
    "description": [
      "Hold down to permanently add +6 Slots to your Storage Chest. Can only be used once."
    ]
  },
  "InvStorage38": {
    "displayName": "Storage Chest 97",
    "sellPrice": "200",
    "typeGen": "aStorageChest",
    "ID": "37",
    "Type": "Storage ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["[[Gem Shop]]"],
    "notes": " ",
    "description": [
      "Hold down to permanently add +6 Slots to your Storage Chest. Can only be used once."
    ]
  },
  "InvStorage39": {
    "displayName": "Storage Chest 98",
    "sellPrice": "200",
    "typeGen": "aStorageChest",
    "ID": "38",
    "Type": "Storage ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["[[Gem Shop]]"],
    "notes": " ",
    "description": [
      "Hold down to permanently add +6 Slots to your Storage Chest. Can only be used once."
    ]
  },
  "InvStorage40": {
    "displayName": "Storage Chest 99",
    "sellPrice": "200",
    "typeGen": "aStorageChest",
    "ID": "39",
    "Type": "Storage ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["[[Gem Shop]]"],
    "notes": " ",
    "description": [
      "Hold down to permanently add +6 Slots to your Storage Chest. Can only be used once."
    ]
  },
  "InvStorage41": {
    "displayName": "Storage Chest 99B",
    "sellPrice": "200",
    "typeGen": "aStorageChest",
    "ID": "40",
    "Type": "Storage ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["[[Gem Shop]]"],
    "notes": " ",
    "description": [
      "Hold down to permanently add +6 Slots to your Storage Chest. Can only be used once."
    ]
  },
  "InvStorage42": {
    "displayName": "Storage Chest 99C",
    "sellPrice": "200",
    "typeGen": "aStorageChest",
    "ID": "41",
    "Type": "Storage ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["[[Gem Shop]]"],
    "notes": " ",
    "description": [
      "Hold down to permanently add +6 Slots to your Storage Chest. Can only be used once."
    ]
  },
  "InvStorageF": {
    "displayName": "Dank Paypay Chest",
    "sellPrice": "1000",
    "typeGen": "aStorageChest",
    "ID": "100",
    "Type": "Storage ",
    "lvReqToEquip": "1",
    "Class": "All",
    "sources": ["Frog"],
    "detdrops": [["Frog", "0.0001", "1"]],
    "uses": [["InvBag102", "1", "Crafting"]],
    "notes": " ",
    "description": [
      "Hold down to permanently add +3 Slots to your Storage Chest. Can only be used once."
    ]
  },
  "Key1": {
    "displayName": "Forest Villa Key",
    "sellPrice": "50",
    "typeGen": "dCurrency",
    "ID": "0",
    "Type": "Boss Key",
    "sources": [
      "Dewdrop Bronze Chest",
      "Dewdrop Silver Chest",
      "Dewdrop Golden Chest",
      "Simple Shippin",
      "Plan-it Express",
      "Why he Die???",
      "Bow Wow going Dow..n!"
    ],
    "detdrops": [
      ["Dewdrop Bronze Chest", "0.04", "1"],
      ["Dewdrop Silver Chest", "0.1", "1"],
      ["Dewdrop Golden Chest", "0.18", "1"]
    ],
    "description": [
      "Hold down to add these Forest Boss Keys to your account. Account items are shared between all your Characters!"
    ],
    "notes": " "
  },
  "Key2": {
    "displayName": "Efaunt's Tomb Key",
    "sellPrice": "50",
    "typeGen": "dCurrency",
    "ID": "1",
    "Type": "Boss Key",
    "sources": [
      "King Doot",
      "Sandstone Bronze Chest",
      "Sandstone Silver Chest",
      "Sandstone Golden Chest",
      "Simple Shippin",
      "Plan-it Express",
      "Dudes Next Door",
      "I'm Blue Dabadedada",
      "The Blue New World"
    ],
    "detdrops": [
      ["King Doot", "0.8", "1"],
      ["Sandstone Bronze Chest", "0.04", "1"],
      ["Sandstone Silver Chest", "0.1", "1"],
      ["Sandstone Golden Chest", "0.18", "1"]
    ],
    "description": ["Hold down to add these Desert Boss Keys to your account."],
    "notes": " "
  },
  "Key3": {
    "displayName": "Chizoar's Cavern Key",
    "sellPrice": "50",
    "typeGen": "dCurrency",
    "ID": "2",
    "Type": "Boss Key",
    "sources": [
      "Chillsnap Bronze Chest",
      "Chillsnap Silver Chest",
      "Chillsnap Golden Chest"
    ],
    "detdrops": [
      ["Chillsnap Bronze Chest", "0.04", "1"],
      ["Chillsnap Silver Chest", "0.1", "1"],
      ["Chillsnap Golden Chest", "0.18", "1"]
    ],
    "description": [
      "Hold down to add these Iceland Boss Keys to your account."
    ],
    "notes": " "
  },
  "ObolFrag": {
    "displayName": "Obol Fragment",
    "sellPrice": "50",
    "typeGen": "dCurrency",
    "ID": "-1",
    "Type": "Obol Fragment",
    "description": [
      "Hold down to add these Obol Fragments to your account. Account items are shared between all your Characters!"
    ],
    "notes": " "
  },
  "DoubleAFKtix": {
    "displayName": "Double AFK Gain Ticket",
    "sellPrice": "50",
    "typeGen": "dCurrency",
    "ID": "-1",
    "Type": "Ticket",
    "description": [
      "Hold down to add these Double AFK tickets to your account. Account items are shared between all your Characters!"
    ],
    "notes": " "
  },
  "TixCol": {
    "displayName": "Colosseum Ticket",
    "sellPrice": "50",
    "typeGen": "dCurrency",
    "ID": "-1",
    "Type": "Ticket",
    "sources": [
      "Surprise Attack!",
      "Down The Mimic Hole!",
      "Which one of yous is the Mafia?",
      "Skeleton? Skelegone!"
    ],
    "description": [
      "Hold down to add these Colosseum tickets to your account. Account items are shared between all your Characters!"
    ],
    "notes": " "
  },
  "DeliveryBox": {
    "displayName": "Delivery Box",
    "sellPrice": "50",
    "typeGen": "dCurrency",
    "ID": "-1",
    "Type": "Box",
    "description": [
      "Hold down to add these Delivery Boxes to your Post-Office Upgrade amount! These will be shared between all your Characters!"
    ],
    "notes": " "
  },
  "SilverPen": {
    "displayName": "Silver Pen",
    "sellPrice": "50",
    "typeGen": "dCurrency",
    "ID": "-1",
    "Type": "Office Pen",
    "sources": ["SuperDropTable1", "SuperDropTable2", "SuperDropTable3"],
    "detdrops": [
      ["Crystal Carrot", "0.000168", "1.0"],
      ["Green Mushroom", "0.0000008400000000000001", "1.0"],
      ["Frog", "0.000001064", "1.0"],
      ["Bored Bean", "0.0000012600000000000002", "1.0"],
      ["Red Mushroom", "0.0000014560000000000001", "1.0"],
      ["Amarok", "0.00028000000000000003", "2.0"],
      ["Chaotic Amarok", "0.00028000000000000003", "4.0"],
      ["Nightmare Amarok", "0.00028000000000000003", "2.0"],
      ["Baba Yaga", "0.00028000000000000003", "2.0"],
      ["Dewdrop Bronze Chest", "0.00028000000000000003", "1.0"],
      ["Slime", "0.0000012600000000000002", "1.0"],
      ["Baby Boa", "0.000001575", "1.0"],
      ["Carrotman", "0.0000018900000000000001", "1.0"],
      ["Dewdrop Silver Chest", "0.000315", "1.0"],
      ["Glublin", "0.0000014000000000000001", "1.0"],
      ["Wode Board", "0.000001575", "1.0"],
      ["Gigafrog", "0.0000017500000000000002", "1.0"],
      ["Dr Defecaus", "0.00035000000000000005", "2.0"],
      ["Dewdrop Golden Chest", "0.00035000000000000005", "1.0"],
      ["Poop", "0.00000231", "1.0"],
      ["Rat", "0.00000231", "1.0"],
      ["Walking Stick", "0.0000021945", "1.0"],
      ["Nutto", "0.0000025024999999999998", "1.0"],
      ["Wood Mushroom", "0.0000026950000000000005", "1.0"],
      ["Mining Copper", "0.00000273", "1.0"],
      ["Mining Iron", "0.0000029400000000000007", "1.0"],
      ["Mining Gold", "0.00000315", "1.0"],
      ["Mining Plat", "0.0000032340000000000007", "1.0"],
      ["Mining Dementia", "0.0000034440000000000004", "1.0"],
      ["Mining Void", "0.0000037800000000000002", "2.0"],
      ["Mining Lustre", "0.000003990000000000001", "2.0"],
      ["Choppin Oak Tree", "0.0000033600000000000004", "1.0"],
      ["Choppin Birch Tree", "0.000003570000000000001", "1.0"],
      ["Choppin Jungle Tree", "0.0000037800000000000002", "1.0"],
      ["Choppin Forest Tree", "0.000003990000000000001", "1.0"],
      ["Choppin Toilet Tree", "0.000004452000000000001", "1.0"],
      ["Choppin Stump Tree", "0.000004284000000000001", "1.0"],
      ["Crystal Crabal", "0.00032399999999999996", "1.0"],
      ["Sandy Pot", "0.00000162", "1.0"],
      ["Mimic", "0.0000017280000000000002", "1.0"],
      ["Crabcake", "0.000001944", "1.0"],
      ["Efaunt", "0.00054", "2.0"],
      ["Chizoar", "0.00054", "2.0"],
      ["Nightmare Chizoar", "0.00054", "2.0"],
      ["Biggie Hours", "0.00027", "1.0"],
      ["Sandstone Bronze Chest", "0.00054", "1.0"],
      ["Mafioso", "0.0000017280000000000002", "1.0"],
      ["Sand Castle", "0.0000018900000000000001", "1.0"],
      ["Pincermin", "0.000001998", "1.0"],
      ["Mashed Potato", "0.000002106", "1.0"],
      ["Dig Doug", "0.0000017280000000000002", "1.0"],
      ["Chaotic Efaunt", "0.00054", "2.0"],
      ["Chaotic Chizoar", "0.00054", "2.0"],
      ["Sandstone Silver Chest", "0.00054", "1.0"],
      ["Tyson", "0.0000017280000000000002", "1.0"],
      ["Moonmoon", "0.0000018900000000000001", "1.0"],
      ["Sand Giant", "0.000001998", "1.0"],
      ["Snelbie", "0.000002106", "1.0"],
      ["Sandstone Golden Chest", "0.00054", "1.0"],
      ["Fishing Small Fish", "0.00000648", "1.0"],
      ["Fishing Goldfish", "0.00000648", "1.0"],
      ["Fishing Hermit Can", "0.00000648", "1.0"],
      ["Fishing Jellyfish", "0.00000648", "1.0"],
      ["Fishing Bloach", "0.00000648", "1.0"],
      ["Choppin Palm Tree", "0.000008099999999999999", "2.0"],
      ["Catching Flies", "0.000008099999999999999", "1.0"],
      ["Catching Butterflies", "0.000008099999999999999", "1.0"],
      ["Catching Sentient Cereal", "0.000008099999999999999", "1.0"],
      ["Catching Fruitflies", "0.000008099999999999999", "1.0"],
      ["Crystal Cattle", "0.00032399999999999996", "1.0"],
      ["Sheepie", "0.00000135", "1.0"],
      ["Frost Flake", "0.000001512", "1.0"],
      ["Sir Stache", "0.0000016739999999999998", "1.0"],
      ["Xylobone", "0.0000054", "1.0"],
      ["Chillsnap Bronze Chest", "0.00054", "1.0"],
      ["Bloque", "0.00000135", "1.0"],
      ["Mamooth", "0.000001458", "1.0"],
      ["Snowman", "0.000001566", "1.0"],
      ["Penguin", "0.0000016739999999999998", "1.0"],
      ["Thermister", "0.000001782", "1.0"],
      ["Chillsnap Silver Chest", "0.00054", "1.0"],
      ["Dedotated Ram", "0.0000018359999999999997", "1.0"],
      ["Quenchie", "0.00000135", "1.0"],
      ["Cryosnake", "0.000001512", "1.0"],
      ["Bop Box", "0.00000162", "1.0"],
      ["Neyeptune", "0.0000017280000000000002", "1.0"],
      ["Bloodbone", "0.0000027", "1.0"],
      ["Chillsnap Golden Chest", "0.00054", "1.0"],
      ["Choppin Saharan Foal", "0.000004806", "1.0"],
      ["Choppin Wispy Tree", "0.000004806", "1.0"],
      ["Catching Mosquisnow", "0.000008099999999999999", "1.0"],
      ["Catching Flycicle", "0.000008099999999999999", "1.0"]
    ],
    "description": [
      "Hold down to add a Silver Pen to your Post-Office! You can use it to skip a Delivery!"
    ],
    "notes": " "
  },
  "PremiumGem": {
    "displayName": "Gem",
    "sellPrice": "69",
    "typeGen": "dCurrency",
    "ID": "-1",
    "Type": "Gem",
    "sources": [
      "King Doot",
      "Egggulyte",
      "Egg Capsule",
      "Summer Spirit",
      "Shell Snake",
      "Dewdrop Bronze Chest",
      "Dewdrop Silver Chest",
      "Dewdrop Golden Chest",
      "Dewdrop Golden Chest",
      "Sandstone Bronze Chest",
      "Sandstone Silver Chest",
      "Sandstone Golden Chest",
      "Chillsnap Bronze Chest",
      "Chillsnap Silver Chest",
      "Chillsnap Golden Chest",
      "Simple Shippin",
      "Plan-it Express",
      "Dudes Next Door",
      "Roll of Anger",
      "Early Evening Eating Endeavor",
      "Don't Desert the Dessert",
      "A Midnight Snack",
      "Super Skillage",
      "Party Crashin'",
      "Oinko Boinko",
      "U Cool?",
      "Cross Platform Promotion",
      "Don't Step to Me, Bro!",
      "The Whaley Hard Minigame",
      "Signed, Sealed and Lost in the Post",
      "Bringing Bob's Boxes",
      "Darn Lazy Gamers!",
      "Be like Buster!",
      "Trickle Down Economics",
      "Hoopsies",
      "Only Winners have Portraits",
      "Criminal Code of Conduct",
      "Spooky Scary Skelepoops",
      "Lookin' Like a Snack",
      "PSA. You Are Being Eaten!",
      "A Noob, served Medium Rare!",
      "Rhyming is Key!",
      "Uh, Something About Vials?",
      "Journey to the Center of the Blundermines",
      "Findin' Fingerprints",
      "Dressing like a Dork",
      "The Grind Begins...?",
      "Say Goodbye to your Dubloon!",
      "The Notorious B.O.B",
      "The Worst Trade Deal in History",
      "Children? What'd they ever do for Me...",
      "Colosseum GDQ",
      "Boo, Headshot!",
      "You Shouldn't Have! No, really.",
      "I'm Seeing Stars!",
      "Heart Hogger",
      "Heartbreaker",
      "Egg Shaped Lootboxes!",
      "I've Got a Golden Tickegg!",
      "Crikey, it's cold out!",
      "Turn ON for what???",
      "Trapping with the Lord",
      "Constructing a Tower",
      "Monke Tower Time!",
      "Taking Samples",
      "Leaf Him Alone!",
      "The Mouse n the Molerat",
      "Noot Noot!",
      "DropTable13",
      "[[Alchemy#Level up Gift|Level up Gift]]",
      "[[Guild Giftbox]]"
    ],
    "detdrops": [
      ["King Doot", "0.6", "8"],
      ["Egggulyte", "0.3", "1"],
      ["Egg Capsule", "0.3", "1"],
      ["Summer Spirit", "0.5", "1"],
      ["Shell Snake", "0.05", "1"],
      ["Dewdrop Bronze Chest", "0.05", "1"],
      ["Dewdrop Silver Chest", "0.12", "1"],
      ["Dewdrop Golden Chest", "0.3", "1"],
      ["Sandstone Bronze Chest", "0.1", "1"],
      ["Sandstone Silver Chest", "0.2", "1"],
      ["Sandstone Golden Chest", "0.4", "1"],
      ["Chillsnap Bronze Chest", "0.12", "1"],
      ["Chillsnap Silver Chest", "0.23", "1"],
      ["Chillsnap Golden Chest", "0.45", "1"],
      ["Biggie Hours", "0.4", "5.0"]
    ],
    "description": [
      "Hold down to add these gems to your account. You can then spend them in the Gem Shop!"
    ],
    "notes": " "
  },
  "TalentPoint1": {
    "displayName": "Talent Point Tab 1",
    "sellPrice": "1",
    "typeGen": "dCurrency",
    "ID": "0",
    "Type": "Talent Point",
    "description": [
      "Hold down to gain a Talent Point for the first tab of talents. THIS APPLIES TO ALL CHARACTERS, even ones you haven't made yet, so it doesn't matter which character uses this item."
    ]
  },
  "TalentPoint2": {
    "displayName": "Talent Point Tab 2",
    "sellPrice": "1",
    "typeGen": "dCurrency",
    "ID": "1",
    "Type": "Talent Point",
    "sources": ["Treasure Hunt 3"],
    "description": [
      "Hold down to gain a Talent Point for the second tab of talents. THIS APPLIES TO ALL CHARACTERS, even ones you haven't made yet, so it doesn't matter which character uses this item."
    ]
  },
  "TalentPoint3": {
    "displayName": "Talent Point Tab 3",
    "sellPrice": "1",
    "typeGen": "dCurrency",
    "ID": "2",
    "Type": "Talent Point",
    "sources": ["Treasure Hunt 2"],
    "description": [
      "Hold down to gain a Talent Point for the third tab of talents. THIS APPLIES TO ALL CHARACTERS, even ones you haven't made yet, so it doesn't matter which character uses this item."
    ]
  },
  "TalentPoint4": {
    "displayName": "Talent Point Tab 4",
    "sellPrice": "1",
    "typeGen": "dCurrency",
    "ID": "3",
    "Type": "Talent Point",
    "description": [
      "Hold down to gain a Talent Point for the fourth tab of talents. THIS APPLIES TO ALL CHARACTERS, even ones you haven't made yet, so it doesn't matter which character uses this item."
    ]
  },
  "TalentPoint5": {
    "displayName": "Talent Point Tab 4",
    "sellPrice": "1",
    "typeGen": "dCurrency",
    "ID": "4",
    "Type": "Talent Point",
    "description": [
      "Hold down to gain a Talent Point for the fifth tab of talents. THIS APPLIES TO ALL CHARACTERS, even ones you haven't made yet, so it doesn't matter which character uses this item."
    ]
  },
  "TalentPoint6": {
    "displayName": "Talent Point Special Tab",
    "sellPrice": "1",
    "typeGen": "dCurrency",
    "ID": "5",
    "Type": "Talent Point",
    "sources": ["Treasure Hunt 2"],
    "description": [
      "Hold down to gain a Talent Point for the Special tab of talents. THIS APPLIES TO ALL CHARACTERS, even ones you haven't made yet, so it doesn't matter which character uses this item."
    ]
  },
  "Line1": {
    "displayName": "Copper Twine",
    "sellPrice": "3500",
    "typeGen": "dFishToolkit",
    "ID": "1",
    "Type": "Fishing Line",
    "sources": ["Faraway Piers Vendor"],
    "description": [
      "Hold down to add this accessory to it to your fishing toolkit, where it can be accessed by all characters!"
    ],
    "Fishing": {
      "Name": "Copper_Twine",
      "Depth1": "0",
      "Depth2": "3",
      "Depth3": "5",
      "Depth4": "0",
      "FishingExp": "0",
      "FishingSpeed": "3",
      "FishingPower": "0"
    },
    "shopData": [
      {
        "vendor": "Faraway Piers",
        "quantity": "1",
        "no": 0
      }
    ]
  },
  "Line2": {
    "displayName": "Silver Twine",
    "sellPrice": "50",
    "typeGen": "dFishToolkit",
    "ID": "2",
    "Type": "Fishing Line",
    "sources": ["Helping 100 times over"],
    "description": [
      "Hold down to add this accessory to it to your fishing toolkit, where it can be accessed by all characters!"
    ],
    "Fishing": {
      "Name": "Silver_Twine",
      "Depth1": "0",
      "Depth2": "0",
      "Depth3": "20",
      "Depth4": "0",
      "FishingExp": "15",
      "FishingSpeed": "0",
      "FishingPower": "0"
    }
  },
  "Line3": {
    "displayName": "Gold Twine",
    "sellPrice": "50",
    "typeGen": "dFishToolkit",
    "ID": "3",
    "Type": "Fishing Line",
    "description": [
      "Hold down to add this accessory to it to your fishing toolkit, where it can be accessed by all characters!"
    ],
    "Fishing": {
      "Name": "Gold_Twine",
      "Depth1": "0",
      "Depth2": "0",
      "Depth3": "0",
      "Depth4": "0",
      "FishingExp": "0",
      "FishingSpeed": "0",
      "FishingPower": "0"
    }
  },
  "Line4": {
    "displayName": "Platinum Twine",
    "sellPrice": "50",
    "typeGen": "dFishToolkit",
    "ID": "4",
    "Type": "Fishing Line",
    "description": [
      "Hold down to add this accessory to it to your fishing toolkit, where it can be accessed by all characters!"
    ],
    "Fishing": {
      "Name": "Platinum_Twine",
      "Depth1": "0",
      "Depth2": "0",
      "Depth3": "0",
      "Depth4": "0",
      "FishingExp": "0",
      "FishingSpeed": "0",
      "FishingPower": "0"
    }
  },
  "Line5": {
    "displayName": "Leafy Vines",
    "sellPrice": "7500",
    "typeGen": "dFishToolkit",
    "ID": "5",
    "Type": "Fishing Line",
    "sources": ["Faraway Piers Vendor"],
    "description": [
      "Hold down to add this accessory to it to your fishing toolkit, where it can be accessed by all characters!"
    ],
    "Fishing": {
      "Name": "Leafy_Vines",
      "Depth1": "0",
      "Depth2": "0",
      "Depth3": "10",
      "Depth4": "0",
      "FishingExp": "0",
      "FishingSpeed": "0",
      "FishingPower": "2"
    },
    "shopData": [
      {
        "vendor": "Faraway Piers",
        "quantity": "1",
        "no": 2
      }
    ]
  },
  "Line6": {
    "displayName": "Fun Flags",
    "sellPrice": "50",
    "typeGen": "dFishToolkit",
    "ID": "6",
    "Type": "Fishing Line",
    "sources": ["[[Alchemy#Level up Gift|Level up Gift]]"],
    "description": [
      "Hold down to add this accessory to it to your fishing toolkit, where it can be accessed by all characters!"
    ],
    "Fishing": {
      "Name": "Fun_Flags",
      "Depth1": "0",
      "Depth2": "0",
      "Depth3": "8",
      "Depth4": "8",
      "FishingExp": "0",
      "FishingSpeed": "1",
      "FishingPower": "3"
    }
  },
  "Line7": {
    "displayName": "Electrical Wiring",
    "sellPrice": "50",
    "typeGen": "dFishToolkit",
    "ID": "7",
    "Type": "Fishing Line",
    "sources": ["The Biggest Fish in the Sea...?"],
    "description": [
      "Hold down to add this accessory to it to your fishing toolkit, where it can be accessed by all characters!"
    ],
    "Fishing": {
      "Name": "Electrical_Wire",
      "Depth1": "0",
      "Depth2": "0",
      "Depth3": "5",
      "Depth4": "20",
      "FishingExp": "0",
      "FishingSpeed": "2",
      "FishingPower": "5"
    }
  },
  "Line8": {
    "displayName": "Wiener Links",
    "sellPrice": "50",
    "typeGen": "dFishToolkit",
    "ID": "8",
    "Type": "Fishing Line",
    "description": [
      "Hold down to add this accessory to it to your fishing toolkit, where it can be accessed by all characters!"
    ],
    "Fishing": {
      "Name": "Wiener_Links",
      "Depth1": "0",
      "Depth2": "0",
      "Depth3": "17",
      "Depth4": "5",
      "FishingExp": "0",
      "FishingSpeed": "3",
      "FishingPower": "10"
    }
  },
  "Line9": {
    "displayName": "Zeus Gon Fishin",
    "sellPrice": "50",
    "typeGen": "dFishToolkit",
    "ID": "9",
    "Type": "Fishing Line",
    "description": [
      "Hold down to add this accessory to it to your fishing toolkit, where it can be accessed by all characters!"
    ],
    "Fishing": {
      "Name": "Zeus_Gon_Fishin",
      "Depth1": "0",
      "Depth2": "0",
      "Depth3": "0",
      "Depth4": "30",
      "FishingExp": "0",
      "FishingSpeed": "5",
      "FishingPower": "20"
    }
  },
  "Line10": {
    "displayName": "Needledrop",
    "sellPrice": "15000",
    "typeGen": "dFishToolkit",
    "ID": "10",
    "Type": "Fishing Line",
    "sources": ["Faraway Piers Vendor"],
    "description": [
      "Hold down to add this accessory to it to your fishing toolkit, where it can be accessed by all characters! Also turns your character into Idleon's busiest music nerd for 0.01 seconds."
    ],
    "Fishing": {
      "Name": "Needledrop",
      "Depth1": "0",
      "Depth2": "0",
      "Depth3": "5",
      "Depth4": "10",
      "FishingExp": "5",
      "FishingSpeed": "0",
      "FishingPower": "0"
    },
    "shopData": [
      {
        "vendor": "Faraway Piers",
        "quantity": "1",
        "no": 5
      }
    ]
  },
  "Line11": {
    "displayName": "Spoons Lol",
    "sellPrice": "50",
    "typeGen": "dFishToolkit",
    "ID": "11",
    "Type": "Fishing Line",
    "sources": ["The Whaley Hard Minigame"],
    "description": [
      "Hold down to add this accessory to it to your fishing toolkit, where it can be accessed by all characters!"
    ],
    "Fishing": {
      "Name": "Spoons_Lol",
      "Depth1": "0",
      "Depth2": "0",
      "Depth3": "0",
      "Depth4": "15",
      "FishingExp": "9",
      "FishingSpeed": "2",
      "FishingPower": "1"
    }
  },
  "Line12": {
    "displayName": "Its a Boy Celebration",
    "sellPrice": "50",
    "typeGen": "dFishToolkit",
    "ID": "12",
    "Type": "Fishing Line",
    "description": [
      "Hold down to add this accessory to it to your fishing toolkit, where it can be accessed by all characters!"
    ],
    "Fishing": {
      "Name": "Its_a_Boy",
      "Depth1": "0",
      "Depth2": "0",
      "Depth3": "0",
      "Depth4": "0",
      "FishingExp": "0",
      "FishingSpeed": "15",
      "FishingPower": "5"
    }
  },
  "Line13": {
    "displayName": "Its a Girl Celebration",
    "sellPrice": "50",
    "typeGen": "dFishToolkit",
    "ID": "13",
    "Type": "Fishing Line",
    "description": [
      "Hold down to add this accessory to it to your fishing toolkit, where it can be accessed by all characters!"
    ],
    "Fishing": {
      "Name": "Its_a_Girl",
      "Depth1": "0",
      "Depth2": "0",
      "Depth3": "0",
      "Depth4": "0",
      "FishingExp": "15",
      "FishingSpeed": "5",
      "FishingPower": "0"
    }
  },
  "Line14": {
    "displayName": "Its Alright Celebration",
    "sellPrice": "50",
    "typeGen": "dFishToolkit",
    "ID": "14",
    "Type": "Fishing Line",
    "description": [
      "Hold down to add this accessory to it to your fishing toolkit, where it can be accessed by all characters!"
    ],
    "Fishing": {
      "Name": "Its_Alright",
      "Depth1": "0",
      "Depth2": "0",
      "Depth3": "0",
      "Depth4": "0",
      "FishingExp": "8",
      "FishingSpeed": "8",
      "FishingPower": "8"
    }
  },
  "Weight1": {
    "displayName": "Wormie Weight",
    "sellPrice": "5000",
    "typeGen": "dFishToolkit",
    "ID": "1",
    "Type": "Fishing Weight",
    "sources": ["Faraway Piers Vendor", "Mopey Dick"],
    "description": [
      "Hold down to add this accessory to it to your fishing toolkit, where it can be accessed by all characters!"
    ],
    "Fishing": {
      "Name": "Wormie",
      "Depth1": "0",
      "Depth2": "15",
      "Depth3": "0",
      "Depth4": "0",
      "FishingExp": "5",
      "FishingSpeed": "0",
      "FishingPower": "0"
    },
    "shopData": [
      {
        "vendor": "Faraway Piers",
        "quantity": "1",
        "no": 1
      }
    ]
  },
  "Weight2": {
    "displayName": "Iron Hook",
    "sellPrice": "50",
    "typeGen": "dFishToolkit",
    "ID": "2",
    "Type": "Fishing Weight",
    "sources": ["Don't Step to Me, Bro!", "Helping 100 times over"],
    "description": [
      "Hold down to add this accessory to it to your fishing toolkit, where it can be accessed by all characters!"
    ],
    "Fishing": {
      "Name": "Iron_Hook",
      "Depth1": "3",
      "Depth2": "2",
      "Depth3": "0",
      "Depth4": "0",
      "FishingExp": "0",
      "FishingSpeed": "3",
      "FishingPower": "1"
    }
  },
  "Weight3": {
    "displayName": "Basic Bobber",
    "sellPrice": "50",
    "typeGen": "dFishToolkit",
    "ID": "3",
    "Type": "Fishing Weight",
    "sources": ["Uncovering the Deep Sea State!!!"],
    "description": [
      "Hold down to add this accessory to it to your fishing toolkit, where it can be accessed by all characters!"
    ],
    "Fishing": {
      "Name": "Basic_Bobber",
      "Depth1": "0",
      "Depth2": "3",
      "Depth3": "3",
      "Depth4": "0",
      "FishingExp": "4",
      "FishingSpeed": "4",
      "FishingPower": "1"
    }
  },
  "Weight4": {
    "displayName": "Dualhook Prongs",
    "sellPrice": "50",
    "typeGen": "dFishToolkit",
    "ID": "4",
    "Type": "Fishing Weight",
    "description": [
      "Hold down to add this accessory to it to your fishing toolkit, where it can be accessed by all characters!"
    ],
    "Fishing": {
      "Name": "Dualhook_Prongs",
      "Depth1": "0",
      "Depth2": "0",
      "Depth3": "4",
      "Depth4": "4",
      "FishingExp": "0",
      "FishingSpeed": "8",
      "FishingPower": "3"
    }
  },
  "Weight5": {
    "displayName": "One Pound of Steel",
    "sellPrice": "10000",
    "typeGen": "dFishToolkit",
    "ID": "5",
    "Type": "Fishing Weight",
    "sources": ["Faraway Piers Vendor"],
    "description": [
      "Hold down to add this accessory to it to your fishing toolkit, where it can be accessed by all characters!"
    ],
    "Fishing": {
      "Name": "Pound_of_Steel",
      "Depth1": "0",
      "Depth2": "0",
      "Depth3": "0",
      "Depth4": "30",
      "FishingExp": "2",
      "FishingSpeed": "2",
      "FishingPower": "0"
    },
    "shopData": [
      {
        "vendor": "Faraway Piers",
        "quantity": "1",
        "no": 3
      }
    ]
  },
  "Weight6": {
    "displayName": "One Pound of Feathers",
    "sellPrice": "50",
    "typeGen": "dFishToolkit",
    "ID": "6",
    "Type": "Fishing Weight",
    "sources": ["Can you do the Can Can?"],
    "description": [
      "Hold down to add this accessory to it to your fishing toolkit, where it can be accessed by all characters!"
    ],
    "Fishing": {
      "Name": "Pound_of_Feathers",
      "Depth1": "0",
      "Depth2": "0",
      "Depth3": "35",
      "Depth4": "10",
      "FishingExp": "0",
      "FishingSpeed": "5",
      "FishingPower": "0"
    }
  },
  "Weight7": {
    "displayName": "Massless Unit for Physics Questions",
    "sellPrice": "50",
    "typeGen": "dFishToolkit",
    "ID": "7",
    "Type": "Fishing Weight",
    "description": [
      "Hold down to add this accessory to it to your fishing toolkit, where it can be accessed by all characters!"
    ],
    "Fishing": {
      "Name": "Massless_Unit",
      "Depth1": "20",
      "Depth2": "0",
      "Depth3": "0",
      "Depth4": "0",
      "FishingExp": "10",
      "FishingSpeed": "0",
      "FishingPower": "0"
    }
  },
  "Weight8": {
    "displayName": "Literal Elephant",
    "sellPrice": "50",
    "typeGen": "dFishToolkit",
    "ID": "8",
    "Type": "Fishing Weight",
    "sources": ["The Mummy of Mystery"],
    "description": [
      "Hold down to add this accessory to it to your fishing toolkit, where it can be accessed by all characters!"
    ],
    "Fishing": {
      "Name": "Literal_Elephant",
      "Depth1": "0",
      "Depth2": "0",
      "Depth3": "20",
      "Depth4": "60",
      "FishingExp": "0",
      "FishingSpeed": "0",
      "FishingPower": "6"
    }
  },
  "Weight9": {
    "displayName": "Valve Patented Circle Thingies",
    "sellPrice": "50",
    "typeGen": "dFishToolkit",
    "ID": "9",
    "Type": "Fishing Weight",
    "description": [
      "Hold down to add this accessory to it to your fishing toolkit, where it can be accessed by all characters!"
    ],
    "Fishing": {
      "Name": "Valve_Circles",
      "Depth1": "0",
      "Depth2": "0",
      "Depth3": "0",
      "Depth4": "40",
      "FishingExp": "5",
      "FishingSpeed": "10",
      "FishingPower": "5"
    }
  },
  "Weight10": {
    "displayName": "Dynamite",
    "sellPrice": "17500",
    "typeGen": "dFishToolkit",
    "ID": "10",
    "Type": "Fishing Weight",
    "sources": ["Faraway Piers Vendor"],
    "description": [
      "Hold down to add this accessory to it to your fishing toolkit, where it can be accessed by all characters!"
    ],
    "Fishing": {
      "Name": "Dynamite",
      "Depth1": "0",
      "Depth2": "0",
      "Depth3": "10",
      "Depth4": "20",
      "FishingExp": "0",
      "FishingSpeed": "0",
      "FishingPower": "2"
    },
    "shopData": [
      {
        "vendor": "Faraway Piers",
        "quantity": "1",
        "no": 4
      }
    ]
  },
  "Weight11": {
    "displayName": "Not Dynamite",
    "sellPrice": "55000",
    "typeGen": "dFishToolkit",
    "ID": "11",
    "Type": "Fishing Weight",
    "sources": ["Faraway Piers Vendor"],
    "description": [
      "Hold down to add this accessory to it to your fishing toolkit, where it can be accessed by all characters! Also, the name is technically true."
    ],
    "Fishing": {
      "Name": "Not_Dynamite",
      "Depth1": "12",
      "Depth2": "12",
      "Depth3": "0",
      "Depth4": "0",
      "FishingExp": "0",
      "FishingSpeed": "0",
      "FishingPower": "4"
    },
    "shopData": [
      {
        "vendor": "Faraway Piers",
        "quantity": "1",
        "no": 6
      }
    ]
  },
  "Weight12": {
    "displayName": "Triple Threat",
    "sellPrice": "50",
    "typeGen": "dFishToolkit",
    "ID": "12",
    "Type": "Fishing Weight",
    "sources": ["Bobbin' Bobbers"],
    "description": [
      "Hold down to add this accessory to it to your fishing toolkit, where it can be accessed by all characters!"
    ],
    "Fishing": {
      "Name": "Triple_Threat",
      "Depth1": "0",
      "Depth2": "0",
      "Depth3": "0",
      "Depth4": "0",
      "FishingExp": "6",
      "FishingSpeed": "6",
      "FishingPower": "6"
    }
  },
  "Weight13": {
    "displayName": "Crash Box",
    "sellPrice": "50",
    "typeGen": "dFishToolkit",
    "ID": "11",
    "Type": "Fishing Weight",
    "description": [
      "Hold down to add this accessory to it to your fishing toolkit, where it can be accessed by all characters! Woah. Woah! WOAAHHH!!!"
    ],
    "Fishing": {
      "Name": "Crash_Box",
      "Depth1": "0",
      "Depth2": "0",
      "Depth3": "0",
      "Depth4": "11",
      "FishingExp": "0",
      "FishingSpeed": "12",
      "FishingPower": "5"
    }
  },
  "Weight14": {
    "displayName": "Fat Albert",
    "sellPrice": "50",
    "typeGen": "dFishToolkit",
    "ID": "12",
    "Type": "Fishing Weight",
    "description": [
      "Hold down to add this accessory to it to your fishing toolkit, where it can be accessed by all characters! Oh Albert, what were you thinking? Seriously, I genuinely can't comprehend what you were thinking haha!"
    ],
    "Fishing": {
      "Name": "Fat_Albert",
      "Depth1": "0",
      "Depth2": "0",
      "Depth3": "0",
      "Depth4": "0",
      "FishingExp": "10",
      "FishingSpeed": "0",
      "FishingPower": "19"
    }
  },
  "CardsA0": {
    "displayName": "Green Mushroom Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Green Mushroom"],
    "detdrops": [["Green Mushroom", "0.0001", "1"]],
    "cardData": ["Blunder Hills", "5", "+ Base HP", "12", "0", "Green Mushroom"]
  },
  "CardsA1": {
    "displayName": "Red Mushroom Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Red Mushroom"],
    "detdrops": [["Red Mushroom", "0.0001", "1"]],
    "cardData": ["Blunder Hills", "10", "+ Base LUK", "3", "1", "Red Mushroom"]
  },
  "CardsA2": {
    "displayName": "Frog Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Frog"],
    "detdrops": [["Frog", "0.0001", "1"]],
    "cardData": ["Blunder Hills", "6", "+ Base MP", "10", "2", "Frog"]
  },
  "CardsA3": {
    "displayName": "Bored Bean Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Bored Bean"],
    "detdrops": [["Bored Bean", "0.000097", "1"]],
    "cardData": ["Blunder Hills", "7", "+ Base Damage", "7", "3", "Bored Bean"]
  },
  "CardsA4": {
    "displayName": "Slime Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Slime"],
    "detdrops": [["Slime", "0.000095", "1"]],
    "cardData": ["Blunder Hills", "8", "+ Base WIS", "2", "4", "Slime"]
  },
  "CardsA5": {
    "displayName": "Baby Boa Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Baby Boa"],
    "detdrops": [["Baby Boa", "0.000094", "1"]],
    "cardData": ["Blunder Hills", "9", "+ Move Spd", "1", "5", "Baby Boa"]
  },
  "CardsA6": {
    "displayName": "Carrotman Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Carrotman"],
    "detdrops": [["Carrotman", "0.000090", "1"]],
    "cardData": ["Blunder Hills", "10", "+ Base AGI", "2", "6", "Carrotman"]
  },
  "CardsA7": {
    "displayName": "Glublin Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Glublin"],
    "detdrops": [["Glublin", "0.000086", "1"]],
    "cardData": ["Blunder Hills", "10", "+% Total HP", "2", "7", "Glublin"]
  },
  "CardsA8": {
    "displayName": "Wode Board Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Wode Board"],
    "detdrops": [["Wode Board", "0.000080", "1"]],
    "cardData": ["Blunder Hills", "10", "+ Base STR", "2", "8", "Wode Board"]
  },
  "CardsA9": {
    "displayName": "Gigafrog Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Gigafrog"],
    "detdrops": [["Gigafrog", "0.000070", "1"]],
    "cardData": [
      "Blunder Hills",
      "10",
      "+% Card Drop Chance",
      "5",
      "9",
      "Gigafrog"
    ]
  },
  "CardsA10": {
    "displayName": "Poop Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Poop"],
    "detdrops": [["Poop", "0.000060", "1"]],
    "cardData": [
      "Blunder Hills",
      "10",
      "+% Crystal Mob Spawn Chance",
      "10",
      "10",
      "Poop"
    ]
  },
  "CardsA11": {
    "displayName": "Rat Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Rat"],
    "detdrops": [["Rat", "0.000050", "1"]],
    "cardData": ["Blunder Hills", "10", "+% Critical Chance", "1", "11", "Rat"]
  },
  "CardsA12": {
    "displayName": "Walking Stick Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Walking Stick"],
    "detdrops": [["Walking Stick", "0.000060", "1"]],
    "cardData": [
      "Blunder Hills",
      "10",
      "+ Base WIS",
      "5",
      "12",
      "Walking Stick"
    ]
  },
  "CardsA13": {
    "displayName": "Nutto Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Nutto"],
    "detdrops": [["Nutto", "0.000050", "1"]],
    "cardData": [
      "Blunder Hills",
      "10",
      "+% Money from Monsters",
      "5",
      "13",
      "Nutto"
    ]
  },
  "CardsA14": {
    "displayName": "Crystal Carrot Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Crystal Carrot"],
    "detdrops": [["Crystal Carrot", "0.01", "1"]],
    "cardData": [
      "Blunder Hills",
      "3",
      "+% Total Drop Rate",
      "5",
      "14",
      "Crystal Carrot"
    ]
  },
  "CardsA15": {
    "displayName": "Boop Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Boop"],
    "detdrops": [["Boop", "0.0015", "1"]],
    "cardData": ["Bosses", "1", "+% Fighting AFK gain rate", "1", "2", "Boop"]
  },
  "CardsA16": {
    "displayName": "Wood Mushroom Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Wood Mushroom"],
    "detdrops": [["Wood Mushroom", "0.0001", "1"]],
    "cardData": [
      "Blunder Hills",
      "10",
      "+% Total Accuracy",
      "5",
      "15",
      "Wood Mushroom"
    ]
  },
  "CardsB1": {
    "displayName": "Sandy Pot Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Sandy Pot"],
    "detdrops": [["Sandy Pot", "0.0001", "1"]],
    "cardData": [
      "Yum Yum Desert",
      "10",
      "+% EXP Conversion from Talent",
      "12",
      "0",
      "Sandy Pot"
    ]
  },
  "CardsB2": {
    "displayName": "Mimic Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Mimic"],
    "detdrops": [["Mimic", "0.0001", "1"]],
    "cardData": [
      "Yum Yum Desert",
      "10",
      "+% Total Drop Rate",
      "3",
      "1",
      "Mimic"
    ]
  },
  "CardsB3": {
    "displayName": "Crabcake Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Crabcake"],
    "detdrops": [["Crabcake", "0.0001", "1"]],
    "cardData": [
      "Yum Yum Desert",
      "10",
      "+% To not consume Food",
      "5",
      "2",
      "Crabcake"
    ]
  },
  "CardsB4": {
    "displayName": "Mafioso Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Mafioso"],
    "detdrops": [["Mafioso", "0.0001", "1"]],
    "cardData": ["Yum Yum Desert", "10", "+ Base AGI", "5", "3", "Mafioso"]
  },
  "CardsB5": {
    "displayName": "Sand Castle Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Sand Castle"],
    "detdrops": [["Sand Castle", "0.0001", "1"]],
    "cardData": [
      "Yum Yum Desert",
      "10",
      "+% Total Accuracy",
      "4",
      "4",
      "Sand Castle"
    ]
  },
  "CardsB6": {
    "displayName": "Pincermin Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Pincermin"],
    "detdrops": [["Pincermin", "0.0001", "1"]],
    "cardData": [
      "Yum Yum Desert",
      "10",
      "+ Weapon Power",
      "1",
      "5",
      "Pincermin"
    ]
  },
  "CardsB7": {
    "displayName": "Mashed Potato Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Mashed Potato"],
    "detdrops": [["Mashed Potato", "0.0001", "1"]],
    "cardData": [
      "Yum Yum Desert",
      "10",
      "+% Critical Damage",
      "3",
      "6",
      "Mashed Potato"
    ]
  },
  "CardsB8": {
    "displayName": "Tyson Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Tyson"],
    "detdrops": [["Tyson", "0.0001", "1"]],
    "cardData": ["Yum Yum Desert", "10", "+ Base STR", "5", "7", "Tyson"]
  },
  "CardsB9": {
    "displayName": "Moonmoon Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Moonmoon"],
    "detdrops": [["Moonmoon", "0.0001", "1"]],
    "cardData": [
      "Yum Yum Desert",
      "10",
      "+% Monster EXP While Active",
      "8",
      "8",
      "Moonmoon"
    ]
  },
  "CardsB10": {
    "displayName": "Sand Giant Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Sand Giant"],
    "detdrops": [["Sand Giant", "0.0001", "1"]],
    "cardData": [
      "Yum Yum Desert",
      "10",
      "+% Minimum Damage",
      "2",
      "9",
      "Sand Giant"
    ]
  },
  "CardsB11": {
    "displayName": "Snelbie Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Snelbie"],
    "detdrops": [["Snelbie", "0.0001", "1"]],
    "cardData": [
      "Yum Yum Desert",
      "10",
      "+% Card Drop Chance",
      "8",
      "10",
      "Snelbie"
    ]
  },
  "CardsB12": {
    "displayName": "Dig Doug Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Dig Doug"],
    "detdrops": [["Dig Doug", "0.04", "1"]],
    "cardData": ["Yum Yum Desert", "10", "+ Base LUK", "6", "11", "Dig Doug"]
  },
  "CardsB13": {
    "displayName": "Crystal Crabal Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Crystal Crabal"],
    "detdrops": [["Crystal Crabal", "0.008", "1"]],
    "cardData": [
      "Yum Yum Desert",
      "3",
      "+% EXP from monsters",
      "2",
      "12",
      "Desert Topaz"
    ]
  },
  "CardsB14": {
    "displayName": "DONTFILL",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card"
  },
  "CardsC1": {
    "displayName": "Copper Ore Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Mining Copper"],
    "detdrops": [["Mining Copper", "0.0002", "1"]],
    "cardData": [
      "Easy Resources",
      "10",
      "+ Base accuracy",
      "4",
      "0",
      "Copper Ore"
    ]
  },
  "CardsC2": {
    "displayName": "Iron Ore Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Mining Iron"],
    "detdrops": [["Mining Iron", "0.00013", "1"]],
    "cardData": [
      "Easy Resources",
      "10",
      "+% Total Mining Efficiency",
      "5",
      "1",
      "Iron Ore"
    ]
  },
  "CardsC3": {
    "displayName": "Gold Ore Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Mining Gold"],
    "detdrops": [["Mining Gold", "0.00011", "1"]],
    "cardData": ["Easy Resources", "10", "+% Mining EXP", "5", "2", "Gold Ore"]
  },
  "CardsC4": {
    "displayName": "Oak Logs Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Choppin Oak Tree"],
    "detdrops": [["Choppin Oak Tree", "0.0004", "1"]],
    "cardData": ["Easy Resources", "10", "+ Base Defence", "3", "4", "Oak Logs"]
  },
  "CardsC5": {
    "displayName": "Bleach Logs Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Choppin Birch Tree"],
    "detdrops": [["Choppin Birch Tree", "0.00029", "1"]],
    "cardData": [
      "Easy Resources",
      "10",
      "+% Total Choppin Efficiency",
      "5",
      "5",
      "Bleach Logs"
    ]
  },
  "CardsC6": {
    "displayName": "Jungle Logs Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Choppin Jungle Tree"],
    "detdrops": [["Choppin Jungle Tree", "0.00021", "1"]],
    "cardData": [
      "Easy Resources",
      "10",
      "+% Choppin EXP",
      "5",
      "6",
      "Jungle Logs"
    ]
  },
  "CardsC7": {
    "displayName": "Forest Fibres Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Choppin Forest Tree"],
    "detdrops": [["Choppin Forest Tree", "0.00017", "1"]],
    "cardData": [
      "Easy Resources",
      "10",
      "+% EXP Conversion from Talent",
      "8",
      "7",
      "Forest Fibres"
    ]
  },
  "CardsC8": {
    "displayName": "Goldfish Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "cardData": ["Easy Resources", "10", "+% Total MP", "3", "8", "Goldfish"]
  },
  "CardsC9": {
    "displayName": "Hermit Can Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "cardData": [
      "Easy Resources",
      "10",
      "+% Total Fishing Efficiency",
      "5",
      "9",
      "Hermit Can"
    ]
  },
  "CardsC10": {
    "displayName": "Jellyfish Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "cardData": [
      "Easy Resources",
      "10",
      "+% Fishing EXP",
      "5",
      "10",
      "Jellyfish"
    ]
  },
  "CardsC11": {
    "displayName": "Fly Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Catching Flies"],
    "detdrops": [["Catching Flies", "0.00042", "1"]],
    "cardData": [
      "Easy Resources",
      "10",
      "+% Monster EXP While Active",
      "4",
      "11",
      "Fly"
    ]
  },
  "CardsC12": {
    "displayName": "Butterfly Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Catching Butterflies"],
    "detdrops": [["Catching Butterflies", "0.00030", "1"]],
    "cardData": [
      "Easy Resources",
      "10",
      "+% Total Catching Efficiency",
      "5",
      "12",
      "Butterfly"
    ]
  },
  "CardsC13": {
    "displayName": "DONTFILL",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card"
  },
  "CardsC14": {
    "displayName": "DONTFILL",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card"
  },
  "CardsC15": {
    "displayName": "DONTFILL",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card"
  },
  "CardsC16": {
    "displayName": "Fire Forge Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "cardData": [
      "Easy Resources",
      "10",
      "+% Smithing EXP",
      "4",
      "3",
      "Fire Forge"
    ]
  },
  "CardsD1": {
    "displayName": "Dementia Ore Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Mining Dementia"],
    "detdrops": [["Mining Dementia", "0.00006", "1"]],
    "cardData": [
      "Medium Resources",
      "10",
      "+% Mining Speed",
      "4",
      "1",
      "Dementia Ore"
    ]
  },
  "CardsD2": {
    "displayName": "Platinum Ore Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Mining Plat"],
    "detdrops": [["Mining Plat", "0.00008", "1"]],
    "cardData": [
      "Medium Resources",
      "10",
      "+% Mining Away Gains",
      "2",
      "0",
      "Platinum Ore"
    ]
  },
  "CardsD3": {
    "displayName": "Void Ore Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Mining Void"],
    "detdrops": [["Mining Void", "0.00006", "1"]],
    "cardData": [
      "Medium Resources",
      "10",
      "+% Card Drop Chance",
      "6",
      "2",
      "Void Ore"
    ]
  },
  "CardsD4": {
    "displayName": "Lustre Ore Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Mining Lustre"],
    "detdrops": [["Mining Lustre", "0.00006", "1"]],
    "cardData": ["Hard Resources", "10", "+ Base LUK", "4", "0", "Lustre Ore"]
  },
  "CardsD5": {
    "displayName": "Potty Rolls Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Choppin Toilet Tree"],
    "detdrops": [["Choppin Toilet Tree", "0.00012", "1"]],
    "cardData": [
      "Medium Resources",
      "10",
      "+% Choppin Speed",
      "4",
      "5",
      "Potty Rolls"
    ]
  },
  "CardsD6": {
    "displayName": "Veiny Logs Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Choppin Stump Tree"],
    "detdrops": [["Choppin Stump Tree", "0.00013", "1"]],
    "cardData": [
      "Medium Resources",
      "10",
      "+% Total Accuracy",
      "3",
      "6",
      "Veiny Logs"
    ]
  },
  "CardsD7": {
    "displayName": "Tropilogs Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Choppin Palm Tree"],
    "detdrops": [["Choppin Palm Tree", "0.00011", "1"]],
    "cardData": [
      "Medium Resources",
      "10",
      "+% Choppin Away Gains",
      "2",
      "4",
      "Tropilogs"
    ]
  },
  "CardsD8": {
    "displayName": "Tundra Logs Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Choppin Saharan Foal"],
    "detdrops": [["Choppin Saharan Foal", "0.0001", "1"]],
    "cardData": [
      "Hard Resources",
      "10",
      "+% Choppin Away Gains",
      "2.5",
      "8",
      "Tundra Logs"
    ]
  },
  "CardsD9": {
    "displayName": "Fruitfly Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Catching Fruitflies"],
    "detdrops": [["Catching Fruitflies", "0.00025", "1"]],
    "cardData": [
      "Medium Resources",
      "10",
      "+% Catching Away Gains",
      "2",
      "9",
      "Fruitfly"
    ]
  },
  "CardsD10": {
    "displayName": "Sentient Cereal Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Catching Sentient Cereal"],
    "detdrops": [["Catching Sentient Cereal", "0.00028", "1"]],
    "cardData": [
      "Medium Resources",
      "10",
      "+% Catching EXP",
      "5",
      "8",
      "Sentient Cereal"
    ]
  },
  "CardsD11": {
    "displayName": "Bloach Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "cardData": [
      "Medium Resources",
      "10",
      "+% Fishing Away Gains",
      "2",
      "7",
      "Bloach"
    ]
  },
  "CardsD12": {
    "displayName": "DONTFILL",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card"
  },
  "CardsD13": {
    "displayName": "DONTFILL",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card"
  },
  "CardsD16": {
    "displayName": "Cinder Forge Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "cardData": [
      "Medium Resources",
      "10",
      "+% Smithing EXP",
      "7",
      "3",
      "Cinder Forge"
    ]
  },
  "CardsD17": {
    "displayName": "Forest Soul Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "cardData": [
      "Medium Resources",
      "3",
      "+% Defence from Equipment",
      "3",
      "10",
      "Forest Soul"
    ]
  },
  "CardsD18": {
    "displayName": "Dune Soul Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "cardData": [
      "Medium Resources",
      "3",
      "+ Starting Pts in Worship",
      "4",
      "11",
      "Dune Soul"
    ]
  },
  "CardsD19": {
    "displayName": "Froge Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "cardData": [
      "Medium Resources",
      "4",
      "+% Shiny Critter Chance",
      "3",
      "12",
      "Froge"
    ]
  },
  "CardsD20": {
    "displayName": "Crabbo Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "cardData": [
      "Medium Resources",
      "4",
      "+% Trapping Efficiency",
      "5",
      "13",
      "Crabbo"
    ]
  },
  "CardsD21": {
    "displayName": "Scorpie Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "cardData": [
      "Medium Resources",
      "4",
      "+% Trapping EXP",
      "5",
      "14",
      "Scorpie"
    ]
  },
  "CardsE0": {
    "displayName": "Sheepie Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Sheepie"],
    "detdrops": [["Sheepie", "0.0001", "1"]],
    "cardData": [
      "Frostbite Tundra",
      "11",
      "+% Defence from Equipment",
      "3",
      "0",
      "Sheepie"
    ]
  },
  "CardsE1": {
    "displayName": "Frost Flake Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Frost Flake"],
    "detdrops": [["Frost Flake", "0.0001", "1"]],
    "cardData": [
      "Frostbite Tundra",
      "12",
      "+ Base STR",
      "7",
      "1",
      "Frost Flake"
    ]
  },
  "CardsE2": {
    "displayName": "Sir Stache Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Sir Stache"],
    "detdrops": [["Sir Stache", "0.0001", "1"]],
    "cardData": [
      "Frostbite Tundra",
      "13",
      "+% Card Drop Chance",
      "8",
      "2",
      "Sir Stache"
    ]
  },
  "CardsE3": {
    "displayName": "Bloque Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Bloque"],
    "detdrops": [["Bloque", "0.0001", "1"]],
    "cardData": ["Frostbite Tundra", "14", "+ Base AGI", "7", "3", "Bloque"]
  },
  "CardsE4": {
    "displayName": "Mamooth Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Mamooth"],
    "detdrops": [["Mamooth", "0.0001", "1"]],
    "cardData": ["Frostbite Tundra", "15", "+% Total HP", "3.5", "4", "Mamooth"]
  },
  "CardsE5": {
    "displayName": "Snowman Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Snowman"],
    "detdrops": [["Snowman", "0.0001", "1"]],
    "cardData": [
      "Frostbite Tundra",
      "15",
      "+% Total Damage",
      "3",
      "5",
      "Snowman"
    ]
  },
  "CardsE6": {
    "displayName": "Penguin Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Penguin"],
    "detdrops": [["Penguin", "0.0001", "1"]],
    "cardData": ["Frostbite Tundra", "15", "+ Base WIS", "7", "6", "Penguin"]
  },
  "CardsE7": {
    "displayName": "Thermister Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Thermister"],
    "detdrops": [["Thermister", "0.0001", "1"]],
    "cardData": [
      "Frostbite Tundra",
      "15",
      "+% Critical Damage",
      "4",
      "7",
      "Thermister"
    ]
  },
  "CardsE8": {
    "displayName": "Quenchie Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Quenchie"],
    "detdrops": [["Quenchie", "0.0001", "1"]],
    "cardData": ["Frostbite Tundra", "17", "+ Base LUK", "7", "8", "Quenchie"]
  },
  "CardsE9": {
    "displayName": "Cryosnake Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Cryosnake"],
    "detdrops": [["Cryosnake", "0.0001", "1"]],
    "cardData": [
      "Frostbite Tundra",
      "17",
      "+% MP regen rate",
      "5",
      "9",
      "Cryosnake"
    ]
  },
  "CardsE10": {
    "displayName": "Bop Box Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Bop Box"],
    "detdrops": [["Bop Box", "0.0001", "1"]],
    "cardData": [
      "Frostbite Tundra",
      "17",
      "+% Total Drop Rate",
      "3",
      "10",
      "Bop Box"
    ]
  },
  "CardsE11": {
    "displayName": "Neyeptune Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Neyeptune"],
    "detdrops": [["Neyeptune", "0.0001", "1"]],
    "cardData": [
      "Frostbite Tundra",
      "17",
      "+% Total Accuracy",
      "5",
      "11",
      "Neyeptune"
    ]
  },
  "CardsE12": {
    "displayName": "Xylobone Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Xylobone"],
    "detdrops": [["Xylobone", "0.010", "1"]],
    "cardData": [
      "Frostbite Tundra",
      "15",
      "+% Critical Chance",
      "1",
      "13",
      "Xylobone"
    ]
  },
  "CardsE13": {
    "displayName": "Bloodbone Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Bloodbone"],
    "detdrops": [["Bloodbone", "0.0001", "1"]],
    "cardData": [
      "Frostbite Tundra",
      "15",
      "+% Total Damage",
      "3",
      "14",
      "Bloodbone"
    ]
  },
  "CardsE14": {
    "displayName": "Dedotated Ram Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Dedotated Ram"],
    "detdrops": [["Dedotated Ram", "0.0001", "1"]],
    "cardData": [
      "Frostbite Tundra",
      "20",
      "+ Weapon Power",
      "2",
      "12",
      "Dedotated Ram"
    ]
  },
  "CardsE15": {
    "displayName": "Crystal Cattle Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Crystal Cattle"],
    "detdrops": [["Crystal Cattle", "0.008", "1"]],
    "cardData": [
      "Frostbite Tundra",
      "10",
      "+% EXP from monsters",
      "3",
      "15",
      "Glacier Quartz"
    ]
  },
  "CardsF1": {
    "displayName": "DONTFILL",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card"
  },
  "CardsF2": {
    "displayName": "Wispy Lumber Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Choppin Wispy Tree"],
    "detdrops": [["Choppin Wispy Tree", "0.0001", "1"]],
    "cardData": [
      "Hard Resources",
      "10",
      "+% Choppin Speed",
      "6",
      "9",
      "Wispy Lumber"
    ]
  },
  "CardsF3": {
    "displayName": "Rooted Soul Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "cardData": [
      "Hard Resources",
      "3",
      "+ Starting Pts in Worship",
      "6",
      "1",
      "Rooted Soul"
    ]
  },
  "CardsF4": {
    "displayName": "Mousey Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "cardData": [
      "Hard Resources",
      "4",
      "+% Shiny Critter Chance",
      "5",
      "4",
      "Mousey"
    ]
  },
  "CardsF5": {
    "displayName": "Owlio Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "cardData": [
      "Hard Resources",
      "4",
      "+% EXP from monsters",
      "1.25",
      "5",
      "Owlio"
    ]
  },
  "CardsF6": {
    "displayName": "Pingy Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "cardData": [
      "Hard Resources",
      "5",
      "+% Shiny Critter Chance",
      "6",
      "6",
      "Pingy"
    ]
  },
  "CardsF7": {
    "displayName": "Bunny Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "cardData": [
      "Hard Resources",
      "6",
      "+% Skill AFK gain rate",
      "1",
      "7",
      "Bunny"
    ]
  },
  "CardsF8": {
    "displayName": "Mosquisnow Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Catching Mosquisnow"],
    "detdrops": [["Catching Mosquisnow", "0.00025", "1"]],
    "cardData": [
      "Hard Resources",
      "10",
      "+% Total Catching Efficiency",
      "7",
      "10",
      "Mosquisnow"
    ]
  },
  "CardsF9": {
    "displayName": "Flycicle Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Catching Flycicle"],
    "detdrops": [["Catching Flycicle", "0.00025", "1"]],
    "cardData": [
      "Hard Resources",
      "10",
      "+% Catching Away Gains",
      "2.5",
      "11",
      "Flycicle"
    ]
  },
  "CardsF10": {
    "displayName": "Frigid Soul Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "cardData": [
      "Hard Resources",
      "4",
      "+% Max Charge",
      "7",
      "2",
      "Frigid Soul"
    ]
  },
  "CardsF11": {
    "displayName": "Squiddy Soul Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "cardData": [
      "Hard Resources",
      "5",
      "+% Charge Rate",
      "5",
      "3",
      "Squiddy Soul"
    ]
  },
  "CardsY0": {
    "displayName": "Ghost Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Giftmas Blobulyte", "Meaning of Giftmas", "Ghost"],
    "detdrops": [
      ["Giftmas Blobulyte", "0.05", "1"],
      ["Meaning of Giftmas", "0.05", "1"],
      ["Ghost", "0.05", "1"]
    ],
    "cardData": ["Event", "2", "+% Monster EXP While Active", "3", "0", "Ghost"]
  },
  "CardsY1": {
    "displayName": "Giftmas Blobulyte Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "cardData": [
      "Event",
      "1.5",
      "+% Total Drop Rate",
      "3",
      "1",
      "Giftmas Blobulyte"
    ]
  },
  "CardsY2": {
    "displayName": "Meaning of Giftmas Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Summer Spirit"],
    "detdrops": [["Summer Spirit", "0.05", "1"]],
    "cardData": [
      "Event",
      "1.5",
      "+% Money from Monsters",
      "3",
      "2",
      "Meaning of Giftmas"
    ]
  },
  "CardsY3": {
    "displayName": "Valentslime Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Loveulyte", "Chocco Box", "Valentslime"],
    "detdrops": [
      ["Loveulyte", "0.05", "1"],
      ["Chocco Box", "0.05", "1"],
      ["Valentslime", "0.085", "1"]
    ],
    "cardData": [
      "Event",
      "2",
      "+% Defence from Equipment",
      "3",
      "3",
      "Valentslime"
    ]
  },
  "CardsY4": {
    "displayName": "Loveulyte Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "cardData": ["Event", "1.5", "+% Total HP", "5", "4", "Loveulyte"]
  },
  "CardsY5": {
    "displayName": "Chocco Box Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "cardData": ["Event", "1.5", "+% Boost Food Effect", "4", "5", "Chocco Box"]
  },
  "CardsY6": {
    "displayName": "Floofie Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Egggulyte", "Egg Capsule", "Floofie"],
    "detdrops": [
      ["Egggulyte", "0.05", "1"],
      ["Egg Capsule", "0.05", "1"],
      ["Floofie", "0.05", "1"]
    ],
    "cardData": ["Event", "3", "+% MP regen rate", "3", "6", "Floofie"]
  },
  "CardsY7": {
    "displayName": "Shell Snake Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Shell Snake"],
    "detdrops": [["Shell Snake", "0.05", "1"]],
    "cardData": ["Event", "3", "+ Base LUK", "3", "7", "Shell Snake"]
  },
  "CardsY8": {
    "displayName": "Egggulyte Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "cardData": ["Event", "1.5", "+% Card Drop Chance", "1", "8", "Egggulyte"]
  },
  "CardsY9": {
    "displayName": "Egg Capsule Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "cardData": ["Event", "1.5", "+% Critical Damage", "1", "9", "Egg Capsule"]
  },
  "CardsY10": {
    "displayName": "Mr Blueberry Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Mr Blueberry"],
    "detdrops": [["Mr Blueberry", "0.03", "1"]],
    "cardData": ["Event", "4", "+% Total Drop Rate", "3", "11", "Mr Blueberry"]
  },
  "CardsY11": {
    "displayName": "Coastiolyte Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Coastiolyte"],
    "detdrops": [["Coastiolyte", "0.05", "1"]],
    "cardData": [
      "Event",
      "8",
      "+% Fishing Away Gains",
      "1",
      "12",
      "Coastiolyte"
    ]
  },
  "CardsY12": {
    "displayName": "Summer Spirit Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "cardData": ["Event", "8", "+% Catching EXP", "4", "13", "Summer Spirit"]
  },
  "CardsY13": {
    "displayName": "Plasti Doug Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Plasti Doug"],
    "detdrops": [["Plasti Doug", "0.03", "1"]],
    "cardData": ["Event", "4", "+ Base Defence", "2", "10", "Plasti Doug"]
  },
  "CardsZ0": {
    "displayName": "Baba Yaga Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Baba Yaga"],
    "detdrops": [["Baba Yaga", "0.03", "1"]],
    "cardData": [
      "Bosses",
      "1.5",
      "+% Money from Monsters",
      "10",
      "0",
      "Baba Yaga"
    ]
  },
  "CardsZ1": {
    "displayName": "Dr Defecaus Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Dr Defecaus"],
    "detdrops": [["Dr Defecaus", "0.03", "1"]],
    "cardData": ["Bosses", "1.5", "+% Total Damage", "5", "1", "Dr Defecaus"]
  },
  "CardsZ2": {
    "displayName": "Amarok Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Amarok", "Nightmare Amarok"],
    "detdrops": [
      ["Amarok", "0.04", "1"],
      ["Nightmare Amarok", "0.02", "1"]
    ],
    "cardData": [
      "Bosses",
      "1.5",
      "+% Skill AFK gain rate",
      "2.5",
      "3",
      "Amarok"
    ]
  },
  "CardsZ3": {
    "displayName": "Efaunt Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": [
      "Efaunt",
      "Nightmare Amarok",
      "Chizoar",
      "Nightmare Chizoar",
      "Error"
    ],
    "detdrops": [
      ["Efaunt", "0.035", "1"],
      ["Nightmare Amarok", "0.01", "1"],
      ["Chizoar", "0.035", "1"],
      ["Nightmare Chizoar", "0.01", "1"],
      ["Error", "0.0000005", "1"]
    ],
    "cardData": ["Bosses", "1.5", "+% EXP from monsters", "5", "7", "Efaunt"]
  },
  "CardsZ4": {
    "displayName": "Chaotic Amarok Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Chaotic Amarok"],
    "detdrops": [["Chaotic Amarok", "0.02", "1"]],
    "cardData": [
      "Bosses",
      "1.5",
      "+% Fighting AFK gain rate",
      "2.5",
      "4",
      "Chaotic Amarok"
    ]
  },
  "CardsZ5": {
    "displayName": "Biggie Hours Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Biggie Hours"],
    "detdrops": [["Biggie Hours", "0.024", "1"]],
    "cardData": [
      "Bosses",
      "1.5",
      "+% Double AFK claim chance",
      "3",
      "5",
      "Biggie Hours"
    ]
  },
  "CardsZ6": {
    "displayName": "King Doot Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["King Doot"],
    "detdrops": [["King Doot", "0.04", "1"]],
    "cardData": ["Bosses", "1.5", "+% Total Drop Rate", "6", "6", "King Doot"]
  },
  "CardsZ7": {
    "displayName": "Chaotic Efaunt Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "sources": ["Chaotic Efaunt", "Chaotic Chizoar"],
    "detdrops": [
      ["Chaotic Efaunt", "0.045", "1"],
      ["Chaotic Chizoar", "0.045", "1"]
    ],
    "cardData": ["Bosses", "1.5", "+% Skill EXP", "3.75", "8", "Chaotic Efaunt"]
  },
  "CardsZ8": {
    "displayName": "Chizoar Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "cardData": [
      "Bosses",
      "1.5",
      "+% Cog Build Spd (Passive)",
      "8",
      "9",
      "Chizoar"
    ]
  },
  "CardsZ9": {
    "displayName": "Chaotic Chizoar Card",
    "sellPrice": "1",
    "typeGen": "dCard",
    "ID": "0",
    "Type": "Card",
    "cardData": [
      "Bosses",
      "1.5",
      "+% Shrine Effects",
      "5",
      "10",
      "Chaotic Chizoar"
    ]
  },
  "CardPack1": {
    "displayName": "Newbie Card Pack",
    "sellPrice": "1",
    "typeGen": "dCardPack",
    "ID": "0",
    "Type": "Card Pack",
    "sources": ["Treasure Hunt 4", "[[Gem Shop]]"],
    "description": [
      "Hold down to open the pack! The cards drop on the ground, make sure to pick them up!!"
    ],
    "notes": " "
  },
  "CardPack2": {
    "displayName": "Ancient Card Pack",
    "sellPrice": "1",
    "typeGen": "dCardPack",
    "ID": "0",
    "Type": "Card Pack",
    "sources": ["[[Gem Shop]]"],
    "description": [
      "Hold down to open the pack! The cards drop on the ground, make sure to pick them up!!"
    ],
    "notes": " "
  },
  "CardPack3": {
    "displayName": "Eternal Card Pack",
    "sellPrice": "1",
    "typeGen": "dCardPack",
    "ID": "0",
    "Type": "Card Pack",
    "sources": ["[[Gem Shop]]"],
    "description": [
      "Hold down to open the pack! The cards drop on the ground, make sure to pick them up!!"
    ],
    "notes": " "
  },
  "EquipmentHats31": {
    "displayName": "Smitty's Bubble Blowing Hat",
    "sellPrice": "1",
    "typeGen": "aHelmetMTX",
    "ID": "35",
    "Type": "Premium Helmet",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "LUK": "1",
    "Upgrade_Slots_Left": "5",
    "sources": ["[[Gem Shop]]"],
    "notes": " "
  },
  "EquipmentHats32": {
    "displayName": "Bandit Bob Mask",
    "sellPrice": "1",
    "typeGen": "aHelmetMTX",
    "ID": "36",
    "Type": "Premium Helmet",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "LUK": "1",
    "Upgrade_Slots_Left": "5",
    "sources": ["[[Gem Shop]]"],
    "notes": " "
  },
  "EquipmentHats33": {
    "displayName": "Paper Bag",
    "sellPrice": "1",
    "typeGen": "aHelmetMTX",
    "ID": "37",
    "Type": "Premium Helmet",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "LUK": "1",
    "Upgrade_Slots_Left": "5",
    "sources": ["[[Gem Shop]]"],
    "notes": " "
  },
  "EquipmentHats34": {
    "displayName": "Parasite",
    "sellPrice": "1",
    "typeGen": "aHelmetMTX",
    "ID": "38",
    "Type": "Premium Helmet",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "LUK": "1",
    "Upgrade_Slots_Left": "5",
    "sources": ["[[Gem Shop]]"],
    "notes": " "
  },
  "EquipmentHats35": {
    "displayName": "Diamon Horns",
    "sellPrice": "1",
    "typeGen": "aHelmetMTX",
    "ID": "39",
    "Type": "Premium Helmet",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "LUK": "1",
    "Upgrade_Slots_Left": "7",
    "sources": ["[[Gem Shop]]"],
    "notes": " "
  },
  "EquipmentHats36": {
    "displayName": "Halloween Pumpkin",
    "sellPrice": "1",
    "typeGen": "aHelmetMTX",
    "ID": "40",
    "Type": "Premium Helmet",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "LUK": "1",
    "Upgrade_Slots_Left": "5",
    "sources": ["[[Gem Shop]]"],
    "notes": " "
  },
  "EquipmentHats40": {
    "displayName": "Pardoned Turkey",
    "sellPrice": "1",
    "typeGen": "aHelmetMTX",
    "ID": "43",
    "Type": "Premium Helmet",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "LUK": "1",
    "Upgrade_Slots_Left": "5",
    "sources": ["[[Gem Shop]]"],
    "notes": " "
  },
  "EquipmentHats37": {
    "displayName": "Hotdog Hero",
    "sellPrice": "1",
    "typeGen": "aHelmetMTX",
    "ID": "41",
    "Type": "Premium Helmet",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "LUK": "1",
    "Upgrade_Slots_Left": "5",
    "sources": ["[[Gem Shop]]"],
    "notes": " "
  },
  "EquipmentHats38": {
    "displayName": "Invisible Hat",
    "sellPrice": "1",
    "typeGen": "aHelmetMTX",
    "ID": "0",
    "Type": "Premium Helmet",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "LUK": "1",
    "Upgrade_Slots_Left": "5",
    "sources": ["[[Gem Shop]]"],
    "notes": " "
  },
  "EquipmentHats46": {
    "displayName": "Strawbiggy",
    "sellPrice": "1",
    "typeGen": "aHelmetMTX",
    "ID": "49",
    "Type": "Premium Helmet",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "LUK": "1",
    "Upgrade_Slots_Left": "5",
    "sources": ["[[Gem Shop]]"],
    "notes": " "
  },
  "EquipmentHats47": {
    "displayName": "Pop Cat",
    "sellPrice": "1",
    "typeGen": "aHelmetMTX",
    "ID": "50",
    "Type": "Premium Helmet",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "LUK": "1",
    "Upgrade_Slots_Left": "5",
    "sources": ["[[Gem Shop]]"],
    "notes": " "
  },
  "EquipmentHats48": {
    "displayName": "Dairy Dunk",
    "sellPrice": "1",
    "typeGen": "aHelmetMTX",
    "ID": "51",
    "Type": "Premium Helmet",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "LUK": "1",
    "Upgrade_Slots_Left": "5",
    "sources": ["[[Gem Shop]]"],
    "notes": " "
  },
  "EquipmentHats49": {
    "displayName": "The Classic",
    "sellPrice": "1",
    "typeGen": "aHelmetMTX",
    "ID": "52",
    "Type": "Premium Helmet",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "LUK": "1",
    "Upgrade_Slots_Left": "5",
    "sources": ["[[Gem Shop]]"],
    "notes": " "
  },
  "EquipmentHats50": {
    "displayName": "Green Beanie",
    "sellPrice": "1",
    "typeGen": "aHelmetMTX",
    "ID": "53",
    "Type": "Premium Helmet",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "LUK": "1",
    "Upgrade_Slots_Left": "5",
    "sources": ["[[Gem Shop]]"],
    "notes": " "
  },
  "EquipmentHats43": {
    "displayName": "Snowman",
    "sellPrice": "1",
    "typeGen": "aHelmetMTX",
    "ID": "46",
    "Type": "Premium Helmet",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "LUK": "1",
    "Upgrade_Slots_Left": "5",
    "sources": ["[[Gem Shop]]"]
  },
  "EquipmentHats45": {
    "displayName": "Giftmas Tree",
    "sellPrice": "1",
    "typeGen": "aHelmetMTX",
    "ID": "48",
    "Type": "Premium Helmet",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "LUK": "1",
    "Upgrade_Slots_Left": "5",
    "sources": ["[[Gem Shop]]"],
    "miscUp1": "10% Xp From Monsters",
    "notes": " "
  },
  "EquipmentHats57": {
    "displayName": "Big Bunny",
    "sellPrice": "1",
    "typeGen": "aHelmetMTX",
    "ID": "60",
    "Type": "Premium Helmet",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "LUK": "1",
    "Upgrade_Slots_Left": "5",
    "sources": ["[[Gem Shop]]"],
    "miscUp1": "11% Xp From Monsters",
    "notes": " "
  },
  "EquipmentHats62": {
    "displayName": "Fluffy Ramsy",
    "sellPrice": "1",
    "typeGen": "aHelmetMTX",
    "ID": "65",
    "Type": "Premium Helmet",
    "lvReqToEquip": "1",
    "Class": "All",
    "STR": "1",
    "AGI": "1",
    "WIS": "1",
    "LUK": "1",
    "Upgrade_Slots_Left": "5",
    "sources": ["[[Gem Shop]]"],
    "miscUp1": "11% Xp From Monsters",
    "notes": " "
  },
  "GemP9": {
    "displayName": "Quality Obol Stack",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "1",
    "Type": "Obol Stack",
    "description": [
      "Hold down and 3 obols will drop at your feet! YOU MUST BE IN WORLD 2 TOWN TO USE THIS! This way you can trash other obols incase you're out of space!"
    ],
    "questAss": []
  },
  "GemP10": {
    "displayName": "Marvelous Obol Stack",
    "sellPrice": "1",
    "typeGen": "dQuest",
    "ID": "1",
    "Type": "Obol Stack",
    "description": [
      "Hold down and 3 obols will drop at your feet! YOU MUST BE IN WORLD 2 TOWN TO USE THIS! This way you can trash other obols incase you're out of space!"
    ],
    "questAss": []
  }
}

export = items;