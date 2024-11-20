"use client"

import AnimatedNumber from "@/components/AnimatedNumber/AnimatedNumber";
import ProjectContainer from "@/components/ProjectContainer/ProjectContainer";
import React, { useEffect, useState } from "react";
import imiu from "../../../public/assets/imiu.png";
import discord from "../../../public/assets/discord.png";

import safebuilding from "../../../public/assets/safebuilding.png";
import ketchat from "../../../public/assets/ketchat.png";
import portfolioold from "../../../public/assets/portfolioold.png";
import me1 from "../../../public/assets/me1.avif";
import thehstore from "../../../public/assets/thehstore.png";

import hmovie from "../../../public/assets/hmovie.png";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import ProjectModal from "@/components/ProjectModal/ProjectModal";
import ProjectNavBar from "@/components/ProjectNavBar/ProjectNavBar";
import { fadeIn } from "@/utils/variants";

interface Detail {
    detailItem: string;
  }
  
  export interface Project {
    id: number;
    name: string;
    member: string;
    img: StaticImageData | string;
    type: string;
    time: string;
    detail: Detail[];
    repository?: string;
    demo?: string;
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
      name: "Mobile",
    },
    {
      id: 6,
      name: "Ecommerce",
    },
  ];
  
let _fakeId = 1;
function getFakeId() {
  return _fakeId++;
}
  const ProjectList: Project[] = [
    {
      id: getFakeId(),
      name: "Phu Yen Eye Hospital",
      member: "Freelance Project",
      img: "https://res.cloudinary.com/dad0fircy/image/upload/v1730969897/portfolio/16e79238-60f6-4cb8-861c-066feec80e52.png",
      type: "Application, API, UI Design",
      time: "Aug 2024 - Oct 2024",
      detail: [
        {
          detailItem:
            "Developed a responsive website for medical services, featuring an admin panel for managing blogs, doctors, medical news, and a client-facing site for reading content and scheduling appointments.",
        },
        {
          detailItem:
            "Managed deployment on a VPS with Docker for environment consistency, utilizing GitHub Actions CI/CD workflows for automated, reliable updates.",
        },
        {
          detailItem:
            "Developed and executed advanced SEO strategies to enhance search visibility and drive organic traffic growth.",
        },
      ],
      demo: "https://benhvienmatphuyen.vn/",
    },
    {
      id: getFakeId(),
      name: "Chanh Xe Mien Tay (Mobile)",
      member: "Final Capstone project",
      img: "https://res.cloudinary.com/dad0fircy/image/upload/v1705564384/capstone/banner_kx6iz3.png",
      type: "Application, API, UI Design, Mobile",
      time: "Dec 2023 - Jan 2024",
      detail: [
        {
          detailItem:
            "This mobile application is designed for customers and is part of the official ChanhXeMienTay project—a 5-month final capstone project undertaken by a team of FPT students.",
        },
        {
          detailItem:
            "ChanhXeMienTay is a platform that bridges 'Nhà chành' and customers, offering flexible route search capabilities matched by the ChanhXeMienTay system. It not only enables customers to find suitable routes but also provides 'Nhà chành' with modern and user-friendly features management at an extremely affordable fee.",
        },
        {
          detailItem:
            "Features: Authentication, Search routes, Booking, Order details, Tracking orders, Tracking payments, View notifications, Account settings.",
        },
        {
          detailItem:
            "Technologies: React Native",
        },
      ],
      repository: "https://github.com/nthieu1332002/chanhxemientay-customer-mobile/",
      demo: "https://github.com/nthieu1332002/chanhxemientay-customer-mobile/",
    },
    {
      id: getFakeId(),
      name: "Chanh Xe Mien Tay (Web)",
      member: "Final Capstone project",
      img: "https://res.cloudinary.com/dad0fircy/image/upload/v1705408211/capstone/homepage_t2exrr.png",
      type: "Application, API, UI Design",
      time: "Aug 2023 - Jan 2024",
      detail: [
        {
          detailItem:
            "This is an application for customers role - part of the official ChanhXeMienTay project - a 5-month final capstone project of a FPT student team.",
        },
        {
          detailItem:
            "ChanhXeMienTay is a platform that bridges 'Nhà chành' and customers, offering flexible route search capabilities matched by the ChanhXeMienTay system. It not only enables customers to find suitable routes but also provides 'Nhà chành' with modern and user-friendly features management at an extremely affordable fee.",
        },
        {
          detailItem:
            "Technologies: NextJs, TailwindCss, Zustand, Laravel, AWS, Cloudinary, Google Maps API,...",
        },
      ],
      repository: "https://github.com/nthieu1332002/capstone-project-customer",
      demo: "https://chanhxemientay.vercel.app/",
    },
    {
      id: getFakeId(),
      name: "Discord Clone",
      member: "Individual project",
      img: discord,
      type: "Application, API, UI Design",
      time: "Aug 2023 - Oct 2023",
      detail: [
        {
          detailItem:
            "Fullstack Nextjs, Prisma application that clone Discord's features and UI.",
        },
        {
          detailItem:
            "Authentication with Google, Github using Clerk.",
        },
        {
          detailItem:
            "Images management with Cloudinary.",
        },
        {
          detailItem:
            "Realtime messages, online users with Pusher and Socket.io.",
        },
        {
          detailItem:
            "Video call, voice call with Livekit.io.",
        },
        {
          detailItem:
            "Technologies: NextJs, Prisma, Clerk, TailwindCss, Zustand, Shadcn, Socket.io, Pusher, LiveKit.io, Cloudinary...",
        },
      ],
      repository: "https://github.com/nthieu1332002/discord-clone",
      demo: "https://discord-clone-nthieu.vercel.app/",
    },
    {
      id: getFakeId(),
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
            "My responsibility: Leader - take the main responsibility in team, manage team's work progress, plan to design database, features, requirements, UI,... And develop features's application.",
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
      id: getFakeId(),
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
      id: getFakeId(),
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
      id: getFakeId(),
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
      id: getFakeId(),
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
      id: 0,
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

const PortfolioContent = () => {
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
        <ProjectModal item={selectedItem} setSelectedItem={removeItem} />
  
        <div className="lg:relative lg:min-h-screen lg:h-full flex flex-col-reverse">
          <div className="pt-10 py-20 lg:w-1/2 lg:pt-28 lg:py-20">
            <div className="relative text-center px-5 py-10">
              <h1 className="font-bold text-[3.5rem] lg:text-[6rem] text-white uppercase absolute left-0 top-[-50px] w-full opacity-[0.1] whitespace-no-wrap leading-[170px] text-center overflow-hidden pointer-events-none">
                portfolio
              </h1>
              <div className="text-xl mt-10 flex justify-center gap-4">
                <div className="w-48 flex flex-col gap-1 cursor-pointer ">
                  <div className="font-bold text-5xl text-white ">
                    <AnimatedNumber value={5} />+
                  </div>
                  <div className="text-base tracking-wide text-slate-200">
                    Satisfied clients
                  </div>
                </div>
                <div className="w-48 flex flex-col gap-1 text-white cursor-pointer ">
                  <div className="font-bold text-5xl text-white ">
                    <AnimatedNumber value={30} />+
                  </div>
                  <div className="text-base tracking-wide text-slate-200">
                    Projects Completed
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
              <motion.h2
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="text-center section-title mb-5 md:text-left"
              >
                <span className="text-primary-color">My</span> Portfolio
              </motion.h2>
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex gap-3 text-sm md:text-base md:gap-5 justify-center font-semibold mb-5 overflow-auto md:overflow-hidden"
              >
                {ProjectNavList.map((item) => (
                  <ProjectNavBar
                    key={item.id}
                    text={item.name}
                    selectedType={selectedType}
                    setSelectedType={setSelectedType}
                  />
                ))}
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                layout
                className="flex lg:justify-start md:justify-center items-stretch sm:gap-3 lg:gap-4 flex-wrap my-0"
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
          <div className="lg:fixed lg:right-0 lg:top-0 lg:w-1/2 h-full lg:h-screen lg:flex-1 bg-slate-600">
            <Image
              src={me1}
              alt="portfolio"
              height={100}
              width={100}
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
}

export default PortfolioContent
