import { type RouteConfig, index, route } from "@react-router/dev/routes";

export const paths = {
  home: "/",
  recommendations: "/recommendations",
} as const;

export default [
  index("./routes/home/index.tsx"),
  route(paths.recommendations, "./routes/recommendations/index.tsx"),
] satisfies RouteConfig;
