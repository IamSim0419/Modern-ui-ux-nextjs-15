import Image from "next/image";
import Logo from "@/public/assets/Logo.svg";
import Facebook from "@/public/assets/Facebook.svg";
import Twitter from "@/public/assets/X.svg";
import Feed from "@/public/assets/Feed.svg";
import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="pb-16">
        <div className="flex items-center justify-center gap-x-4">
          <Image src={Logo} alt="Logo" className="w-8 h-8" />
          <p className="font-bold text-black/80 text-xl">Simrech</p>
        </div>

        <ul className="flex flex-col items-center font-semibold gap-y-8 pt-14 text-black/70 sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5">
          <Link href="#features">Features</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#">Enterprise</Link>
          <Link href="#">Careers</Link>
        </ul>

        <p className="pt-14 text-center text-md font-medium text-black/70 sm:pt-5">
          © {new Date().getFullYear()}. Your Site. All rights reserved.
        </p>

        <div className="flex items-center justify-center gap-x-14 pt-10">
          <Link href="#">
            <Image src={Facebook} alt="Facebook" />
          </Link>
          <Link href="#">
            <Image src={Feed} alt="Feed" />
          </Link>
          <Link href="#">
            <Image src={Twitter} alt="Twitter" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
