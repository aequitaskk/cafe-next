import Link from "next/link";

import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-stone-900 to-zinc-900 h-20">
      <div className="justify-between">
        <div className="flex justify-center gap-6 pt-6">
          <Link href="/">
            <AiOutlineMail className="text-2xl text-white" />
          </Link>
          <Link href="/">
            <BsFacebook className="text-2xl text-white" />
          </Link>
          <Link href="/">
            <BsTwitter className="text-2xl text-white" />
          </Link>
          <Link href="/">
            <BsInstagram className="text-2xl text-white" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
