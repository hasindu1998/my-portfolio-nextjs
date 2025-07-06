import React from "react";
import Image from "next/image";
import path from "path";

const Skills = () => {
  const images = [
    { name: "Figma", path: "Figma.svg" },
    { name: "Git", path: "Git.svg" },
    { name: "GiHub", path: "GitHub.svg" },
    { name: "HTML", path: "HTML.svg" },
    { name: "Illustrator", path: "Illustrator.svg" },
    { name: "Java", path: "Java.svg" },
    { name: "JS", path: "JS.svg" },
    { name: "css", path: "/CSS.svg" },
    { name: "docker", path: "/Docker.svg" },
    { name: "MaterialUI", path: "MaterialUI-Dark.svg" },
    { name: "MySQL", path: "MySQL.svg" },
    { name: "NextJS", path: "NextJS-Dark.svg" },
    { name: "Photoshop", path: "Photoshop.svg" },
    { name: "PHP", path: "PHP.svg" },
    { name: "Postman", path: "Postman.svg" },
    { name: "React", path: "React.svg" },
    { name: "Spring-Dark", path: "Spring-Dark.svg" },
    { name: "Tailwind", path: "Tailwind.svg" },
    { name: "TS", path: "TS.svg" },
  ];
  return (
    <section>
      <div className="bg-gray-100 pb-20 pl-6 pr-6">
        <div className="text-center mb-16 z-30">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500">
              Skills
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-semibold text-gray-700">
            Technologies I work with
          </p>
        </div>
        <div className="flex flex-wrap gap-6 justify-center items-center max-w-5xl m-auto">
          {images.map((images, index) => (
            <Image
              src={images.path}
              alt="Hamburger"
              key={index}
              width={50}
              height={50}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
