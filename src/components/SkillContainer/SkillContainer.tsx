import React from "react";
import Image from "next/image";
import { Skill } from "../Skills/Skills";

const SkillContainer = ({ name, icon, url }: Skill) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className="relative p-5 w-lg_size md:w-[calc(33.33%-1rem)] lg:w-[calc(20%-1rem)] h-28 rounded-xl bg-gray-600 flex justify-center items-center text-gray-400 hover:text-primary-color hover:scale-105 duration-500"
    >
      <div
        data-tooltip={name}
        className="tooltip flex items-center justify-center w-full h-full"
      >
        <Image
          src={icon}
          alt={name}
          width={70}
          height={70}
          unoptimized
          className="object-contain max-h-[70px] w-auto h-auto"
        />
      </div>
    </a>
  );
};

export default SkillContainer;
