"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Skills = () => {
  const images = [
    { name: "Figma", path: "/Figma.svg" },
    { name: "Git", path: "/Git.svg" },
    { name: "GitHub", path: "/GitHub.svg" },
    { name: "HTML", path: "/HTML.svg" },
    { name: "Illustrator", path: "/Illustrator.svg" },
    { name: "Java", path: "/Java.svg" },
    { name: "JavaScript", path: "/JS.svg" },
    { name: "CSS", path: "/CSS.svg" },
    { name: "Docker", path: "/Docker.svg" },
    { name: "Material UI", path: "/MaterialUI-Dark.svg" },
    { name: "MySQL", path: "/MySQL.svg" },
    { name: "NextJS", path: "/NextJS-Dark.svg" },
    { name: "Photoshop", path: "/Photoshop.svg" },
    { name: "PHP", path: "/PHP.svg" },
    { name: "Postman", path: "/Postman.svg" },
    { name: "React", path: "/React.svg" },
    { name: "Spring", path: "/Spring-Dark.svg" },
    { name: "Tailwind", path: "/Tailwind.svg" },
    { name: "TypeScript", path: "/TS.svg" },
  ];

  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState(images.map(() => false));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    iconRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section id="Skills" className="bg-white">
      <div className="pb-20 px-6">
        {/* Title */}
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

        {/* Icons */}
        <div className="flex flex-wrap gap-6 justify-center items-center max-w-5xl m-auto">
          {images.map((image, index) => (
            <div
              key={image.name}
              ref={(el) => {
                iconRefs.current[index] = el;
              }}
              className={`transition-all duration-700 ease-in-out transform ${
                visible[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
              title={image.name}
            >
              <Image
                src={image.path}
                alt={image.name}
                width={50}
                height={50}
                className="hover:scale-125 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
