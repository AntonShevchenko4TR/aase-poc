import type { Plugin } from "vite";

import { basicAuthMiddleware } from "./server/middlewares/auth";

export function basicAuthPlugin(): Plugin {
  return {
    name: "basic-auth",
    configureServer(server) {
      server.middlewares.use(basicAuthMiddleware);
    },
  };
}
