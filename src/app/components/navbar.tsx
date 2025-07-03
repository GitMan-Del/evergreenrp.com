"use client";

import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#", highlight: true },
  { name: "Servers", href: "#" },
  { name: "Store", href: "#" },
  { name: "Team", href: "#" },
  { name: "Documentation", href: "#" },
];

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => setSidebarOpen((open) => !open);

  return (
    <nav className="w-full fixed top-0 left-0 z-[100] --border border-t-0">
      <div className="max-w-[60%] mx-auto backdrop-blur-md flex items-center px-6 --border border-t-0 border-b-0 py-2 justify-between">
        <Image
          width={50}
          height={50}
          className="md:h-15 md:w-15 w-10 h-10 rounded-md"
          src="/logo.png"
          alt="logo"
        />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-center w-full h-full">
          <ul className="flex space-x-5 text-white text-sm font-semibold">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`px-4 py-2 relative transition duration-300 ${
                    link.highlight
                      ? "font-bold text-[#00E690]"
                      : "hover:text-[#00E690]"
                  }`}
                >
                  {link.name}
                  {link.highlight && (
                    <span className="absolute -bottom-2 right-1/2 translate-x-1/2 w-2 h-2 bg-[#00E690] rounded-full"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden ml-auto flex items-center justify-center p-2 rounded focus:outline-none"
          onClick={handleSidebarToggle}
          aria-label="Open menu"
        >
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#181818] z-[200] shadow-lg transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#222]">
          <Image
            width={40}
            height={40}
            className="h-10 w-10 rounded-md"
            src="/logo.png"
            alt="logo"
          />
          <button
            className="p-2 rounded focus:outline-none"
            onClick={handleSidebarToggle}
            aria-label="Close menu"
          >
            <svg
              className="w-7 h-7 text-white hover:cursor-pointer"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col space-y-2 mt-6 px-6 text-white text-base font-semibold">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`block px-2 py-3 rounded transition duration-200 ${
                  link.highlight
                    ? "font-bold text-[#00E690] bg-[#232323]"
                    : "hover:text-[#00E690] hover:bg-[#232323]"
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-[150] bg-black/40 md:hidden"
          onClick={handleSidebarToggle}
        />
      )}
    </nav>
  );
};

export default Navbar;