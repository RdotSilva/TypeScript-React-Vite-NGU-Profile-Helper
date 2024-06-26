export enum EnergyCapFieldDescriptions {
  CAPNGUX = "Calculate a cap for the NGU",
  CAPALLNGU = "Calculate a cap for every NGU starting from 0",
  CAPATX = "Calculate a cap for the AT and attempt to BB it",
  CAPALLAT = "Calculate caps for all ATs and BB them",
  CAPBESTAUG = "Attempts to allocate to the best augment possible. Before pairs are unlocked, will allocate to highest augment that is easily doable. After will try to optimize",
  CAPWAN = "Calculate a cap for wandoos energy",
  CAPTM = "Calculate a cap for energy time machine and attempt to BB it",
  CAPBTX = "Calculate a cap for basic training",
  CAPALLBT = "Caps all basic trainings",
  CAPAUGX = "Calculate a cap for augments and attempt to BB it",
  CAPWISHX = "Allocate energy to wishes. X is the wish slot you wish to allocate to. If you only have 1 slot, WISH-0 will be the one you use. Wishes will follow the priority set in the WishPriorities setting and then work through cheapest wishes",
}

export enum EnergyCapFieldNamesOld {
  CAPNGUX = "CAPNGU-X",
  CAPALLNGU = "CAPALLNGU",
  CAPATX = "CAPAT-X",
  CAPALLAT = "CAPALLAT",
  CAPBESTAUG = "CAPBESTAUG",
  CAPWAN = "CAPWAN",
  CAPTM = "CAPTM",
  CAPBTX = "CAPBT-X",
  CAPALLBT = "CAPALLBT",
  CAPAUGX = "CAPAUG-X",
  CAPWISHX = "CAPWISH-X",
}

export const EnergyCapFieldNames = {
  CAPTM: "CAPTM",
};

export enum TimerOptions {
  HOURS = "HOURS",
  MINUTES = "MINUTES",
  SECONDS = "SECONDS",
}

export type TimerFormValues = {
  HOURS: number;
  MINUTES: number;
};

export type EnergyFormValues = {
  CAPNGUX: boolean;
  CAPALLNGU: boolean;
  CAPATX: boolean;
  CAPALLAT: boolean;
  CAPBESTAUG: boolean;
  CAPWAN: boolean;
  CAPTM: boolean;
  CAPBTX: boolean;
  CAPALLBT: boolean;
  CAPAUGX: boolean;
  CAPWISHX: boolean;
};

export type FormValues =
  | EnergyFormValues
  | TimerFormValues
  | EnergyCapFieldPriorityValues;

export enum CapNguFieldNames {
  CAPNGU0 = "CAPNGU-0",
  CAPNGU1 = "CAPNGU-1",
  CAPNGU2 = "CAPNGU-2",
  CAPNGU3 = "CAPNGU-3",
  CAPNGU4 = "CAPNGU-4",
  CAPNGU5 = "CAPNGU-5",
  CAPNGU6 = "CAPNGU-6",
  CAPNGU7 = "CAPNGU-7",
  CAPNGU8 = "CAPNGU-8",
  CAPNGU9 = "CAPNGU-9",
}

export enum EnergyCapFieldPriorities {
  CAPNGUX_PRIORITY = "CAPNGU-X-PRIORITY",
  CAPALLNGU_PRIORITY = "CAPALLNGU-PRIORITY",
  CAPATX_PRIORITY = "CAPAT-X-PRIORITY",
  CAPALLAT_PRIORITY = "CAPALLAT-PRIORITY",
  CAPBESTAUG_PRIORITY = "CAPBESTAUG-PRIORITY",
  CAPWAN_PRIORITY = "CAPWAN-PRIORITY",
  CAPTM_PRIORITY = "CAPTM-PRIORITY",
  CAPBTX_PRIORITY = "CAPBT-X-PRIORITY",
  CAPALLBT_PRIORITY = "CAPALLBT-PRIORITY",
  CAPAUGX_PRIORITY = "CAPAUG-X-PRIORITY",
  CAPWISHX_PRIORITY = "CAPWISH-X-PRIORITY",
}

export const EnergyCap = {
  CAPNGUX: {
    name: EnergyCapFieldNames.CAPNGUX,
    priorityName: EnergyCapFieldPriorities.CAPNGUX_PRIORITY,
  },
  CAPALLNGU: {
    name: EnergyCapFieldNames.CAPALLNGU,
    priorityName: EnergyCapFieldPriorities.CAPALLNGU_PRIORITY,
  },
  CAPATX: {
    name: EnergyCapFieldNames.CAPATX,
    priorityName: EnergyCapFieldPriorities.CAPATX_PRIORITY,
  },
  CAPALLAT: {
    name: EnergyCapFieldNames.CAPALLAT,
    priorityName: EnergyCapFieldPriorities.CAPALLAT_PRIORITY,
  },
  CAPBESTAUG: {
    name: EnergyCapFieldNames.CAPBESTAUG,
    priorityName: EnergyCapFieldPriorities.CAPBESTAUG_PRIORITY,
  },
  CAPWAN: {
    name: EnergyCapFieldNames.CAPWAN,
    priorityName: EnergyCapFieldPriorities.CAPWAN_PRIORITY,
  },
  CAPTM: {
    name: EnergyCapFieldNames.CAPTM,
    priorityName: EnergyCapFieldPriorities.CAPTM_PRIORITY,
  },
  CAPBTX: {
    name: EnergyCapFieldNames.CAPBTX,
    priorityName: EnergyCapFieldPriorities.CAPBTX_PRIORITY,
  },
  CAPALLBT: {
    name: EnergyCapFieldNames.CAPALLBT,
    priorityName: EnergyCapFieldPriorities.CAPALLBT_PRIORITY,
  },
  CAPAUGX: {
    name: EnergyCapFieldNames.CAPAUGX,
    priorityName: EnergyCapFieldPriorities.CAPAUGX_PRIORITY,
  },
  CAPWISHX: {
    name: EnergyCapFieldNames.CAPWISHX,
    priorityName: EnergyCapFieldPriorities.CAPWISHX_PRIORITY,
  },
};

export type EnergyCapFieldPriorityValues = {
  [key in keyof typeof EnergyCapFieldPriorities]: number;
};
