import type { InputHTMLAttributes } from "react";

export const fields: {
  [key: string]: {
    title: string;
    settings: InputHTMLAttributes<HTMLInputElement>;
  };
} = {
  height: {
    title: "Height",
    settings: {
      type: "number",
      step: "0.1",
      placeholder: "150",
      required: true,
    },
  },
  weight: {
    title: "Weight",
    settings: {
      type: "number",
      step: "0.1",
      placeholder: "60",
      required: true,
    },
  },
  birthDate: {
    title: "Birth Date",
    settings: {
      type: "date",
      required: true,
    },
  },
};
