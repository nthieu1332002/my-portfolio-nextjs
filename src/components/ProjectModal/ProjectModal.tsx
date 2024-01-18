import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Project } from "../PortfolioContent/PortfolioContent";
import { IoMdClose } from "react-icons/io";
import { cn } from "@/utils/utils";

interface ProjectModalProps {
  item?: Project;
  setSelectedItem: () => void;
}

const ProjectModal = ({ item, setSelectedItem }: ProjectModalProps) => {
  const isModalOpen = item ? true : false;
  const [showModal, setShowModal] = useState(isModalOpen);
  useEffect(() => {
    setShowModal(isModalOpen);
  }, [isModalOpen]);

  if (!isModalOpen || !item) {
    return;
  }
  return (
    <div className="transition duration-500 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  bg-neutral-800/70">
      <div className="relative w-full md:w-4/6 lg:w-3/6 my-auto mx-auto h-full lg:h-auto md:h-auto">
        <div
          className={cn(
            "translate duration-300 h-full",
            showModal
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          )}
        >
          <div className="translate h-auto border-0 rounded-lg shadow-lg flex flex-col w-full bg-red-50 outline-none focus:outline-none">
            {/*header*/}
            <div className="px-6 py-1 z-10 rounded-t justify-center relative">
              <button
                className="p-1 border-0 hover:opacity-70 transition absolute right-5 hover:bg-gray-200 rounded-full"
                onClick={() => setSelectedItem()}
              >
                <IoMdClose size={25} />
              </button>
            </div>

            <div className="mx-auto w-full h-full text-black p-6 rounded-lg">
              <div className="relative w-full h-60 md:h-96">
                <Image
                  src={item.img}
                  alt={item.name}
                  sizes="(max-width: 50px) 2vw, (max-width: 425px) 50vw, 75vw"
                  quality={60}
                  width={400}
                  height={200}
                  priority
                  className="absolute h-full w-full rounded-lg object-cover"
                />
              </div>
              <div className="text-sm mt-5">{item.member}</div>
              <div className=" text-2xl font-bold tracking-wide">
                {item.name}{" "}
                <span className="text-sm font-normal">({item.time})</span>
              </div>
              <div className="font-semibold mb-5">{item.type}</div>
              <div className="mb-4">
                <ul>
                  {item.detail.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="before:content-['\2022'] before:text-primary-color before:font-bold before:text-2xl before:inline-block before:w-[1em]"
                      >
                        {item.detailItem}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex gap-2 justify-end">
                <a
                  target="_blank"
                  href={item.repository}
                  rel="noopener noreferrer"
                  className="text-sm font-bold p-3 px-4 rounded-full text-primary-color bg-white  hover:-translate-y-1 hover:drop-shadow-lg duration-300"
                >
                  Repository
                </a>
                <a
                  target="_blank"
                  href={item.demo}
                  rel="noopener noreferrer"
                  className="text-sm font-bold p-3 px-4 rounded-full text-white bg-primary-color  hover:-translate-y-1 hover:drop-shadow-lg duration-300"
                >
                  View on website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
