import { createClient } from "@sanity/client";

export default createClient({
  projectId: process.env.REACT_APP_PROJECT_ID || "demo-project-123",
  dataset: process.env.REACT_APP_DATASET || "production",
  apiVersion: "2024-01-01", // Use current date or your preferred API version
  useCdn: false,
});
