"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import HomeBackground from "../../public/HomeBackground.jpg";
import { FaLinkedin, FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";

const titles = ["Full Stack Developer.", "UI/UX Designer.", "Freelancer."];
const socialMediaIcons = [
  {
    icon: <FaLinkedin />,
    url: "https://linkedin.com/in/yourprofile",
    name: "LinkedIn",
  },
  {
    icon: <FaInstagram />,
    url: "https://instagram.com/yourprofile",
    name: "Instagram",
  },
  {
    icon: <FaGithub />,
    url: "https://github.com/yourprofile",
    name: "GitHub",
  },
  {
    icon: <FaFacebook />,
    url: "https://facebook.com/yourprofile",
    name: "Facebook",
  },
];

const TYPING_SPEED = 100;
const PAUSE_TIME = 1500;
const DELETING_SPEED = 50;

const LandingPage = () => {
  const [text, setText] = useState<string>("");
  const [titleIndex, setTitleIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentTitle = titles[titleIndex];

    if (!isDeleting) {
      if (text.length < currentTitle.length) {
        timeout = setTimeout(() => {
          setText(currentTitle.substring(0, text.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), PAUSE_TIME);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentTitle.substring(0, text.length - 1));
        }, DELETING_SPEED);
      } else {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, titleIndex]);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src={HomeBackground}
        alt="Home Background"
        fill
        className="object-cover -z-10 transition-opacity duration-1000 ease-in"
        priority
      />

      {/* Main Content */}
      <div className="absolute top-1/3 z-10 md:ml-20 ml-8 flex flex-col items-start space-y-4 text-white animate-fade-in-down">
        <h4 className="text-3xl text-purple-500 font-semibold animate-slide-in-left transition duration-700">
          Hello!
        </h4>
        <h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl text-gray-700 font-extrabold animate-slide-in-left transition duration-1000">
          I'm Hasindu Chanuka
        </h1>
        <h3 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold bg-gradient-to-r from-purple-500 to-purple-900 bg-clip-text text-transparent animate-pulse">
          {text}
        </h3>
      </div>

      {/* Social Media Icons */}
      <div>
        <ul className="flex gap-4 absolute md:bottom-58 bottom-56 left-6 md:left-18 transition-all duration-700 ease-in-out">
          {socialMediaIcons.map((social, index) => (
            <li
              key={index}
              className="p-3 text-gray-500 text-2xl hover:text-purple-500 transition-transform duration-300 hover:scale-125"
            >
              <a target="_blank" href={social.url} rel="noopener noreferrer">
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
