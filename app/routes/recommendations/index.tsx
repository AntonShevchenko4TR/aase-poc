import { appTitle } from "~/constants";
import type { Route } from "./+types";
import { FiltersBlock } from "./components";

export function meta({}: Route.MetaArgs) {
  return [
    { title: `${appTitle} | Health & Activity Recommendations` },
    {
      name: "description",
      content:
        "View your personalized recommendations to optimize your fitness and wellness journey",
    },
  ];
}

const services = [{ title: "Test1" }, { title: "Test2" }, { title: "Test3" }];

export default function Recommendations() {
  return (
    <section>
      <div className="flex flex-col py-8 px-4 items-center justify-center mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16 items-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 text-center">
            Health & Activity Recommendations
          </h2>
          <p className="text-gray-500 sm:text-xl text-center">
            View your personalized recommendations to optimize your fitness and
            wellness journey
          </p>
        </div>
        <FiltersBlock services={services} />
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:space-y-0">
          {new Array(10).fill("").map((_, i) => (
            <div className="bg-white p-6 rounded-md shadow-sm" key={i}>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-sm bg-primary-100 lg:h-12 lg:w-12 text-primary-900 font-bold text-xl">
                {i + 1}
              </div>
              <h3 className="mb-2 text-xl font-bold">
                Go for a physical check up
              </h3>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <p className="text-gray-300 pt-4">By Service1</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
