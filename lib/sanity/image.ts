import { getClient } from "./client";
import imageUrlBuilder from "@sanity/image-url";

export function urlForImage(source: any) {
  const builder = imageUrlBuilder(getClient());
  return builder.image(source);
}
