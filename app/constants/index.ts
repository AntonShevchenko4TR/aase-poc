import type { IUserField } from "~/types";

export const appTitle = "FunWithActivity";

export const userFields: {
  [key: string]: IUserField;
} = {
  height: {
    title: "Height",
    name: "height",
    settings: {
      type: "number",
      step: "0.1",
      placeholder: "150",
      required: true,
    },
  },
  heightUnit: {
    name: "heightUnit",
    settings: {
      required: true,
    },
    options: [
      {
        name: "cm",
        value: "cm",
      },
      {
        name: "feet",
        value: "feet",
      },
    ],
  },
  weight: {
    title: "Weight",
    name: "weight",
    settings: {
      type: "number",
      step: "0.1",
      placeholder: "60",
      required: true,
    },
  },
  weightUnit: {
    name: "weightUnit",
    settings: {
      required: true,
    },
    options: [
      {
        name: "kg",
        value: "kg",
      },
      {
        name: "pounds",
        value: "pounds",
      },
    ],
  },
  birthDate: {
    title: "Birth Date",
    name: "birthDate",
    settings: {
      type: "date",
      required: true,
    },
  },
};
