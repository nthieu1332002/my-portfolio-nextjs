
import PortfolioContent from "@/components/PortfolioContent/PortfolioContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My portfolio",
  description:
    "Discover a collection of my frontend projects, showcasing creativity, technical expertise, and attention to detail. From responsive websites, interactive prototypes, to sleek user interfaces, each project demonstrates my ability to solve complex problems and deliver exceptional user experiences.",
    alternates: {
      canonical: '/portfolio',
      languages: {
        'en': '/en/portfolio',
      },
    },
};


const Portfolio = () => {
  return (
    <PortfolioContent/>
  );
};

export default Portfolio;
