import { Link } from "react-router";
import { useMemo, useState } from "react";

import type { IService, SortOptionsType } from "~/types";

const defaultSortOptions: Record<
  SortOptionsType,
  {
    selected: boolean;
    title: string;
  }
> = {
  desc: {
    selected: true,
    title: "Priority: High to Low",
  },
  asc: {
    selected: false,
    title: "Priority: Low to High",
  },
};

export const FiltersBlock = ({ services }: { services: IService[] }) => {
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [sortOptions, setSortOptions] = useState(defaultSortOptions);

  const servicesLength = useMemo(() => services.length, [services]);

  const handleSortChange = (key: SortOptionsType) => {
    setSortOptions((val) => ({
      ...val,
      [key]: {
        ...val[key],
        selected: true,
      },
    }));
    setIsSortDropdownOpen(false);

    // TODO: Implement actual sorting logic here
  };

  return (
    <div className="w-full space-y-8 grid-cols-1 mb-10">
      <div className="relative bg-white shadow-sm md:rounded-lg p-6">
        <div className="flex flex-col items-center justify-between pb-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4 border-b-1 border-b-gray-200">
          <div>
            <span className="text-gray-800 text-md font-bold">Total:</span>
            <span className="text-gray-400 text-md pl-2">124</span>
          </div>
          <Link
            to="/"
            className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-lg md:w-auto bg-primary-700 hover:bg-primary-800"
          >
            Change your details
          </Link>
        </div>
        <div className="flex flex-col items-center justify-between pt-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
          <div className="relative">
            <button
              onClick={() => setIsSortDropdownOpen((val) => !val)}
              className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto hover:bg-gray-100 hover:text-primary-700 cursor-pointer"
              type="button"
            >
              <svg
                className="-ml-1 mr-1.5 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                />
              </svg>
              Sort
            </button>
            {isSortDropdownOpen && (
              <ul className="absolute z-10 mt-2 bg-white divide-y divide-gray-100 rounded shadow w-56 py-1 text-sm text-gray-700">
                {Object.entries(sortOptions).map(([key, value]) => (
                  <li key={key}>
                    <button
                      className={`block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                        value.selected
                          ? "bg-primary-50 text-primary-700 font-medium"
                          : ""
                      }`}
                      onClick={() => handleSortChange(key as SortOptionsType)}
                    >
                      {value.title}
                      {value.selected && <span className="float-right">✓</span>}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div
            className="inline-flex flex-col w-full rounded-md md:w-auto md:flex-row"
            role="group"
          >
            {services.map((el, i) => {
              const firstElementClass = i === 0 ? "rounded-l-lg" : "";
              const lastElementClass =
                i === servicesLength - 1 ? "rounded-r-lg" : "";

              return (
                <button
                  key={el.title}
                  type="button"
                  className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-primary-700 ${firstElementClass} ${lastElementClass}`}
                >
                  {el.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
