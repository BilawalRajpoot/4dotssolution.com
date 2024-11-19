'use client';
import ProductData from '@/data/product-data';
import { ServicesData } from '@/data/servicesdata';
import Link from 'next/link';
import React, { useEffect } from 'react';
import style from "./nav.module.css"

function Navbar({ darkTheme, whiteButton }) {
  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector('.navbar');

    if (bodyScroll > 300) navbar.classList.add('nav-scroll');
    else navbar.classList.remove('nav-scroll');
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  function handleDropdownMouseMove(event) {
    event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
  }

  function handleDropdownMouseLeave(event) {
    event.currentTarget
      .querySelector('.dropdown-menu')
      .classList.remove('show');
  }
  function handleToggleNav() {
    if (
      document
        .querySelector('.navbar .navbar-collapse')
        .classList.contains('show')
    ) {
      document
        .querySelector('.navbar .navbar-collapse')
        .classList.remove('show');
    } else if (
      !document
        .querySelector('.navbar .navbar-collapse')
        .classList.contains('show')
    ) {
      document.querySelector('.navbar .navbar-collapse').classList.add('show');
    }
  }
  return (

    <nav className={`navbar navbar-expand-lg bord blur  ${darkTheme && 'bg-white'}`}>
      <div className="container o-hidden">
        <Link className="logo my-3" style={{ width: "60px" }} href="/">
          <img src="/assets/imgs/4dotblack.webp" alt="logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"

          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggleNav}
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">

            <li className="nav-item">
              <Link className="nav-link" href="/">
                <span className="rolling-text">Home</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/about-us">
                <span className="rolling-text">ABOUT Us</span>
              </Link>
            </li>
            <li
              onMouseLeave={handleDropdownMouseLeave}
              onMouseMove={handleDropdownMouseMove}
              className="nav-item dropdown"
            >
              <Link
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Services</span>
              </Link>


              <div className={`dropdown-menu  ${style.customDropdown}  `}>
                <div className="row">
                  {
                    ServicesData.map((v) => {
                      return (
                        <>
                          <div className="col-md-4" > 
                            <Link className="dropdown-item" href={`/service/${v?.Link}`} style={{borderBottom:"1px solid #dddddd"}}>
                              <div className="d-flex text-black align-items-center py-3" >
                                <div>{v?.icon}</div>
                                <div className='mx-3'>
                                  {v?.title}
                                </div>
                              </div>
                            </Link>
                          </div>
                        </>
                      )
                    })
                  }
                </div>

              </div>




              <div className="dropdown-menu d-none mobilenavbr ">
                {
                  ServicesData.map((v) => {
                    return (
                      <>
                        <Link className="dropdown-item" href={`/service/${v?.Link}`}>
                          {v?.title}
                        </Link>
                      </>
                    )
                  })
                }

              </div>
            </li>

            <li
              onMouseLeave={handleDropdownMouseLeave}
              onMouseMove={handleDropdownMouseMove}
              className="nav-item dropdown"
            >
              <Link
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Products</span>
              </Link>

              <div className="dropdown-menu">
                {
                  ProductData.map((v) => {
                    return (
                      <>
                        <Link className="dropdown-item" href={`/products/${v?.id}`}>
                          {v?.Banner?.title}
                        </Link>
                      </>
                    )
                  })
                }

              </div>
            </li>


            <li className="nav-item">
              <Link className="nav-link" href="/case-study">
                <span className="rolling-text">Portfolio</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/page-contact">
                <span className="rolling-text">Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="contact-button">
          <a
            href="/page-contact"
            className={`butn butn-sm butn-bg  radius-5 bg-black `}
          >
            <span className="text">Let&apos;s contact</span>
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
