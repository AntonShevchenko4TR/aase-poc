import type { IUserField } from "~/types";

interface InputProps {
  field: IUserField;
}

export const Input = ({ field }: InputProps) => (
  <input
    {...field.settings}
    id={field.name}
    name={field.name}
    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-300 focus:border-primary-600 focus:outline-none w-full p-2.5"
  />
);
