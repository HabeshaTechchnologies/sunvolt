import React from 'react'
import { useTranslations } from "next-intl";

type Props = {}

const Feedback = (props: Props) => {
  const t = useTranslations("Feedback");
  return (
    <div className=" mt-5">
      <div className="rts-clients-feedback rts-section-gapBottom bg-feedback-about bg_image">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="rts-solution-left-area-left">
                <div className="thumbnail">
                  <img src="assets/images/green/feed-3.avif" alt="solution" />
                </div>
                <div className="small-image images">
                  <img src="assets/images/solution/02.jpg" alt="solution" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 pl--90 pl_md--10 pl_sm--10 mt_md--50 mt_sm--30">
              <div className="feed-back-about-wrapper reveal">
                <div className="title-area-left title-g">
                  <p className="pre ">
                    <span>{t('preTitle1')}</span>{t('preTitle2')}
                  </p>
                  <h2 className="title skew-up">
                    {t('title')}
                  </h2>
                </div>

                <div className="swiper mySwiper-about-feedback">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="feedback-about-swiper-wrapper">
                        <div className="single-feedback-about">
                          <div className="head">
                            {/* <a href="#" className="thumbnail">
                              <img
                                src="assets/images/about/07.png"
                                alt="about"
                              />
                            </a> */}
                            <div className="info">
                              <h5 className="title">{t('name1')}</h5>
                              <span>{t('role1')}</span>
                            </div>
                          </div>
                          <div className="body">
                            <p>
                              {t('feedback1')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="feedback-about-swiper-wrapper">
                        <div className="single-feedback-about">
                          <div className="head">
                            {/* <a href="#" className="thumbnail">
                              <img
                                src="assets/images/about/07.png"
                                alt="about"
                              />
                            </a> */}
                            <div className="info">
                              <h5 className="title">{t('name2')}</h5>
                              <span>{t('role2')}</span>
                            </div>
                          </div>
                          <div className="body">
                            <p>
                              {t('feedback2')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="feedback-about-swiper-wrapper">
                        <div className="single-feedback-about">
                          <div className="head">
                            {/* <a href="#" className="thumbnail">
                              <img
                                src="assets/images/about/07.png"
                                alt="about"
                              />
                            </a> */}
                            <div className="info">
                              <h5 className="title">{t('name1')}</h5>
                              <span>{t('role1')}</span>
                            </div>
                          </div>
                          <div className="body">
                            <p>
                              {t('feedback3')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback