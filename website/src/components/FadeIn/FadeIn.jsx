import React, { useEffect, useState } from "react";

const FadeIn = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);

    return () => {
      setIsVisible(false);
    };
  }, []);

  return (
    <div className={`fade ${isVisible ? "fade-in" : ""}`}>
      {isVisible && children}
    </div>
  );
};

export default FadeIn;