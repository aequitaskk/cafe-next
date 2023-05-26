"use client";
import { motion } from "framer-motion";
import { TypingText } from "./TypingText";
import { DessertsMenu } from "@/constant";
import DessertsCard from "./DessertsCard";

const Desserts = () => {
  return (
    <section className="h-[850px] md:h-[800px] bg-gradient-to-tl from-stone-900 to-zinc-900 pt-12">
      <div className=" w-[460px] md:w-[700px] lg:w-[950px] xl:w-[1280px] mx-auto">
        <TypingText title="Desserts" />
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-3 pt-12 ">
          {DessertsMenu.map((dessert, index) => (
            <motion.div
            key={dessert.id}
            initial={{ opacity: 0}}
            whileInView={{opacity:1}}
            viewport={{ once: true}}
            transition={{ duration:1, delay: index * 0.3}}
            >
              <DessertsCard key={dessert.id} {...dessert} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Desserts;
