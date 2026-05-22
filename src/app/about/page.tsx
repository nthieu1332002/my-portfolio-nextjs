import React from "react";

import { Metadata } from "next";
import AboutContent from "@/components/AboutContent/AboutContent";

export const metadata: Metadata = {
  title: "About Me | Front-end Developer with Full-stack Capabilities",
  description:
    "Front-end Developer with 3+ years of experience building enterprise web applications. Expert in React, Next.js, TypeScript, and modern CSS frameworks. Capable of developing backend services with Node.js, Express, and MongoDB to deliver end-to-end solutions.",
  alternates: {
    canonical: "/about",
    languages: {
      en: "/en/about",
    },
  },
};

const About = () => {
  return (
    <AboutContent />
  );
};

export default About;
