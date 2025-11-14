import type { FormEvent } from "react";

import { appTitle } from "~/constants";
import type { Route } from "./+types";
import { fields } from "./constants";

export function meta({}: Route.MetaArgs) {
  return [
    { title: appTitle },
    { name: "description", content: "Health and Activity Recommender" },
  ];
}

export default function Home() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      height: formData.get("height"),
      weight: formData.get("weight"),
      birthDate: formData.get("birthDate"),
    };

    console.log("Form data:", data);
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Personal Details
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              {Object.entries(fields).map(([key, value]) => (
                <div key={key}>
                  <label
                    htmlFor={key}
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    {value.title}
                  </label>
                  <input
                    {...value.settings}
                    name={key}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  />
                </div>
              ))}
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
              >
                Get recommendations
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
