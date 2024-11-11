import Link from 'next/link'
import React from 'react'

const Banner = ({data}) => {

    console.log(data  , 'data========')
    return (
        <>
            <div
                className="header header-personal valign bg-black"
                data-background=""

                data-overlay-dark="2"
            >
                <div className="container ontop">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="caption">
                                <h6 className="mb-15">

                                    Product Overview
                                </h6>
                                <h1 className="fw-700 mb-10">
                                    {data?.Banner?.title}
                                </h1>

                                <div className="row">
                                    <div className="col-lg-9">
                                        <div className="text mt-30">
                                            <p>
                                                {
                                                    data?.Banner?.shortDesc
                                                }
                                            </p>
                                        </div>
                                        <div className="d-flex align-items-center mt-60">
                                            <Link
                                                href="/page-contact"
                                                className="butn butn-md butn-bord radius-30"
                                            >
                                                <span className="text">Contact us</span>
                                            </Link>
                                            <div className="icon-img-60 ml-20">
                                                <img
                                                    src="/assets/imgs/icon-img/arrow-down-big.png"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Banner
