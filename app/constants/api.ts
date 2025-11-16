export const apiDomain = import.meta.env.VITE_BACKEND_SERVICE_URL;

export const apiRoutes = {
  recommendations: `${apiDomain}/api/recommendations`,
};
