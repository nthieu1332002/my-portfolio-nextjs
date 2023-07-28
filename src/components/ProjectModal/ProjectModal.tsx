import { Project } from "@/app/portfolio/page";
import Image from "next/image";
import React from "react";
import CustomButton from "../CustomButton/CustomButton";

interface ProjectModalProps {
  item?: Project;
  setSelectedItem: () => void;
}

const ProjectModal = ({ item, setSelectedItem }: ProjectModalProps) => {
  if (!item) {
    return;
  }
  return (
    <div className="fixed inset-0 z-[1000] bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center overflow-y-scroll no-scrollbar">
      <div className="fixed inset-0 z-[1000] bg-black bg-opacity-50 backdrop-blur-sm">
        <div
          onClick={() => setSelectedItem()}
          className="absolute font-bold text-2xl text-white opacity-50 right-0 top-0 w-10 h-10 cursor-pointer text-center"
        >
          x
        </div>

        <div className="mx-auto my-10 max-w-[650px]  bg-white p-6 rounded-lg">
          <Image
            src={item.img}
            alt={item.name}
            className="rounded-lg object-contain"
          />
          <div className="text-sm mt-5">{item.member}</div>
          <div className=" text-2xl font-bold tracking-wide">
            {item.name}{" "}
            <span className="text-sm font-normal">({item.time})</span>
          </div>
          <div className="font-semibold mb-5">{item.type}</div>
          <div className="mb-4">
            {item.detail.map((item, index) => {
              return (
                <p
                  key={index}
                  className="relative mt-1 pl-4 before:content-[''] before:absolute before:bg-primary before:rounded-full before:w-2 before:h-2 before:top-[20%] before:left-0"
                >
                  {item.detailItem}
                </p>
              );
            })}
          </div>
          <div className="flex gap-2 justify-end">
            <a target="_blank" href={item.repository} rel="noopener noreferrer" className="text-sm font-bold p-3 px-4 rounded-full text-primary bg-white  hover:-translate-y-1 hover:drop-shadow-lg duration-300">
              Repository
            </a>
            <a target="_blank" href={item.demo} rel="noopener noreferrer" className="text-sm font-bold p-3 px-4 rounded-full text-white bg-primary  hover:-translate-y-1 hover:drop-shadow-lg duration-300">
              View on website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
