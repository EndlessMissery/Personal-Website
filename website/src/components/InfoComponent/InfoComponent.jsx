import React from "react";
import "./InfoComponent.css";
import FadeIn from "../FadeIn/FadeIn";



const InfoComponent = ({ educations }) => {
  const renderEducationByLevel = (level) => {
    return educations
      .filter((education) => education.level === level)
      .map((education, index) => (
        <div key={index} className="education-item">
          <br />
          <h3>{education.school}</h3>
          <h4>{Array.isArray(education.field) ? education.field.join(", ") : education.field}</h4>
          <p>{education.year}</p>
        </div>
      ));
  };

  return (
    <FadeIn>
      <div className="educations">
        <div className="level-sections">
          <div className="level-section">
            <h2 className="level-name">College</h2>
            {renderEducationByLevel("College")}
          </div>
          <div className="level-section">
            <h2 className="level-name">High School</h2>
            {renderEducationByLevel("High school")}
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default InfoComponent;