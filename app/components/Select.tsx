import type { IUserField } from "~/types";

interface SelectProps {
  field: IUserField;
}

export const Select = ({ field }: SelectProps) => (
  <select
    {...field.settings}
    id={field.name}
    name={field.name}
    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-300 focus:border-primary-600 focus:outline-none p-2.5 min-w-20"
  >
    {field.options?.map((el) => (
      <option value={el.name} key={el.name}>
        {el.value}
      </option>
    ))}
  </select>
);
