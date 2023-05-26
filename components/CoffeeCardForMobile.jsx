"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const CoffeeCardForMobile = ({
  id,
  imgUrl,
  title,
  price,
  active,
  handleClick,
}) => {
  return (
    <motion.div
      className={`${
        active === id ? "h-[300px]" : "h-[100px]"
      } relative  mx-auto  items-center justify-center  w-[400px] md:w-[700px]  cursor-pointer ease-in-out transition-all duration-500 `}
      onClick={() => handleClick(id)}
    >
      <Image
        src={imgUrl}
        alt="coffee"
        fill
        className="object-none rounded-xl"
      />
      <div className="absolute  pt-2 pl-2 pb-2 transition ease-out duration-300  bottom-0 rounded-b-xl text-white">
        <div className="bg-black/40 p-2 rounded-xl flex items-end gap-2">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-lg font-medium">{price}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CoffeeCardForMobile;
