import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router";

import { apiRoutes, appTitle } from "~/constants";
import { useUserData } from "~/contexts";
import { paths } from "~/routes";
import { Spinner } from "~/components";
import { dateToUnixTimestamp } from "~/utils";
import type { RecommendationsResult, UserData } from "~/types";
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

export default function Recommendations() {
  const navigate = useNavigate();
  const { userData } = useUserData();
  const didFetch = useRef(false);

  const [loading, setLoading] = useState(true);
  const [recommendations, setRecommendations] = useState<
    RecommendationsResult[]
  >([]);

  const allRecommendations = useMemo(() => {
    return recommendations
      .flatMap((result) =>
        result.data.map((rec) => ({
          ...rec,
          serviceName: result.name,
        }))
      )
      .sort((a, b) => b.priority - a.priority);
  }, [recommendations]);

  const fetchRecommendations = async (userData: UserData) => {
    try {
      const queryParams = new URLSearchParams({
        height: userData.height,
        heightUnit: userData.heightUnit,
        weight: userData.weight,
        weightUnit: userData.weightUnit,
        birthDate: dateToUnixTimestamp(userData.birthDate).toString(),
      });

      const response = await fetch(
        `${apiRoutes.recommendations}?${queryParams.toString()}`
      );
      const data: RecommendationsResult[] = await response.json();

      setRecommendations(data);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!userData) {
      navigate(paths.home);
      return;
    }

    if (!didFetch.current) {
      didFetch.current = true;
      fetchRecommendations(userData);
    }
  }, [userData, navigate]);

  if (!userData || loading) {
    return <Spinner />;
  }

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
        <FiltersBlock recommendations={recommendations} userData={userData} />
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:space-y-0">
          {!allRecommendations.length && (
            <div className="col-span-full text-center text-gray-500">
              No recommendations available
            </div>
          )}
          {allRecommendations.map((rec, i) => (
            <div
              className="bg-white p-6 rounded-md shadow-sm flex flex-col w-full"
              key={i}
            >
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-sm bg-primary-100 lg:h-12 lg:w-12 text-primary-900 font-bold text-xl">
                {i + 1}
              </div>
              <h3 className="mb-2 text-xl font-bold">{rec.title}</h3>
              {rec.description && (
                <p className="text-gray-500">{rec.description}</p>
              )}
              <div className="mt-auto pt-4 flex justify-between items-center text-sm text-gray-300">
                <p>By {rec.serviceName}</p>
                <p className="font-bold">
                  {Math.ceil(rec.priority * 100).toFixed(0)}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
