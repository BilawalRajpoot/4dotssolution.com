import Link from 'next/link';
import React from 'react';

function Intro() {
  return (
    <>

      <section className="intro section-padding">
        <div className="container">
          <div className="row lg-marg">
            <div className="col-lg-8 md-mb80">
              <div className="row lg-marg align-items-center">
                <div className="col-md-6">
                  <div className="img1 sm-mb50">
                    <img src="/assets/imgs/about/4dotslogo.png" alt="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text">
                    <h3 className="mb-30">
                      Leading with Creativity and {' '}
                      <span className="fw-300"> Exceptional Skill.</span>{' '}
                    </h3>
                    <p>
                      4DotsSolutions combines creativity with cutting-edge technology to create digital solutions that stand out. Let us transform your vision into an industry leader.
                      We specialize in crafting exceptional results from your distinctive ideas. Our top-notch talent brings unparalleled creativity to every project
                    </p>


                  </div>
                </div>
              </div>
              <div className="numbers mt-80">
                <div className="row lg-marg">
                  <div className="col-md-6">
                    <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                      <div>
                        <h3 className="fw-300 mb-10">100%</h3>
                        <h6 className="p-color sub-title">
                          Clients Satisfaction
                        </h6>
                      </div>
                      <div className="ml-auto">
                        <div className="icon-img-40">
                          <Link href="/page-contact"><img src="/assets/imgs/arw0.png" alt="" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                      <div>
                        <h3 className="fw-300 mb-10">1000+</h3>
                        <h6 className="p-color sub-title">Projects Completed</h6>
                      </div>
                      <div className="ml-auto">
                        <div className="icon-img-40">
                          <Link href="/page-contact"><img src="/assets/imgs/arw0.png" alt="" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img-full fit-img">
                <Link href="/page-contact"><img src="/assets/imgs/intro/04.jpg" alt="" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Intro;
