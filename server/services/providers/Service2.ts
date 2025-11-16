import { BaseRecommendationService } from "../BaseRecommendationService";
import {
  convertHeight,
  convertWeight,
  generateUUID,
  getPriority,
} from "../../utils";
import type { RecommendationQuery, Recommendation } from "../../types";

interface Request {
  measurements: {
    mass: number; // lbs
    height: number; // ft
  };
  birth_date: number; // unix timestamp
  session_token: string;
}

interface Response {
  priority: number; // 1..1000
  title: string;
  details: string;
}

interface Error {
  code: number;
  error: string;
}

export class Service2 extends BaseRecommendationService<
  Request,
  Response[],
  Error
> {
  constructor() {
    super("Service2", process.env.SERVICE2_URL!);
  }

  normalizeInput(query: RecommendationQuery): Request {
    return {
      measurements: {
        mass: convertWeight(query.weight, query.weightUnit, "lbs"),
        height: convertHeight(query.height, query.heightUnit, "ft"),
      },
      birth_date: Number(query.birthDate),
      session_token: generateUUID(),
    };
  }

  normalizeOutput(response: Response[]): Recommendation[] {
    return response.map((rec) => ({
      title: rec.title,
      description: rec.details,
      priority: getPriority(rec.priority, 1, 1000),
    }));
  }

  normalizeError(error: Error): string {
    return `${error.code}: ${error.error}`;
  }
}
