import { Education } from "@/app/resume/page";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const EducationItem = ({name, time, title, link , description}: Education) => {
  const quote = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.3
      },
    },
  };
  return (
    <motion.div variants={quote} initial="initial" animate="animate" className="p-5 mb-4 w-full rounded-lg bg-button-bg">
      <div className="flex flex-col">
        <div className="text-sm text-white-primary">{time}</div>
        <div className="font-bold text-white">{name}</div>
        <Link
          href={link}
          target="_blank"
          className="font-semibold text-base text-primary"
        >
          {title}
        </Link>
        <div className="description text-slate-100 mt-2">
          {description.map((item, index) => {
            return <p key={index}>- {item.detail}</p>;
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default EducationItem;
