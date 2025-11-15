import { weightUnits } from "server/constants";
import type { WeightUnit } from "server/types";

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
