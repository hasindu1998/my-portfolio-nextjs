"use client";

import {
  Code,
  MonitorSmartphone,
  Paintbrush,
  PenTool,
  LayoutDashboard,
  Bug,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const Services = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: "Web Development",
      description:
        "Responsive and SEO-friendly websites built with modern technologies like React and Next.js.",
      color: "text-blue-500",
    },
    {
      icon: <MonitorSmartphone size={40} />,
      title: "Full-Stack Applications",
      description:
        "Robust frontend & backend solutions using Spring Boot, MySQL, and RESTful APIs.",
      color: "text-green-500",
    },
    {
      icon: <Paintbrush size={40} />,
      title: "UI/UX Design",
      description:
        "Clean, user-centric interface designs using Tailwind CSS, Figma, and Illustrator.",
      color: "text-teal-500",
    },
    {
      icon: <PenTool size={40} />,
      title: "Graphic Design",
      description:
        "Creative branding solutions including logos, business cards, and social media assets.",
      color: "text-pink-500",
    },
    {
      icon: <LayoutDashboard size={40} />,
      title: "Dashboard Development",
      description:
        "Interactive dashboards with CRUD functionality and intuitive layouts for management systems.",
      color: "text-yellow-500",
    },
    {
      icon: <Bug size={40} />,
      title: "Bug Fixing & Optimization",
      description:
        "Debugging and optimizing code for better performance, structure, and responsiveness.",
      color: "text-red-500",
    },
  ];

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(services.length).fill(false)
  );

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section id="Services" className="py-20 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 transition-all duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500">
              Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-gray-700 font-semibold">
            Comprehensive solutions to bring your digital vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`p-8 rounded-3xl group relative overflow-hidden shadow-lg hover:shadow-purple-400 hover:scale-[1.03] transition-all duration-700 ease-in-out transform ${
                visibleCards[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

              <div className={`${service.color} mb-6 relative z-10`}>
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500 relative z-10">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed relative z-10 text-gray-700">
                {service.description}
              </p>

              {/* Optional floating blur circle */}
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-violet-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
