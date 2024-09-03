'use client';
import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
function Banner() {
  // useLayoutEffect(() => {
  //   const tl = gsap.timeline();
  //   tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
  //   tl.fromTo(
  //     '.header .container',
  //     { opacity: 0, translateY: 40 },
  //     { opacity: 1, translateY: 0 },
  //     '-=0'
  //   );

  //   return () => tl.kill();
  // }, []);
  return (
    <div className="header header-digital valign">
      <div className="container ontop">
        <div className="row mb-100">
          <div className="col-lg-12">
            <div className="caption">
              <h1>We provide our creative</h1>
              <div className="row align-items-center">
                <div className="col-lg-4 order-md-2">
                  <p>
                  At 4DotsSolutions, we are deeply committed to expertly bringing your creative visions to vibrant life, ensuring every detail is crafted to perfection.
                  </p>
                </div>
                <div className="col-lg-8 order-md-1 md-mb30">
                  <h1>digital services.</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="img">
              <img src="/assets/imgs/header/4.jpg" alt="" />
              <a href="https://youtu.be/AzwC6umvd1s" className="vid">
                <div className="icon">
                  <i className="fas fa-play"></i>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cont">
              <div className="d-flex">
                <div>
                  <div className="thum fit-img">
                    <img src="/assets/imgs/intro/3.jpg" alt="" />
                  </div>
                </div>
                <div>
                  <a href="/page-about">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
              <div className="text mt-30">
                <p>
                With a relentless focus on quality and creativity, we transform your vision into impactful digital experiences that not only resonate with your audience but also drive measurable results. Our expertise ensures that every project is executed with precision and passion, helping your brand stand out in an increasingly competitive market.
                </p>
              </div>
              <div className="numb">
                <div className="o-hidden">
                  <h2>100%</h2>
                </div>
                <h6 className="p-color sub-title mt-10">
                  Clients Satisfaction
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
