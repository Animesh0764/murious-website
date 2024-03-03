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
            alt="Code Relay"
            title="Code Relay"
            date="Date: 12th March 2021"
            venue="Venue: XXX"
            time="Time: XXX"
            about="This event is a unique and exciting
            competition that combines
            elements of relay race and
            problem-solving. it is open to all
            participants and teams consist of
            4 members. Each team member will
            solve one quarter of the problem
            before passing on a baton,
            represented by a mouse and pen, to
            the next team member. The first
            team to solve all the problems
            wins the competition.
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
  