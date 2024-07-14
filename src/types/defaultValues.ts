import { EnergyCapFieldNames } from "./energy/energyTypes";
import { MagicCapFieldNames } from "./magic/magicTypes";

export const energyDefaultValues = {
  [EnergyCapFieldNames.CAPTM]: true,
  [EnergyCapFieldNames.CAPALLNGU]: true,
  [EnergyCapFieldNames.CAPNGUX]: true,
};
export const magicDefaultValues = {
  [MagicCapFieldNames.CAPTM]: true,
};

export const defaultValues = {
  HOURS: 0,
  MINUTES: 1,
  ...energyDefaultValues,
  ...magicDefaultValues,
};
