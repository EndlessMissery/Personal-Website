import React from "react";

const ProjectDetails = ({ project }) => {
  const projectLink = project.link;

  const handleViewProject = () => {
    window.open(projectLink, "_blank");
  };

  return (
    <div className="project-item">
      <br />
      <h3>{project.title}</h3>
      <p>{project.technologies.join(", ")}</p>
      {projectLink && (
        <>
          <button className="links" onClick={handleViewProject}>
            View Project
          </button>
          <hr className="custom-hr" />
        </>
      )}
    </div>
  );
};

export default ProjectDetails;
