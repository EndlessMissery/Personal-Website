import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import DeveloperPortfolio from "./components/DeveloperPortfolio/DeveloperPortfolio.jsx";
import ContactInfo from "./components/ContactInfo/ContactInfo.jsx";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import InfoComponent from "./components/InfoComponent/InfoComponent.jsx";
import { EDUCATION } from "./components/InfoComponent/education.js";
import { PORTFOLIO } from "./components/DeveloperPortfolio/portfolio.js";
import { CONTACT } from "./components/ContactInfo/contact.js";
import Design from "./components/Designs/Designs.jsx";
import CustomCursor from "./components/CustomCursor/CustomCursor.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("home");

  useEffect(() => {
    // Retrieve the selected from localStorage
    const storedTopic = localStorage.getItem("selectedTopic");
    if (storedTopic) {
      setSelectedTopic(storedTopic);
    }
  }, []);

  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton);
    // Store in localStorage
    localStorage.setItem("selectedTopic", selectedButton);
  };

  const renderContent = () => {
    switch (selectedTopic) {
      case "portfolio":
        return <DeveloperPortfolio projects={PORTFOLIO.portfolio.projects} />;
      case "designs":
        return <Design />;
      case "contact":
        return <ContactInfo contacts={CONTACT.contactlist.contacts} />;
      case "education":
        return <InfoComponent educations={EDUCATION.info.edu} />;
      case "about me":
        return <AboutMe />;
      default:
        return null;
    }
  };

  return (
    <div>
      <CustomCursor />
      <Header />
      <div className="verticalline"></div>
      <section id="examples">
        <menu>
          {["home", "portfolio", "designs", "about me", "education", "contact"].map((topic) => (
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
