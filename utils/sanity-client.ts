import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  apiVersion: "2023-05-03",
  projectId: "gyris7dt",
  dataset: "production",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: false,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}
