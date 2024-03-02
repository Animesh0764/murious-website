import React from "react";
import Cards from "./Cards/Cards";
import "./EventPages.css";
import Image1 from "../../public/images/IMG_5187.JPG";

export default function Expanse() {
  return (
    <div>
      <div className="mov-night">
        <span className="header-bg-for-white" />
        <Cards
          img={Image1}
          alt="Movie Night"
          title="Code Chaos"
          date="Date: 12th March 2021"
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
          img1={Image1}
          alt1="Image"
          img2={Image1}
          alt2="Image"
          img3={Image1}
          alt3="Image"
          img4={Image1}
          alt4="Image"
          img5={Image1}
          alt5="Image"
        />
      </div>
    </div>
  );
}
