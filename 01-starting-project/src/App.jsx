import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import DeveloperPortfolio from "./components/DeveloperPortfolio/DeveloperPortfolio.jsx";
import ContactInfo from "./components/ContactInfo/ContactInfo.jsx";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import { EXAMPLES } from "./data.js";
import "./components/Home/Home.css";
import "./components/DeveloperPortfolio/DeveloperPortfolio.css";
import "./components/Designs/Designs.css";
import "./components/AboutMe/AboutMe.css";
import "./components/ContactInfo/ContactInfo.css";

function App() {
  const [selectedTopic, setSelectedTopic] = useState(() => localStorage.getItem("selectedTopic"));

  useEffect(() => {
    if (selectedTopic) localStorage.setItem("selectedTopic", selectedTopic);
  }, [selectedTopic]);

  const handleSelect = (selectedButton) => setSelectedTopic(selectedButton);

  const renderContent = () => {
    switch (selectedTopic) {
      case "portfolio":
        return <DeveloperPortfolio projects={EXAMPLES.portfolio.projects} />;
      case "contact":
        return <ContactInfo />;
      default:
        return <AboutMe selectedTopic={selectedTopic} />;
    }
  };

  return (
    <div>
      <Header />
      <div className="verticalline"></div>
      <section id="examples">
        <menu>
          {["home", "portfolio", "design", "about", "info", "contact"].map((topic) => (
            <React.Fragment key={topic}>
              <TabButton
                isSelected={selectedTopic === topic}
                onSelect={() => handleSelect(topic)}>
                {topic.charAt(0).toUpperCase() + topic.slice(1)}
              </TabButton>
              <br />
            </React.Fragment>
          ))}
        </menu>
        {selectedTopic && <div id="tab-content">{renderContent()}</div>}
      </section>
    </div>
  );
}

export default App;
