import type { HeightUnit, WeightUnit } from "server/types";

export const heightUnits: Record<
  HeightUnit,
  {
    title: string;
    valueInCm: number;
  }
> = {
  cm: {
    title: "cm",
    valueInCm: 1,
  },
  ft: {
    title: "ft",
    valueInCm: 30.48,
  },
};

export const weightUnits: Record<
  WeightUnit,
  {
    title: string;
    valueInKg: number;
  }
> = {
  kg: {
    title: "kg",
    valueInKg: 1,
  },
  lbs: {
    title: "lbs",
    valueInKg: 0.453592,
  },
};
