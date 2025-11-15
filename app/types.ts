import type { InputHTMLAttributes } from "react";

export type SortOptionsType = "asc" | "desc";

export interface IUserField {
  name: string;
  settings: InputHTMLAttributes<HTMLInputElement | HTMLSelectElement>;
  title?: string;
  options?: { name: string; value: string }[];
}

export interface UserData {
  height: string;
  heightUnit: string;
  weight: string;
  weightUnit: string;
  birthDate: string;
}

export interface Recommendation {
  title: string;
  priority: number;
  description?: string;
}

export interface RecommendationsResult {
  name: string;
  data: Recommendation[];
  error?: string;
}
