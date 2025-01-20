import { SocialData } from '@/data/social-data';
import Link from 'next/link';
import React from 'react';
import Ca from '../../public/assets/imgs/Canada.webp';
import UE from '../../public/assets/imgs/UAEFLAG.jpg';
import Pk from '../../public/assets/imgs/pak.webp';
import Image from 'next/image';



function Footer() {
  return (
    <footer className="clean-footer crev py-5">
      <div className="container pb-40 pt-40 ontop">
        <div className="row justify-content-between">
          <div className="col-lg-3">
            <div className="logo icon-img-100 md-mb80">
              <img src="/assets/imgs/logo-light.png" alt="" />
            </div>

          </div>
          <div className="col-lg-4">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Contact</h6>
              <h6 className="p-color fw-400">
                <i className="fas fa-map-marker-alt" style={{ marginRight: "8px" }}></i>
                <Link href={`${SocialData?.address?.link}`}>
                  {SocialData?.address?.location}
                </Link>
              </h6>
              <h6 className="mt-30 mb-15">
                <i className="fas fa-envelope" style={{ marginRight: "8px" }}></i>
                <Link href={`${SocialData?.email?.link}`}>
                  {SocialData?.email?.emailaddress}
                </Link>
              </h6>
              <Link href={`${SocialData?.phone?.link}`} className="underline">
                <i className="fas fa-phone-alt" style={{ marginRight: "8px" }}></i>
                <span className="fz-22">{SocialData?.phone?.number}</span>
              </Link>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Useful Links</h6>
              <ul className="rest fz-14 opacity-7">
                <li className="mb-15">
                  <a href="/page-about">About</a>
                </li>
                <li className="mb-15">
                  <a href="/page-services">Services</a>
                </li>
                <li className="mb-15">
                  <a href="/blog-grid-sidebar">Blog</a>
                </li>
                <li>
                  <a href="/page-contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="column subscribe-minimal">
              <h6 className="sub-title mb-30">Newsletter</h6>
              <div className="form-group mb-40">
                <input type="text" name="subscrib" placeholder="Your Email" />
                <button>
                  <span className="ti-location-arrow"></span>
                </button>
              </div>
              <ul className=" social-icon d-flex align-items-center">
                <li className="">
                  <a href={`${SocialData?.socialLinks?.facebook}`}>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className=" ml-10">
                  <Link href={`${SocialData?.socialLinks?.linkedin}`}>
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
                <li className=" ml-10">
                  <Link href={`${SocialData?.socialLinks?.instagram}`}>
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h6 className='text-white my-4'>
            Our Offices
          </h6>
          <div className="row my-2">
            <div className="col-lg-4 my-3">
              <div className="d-flex " style={{ gap: "20px" }}>
                <div className="">
                  <Image src={Ca} width={96} height={96} style={{ width: "106px" }} />
                </div>
                <div className="d-flex " style={{ gap: "10px" }}>
                  <span>
                    <Image src={Ca} style={{ width: "30px" }} />
                  </span>
                  <span className='text-white'>
                    Canada (Head Office)
                  </span>

                </div>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="d-flex " style={{ gap: "20px" }}>
                <div className="">
                  <Image src={UE} width={96} height={96} style={{ width: "106px" }} />
                </div>
                <div className="d-flex " style={{ gap: "10px" }}>
                  <span>
                    <Image src={UE} style={{ width: "30px" }} />
                  </span>
                  <span className='text-white'>
                    UAE Office
                  </span>

                </div>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="d-flex " style={{ gap: "20px" }}>
                <div className="">
                  <Image src={Pk} width={96} height={96} style={{ width: "106px" }} />
                </div>
                <div className="d-flex " style={{ gap: "10px" }}>
                  <span>
                    <Image src={Pk} style={{ width: "30px" }} />
                  </span>
                  <span className='text-white'>
                    Pakistan Office
                  </span>

                </div>
              </div>
            </div>
          </div>
        </div>




        <div className="pt-30 pb-30 mt-80 bord-thin-top">
          <div className="text-center">
            <p className="fz-14">
              © 2025 <Link href="/" > 4DotsSolutions </Link>  |  All right reserved{' '}

            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
