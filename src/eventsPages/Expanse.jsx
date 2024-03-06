import React from "react";
import Cards from "./Cards/Cards";
import "./EventPages.css";
import Expanse0 from "../images/mainevents/expanceposter.webp";
import Expance1 from "./images/Expanse/DSC_0018.webp";
import Expance2 from "./images/Expanse/DSC_0071.webp";
import Expance3 from "./images/Expanse/DSC_0084.webp";
import Expance4 from "./images/Expanse/IMG_2886.webp";
import Expance5 from "./images/Expanse/IMG_2932.webp";


export default function Expanse() {
    return (
      <div>
        <div className="mov-night">
        <span className="header-bg-for-white"/>
          <Cards
            img={Expanse0}
            alt="Expanse"
            title="Expanse 3.0"
            date="Date: 8th - 9th March 2023"
            venue="Venue: LT-1,2,3"
            time="Time: 5:00PM"
            about="The expanse,
            most awaited event of murious.
            a 18-hours long hackathon where
            juitians will come together in
            teams of 2-4 members to create
            solution on real life problems.
            let's sit, play, eat, chill and work
            to create
            the best we can.
            "
            img1={Expance1}
            alt1="Image"
            img2={Expance2}
            alt2="Image"
            img3={Expance3}
            alt3="Image"
            img4={Expance4}
            alt4="Image"
            img5={Expance5}
            alt5="Image"
          />
        </div>
      </div>
    );
  };
  