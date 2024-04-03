import React from "react";

const ProjectDetails = ({ project }) => {
  const projectLink = project.link;
  const projectUrl = project.url;

  const handleViewProject = () => {
    window.open(projectLink, "_blank");
  };

  const handleViewApp = () => {
    window.open(projectUrl, "_blank");
  };

  return (
    <div className="project-item">
      <br />
      <h3>{project.title}</h3>
      <p>{project.technologies.join(", ")}</p>
      {projectLink && (
        <>
          <button className="links" onClick={handleViewProject}>
            Source Code
          </button>
          {projectUrl && (
        <>
        <br />
          <button className="links" id="links-app" onClick={handleViewApp}>
            View App
          </button>
        </>
      )}

          <hr className="custom-hr" />
        </>
      )}
    </div>
  );
};

export default ProjectDetails;