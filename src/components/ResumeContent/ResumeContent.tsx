"use client";

import EducationItem from "@/components/EducationItem/EducationItem";
import ResumeItem from "@/components/ResumeItem/ResumeItem";
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
import img from "../../../public/assets/me.avif";

import Image from "next/image";
import React from "react";

interface Description {
  detail: string;
}

export interface Experience {
  name: string;
  time: string;
  company: string;
  link: string;
  description: Description[];
}
export interface Education {
  name: string;
  time: string;
  title: string;
  link: string;
  description: Description[];
}
const ExperienceList: Experience[] = [
  {
    name: "Front-End Developer (Full-stack Exposure)",
    time: "October 2024 - Now",
    company: "Softworld VietNam Ltd",
    link: "https://softworldvietnam.com/",
    description: [
      {
        detail:
          "Led frontend development across multiple enterprise systems spanning passenger e-commerce, loan contract management, retail operations with POS integration, and a B2B bidding and auction platform.",
      },
      {
        detail:
          "Defined frontend architecture, set coding standards, and reviewed merge requests across parallel projects to keep delivery consistent and unblock teammates.",
      },
      {
        detail:
          "Built reusable code bases and common components for a retail operations platform and a B2B procurement platform, enabling other team members to develop features faster on a shared foundation.",
      },
      {
        detail:
          "Implemented backend features for a loan contract management system using ASP.NET and PostgreSQL — REST APIs, database schema updates, and data flows for contracts, funding sources, and related entities.",
      },
      {
        detail:
          "Designed data models and built features on Microsoft Power Pages with Dataverse for the procurement platform's bidding and auction workflows.",
      },
      {
        detail:
          "Built an embeddable chatbot UI in a ChatGPT-style layout, plus a script-based widget that can be dropped into any website.",
      },
      {
        detail:
          "Built the admin dashboard frontend for a Camera AI attendance system covering employee check-in, vehicle tracking, and reporting.",
      },
      {
        detail:
          "Owned the SASCO passenger order flow across 9 sale types with i18n, dynamic content, GA4 tracking, and SEO optimization.",
      },
      {
        detail:
          "Rebuilt a corporate marketing site on WordPress with Elementor and applied technical SEO improvements.",
      },
      {
        detail:
          "Implemented Google Analytics (GA4) and Google Tag Manager across delivered sites and improved SEO performance from 20% to 100% through metadata, structured data, and performance tuning.",
      },
      {
        detail:
          "Mentored junior developers, conducted code reviews, and managed pull requests and merge conflicts to maintain code quality across teams.",
      },
    ],
  },
  {
    name: "Freelance Fullstack Web Developer",
    time: "August 2024 - October 2024",
    company: "Phu Yen Eye Hospital",
    link: "https://benhvienmatphuyen.vn/",
    description: [
      {
        detail:
          "Developed a responsive website for medical services, featuring an admin panel for managing blogs, doctors, medical news, and a client-facing site for reading content and scheduling appointments.",
      },
      {
        detail:
          "Implemented advanced SEO strategies that boosted organic traffic by over 200% and significantly improved search visibility that double the number of pages ranking on Google's first page.",
      },
    ],
  },
  {
    name: "Front-End Developer (Remote)",
    time: "November 2023 - September 2024",
    company: "AIARA Corporation (Korea)",
    link: "https://aiaracorp.com/",
    description: [
      {
        detail:
          "Collaborated with other team members to complete UI and implement functionalities for both website and mobile sections based on detailed design specifications.",
      },
      {
        detail:
          "Executed a content-driven and technical SEO strategy that boosted organic traffic by 200% and earned #1 positions on Google for several targeted, high-traffic keywords.",
      },
      {
        detail:
          "Managed and optimized 100+ pages, focusing on performance, accessibility, and reusable components.",
      },
      {
        detail:
          "Built a reusable component library to streamline development and ensure consistency.",
      },
    ],
  },
  {
    name: "Front-End Developer",
    time: "August 2022 - January 2023",
    company: "R2S Corporation",
    link: "https://r2s.com.vn",
    description: [
      {
        detail:
          "Developed a recruitment web application specializing in IT jobs, connecting job seekers with ideal opportunities and helping recruiters find qualified candidates.",
      },
      {
        detail:
          "Collaborated cross-functionally with Business Analysts, Backend Developers, and QA Testers to deliver optimized solutions and ensure smooth project execution.",
      },
    ],
  },
];
const EducationList: Education[] = [
  // {
  //   name: "Ielts Certification",
  //   time: "2020",
  //   title: "British Council",
  //   link: "https://github.com/nthieu1332002/certifications",
  //   description: [
  //     {
  //       detail: "Ielts 5.5",
  //     },
  //   ],
  // },
  {
    name: "Bachelor's Degree",
    time: "2020 - Jan 2024",
    title: "Software Engineering - FPT University",
    link: "https://github.com/nthieu1332002/certifications",
    description: [
      {
        detail:
          "Team-worked on a lot of projects for 3 years with skills such as presentation, software designing, requirement analysis,...",
      },
    ],
  },
];

const ResumeContent = () => {
  return (
    <>
      <div className="lg:relative lg:min-h-screen lg:h-full flex flex-col-reverse">
        <div className="pt-10 py-20 lg:w-1/2 lg:pt-28 lg:py-20">
          <div className="relative px-5 py-12">
            <h1 className="font-bold text-[4rem] lg:text-[6rem] text-white uppercase absolute left-0 top-[-50px] w-full opacity-[0.1] whitespace-no-wrap leading-[170px] text-center overflow-hidden pointer-events-none">
              resume
            </h1>
            <div>
              <div className="mb-10">
                <motion.h2
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="text-center section-title mb-5 md:text-left"
                >
                  <span className="text-primary-color">My</span> Experience
                </motion.h2>
                {ExperienceList.map((item, index) => {
                  return (
                    <ResumeItem
                      key={item.company}
                      name={item.name}
                      time={item.time}
                      company={item.company}
                      link={item.link}
                      description={item.description}
                      delay={index}
                    />
                  );
                })}
              </div>
              <div>
                <motion.h2
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="text-center section-title mb-5 md:text-left"
                >
                  <span className="text-primary-color">My</span> Education
                </motion.h2>
                {EducationList.map((item) => {
                  return (
                    <EducationItem
                      key={item.name}
                      name={item.name}
                      time={item.time}
                      title={item.title}
                      link={item.link}
                      description={item.description}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:fixed lg:right-0 lg:top-0 lg:w-1/2 h-full lg:h-screen lg:flex-1 bg-slate-600">
          <Image
            src={img}
            alt=""
            sizes="(max-width: 50px) 2vw, (max-width: 425px) 50vw, 75vw"
            quality={100}
            placeholder="blur"
            priority
            className="object-cover w-full h-auto aspect-video lg:h-full"
          />
        </div>
      </div>
    </>
  );
};

export default ResumeContent;
