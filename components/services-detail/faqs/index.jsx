'use client';
import React from 'react';
function FAQS(data) {
    console.log(data?.data?.faqs , 'bilawal')
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
        <section className="intro-accord section-padding sub-bg o-hidden">
            <div className="container ontop">
                <div className="row xlg-marg">
                    <div className="col-lg-6">
                        <div className="img md-mb50">
                            <img src="/assets/imgs/arw2.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 valign">
                        <div>
                            <div className="sec-head mb-50">
                                <h6 className="sub-title main-color mb-15">FAQS</h6>
                                <h3>Answers to Frequently Posed Questions</h3>
                            </div>
                            <div className="accordion bord">
                                {data?.data?.faqs?.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`item wow fadeInUp ${index === 0 ? 'active' : ''}`}
                                        data-wow-delay={`${index * 0.2 + 0.1}s`}
                                    >
                                        <div onClick={openAccordion} className="title">
                                            <h6>{item.question}</h6>
                                            <span className="ico ti-plus"></span>
                                        </div>
                                        <div className={`accordion-info ${index === 0 ? 'active' : ''}`} style={{ maxHeight: index === 0 ? '300px' : 0 }}>
                                            <p>{item.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="circle-blur">
                <img src="/assets/imgs/patterns/blur1.png" alt="" />
            </div>
        </section>
    );
};

export default FAQS;
