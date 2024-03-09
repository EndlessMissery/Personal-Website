import React, { useEffect, useState } from "react";
import "./InfoComponent.css";

const InfoComponent = ({ educations }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const renderEducationByLevel = (level) => {
    return educations
      .filter((education) => education.level === level)
      .map((education, index) => (
        <div key={index} className={`education-item ${isVisible ? "fade-in" : ""}`}>
          <br />
          <h3>{education.school}</h3>
          <h4>{Array.isArray(education.field) ? education.field.join(", ") : education.field}</h4>
          <p>{education.year}</p>
        </div>
      ));
  };

  return (
    <div className={`educations ${isVisible ? "fade-in" : ""}`}>
      <div className="level-sections">
        <div className="level-section">
          <h2 className="level-name">College</h2>
          {renderEducationByLevel("College")}
        </div>
        <div className="level-section">
          <h2 className="level-name">High School</h2>
          <p className="field">{educations.field}</p>
          {renderEducationByLevel("High school")}
          </div>
      </div>
      
    </div>
    
  );
};

export default InfoComponent;