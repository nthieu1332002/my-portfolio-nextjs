import React from "react";

interface ProjectNavBarProps {
  text: string;
  selectedType: string;
  setSelectedType: React.Dispatch<React.SetStateAction<string>>;
}

const ProjectNavBar = ({ text, selectedType, setSelectedType }: ProjectNavBarProps) => {
  return <p className={`${selectedType === text ? "text-primary-color " : "text-white "}  hover:text-primary-color whitespace-nowrap cursor-pointer`} onClick={() => setSelectedType(text)}>{text}</p>;
};

export default ProjectNavBar;
