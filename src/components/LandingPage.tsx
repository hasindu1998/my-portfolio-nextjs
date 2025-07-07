"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import HomeBackground from "../../public/HomeBackground.jpg";
import me from "../../public/me.png";
import { Linkedin, Instagram, Github, Facebook } from 'lucide-react';

const titles = ["Full Stack Developer.", "UI/UX Designer.", "Freelancer."];
const socialMediaIcons = [
  {
    icon: <Linkedin />,
    url: "https://www.linkedin.com/in/hasindu-chanuka-809a6a25b/",
    name: "LinkedIn",
  },
  {
    icon: <Instagram />,
    url: "https://www.instagram.com/_.hasindu_98/",
    name: "Instagram",
  },
  {
    icon: <Github />,
    url: "https://github.com/hasindu1998",
    name: "GitHub",
  },
  {
    icon: <Facebook />,
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
    <section id="Hero" className="bg-white">
      <div className="relative h-screen w-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src={HomeBackground}
        alt="Home Background"
        fill
        className="lg:object-cover -z-10 lg:h-4/5 md:h-full transition-opacity duration-1000 ease-in"
        priority
      />

      {/* Main Content */}
      <div>
        <div className="flex justify-center">
          <Image
            src={me}
            className="absolute bottom-0 md:top-40 top-56 lg:w-1/3 z-2 md:h-4/5 md:w-3/6"
            alt="my-image"
          />
        </div>
        <div className="flex justify-center text-center">
          <div>
            <div className="z-10 ml-2 flex flex-col items-start space-y-4 text-white animate-fade-in-down">
              <h4 className="mb-0 lg:text-3xl lg:mt-52 md:text-2xl md:mt-52 mt-32 text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500 font-bold uppercase animate-slide-in-left transition duration-700">
                Hello! I am
              </h4>
              <h1 className="mt-10 invisible md:visible xl:visible lg:visible xl:text-9xl lg:text-8xl lg:mt-6 md:text-7xl md:mt-4 text-4xl text-gray-700 font-extrabold animate-slide-in-left transition duration-1000">
                Hasindu &#160; &#160; &#160; Chanuka
              </h1>
              <h1 className="-mt-24 visible md:invisible xl:invisible lg:invisible xl:text-9xl lg:text-8xl lg:mt-6 md:text-7xl md:mt-4 text-4xl text-gray-700 font-extrabold animate-slide-in-left transition duration-1000">
                Hasindu Chanuka
              </h1>

              <h3 className="text-2xl xl:text-4xl xl:-mt-40 lg:text-3xl lg:-mt-32 md:text-2xl md:-mt-24 font-bold bg-gradient-to-r from-purple-500 to-purple-900 bg-clip-text text-transparent animate-pulse">
                {text}
              </h3>
            </div>
          </div>

          {/* Social Media Icons */}
          <div>
            <ul className="md:flex lg:gap-12 xl:absolute xl:bottom-80 xl:right-60 lg:absolute lg:bottom-68 lg:right-22 md:absolute md:bottom-74 md:right-14 md:gap-8 absolute right-8 bottom-60  transition-all duration-700 ease-in-out">
              {socialMediaIcons.map((social, index) => (
                <li
                  key={index}
                  className="text-gray-500 lg:text-3xl md:text-2xl text-2xl mb-6 hover:text-purple-500 transition-transform duration-300 hover:scale-125"
                >
                  <a
                    target="_blank"
                    href={social.url}
                    rel="noopener noreferrer"
                    className={social.name}
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default LandingPage;
