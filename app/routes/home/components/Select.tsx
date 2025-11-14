import type { IUserField } from "~/types";

export const Select = ({ field }: { field: IUserField }) => (
  <select
    {...field.settings}
    id={field.name}
    name={field.name}
    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:border-blue-600 p-2.5 min-w-30"
  >
    {field.options?.map((el) => (
      <option value={el.name} key={el.name}>
        {el.value}
      </option>
    ))}
  </select>
);
