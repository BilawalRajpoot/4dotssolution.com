'use client';
import { WhyChooseUs } from '@/data/whychooseus';
import React from 'react';
import Magnet from '../Magnet';

function Intro2() {
  function openAccordion(event) {
    document.querySelectorAll('.accordion-info').forEach((element) => {
      element.classList.remove('active');
      element.style.maxHeight = 0;
      element.parentElement.classList.remove('active');
    });
    event.currentTarget.parentElement.classList.add('active');
    event.currentTarget.nextElementSibling.style.maxHeight = '300px';
    event.currentTarget.nextElementSibling.classList.add('active');
  }
  return (
    <section className="intro-accord section-padding">
      <div className="container ontop">
        <div className="row xlg-marg">
          <div className="col-lg-6">
            <div className="img md-mb50">
              <Magnet>
              <img src="/assets/imgs/4dots.png" alt="" className='moving-image'/>
              </Magnet>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div>
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">Why choose us?</h6>
                <h3>
                  Unlock Your Digital Potential with 4DotsSolutions.
                </h3>
              </div>
              <div className="accordion bord">
                {WhyChooseUs.map((item, index) => (
                  <div key={index} className={`item wow fadeInUp ${index === 0 ? 'active' : ''}`} data-wow-delay={item.delay}>
                    <div onClick={openAccordion} className="title">
                      <h6>{item.title}</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p>{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro2;
