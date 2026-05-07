export const dynamic = "force-dynamic";

import React from "react";
import { getBlogPosts } from "@/lib/sanity/fetchQueries";
import { urlForImage } from "@/lib/sanity/image";
import { getTranslations, getLocale } from "next-intl/server";

async function BlogList() {
  const blogPosts = await getBlogPosts();
  const t = await getTranslations("BlogList");
  const locale = await getLocale();

  return (
    <div>
      <div className="blog-post-area rts-section-gap">
        <div className="container">
          <div className="row g-24 mt--20">
            {blogPosts.map((post: any) => (
              <div
                key={post.slug.current}
                className="col-lg-4 col-md-6 col-sm-12 col-12"
              >
                {/* Blog Card */}
                <div className="blog-single-one text-center">
                  <a href={`/blog/${post.slug.current}`} className="thumbnail">
                    <div className="inner">
                      <img
                        src={
                          urlForImage(post.mainImage)
                            ?.width(400)
                            .height(250)
                            .url() || "assets/images/blog/default.jpg"
                        }
                        alt={post.title || "Blog"}
                        style={{
                          width: "100%",
                          height: "250px",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                    </div>
                  </a>
                  <div className="head">
                    <div className="date-area single-info">
                      <i className="fa-light fa-calendar-days"></i>
                      <p>
                        {new Date(post.publishedAt).toLocaleDateString(locale) ||
                          "N/A"}
                      </p>
                    </div>
                    <div className="tag-area single-info">
                      <i className="fa-light fa-tags"></i>
                      <p>{post.categories?.[0]?.title || "General"}</p>
                    </div>
                  </div>
                  <div className="body text-start">
                    <a href={`/blog/${post.slug.current}`}>
                      <h5 className="title">
                        {post.title && post.title.length > 60
                          ? post.title.slice(0, 60) + "..."
                          : post.title}
                      </h5>
                    </a>
                    <a
                      href={`/blog/${post.slug.current}`}
                      className="rts-btn btn-border radious-0"
                    >
                      {t('readDetails')}
                      <i className="fa-regular fa-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogList;
