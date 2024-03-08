import React from "react";
import { EXAMPLES } from "/Users/romanmnacek/Documents/Web Development Projects/UDEMY React/01-starting-project/src/data.js";

const AboutMe = ({ selectedTopic }) => {
  return (
    <div className="info">
      <h2>{EXAMPLES[selectedTopic].title}</h2>
      <br />
      <h3>{EXAMPLES[selectedTopic].school}</h3>
      <h4>{EXAMPLES[selectedTopic].field}</h4>
      <p>{EXAMPLES[selectedTopic].year}</p>
      <div id="aboutme">
        <p className="about">{EXAMPLES[selectedTopic].firstPart}</p>
        <p className="about-2">{EXAMPLES[selectedTopic].secPart}</p>
        <p className="about-3">{EXAMPLES[selectedTopic].thrdPart}</p>
      </div>
    </div>
  );
};

export default AboutMe;