import React from 'react';
import { getSingleBlog, getRecentPosts } from '@/lib/sanity/fetchQueries';
import { urlForImage } from '@/lib/sanity/image';
import { PortableText } from '@portabletext/react';
import { getTranslations, getLocale } from "next-intl/server";

type Props = { params: { slug: string } };

export const dynamic = 'force-dynamic';

async function SingleBlog({ params }: Props) {
  const slug = params.slug;
  const blog: any = await getSingleBlog(slug);
  const recentPosts: any = await getRecentPosts();
  const t = await getTranslations("SingleBlog");
  const locale = await getLocale();

  if (!blog) return <p>{t('blogNotFound')}</p>;

  return (
    <div className="rts-blog-list-area rts-section-gap">
      <div className="container">
        <div className="row g-5">
          {/* Main Blog Content */}
          <div className="col-xl-8 col-md-12 col-sm-12 col-12">
            <div className="blog-single-post-listing details mb--0">
              <div className="thumbnail">
                <img
                  src={
                    urlForImage(blog.mainImage)?.width(800).height(500).url() ||
                    'assets/images/blog/default.jpg'
                  }
                  alt={blog.title || 'Blog'}
                />
              </div>
              <div className="blog-listing-content">
                <div className="user-info">
                  <div className="single">
                    <i className="far fa-user-circle"></i>
                    <span>{t('by')} {blog.author?.name || 'Sunvolt'}</span>
                  </div>
                  <div className="single">
                    <i className="far fa-clock"></i>
                    <span>{new Date(blog.publishedAt).toLocaleDateString(locale)}</span>
                  </div>
                  <div className="single">
                    <i className="far fa-tags"></i>
                    <span>{blog.categories?.map((c: any) => c.title).join(', ')}</span>
                  </div>
                </div>
                <h3 className="title animated fadeIn">{blog.title}</h3>
                <div className="disc para-1">
                  <PortableText value={blog.body} />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-xl-4 col-md-12 col-sm-12 col-12">
            <div className="rts-single-wized Recent-post">
              <div className="wized-header">
                <h5 className="title">{t('recentPosts')}</h5>
              </div>
              <div className="wized-body">
                {recentPosts?.map((post: any) => (
                  <div className="recent-post-single" key={post.slug.current}>
                    <div className="thumbnail">
                      <a href={`/blog/${post.slug.current}`}>
                        <img
                          src={
                            urlForImage(post.mainImage)?.width(150).height(100).url() ||
                            'assets/images/blog/default.jpg'
                          }
                          alt={post.title}
                        />
                      </a>
                    </div>
                    <div className="content-area text-start">
                      <div className="user">
                        <i className="fal fa-clock"></i>
                        <span>{new Date(post.publishedAt).toLocaleDateString(locale)}</span>
                      </div>
                      <a className="post-title" href={`/blog/${post.slug.current}`}>
                        <h6 className="title">{post.title}</h6>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
