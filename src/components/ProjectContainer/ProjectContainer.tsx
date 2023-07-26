import Image from "next/image";
import React from "react";
import img from "../../../public/assets/wall.jpg";

const ProjectContainer = () => {
  return (
    <div className="group relative w-80 h-60 overflow-hidden bg-slate-600 rounded-lg cursor-pointer hover:drop-shadow-lg">
      <Image src={img} alt="" className="object-cover h-full transition group-hover:scale-125 duration-300" />
      <div className="absolute flex items-end left-0 right-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900 to-transparent text-red-300 bg-opacity-50 duration-500">
        <div className="text-white w-full p-5">
            <div className="font-bold">IMIU</div>
            <div className="text-base">Individual project</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
