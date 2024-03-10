import React from "react";
import { ABOUTME } from "./about.js";
import "./AboutMe.css";
import FadeIn from "../FadeIn/FadeIn.jsx";

const AboutMe = () => {
  return (
    <FadeIn>
      <div id="aboutme">
        <p className="about">{ABOUTME.about.firstPart}</p>
        <p className="about-2">{ABOUTME.about.secPart}</p>
        <p className="about-3">{ABOUTME.about.thrdPart}</p>
      </div>
    </FadeIn>
  );
};

export default AboutMe;