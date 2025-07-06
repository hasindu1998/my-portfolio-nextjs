import React from "react";

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
    <div className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions and bringing ideas to
            life through code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="slide-up">
            <div className="glass-card p-8 rounded-2xl hover-lift hover:shadow-lg hover:shadow-purple-400 transition duration-500 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4 text-primary text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500 ">
                My Journey
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Hello! I'm Hasindu Chanuka, an enthusiastic and dedicated IT
                undergraduate at SLIIT, with a strong passion for Software
                Engineering, Web Development, and UI/UX Design. I thrive on
                building creative, functional, and user-friendly digital
                experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in continuous learning and staying updated with the
                latest trends in technology. When I'm not coding, you can find
                me exploring new frameworks, contributing to open-source
                projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          <div className="slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-6">
                {myWorks.map((myWorks, index) => (
                  <div className="glass-card p-6 rounded-xl shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-purple-400 ">
                    <h4 className="text-lg font-semibold mb-2 text-primary text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500">
                      {myWorks.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {myWorks.description}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
