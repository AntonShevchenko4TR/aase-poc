export type HeightUnit = "cm" | "ft";
export type WeightUnit = "kg" | "lbs";

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
