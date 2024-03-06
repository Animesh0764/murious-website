import React from "react";
import Cards from "./Cards/Cards";
import "./EventPages.css";
import Make from "../images/mainevents/makeitprintposter.webp";
import Make1 from "./images/MakeItPrint/DSC_0811.webp";
import Make2 from "./images/MakeItPrint/DSC_0813.webp";
import Make3 from "./images/MakeItPrint/DSC_0814.webp";
import Make4 from "./images/MakeItPrint/DSC_0815.webp";
import Make5 from "./images/MakeItPrint/DSC_0816.webp";


export default function Expanse() {
    return (
      <div>
        <div className="mov-night">
        <span className="header-bg-for-white"/>
          <Cards
            img={Make}
            alt="Make It Print"
            title="Make It Print"
            date="Date: 8th March 2023"
            venue="Venue: CR-4"
            time="Time: 5:30PM - 6:30PM"
            about="Get creative with 'make it
            print'! design unique prints for
            t-shirts or hoodies based on
            given topics.
            submit your design for a
            chance to win, with the
            winning design printed on a
            hoodie. don't miss this
            opportunity to showcase your
            creativity and wear your own
            artwork!"
            img1={Make1}
            alt1="Image"
            img2={Make2}
            alt2="Image"
            img3={Make5}
            alt3="Image"
            img4={Make4}
            alt4="Image"
            img5={Make3}
            alt5="Image"
          />
        </div>
      </div>
    );
  };
  