import React from 'react'
import style from "./product.module.css"
import Link from 'next/link'
const VideoSec = () => {
    return (
        <div className="bg-black ">
            <div className='container p-5 ' >
                <div className={`   ${style?.bgcuim}      m-auto m-5`}>
                    <div style={{ height: "400px" }} className=''>
                        <div className={style?.flexx}>
                            <Link href={'https://youtube.com/'}>
                                <span className={`icon ti-control-play ${style?.iconnn}`} >
                                </span>
                            </Link>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoSec
