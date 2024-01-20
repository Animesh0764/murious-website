import React, { useEffect } from "react";
import "../../public/css/Hero.css";
import Image from "../../public/images/muriouslogo.webp";

const Hero = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", "true");

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
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
    <div className="hero">
      <h1>Murious 18.0</h1>
      <div className="body">
        <div className="scroller" data-direction="up" data-speed="slow">
          <div className="scroller__inner">
            <img src={Image} alt="" />
            <img src={Image} alt="" />
            <img src={Image} alt="" />
            <img src={Image} alt="" />
            <img src={Image} alt="" />
            <img src={Image} alt="" />
          </div>
        </div>
        <div className="scroller" data-direction="down" data-speed="slow">
          <div className="scroller__inner">
            <img src={Image} alt="" />
            <img src={Image} alt="" />
            <img src={Image} alt="" />
            <img src={Image} alt="" />
            <img src={Image} alt="" />
            <img src={Image} alt="" />
          </div>
        </div>
        <div className="scroller" data-direction="up" data-speed="slow">
          <div className="scroller__inner">
            <img src={Image} alt="" />
            <img src={Image} alt="" />
            <img src={Image} alt="" />
            <img src={Image} alt="" />
            <img src={Image} alt="" />
            <img src={Image} alt="" />
          </div>
        </div>
        <div className="scroller" data-direction="down" data-speed="slow">
          <div className="scroller__inner">
            <img src={Image} alt="" />
            <img src={Image} alt="" />
            <img src={Image} alt="" />
            <img src={Image} alt="" />
            <img src={Image} alt="" />
            <img src={Image} alt="" />
          </div>
        </div>
        <div className="scroller" data-direction="up" data-speed="slow">
          <div className="scroller__inner">
            <img src={Image} alt="" />
            <img src={Image} alt="" />
            <img src={Image} alt="" />
            <img src={Image} alt="" />
            <img src={Image} alt="" />
            <img src={Image} alt="" />
          </div>
        </div>
        <div className="scroller" data-direction="down" data-speed="slow">
          <div className="scroller__inner">
            <img src={Image} alt="" />
            <img src={Image} alt="" />
            <img src={Image} alt="" />
            <img src={Image} alt="" />
            <img src={Image} alt="" />
            <img src={Image} alt="" />
          </div>
        </div>
        <div className="scroller" data-direction="up" data-speed="slow">
          <div className="scroller__inner">
            <img src={Image} alt="" />
            <img src={Image} alt="" />
            <img src={Image} alt="" />
            <img src={Image} alt="" />
            <img src={Image} alt="" />
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
