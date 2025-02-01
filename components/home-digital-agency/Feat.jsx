"use client"
import React, { useState } from 'react';
import style from './home-digital-agency.module.css';
import { ServicesData } from '@/data/servicesdata';
import Link from 'next/link';
import { ArrowRight } from '@/public/assets/svg';
import Image from 'next/image';

function Feat() {
  // Initial state to manage the number of services to display
  const [visibleServices, setVisibleServices] = useState(6);

  // Function to load more services
  const loadMoreServices = () => {
    setVisibleServices((prev) => prev + 3); // Load 3 more services on each click
  };

  return (
    <section className="feat custom-bgWhite">
      <div className="container section-padding bord-top-grd">
        {/* <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Our Specialize</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text text-black">
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
        </div> */}

         <div className="text-center py-2">
                <h6 className='text-black'>TRANSFORM YOUR BRANDS WITH OUR SERVICES</h6>
                <h2 className='text-black' style={{fontWeight:"bold"}}>
                Our Offered Services
                </h2>
              </div>
        <div className="row">
          {ServicesData.slice(0, visibleServices).map((service, index) => (
            <div key={index} className="col-lg-4 my-4 col-md-6">
              <div className={`item-box radius-15 md-mb50 ${style.box}`}>
                <div className={`icon-img-70 mb-40 opacity-6 ${style?.svgParent}`}>
                  {service?.icon}
                </div>
                <h6 className="mb-20 text-black">
                  <Link href={`/service/${service?.Link}`}>
                    {service.title}
                  </Link>
                </h6>
                <ul className='p-0'>
                  {service?.Feat.map((v, i) => (
                    <li
                      key={i}
                      className="text-black"
                      style={{ listStyle: 'none', lineHeight: '2', fontSize: '18px' }}
                    >
                     <div className="d-flex align-items-center my-2 ">
                     <Image  src={v?.icon} className='' style={{width:"25px"}}/>
                    <span className='mx-2' style={{textTransform:"capitalize" , fontSize:"16px"}}>
                       {v?.name}
                      </span>
                     </div>
                    </li>
                  ))}
                </ul>
                <div className='p-3  d-inline-block ' style={{background:"#f3f4f6" , borderRadius: "100%"}}>
                  <ArrowRight />
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleServices < ServicesData.length && ( // Show "Load More" button only if there are more services to display
          <div className="contact-button text-center" style={{ marginBottom: "20px", marginTop: "20px" }}>
            <button
              onClick={loadMoreServices}
              className={`butn butn-sm butn-bg radius-5 bg-black text-white px-4 py-2`}
              style={{ border: "none", cursor: "pointer" }}
            >
              <span className="text">Load More</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Feat;
