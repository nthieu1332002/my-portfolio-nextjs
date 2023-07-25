"use client";
import TransitionEffect from "@/components/TransitionEffect/TransitionEffect";
import style from "./home.module.css";
import { Typewriter } from "react-simple-typewriter";
import AnimatedText from "@/components/AnimatedText/AnimatedText";
export default function Home() {
  return (
    <>
    <TransitionEffect/>
      <div className={style.home}>
        <div className={style.content}></div>
        <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full">
          <div className="text-center">
            <div className={style.title}>
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
                    words={["Software Engineer.","Front-end Developer.", "Mobile Developer."]}
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
