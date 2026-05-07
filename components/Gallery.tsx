export const dynamic = "force-dynamic";
import React from "react";
import { getProducts } from "@/lib/sanity/fetchQueries";
import { urlForImage } from "@/lib/sanity/image";
import { PortableText } from "next-sanity";
import { getTranslations } from "next-intl/server";

// Define the shape for a single gallery item
interface GalleryItem {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
}

const IMAGE_SIZE = "300px";

type Props = {};

const Gallery = async (props: Props) => {
  const t = await getTranslations("Gallery");
  const galleryData = await getProducts();
  return (
    <div>
      <div className="rts-project-page-project rts-section-gap">
        <div className="container">
          {/* Section Title (similar to About page) */}
          <div className="solari-title-area-three text-center mb--50">
            <span className="pre-title skew-up">{t('preTitle')}</span>
            <h2 className="title skew-up">
              {t('title')}
            </h2>
          </div>

          <div className="row g-4">
            {galleryData.map((item: any) => (
              <div
                key={item.slug.current}
                className="col-lg-4 col-md-6 col-sm-6 col-12"
              >
                {/* 1. Apply size to the gallery-wrapper to create a uniform container */}
                <div
                  className="gallery-wrapper"
                  style={{
                    width: "100%",
                    height: IMAGE_SIZE,
                    overflow: "hidden",
                  }}
                >
                  {/* 2. Apply styling to the image for full coverage and proper scaling */}
                  <img
                    src={urlForImage(item.mainImage).url()}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  {/* The clickable overlay for the image */}
                  <a
                    href={urlForImage(item.mainImage).url()}
                    className="gallery-image"
                  >
                    <div className="item-overlay">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          viewBox="0 0 50 50"
                          fill="none"
                        >
                          <path
                            d="M35.7999 23.8H26.2V14.1999C26.2 13.5377 25.6624 13 24.9999 13C24.3376 13 23.8 13.5377 23.8 14.1999V23.8H14.1999C13.5377 23.8 13 24.3376 13 24.9999C13 25.6624 13.5377 26.2 14.1999 26.2H23.8V35.7999C23.8 36.4623 24.3376 37 24.9999 37C25.6624 37 26.2 36.4623 26.2 35.7999V26.2H35.7999C36.4623 26.2 37 25.6624 37 24.9999C37 24.3376 36.4623 23.8 35.7999 23.8Z"
                            fill="white"
                          />
                          <circle cx="25" cy="25" r="24.5" stroke="white" />
                        </svg>
                      </span>
                    </div>
                  </a>
                </div>

                {/* Image Title and Description */}
                <div style={{ padding: "10px 0", textAlign: "center" }}>
                  <h4
                    style={{
                      fontSize: "2rem",
                      marginBottom: "5px",
                      color: "#333",
                    }}
                  >
                    {item.title}
                  </h4>
                  <div>
                    <PortableText value={item.description} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
