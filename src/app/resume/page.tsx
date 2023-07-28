"use client";

import EducationItem from "@/components/EducationItem/EducationItem";
import ResumeItem from "@/components/ResumeItem/ResumeItem";
import TransitionEffect from "@/components/TransitionEffect/TransitionEffect";
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
        detail: "Ielts 5.5"
      }
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
      <div className="flex w-full h-full">
        <div className="content flex-1 pt-28 py-20  overflow-y-scroll no-scrollbar">
          <div className="relative px-5 py-12">
            <div className="font-bold text-[6rem] text-white uppercase absolute left-0 top-[-50px] w-full opacity-[0.1] whitespace-no-wrap leading-[170px] text-center overflow-hidden pointer-events-none">
              resume
            </div>
            <div className="flex gap-5">
              <div className="my-experience flex-1">
                <h2 className="section-title mb-5">
                  <span className="text-primary">My</span> Experience
                </h2>
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
              <div className="border-l-[1px]"></div>
              <div className="my-education flex-1">
                <h2 className="section-title mb-5">
                  <span className="text-primary">My</span> Education
                </h2>
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
          {/* <Skills/> */}
        </div>
        <div className="image-container flex-1 bg-slate-600">
          {/* <Image src={img} alt="" className="object-cover h-full" /> */}
        </div>
      </div>
    </>
  );
};

export default Resume;
