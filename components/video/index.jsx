'use client'
import useCheckMobileScreen from "@/common/use-check-mobile-screen";

export default function Video() {
    const isItMobile = useCheckMobileScreen();
    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
            {
                !isItMobile && (
                    <video
                        autoPlay
                        loop
                        muted
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                        }}
                    >
                        <source src="/assets/video/bg-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )
            }
            {
                !!isItMobile && (
                    <video
                        autoPlay
                        loop
                        muted
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                        }}
                    >
                        <source src="/assets/video/mobile-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )
            }

        </div>
    );
}
// import useCheckMobileScreen from "@/components/hook/use-check-mobile-screen";

// const BannerVideo = () => {
//     const isItMobile = useCheckMobileScreen();
//     const VideoSource = '/video/bannerVideo.mp4'
//     const MobileVideoSource = '/video/MobileVideo.mp4'
//     return (
//         <>
//             {
//                 !isItMobile && (
//                     <video autoPlay muted loop={true} className="w-100">
//                         <source src={
//                             VideoSource

//                         } type="video/mp4" />
//                         Your browser does not support the video tag.
//                     </video>
//                 )
//             }
//             {
//                 !!isItMobile && (
//                     <video autoPlay muted loop={true} className="w-100 ">
//                         <source src={
//                             MobileVideoSource
//                         } type="video/mp4" />
//                         Your browser does not support the video tag.
//                     </video>
//                 )
//             }

//         </>

//     );
// };

// export default BannerVideo;