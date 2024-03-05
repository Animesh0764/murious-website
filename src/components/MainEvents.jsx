import React, { useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../public/css/MainEvents.css";

// ---------- scrollTrigger plugin registration
gsap.registerPlugin(ScrollTrigger);

const imageUrls = [
  "../../public/images/mainevents/expanse.webp",
  "../../public/images/mainevents/framebyframe.webp",
  "../../public/images/mainevents/pictureperfect.webp",
  "../../public/images/mainevents/tambola.webp",
  "../../public/images/mainevents/valorant.webp",
  "../../public/images/mainevents/expanse.webp",
  "../../public/images/mainevents/framebyframe.webp",
  "../../public/images/mainevents/pictureperfect.webp",
  "../../public/images/mainevents/tambola.webp",
  "../../public/images/mainevents/valorant.webp",
];

const App = () => {
  // ---------- gsap context
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ---------- selecting all horizontal sections
      const horizontalSections = gsap.utils.toArray(".horizontal-section");

      // ---------- applying horizontal scroll animation
      gsap.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: "#container",
          pin: true,
          scrub: 1,
          snap: 1 / (horizontalSections.length - 1),
          end: () => "+=" + document.querySelector("#container").offsetWidth,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div>
        <h1 className="events-heading">Our Main Events</h1>
    <main id="container">
      {/* ---------- section 01 ---------- */}
      <section
        className="horizontal-section"
        style={{ backgroundImage: `url(${imageUrls[0]})` }}
      >
      </section>

      {/* ---------- section 02 ---------- */}
      <section
        className="horizontal-section"
        style={{ backgroundImage: `url(${imageUrls[1]})` }}
      >
        {/* <h1 className="heading">Code Chaos</h1> */}
      </section>

      {/* ---------- section 03 ---------- */}
      <section
        className="horizontal-section"
        style={{ backgroundImage: `url(${imageUrls[2]})` }}
      >
        {/* <h1 className="heading">Picture Perfect</h1> */}
      </section>

      {/* ---------- section 04 ---------- */}
      <section
        className="horizontal-section"
        style={{ backgroundImage: `url(${imageUrls[3]})` }}
      >
        {/* <h1 className="heading">Web-O-Fiesta</h1> */}
      </section>
      <section
        className="horizontal-section"
        style={{ backgroundImage: `url(${imageUrls[4]})` }}
      >
        {/* <h1 className="heading">Code Rumble</h1> */}
      </section>
      <section
        className="horizontal-section"
        style={{ backgroundImage: `url(${imageUrls[5]})` }}
      >
        {/* <h1 className="heading">Code Relay</h1> */}
      </section>
      <section
        className="horizontal-section"
        style={{ backgroundImage: `url(${imageUrls[6]})` }}
      >
        {/* <h1 className="heading">Storage Wars</h1> */}
      </section>
      <section
        className="horizontal-section"
        style={{ backgroundImage: `url(${imageUrls[7]})` }}
      >
        {/* <h1 className="heading">Bridge Making</h1> */}
      </section>
      <section
        className="horizontal-section"
        style={{ backgroundColor: "black" }}
      >
        <button className="btn"
        style={{width:`15rem`, height:`5rem`, borderRadius:`15px
        `}}>
          <a href="/events" className="btn-link"
          style={{color:`#fff`, fontSize:`1.5rem`}}>View More...</a>
        </button>
      </section>
    </main>
    </div>
  );
};

export default App;
