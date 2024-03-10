import React from "react";
import { EXAMPLES } from "../../data.js";
import "./AboutMe.css"; // Import the CSS file for styling
import FadeIn from "../FadeIn/FadeIn.jsx";

const AboutMe = ({ selectedTopic }) => {
  return (
    <FadeIn>
      <div id="aboutme" key={selectedTopic}>
        <p className="about">{EXAMPLES[selectedTopic].firstPart}</p>
        <p className="about-2">{EXAMPLES[selectedTopic].secPart}</p>
        <p className="about-3">{EXAMPLES[selectedTopic].thrdPart}</p>
      </div>
    </FadeIn>
  );
};

export default AboutMe;