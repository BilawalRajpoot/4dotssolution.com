'use client';
import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function Testimonials() {
  const testimonials = [
    {
      title: "Outstanding Service",
      content: "“The team at 4DotsSolutions exceeded our expectations with their innovative approach and attention to detail.”",
      name: "Mian Athar",
      role: "CEO-Athar Associates",
      imgSrc: "/assets/imgs/testimonials/Athar.png",
    },
    {
      title: "Expertise You Can Trust",
      content: "“Working with 4DotsSolutions has been a game-changer for our business. Their expertise is unmatched.”",
      name: "Chand",
      role: "CEO-Chand Electrical Corporation",
      imgSrc: "/assets/imgs/testimonials/chandelectric.png",
    },
    {
      title: "Creative and Professional",
      content: "“From start to finish, the 4DotsSolutions team was professional, creative, and easy to work with.”",
      name: "MUHAMMAD FAROOQ E AZAM",
      role: "Founder-HARVARD PREP SCHOOL ",
      imgSrc: "/assets/imgs/testimonials/harvard.png",
    },
  ];

  const swiperOptions = {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 'auto',
      },
    },
    navigation: {
      nextEl: '.testim-modern .swiper-button-next',
      prevEl: '.testim-modern .swiper-button-prev',
    },
  };

  return (
    <section className="testim-modern section-padding sub-bg bord-top-grd bord-bottom-grd">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Testimonials</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Trusted <span className="fw-200">by Clients.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto">
              <div className="swiper-arrow-control">
                <div className="swiper-button-prev">
                  <span className="ti-arrow-left"></span>
                </div>
                <div className="swiper-button-next">
                  <span className="ti-arrow-right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="testim-swiper3 out-right"
          data-carousel="swiper"
          data-loop="true"
          data-space="30"
        >
          <Swiper
            {...swiperOptions}
            id="content-carousel-container-unq-testim"
            className="swiper-container"
            data-swiper="container"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="item">
                  <div className="cont">
                    <h6 className="sub-title mb-15">{testimonial.title}</h6>
                    <div className="text">
                      <p>{testimonial.content}</p>
                    </div>
                  </div>
                  <div className="info">
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="img fit-img">
                          <img src={testimonial.imgSrc} alt={testimonial.name} />
                        </div>
                      </div>
                      <div className="ml-20">
                        <h6 className="fz-18">{testimonial.name}</h6>
                        <span className="p-color opacity-8 fz-15 mt-5">
                          {testimonial.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
