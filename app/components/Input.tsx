import type { IUserField } from "~/types";

export const Input = ({ field }: { field: IUserField }) => (
  <input
    {...field.settings}
    id={field.name}
    name={field.name}
    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:border-blue-600 w-full p-2.5"
  />
);
