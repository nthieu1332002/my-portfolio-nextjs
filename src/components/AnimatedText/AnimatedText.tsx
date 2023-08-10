'use client'

import { motion } from "framer-motion";
import React from "react";

const quote = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,

    transition: {
      delay: 0.8
    },
  },
};

const AnimatedText = ({ text }: { text: string }) => {
  return (
    <motion.div variants={quote} initial="initial" animate="animate">
      {text}
    </motion.div>
  );
};

export default AnimatedText;
