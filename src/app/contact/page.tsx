"use client";
import CustomButton from "@/components/CustomButton/CustomButton";
import TransitionEffect from "@/components/TransitionEffect/TransitionEffect";
import { BsGithub } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { motion } from "framer-motion";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { fadeIn } from "@/utils/variants";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  
    if (form.current) {
      emailjs
        .sendForm('service_tu68i6h', 'template_641i267', form.current, 'UB8D6-g7CeCWzsJzF')
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      // Handle the case when form.current is null
    }
  };

  return (
    <>
      <TransitionEffect />
      <div className="flex justify-center w-full h-full">
        <div className="content pt-28 py-20 overflow-y-scroll no-scrollbar">
          <div className="relative text-center px-5 py-12">
            <div className="font-bold text-[6rem] text-white uppercase absolute left-0 top-[-50px] w-full opacity-[0.1] whitespace-no-wrap leading-[170px] text-center overflow-hidden pointer-events-none">
              contact
            </div>
            <motion.div
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-xl px-4 text-white leading-9"
            >
              <p>
                Sent me an{" "}
                <a href="mailto:nthieu1332002@gmail.com">
                  <strong className="text-primary underline">Email</strong>
                </a>
              </p>
              <p>
                Or <strong className="text-primary"> say hi👋</strong> via my
                social networks
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex gap-3 justify-center mt-4"
            >
              <CustomButton icon={<AiOutlineFacebook size={20} />} />
              <CustomButton icon={<BsGithub size={20} />} />
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="px-5 w-[700px]"
          >
            <form
              className="flex flex-1 flex-col items-center gap-3 w-full bg-gray-700 p-7 rounded-md"
              ref={form}
              onSubmit={sendEmail}
            >
              <h2 className="section-title my-2 text-center text-2xl">
                <span className="text-primary">Contact</span> Form
              </h2>
              <div className="flex gap-x-3 w-full">
                <input type="text" placeholder="Name" name="name" className="input" />
                <input type="text" placeholder="Email" name="email" className="input" />
              </div>
              <input type="text" placeholder="Subject" name="subject" className="input" />
              <textarea placeholder="Message" name="message" className="textarea" />
              <button className="btn rounded-full max-w-[200px] font-bold p-2 px-5 text-white bg-button-bg hover:text-primary hover:-translate-y-1 hover:drop-shadow-lg duration-500">
                Let&apos;s talk!
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;
