import type { Request, Response, NextFunction } from "express";

import type { HeightUnit, RecommendationQuery, WeightUnit } from "../types";

/**
 * Middleware to validate recommendations query parameters
 */
export function validateRecommendationsQuery(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const query = req.query;

  // Check if all required parameters are present
  if (
    !query.birthDate ||
    !query.height ||
    !query.heightUnit ||
    !query.weight ||
    !query.weightUnit
  ) {
    res.status(400).json({ error: "Not valid query params" });
    return;
  }

  // Transform query parameters to proper types
  const validatedQuery: RecommendationQuery = {
    height: Number(query.height),
    weight: Number(query.weight),
    heightUnit: query.heightUnit as HeightUnit,
    weightUnit: query.weightUnit as WeightUnit,
    birthDate: Number(query.birthDate),
  };

  // Attach validated query to request
  req.validatedQuery = validatedQuery;

  next();
}
