
import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/cusor';
import LoadingScreen from '@/components/common/loader';
import Header from '@/components/home-creative-agency/Header';
import Footer from '@/components/common/Footer';
import Marq2 from '@/components/common/Marq2';
import Navbar from '@/components/common/Navbar';
import Script from 'next/script';
import Services from '@/components/home-creative-agency/Services';
import Intro from '@/components/home-creative-agency/Intro';
import Numbers from '@/components/home-creative-agency/Numbers';
import Portfolio from '@/components/home-creative-agency/Portfolio';
import Intro2 from '@/components/home-creative-agency/Intro2';
import Team from '@/components/home-creative-agency/Team';
import Testimonials from '@/components/home-creative-agency/Testimonials';
import Clients from '@/components/common/Clients';
import Blog from '@/components/home-creative-agency/Blog';
import { ServicesData } from '@/data/servicesdata';
import Banner from '@/components/services-detail/Banner';
import ServiceFeature from '@/components/services-detail/service-feature';
import Marq from '@/components/home-personal/Marq';
import ChooseUs from '@/components/services-detail/choose-us';
import FAQS from '@/components/services-detail/faqs';

export const metadata = {
    title: 'webfolio',
    icons: {
        icon: '/assets/imgs/favicon.ico',
        shortcut: '/assets/imgs/favicon.ico',
        other: generateStylesheetObject([
            '/assets/css/plugins.css',
            '/assets/css/style.css',
            'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
            'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap',
        ]),
    },
};

const Service = ({ params }) => {

    const { id } = params;
    const v = ServicesData.filter(obj => obj.Link === id);
    const UpdatedArray = v[0]
    console.log('data====', UpdatedArray);

    if (!UpdatedArray) {
        return <div>Service not found</div>;
    }
    return (
        <body>
            <Cursor />
            <ProgressScroll />
            <Lines />
            <Navbar />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main className="main-bg o-hidden">
                        <Banner data={UpdatedArray} />
                        <ServiceFeature data={UpdatedArray} />
                        <Marq />
                        <ChooseUs data={UpdatedArray} />
                        <FAQS data={UpdatedArray}/>

                        <Marq2 />
                    </main>
                    <Footer />
                </div>
            </div>

            <Script
                src="/assets/js/ScrollTrigger.min.js"
                strategy="beforeInteractive"
            />
            <Script
                src="/assets/js/ScrollSmoother.min.js"
                strategy="beforeInteractive"
            />

            <Script strategy="beforeInteractive" src="/assets/js/plugins.js"></Script>
            <Script
                strategy="beforeInteractive"
                src="/assets/js/TweenMax.min.js"
            ></Script>
            <Script
                strategy="beforeInteractive"
                src="/assets/js/charming.min.js"
            ></Script>
            <Script
                strategy="beforeInteractive"
                src="/assets/js/countdown.js"
            ></Script>

            <Script
                strategy="beforeInteractive"
                src="/assets/js/gsap.min.js"
            ></Script>
            <Script
                strategy="beforeInteractive"
                src="/assets/js/splitting.min.js"
            ></Script>
            <Script
                strategy="beforeInteractive"
                src="/assets/js/isotope.pkgd.min.js"
            ></Script>
            <Script
                strategy="beforeInteractive"
                src="/assets/js/imgReveal/imagesloaded.pkgd.min.js"
            ></Script>

            {/* <Script src="/assets/js/smoother-script.js" strategy="lazyOnload" /> */}

            <Script src="/assets/js/scripts.js"></Script>
        </body>
    );
};
export default Service
export async function generateStaticParams() { // Extract Dynamic ID without router 
    return ServicesData.map(service => ({
        id: service.Link
    }))
}

