
import ResumeContent from "@/components/ResumeContent/ResumeContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My resume",
  description:
    "Welcome to my resume page! I am a dedicated and motivated individual with industry experience gained through an internship at an Outsourcing company. I have also enhanced my skills through self-learning and practical application. Over time, my English proficiency has significantly improved, allowing me to communicate very well.",
  alternates: {
    canonical: "/resume",
    languages: {
      en: "/en/resume",
    },
  },
};


const Resume = () => {
  return (
    <ResumeContent/>
  );
};

export default Resume;
