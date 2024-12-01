import Image from "next/image";
import Logo from "@/public/assets/Logo.svg";
import User from "@/public/assets/User.svg";
import Menu from "@/public/assets/Menu.svg";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Enterprise",
    href: "enterprise",
  },
  {
    name: "Careers",
    href: "careers",
  },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
        <div className="flex items-center gap-14">
          <Link href="#hero" aria-label="Go to home">
            <Image src={Logo} alt="Logo" className="h-10 w-10" />
          </Link>

          <div className="hidden lg:flex gap-14">
            {navLinks.map((item, i) => (
              <Link
                href={item.href}
                key={i}
                className="text-neutral-800 font-medium hover:text-purple-700 focus:text-purple-700"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          <span className="hidden lg:block font-medium text-neutral-800 pr-12">
            Create an account
          </span>
          <div className="flex items-center gap-4">
            <Image src={User} alt="User profile" className="cursor-pointer" />
            <span className="hidden lg:block font-medium text-neutral-800">
              Sign In
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden"
            aria-label="Open menu"
          >
            <Image src={Menu} alt="Open menu" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center gap-6 bg-white py-4 shadow-lg absolute top-full w-full z-10">
          {navLinks.map((item, i) => (
            <Link
              href={item.href}
              key={i}
              className="text-neutral-800 font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
