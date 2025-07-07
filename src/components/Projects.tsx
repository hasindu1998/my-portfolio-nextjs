"use client";
import Image from "next/image";
import { ExternalLink, Github, MoveRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Projects = () => {
  const projects = [
    {
      title: "Hospital Management System",
      description:
        "A web-based application to manage hospital operations including patient registration, appointment scheduling, doctor management.",
      image: "/HospitalManagementDashboard.jpeg",
      tags: ["Java", "MySQL", "HTML", "TailwindCSS"],
      github: "https://github.com/hasindu1998/Hospital_Management_System",
      live: "#",
    },
    {
      title: "Movie Finder",
      description:
        "An online pharmacy portal designed to streamline and manage pharmacy operations, including medicine inventory, customer orders, and delivery tracking.",
      image: "MovieFinder.png",
      tags: ["ReactJS"],
      github: "https://github.com/hasindu1998/movie_find_react",
      live: "https://hasindu1998.github.io/movie_find_react/",
    },
    {
      title: "Product Management Dashboard",
      description:
        "A product management dashboard built to efficiently track, organize, and manage product listings, inventory, and performance analytics in one centralized interface.",
      image: "/ProductDashbord.png",
      tags: ["Next.js", "Springboot", "MySQL"],
      github: "https://github.com/hasindu1998/CRUD_Springboot",
      live: "#",
    },
  ];

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState(projects.map(() => false));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((ref, index) => {
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
        { threshold: 0.15 }
      );
      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <section id="Projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-gray-700">
            A showcase of my recent work and creative solutions I&apos;ve built.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`glass-card rounded-2xl overflow-hidden bg-transparent backdrop-blur-2xl shadow-xl transform transition-all duration-700 ease-in-out ${
                visible[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-gray-700">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full bg-gradient-to-r from-purple-700 to-purple-500 text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex pr-3 pl-3 py-2 items-center rounded-md shadow-md shadow-purple-300 border-0 text-gray-700 hover-glow transition duration-500 hover:scale-105 hover:bg-gradient-to-r from-purple-700 to-purple-500 hover:text-white"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Link>
                  <Link
                    href={project.live}
                    target="_blank"
                    className="flex pr-3 pl-3 py-2 items-center rounded-md shadow-md shadow-purple-300 border-0 text-gray-700 hover-glow transition duration-500 hover:scale-105 hover:bg-gradient-to-r from-purple-700 to-purple-500 hover:text-white"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12 flex justify-center">
          <button className="flex gap-3 items-center pr-3 pl-3 py-2 cursor-pointer rounded-md shadow-md shadow-purple-300 border-0 text-gray-700 hover-glow transition duration-500 hover:scale-105 hover:bg-gradient-to-r from-purple-700 to-purple-500 hover:text-white">
            <p>View All Projects</p>
            <MoveRight size={25} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
