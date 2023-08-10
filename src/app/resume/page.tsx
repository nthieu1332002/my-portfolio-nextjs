"use client"

import EducationItem from "@/components/EducationItem/EducationItem";
import ResumeItem from "@/components/ResumeItem/ResumeItem";
import TransitionEffect from "@/components/TransitionEffect/TransitionEffect";
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
import img from "../../../public/assets/me.avif";

import Image from "next/image";
import React from "react";
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
    name: "Intern Front-end Developer",
    time: "Aug, 2022 - Jan, 2023",
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
  {
    name: "Ielts Certification",
    time: "2020",
    title: "British Council",
    link: "https://github.com/nthieu1332002/certifications",
    description: [
      {
        detail: "Ielts 5.5",
      },
    ],
  },
  {
    name: "Bachelor's Degree",
    time: "2020 - 2023",
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
const Resume = () => {
  return (
    <>
      <TransitionEffect />
      <div className="lg:relative lg:min-h-screen lg:h-full flex flex-col-reverse">
        <div className="pt-10 py-20 lg:w-1/2 lg:pt-28 lg:py-20">
          <div className="relative px-5 py-12">
            <div className="font-bold text-[4rem] lg:text-[6rem] text-white uppercase absolute left-0 top-[-50px] w-full opacity-[0.1] whitespace-no-wrap leading-[170px] text-center overflow-hidden pointer-events-none">
              resume
            </div>
            <div className="md:flex md:gap-5">
              <div className="flex-1">
                <motion.h2
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="text-center section-title mb-5 md:text-left"
                >
                  <span className="text-primary">My</span> Experience
                </motion.h2>
                {ExperienceList.map((item) => {
                  return (
                    <ResumeItem
                      key={item.name}
                      name={item.name}
                      time={item.time}
                      company={item.company}
                      link={item.link}
                      description={item.description}
                    />
                  );
                })}
              </div>
              <div className="invisible md:visible border-l-[1px]"></div>
              <div className="flex-1">
                <motion.h2
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="text-center section-title mb-5 md:text-left"
                >
                  <span className="text-primary">My</span> Education
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
            quality={60}
            placeholder="blur"
            priority
            className="object-cover w-full h-auto aspect-video lg:h-full rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default Resume;
