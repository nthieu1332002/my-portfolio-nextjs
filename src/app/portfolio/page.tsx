
import PortfolioContent from "@/components/PortfolioContent/PortfolioContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Web Projects & Full-stack Applications",
  description:
    "Explore my web development projects featuring React, Next.js, and Node.js applications. From enterprise platforms with SEO optimization to full-stack apps with REST APIs and database integration — each project demonstrates scalable architecture and polished user interfaces.",
  alternates: {
    canonical: "/portfolio",
    languages: {
      en: "/en/portfolio",
    },
  },
};


const Portfolio = () => {
  return (
    <PortfolioContent />
  );
};

export default Portfolio;
