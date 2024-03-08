import React, { useState, useEffect } from "react";
import { EXAMPLES } from "./data.js";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import "./projects.css"

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  useEffect(() => {
    // Retrieve the selected tab from localStorage on component mount
    const storedSelectedTopic = localStorage.getItem("selectedTopic");
    if (storedSelectedTopic) {
      setSelectedTopic(storedSelectedTopic);
    }
  }, []);


  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    // Save the selected tab to localStorage
    localStorage.setItem("selectedTopic", selectedButton);
  }

  

  function renderProjectsByDifficulty(difficulty) {
    if (selectedTopic === "portfolio") {
      return EXAMPLES.portfolio.projects
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
    } else if (selectedTopic === "contact") {
      return (
        <div>
          <h2>Contact Information</h2>
          <p>Email: {EXAMPLES.contact.email}</p>
          <p>Phone: {EXAMPLES.contact.phone}</p>
          <p>LinkedIn: {EXAMPLES.contact.linkedin}</p>
          <p>GitHub: {EXAMPLES.contact.github}</p>
        </div>
      );
    }

    return null;
  }


  let tabContent = null;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        {selectedTopic === "portfolio" && (
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
        )}

        {selectedTopic !== "portfolio" && selectedTopic !== "contact" && (
          <div className="info">
            <h2>{EXAMPLES[selectedTopic].title}</h2>
            <br />
            <h3>{EXAMPLES[selectedTopic].school}</h3>
            <h4>{EXAMPLES[selectedTopic].field}</h4>
            <p>{EXAMPLES[selectedTopic].year}</p>
            <p className="quote">{EXAMPLES[selectedTopic].paragraph}</p>
            <div id="aboutme">
              <p className="about">{EXAMPLES[selectedTopic].firstPart}</p>
              <p className="about-2">{EXAMPLES[selectedTopic].secPart}</p>
              <p className="about-3">{EXAMPLES[selectedTopic].thrdPart}</p>
            </div>
          </div>
        )}

        {selectedTopic === "contact" && (
          <div className="contact-info">
            {renderProjectsByDifficulty()}
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <Header />

      <section id="examples">
        <menu>
          <TabButton
            isSelected={selectedTopic === "home"}
            onSelect={() => handleSelect("home")}
          >
            Home
          </TabButton>
          <br />
          <TabButton
            isSelected={selectedTopic === "portfolio"}
            onSelect={() => handleSelect("portfolio")}
          >
            Developer Portfolio
          </TabButton>
          <br />
          <TabButton
            isSelected={selectedTopic === "design"}
            onSelect={() => handleSelect("design")}
          >
            Designs
          </TabButton>
          <br />
          <TabButton
            isSelected={selectedTopic === "about"}
            onSelect={() => handleSelect("about")}
          >
            About Me
          </TabButton>
          <br />
          <TabButton
            isSelected={selectedTopic === "info"}
            onSelect={() => handleSelect("info")}
          >
            Info
          </TabButton>
          <br />
          <TabButton
            isSelected={selectedTopic === "contact"}
            onSelect={() => handleSelect("contact")}
          >
            Contact
          </TabButton>
        </menu>
        {tabContent}
      </section>
    </div>
  );
}

export default App;