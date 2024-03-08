import React from "react";
import { EXAMPLES } from "/Users/romanmnacek/Documents/Web Development Projects/UDEMY React/01-starting-project/src/data.js";

const Quote = ({ quote }) => {
    return (
        <p className="quote">{EXAMPLES[quote].quote}</p>
    )}

export default Quote