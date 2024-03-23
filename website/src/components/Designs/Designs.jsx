import React, { useState, useRef } from "react";
import { DESIGN } from "./designs.js";
import "./Designs.css";
import FadeIn from "../FadeIn/FadeIn.jsx";

const Design = () => {
    // Hover for each img
    const [hoverIndex, setHoverIndex] = useState(null);
  const designsRef = useRef(null);

    // mouse enter event for each img
    const handleMouseEnter = (index) => {
        setHoverIndex(index);
    };

    // mouse leave event for each img
    const handleMouseLeave = () => {
        setHoverIndex(null);
    };

    // scrolling with mouse wheel
    const handleMouseWheel = (event) => {
        event.preventDefault();
        designsRef.current.scrollLeft += event.deltaY;
    };

    return (
        <FadeIn>
            <div className="page-center">
                <div className="designs-container" ref={designsRef} onWheel={handleMouseWheel}>
                <div className="legend">
                <p>Hover for start animation</p>
                <p>Hold left mouse to enlarge</p>
                </div>
                    {DESIGN.designs.designprojects.map((project, index) => (
                        <img
                            key={index}
                            src={hoverIndex === index ? project.gif : project.image}
                            alt="Design Image"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            className="design-image"
                        />
                        
                    ))}
                </div>
            </div>
        </FadeIn>
    );
};

export default Design;