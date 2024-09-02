'use client';
import isInView from '@/common/isInView';
import Link from 'next/link';
import React, { useEffect } from 'react';

function Intro() {
  function handleShowProgressValues() {
    isInView({
      selector: '.skill-progress .progres',
      isElements: true,
      callback: (element) => {
        element.style.width = element.getAttribute('data-value');
      },
    });
  }
  useEffect(() => {
    window.addEventListener('scroll', handleShowProgressValues);
    return () => window.removeEventListener('scroll', handleShowProgressValues);
  }, []);
  return (
    <section className="my-5 intro-skill pt-5 pt-0">
      <div className="container pt-80 pb-80">
        <div className="row md-marg">
          <div className="col-lg-6">
            <div className="cont">
              <h6 className="sub-title main-color mb-15">About Us</h6>
              <h2 className="mb-15">Best <span className='opacity-7'> creative & modern </span> digital agency.</h2>
              <p>
                At <Link href={'/'} className='text-white'>4DotsSolutions</Link>,  we are dedicated to delivering exceptional solutions tailored to your needs. Our team combines expertise, creativity, and a passion for excellence to provide high-quality services that drive success. From innovative web development and engaging graphic design to strategic digital marketing and reliable software solutions, we aim to enhance your brand’s presence and performance.
              </p>
              <div className="skills-box row mt-80">
                <div className="col-md-6">
                  <div className="skill-item sm-mb30">
                    <h5 className="sub-title mb-15">Strategy to Success 99%</h5>
                    <div className="skill-progress">
                      <div className="progres" data-value="90%"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="skill-item">
                    <h5 className="sub-title mb-15">Inspiration to Execution 99%</h5>
                    <div className="skill-progress">
                      <div className="progres" data-value="90%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="imgs">
              <div className="img1">
                <img src="/assets/imgs/intro/2.jpg" alt="" />
              </div>
              <div className="img2">
                <img src="/assets/imgs/intro/03.jpg" alt="" />
              </div>
              <div className="img3">
                <img src="/assets/imgs/intro/04.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
