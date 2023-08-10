"use client";

import TransitionEffect from "@/components/TransitionEffect/TransitionEffect";
import React from "react";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { BsGithub } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { motion } from "framer-motion";

import img from "../../../public/assets/profile.avif";
import Image from "next/image";
import CustomButton from "@/components/CustomButton/CustomButton";
import Skills from "@/components/Skills/Skills";
import { fadeIn } from "@/utils/variants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About me",
  description:
    "I'm Trung Hieu, a frontend developer with years of experience. Skilled in HTML, CSS, JavaScript, and various frameworks, I creates visually appealing and user-friendly websites. Learn more about my skills.",
    alternates: {
      canonical: '/about',
      languages: {
        'en': '/en/about',
      },
    },
};

const About = () => {
  return (
    <>
      <TransitionEffect />
      <div className="lg:relative lg:h-full flex flex-col-reverse">
        <div className="pt-10 py-20 lg:w-1/2 lg:pt-28 lg:py-20">
          <div className="relative text-center px-5 py-10">
            <div className="font-bold text-[4rem] lg:text-[6rem] text-white uppercase absolute left-0 top-[-50px] w-full opacity-[0.1] whitespace-no-wrap leading-[170px] text-center overflow-hidden pointer-events-none">
              about me
            </div>
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="px-2 text-lg leading-8 lg:px-4 lg:text-xl lg:leading-9 text-white"
            >
              <p>
                <strong className="text-primary">
                  Hello, I&apos;m Trung Hieu.{" "}
                </strong>
                I am a junior Web Developer. I enjoy to create beautiful things
                that live on the internet. I have experience in website building
                and customization. I am familiar with{" "}
                <strong className="text-primary">
                  Reactjs, Nextjs, TypeScript, Scss, Redux,...
                </strong>
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex gap-3 justify-center mt-8 lg:mt-4"
            >
              <CustomButton
                link="/CV-NguyenTrungHieu-Frontend-Developer.pdf"
                icon={<PiDownloadSimpleBold size={20} />}
                text="Download CV"
                download={true}
              />
              <CustomButton
                link="https://github.com/nthieu1332002"
                icon={<BsGithub size={20} />}
              />
              <CustomButton
                link="https://www.facebook.com/MediumHealing13/"
                icon={<AiOutlineFacebook size={20} />}
              />
            </motion.div>
          </div>
          <Skills />
        </div>
        <div className="lg:fixed lg:right-0 lg:top-0 lg:w-1/2 h-full lg:h-screen lg:flex-1 bg-slate-600">
          <Image
            src={img}
            alt="img1"
            width={100}
            height={100}
            sizes="(max-width: 425px) 50vw, 75vw"
            quality={60}
            placeholder="blur"
            priority
            className="object-cover w-full h-auto aspect-video lg:h-full"
          />
        </div>
      </div>
    </>
  );
};

export default About;
