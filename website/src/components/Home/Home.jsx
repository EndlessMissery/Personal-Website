import React, { useEffect, useState } from "react";
import { EXAMPLES } from "../../data.js";
import "./Home.css";

const Quote = () => {

  return (
    <div>
      <p className="quote">{EXAMPLES.home.quote}</p>
      <p className="author">- Marilyn Manson</p>
    </div>
  );
};

export default Quote;