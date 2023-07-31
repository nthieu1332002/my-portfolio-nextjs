"use client";

import AnimatedNumber from "@/components/AnimatedNumber/AnimatedNumber";
import ProjectContainer from "@/components/ProjectContainer/ProjectContainer";
import TransitionEffect from "@/components/TransitionEffect/TransitionEffect";
import React, { useEffect, useState } from "react";
import { PiFire } from "react-icons/pi";
import { SlPeople, SlCup } from "react-icons/sl";
import imiu from "../../../public/assets/imiu.png";
import safebuilding from "../../../public/assets/safebuilding.png";
import safebuilding1 from "../../../public/assets/safebuilding1.png";
import ketchat from "../../../public/assets/ketchat.png";
import portfolioold from "../../../public/assets/portfolioold.png";
import portfolioold1 from "../../../public/assets/portfolioold1.png";
import thehstore from "../../../public/assets/thehstore.png";

import hmovie from "../../../public/assets/hmovie.png";
import { AnimatePresence, motion } from "framer-motion";
import { StaticImageData } from "next/image";
import ProjectModal from "@/components/ProjectModal/ProjectModal";
import ProjectNavBar from "@/components/ProjectNavBar/ProjectNavBar";

interface Detail {
  detailItem: string;
}

export interface Project {
  id: number;
  name: string;
  member: string;
  img: StaticImageData;
  type: string;
  time: string;
  detail: Detail[];
  repository: string;
  demo: string;
}

const ProjectNavList = [
  {
    id: 1,
    name: "Everything",
  },
  {
    id: 2,
    name: "Application",
  },
  {
    id: 3,
    name: "UI Design",
  },
  {
    id: 4,
    name: "API",
  },
  {
    id: 5,
    name: "Ecommerce",
  },
];

const ProjectList: Project[] = [
  {
    id: 1,
    name: "IMIU Web",
    member: "Group project",
    img: imiu,
    type: "Application, API",
    time: "Mar 2023 - June 2023",
    detail: [
      {
        detailItem:
          "Application about Food/Cooking, supply recipes, nutrition, how to cook...",
      },
      {
        detailItem:
          "My responsibility: Leader - take the main responsibility in team, manage team's work progress, plan to design database, features, requirements, UI,... Anh develop features's application.",
      },
      {
        detailItem:
          "Development team consists of 3 teams: Backend, Web and Mobile (Flutter).",
      },
      {
        detailItem:
          "Technologies: ReactJs, SCSS, Redux Toolkit, RTK Query, Ant Design, Firebase, React-Chart,...",
      },
    ],
    repository: "https://github.com/LeNPhu/imiu-web",
    demo: "https://imiu-web.vercel.app/",
  },
  {
    id: 2,
    name: "Safe Building",
    member: "Group project",
    img: safebuilding,
    type: "Application, UI Design, API",
    time: "Jan 2023 - Apr 2023",
    detail: [
      {
        detailItem:
          "Class Project to manage revenue, residents, contracts,.. of apartments.",
      },
      {
        detailItem:
          "My responsibility: Leader - take the main responsibility in team, manage team's work progress, plan to design database, features, requirements, UI,... Setup and build base code for web team.",
      },
      {
        detailItem:
          "Development team consists of 3 teams: Backend, Web and Mobile (Flutter).",
      },
      {
        detailItem:
          "Technologies: ReactJs, Typescript, SCSS, Redux Toolkit, Ant Design, Firebase, Recharts,...",
      },
    ],
    repository: "https://github.com/nthieu1332002/Safe-Building-Web-TS-Vite",
    demo: "https://safe-building-web.vercel.app/",
  },
  {
    id: 3,

    name: "KetChat",
    member: "Individual project",
    img: ketchat,
    type: "Application, UI Design, API",
    time: "Jul 2022 - Sep 2022",
    detail: [
      {
        detailItem: "Register, login.",
      },
      {
        detailItem: "Chat content includes text messages, emoji and images.",
      },
      {
        detailItem: "Dark/Light mode.",
      },
      {
        detailItem: "Responsive for laptops, tablets and phones.",
      },
      {
        detailItem:
          "Technologies: ReactJs, SCSS, Redux Toolkit, ExpressJs, Socket.io, Cloudinary, MongoDB,...",
      },
    ],
    repository: "https://github.com/nthieu1332002/KetChat",
    demo: "",
  },
  {
    id: 4,
    name: "My Portfolio (old)",
    member: "Individual project",
    img: portfolioold,
    type: "UI Design",
    time: "May 2022 - July 2022",
    detail: [
      {
        detailItem: "Dark/Light mode.",
      },
      {
        detailItem: "Responsive for laptops, tablets and phones.",
      },
      { detailItem: "Technologies: HTML, CSS, Bootstrap, Jquery." },
    ],
    repository: "https://github.com/nthieu1332002/My-portfolio",
    demo: "https://portifolio-hieu-nguyen-test.netlify.app/",
  },
  {
    id: 5,
    name: "Hmovies",
    member: "Individual project",
    img: hmovie,
    type: "API, UI Design",
    time: "Apr 2022 - Jul 2022",
    detail: [
      {
        detailItem: "Responsive for laptops, tablets and phones.",
      },
      {
        detailItem: "Fake API from Themoviedb.org",
      },
      { detailItem: "Technologies: ReactJs, SCSS." },
    ],
    repository: "https://github.com/nthieu1332002/Movie-Web",
    demo: "https://movie-web-vercel-brown.vercel.app/",
  },
  {
    id: 6,
    name: "The H Store",
    member: "Individual project",
    img: thehstore,
    type: "Ecommerce, UI Design",
    time: "Feb 2022 - May 2022",
    detail: [
      {
        detailItem: "A store website using fake APIs from Platzi.",
      },
      { detailItem: "Design and components are fully self design and coding." },

      {
        detailItem: "Technologies: ReactJs, SCSS, Redux Toolkit, Firebase,...",
      },
    ],
    repository: "https://github.com/nthieu1332002/The-H-Store",
    demo: "https://the-h-store.vercel.app/",
  },
];

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState<Project | undefined>();
  const [selectedType, setSelectedType] = useState("Everything");
  const [filteredList, setFilteredList] = useState(ProjectList);

  useEffect(() => {
    if (selectedType !== "Everything") {
      setFilteredList(
        ProjectList.filter((project) => project.type.includes(selectedType))
      );
    } else {
      setFilteredList(ProjectList);
    }
  }, [selectedType]);

  const removeItem = () => {
    setSelectedItem(undefined);
  };

  return (
    <>
      <TransitionEffect />
      <ProjectModal item={selectedItem} setSelectedItem={removeItem} />

      <div className="flex w-full h-full">
        <div className="content flex-1 pt-28 py-20 overflow-y-scroll no-scrollbar">
          <div className="relative text-center px-5 py-12">
            <div className="font-bold text-[6rem] text-white uppercase absolute left-0 top-[-50px] w-full opacity-[0.1] whitespace-no-wrap leading-[170px] text-center overflow-hidden pointer-events-none">
              portfolio
            </div>
            <div className="text-xl mt-10 flex justify-center gap-4">
              <div className="w-48 flex flex-col gap-1 text-white cursor-pointer ">
                <div className="font-bold text-5xl text-white ">
                  <AnimatedNumber value={15} />+
                </div>
                <div className="text-base tracking-wide text-slate-200">
                  Projects Completed
                </div>
              </div>
              <div className="w-48 flex flex-col gap-1 cursor-pointer ">
                <div className="font-bold text-5xl text-white ">
                  <AnimatedNumber value={1} />+
                </div>
                <div className="text-base tracking-wide text-slate-200">
                  Satisfied clients
                </div>
              </div>
              <div className="w-48 flex flex-col gap-1  cursor-pointer">
                <div className="font-bold text-5xl text-white">
                  <AnimatedNumber value={1} />+
                </div>
                <div className="text-base tracking-wide text-slate-200">
                  Year of Experience
                </div>
              </div>
            </div>
          </div>
          <div className="px-5">
            <h2 className="section-title mb-5">
              <span className="text-primary">My</span> Portfolio
            </h2>
            <div className="flex gap-5 justify-center font-semibold mb-5">
              {ProjectNavList.map((item) => (
                <ProjectNavBar
                  key={item.id}
                  text={item.name}
                  selectedType={selectedType}
                  setSelectedType={setSelectedType}
                />
              ))}
            </div>
            <motion.div
              layout
              className="flex justify-start items-stretch flex-wrap ml-2 my-0"
            >
              <AnimatePresence>
                {filteredList.map((item) => {
                  return (
                    <ProjectContainer
                      key={item.id}
                      item={item}
                      setSelectedItem={setSelectedItem}
                    />
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
        <div className="image-container flex-1 bg-slate-600">
          {/* <Image src={img} alt="" className="object-cover h-full" /> */}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
