import Image from "next/image";
import Link from "next/link";

const Top = () => {
  return (
    <section id="home" className="h-screen w-screen relative scroll-smooth overflow-x-hidden">
      <div className="absolute top-0 h-full w-full">
        <Image
          src="/images/bg.png"
          alt="background"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative h-screen z-[10] flex justify-center items-center">
        <div className="flex flex-col justify-center items-center text-center  text-white">
          <h1 className="text-6xl font-extrabold">STEAMY BEANS</h1>
          <p className="text-2xl mt-2 mb-10 font-md tracking-wider">
            fresh place to drink coffee
          </p>
          <Link
            href="#menu"
            scroll={false}
            className="bg-gray-800 px-[2rem] py-[8px] rounded-xl scroll-smooth"
          >
            <p className="font-semibold tracking-wider">MENU</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Top;
