"use client"
import { useInView, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useRef } from "react";

const AnimatedNumber = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 4000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);
  
  useEffect(() => {
    springValue.on("change", (lastest) => {
      if (ref.current && lastest.toFixed(0) <= value) {
        ref.current.textContent = lastest.toFixed(0);
      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>
};

export default AnimatedNumber;
