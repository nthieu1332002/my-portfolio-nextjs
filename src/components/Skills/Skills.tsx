import React from "react";
import { IoLogoReact } from "react-icons/io5";
import { AiOutlineAntDesign } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiShadcnui,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiReactquery,
  SiAxios,
  SiSwagger,
  SiPostman,
  SiNginx,
  SiVercel,
  SiPm2,
  SiPnpm,
  SiYarn,
  SiNpm,
  SiFramer,
  SiCloudinary,
  SiRedis,
  SiMui,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { BiGitBranch } from "react-icons/bi";
import { motion } from "framer-motion";
import { TbBrandMantine } from "react-icons/tb";
import { FaGithub, FaGitlab } from "react-icons/fa6";

import SkillContainer from "../SkillContainer/SkillContainer";
import { fadeIn } from "@/utils/variants";

export interface Skill {
  name: string;
  icon: JSX.Element;
}
const SkillsList: Skill[] = [
  // Frontend Frameworks & Libraries
  {
    name: "Next.js",
    icon: <SiNextdotjs size="70" />,
  },
  {
    name: "React",
    icon: <IoLogoReact size="70" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size="70" />,
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript size="70" />,
  },
  // Styling & Animation
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size="70" />,
  },
  {
    name: "Shadcn UI",
    icon: <SiShadcnui size="70" />,
  },
  {
    name: "Material UI",
    icon: <SiMui size="70" />,
  },
  {
    name: "Ant Design",
    icon: <AiOutlineAntDesign size="70" />,
  },
  {
    name: "Mantine",
    icon: <TbBrandMantine size="70" />,
  },
  {
    name: "Framer Motion",
    icon: <SiFramer size="70" />,
  },
  // State Management & Data Fetching
  {
    name: "Redux",
    icon: <SiRedux size="70" />,
  },
  {
    name: "Tanstack Query",
    icon: <SiReactquery size="70" />,
  },
  {
    name: "Axios",
    icon: <SiAxios size="70" />,
  },
  // Backend
  {
    name: "Node.js",
    icon: <FaNodeJs size="70" />,
  },
  {
    name: "Express.js",
    icon: <SiExpress size="70" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size="70" />,
  },
  {
    name: "Redis",
    icon: <SiRedis size="70" />,
  },
  {
    name: "Cloudinary",
    icon: <SiCloudinary size="70" />,
  },
];

const OtherSkillsList: Skill[] = [
  // API & Testing
  {
    name: "Swagger",
    icon: <SiSwagger size="70" />,
  },
  {
    name: "Postman",
    icon: <SiPostman size="70" />,
  },
  // {
  //   name: "Playwright",
  //   icon: <SiPlaywright size="70" />,
  // },
  // DevOps & Deployment
  {
    name: "PM2",
    icon: <SiPm2 size="70" />,
  },
  {
    name: "Nginx",
    icon: <SiNginx size="70" />,
  },
  {
    name: "Vercel",
    icon: <SiVercel size="70" />,
  },
  // Version Control
  {
    name: "Git",
    icon: <BiGitBranch size="70" />,
  },
  {
    name: "Github",
    icon: <FaGithub size="70" />,
  },
  {
    name: "Gitlab",
    icon: <FaGitlab size="70" />,
  },
  // Package Managers
  {
    name: "npm",
    icon: <SiNpm size="70" />,
  },
  {
    name: "pnpm",
    icon: <SiPnpm size="70" />,
  },
  {
    name: "yarn",
    icon: <SiYarn size="70" />,
  },
];
const Skills = () => {
  return (
    <div className="my-skills px-5">
      <motion.h2
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="text-center section-title mb-5 md:text-left"
      >
        <span className="text-primary-color">Soft</span> Skills
      </motion.h2>
      <motion.p
        variants={fadeIn("right", 0.25)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="mb-5 text-center text-white sm:text-left sm:ml-3 sm:text-lg"
      >
        Team Work, Communication, Leadership, Collaboration.
      </motion.p>
      <motion.h2
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="text-center section-title mb-5 md:text-left"
      >
        <span className="text-primary-color">Technical</span> Skills
      </motion.h2>
      <motion.div
        variants={fadeIn("up", 0.25)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex justify-between md:justify-stretch gap-5 flex-wrap mb-5"
      >
        {SkillsList.map((item) => {
          return (
            <SkillContainer
              key={item.name}
              name={item.name}
              icon={item.icon}
            />
          );
        })}
      </motion.div>
      <motion.h2
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="text-center section-title mb-5 md:text-left"
      >
        <span className="text-primary-color">Others</span>
      </motion.h2>
      <motion.div
        variants={fadeIn("up", 0.25)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex justify-between md:justify-stretch gap-5 flex-wrap mb-5"
      >
        {OtherSkillsList.map((item) => {
          return (
            <SkillContainer
              key={item.name}
              name={item.name}
              icon={item.icon}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default Skills;
