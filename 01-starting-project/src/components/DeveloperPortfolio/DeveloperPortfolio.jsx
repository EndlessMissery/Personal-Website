import React from "react";

const DeveloperPortfolio = ({ projects }) => {
  const renderProjectsByDifficulty = (difficulty) => {
    return projects
      .filter((project) => project.difficulty === difficulty)
      .map((project, index) => (
        <div key={index}>
          <br />
          <h3>{project.title}</h3>
          <p>{project.technologies.join(", ")}</p>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button id="links">View Project</button>
            </a>
          )}
        </div>
      ));
  };

  return (
    <div className="projects">
      <div className="difficulty-sections">
        <div className="beginner">
          <h2>Beginner</h2>
          {renderProjectsByDifficulty("Beginner")}
        </div>
        <div className="intermediate">
          <h2>Intermediate</h2>
          {renderProjectsByDifficulty("Intermediate")}
        </div>
        <div className="expert">
          <h2>Expert</h2>
          {renderProjectsByDifficulty("Expert")}
        </div>
      </div>
    </div>
  );
};

export default DeveloperPortfolio;