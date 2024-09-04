import { SocialData } from '@/data/social-data';
import Link from 'next/link';
import React from 'react';

function Contact() {
  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 valign">
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
                <li class="hover-this cursor-pointer">
                  <Link href="${SocialData.socialLinks.facebook.url}" target="_blank" class="hover-anim">
                    <i class="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li class="hover-this cursor-pointer ml-10">
                  <Link href="${SocialData.socialLinks.linkedin.url}" target="_blank" class="hover-anim">
                    <i class="fab fa-linkedin-in"></i>
                  </Link>
                </li>
                <li class="hover-this cursor-pointer ml-10">
                  <Link href="${SocialData.socialLinks.instagram.url}" target="_blank" class="hover-anim">
                    <i class="fab fa-instagram"></i>
                  </Link>
                </li>
              </ul>
              </div>

            </div>
          </div>
          <div className="col-lg-7 offset-lg-1 valign">
            <div className="full-width">
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">Let&lsquo;s Chat</h6>
                <h3 className="text-u ls1">
                  Send a <span className="fw-200">message</span>
                </h3>
              </div>
              <form
                id="contact-form"
                className="form2"
                method="post"
                action="contact.php"
              >
                <div className="messages"></div>

                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required="required"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required="required"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input
                        id="form_subject"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        id="form_message"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        required="required"
                      ></textarea>
                    </div>
                    <div className="mt-30">
                      <button
                        type="submit"
                        className="butn butn-full butn-bord radius-30"
                      >
                        <span className="text">Let&lsquo;s Talk</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
