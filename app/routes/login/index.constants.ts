import type { IUserField } from "~/types";

export const loginFields: Record<string, IUserField> = {
  username: {
    name: "username",
    title: "Login",
    settings: {
      type: "text",
      required: true,
      placeholder: "Enter your login",
    },
  },
  password: {
    name: "password",
    title: "Password",
    settings: {
      type: "password",
      required: true,
      placeholder: "Enter your password",
    },
  },
};
