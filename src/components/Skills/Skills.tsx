import React from "react";
import { IoLogoReact } from "react-icons/io5";
import { AiOutlineHtml5, AiOutlineAntDesign } from "react-icons/ai";
import { FaCss3, FaSass, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiShadcnui } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { BiGitBranch } from "react-icons/bi";
import { motion } from "framer-motion";
import { TbBrandReactNative, TbBrandMantine } from "react-icons/tb";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
  SiMui,
  SiFlutter,
} from "react-icons/si";

import SkillContainer from "../SkillContainer/SkillContainer";
import { fadeIn } from "@/utils/variants";

export interface Skill {
  name: string;
  icon: JSX.Element;
}
const SkillsList: Skill[] = [
  {
    name: "NextJs",
    icon: <SiNextdotjs size="70" />,
  },
  {
    name: "ReactJs",
    icon: <IoLogoReact size="70" />,
  },
  {
    name: "HTML",
    icon: <AiOutlineHtml5 size="70" />,
  },
  {
    name: "Css",
    icon: <FaCss3 size="70" />,
  },
  {
    name: "Scss",
    icon: <FaSass size="70" />,
  },
  {
    name: "Javascript",
    icon: <IoLogoJavascript size="70" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size="70" />,
  },
  {
    name: "NodeJs",
    icon: <FaNodeJs size="70" />,
  },
  {
    name: "ExpressJS",
    icon: <SiExpress size="70" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size="70" />,
  },
  {
    name: "React Native",
    icon: <TbBrandReactNative size="70" />,
  },
];

const OtherSkillsList: Skill[] = [
  {
    name: "Git",
    icon: <BiGitBranch size="70" />,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap size="70" />,
  },
  {
    name: "Tailwindcss",
    icon: <SiTailwindcss size="70" />,
  },
  {
    name: "AntDesign",
    icon: <AiOutlineAntDesign size="70" />,
  },
  {
    name: "MUI",
    icon: <SiMui size="70" />,
  },
  {
    name: "ShadcnUI",
    icon: <SiShadcnui size="70" />,
  },
  {
    name: "Mantine",
    icon: <TbBrandMantine size="70" />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase size="70" />,
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
