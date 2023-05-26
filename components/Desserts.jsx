import Image from "next/image";
import { TypingText } from "./TypingText";
import { DessertsMenu } from "@/constant";
import { motion } from "framer-motion";
import DessertsCard from "./DessertsCard";

const Desserts = () => {
  return (
    <section className="h-[800px] bg-gradient-to-tl from-stone-900 to-zinc-900 py-12">
      <div className=" w-[460px] md:w-[700px] lg:w-[950px] xl:w-[1280px] mx-auto">
        <TypingText title="Desserts" />
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-3 pt-12 ">
          {DessertsMenu.map((dessert, index) => (
            <DessertsCard key={dessert.id} {...dessert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Desserts;
