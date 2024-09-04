import React from 'react';
import style from './home-digital-agency.module.css'
import { ServicesData } from '@/data/servicesdata';
import Link from 'next/link';


function Feat() {
  return (
    <section className="feat sub-bg">
      <div className="container section-padding bord-top-grd">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Our Specialize</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Featured <span className="fw-200">Services.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a
                href="/page-services"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>View All</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="row">
          {
            ServicesData.slice(0, 8).map((service, index) => {
              return (
                <div key={index} className="col-lg-3 my-4 col-md-6">
                  <div className={`item-box radius-15 md-mb50 ${style.box}`}>
                    <div className={`icon-img-70 mb-40 opacity-6 ${style?.svgParent}`}>
                      {service?.icon}
                    </div>
                    <span className="mb-30 p-color">{`0${index + 1} .`}</span>
                    <h6 className="mb-20"><Link href={`/service/${service?.Link}`}> {service.title}</Link></h6>
                    <p>{service.description}</p>
                  </div>
                </div>
              );
            })
          }
        </div>

      </div>
    </section>
  );
}

export default Feat;
