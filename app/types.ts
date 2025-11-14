import type { InputHTMLAttributes } from "react";

export type SortOptionsType = "asc" | "desc";

export interface IService {
  title: string;
}

export interface IUserField {
  name: string;
  settings: InputHTMLAttributes<HTMLInputElement | HTMLSelectElement>;
  title?: string;
  options?: { name: string; value: string }[];
}
