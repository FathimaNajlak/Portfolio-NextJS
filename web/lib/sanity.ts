import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "zei20okn",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
