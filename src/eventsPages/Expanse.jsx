import React from "react";
import Cards from "./Cards/Cards";
import "./EventPages.css";
import Image1 from "../../public/images/IMG_5187.JPG"


export default function Expanse() {
    return (
      <div>
        <div className="mov-night">
        <span className="header-bg-for-white"/>
          <Cards
            img={Image1}
            alt="Movie Night"
            title="Expanse 3.0"
            date="Date: 12th March 2021"
            about="When you are at college, you are always looking for simple ways to have fun. Movies are the best stress reliever to be able to just forget about your responsibilities and just relax and have fun. So, we bring to you the Movie Night, where you can watch your favourite movies with your friends and have a great time. So, grab your popcorn and get ready for a fun night!"
            img1={Image1}
            alt1="Movie Night"
            img2={Image1}
            alt2="Movie Night"
            img3={Image1}
            alt3="Movie Night"
            img4={Image1}
            alt4="Movie Night"
            img5={Image1}
            alt5="Movie Night"
          />
        </div>
      </div>
    );
  };
  