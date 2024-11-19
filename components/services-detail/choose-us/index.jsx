import Link from 'next/link';
import React from 'react';

function ChooseUs(data) {
    return (
        <>

            <section className="intro section-padding" style={{background:"#fafafa"}}>
                <div className="container">
                    <div className="row lg-marg">
                        <div className="col-lg-8 md-mb80">
                            <div className="row lg-marg align-items-center">
                                <div className="col-md-6">
                                    <div className="img1 sm-mb50">
                                        <img src="/assets/imgs/about/4dotslogoblack.png" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="text">
                                        <h3 className="mb-30 text-black">
                                            {data.data?.about?.title}. {' '}
                                        </h3>
                                        <p className='text-black'>
                                            {data.data?.about?.description}
                                        </p>


                                    </div>
                                </div>
                            </div>
                            <div className="numbers mt-80">
                                <div className="row lg-marg">
                                    <div className="col-md-6">
                                        <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                                            <div>
                                                <h3 className="fw-300 mb-10 text-black">100%</h3>
                                                <h6 className="p-color sub-title text-black">
                                                    Clients Satisfaction
                                                </h6>
                                            </div>
                                            <div className="ml-auto">
                                                <div className="icon-img-40">
                                                    <Link href={`/page-contact`}><img style={{filter:"invert(1)"}} src="/assets/imgs/arw0.png" alt="" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                                            <div>
                                                <h3 className="fw-300 mb-10 text-black ">1000+</h3>
                                                <h6 className="p-color sub-title text-black">Projects Completed</h6>
                                            </div>
                                            <div className="ml-auto">
                                                <div className="icon-img-40">
                                                    <Link href={`/page-contact`}><img style={{filter:"invert(1)"}} src="/assets/imgs/arw0.png" alt="" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="img-full fit-img">
                                <img src="/assets/imgs/intro/04.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ChooseUs;
