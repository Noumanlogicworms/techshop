import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-01-31",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
});
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);