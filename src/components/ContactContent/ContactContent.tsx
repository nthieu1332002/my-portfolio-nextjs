'use client'

import CustomButton from "@/components/CustomButton/CustomButton";
import { BsGithub } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { fadeIn } from "@/utils/variants";
import toast, { Toaster } from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";
const ContactContent = () => {
    const form = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [verified, setVerified] = useState(false);
  
    const onChange = () => {
      setVerified(true);
    };
  
    const sendEmail = (e: { preventDefault: () => void }) => {
      e.preventDefault();
      setLoading(true);
      if (form.current) {
        emailjs
          .sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
            form.current,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
          )
          .then(
            (result) => {
              if (result.status === 200) {
                toast.success("Send successfully!");
                if (form.current) {
                  form.current.reset();
                }
              }
              setLoading(false);
            },
            (error) => {
              setLoading(false);
              toast.error(error.text);
            }
          );
      } else {
        setLoading(false);
      }
    };
  
    return (
      <>
        <Toaster />
        <div className="flex justify-center w-full h-screen">
          <div className="content pt-28 py-20 overflow-y-scroll no-scrollbar">
            <div className="relative text-center px-5 py-12">
              <h1 className="font-bold text-[4rem] lg:text-[6rem] text-white uppercase absolute left-0 top-[-50px] w-full opacity-[0.1] whitespace-no-wrap leading-[170px] text-center overflow-hidden pointer-events-none">
                contact
              </h1>
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
                    <strong className="text-primary-color underline">Email</strong>
                  </a>
                </p>
                <p>
                  Or <strong className="text-primary-color"> say hi👋</strong> via my
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
                <CustomButton
                  link="https://www.facebook.com/MediumHealing13/"
                  icon={<AiOutlineFacebook size={20} />}
                />
                <CustomButton
                  link="https://github.com/nthieu1332002"
                  icon={<BsGithub size={20} />}
                />
              </motion.div>
            </div>
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="px-5 lg:w-[700px]"
            >
              <form
                className="flex flex-1 flex-col items-center gap-3 w-full bg-gray-700 p-7 rounded-md"
                ref={form}
                onSubmit={sendEmail}
              >
                <h2 className="section-title my-2 text-center text-2xl">
                  <span className="text-primary-color">Contact</span> Form
                </h2>
                <div className="flex gap-x-3 w-full">
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="input"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="input"
                    required
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  className="input"
                  required
                />
                <textarea
                  placeholder="Message"
                  name="message"
                  className="textarea"
                  required
                />
                <ReCAPTCHA
                  sitekey={
                    process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY as string
                  }
                  onChange={onChange}
                />
                <button
                  type="submit"
                  disabled={loading || !verified}
                  className="btn flex rounded-full max-w-[200px] font-bold p-2 px-5 text-white bg-button-bg hover:text-primary-color hover:-translate-y-1 hover:drop-shadow-lg duration-500"
                >
                  {loading && (
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 mt-1 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-primary"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  )}
                  Let&apos;s talk!
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </>
    );
}

export default ContactContent
