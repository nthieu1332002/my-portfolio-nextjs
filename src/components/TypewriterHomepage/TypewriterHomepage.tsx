'use client'

import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypewriterHomepage = () => {
  return (
    <Typewriter
      words={[
        "Software Engineer.",
        "Front-end Developer.",
        "Back-end Developer.",
        "Full-Stack Developer.",
        "Mobile Developer.",
      ]}
      loop={5}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  );
};

export default TypewriterHomepage;
