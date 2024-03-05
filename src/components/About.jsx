import React, { useState } from "react";
import "../../public/css/About.css";

function AboutPage() {
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(1);
  const [activeContent, setActiveContent] = useState("MURIOUS 18.0");

  const handleStepClick = (stepNumber, content) => {
    setActiveStep(stepNumber);
    setProgress((stepNumber / 3) * 100); // Assuming you have 3 steps
    setActiveContent(content);
  };

  return (
    <div>
      <h1 className="about-heading">About</h1>
      <br />
      <div className="process-wrapper">
        <div id="progress-bar-container">
          <ul>
            <li
              className={`step step02 ${activeStep >= 1 ? "active" : ""}`}
              onClick={() => handleStepClick(1, "MURIOUS 18.0")}
            >
              <div className="step-inner-about">MURIOUS 18.0</div>
            </li>
            <li
              className={`step step03 ${activeStep >= 2 ? "active" : ""}`}
              onClick={() =>
                handleStepClick(
                  2,
                  "TECHNICAL SCIENCES, MOVIES & PHOTOGRAPHY CLUB"
                )
              }
            >
              <div className="step-inner-about">
                TECHNICAL SCIENCES, MOVIES & PHOTOGRAPHY CLUB{" "}
              </div>
            </li>
            <li
              className={`step step04 ${activeStep >= 3 ? "active" : ""}`}
              onClick={() => handleStepClick(3, "JUIT YOUTH CLUB")}
            >
              <div className="step-inner-about">JUIT YOUTH CLUB</div>
            </li>
          </ul>

          <div id="line">
            <div id="line-progress" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        <div id="progress-content-section">
          <div
            className={`section-content strategy ${
              activeContent === "MURIOUS 18.0" ? "active" : ""
            }`}
          >
            <h2>MURIOUS 18.0</h2>
            <p>
              “TAKE THE JOURNEY, SOAR LIKE AN EAGLE, THERE ARE SO MANY ROADS TO
              EXPLORE SO LITTLE". PRESENTING TO YOU AN EXPERIENCE LIKE NEVER
              BEFORE, "MURIOUS: THE THREE DAYS PANORAMA" THE TMP CLUB AT JUIT IS
              GETTING READY FOR A BIG TECHNICAL FESTIVAL THAT'S MORE THAN JUST
              AN EVENT; IT'S A MIX OF EXCITEMENT AND BRAINPOWER. THERE'LL BE
              LOTS OF TECH STUFF TO SEE AND DO, LIKE SHOWS AND DEMOS THAT'LL
              MAKE YOU THINK. AND DON'T WORRY, IT'S NOT ALL SERIOUS – THERE'LL
              BE FUN STUFF TOO, LIKE DESIGNING,HACKATHON, AND GAMING CONTESTS.
              BASICALLY, IT'S GOING TO BE A SUPER FUN CELEBRATION OF TECH AND
              CREATIVITY!
            </p>
            <div className="about-button-container">
              <a
                href="https://drive.google.com/file/d/1r5JNhxLxneqJfImbtS2_ROxxe4Pyay3t/view?usp=sharing"
                target="_blank"
                className="drive-button"
              >
                Brochure
              </a>
              <a
                href="https://www.instagram.com/murious.juit/"
                target="_blank"
                className="drive-button"
              >
                Follow us here
              </a>
            </div>
          </div>

          <div
            className={`section-content creative ${
              activeContent === "TECHNICAL SCIENCES, MOVIES & PHOTOGRAPHY CLUB"
                ? "active"
                : ""
            }`}
          >
            <h2>TECHNICAL SCIENCES, MOVIES & PHOTOGRAPHY CLUB</h2>
            <p>
              CLUB, with a composition of Movies, Photography and 'Createch :
              The technical Club of JUIT. This Club comes with a complete
              package of promoting overall growth, leadership, innovation, and
              creativity in all forms. With every passing day, it is creating
              more learning opportunities for students in creative field
              including videography, photography, coding, design-softwares like
              photoshop, etc. From dealing with all events photography to
              organizing boot camps, is another crucial part of this club.
              Including all features, it comes with an add-on perk of
              telecasting cricket matches and movies for students.
            </p>
            <div className="about-button-container">
              <a
                href="https://www.instagram.com/jyc.technical.club/"
                target="_blank"
                className="drive-button"
              >
                Follow us here
              </a>
            </div>
          </div>

          <div
            className={`section-content production ${
              activeContent === "JUIT YOUTH CLUB" ? "active" : ""
            }`}
          >
            <h2>JUIT YOUTH CLUB</h2>
            <p>
              JUIT Youth Club (JYC) is the name of enthusiasm, development,
              consistency and effort. It is the body which widens student's view
              from academics to various fields such as sports, literary,
              cultural and technical and provides opportunity to explore them.
              It encourages in student's expression, celebration, recognition
              and integration. It helps students acquire qualities like team
              work, sportsmanship and leadership. Not only this, it retreats
              students from academics load by organizing events, fests and other
              extra-curricular activities. Focusing on technical, literary,
              sports, and cultural scopes these competitive activities, apart
              from serving as a relief from intense academic load, present an
              opportunity to instill confidence, encourage teamwork and give
              students a strong sense of achievement and belonging
            </p>
            <div className="about-button-container">
              <a href="https://jyc.co.in/" className="drive-button">
                Know More
              </a>
              <a
                href="https://www.instagram.com/jyc.juit/"
                target="_blank"
                className="drive-button"
              >
                Follow us here
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
