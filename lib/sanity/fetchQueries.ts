import { getClient } from "./client";
import { fetchBlogPosts, fetchProducts, fetchRecentPosts, fetchSingleBlog } from "./queries";

// Fetch blog posts
export const getBlogPosts = async () => {
  return await getClient().fetch(fetchBlogPosts);
};

// Fetch single blog post
export const getSingleBlog = async (slug: string) => {
  return await getClient().fetch(fetchSingleBlog, { slug });
};

// Fetch recent posts
export const getRecentPosts = async () => {
  return await getClient().fetch(fetchRecentPosts);
};

// Fetch Products
export const getProducts = async () => {
  return await getClient().fetch(fetchProducts);
};

