"use client";

import AnimatedNumber from "@/components/AnimatedNumber/AnimatedNumber";
import ProjectContainer from "@/components/ProjectContainer/ProjectContainer";
import TransitionEffect from "@/components/TransitionEffect/TransitionEffect";
import React from "react";
import { PiFire } from "react-icons/pi";
import { SlPeople, SlCup } from "react-icons/sl";

const Portfolio = () => {
  return (
    <>
      <TransitionEffect />

      <div className="flex w-full h-full">
        <div className="content flex-1 pt-28 py-20 overflow-scroll overflow-x-hidden">
          <div className="relative text-center px-5 py-12">
            <div className="font-bold text-[6rem] text-white uppercase absolute left-0 top-[-50px] w-full opacity-[0.1] whitespace-no-wrap leading-[170px] text-center overflow-hidden pointer-events-none">
              portfolio
            </div>
            <div className="text-xl mt-10 flex justify-center gap-4">
              <div className="w-48 flex flex-col gap-1 text-white cursor-pointer ">
                <div className="font-bold text-5xl text-white ">
                  <AnimatedNumber value={15} />+
                </div>
                <div className="text-base tracking-wide text-slate-200">
                  Projects Completed
                </div>
              </div>
              <div className="w-48 flex flex-col gap-1 cursor-pointer ">
                <div className="font-bold text-5xl text-white ">
                  <AnimatedNumber value={1} />+
                </div>
                <div className="text-base tracking-wide text-slate-200">
                  Satisfied clients
                </div>
              </div>
              <div className="w-48 flex flex-col gap-1  cursor-pointer">
                <div className="font-bold text-5xl text-white">
                  <AnimatedNumber value={1} />+
                </div>
                <div className="text-base tracking-wide text-slate-200">
                  Year of Experience
                </div>
              </div>
            </div>
          </div>
          <div className="px-5">
            <h2 className="section-title mb-5">
              <span className="text-primary">My</span> Portfolio
            </h2>
            <div className="flex justify-start flex-wrap md:gap-2 lg:gap-5">
              <ProjectContainer />
              <ProjectContainer />
              <ProjectContainer />

            </div>
          </div>
        </div>
        <div className="image-container flex-1 bg-slate-600">
          {/* <Image src={img} alt="" className="object-cover h-full" /> */}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
