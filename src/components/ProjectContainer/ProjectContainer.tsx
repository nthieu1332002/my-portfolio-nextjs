import Image from "next/image";
import React from "react";
import { Project } from "@/app/portfolio/page";

interface ProjectContainerProps {
  setSelectedItem: (item: Project) => void;
  item: Project
}

const ProjectContainer = ({ item, setSelectedItem }: ProjectContainerProps) => {
  const truncatedName = item.name.length > 60 ? item.name.substring(0, 60) + '...' : item.name;
  return (
    <>
    <div onClick={() => setSelectedItem(item)} className="group relative w-80 h-60 overflow-hidden bg-slate-600 rounded-lg cursor-pointer hover:drop-shadow-lg">
      <Image src={item.img} alt="" className="object-cover h-full transition group-hover:scale-125 duration-300" />
      <div className="absolute flex items-end left-0 right-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900 to-transparent text-red-300 bg-opacity-50 duration-500">
        <div className="text-white w-full p-5">
            <div className="font-bold">{truncatedName}</div>
            <div className="text-base">{item.member}</div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProjectContainer;
