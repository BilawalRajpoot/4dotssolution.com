import React from 'react'

const Desc = ({ data }) => {
    return (
        <div className='bg-black'>
            <div className='container'>
                <div className='row' style={{ paddingTop: "80px" }}>
                    <div className='col-lg-6'>
                        <div className='py-5'>
                            <h5 className="mb-15">

                                Product Overview
                            </h5>
                            <p className='text-white'>
                                {
                                    data?.productOverview.description
                                }
                            </p>
                        </div>

                    </div>
                    <div className='col-lg-6'>
                        <div className='py-5'>
                            <h5 className="mb-15 mx-3   ">

                                Major Modules
                            </h5>
                            <div className='row'>

                                {
                                    data?.productFeature.map((v , index) => {
                                        return (
                                            <div className='col-md-6' key={index}>
                                                <ul className='text-white'>
                                                    <li className='text-white' style={{ listStyle: "disc" }}>
                                                        {v}
                                                    </li>
                                                </ul>
                                            </div>
                                        )

                                    })


                                }









                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Desc
