import React from 'react';
import data from '@/data/services';

function ServiceFeature({ data }) {
    return (
        <section className="services-crev section-padding">
            <div className="container">
                <div className="sec-head mb-80">
                    <div className="mb-30">
                        <h2 className="fw-600 fz-70 text-u d-rotate wow">
                            <span className="rotate-text">
                                Showcase of Our  <span className="fw-200">{`${data?.title}`}</span> Features
                            </span>
                        </h2>
                    </div>
                    <h6 className="sub-title main-color d-flex align-items-center">
                        <span>Our Specialize</span>
                        <span className="thin"></span>
                    </h6>
                </div>
                <div className="row sm-marg">
                    {data?.Features.map((item, index) => (
                        <div key={index} className="col-lg-3 col-md-6">
                            <div className="item-box radius-15 md-mb30">
                                <h5 className="mb-35 text-u">
                                    <span className="mr-40 fz-14 main-color">0{index + 1}</span>
                                    {item.title}
                                </h5>
                                <p>{item.description} </p>
                            </div>
                        </div>
                    ))}
                </div>
              
            </div>
        </section>
    );
}

export default ServiceFeature;
