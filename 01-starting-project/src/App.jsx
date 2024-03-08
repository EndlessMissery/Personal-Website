import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import DeveloperPortfolio from "./components/DeveloperPortfolio/DeveloperPortfolio.jsx";
import ContactInfo from "./components/ContactInfo/ContactInfo.jsx";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import "./styles/home.css";
import "./components/DeveloperPortfolio/DeveloperPortfolio.css";
import "./components/Designs/Designs.css";
import "./components/AboutMe/AboutMe.css";
import "./components/ContactInfo/ContactInfo.css";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  useEffect(() => {
    const storedSelectedTopic = localStorage.getItem("selectedTopic");
    if (storedSelectedTopic) {
      setSelectedTopic(storedSelectedTopic);
    }
  }, []);

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    localStorage.setItem("selectedTopic", selectedButton);
  }

  return (
    <div>
      <Header />
      <div className="verticalline"></div>
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
        {selectedTopic && (
          <div id="tab-content">
            {selectedTopic === "portfolio" && (
              <DeveloperPortfolio projects={EXAMPLES.portfolio.projects} />
            )}
            {selectedTopic === "contact" && <ContactInfo />}
            {(selectedTopic !== "portfolio" && selectedTopic !== "contact") && (
              <AboutMe selectedTopic={selectedTopic} />
            )}
          </div>
        )}
      </section>
    </div>
  );
}

export default App;