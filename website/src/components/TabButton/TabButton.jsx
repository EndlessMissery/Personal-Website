import React from "react";
import "./TabButton.css";
import FadeIn from "../FadeIn/FadeIn";

const TabButton = ({ children, onSelect, isSelected }) => {
  return (
    <FadeIn>
      <li>
        <button
          className={`btn ${isSelected ? "active" : ""}`}
          onClick={onSelect}>
          {children}
        </button>
      </li>
    </FadeIn>
  );
};

export default TabButton;