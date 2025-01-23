"use client";
import Link from "next/link";
import styles from "./styles.module.scss";

interface NavLink {
  name: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  
  { name: "Products", href: "#products" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <div
      className={`${styles.navbar} fixed top-0 bg-newprimary z-50 w-full p-4 shadow-2xl`}
    >
      <div className="new-container flex justify-between items-center">
        {/* Logo Section */}
        <h1 className="text-2xl font-bold font-olive text-newaccent">
          JR-AirConditioner
        </h1>

        {/* Navigation Links */}
        <div>
          <ul className="flex gap-6">
            {NAV_LINKS.map((nav, index) => (
              <li
                key={index}
                className="text-white font-bold text-base capitalize"
              >
                <Link href={nav.href}>{nav.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us Button */}
        <div className="px-4 py-2 bg-white font-bold rounded-full cursor-pointer">
          <Link href={`#contact`}>Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
