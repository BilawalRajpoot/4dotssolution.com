
'use client';

import React from "react";
import KbrLogo from "../../public/assets/imgs/kbr-logo.png";
import WhiteKbrLogo from "../../public/assets/imgs/-logokbr-white.png"
import UcImage from "../../public/assets/imgs/uc.png";
import UcWhiteImage from "../../public/assets/imgs/white-uc.png";
import Aws from "../../public/assets/imgs/aws.png";
import AwsWhite from "../../public/assets/imgs/awsblack.png";
import chandwhite from "../../public/assets/imgs/Chand-Elec.png";
import Athar from "../../public/assets/imgs/athar-blue.png";
import AtharWhite from "../../public/assets/imgs/atharwhite.png";
import HemHenge from "../../public/assets/imgs/Hem-henge.png";
import HemHengeWHite from "../../public/assets/imgs/Hem-hengeWhite.png";
import CeBlack from "../../public/assets/imgs/CE-Black.png";
import Tr from "../../public/assets/imgs/Traditions.png";
import TrWhite from "../../public/assets/imgs/TraditionsWhite.png";
import Ks from "../../public/assets/imgs/Kushal-White.png";
import KsBlack from "../../public/assets/imgs/Ks-black.png";
import kido from "../../public/assets/imgs/KiddoQuiz.png";
import kidoWhite from "../../public/assets/imgs/KiddoQuizWhite.png";
import Hfm from "../../public/assets/imgs/HFM.png";
import HfmWhite from "../../public/assets/imgs/HFMWhite.png";
import Gd from "../../public/assets/imgs/GD.png";
import GdWhite from "../../public/assets/imgs/GDWhite.png";
import Lecto from "../../public/assets/imgs/Lacto.png";
import LectoWhite from "../../public/assets/imgs/LactoWhite.png";
import Nthai from "../../public/assets/imgs/N-Thai.png";
import NthaiWhite from "../../public/assets/imgs/N-Thai(1).png";
import Pet from "../../public/assets/imgs/Pets-Heaven.png";
import PetWhite from "../../public/assets/imgs/Pets-Heaven(1).png";
import Chicken from "../../public/assets/imgs/Chicken-World.png";
import ChickenWhite from "../../public/assets/imgs/Chicken-WorldWhite.png";
import Sketcher from "../../public/assets/imgs/Skechers-Logo.png";
import SketcherWhite from "../../public/assets/imgs/Skechers-W.png";
import Fc from "../../public/assets/imgs/FC.png";
import FcWhite from "../../public/assets/imgs/FCWhite.png";
import Mra from "../../public/assets/imgs/MRA-Engineering.png";
import MraWite from "../../public/assets/imgs/MRA-EngineeringWhite.png";
import backgroundImage from "../../public/assets/imgs/testomonial-n.png";
import Image from "next/image";
import { Navigation } from 'swiper';
import styles from "./our-clients.module.css";

import { Swiper, SwiperSlide } from 'swiper/react';
const OurClients = () => {
    const TESTIMONIALS_DATA = [
        {
            whiteimage: WhiteKbrLogo,
            image: KbrLogo,
            text: "",
            // text: "KBR Transport recognizes that in a constantly changing environment, only the companies that are  raising the bar for themselves are likely to survive in the market. By having our regular morning team huddles we discuss our customers transportation needs, obstacles, and frustrations. It is this management strategy that allows us to grasp a deep understanding of how each customer operates, their unique challenges and requirements, and how we can provide them with an array of added value transportation solutions along the way.",
            title: "KBR Transport",
            // name: "Kapil Malik",
        },
        {
            whiteimage: UcWhiteImage,
            image: UcImage,
            text: "",
            // text: "At Ultra Cleaning, we are dedicated to delivering top-quality cleaning services that leave your space spotless and refreshed. Our expert team uses advanced techniques and eco-friendly products to ensure the highest level of cleanliness. We take pride in our attention to detail and commitment to excellence. Discover the difference with Ultra Cleaning today",
            title: "Ultra Cleaning",
            // name: "Waseem Afzal",
        },
        {
            whiteimage: Aws,
            image: AwsWhite,
            text: "",
            // text: "At AWSRealEstate, we take pride in offering a comprehensive range of services tailored to meet the unique needs of both residential and commercial real estate throughout North America. From the charming landscapes of Whistler to the vibrant cityscape of Hope City, we are dedicated to providing top-tier real estate solutions. Our commitment is to ensure that your property goals not only meet but exceed your expectations, making them a reality in the diverse and dynamic North American market",
            title: "AWS Real Estate ",
            // name: "Ashraf & Waseem & Sharry",
        },
        {
            whiteimage: Ks,
            image: KsBlack,
            text: "",
            // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
            title: "Kaushal Law",
            // name: "Manmohan Kaushal",
        },
        {
            whiteimage: TrWhite,
            image: Tr,
            text: "",
            // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
            title: "Traditions Tea And Coffee",
            // name: "Manmohan Kaushal",
        },

        {
            whiteimage: AtharWhite,
            image: Athar,
            text: "",
            // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
            title: "Athar Associates",
            // name: "Manmohan Kaushal",
        },
        {
            whiteimage: kidoWhite,
            image: kido,
            text: "",
            // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
            title: "Kido Quiz",
            // name: "Manmohan Kaushal",
        },
        {
            whiteimage: HemHengeWHite,
            image: HemHenge,
            text: "",
            // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
            title: "Hem Henge",
            // name: "Manmohan Kaushal",
        },

        {
            whiteimage: GdWhite,
            image: Gd,
            text: "",
            // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
            title: "Garden Deli",
            // name: "Manmohan Kaushal",
        },
        {
            whiteimage: LectoWhite,
            image: Lecto,
            text: "",
            // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
            title: "Lacto Valley",
            // name: "Manmohan Kaushal",
        },
        {
            whiteimage: MraWite,
            image: Mra,
            text: "",
            // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
            title: "MRA Engineering",
            // name: "Manmohan Kaushal",
        },
        {
            whiteimage: NthaiWhite,
            image: Nthai,
            text: "",
            // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
            title: "N THAI PALACE",
            // name: "Manmohan Kaushal",
        },
        {
            whiteimage: PetWhite,
            image: Pet,
            text: "",
            // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
            title: "Pets Heaven",
            // name: "Manmohan Kaushal",
        },
        {
            whiteimage: ChickenWhite,
            image: Chicken,
            text: "",
            // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
            title: "Chicken World",
            // name: "Manmohan Kaushal",
        },
        {
            whiteimage: FcWhite,
            image: Fc,
            text: "",
            // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
            title: "French Corner "
            // name: "Manmohan Kaushal",
        },
        {
            whiteimage: SketcherWhite,
            image: Sketcher,
            text: "",
            // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
            title: "Skechers"
            // name: "Manmohan Kaushal",
        },
        {
            whiteimage: chandwhite,
            image: CeBlack,
            text: "",
            // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
            title: "Chand Electrical Corporation",
            // name: "Manmohan Kaushal",
        },
        {
            whiteimage: HfmWhite,
            image: Hfm,
            text: "",
            // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
            title: "Haq Fresh Malik",
            // name: "Manmohan Kaushal",
        },
    ];
    return (
        <div id="portfolio" className={styles.testimonialsWrapper}>
            <div className={styles.bgImage}>

                <Image className="" src={backgroundImage} alt="image" />
            </div>
            <div className={styles?.customContainer}>
                <div class="d-flex py-4 ">
                    <div class="d-none d-md-block w-30"></div>
                    <div  class="  mx-auto position-relative">
                        <h4 class="text-left  text-black mb-2">Portfolio</h4>
                        <p class="mb-2 text-left  text-black text-muted fs-5">
                            150+ projects executed successfully last year. List of a few recent projects is as under;
                        </p>
                        <h2 class="text-left  text-black " style={{marginBottom:"80px"}}>Showcasing Our Creative Excellence</h2>
                    </div>
                </div>
                <div className="testimonials-slider">
                    
                    <Swiper
                    
                        modules={[Navigation]}
                        breakpoints={{
                            768: {
                                slidesPerView: 1,
                            },
                            991: {
                                slidesPerView: 2.5,
                            },
                            1140: {
                                slidesPerView: 2.5,
                            },
                        }}
                        spaceBetween={50} 
                        
                    >
                        
                        {TESTIMONIALS_DATA.map((data, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className={  ` ${styles.TestimonialCard} py-4 hover:bg-black hover:text-white transition duration-500 ease-in-out" hover:shadow-lg`}>
                                        <div style={{ height: "144px ", justifyContent: "space-between", alignItems: " center" }} className="  d-flex ">
                                            <Image style={{ width: "156px" }} className={` ${styles.simple_logo}`} src={data.image} alt={data.title} />
                                            <Image className={` ${styles.white_logo}`} src={data.whiteimage} alt={data.title} />
                                            <div className="cursor-pointer">
                                            </div>
                                        </div>
                                        <div className="mt-[29px]">
                                            <p className={`text-lg font-poppins font-normal text-grey mb-[24px] ${styles.testmonialpara}`}>
                                                {data.text.substring(0, 299)}
                                            </p>
                                            {/* <a className={` text-lg font-poppins font-semibold ${styles.siteName}`}>
                                                <h4> {data?.title} </h4>
                                            </a> */}
                                            <p className={`  ${styles.siteowner}`}>
                                                <h4> {data?.title} </h4>

                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default OurClients;
