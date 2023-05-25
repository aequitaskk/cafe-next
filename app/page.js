import Image from "next/image";
import { Inter } from "next/font/google";
import Top from "@/components/Top";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Top />
    </main>
  );
}
