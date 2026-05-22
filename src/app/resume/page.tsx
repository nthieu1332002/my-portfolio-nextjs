
import ResumeContent from "@/components/ResumeContent/ResumeContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Front-end Developer Experience & Education",
  description:
    "3+ years of professional experience as a Front-end Developer leading frontend architecture, building enterprise applications with React and Next.js, implementing SEO strategies, and developing backend features with Node.js and ASP.NET. Software Engineering graduate from FPT University.",
  alternates: {
    canonical: "/resume",
    languages: {
      en: "/en/resume",
    },
  },
};


const Resume = () => {
  return (
    <ResumeContent />
  );
};

export default Resume;
