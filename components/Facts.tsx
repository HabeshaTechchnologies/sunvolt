import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

type Props = {}

const Facts = (props: Props) => {
  const t = useTranslations("Facts");
  return (
    <div>
      <div className="rts-solar-supply-start rts-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="solari-title-area-three text-left">
                <span className="pre-title skew-up">{t('preTitle')}</span>
                <h2 className="title skew-up" dangerouslySetInnerHTML={{ __html: t('title') }}>
                </h2>
                <p className="disc skew-up" dangerouslySetInnerHTML={{ __html: t('desc') }}>
                </p>
                <div className="row">
                  <div className="col-lg-10">
                    {/* */}
                    <div className="rts-progres-bar-area-one">
                      {/* */}
                      <div className="single-progress-area-h4">
                        <div className="progress-top">
                          <p className="name">{t('solar')}</p>
                          <span className="parcent"> 90% </span>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar wow fadeInLeft bg-primary"
                            role="progressbar"
                            style={{ width: "90%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                        </div>
                      </div>
                      {/* */}
                      {/* */}
                      <div className="single-progress-area-h4">
                        <div className="progress-top">
                          <p className="name">{t('ev')}</p>
                          <span className="parcent"> 57% </span>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar wow fadeInLeft bg-yellow"
                            role="progressbar"
                            style={{ width: "57%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                        </div>
                      </div>
                      {/* */}
                      {/* */}
                      <div className="single-progress-area-h4">
                        <div className="progress-top">
                          <p className="name">{t('water')}</p>
                          <span className="parcent"> 77% </span>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar wow fadeInLeft bg-dark"
                            role="progressbar"
                            style={{ width: "47%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                        </div>
                      </div>
                      {/* */}
                    </div>
                    {/* */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 mt_sm--40">
              <div className="map-area-h3">
                <div className="thumbnail">
                  <Image 
                    src="/assets/images/green/africa_map.png" 
                    alt="Africa Map" 
                    width={700} 
                    height={500}
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facts