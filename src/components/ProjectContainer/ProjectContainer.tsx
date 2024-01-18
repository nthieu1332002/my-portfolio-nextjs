import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";
import { Project } from "../PortfolioContent/PortfolioContent";

interface ProjectContainerProps {
  setSelectedItem: (item: Project) => void;
  item: Project;
}

const ProjectContainer = ({ item, setSelectedItem }: ProjectContainerProps) => {
  const truncatedName =
    item.name.length > 60 ? item.name.substring(0, 60) + "..." : item.name;
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        layout
        onClick={() => setSelectedItem(item)}
        className="group relative lg:w-lg_size sm:w-[48%] w-full lg:h-60 md:h-72 sm:h-60 mt-3 overflow-hidden bg-slate-600 rounded-lg cursor-pointer hover:drop-shadow-lg"
      >
        <Image
          src={item.img}
          alt={item.name}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          width={100}
          height={100}
          quality={60}
          priority
          className="object-cover  w-full h-full transition group-hover:scale-125 duration-300"
        />
        <div className="absolute flex items-end left-0 right-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900 to-transparent text-red-300 bg-opacity-50 duration-500">
          <div className="text-white w-full p-5">
            <div className="font-bold">{truncatedName}</div>
            <div className="text-base">{item.member}</div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectContainer;
