"use client";
import Image from "next/image";
import React, { useState } from "react";
import HamburgerMenu from "../../public/HamburgerMenu.png";

const NavBar = () => {
  const menuList = ["Home", "About", "Services", "Project", "Contact"];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-transparent text-gray-600 p-4">
      <div className="flex items-center justify-between lg:pl-10 lg:pr-10">
        {/* Logo */}
        <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent">
          Hasi.dev
        </h3>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-between items-center gap-15 text-gray-600">
          {menuList.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer font-semibold transition-transform duration-300 hover:scale-105 hover:text-purple-600"
            >
              {item}
            </li>
          ))}
          <li><button className="font-semibold bg-gradient-to-r from-purple-500 to-purple-800 text-white pt-2 pb-2 pr-3 pl-3 rounded-lg cursor-pointer hover:opacity-80 transition-transform duration-300">Download CV</button></li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden transition-transform duration-300 active:scale-90"
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

      {/* Animated Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-2 mt-4">
          {menuList.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer px-2 py-1 rounded hover:bg-red-100 transition-all duration-300 hover:scale-105"
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
