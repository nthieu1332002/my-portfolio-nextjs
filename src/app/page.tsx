"use client";
import TransitionEffect from "@/components/TransitionEffect/TransitionEffect";
import { Typewriter } from "react-simple-typewriter";
import AnimatedText from "@/components/AnimatedText/AnimatedText";
import wall from "../../public/assets/wall.avif";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homepage",
  description:
    "Welcome to my portfolio! Showcase of my expertise in web skills. Browse through my projects, demonstrating creativity, user experience (UX), and clean code. Explore my skills in creating intuitive user interfaces (UI) and optimizing web performance. Get in touch for potential collaborations or employment opportunities.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
    },
  },
};

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <div className="relative h-full w-full">
        <div className="text-center h-screen w-screen">
          <Image
            src={wall}
            alt="Background Image"
            width={100}
            height={100}
            quality={100}
            sizes="(max-width: 50px) 2vw, (max-width: 425px) 50vw, 75vw"
            placeholder="blur"
            priority
            className="object-cover w-screen h-screen"
          />
          <div
            className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-30"
            style={{ content: "" }}
          ></div>
        </div>
        <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full">
          <div className="text-center">
            <div className="text-4xl md:text-[66px] md:leading-[66px] text-white font-bold">
              <AnimatedText text="Nguyen Trung Hieu"></AnimatedText>
            </div>
            <div>
              <h1
                style={{
                  fontSize: "22px",
                  paddingTop: "2rem",
                  fontWeight: "normal",
                  color: "#949590",
                }}
              >
                I am a{" "}
                <span style={{ color: "white", fontWeight: "bold" }}>
                  <Typewriter
                    words={[
                      "Software Engineer.",
                      "Front-end Developer.",
                      "Mobile Developer.",
                    ]}
                    loop={5}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
