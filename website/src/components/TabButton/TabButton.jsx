import React from "react";
import "./TabButton.css";

const TabButton = ({ children, onSelect, isSelected }) => {
  return (
    <li>
      <button
        className={isSelected ? "active" : undefined}
        onClick={onSelect}
        data-testid="tab-button"
      >
        {children}
      </button>
    </li>
  );
};

export default TabButton;