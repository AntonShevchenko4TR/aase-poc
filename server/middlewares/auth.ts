import auth from "basic-auth";
import type { IncomingMessage, ServerResponse } from "http";

const USERNAME = process.env.AUTH_USERNAME;
const PASSWORD = process.env.AUTH_PASSWORD;

export const basicAuthMiddleware = (
  req: IncomingMessage,
  res: ServerResponse,
  next: () => void
) => {
  const credentials = auth(req);

  if (
    !credentials ||
    credentials.name !== USERNAME ||
    credentials.pass !== PASSWORD
  ) {
    res.setHeader("WWW-Authenticate", "Basic");
    res.statusCode = 401;
    res.end("Authentication required");
    return;
  }

  next();
};
