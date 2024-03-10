import React, { useEffect, useState } from "react";
import { EXAMPLES } from "../../data.js";
import "./Home.css";
import FadeIn from "../FadeIn/FadeIn.jsx";

const Quote = () => {

  return (
    <FadeIn>
      <div>
        <p className="quote">{EXAMPLES.home.quote}</p>
        <p className="author">- Marilyn Manson</p>
      </div>
    </FadeIn>
  );
};

export default Quote;