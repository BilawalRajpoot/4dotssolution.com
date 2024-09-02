'use client';
import React, { useEffect } from 'react';

function LoadingScreen() {
  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof gsap !== 'undefined') {
        clearInterval(interval);
        const svg = document.getElementById('svg');
        const tl = gsap.timeline();
        const curve = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
        const flat = 'M0 2S175 1 500 1s500 1 500 1V0H0Z';

        // Reduce the delay and duration to make the loading screen faster
        tl.to('.loader-wrap-heading .load-text , .loader-wrap-heading .cont', {
          delay: 0.5, // Reduced from 1.5 to 0.5 seconds
          y: -100,
          opacity: 0,
        });
        tl.to(svg, {
          duration: 0.3, // Reduced duration for the curve animation
          attr: { d: curve },
          ease: 'power2.easeIn',
        }).to(svg, {
          duration: 0.3, // Reduced duration for the flat animation
          attr: { d: flat },
          ease: 'power2.easeOut',
        });
        tl.to('.loader-wrap', { y: -1500 });
        tl.to('.loader-wrap', { zIndex: -1, display: 'none' });
        tl.from('header', { y: 100 }, '-=1.0'); // Reduced the animation distance for header
        tl.from(
          'header .container',
          { y: 20, opacity: 0, delay: 0.2 }, // Reduced the delay for the container animation
          '-=1.0'
        );
      }
    }, 50); // Reduced interval time to check more frequently
  }, []);

  return (
    <div className="loader-wrap">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>

      <div className="loader-wrap-heading">
        <div className="load-text">
          <span>L</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
