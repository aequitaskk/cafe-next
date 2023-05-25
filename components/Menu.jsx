"use client";
import { useState } from "react";
import { OurMenu } from "@/constant";
import { TypingText } from "./TypingText";
import CoffeeCard from "./CoffeeCard";

const Menu = () => {
  const [active, setActive] = useState("coffee3");

  return (
    <section className="w-full h-screen bg-gradient-to-b from-stone-900 to-zinc-900 py-32">
      <div className="max-w-7xl mx-auto">
        <TypingText title="Menu" />

        <div className="flex mt-12 justify-center gap-4">
          {OurMenu.map((coffee, index) => (
            <CoffeeCard
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
