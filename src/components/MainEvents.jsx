import React, { useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../public/css/MainEvents.css";

// ---------- scrollTrigger plugin registration
gsap.registerPlugin(ScrollTrigger);

const imageUrls = [
  "../../public/images/IMG_5187.JPG",
  "../../public/images/IMG_5187.JPG",
  "../../public/images/IMG_5187.JPG",
  "../../public/images/IMG_5187.JPG",
  "../../public/images/IMG_5187.JPG",
  "../../public/images/IMG_5187.JPG",
  "../../public/images/IMG_5187.JPG",
  "../../public/images/IMG_5187.JPG",
  "../../public/images/IMG_5187.JPG",
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
        <h1 className="heading">Event 1</h1>
      </section>

      {/* ---------- section 02 ---------- */}
      <section
        className="horizontal-section"
        style={{ backgroundImage: `url(${imageUrls[1]})` }}
      >
        <h1 className="heading">Event 2</h1>
      </section>

      {/* ---------- section 03 ---------- */}
      <section
        className="horizontal-section"
        style={{ backgroundImage: `url(${imageUrls[2]})` }}
      >
        <h1 className="heading">Event 3</h1>
      </section>

      {/* ---------- section 04 ---------- */}
      <section
        className="horizontal-section"
        style={{ backgroundImage: `url(${imageUrls[3]})` }}
      >
        <h1 className="heading">Event 4</h1>
      </section>
      <section
        className="horizontal-section"
        style={{ backgroundImage: `url(${imageUrls[3]})` }}
      >
        <h1 className="heading">Event 5</h1>
      </section>
      <section
        className="horizontal-section"
        style={{ backgroundImage: `url(${imageUrls[3]})` }}
      >
        <h1 className="heading">Event 6</h1>
      </section>
      <section
        className="horizontal-section"
        style={{ backgroundImage: `url(${imageUrls[3]})` }}
      >
        <h1 className="heading">Event 7</h1>
      </section>
      <section
        className="horizontal-section"
        style={{ backgroundImage: `url(${imageUrls[3]})` }}
      >
        <h1 className="heading">Event 8</h1>
      </section>
    </main>
    </div>
  );
};

export default App;
