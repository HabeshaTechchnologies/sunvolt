import React from 'react'
import Image from 'next/image'
import service1 from "@/assets/images/green/other-10.jpg";
import service2 from "@/assets/images/service/22.jpg";
import service3 from "@/assets/images/service/dt.png";
import service4 from "@/assets/images/service/dt.png";
import service5 from "@/assets/images/green/ev-1.jpg";
import service6 from "@/assets/images/green/byd.jpeg";
import service7 from "@/assets/images/green/tire-2.jpg";
import service8 from "@/assets/images/green/tire-1.jpg";
import { useTranslations } from "next-intl";

type Props = {}

const Service = (props: Props) => {
  const t = useTranslations("Service");
  return (
    <div>
      <div className="our-service-area-start rts-section-gap bg-lighten">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="solari-title-area-three text-center">
                <span className="pre-title skew-up">{t('preTitle')}</span>
                <h2 className="title skew-up">{t('title')}</h2>
                <p className="disc skew-up" dangerouslySetInnerHTML={{ __html: t('desc') }}>
                </p>
              </div>
            </div>
          </div>
          <div className="row mt--60">
            <div className="col-lg-12">
              <div className="tab-area-service-solari-3">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <div
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      <div className="icon">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M30.7142 4.28601C27.9547 4.28601 25.7142 6.52648 25.7142 9.28599C25.7142 12.0455 27.9547 14.286 30.7142 14.286C33.4737 14.286 35.7141 12.0455 35.7141 9.28599C35.7141 6.52648 33.4737 4.28601 30.7142 4.28601ZM30.7142 5.71458C32.6851 5.71458 34.2856 7.31504 34.2856 9.28599C34.2856 11.2569 32.6851 12.8574 30.7142 12.8574C28.7432 12.8574 27.1428 11.2569 27.1428 9.28599C27.1428 7.31504 28.7432 5.71458 30.7142 5.71458Z"
                            fill="#4AAB3D"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M31.4282 17.8573V16.4287C31.4282 16.0344 31.1082 15.7144 30.7139 15.7144C30.3197 15.7144 29.9997 16.0344 29.9997 16.4287V17.8573C29.9997 18.2516 30.3197 18.5715 30.7139 18.5715C31.1082 18.5715 31.4282 18.2516 31.4282 17.8573Z"
                            fill="#4AAB3D"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M37.6476 15.2094L36.219 13.7809C35.9402 13.5023 35.4876 13.5023 35.2088 13.7809C34.9301 14.0594 34.9301 14.5123 35.2088 14.7909L36.6373 16.2194C36.9161 16.498 37.3688 16.498 37.6476 16.2194C37.9263 15.9409 37.9263 15.488 37.6476 15.2094Z"
                            fill="#4AAB3D"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M39.2857 8.57161H37.8572C37.4629 8.57161 37.1429 8.8916 37.1429 9.28589C37.1429 9.68017 37.4629 10.0002 37.8572 10.0002H39.2857C39.6799 10.0002 40 9.68017 40 9.28589C40 8.8916 39.6799 8.57161 39.2857 8.57161Z"
                            fill="#4AAB3D"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M36.6373 2.35236L35.2088 3.78092C34.9301 4.05949 34.9301 4.51234 35.2088 4.79091C35.4876 5.06948 35.9402 5.06948 36.219 4.79091L37.6476 3.36235C37.9263 3.08378 37.9263 2.63093 37.6476 2.35236C37.3688 2.07379 36.9161 2.07379 36.6373 2.35236Z"
                            fill="#4AAB3D"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M26.2191 3.78092L24.7905 2.35236C24.5117 2.07379 24.0591 2.07379 23.7803 2.35236C23.5016 2.63093 23.5016 3.08378 23.7803 3.36235L25.2089 4.79091C25.4877 5.06948 25.9403 5.06948 26.2191 4.79091C26.4978 4.51234 26.4978 4.05949 26.2191 3.78092Z"
                            fill="#4AAB3D"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M29.9997 0.714386V2.14292C29.9997 2.53722 30.3197 2.85731 30.7139 2.85731C31.1082 2.85731 31.4282 2.53722 31.4282 2.14292V0.714386C31.4282 0.320088 31.1082 0 30.7139 0C30.3197 0 29.9997 0.320088 29.9997 0.714386Z"
                            fill="#4AAB3D"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M25.2089 13.7809L23.7803 15.2094C23.5016 15.488 23.5016 15.9409 23.7803 16.2194C24.0591 16.498 24.5117 16.498 24.7905 16.2194L26.2191 14.7909C26.4978 14.5123 26.4978 14.0594 26.2191 13.7809C25.9403 13.5023 25.4877 13.5023 25.2089 13.7809Z"
                            fill="#4AAB3D"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M23.5716 8.57161H22.143C21.7488 8.57161 21.4287 8.8916 21.4287 9.28589C21.4287 9.68017 21.7488 10.0002 22.143 10.0002H23.5716C23.9658 10.0002 24.2858 9.68017 24.2858 9.28589C24.2858 8.8916 23.9658 8.57161 23.5716 8.57161Z"
                            fill="#4AAB3D"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.94218 21.4287L0.0214778 13.7451C-0.0320932 13.5316 0.0157633 13.3051 0.151476 13.1323C0.286475 12.9587 0.494331 12.8573 0.714329 12.8573H22.1427C22.537 12.8573 22.857 13.1773 22.857 13.5716C22.857 13.9659 22.537 14.2859 22.1427 14.2859H16.6292L18.4149 21.4287H24.7998L24.1284 18.7451C24.0327 18.3623 24.2656 17.9744 24.6484 17.8787C25.0306 17.783 25.4191 18.0158 25.5148 18.398L26.272 21.4287H31.9419L31.8069 20.888C31.7112 20.5051 31.9441 20.1173 32.3262 20.0215C32.7091 19.9258 33.0969 20.1587 33.1926 20.5408L33.4148 21.4287H34.2855C34.6798 21.4287 34.9998 21.7487 34.9998 22.143C34.9998 22.5372 34.6798 22.8572 34.2855 22.8572H33.7719L35.6926 30.5408C35.7462 30.7543 35.6983 30.9808 35.5626 31.1536C35.4276 31.3272 35.2198 31.4286 34.9998 31.4286H20.7142V38.5714H39.2854C39.6797 38.5714 39.9997 38.8914 39.9997 39.2857C39.9997 39.68 39.6797 40 39.2854 40H0.714329C0.320047 40 4.92143e-05 39.68 4.92143e-05 39.2857C4.92143e-05 38.8914 0.320047 38.5714 0.714329 38.5714H14.9999V31.4286H5.00001C4.67215 31.4286 4.38644 31.2058 4.30716 30.8879L2.29932 22.8572H1.42861C1.03433 22.8572 0.714329 22.5372 0.714329 22.143C0.714329 21.7487 1.03433 21.4287 1.42861 21.4287H1.94218ZM16.4285 31.4286V38.5714H19.2856V31.4286H16.4285ZM11.2278 30.0001L9.44211 22.8572H3.77216L5.55786 30.0001H11.2278ZM10.915 22.8572L12.7007 30.0001H19.0849L17.2992 22.8572H10.915ZM18.772 22.8572L20.5577 30.0001H26.942L25.1563 22.8572H18.772ZM32.2991 22.8572H26.6291L28.4148 30.0001H34.0848L32.2991 22.8572ZM1.62932 14.2859L3.41502 21.4287H9.08569L7.29999 14.2859H1.62932ZM8.77212 14.2859L10.5578 21.4287H16.9428L15.1571 14.2859H8.77212Z"
                            fill="#4AAB3D"
                          />
                        </svg>
                      </div>
                      <p>{t('tabSolar')}</p>
                    </div>
                  </li>
                  <li className="nav-item" role="presentation">
                    <div
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      <div className="icon">
                        <svg
                          width="56"
                          height="40"
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* <!-- Car body --> */}
                          <path
                            d="M16 40C13.7909 40 12 41.7909 12 44C12 46.2091 13.7909 48 16 48C18.2091 48 20 46.2091 20 44C20 41.7909 18.2091 40 16 40ZM48 40C45.7909 40 44 41.7909 44 44C44 46.2091 45.7909 48 48 48C50.2091 48 52 46.2091 52 44C52 41.7909 50.2091 40 48 40ZM20 36H44L52 24H36L30 16H20C18.8954 16 18 16.8954 18 18V36Z"
                            fill="#4AAB3D"
                          />
                          {/* <!-- Charging plug symbol --> */}
                          <path
                            d="M54 12V8H50V12H48V4H56V12H54ZM50 16H54V28H50V16Z"
                            fill="#4AAB3D"
                          />
                        </svg>
                      </div>
                      <p>{t('tabEV')}</p>
                    </div>
                  </li>
                  <li className="nav-item" role="presentation">
                    <div
                      className="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      <div className="icon">
                        <svg
                          width="36"
                          height="40"
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* <!-- Water droplet --> */}
                          <path
                            d="M32 6C32 6 14 24 14 38C14 50.1503 22.8497 59 35 59C47.1503 59 56 50.1503 56 38C56 24 38 6 38 6C36.8954 4.89543 33.1046 4.89543 32 6Z"
                            fill="#4AAB3D"
                          />
                          {/* <!-- Filter waves --> */}
                          <path
                            d="M20 42C24 45 28 45 32 42C36 39 40 39 44 42"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                          <path
                            d="M20 50C24 53 28 53 32 50C36 47 40 47 44 50"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <p>{t('tabWater')}</p>
                    </div>
                  </li>
                  <li className="nav-item" role="presentation">
                    <div
                      className="nav-link"
                      id="contact-tabs"
                      data-bs-toggle="tab"
                      data-bs-target="#contacts"
                      role="tab"
                      aria-controls="contacts"
                      aria-selected="false"
                    >
                      <div className="icon">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="20"
                            cy="20"
                            r="10"
                            stroke="#4AAB3D"
                            strokeWidth="2"
                          />
                          <circle
                            cx="20"
                            cy="20"
                            r="5"
                            stroke="#4AAB3D"
                            strokeWidth="2"
                          />
                          <path
                            d="M20 10V30"
                            stroke="#4AAB3D"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M10 20H30"
                            stroke="#4AAB3D"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M20 10A10 10 0 0 0 30 20A10 10 0 0 0 20 30A10 10 0 0 0 10 20A10 10 0 0 0 20 10Z"
                            stroke="#4AAB3D"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray="2 2"
                          />
                        </svg>
                      </div>
                      <p>{t('tabTire')}</p>
                    </div>
                  </li>
                </ul>
                <div
                  className="tab-content tab-content-solari-service-m mt--60"
                  id="myTabContent"
                >
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    {/* <!-- single tab content area start --> */}
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="thumbnail-area-left-image">
                          <Image
                            src={service1}
                            alt="Service"
                            width={500}
                            height={300}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 pl--60 pl_md--20 pl_sm--10 mt_sm--50">
                        <div className="inner-content-service-right-solari">
                          <h3 className="title">{t('solarTitle')}</h3>
                          <p className="disc" dangerouslySetInnerHTML={{ __html: t('solarDesc1') }}>
                          </p>
                          <p className="disc">
                            {t('solarDesc2')}
                          </p>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="thumbnail-img-sm-service">
                              <Image
                                src={service2}
                                alt="Service"
                                // width={500}
                                // height={300}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="service-singlew-main-wrapper-sm">
                              {/* <!-- single start --> */}
                              <div className="single-service">
                                <Image src={service3} alt="service" />
                                <p>{t('solarFeature1')}</p>
                              </div>
                              {/* <!-- single end -->
                            <!-- single start --> */}
                              <div className="single-service">
                                <Image src={service4} alt="service" />
                                <p>{t('solarFeature2')}</p>
                              </div>
                              {/* <!-- single end -->
                            <!-- single start --> */}
                              <div className="single-service">
                                <Image src={service4} alt="service" />
                                <p>{t('solarFeature3')}</p>
                              </div>
                              {/* <!-- single end -->
                            <!-- single start --> */}
                              <div className="single-service">
                                <Image src={service4} alt="service" />
                                <p>{t('solarFeature4')}</p>
                              </div>
                              {/* <!-- single end --> */}
                            </div>
                          </div>

                          <a href="/service" className="rts-btn btn-primary">
                            {t('moreService')}
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <!-- single tab content area start --> */}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    {/* <!-- single tab content area start --> */}
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="inner-content-service-right-solari">
                          <h3 className="title">{t('evTitle')}</h3>
                          <p className="disc">
                            {t('evDesc1')}
                          </p>
                          <p className="disc">
                            {t('evDesc2')}
                          </p>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="thumbnail-img-sm-service">
                              <Image src={service5} alt="service" />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="service-singlew-main-wrapper-sm">
                              {/* <!-- single start --> */}
                              <div className="single-service">
                                <Image src={service4} alt="service" />
                                <p>{t('evFeature1')}</p>
                              </div>
                              {/* <!-- single end -->
                            <!-- single start --> */}
                              <div className="single-service">
                                <Image src={service4} alt="service" />
                                <p>{t('evFeature2')}</p>
                              </div>
                              {/* <!-- single end -->
                            <!-- single start --> */}
                              <div className="single-service">
                                <Image src={service4} alt="service" />
                                <p>{t('evFeature3')}</p>
                              </div>
                              {/* <!-- single end -->
                            <!-- single start --> */}
                              <div className="single-service">
                                <Image src={service4} alt="service" />
                                <p>{t('evFeature4')}</p>
                              </div>
                              {/* <!-- single end --> */}
                            </div>
                          </div>

                          <a href="/service" className="rts-btn btn-primary">
                            {t('moreService')}
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 ">
                        <div className="thumbnail-area-left-image">
                          <Image src={service6} alt="service" />
                        </div>
                      </div>
                    </div>
                    {/* <!-- single tab content area start --> */}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    {/* <!-- single tab content area start --> */}
                    <div className="row">
                      {/* Left Side: Summary or Key Highlight (Instead of Image) */}
                      <div className="col-lg-6">
                        <div
                          className="thumbnail-area-left-image"
                          style={{
                            borderLeft: "4px solid var(--color-primary)",
                            paddingLeft: "30px",
                          }}
                        >
                          <h2
                            className="title"
                            style={{
                              fontSize: "2.5rem",
                              fontWeight: "700",
                              lineHeight: "1.2",
                            }}
                            dangerouslySetInnerHTML={{ __html: t('waterLeftTitle1') + '<span style="color: var(--color-primary)">' + t('waterLeftTitle2') + '</span>' + t('waterLeftTitle3') }}
                          >
                          </h2>
                          <div
                            className="mt--30"
                            style={{
                              height: "2px",
                              width: "60px",
                              background: "var(--color-primary)",
                            }}
                          ></div>
                        </div>
                      </div>

                      {/* Right Side: Content and Feature List */}
                      <div className="col-lg-6 pl--60 pl_sm--10 mt_sm--50">
                        <div className="inner-content-service-right-solari">
                          <h3 className="title">{t('waterTitle')}</h3>
                          <p className="disc">
                            {t('waterDesc1')}
                          </p>
                          <p className="disc">
                            {t('waterDesc2')}
                          </p>
                        </div>

                        <div className="row mt--30">
                          <div className="col-lg-12">
                            <div
                              className="service-singlew-main-wrapper-sm"
                              style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "20px",
                              }}
                            >
                              {/* Item 1 */}
                              <div
                                className="single-service"
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "15px",
                                }}
                              >
                                <div
                                  style={{
                                    minWidth: "8px",
                                    height: "8px",
                                    borderRadius: "50%",
                                    background: "var(--color-primary)",
                                  }}
                                ></div>
                                <p style={{ margin: 0, fontWeight: "500" }}>
                                  {t('waterFeature1')}
                                </p>
                              </div>

                              {/* Item 2 */}
                              <div
                                className="single-service"
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "15px",
                                }}
                              >
                                <div
                                  style={{
                                    minWidth: "8px",
                                    height: "8px",
                                    borderRadius: "50%",
                                    background: "var(--color-primary)",
                                  }}
                                ></div>
                                <p style={{ margin: 0, fontWeight: "500" }}>
                                  {t('waterFeature2')}
                                </p>
                              </div>

                              {/* Item 3 */}
                              <div
                                className="single-service"
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "15px",
                                }}
                              >
                                <div
                                  style={{
                                    minWidth: "8px",
                                    height: "8px",
                                    borderRadius: "50%",
                                    background: "var(--color-primary)",
                                  }}
                                ></div>
                                <p style={{ margin: 0, fontWeight: "500" }}>
                                  {t('waterFeature3')}
                                </p>
                              </div>

                              {/* Item 4 */}
                              <div
                                className="single-service"
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "15px",
                                }}
                              >
                                <div
                                  style={{
                                    minWidth: "8px",
                                    height: "8px",
                                    borderRadius: "50%",
                                    background: "var(--color-primary)",
                                  }}
                                ></div>
                                <p style={{ margin: 0, fontWeight: "500" }}>
                                  {t('waterFeature4')}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-12 mt--40">
                            <a href="/service" className="rts-btn btn-primary">
                              {t('moreService')}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- single tab content area start --> */}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contacts"
                    role="tabpanel"
                    aria-labelledby="contact-tabs"
                  >
                    {/* <!-- single tab content area start --> */}
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="inner-content-service-right-solari">
                          <h3 className="title">{t('tireTitle')}</h3>
                          <p className="disc">
                            {t('tireDesc1')}
                          </p>
                          <p className="disc">
                            {t('tireDesc2')}
                          </p>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="thumbnail-img-sm-service">
                              <Image src={service7} alt="service" />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="service-singlew-main-wrapper-sm">
                              {/* <!-- single start --> */}
                              <div className="single-service">
                                <Image src={service4} alt="service" />
                                <p>{t('tireFeature1')}</p>
                              </div>
                              {/* <!-- single end -->
                            <!-- single start --> */}
                              <div className="single-service">
                                <Image src={service4} alt="service" />
                                <p>{t('tireFeature2')}</p>
                              </div>
                              {/* <!-- single end -->
                            <!-- single start --> */}
                              <div className="single-service">
                                <Image src={service4} alt="service" />
                                <p>{t('tireFeature3')}</p>
                              </div>
                              {/* <!-- single end -->
                            <!-- single start --> */}
                              <div className="single-service">
                                <Image src={service4} alt="service" />
                                <p>{t('tireFeature4')}</p>
                              </div>
                              {/* <!-- single end --> */}
                            </div>
                          </div>

                          <a href="/service" className="rts-btn btn-primary">
                            {t('moreService')}
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="thumbnail-area-left-image">
                          <Image src={service8} alt="service" />
                        </div>
                      </div>
                    </div>
                    {/* <!-- single tab content area start --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service