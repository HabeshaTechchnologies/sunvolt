import React from "react";
import { useTranslations } from "next-intl";

type Props = {};

const CustomersSays = (props: Props) => {
  const t = useTranslations("CustomersSays");
  return (
    <div>
      <div className="rts-customers-says-area rts-section-gapTop bg_image bg-testimonials-1 reveal">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-center title-g">
                <p className="pre">
                  <span>{t('preTitle1')}</span> {t('preTitle2')}
                </p>
                <h2 className="title">{t('title')}</h2>
              </div>
            </div>
          </div>
          <div className="row g-24 pb--110 mt--10">
            <div className="col-lg-4">
              {/* */}
              <div className="rts-single-testimonials-one">
                <div className="logo">
                  <img src="assets/images/green/logo-no-bg.png" alt="" />
                </div>
                <p className="disc">
                  {t('vision')}
                </p>
                <div className="awener-area">
                  {/* <a href="#" className="author">
                    <img src="assets/images/testimonials/02.png" alt="images" />
                  </a> */}
                  <div className="main">
                    <a href="#">
                      <h6 className="title">Sunvolt</h6>
                    </a>
                    <span>{t('visionLabel')}</span>
                  </div>
                </div>
              </div>
              {/* */}
            </div>
            <div className="col-lg-4">
              {/* */}
              <div className="rts-single-testimonials-one">
                <div className="logo">
                  <img src="assets/images/green/logo-no-bg.png" alt="" />
                </div>
                <p className="disc">
                  {t('mission')}
                </p>
                <div className="awener-area">
                  {/* <a href="#" className="author">
                    <img src="assets/images/testimonials/03.png" alt="images" />
                  </a> */}
                  <div className="main">
                    <a href="#">
                      <h6 className="title">Sunvolt</h6>
                    </a>
                    <span>{t('missionLabel')}</span>
                  </div>
                </div>
              </div>
              {/* */}
            </div>
            <div className="col-lg-4">
              {/* */}
              <div className="rts-single-testimonials-one">
                <div className="logo">
                  <img src="assets/images/green/logo-no-bg.png" alt="" />
                </div>
                <p className="disc">
                  {t('values')}
                </p>
                <div className="awener-area">
                  {/* <a href="#" className="author">
                    <img src="assets/images/testimonials/04.png" alt="images" />
                  </a> */}
                  <div className="main">
                    <a href="#">
                      <h6 className="title">Sunvolt</h6>
                    </a>
                    <span>{t('valuesLabel')}</span>
                  </div>
                </div>
              </div>
              {/* */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersSays;
