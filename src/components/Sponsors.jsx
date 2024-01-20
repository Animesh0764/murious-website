import React, { useEffect } from 'react';
import '../../public/css/Sponsors.css';
import Sponsor1 from "../../public/images/muriouslogo.webp" // Make sure to import your CSS file
import Sponsor2 from "../../public/images/muriouslogo.webp" // Make sure to import your CSS file
import Sponsor3 from "../../public/images/muriouslogo.webp" // Make sure to import your CSS file

const Sponsors = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".spon-scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", "true");

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".spon-scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []); // Empty dependency array ensures useEffect runs only once after the initial render

  return (
    <div className=''>
        <h2>Sponsors</h2>
        <div className='spon-body'>
      <div className="spon-scroller" data-direction="left" data-speed="slow">
        <div className="spon-scroller__inner">
          <img src={Sponsor1} alt="" />
          <img src={Sponsor1} alt="" />
          <img src={Sponsor1} alt="" />
          <img src={Sponsor1} alt="" />
          <img src={Sponsor1} alt="" />
        </div>
      </div>
      <div className="spon-scroller" data-direction="right" data-speed="slow">
        <div className="spon-scroller__inner">
          <img src={Sponsor2} alt="" />
          <img src={Sponsor2} alt="" />
          <img src={Sponsor2} alt="" />
          <img src={Sponsor2} alt="" />
          <img src={Sponsor2} alt="" />
        </div>
      </div>
      <div className="spon-croller" data-direction="left" data-speed="slow">
        <div className="spon-scroller__inner">
          <img src={Sponsor3} alt="" />
          <img src={Sponsor3} alt="" />
          <img src={Sponsor3} alt="" />
          <img src={Sponsor3} alt="" />
          <img src={Sponsor3} alt="" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Sponsors;
