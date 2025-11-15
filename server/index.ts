import express from "express";

import { basicAuthMiddleware } from "./middlewares/auth";

const port = process.env.SERVER_PORT;
const app = express();

// Apply HTTP Basic Auth middleware to ALL routes
app.use(basicAuthMiddleware);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
