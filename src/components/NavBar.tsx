"use client";
import Image from "next/image";
import React, { useState } from "react";
import HamburgerMenu from "../../public/HamburgerMenu.png";

const NavBar = () => {
  const menuList = ["Home", "About", "Services", "Projects", "Contact"];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-transparent text-gray-800 p-4 backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 lg:px-10">
        {/* Logo */}
        <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent">
          Hasindu
        </h3>

        {/* Desktop Menu (Visible on lg and up) */}
        <ul className="hidden lg:flex gap-10 items-center text-gray-800">
          {menuList.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer font-semibold transition-transform duration-300 hover:scale-105 hover:text-purple-600"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Hamburger Button (Visible below lg) */}
        <button
          className="lg:hidden transition-transform duration-300 active:scale-90"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <Image
            src={HamburgerMenu}
            alt="Hamburger Menu"
            width={30}
            height={30}
          />
        </button>
      </div>

      {/* Animated Mobile Menu (Visible below lg) */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out lg:hidden backdrop-blur-lg font-semibold ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-2 mt-4 px-4">
          {menuList.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer px-2 py-1 rounded hover:bg-purple-100 transition-all duration-300 hover:scale-105"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
