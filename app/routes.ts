import { type RouteConfig, index, route } from "@react-router/dev/routes";

export const paths = {
  login: "/",
  details: "/details",
  recommendations: "/recommendations",
} as const;

export default [
  index("./routes/login/index.tsx"),
  route(paths.details, "./routes/details/index.tsx"),
  route(paths.recommendations, "./routes/recommendations/index.tsx"),
] satisfies RouteConfig;
