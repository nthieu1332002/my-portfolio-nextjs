import React from "react";
import { IoLogoReact } from "react-icons/io5";
import { AiOutlineHtml5, AiOutlineAntDesign } from "react-icons/ai";
import { FaCss3, FaSass, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

import SkillContainer from "../SkillContainer/SkillContainer";
  
const Skills = () => {
  const SkillsList = [
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
    
  ];
  return (
    <div className="my-skills px-5">
      <h2 className="section-title mb-5">
        <span className="text-primary">My</span> Skills
      </h2>
      <div className="skills-list flex gap-7 flex-wrap">
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
      </div>
    </div>
  );
};

export default Skills;
