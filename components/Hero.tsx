"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <section className="rts-banner-three-solari relative overflow-hidden min-h-[80vh]">
      {/* Optimized Hero Background */}
      <Image
        src="/assets/images/green/hero-bg-3.webp"
        alt="Renewable energy solar panels"
        fill
        priority
        sizes="100vw"
        quality={70}
        placeholder="blur"
        blurDataURL="/assets/images/green/hero-bg-3-small.jpg"
        className="object-cover"
      />

      <div className="container-full relative z-10">
        <div className="row">
          <div className="col-lg-12">
            <div className="left-banner-content-area-two max-w-[900px]">
              <span className="pre-title">{t("preTitle")}</span>

              <h1 className="title">{t("title")}</h1>

              <p className="disc">{t("description")}</p>

              <div className="baner-three-button-area flex gap-6 items-center">
                <a href="/about" className="rts-btn btn-primary">
                  {t("learnMore")}
                </a>

                <div className="call-button flex items-center gap-3">
                  <i className="fa-solid fa-phone"></i>

                  <div className="info">
                    <span>{t("callUs")}</span>
                    <a href="tel:+251911758675">
                      <h6 className="title">+251911758675</h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Delay this marquee animation */}
      <div className="marquee hidden md:block">
        <div className="marquee__item">
          <div className="banner-marque-bottom">
            <p>{t("marquee")}</p>
            <p>{t("marquee")}</p>
            <p>{t("marquee")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
