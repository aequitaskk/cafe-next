"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant } from "../utils/motion";


export const TypingText = ({ title }) => {
  return (
    <motion.p variants={textContainer} initial="hidden" whileInView="show" className="text-center text-white text-4xl">
      {Array.from(title).map((letter, index) => (
        <motion.span key={index} variants={textVariant}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};
