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
            alt="Code Cleanse"
            title="Code Cleanse"
            date="Date: 12th March 2021"
            about="Unleash your inner code
            detective and embark on a quest
            to uncover hidden errors
            lurking within lines of code.
            with each bug squashed, you'll
            inch closer to unraveling the
            mystery and claiming your
            rightful place among coding
            champions.
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
  };
  