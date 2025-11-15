import type {
  RecommendationQuery,
  Recommendation,
  RecommendationsResult,
} from "../types";

/**
 * Abstract base class for recommendation services
 *
 * @template TRequest - Service-specific request format
 * @template TResponse - Service-specific response format
 * @template TError - Service-specific error format
 */
export abstract class BaseRecommendationService<TRequest, TResponse, TError> {
  public readonly serviceName: string;
  public readonly serviceUrl: string;

  /**
   * Creates a new recommendation service instance
   * @param name - Service identifier
   * @param url - Full API endpoint URL
   */
  constructor(name: string, url: string) {
    this.serviceName = name;
    this.serviceUrl = url;
  }

  /**
   * Transform query parameters into service-specific request format
   * @param query - User input from the recommendations endpoint
   * @returns Service-specific request object
   */
  abstract normalizeInput(query: RecommendationQuery): TRequest;

  /**
   * Transform service response into normalized recommendations
   * @param response - Raw response from the service
   * @returns Array of normalized recommendations with consistent format
   */
  abstract normalizeOutput(response: TResponse): Recommendation[];

  /**
   * Transform service error into a readable error message
   * @param error - Service-specific error object
   * @returns Human-readable error message
   */
  abstract normalizeError(error: TError): string;

  /**
   * Fetch recommendations from the service
   * @param query - User input from the recommendations endpoint
   * @returns RecommendationsResult object with either data or error
   */
  async fetchRecommendations(
    query: RecommendationQuery
  ): Promise<RecommendationsResult> {
    try {
      const request = this.normalizeInput(query);
      const response = await fetch(this.serviceUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });

      const data = await response.json();
      const serviceData = data.body;

      if (data.statusCode !== 200) {
        const errorMessage = data.body
          ? JSON.parse(serviceData).errorMessage
          : this.normalizeError(data as TError);

        throw new Error(errorMessage, data);
      }

      return {
        name: this.serviceName,
        data: this.normalizeOutput(JSON.parse(serviceData) as TResponse),
        error: undefined,
      };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";

      console.error(err);

      return {
        name: this.serviceName,
        data: [],
        error: errorMessage,
      };
    }
  }
}
