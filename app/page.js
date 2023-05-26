import { Inter } from "next/font/google";
import Top from "@/components/Top";
import Menu from "@/components/Menu";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Desserts from "@/components/Desserts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Top />
      <Menu />
      <Desserts />
      <AboutUs />
      <Footer />
    </main>
  );
}
