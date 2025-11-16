declare module "express-serve-static-core" {
  interface Request {
    validatedQuery?: RecommendationQuery;
  }
}

export type HeightUnit = "cm" | "ft";
export type WeightUnit = "kg" | "lbs";

export interface HeightUnitConfig {
  title: string;
  valueInCm: number;
}

export interface WeightUnitConfig {
  title: string;
  valueInKg: number;
}

export interface RecommendationQuery {
  height: number;
  weight: number;
  heightUnit: HeightUnit;
  weightUnit: WeightUnit;
  birthDate: number; // unix timestamp
}

export interface Recommendation {
  title: string;
  priority: number; // 0..1
  description?: string;
}

export interface RecommendationsResult {
  name: string;
  data: Recommendation[];
  error?: string;
}
