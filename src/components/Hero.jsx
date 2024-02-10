import React, { useEffect, useRef, useState } from "react";
import "../../public/css/Hero.css";
import Image from "../../public/images/muriouslogo.webp";

const Hero = () => {

  //animating the title
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const h1Ref = useRef(null);
  const [intervalId, setIntervalId] = useState(null);

  const handleMouseOver = () => {
    let iteration = 0;

    clearInterval(intervalId);

    const newIntervalId = setInterval(() => {
      h1Ref.current.innerText = h1Ref.current.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return h1Ref.current.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= h1Ref.current.dataset.value.length) {
        clearInterval(newIntervalId);
      }

      iteration += 1 / 3;
    }, 30);

    setIntervalId(newIntervalId);
  };

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div className="hero">
      <div className="title-container">
        <h1
          ref={h1Ref}
          data-value="Murious 18.0"
          // onMouseOver={handleMouseOver}
          onMouseEnter={handleMouseOver}
        >Murious 18.0</h1>
      </div>
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
