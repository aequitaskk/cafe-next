import Image from "next/image";
import Link from "next/link";

const Top = () => {
  return (
    <section id="home" className="relative scroll-smooth overflow-x-hidden">
      <div>
        <Image
          src="/images/bg.png"
          alt="background"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative h-screen z-[10] flex justify-center items-center mx-auto">
        <div className="flex flex-col justify-center items-center text-center  text-white">
          <h1 className="text-6xl font-extrabold">STEAMY BEANS</h1>
          <p className="text-2xl mt-2 mb-10 font-md tracking-wider">
            cozy place to warm your heart
          </p>
        </div>
      </div>
    </section>
  );
};

export default Top;
