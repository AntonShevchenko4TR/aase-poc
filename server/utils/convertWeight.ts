import { weightUnits } from "../constants";
import type { WeightUnit } from "../types";

export function convertWeight(
  value: number,
  inputUnit: WeightUnit,
  outputUnit: WeightUnit
): number {
  if (inputUnit === outputUnit) {
    return value;
  }

  const inputValueInKg = weightUnits[inputUnit].valueInKg;
  const outputValueInKg = weightUnits[outputUnit].valueInKg;

  return (value * inputValueInKg) / outputValueInKg;
}
