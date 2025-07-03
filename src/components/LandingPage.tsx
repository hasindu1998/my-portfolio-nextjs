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
      // Typing
      if (text.length < currentTitle.length) {
        timeout = setTimeout(() => {
          setText(currentTitle.substring(0, text.length + 1));
        }, TYPING_SPEED);
      } else {
        // Pause before deleting
        timeout = setTimeout(() => setIsDeleting(true), PAUSE_TIME);
      }
    } else {
      // Deleting
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentTitle.substring(0, text.length - 1));
        }, DELETING_SPEED);
      } else {
        // Move to next title after deleting
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, titleIndex]);

  return (
    <div>
      <div className="relative h-screen w-screen">
        <Image
          src={HomeBackground}
          alt="Home Background"
          fill
          className="object-cover -z-10"
          priority
        />
      </div>

      <div className="absolute top-1/3 items-center space-y-4 text-white z-10 ml-15">
        <h4 className="text-3xl text-purple-500 font-semibold text-left">
          Hello!
        </h4>
        <h1 className="text-7xl text-gray-700 font-extrabold">
          I'm Hasindu Chanuka
        </h1>
        <h3 className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-purple-900 bg-clip-text text-transparent">
          {text}
        </h3>
      </div>
       <div className="absolute top-3/5 ml-20">
          <ul className="flex gap-10 mt-20">
            {socialMediaIcons.map((socialMediaIcons, index) => (
              <li
                key={index}
                className="text-gray-500 text-2xl hover:text-purple-500 transform transition duration-500 hover:scale-125 flex justify-center items-center"
              >
                <a target="_blank" href={socialMediaIcons.url}>
                  {socialMediaIcons.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
};

export default LandingPage;
