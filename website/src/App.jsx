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
import { ABOUT } from "./components/AboutMe/about.js";
import CustomCursor from "./components/CustomCursor/CustomCursor.jsx";








function App() {
  const [selectedTopic, setSelectedTopic] = useState(() => localStorage.getItem("selectedTopic") || "home");

  useEffect(() => {
    if (selectedTopic) localStorage.setItem("selectedTopic", selectedTopic);
  }, [selectedTopic]);

  const handleSelect = (selectedButton) => setSelectedTopic(selectedButton);

  const renderContent = () => {
    switch (selectedTopic) {
      case "portfolio":
        return <DeveloperPortfolio projects={PORTFOLIO.portfolio.projects} />;
      case "contact":
        return <ContactInfo contactData={CONTACT.contact} />;
      case "info":
        return <InfoComponent educations={EDUCATION.info.educations} />;
      case "about":
        return <AboutMe aboutData={ABOUT.about} />
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