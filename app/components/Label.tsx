import type { IUserField } from "~/types";

export const Label = ({ field }: { field: IUserField }) => (
  <label
    htmlFor={field.name}
    className="block mb-2 text-sm font-medium text-gray-900"
  >
    {field.title}
  </label>
);
