"use client";

import { motion } from "framer-motion";
import { TypingTextTitle } from "./TypingTextTitle";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="h-[700px] md:h-[800px] bg-stone-200 pt-16 px-10">
      <motion.div
        className="max-w-5xl md:mt-20 flex mx-auto"
        initial="hidden"
        whileInView="show"
        transition={{ delay: 0.2, duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          show: { opacity: 1, y: 0 },
        }}
      >
        <div className="flex md:gap-12 xl:gap-14">
          <div className="lg:flex-[1]">
            <Image
              src="/images/cafe.jpg"
              alt="cafe"
              width={1000}
              height={1000}
              className="rounded-xl hidden lg:block h-[400px] object-cover"
            />
          </div>
          <div className="flex-[2]">
            <div className="flex flex-col">
              <div className="flex items-center gap-4 pb-4">
                <h2 className="text-black text-4xl font-bold">About</h2>
                <TypingTextTitle title="STEAMY BEANS" />
              </div>
              <div>
                <p>
                  Steamy Beans is a cozy and inviting coffee shop that offers a
                  delightful haven for coffee enthusiasts and those seeking a
                  warm and welcoming atmosphere. Located in the heart of the
                  bustling city, this charming establishment is renowned for its
                  exceptional coffee and exceptional service.
                </p>
                <br />
                <p>
                  Upon entering Steamy Beans, you are greeted by the rich aroma
                  of freshly brewed coffee, instantly enveloping you in a sense
                  of comfort and relaxation. The interior boasts a rustic yet
                  modern design, with exposed brick walls, cozy wooden
                  furniture, and soft ambient lighting that creates a soothing
                  ambiance.
                </p>
                <br />
                <p>
                  The menu at Steamy Beans features an extensive selection of
                  premium coffee beverages meticulously crafted by expert
                  baristas. From classic favorites like lattes, cappuccinos, and
                  espressos to specialty drinks such as caramel macchiatos,
                  mochas, and seasonal blends, there is something to satisfy
                  every coffee lover&apos;s palate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
