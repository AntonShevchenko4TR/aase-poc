import "dotenv/config";
import cors from "cors";
import express from "express";

import { getRecommendations } from "./routes/recommendations";

const port = process.env.SERVER_PORT;
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.get("/api/recommendations", getRecommendations);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
