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

export enum EnergyCapFieldNames {
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

export type EnergyFormValues = {
  [key in EnergyCapFieldNames]: boolean;
};
