import {useState} from "react";
import {EXAMPLES} from "./data.js"
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";


function App() {
  const [selectedTopic, setSelectedTopic] = useState();


  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    tabContent = selectedButton;
  }

  let tabContent = <p></p>

    if (selectedTopic) {
      tabContent = (
        <div id="tab-content">
          <h1>{EXAMPLES[selectedTopic].education}</h1>
          <h2>{EXAMPLES[selectedTopic].title}</h2>
          <br />
          <h3>{EXAMPLES[selectedTopic].school}</h3>
          <h4>{EXAMPLES[selectedTopic].field}</h4>
          <p>{EXAMPLES[selectedTopic].year}</p>
          <p className="quote">{EXAMPLES[selectedTopic].paragraph}</p>
          <p className="first-part">{EXAMPLES[selectedTopic].firstPart}</p>
          <p className="sec-part">{EXAMPLES[selectedTopic].secPart}</p>
          <p className="thrd-part">{EXAMPLES[selectedTopic].thrdPart}</p>
          <pre>
            <code>
            </code>
          </pre>
        </div>
      )
    }

  return (
    <div>
      <Header />

        <section id="examples">
          <menu>
            <TabButton 
              isSelected={selectedTopic === "home"}
              onSelect={() => handleSelect("home")}>
              Home
            </TabButton>
            <br />
            <TabButton 
              isSelected={selectedTopic === "portfolio"}
              onSelect={() => handleSelect("portfolio")}>
              Portfolio
            </TabButton>
            <br />
            <TabButton 
              isSelected={selectedTopic === "about"}
              onSelect={() => handleSelect("about")}>
              About me
            </TabButton>
            <br />
            <TabButton 
              isSelected={selectedTopic === "info"}
              onSelect={() => handleSelect("info")}>
              Info
            </TabButton>
            <br />
            <TabButton 
              isSelected={selectedTopic === "contact"}
              onSelect={() => handleSelect("contact")}>
              Contact
            </TabButton>
          </menu>
          {tabContent}
        </section>
    </div>
  );
}

export default App;

