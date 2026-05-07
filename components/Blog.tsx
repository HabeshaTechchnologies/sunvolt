export const dynamic = "force-dynamic";

import React from "react";
import { getBlogPosts } from "@/lib/sanity/fetchQueries";
import { urlForImage } from "@/lib/sanity/image";
import { getTranslations } from "next-intl/server";

async function Blog() {
  const t = await getTranslations("Blog");
  const blogPosts = await getBlogPosts();

  const [firstPost, secondPost, thirdPost] = blogPosts;

  return (
    <div>
      <div
        className="rts-solari-blog-area-start rts-section-gap reveal"
        id="blog"
      >
        <div className="container">
          {/* Section Title */}
          <div className="row">
            <div className="col-lg-12">
              <div className="solari-title-area-three text-center">
                <span className="pre-title skew-up">{t('preTitle')}</span>
                <h2 className="title skew-up">{t('title')}</h2>
              </div>
            </div>
          </div>

          {/* Blog Layout */}
          <div className="row g-24 mt--30">
            {/* Left Column - Large Blog */}
            {firstPost && (
              <div className="col-lg-6">
                <div className="single-blog-solaric-lg">
                  <a
                    href={`/blog/${firstPost.slug.current}`}
                    className="thumbnail"
                  >
                    <img
                      src={
                        urlForImage(firstPost.mainImage)
                          ?.width(800)
                          .height(500)
                          .url() || "assets/images/blog/default.jpg"
                      }
                      alt={firstPost.title || "Blog"}
                      style={{
                        width: "100%",
                        height: "350px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  </a>
                  <div className="inner-content-solari-blog">
                    <div className="head">
                      <div className="single">
                        <i className="fa-regular fa-clock"></i>
                        <span>
                          {new Date(firstPost.publishedAt).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="single">
                        <i className="fa-regular fa-user"></i>
                        <span>{firstPost.author?.name || "Sunvolt"}</span>
                      </div>
                      <div className="single">
                        <i className="fa-light fa-phone-office"></i>
                        <span>{t('minRead')}</span>
                      </div>
                    </div>
                    <div className="body">
                      <a href={`/blog/${firstPost.slug.current}`}>
                        <h5 className="title">
                          {firstPost.title && firstPost.title.length > 80
                            ? firstPost.title.slice(0, 80) + "..."
                            : firstPost.title}
                        </h5>
                      </a>
                      <a
                        href={`/blog/${firstPost.slug.current}`}
                        className="rts-btn btn-primary"
                      >
                        {t('readMore')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Right Column - Two Small Blogs */}
            <div className="col-lg-6">
              {[secondPost, thirdPost].map(
                (post, idx) =>
                  post && (
                    <div className="single-blog-solaric-sm" key={idx}>
                      <a
                        href={`/blog/${post.slug.current}`}
                        className="thumbnail"
                      >
                        <img
                          src={
                            urlForImage(post.mainImage)
                              ?.width(600)
                              .height(400)
                              .url() || "assets/images/blog/default.jpg"
                          }
                          alt={post.title || "Blog"}
                          style={{
                            width: "100%",
                            height: "200px",
                            objectFit: "cover",
                            borderRadius: "8px",
                          }}
                        />
                      </a>
                      <div className="inner-content-solari-blog">
                        <div className="head">
                          <div className="single">
                            <i className="fa-regular fa-clock"></i>
                            <span>
                              {new Date(post.publishedAt).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="single">
                            <i className="fa-regular fa-user"></i>
                            <span>{post.author?.name || "Sunvolt"}</span>
                          </div>
                        </div>
                        <div className="body">
                          <a href={`/blog/${post.slug.current}`}>
                            <h5 className="title">
                              {post.title && post.title.length > 60
                                ? post.title.slice(0, 60) + "..."
                                : post.title}
                            </h5>
                          </a>
                          <a
                            href={`/blog/${post.slug.current}`}
                            className="rts-btn btn-primary"
                          >
                            {t('readMore')}
                          </a>
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
