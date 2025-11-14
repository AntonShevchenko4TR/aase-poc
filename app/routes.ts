import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./routes/home/index.tsx"),
  route("recommendations", "./routes/recommendations/index.tsx"),
] satisfies RouteConfig;
