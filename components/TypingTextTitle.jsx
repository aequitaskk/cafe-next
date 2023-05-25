"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant } from "../utils/motion";

export const TypingTextTitle = ({ title }) => {
  return (
    <motion.p
      variants={textContainer}
      initial="hidden"
      whileInView="show"
      className="text-center text-amber-900 text-4xl font-extrabold"
    >
      {Array.from(title).map((letter, index) => (
        <motion.span key={index} variants={textVariant}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};
