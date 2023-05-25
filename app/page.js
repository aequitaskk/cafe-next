import Image from "next/image";
import { Inter } from "next/font/google";
import Top from "@/components/Top";
import Menu from "@/components/Menu";
import AboutUs from "@/components/AboutUs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Top />
      <Menu />
      <AboutUs />
    </main>
  );
}
