import type {
  HeightUnit,
  HeightUnitConfig,
  WeightUnit,
  WeightUnitConfig,
} from "../types";

export const heightUnits: Record<HeightUnit, HeightUnitConfig> = {
  cm: {
    title: "cm",
    valueInCm: 1,
  },
  ft: {
    title: "ft",
    valueInCm: 30.48,
  },
};

export const weightUnits: Record<WeightUnit, WeightUnitConfig> = {
  kg: {
    title: "kg",
    valueInKg: 1,
  },
  lbs: {
    title: "lbs",
    valueInKg: 0.453592,
  },
};
