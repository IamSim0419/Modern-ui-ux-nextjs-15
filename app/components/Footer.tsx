import Image from "next/image";
import Logo from "@/public/assets/Logo.svg";
import Facebook from "@/public/assets/Facebook.svg";
import Twitter from "@/public/assets/X.svg";
import Feed from "@/public/assets/Feed.svg";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-100 py-16">
      <div className="flex flex-col items-center gap-8">
        {/* Logo Section */}
        <div className="flex items-center justify-center gap-x-4">
          <Image src={Logo} alt="Logo" className="w-8 h-8" />
          <p className="font-bold text-black/80 text-xl">Simrech</p>
        </div>

        {/* Links Section */}
        <ul className="flex flex-col items-center font-semibold gap-y-8 pt-14 text-black/70 sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5">
          <li>
            <Link href="#features" className="hover:text-purple-700 focus:text-purple-700">
              Features
            </Link>
          </li>
          <li>
            <Link href="#pricing" className="hover:text-purple-700 focus:text-purple-700">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-purple-700 focus:text-purple-700">
              Enterprise
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-purple-700 focus:text-purple-700">
              Careers
            </Link>
          </li>
        </ul>

        {/* Copyright Text */}
        <p className="pt-14 text-center text-md font-medium text-black/70 sm:pt-5">
          © {new Date().getFullYear()}. Your Site. All rights reserved.
        </p>

        {/* Social Media Icons Section */}
        <div className="flex items-center justify-center gap-x-14 pt-10">
          <Link href="#" aria-label="Visit Facebook">
            <Image src={Facebook} alt="Facebook" className="hover:opacity-80 transition-opacity" />
          </Link>
          <Link href="#" aria-label="Visit Feed">
            <Image src={Feed} alt="Feed" className="hover:opacity-80 transition-opacity" />
          </Link>
          <Link href="#" aria-label="Visit Twitter">
            <Image src={Twitter} alt="Twitter" className="hover:opacity-80 transition-opacity" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
