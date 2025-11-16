import type { RequestHandler } from "express";

import { Service1, Service2 } from "../services/providers";
import type { RecommendationQuery } from "../types";

// Initialize service instances
const service1 = new Service1();
const service2 = new Service2();

// All available recommendation services
const services = [service1, service2];
const providersArray = services.map((el) => ({
  name: el.serviceName,
  resolver: (query: RecommendationQuery) => el.fetchRecommendations(query),
}));

/**
 * GET /api/recommendations
 * Query params: height, weight, heightUnit, weightUnit, birthDate
 * Returns: Array of service results with their data and errors
 */
export const getRecommendations: RequestHandler = async (req, res) => {
  try {
    const query = req.validatedQuery as RecommendationQuery;
    const results = await Promise.allSettled(
      providersArray.map((el) => el.resolver(query))
    );

    const data = results.map((result, index) => {
      const serviceName = providersArray[index].name;

      if (result.status === "fulfilled") {
        return result.value;
      } else {
        console.error(`Service ${serviceName} rejected:`, result.reason);
        return {
          name: serviceName,
          data: [],
          error: result.reason.message,
        };
      }
    });

    res.json(data);
  } catch (error) {
    console.error("/api/recommendations failed:", error); // TODO: Error logging
    res.status(500).json([]);
    return;
  }
};
