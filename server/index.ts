import "dotenv/config";
import express from "express";

import { basicAuthMiddleware } from "./middlewares/auth";
import { getRecommendations } from "./routes/recommendations";

const port = process.env.SERVER_PORT;
const app = express();

// Apply HTTP Basic Auth middleware to ALL routes
app.use(basicAuthMiddleware);

// API routes
app.get("/api/recommendations", getRecommendations);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
