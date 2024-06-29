export enum MagicCapFieldDescriptions {
  CAPNGUX = "Use the cap button for the NGU",
  CAPALLNGU = "Use the cap button for every NGU starting from 0",
  CAPWAN = "Use the cap button for wandoos magic",
  CAPTM = "Calculate a cap for magic time machine and attempt to BB it",
  CAPRITX = "Calculate a cap for the ritual and allocate",
  CAPWISHX = "Allocate magic to wishes. X is the wish slot you wish to allocate to. If you only have 1 slot, WISH-0 will be the one you use. Wishes will follow the priority set in the WishPriorities setting and then work through cheapest wishes",
  BR = "Cast rituals from highest to lowest ignoring rituals you can't afford or will take more than an hour",
  BRX = "Cast rituals from highest to lowest that will finish before time specified by X. BR-3600 will cast rituals that will end before the 1 hour mark from your current time",
}

export enum MagicCapFieldNames {
  CAPNGUX = "CAPNGU-X",
  CAPALLNGU = "CAPALLNGU",
  CAPWAN = "CAPWAN",
  CAPTM = "CAPTM",
  CAPRITX = "CAPRIT-X",
  CAPWISHX = "CAPWISH-X",
  BR = "BR",
  BRX = "BR-X",
}

export enum MagicCapFieldPriorities {
  CAPNGUX_PRIORITY = "CAPNGU-X-PRIORITY",
  CAPALLNGU_PRIORITY = "CAPALLNGU_PRIORITY"
}

export const MagicCap = {
  CAPNGUX: {
    name: MagicCapFieldNames.CAPNGUX,
    priority: MagicCapFieldPriorities.CAPNGUX_PRIORITY,
  },
  CAPALLNGU: {
    name: MagicCapFieldNames.CAPALLNGU,
    priority: "MAGIC_CAPALLNGU_PRIORITY",
  },
  CAPWAN: {
    name: MagicCapFieldNames.CAPWAN,
    priority: "MAGIC_CAPWAN_PRIORITY",
  },
  CAPTM: {
    name: MagicCapFieldNames.CAPTM,
    priority: "MAGIC_CAPTM_PRIORITY",
  },
  BR: {
    name: MagicCapFieldNames.BR,
    priority: "MAGIC_BR_PRIORITY"
  }
};
