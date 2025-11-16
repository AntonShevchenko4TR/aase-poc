import { apiClient } from "~/lib";
import { dateToUnixTimestamp } from "~/utils";
import type { IRecommendationsResult, IUserData } from "~/types";

export const fetchRecommendations = async (
  userData: IUserData
): Promise<IRecommendationsResult[]> => {
  const queryParams = new URLSearchParams({
    height: userData.height,
    heightUnit: userData.heightUnit,
    weight: userData.weight,
    weightUnit: userData.weightUnit,
    birthDate: dateToUnixTimestamp(userData.birthDate).toString(),
  });

  const response = await apiClient.get<IRecommendationsResult[]>(
    `/recommendations?${queryParams.toString()}`
  );

  return response.data;
};
