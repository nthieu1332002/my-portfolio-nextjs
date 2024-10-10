import React from "react";
import { IoLogoReact } from "react-icons/io5";
import { AiOutlineHtml5, AiOutlineAntDesign } from "react-icons/ai";
import { FaCss3, FaSass, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { SiShadcnui } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { BiGitBranch } from "react-icons/bi";
import { motion } from "framer-motion";
import { TbBrandReactNative } from "react-icons/tb";
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
  color: string;
}
const SkillsList: Skill[] = [
  {
    name: "HTML",
    icon: <AiOutlineHtml5 size="70" />,
    color: "#b25127",
  },
  {
    name: "Css",
    icon: <FaCss3 size="70" />,
    color: "#2781a7",
  },
  {
    name: "Scss",
    icon: <FaSass size="70" />,
    color: "#fffdfa",
  },
  {
    name: "Javascript",
    icon: <IoLogoJavascript size="70" />,
    color: "#f5e633",
  },
  {
    name: "ReactJs",
    icon: <IoLogoReact size="70" />,
    color: "#5ed3f3",
  },
  {
    name: "NextJs",
    icon: <SiNextdotjs size="70" />,
    color: "black",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size="70" />,
    color: "#5ed3f3",
  },
  {
    name: "NodeJs",
    icon: <FaNodeJs size="70" />,
    color: "#2781a7",
  },
  {
    name: "Git",
    icon: <BiGitBranch size="70" />,
    color: "#2781a7",
  },
  {
    name: "React Native",
    icon: <TbBrandReactNative size="70" />,
    color: "#2781a7",
  },
];

const OtherSkillsList: Skill[] = [
  {
    name: "Bootstrap",
    icon: <FaBootstrap size="70" />,
    color: "#7910f2",
  },
  {
    name: "Tailwindcss",
    icon: <SiTailwindcss size="70" />,
    color: "#38bdf8",
  },
  {
    name: "AntDesign",
    icon: <AiOutlineAntDesign size="70" />,
    color: "#3db3f8",
  },
  {
    name: "MUI",
    icon: <SiMui size="70" />,
    color: "#2781a7",
  },
  {
    name: "ShadcnUI",
    icon: <SiShadcnui size="70" />,
    color: "black",
  },
  {
    name: "Firebase",
    icon: <SiFirebase size="70" />,
    color: "#b25127",
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
              color={item.color}
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
              color={item.color}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default Skills;
