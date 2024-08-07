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
  CAPNGUX = "MAGIC_CAPNGU-X",
  CAPALLNGU = "MAGIC_CAPALLNGU",
  CAPWAN = "MAGIC_CAPWAN",
  CAPTM = "MAGIC_CAPTM",
  CAPRITX = "MAGIC_CAPRIT-X",
  CAPWISHX = "MAGIC_CAPWISH-X",
  BR = "MAGIC_BR",
  BRX = "MAGIC_BR-X",
}

export enum MagicCapFieldPriorities {
  CAPNGUX = "MAGIC_CAPNGU_X_PRIORITY",
  CAPALLNGU = "MAGIC_CAPALLNGU_PRIORITY",
  CAPWAN = "MAGIC_CAPWAN_PRIORITY",
  CAPRITX = "MAGIC_CAPRITX_PRIORITY",
  CAPTM = "MAGIC_CAPTM_PRIORITY",
  BR = "MAGIC_BR_PRIORITY",
}

export const MagicCap = {
  CAPNGUX: {
    name: MagicCapFieldNames.CAPNGUX,
    priority: MagicCapFieldPriorities.CAPNGUX,
    description: MagicCapFieldDescriptions.CAPNGUX,
  },
  CAPALLNGU: {
    name: MagicCapFieldNames.CAPALLNGU,
    priority: MagicCapFieldPriorities.CAPALLNGU,
    description: MagicCapFieldDescriptions.CAPALLNGU,
  },
  CAPWAN: {
    name: MagicCapFieldNames.CAPWAN,
    priority: MagicCapFieldPriorities.CAPWAN,
    description: MagicCapFieldDescriptions.CAPWAN,
  },
  CAPTM: {
    name: MagicCapFieldNames.CAPTM,
    priority: MagicCapFieldPriorities.CAPTM,
    description: MagicCapFieldDescriptions.CAPTM,
  },
  BR: {
    name: MagicCapFieldNames.BR,
    priority: MagicCapFieldPriorities.BR,
    description: MagicCapFieldDescriptions.BR,
  },
};
