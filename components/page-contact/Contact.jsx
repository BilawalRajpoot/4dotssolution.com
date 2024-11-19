import { SocialData } from '@/data/social-data';
import Link from 'next/link';
import React from 'react';
import ContactComponent from '../../components/contact/index';

function Contact() {
  return (
    <section className="  " style={{background:"#f9f9fd"}}>
              <ContactComponent/>

      <div className="container">
        <div className="row">
          {/* <div className="col-lg-4 valign">
            <div className="sec-head info-box full-width md-mb80">
              <div className="phone fz-30 fw-600 underline text-white">
                <Link href={`${SocialData?.phone?.link}`}> {SocialData?.phone?.number}</Link>
              </div>
              <div className="morinfo mt-50 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Address</h6>
                <Link target='blank' href={`${SocialData?.address?.link}`} ><p>{SocialData?.address?.location}</p></Link>
              </div>
              <div className="morinfo mt-30 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Email</h6>
                <Link target='blank' href={`${SocialData?.email?.link}`} >
                  <p>{SocialData?.email?.emailaddress}</p>
                </Link>
              </div>
              <div className="morinfo mt-30 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Social Links</h6>
                <ul class=" rest social-icon d-flex align-items-center">
                  <li class="">
                    <Link href="${SocialData.socialLinks.facebook.url}" target="_blank" >
                      <i class="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li class=" ml-10">
                    <Link href="${SocialData.socialLinks.linkedin.url}" target="_blank" >
                      <i class="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                  <li class=" ml-10">
                    <Link href="${SocialData.socialLinks.instagram.url}" target="_blank" >
                      <i class="fab fa-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
          </div> */}
          <div className="col-lg-12 offset-lg-1 valign">
            <div className="full-width">
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
