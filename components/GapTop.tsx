import React from "react";

type Props = {};

const GapTop = (props: Props) => {
  const brandLogos = (
    <>
      <a href="/about">
        <img src="assets/images/green/logo-no-bg.png" alt="brand_start" />
      </a>
      <a href="/about">
        <img src="assets/images/green/logo-no-bg.png" alt="brand_start" />
      </a>
      <a href="/about">
        <img src="assets/images/green/logo-no-bg.png" alt="brand_start" />
      </a>
      <a href="/about">
        <img src="assets/images/green/logo-no-bg.png" alt="brand_start" />
      </a>
      <a href="/about">
        <img src="assets/images/green/logo-no-bg.png" alt="brand_start" />
      </a>
    </>
  );

  return (
    <div>
      <div className="rts-section-gapTop mb-5 seamless-scroll-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="brand-area-h2">
                <div className="scroll-row scroll-row-1">{brandLogos}</div>
                <div className="scroll-row scroll-row-2">{brandLogos}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GapTop;
