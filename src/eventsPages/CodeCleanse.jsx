import React from "react";
import Cards from "./Cards/Cards";
import "./EventPages.css";
import CodeCleanse from "../images/mainevents/codecleanseposter.webp";


export default function Expanse() {
    return (
      <div>
        <div className="mov-night">
        <span className="header-bg-for-white"/>
          <Cards
            img={CodeCleanse}
            alt="Code Cleanse"
            title="Code Cleanse"
            date="Date: 09th March 2023"
            venue="Venue: CR-8"
            time="Time: 4::00 PM - 5:00 PM"
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
          />
        </div>
      </div>
    );
  };
  