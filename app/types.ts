import type { InputHTMLAttributes } from "react";

export interface IUserField {
  name: string;
  settings: InputHTMLAttributes<HTMLInputElement | HTMLSelectElement>;
  title?: string;
  options?: { name: string; value: string }[];
}

export interface IUserData {
  height: string;
  heightUnit: string;
  weight: string;
  weightUnit: string;
  birthDate: string;
}

export interface IRecommendation {
  title: string;
  priority: number;
  description?: string;
}

export interface IRecommendationsResult {
  name: string;
  data: IRecommendation[];
  error?: string;
}
export interface IRecommendationWithService extends IRecommendation {
  serviceName: string;
}
