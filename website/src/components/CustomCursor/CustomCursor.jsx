import React, { useState, useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updateCursorPosition = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div className="custom-cursor" style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
  );
};

export default CustomCursor;