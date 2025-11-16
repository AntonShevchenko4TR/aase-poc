import { heightUnits } from "../constants";
import type { HeightUnit } from "../types";

export function convertHeight(
  value: number,
  inputUnit: HeightUnit,
  outputUnit: HeightUnit
): number {
  if (inputUnit === outputUnit) {
    return value;
  }

  const inputValueInCm = heightUnits[inputUnit].valueInCm;
  const outputValueInCm = heightUnits[outputUnit].valueInCm;

  return (value * inputValueInCm) / outputValueInCm;
}
