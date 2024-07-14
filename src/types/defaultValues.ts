import { EnergyCapFieldNames } from "./energy/energyTypes";

export const energyDefaultValues = {
  [EnergyCapFieldNames.CAPTM]: true,
  [EnergyCapFieldNames.CAPALLNGU]: true,
  [EnergyCapFieldNames.CAPNGUX]: true,
};
export const magicDefaultValues = {
  MAGIC_CAPTM: true,
};

export const defaultValues = {
  HOURS: 0,
  MINUTES: 1,
  ...energyDefaultValues,
  ...magicDefaultValues,
};
