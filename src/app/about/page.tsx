"use client";

import TransitionEffect from "@/components/TransitionEffect/TransitionEffect";
import React from "react";
import style from "./about.module.css";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { BsGithub } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";

import img from "../../../public/profile.jpg";
import Image from "next/image";
import CustomButton from "@/components/CustomButton/CustomButton";
const About = () => {
  return (
    <>
      <TransitionEffect />
      <div className="flex w-full h-full">
        <div className="content flex-1 pt-20">
          <div className="relative text-center px-5 py-10">
            <div className={style.title}>portfolio</div>
            <div className="text-xl px-4 text-white">
              <p>
                <strong className="text-primary">
                  Hello, I&apos;m Trung Hieu. {' '}
                </strong>
                I am a junior Web Developer. I enjoy to create beautiful things
                that live on the internet. I have experience in website building and customization. I am familiar with{" "}
                <strong className="text-primary">
                  Reactjs, Nextjs, TypeScript, Scss, Redux,...
                </strong>
              </p>
            </div>
            <div className="flex gap-3 justify-center mt-4">
              <CustomButton icon={<PiDownloadSimpleBold size={20}/>} text="Download CV"/>
              <CustomButton icon={<BsGithub size={20}/>}/>
              <CustomButton icon={<AiOutlineFacebook size={20}/>}/>
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

export default About;
