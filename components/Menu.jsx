"use client";

import { Lobster } from 'next/font/google'

import { useState } from "react";
import { OurMenu } from "@/constant";
import { TypingText } from "./TypingText";
import CoffeeCard from "./CoffeeCard";
import CoffeeCardForMobile from "./CoffeeCardForMobile";

const lobster = Lobster({weight: '400', subsets: ["latin"]})

const Menu = () => {
  const [active, setActive] = useState("coffee3");

  return (
    <section className="w-full h-screen bg-gradient-to-b from-stone-900 to-zinc-900 py-14 lg:py-32">
      <div className="max-w-7xl mx-auto">
        <TypingText title="Coffee" />

        <div className="hidden lg:flex lg:w-[950px] xl:w-[1280px] xl:px-2 mt-12 gap-4 mx-auto">
          {OurMenu.map((coffee, index) => (
            <CoffeeCard
              key={coffee.id}
              {...coffee}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>

        <div className="flex-col lg:hidden xl:px-2 mt-12 justify-center gap-4 mx-auto">
          {OurMenu.map((coffee, index) => (
            <CoffeeCardForMobile
              key={coffee.id}
              {...coffee}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
