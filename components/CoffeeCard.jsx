"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const CoffeeCard = ({ id, imgUrl, title, price, active, handleClick }) => {
  return (
    <motion.div
      className={`${
        active === id ? "flex-[2]" : "flex-[1]"
      } relative flex items-center justify-center min-w-[120px] xl:min-w-[180px] max-w-[600px] h-[450px] cursor-pointer ease-in-out transition-[flex] duration-700 overflow-hidden`}
      onClick={() => handleClick(id)}
    >
      <Image
        src={imgUrl}
        alt="coffee"
        fill
        className="object-cover rounded-xl"
      />
      {active !== id ? (
        <div className="absolute bottom-8 text-white rotate-[-90deg] ease-out duration-700 transition w-44 h-36 xl:w-56 xl:h-48 text-2xl font-medium">
          {title}
        </div>
      ) : (
        <div className="absolute  pt-2 pl-6 pb-4 bg-black/50 transition ease-out duration-300 w-full bottom-0 rounded-b-xl text-white">
          <h2 className="text-3xl font-semibold">{title}</h2>
          <p className="text-2xl font-medium">{price}</p>
        </div>
      )}
    </motion.div>
  );
};

export default CoffeeCard;
