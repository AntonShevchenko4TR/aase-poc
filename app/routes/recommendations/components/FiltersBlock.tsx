import { Link } from "react-router";
import { useCallback, useMemo } from "react";

import type { IRecommendationsResult, IUserData } from "~/types";
import { userFields } from "~/constants";
import { paths } from "~/routes";

import { FieldLabel } from "./FieldLabel";

interface FiltersBlockProps {
  recommendations: IRecommendationsResult[];
  userData: IUserData;
}

export const FiltersBlock = ({
  recommendations,
  userData,
}: FiltersBlockProps) => {
  const servicesLength = useMemo(
    () => recommendations.length,
    [recommendations]
  );

  const getButtonClasses = useCallback(
    (service: IRecommendationsResult, index: number) => {
      const isWithData = !!service.data.length;
      const isWithError = service.error;

      return [
        index === 0 ? "md:rounded-l-lg" : "",
        index === servicesLength - 1 ? "md:rounded-r-lg" : "",
        isWithError ? "bg-red-700 text-white" : "",
        isWithData ? "bg-green-700 text-white" : "",
        !isWithError && !isWithData ? "bg-gray-300 text-gray-900" : "",
      ];
    },
    [servicesLength]
  );

  return (
    <div className="w-full space-y-8 grid-cols-1 mb-10">
      <div className="relative bg-white shadow-sm md:rounded-lg p-6">
        <div className="flex flex-col items-center justify-between pb-4 space-y-3 lg:flex-row lg:space-y-0 lg:space-x-4 border-b-1 border-b-gray-200">
          <div className="flex">
            <FieldLabel
              title={userFields.height.title}
              description={`${userData.height} ${userData.heightUnit}`}
            />
            <FieldLabel
              title={userFields.weight.title}
              description={`${userData.weight} ${userData.weightUnit}`}
            />
            <FieldLabel
              title={userFields.birthDate.title}
              description={userData.birthDate}
            />
          </div>
          <Link
            to={paths.details}
            className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-lg lg:w-auto bg-primary-700 hover:bg-primary-800"
          >
            Change your details
          </Link>
        </div>
        <div className="flex flex-col items-center justify-between pt-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
          <div
            className="inline-flex flex-col w-full rounded-md md:w-auto md:flex-row gap-[1px]"
            role="group"
          >
            {recommendations.map((el, i) => (
              <div
                key={el.name}
                className={`relative group px-4 py-2 text-sm font-medium cursor-default ${getButtonClasses(el, i).join(" ")}`}
              >
                {el.name}
                {el.error && (
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block z-10 pointer-events-none">
                    <div className="bg-gray-900 text-white text-xs rounded py-2 px-3 whitespace-nowrap">
                      Service is not available
                      <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
