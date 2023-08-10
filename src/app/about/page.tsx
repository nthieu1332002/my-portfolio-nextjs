import React from "react";

import { Metadata } from "next";
import AboutContent from "@/components/AboutContent/AboutContent";

export const metadata: Metadata = {
  title: "About me",
  description:
    "I'm Trung Hieu, a frontend developer with years of experience. Skilled in HTML, CSS, JavaScript, and various frameworks, I creates visually appealing and user-friendly websites. Learn more about my skills.",
    alternates: {
      canonical: '/about',
      languages: {
        'en': '/en/about',
      },
    },
};

const About = () => {
  return (
    <AboutContent />
  );
};

export default About;
