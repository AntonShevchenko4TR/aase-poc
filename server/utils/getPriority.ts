export function getPriority(
  value: number,
  minValue: number,
  maxValue: number
): number {
  const normalizedValue = (value - minValue) / (maxValue - minValue);

  return Number(Math.max(0, Math.min(1, normalizedValue)).toFixed(3));
}
