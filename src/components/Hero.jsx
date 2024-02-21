import React, { useEffect, useRef, useState } from "react";
import "../../public/css/Hero.css";
import Image1 from "../../public/images/DSC_0001.webp";
import Image2 from "../../public/images/DSC_0013.webp";
import Image3 from "../../public/images/DSC_0025.webp";
import Image4 from "../../public/images/DSC_0032.webp";
import Image5 from "../../public/images/DSC_0128.webp";
import Image6 from "../../public/images/DSC_0168.webp";
import Image7 from "../../public/images/DSC_0538.webp";
import Image8 from "../../public/images/DSC_0808.webp";
import Image9 from "../../public/images/DSC_0831.webp";
import Image10 from "../../public/images/IMG_2651.webp";
import Image11 from "../../public/images/IMG_2721.webp";
import Image12 from "../../public/images/IMG_2868.webp";
import Image13 from "../../public/images/IMG_2886.webp";
import Image14 from "../../public/images/IMG_2893.webp";
import Image15 from "../../public/images/IMG_2926.webp";
import Image16 from "../../public/images/IMG_2942.webp";
import Image17 from "../../public/images/IMG_2957.webp";
import Image18 from "../../public/images/IMG_2969.webp";
import Image19 from "../../public/images/IMG_2984.webp";
import Image20 from "../../public/images/IMG_3042.webp";

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
      <h1 className="back-title">   
        </h1>
      <div className="title-container">
        <h1
          ref={h1Ref}
          className="front-title"
          data-value="Murious 18.0"
          // onMouseOver={handleMouseOver}
          onMouseEnter={handleMouseOver}
        >Murious 18.0</h1>
      </div>
      <div className="body">
        <div className="scroller" data-direction="up" data-speed="slow">
          <div className="scroller__inner">
            <img src={Image1} alt="" />
            <img src={Image2} alt="" />
            <img src={Image3} alt="" />
            <img src={Image4} alt="" />
            <img src={Image5} alt="" />
            <img src={Image6} alt="" />
          </div>
        </div>
        <div className="scroller" data-direction="down" data-speed="slow">
          <div className="scroller__inner">
            <img src={Image7} alt="" />
            <img src={Image8} alt="" />
            <img src={Image9} alt="" />
            <img src={Image10} alt="" />
            <img src={Image11} alt="" />
            <img src={Image12} alt="" />
          </div>
        </div>
        <div className="scroller" data-direction="up" data-speed="slow">
          <div className="scroller__inner">
            <img src={Image13} alt="" />
            <img src={Image14} alt="" />
            <img src={Image15} alt="" />
            <img src={Image16} alt="" />
            <img src={Image17} alt="" />
            <img src={Image18} alt="" />
          </div>
        </div>
        <div className="scroller" data-direction="down" data-speed="slow">
          <div className="scroller__inner">
            <img src={Image20} alt="" />
            <img src={Image19} alt="" />
            <img src={Image18} alt="" />
            <img src={Image17} alt="" />
            <img src={Image16} alt="" />
            <img src={Image15} alt="" />
          </div>
        </div>
        <div className="scroller" data-direction="up" data-speed="slow">
          <div className="scroller__inner">
            <img src={Image14} alt="" />
            <img src={Image13} alt="" />
            <img src={Image12} alt="" />
            <img src={Image11} alt="" />
            <img src={Image10} alt="" />
            <img src={Image9} alt="" />
          </div>
        </div>
        <div className="scroller" data-direction="down" data-speed="slow">
          <div className="scroller__inner">
            <img src={Image6} alt="" />
            <img src={Image5} alt="" />
            <img src={Image4} alt="" />
            <img src={Image3} alt="" />
            <img src={Image2} alt="" />
            <img src={Image1} alt="" />
          </div>
        </div>
        <div className="scroller" data-direction="up" data-speed="slow">
          <div className="scroller__inner">
            <img src={Image12} alt="" />
            <img src={Image11} alt="" />
            <img src={Image10} alt="" />
            <img src={Image9} alt="" />
            <img src={Image8} alt="" />
            <img src={Image7} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
