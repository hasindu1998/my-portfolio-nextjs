"use client";

import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "chanukasankalpa456@gmail.com",
      description: "Drop me a line anytime",
      color: "text-blue-500",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+94 76 789 26 45",
      description: "Available Mon-Fri, 9AM-6PM",
      color: "text-green-500",
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Matara, Sri Lanka",
      description: "Open to remote work",
      color: "text-purple-500",
    },
  ];

  const socialMedia = [
    {
      name: "GitHub",
      icon: <Github size={28} />,
      url: "https://github.com/hasindu1998",
      color: "hover:text-gray-900",
      bgColor: "hover:bg-gray-100",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={28} />,
      url: "https://www.linkedin.com/in/hasindu-chanuka-809a6a25b/",
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-50",
    },
    {
      name: "Instagram",
      icon: <Instagram size={28} />,
      url: "https://www.instagram.com/_.hasindu_98/",
      color: "hover:text-pink-600",
      bgColor: "hover:bg-pink-50",
    },
    {
      name: "Facebook",
      icon: <Facebook size={28} />,
      url: "https://twitter.com/yourusername",
      color: "hover:text-blue-500",
      bgColor: "hover:bg-blue-50",
    },
  ];

  const services = [
    "Full-stack web development",
    "Frontend consulting & optimization",
    "UI/UX design & prototyping",
    "Technical mentoring & coaching",
    "Code reviews & architecture planning",
  ];

  // Refs and visible states for animation
  const contactRefs = useRef<(HTMLDivElement | null)[]>([]);
  const socialRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  const [visibleContact, setVisibleContact] = useState(contactInfo.map(() => false));
  const [visibleSocial, setVisibleSocial] = useState(socialMedia.map(() => false));
  const [visibleServices, setVisibleServices] = useState(false);
  const [visibleCta, setVisibleCta] = useState(false);

  useEffect(() => {
    // Animate contact info cards
    const contactObservers: IntersectionObserver[] = [];
    contactRefs.current.forEach((el, idx) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleContact((v) => {
              const newV = [...v];
              newV[idx] = true;
              return newV;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(el);
      contactObservers.push(observer);
    });

    // Animate social media links
    const socialObservers: IntersectionObserver[] = [];
    socialRefs.current.forEach((el, idx) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSocial((v) => {
              const newV = [...v];
              newV[idx] = true;
              return newV;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(el);
      socialObservers.push(observer);
    });

    // Animate services section
    const servicesObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleServices(true);
          servicesObserver.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (servicesRef.current) servicesObserver.observe(servicesRef.current);

    // Animate CTA
    const ctaObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCta(true);
          ctaObserver.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ctaRef.current) ctaObserver.observe(ctaRef.current);

    return () => {
      contactObservers.forEach((o) => o.disconnect());
      socialObservers.forEach((o) => o.disconnect());
      servicesObserver.disconnect();
      ctaObserver.disconnect();
    };
  }, []);

  return (
    <section id="Contact" className="py-24 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-violet-600/20 rounded-full blur-3xl float"></div>
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-violet-500/15 to-purple-600/15 rounded-full blur-3xl float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500">
              Contact Me
            </span>
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-gray-700">
            Ready to bring your ideas to life? Connect with me through any of these platforms{" "}
            and let&apos;s start creating something amazing together.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-2 ">
            <div className="grid md:grid-cols-3 gap-6 mb-12 ">
              {contactInfo.map((info, idx) => (
                <div
                  key={info.title}
                  ref={(el) => (contactRefs.current[idx] = el)}
                  className={`glass-card p-6 rounded-3xl hover-lift hover-glow group relative overflow-hidden shadow-md transition duration-500 hover:scale-105 transform ${
                    visibleContact[idx]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                  <div className="flex flex-col items-center text-center relative z-10 ">
                    <div className={`${info.color} p-3 glass-card rounded-2xl mb-4`}>
                      {info.icon}
                    </div>
                    <h4 className="font-bold text-primary mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500">
                      {info.title}
                    </h4>
                    <p className="text-foreground font-medium mb-1 text-gray-700">{info.value}</p>
                    <p className="text-muted-foreground text-sm text-gray-700">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Section */}
            <div
              className="glass-card p-8 rounded-3xl hover-glow shadow-lg hover:shadow-xl hover:shadow-purple-200 transition duration-500"
            >
              <h3 className="text-2xl font-bold gradient-text mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500">
                Connect on Social Media
              </h3>
              <p className="text-muted-foreground text-center mb-8 text-gray-700">
                Follow me for updates, insights, and behind-the-scenes content
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 shadow-lg rounded-xl">
                {socialMedia.map((social, idx) => (
                  <a
                    key={social.name}
                    ref={(el) => (socialRefs.current[idx] = el)}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col text-gray-700 items-center p-6 glass-card rounded-2xl hover-lift transition-all duration-300 transform ${
                      visibleSocial[idx]
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-12"
                    } ${social.bgColor} ${social.color}`}
                    style={{ transitionDelay: `${idx * 120}ms` }}
                  >
                    <div className="mb-3 transition-transform group-hover:scale-110 duration-300">
                      {social.icon}
                    </div>
                    <span className="text-sm font-medium text-foreground group-hover:text-inherit transition-colors ">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services offered */}
          <div
            ref={servicesRef}
            className={`glass-card p-8 rounded-3xl hover-glow h-fit shadow-lg hover:shadow-xl hover:shadow-purple-200 transition duration-500 transform ${
              visibleServices ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <h4 className="font-bold text-primary text-xl mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500">
              Services I Offer
            </h4>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground text-sm leading-relaxed text-gray-700">
                    {service}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-purple-200/30">
              <p className="text-center text-sm text-muted-foreground text-gray-700">
                <span className="gradient-text font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500">
                  Quick Response:
                </span>
                <br />
                Usually within 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div
          ref={ctaRef}
          className={`text-center glass-card p-8 rounded-3xl hover-glow max-w-2xl mx-auto shadow-lg hover:shadow-xl hover:shadow-purple-200 transition duration-500 transform ${
            visibleCta ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500">
            Ready to Start Your Project?
          </h3>
          <p className="text-muted-foreground mb-6">
            Choose your preferred way to reach out, and let&apos;s discuss how we can bring your vision to
            life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@example.com"
              className="pr-4 pl-4 py-3 text-center rounded-md shadow-md shadow-purple-300 border-0 hover-glow transition duration-500 hover:scale-105 bg-gradient-to-r from-purple-700 to-purple-500 text-white"
            >
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/hasindu-chanuka-809a6a25b/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 pr-3 pl-3 text-center rounded-md shadow-md shadow-purple-300 border-0 text-gray-700 hover-glow transition duration-500 hover:scale-105 hover:bg-gradient-to-r from-purple-700 to-purple-500 hover:text-white"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
