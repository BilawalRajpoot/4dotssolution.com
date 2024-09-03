'use client';
import React from 'react';

function Portfolio() {
  const industries = [
    {
      id: 'tab-1',
      title: 'Healthcare',
      description: 'Innovative digital solutions for hospitals, clinics, and healthcare providers.',
      img: '/assets/imgs/works/1/1.jpg',
    },
    {
      id: 'tab-2',
      title: 'Finance',
      description: 'Secure and scalable financial technology for banking and investment firms.',
      img: '/assets/imgs/works/1/6.jpg',
    },
    {
      id: 'tab-3',
      title: 'Retail',
      description: 'Transforming retail experiences with cutting-edge e-commerce platforms.',
      img: '/assets/imgs/works/1/3.jpg',
    },
    {
      id: 'tab-4',
      title: 'Education',
      description: 'Empowering educators with modern e-learning tools and platforms.',
      img: '/assets/imgs/works/1/4.jpg',
    },
    {
      id: 'tab-5',
      title: 'Manufacturing',
      description: 'Streamlining production processes with smart manufacturing solutions.',
      img: '/assets/imgs/works/1/5.jpg',
    },
  ];

  function handleMouseEnter(event) {
    var tab_id = event.currentTarget.getAttribute('data-tab');

    document.querySelectorAll('.glry-img .tab-img').forEach((el) => {
      el.classList.remove('current');
    });
    document.querySelectorAll('.content .cluom').forEach((el) => {
      el.classList.remove('current');
    });

    document.querySelector('#' + tab_id).classList.add('current');

    if (!event.currentTarget.classList.contains('current')) {
      event.currentTarget.classList.add('current');
    }
  }

  return (
    <section className="portfolio-tab crev section-padding sub-bg">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Industries We Serve</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Our <span className="fw-200">Expertise.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
             
            </div>
          </div>
        </div>
        <div className="row lg-marg">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="glry-img md-mb50">
              {industries.map((industry, index) => (
                <div
                  key={industry.id}
                  id={industry.id}
                  className={`tab-img ${index === 0 ? 'current' : ''}`}
                >
                  <img src={industry.img} alt={industry.title} />
                </div>
              ))}
              <div className="circle-blur">
                <img src="/assets/imgs/patterns/blur1.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 content valign">
            <div className="full-width">
              {industries.map((industry, index) => (
                <div
                  key={industry.id}
                  onMouseEnter={handleMouseEnter}
                  className={`cluom mb-40 ${index === 0 ? 'current' : ''}`}
                  data-tab={industry.id}
                >
                  <div className="info d-flex align-items-end">
                    <h4>
                      <span className="mr-10 fz-16">{`0${index + 1}.`}</span>{' '}
                      <a href="/industry-details">{industry.title}</a>
                    </h4>
                  </div>
                  <h6 className="sub-title p-color ml-20">{industry.description}</h6>
                  <div className="img">
                    <img src={industry.img} alt={industry.title} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
