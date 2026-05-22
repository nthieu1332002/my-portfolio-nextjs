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
    name: "Front-end Developer (Full-stack Exposure)",
    time: "October 2024 - Now",
    company: "Softworld VietNam Ltd",
    link: "https://softworldvietnam.com/",
    description: [
      {
        detail: "Led frontend development for enterprise and corporate web applications, delivering high-performance, responsive, and user-centric interfaces.",
      },
      {
        detail: "Defined frontend architecture and selected appropriate technology stacks to ensure scalability, maintainability, and long-term growth.",
      },
      {
        detail: "Established coding standards, reusable component patterns, and best practices to maintain consistency across projects.",
      },
      {
        detail: "Conducted code reviews, mentored junior developers, and guided implementation approaches to improve code quality and team productivity.",
      },
      {
        detail: "Managed pull requests, resolved merge conflicts, and ensured clean, structured integration into the codebase.",
      },
      {
        detail: "Developed and integrated RESTful APIs using ASP.NET to support dynamic data processing and system scalability.",
      },
      {
        detail: "Implemented Google Analytics (GA4) and Google Tag Manager to track user behavior and optimize conversion performance.",
      },
      {
        detail: "Improved SEO performance (20% → 100%) through technical optimizations, including metadata, structured data, and performance tuning.",
      },
      {
        detail: "Built and customized CMS-based solutions using WordPress (Elementor) and Microsoft Power Pages.",
      },
      {
        detail: "Worked with Dataverse to design and manage data-driven features for enterprise applications.",
      },
      {
        detail: "Collaborated cross-functionally with designers, backend developers, and stakeholders to deliver end-to-end solutions aligned with business goals.",
      },
    ],
  },
  {
    name: "Freelance Fullstack Web Developer",
    time: "Aug 2024 - Oct 2024",
    company: "Phu Yen Eye Hospital",
    link: "https://www.facebook.com/BVMPhuYen/",
    description: [
      {
        detail: "Developed a responsive website for medical services, featuring an admin panel for managing blogs, doctors, medical news, and a client-facing site for reading content and scheduling appointments.",
      },
      {
        detail:
          "Implemented advanced SEO strategies that boosted organic traffic by over 200% and significantly improved search visibility that double the number of pages ranking on Google's first page.",
      },
    ],
  },
  {
    name: "Front-End Developer (Remote)",
    time: "Nov 2023 - Sep 2024",
    company: "Aiara Corporation (Korea)",
    link: "https://aiaracorp.com/",
    description: [
      {
        detail: "Collaborated with other team members to complete UI and implement functionalities for both website and mobile sections based on detailed design specifications.",
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
    name: "Intern Front-end Developer",
    time: "Aug 2022 - Jan 2023",
    company: "R2S Corporation",
    link: "https://r2s.com.vn/",
    description: [
      {
        detail: "Responsible to build Admin page and main features.",
      },
      {
        detail:
          "Collaborate with creative and development teams on the execution of ideas.",
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
                      key={item.name}
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
            className="object-cover w-full h-auto aspect-video lg:h-full rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default ResumeContent;
