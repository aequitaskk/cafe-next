import Image from "next/image";
import { Inter } from "next/font/google";
import Top from "@/components/Top";
import Menu from "@/components/Menu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Top />
      <Menu />
    </main>
  );
}
