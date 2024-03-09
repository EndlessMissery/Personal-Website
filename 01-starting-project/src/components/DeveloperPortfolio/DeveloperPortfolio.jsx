import React, { useEffect, useState } from "react";
import "./DeveloperPortfolio.css";

const DeveloperPortfolio = ({ projects }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after the component mounts
    setIsVisible(true);
  }, []);

  const renderProjectsByDifficulty = (difficulty) => {
    return projects
      .filter((project) => project.difficulty === difficulty)
      .map((project, index) => (
        <div key={index} className={`project-item ${isVisible ? "fade-in" : ""}`}>
          <br />
          <h3>{project.title}</h3>
          <p>{project.technologies.join(", ")}</p>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="links">View Project</button>
              <hr className="custom-hr" />
            </a>
          )}
        </div>
      ));
  };

  return (
    <div className={`projects ${isVisible ? "fade-in" : ""}`}>
      <div className="difficulty-sections">
        <div className="difficulty-section">
          <h2 className="difficulty-name">Beginner</h2>
          <div className="scroll-container-beginner">
            {renderProjectsByDifficulty("Beginner")}
          </div>
        </div>
        <div className="difficulty-section">
          <h2 className="difficulty-name">Intermediate</h2>
          <div className="scroll-container-intermediate">
            {renderProjectsByDifficulty("Intermediate")}
          </div>
        </div>
        <div className="difficulty-section">
          <h2 className="difficulty-name">Expert</h2>
          <div className="scroll-container-expert">
            {renderProjectsByDifficulty("Expert")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperPortfolio;
