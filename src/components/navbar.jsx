"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const socialLinks = [
  { url: "https://github.com/yourusername", src: "/github.png", alt: "github" },
  { url: "https://www.facebook.com/inoxent.malik.817310", src: "/facebook.png", alt: "facebook" },
  { url: "https://www.fiverr.com/users/insanegaming607/", src: "/fiver.png", alt: "fiver" },
  { url: "https://www.linkedin.com/in/haseeb-maqsood-069b66243", src: "/linkedin.png", alt: "linkedin" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="w-full fixed top-0 z-50 px-4 py-4">
      <div className="w-full max-w-6xl mx-auto bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-md">
        <div className="flex items-center justify-between px-6 h-16 relative">
          {/* LEFT LINKS (desktop only) */}
          <div className="hidden md:flex gap-8 font-medium text-gray-800">
            {links.map((link) => (
              <Link
                href={link.url}
                key={link.title}
                className={`hover:text-black transition-all duration-300 relative ${
                  pathname === link.url
                    ? "text-black font-semibold"
                    : "text-gray-700"
                }`}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* CENTER LOGO */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link
              href="/"
              className="text-sm bg-gradient-to-r from-gray-900 to-black rounded-xl px-3 py-1.5 font-bold flex items-center shadow-lg hover:scale-105 transition-transform duration-200"
            >
              <span className="text-white mr-1.5">Haseeb</span>
              <span className="bg-white text-black px-2 py-0.5 rounded-lg font-semibold">
                Maqsood
              </span>
            </Link>
          </div>

          {/* RIGHT SOCIAL ICONS (desktop only) */}
          <div className="hidden md:flex gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.alt}
                href={social.url}
                target="_blank"
                className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300 hover:scale-110"
              >
                <Image
                  src={social.src}
                  alt={social.alt}
                  width={20}
                  height={20}
                  className="opacity-80 hover:opacity-100"
                />
              </Link>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden z-40">
            <button
              className="w-8 h-6 flex flex-col z-50 justify-between"
              onClick={() => setOpen(!open)}
            >
              <span
                className={`h-0.5 w-8 bg-gray-900 rounded transition-all duration-300 ${
                  open ? "rotate-45 translate-y-2 z-50 bg-white" : ""
                }`}
              ></span>
              <span
                className={`h-0.5 w-8 bg-gray-900 rounded transition-all duration-300 ${
                  open ? "opacity-0" : "opacity-100 "
                }`}
              ></span>
              <span
                className={`h-0.5 w-8 bg-gray-900 rounded transition-all duration-300 ${
                  open ? "-rotate-45 -translate-y-2 z-50 bg-white"  : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: open ? "0%" : "100%" }}
        transition={{ type: "tween", duration: 0.4 }}
        className="fixed top-0 right-0 w-full h-screen bg-black/95 text-white flex flex-col items-center justify-center gap-10 text-2xl z-40"
      >
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.url}
            onClick={() => setOpen(false)}
            className={`transition-colors duration-300 ${
              pathname === link.url ? "text-yellow-300 font-bold" : ""
            }`}
          >
            {link.title}
          </Link>
        ))}

        {/* SOCIAL ICONS */}
        <div className="flex gap-6 mt-8">
          {socialLinks.map((social) => (
            <Link
              key={social.alt}
              href={social.url}
              target="_blank"
              className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300"
            >
              <Image src={social.src} alt={social.alt} width={24} height={24} />
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
