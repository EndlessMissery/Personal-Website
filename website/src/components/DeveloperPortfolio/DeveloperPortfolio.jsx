import React from "react";
import "./DeveloperPortfolio.css";
import ProjectDetails from "./ProjectDetails/ProjectDetails.jsx";
import FadeIn from "../FadeIn/FadeIn.jsx";

const DeveloperPortfolio = ({ projects }) => {
  const renderProjectsByDifficulty = (difficulty) => {
    const filteredProjects = projects.filter((project) => project.difficulty === difficulty);

    return filteredProjects.map((project, index) => (
      <ProjectDetails key={index} project={project} />
    ));
  };

  return (
    <FadeIn>
      <div className="projects">
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
    </FadeIn>
  );
};

export default DeveloperPortfolio;