import React from "react";
import Cards from "./Cards/Cards";
import "./EventPages.css";
import Chaos from "../images/mainevents/codechaosposter.webp";
import Chaos1 from "./images/CodeChaos/IMG_2891.webp";
import Chaos2 from "./images/CodeChaos/IMG_2893.webp";
import Chaos3 from "./images/CodeChaos/IMG_2894.webp";
import Chaos4 from "./images/CodeChaos/IMG_2898.webp";
import Chaos5 from "./images/CodeChaos/IMG_2902.webp";

export default function Expanse() {
  return (
    <div>
      <div className="mov-night">
        <span className="header-bg-for-white" />
        <Cards
          img={Chaos}
          alt="Movie Night"
          title="Code Chaos"
          date="Date: 09th March 2023"
          venue="Venue: CL - 4"
          time="Time: 10AM - 12PM"
          about="Well, to give the tech nerd in
            you a chance to flex your
            coding skills, murious'18
            presents to you 'CODE CHAOS' it is a two hour long coding event.
            the challenges will be organized
            on hackerrank.
            feel free to sink in the comfort
            zone of any programming language
            you wish to write your code in.
            "
          img1={Chaos1}
          alt1="Image"
          img2={Chaos2}
          alt2="Image"
          img3={Chaos3}
          alt3="Image"
          img4={Chaos4}
          alt4="Image"
          img5={Chaos5}
          alt5="Image"
        />
      </div>
    </div>
  );
}
