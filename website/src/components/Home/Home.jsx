import React, { useEffect, useState } from "react";
import { EXAMPLES } from "../../data.js";
import "./Home.css";

const Quote = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after the component mounts
    setIsVisible(true);
  }, []);

  return (
    <p className={`quote ${isVisible ? "fade-in" : ""}`}>{EXAMPLES.home.quote}</p>
  );
};

export default Quote;