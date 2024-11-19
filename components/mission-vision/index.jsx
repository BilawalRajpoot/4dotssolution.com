import React from 'react';
import style from './mission.module.css'
import Link from 'next/link';


function MissionVision() {
    return (
        <section className="feat  " style={{background:"#f9f9fd"}}>
            <div className="container section-padding bord-top-grd">
                <div className="sec-head mb-80">
                    <div className="d-flex align-items-center">
                        <div>
                            <span className=" sub-title mb-5 text-black">Mission & Values </span>
                            <h3 className="fw-600 fz-50 text-u d-rotate wow">
                                <span className="rotate-text  text-black">
                                Drive Our <span className="fw-200">  Success.</span>
                                </span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row">

                    <div className="col-lg-6 my-3 mx-0 px-3 col-md-12">
                        <div className={`item-box  md-mb50 } ${style?.box}`}>
                            <h4 className="mb-20">Principles and Goals That Drive Us</h4>
                            <p>At 4DotsSolutions, our core values of innovation and excellence guide every decision and action. Our goal is to push the boundaries of digital solutions, delivering exceptional results that elevate our clients of businesses. Our principles are the foundation of everything we do, guiding each decision and action we take. These values, combined with our ambitious goals, drive us to continuously innovate, exceed client expectations, and lead the way in delivering exceptional digital solutions.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 my-3 mx-0 px-3 col-md-12">
                        <img src="/assets/imgs/mission/goals.png" alt="" />
                    </div>

                    <div className="col-lg-6 my-3 mx-0 px-3 col-md-12">
                        <img src="/assets/imgs/mission/mission.png" alt="" />
                    </div>
                    <div className="col-lg-6 my-3 mx-0 px-3 col-md-12">
                        <div className={`item-box  md-mb50 } ${style?.box}`}>
                            <h4 className="mb-20">Our Mission, Our Commitment</h4>
                            <p>At 4DotsSolutions, our mission is driven by a commitment to innovation and excellence. We strive to surpass industry standards and deliver outstanding results that propel our clients of success. Our core values are at the heart of our operations, guiding every choice and action. With a focus on exceeding expectations and leading in digital innovation, we are dedicated to achieving exceptional outcomes and fostering long-term partnerships.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default MissionVision;
