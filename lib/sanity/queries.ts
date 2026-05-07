import { defineQuery } from "next-sanity";

// GROQ Query for Blog Listing Page
const fetchBlogPosts =
  defineQuery(`*[_type == "post"] | order(publishedAt desc) {
  title,
  slug,
  mainImage,
  excerpt,
  publishedAt,
  "categories": categories[]->title
}
`);

const fetchSingleBlog = defineQuery(`
  *[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    publishedAt,
    mainImage,
    body,
  }
  `);

  const fetchRecentPosts =
    defineQuery(`*[_type == "post"] | order(publishedAt desc)[0...3] {
  title,
  slug,
  mainImage,
  publishedAt
}
`);

const fetchProducts = defineQuery(`
  *[_type == "product"] | order(
    select(
      category->title == "EV" => 0,
      category->title == "Solar" => 1,
      category->title == "Tyres" => 2,
      category->title == "Water Treatment" => 3,
      category->title == "Power Cables" => 4,
      5 // Default fall-through value for any other category
    ) asc
  ) {
    // Select the fields you need
    title,
    slug,
    mainImage,
    description,
    "categoryTitle": category->title
  }
`);

export { fetchBlogPosts, fetchSingleBlog, fetchRecentPosts, fetchProducts };