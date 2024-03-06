import React from "react";
import Cards from "./Cards/Cards";
import "./EventPages.css";
import Image1 from "../images/IMG_5187.JPG";

export default function Expanse() {
  return (
    <div>
      <div className="mov-night">
        <span className="header-bg-for-white" />
        <Cards
          img={Image1}
          alt="InterFace Invent"
          title="InterFace Invent"
          date="Date: 12th March 2021"
          venue="Venue: XXX"
          time="Time: XXX"
          about="Step into the realm of digital
            design with 'ui/ux showdown' –
            an electrifying event that
            challenges your
            creativity,innovation, and usercentric thinking! in this
            exhilarating competition,
            participants will harness the
            power of design tools like
            figma, photoshop, or any other
            platform to craft stunning
            ui/ux designs on given topics.
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
