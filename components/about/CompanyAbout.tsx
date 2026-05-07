import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

type Props = {};

const CompanyAbout = (props: Props) => {
  const t = useTranslations("CompanyAbout");
  return (
    <div>
      <div className="rts-about-area rts-section-gap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* */}
              <div className="rts-about-left-image-area">
                <div
                  className="thumbnail"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "500px",
                  }}
                >
                  <Image
                    src="/assets/images/green/feed-1.avif"
                    alt="solar energy"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              {/* */}
            </div>
            <div className="col-lg-6">
              {/* */}
              <div className="about-right-content-area-solar-energy">
                <div className="title-area-left">
                  <p className="pre">
                    <span>{t('preTitle').split(' ')[0]}</span> {t('preTitle').split(' ').slice(1).join(' ')}
                  </p>
                  <h2 className="title skew-up" dangerouslySetInnerHTML={{ __html: t('title') }}></h2>
                </div>
                {/* */}
                <ul
                  className="nav custom-nav-soalr-about nav-pills"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      {t('tab1')}
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      {t('tab2')}
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      {t('tab3')}
                    </button>
                  </li>
                </ul>

                {/* */}
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    {/* */}
                    <div className="single-about-content-solar">
                      <p className="disc">
                        {t('desc1')}
                      </p>
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div
                            className="left-area-wrapper"
                            style={{
                              position: "relative",
                              width: "100%",
                              height: "300px",
                            }}
                          >
                            <Image
                              src="/assets/images/green/bread-cuamb-banner-2.jpg"
                              alt="about"
                              fill
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          {/* */}
                          <div className="single-ckeck-wrapper">
                            <Image
                              src="/assets/images/about/dt.png"
                              alt="dotted"
                              width={20}
                              height={20}
                            />
                            <p>{t('check1')}</p>
                          </div>
                          <div className="single-ckeck-wrapper">
                            <Image
                              src="/assets/images/about/dt.png"
                              alt="dotted"
                              width={20}
                              height={20}
                            />
                            <p>{t('check2')}</p>
                          </div>
                          <div className="single-ckeck-wrapper">
                            <Image
                              src="/assets/images/about/dt.png"
                              alt="dotted"
                              width={20}
                              height={20}
                            />
                            <p>{t('check3')}</p>
                          </div>
                          <div className="single-ckeck-wrapper">
                            <Image
                              src="/assets/images/about/dt.png"
                              alt="dotted"
                              width={20}
                              height={20}
                            />
                            <p>{t('check4')}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <div className="single-about-content-solar">
                      <p className="disc">
                        {t('desc2')}
                      </p>
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div
                            className="left-area-wrapper"
                            style={{
                              position: "relative",
                              width: "100%",
                              height: "300px",
                            }}
                          >
                            <Image
                              src="/assets/images/green/other-1.jpg"
                              alt="about"
                              fill
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="single-ckeck-wrapper">
                            <Image
                              src="/assets/images/about/dt.png"
                              alt="dotted"
                              width={20}
                              height={20}
                            />
                            <p>{t('check1')}</p>
                          </div>
                          <div className="single-ckeck-wrapper">
                            <Image
                              src="/assets/images/about/dt.png"
                              alt="dotted"
                              width={20}
                              height={20}
                            />
                            <p>{t('check2')}</p>
                          </div>
                          <div className="single-ckeck-wrapper">
                            <Image
                              src="/assets/images/about/dt.png"
                              alt="dotted"
                              width={20}
                              height={20}
                            />
                            <p>{t('check3')}</p>
                          </div>
                          <div className="single-ckeck-wrapper">
                            <Image
                              src="/assets/images/about/dt.png"
                              alt="dotted"
                              width={20}
                              height={20}
                            />
                            <p>{t('check4')}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                  >
                    <div className="single-about-content-solar">
                      <p className="disc">
                        {t('desc3')}
                      </p>
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div
                            className="left-area-wrapper"
                            style={{
                              position: "relative",
                              width: "100%",
                              height: "300px",
                            }}
                          >
                            <Image
                              src="/assets/images/green/bread-cuamb-banner-1.jpg"
                              alt="about"
                              fill
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="single-ckeck-wrapper">
                            <Image
                              src="/assets/images/about/dt.png"
                              alt="dotted"
                              width={20}
                              height={20}
                            />
                            <p>{t('check1')}</p>
                          </div>
                          <div className="single-ckeck-wrapper">
                            <Image
                              src="/assets/images/about/dt.png"
                              alt="dotted"
                              width={20}
                              height={20}
                            />
                            <p>{t('check2')}</p>
                          </div>
                          <div className="single-ckeck-wrapper">
                            <Image
                              src="/assets/images/about/dt.png"
                              alt="dotted"
                              width={20}
                              height={20}
                            />
                            <p>{t('check3')}</p>
                          </div>
                          <div className="single-ckeck-wrapper">
                            <Image
                              src="/assets/images/about/dt.png"
                              alt="dotted"
                              width={20}
                              height={20}
                            />
                            <p>{t('check4')}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyAbout;
