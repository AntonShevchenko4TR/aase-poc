import type { IUserField } from "~/types";

interface LabelProps {
  field: IUserField;
}

export const Label = ({ field }: LabelProps) => (
  <label
    htmlFor={field.name}
    className="block mb-2 text-sm font-medium text-gray-900"
  >
    {field.title}
  </label>
);
