import { BaseRecommendationService } from "../BaseRecommendationService";
import { convertHeight, convertWeight, getPriority } from "../../utils";
import type { RecommendationQuery, Recommendation } from "../../types";

interface Request {
  height: number; // cm
  weight: number; // kg
  token: string;
}

interface Response {
  confidence: number; // 0..1
  recommendation: string;
}

interface Error {
  errorCode: number;
  errorMessage: string;
}

export class Service1 extends BaseRecommendationService<
  Request,
  Response[],
  Error
> {
  constructor() {
    super(
      "Service1",
      "https://a2da22tugdqsame4ckd3oohkmu0tnbne.lambda-url.eu-central-1.on.aws/services/service1"
    );
  }

  normalizeInput(query: RecommendationQuery): Request {
    return {
      height: convertHeight(query.height, query.heightUnit, "cm"),
      weight: convertWeight(query.weight, query.weightUnit, "kg"),
      token: process.env.SERVICE1_TOKEN!,
    };
  }

  normalizeOutput(response: Response[]): Recommendation[] {
    return response.map((rec) => ({
      title: rec.recommendation,
      priority: getPriority(rec.confidence, 0, 1),
    }));
  }

  normalizeError(error: Error): string {
    return `${error.errorCode}: ${error.errorMessage}`;
  }
}
