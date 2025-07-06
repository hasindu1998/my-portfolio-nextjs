import React from "react";
import Image from "next/image";
import HomeBackgroundReverse from "../../public/HomeBackgroundReverse.jpg";
import Home from "@/app/page";
import { Route } from "lucide-react";

const About = () => {
  const myWorks = [
    {
      title: "Frontend Development",
      description:
        "Creating responsive and interactive user interfaces with React,Next.js,Typescript, Vue, and modern CSS frameworks.",
    },
    {
      title: "Backend Development",
      description:
        "Building robust APIs and server-side applications with Java, Springboot",
    },
    {
      title: "UI/UX Design",
      description:
        "Designing intuitive and aesthetically pleasing interfaces that enhance user experience.",
    },
  ];

  return (
    <div>
      <div className="py-20 bg-muted/30 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 z-30">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500">
                About Me
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-semibold text-gray-700">
              Passionate about creating innovative solutions and bringing ideas
              to life through code.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-up">
              <div className="glass-card p-8 backdrop-blur-xl bg-transparent rounded-2xl hover-lift shadow-md hover:shadow-md hover:shadow-purple-400 transition duration-500 hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4 text-primary text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500 ">
                  My Journey
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-gray-700">
                  Hi, I’m Hasindu Chanuka, an enthusiastic and motivated
                  undergraduate at the Sri Lanka Institute of Information
                  Technology (SLIIT), pursuing a BSc (Hons) in Information
                  Technology specializing in Software Engineering. I currently
                  hold a GPA of 3.52, reflecting my strong commitment to
                  academic and technical excellence.
                </p>
                <p className="text-muted-foreground leading-relaxed text-gray-700">
                  Alongside my studies, I’ve worked as a freelance graphic
                  designer on Fiverr, delivering creative branding solutions
                  while building strong client relationships through clear
                  communication and consistent quality. I’m passionate about
                  continuous learning, problem-solving, and turning ideas into
                  clean, effective designs through thoughtful development.
                </p>
              </div>
            </div>

            <div className="z-30">
              <div className="space-y-6">
                {myWorks.map((myWorks, index) => (
                  <div
                    key={index}
                    className="glass-card p-6 rounded-xl shadow-md transition-shadow duration-300 cursor-pointer hover:shadow-md hover:shadow-purple-400 "
                  >
                    <h4
                      key={index}
                      className="text-lg font-semibold mb-2 text-primary text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500"
                    >
                      {myWorks.title}
                    </h4>
                    <p className="text-muted-foreground text-gray-700">
                      {myWorks.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
