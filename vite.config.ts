import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import { basicAuthPlugin } from "./vite-auth-plugin";

const apiPort = process.env.SERVER_PORT;

export default defineConfig({
  plugins: [basicAuthPlugin(), tailwindcss(), reactRouter(), tsconfigPaths()],
  server: {
    proxy: {
      "/api": {
        target: `http://localhost:${apiPort}`,
        changeOrigin: true,
      },
    },
  },
});
