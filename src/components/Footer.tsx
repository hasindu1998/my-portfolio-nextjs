
"use client"
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#Hero' },
    { name: 'About', href: '#About' },
    { name: 'Projects', href: '#Projects' },
    { name: 'Skills', href: '#Skills' },
    { name: 'Contact', href: '#Contact' }
  ];

  const services = [
    'Web Development',
    'UI/UX Design',
    'Mobile Apps',
    'Performance Optimization',
    'Technical Consulting'
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Ambient background */}

      <div className="relative z-10">


        {/* Footer Content */}
        <div className="">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Brand */}
              <div className="lg:col-span-2">
                <h3 className="text-3xl font-bold gradient-text mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500">
                  Hasindu Chanuka
                </h3>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed max-w-md text-gray-700">
                  Creating beautiful digital experiences with passion and precision. 
                  Transforming ideas into exceptional web solutions.
                </p>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: "#", label: "GitHub" },
                    { icon: Linkedin, href: "#", label: "LinkedIn" },
                    { icon: Mail, href: "mailto:contact@example.com", label: "Email" }
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="p-3 glass-card hover-glow rounded-2xl transition-all duration-300 group hover:text-purple-600"
                      aria-label={social.label}
                    >
                      <social.icon size={20} className="text-primary group-hover:scale-110 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-bold mb-6 text-primary text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500">
                  Navigation
                </h4>
                <div className="space-y-3">
                  {quickLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 text-gray-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-lg font-bold mb-6 text-primary text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500">
                  Services
                </h4>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full"></div>
                      <span className="text-muted-foreground text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-border/50 mt-16 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-muted-foreground flex items-center">
                  Made with <Heart size={16} className="text-red-500 mx-2" /> by Hasindu Chanuka
                  <span className="mx-3 text-gray-700">•</span>
                  © {currentYear} All rights reserved
                </p>
                
                <button
                  onClick={scrollToTop}
                  className="p-3 glass-card hover-glow rounded-2xl transition-all duration-300 group"
                  aria-label="Scroll to top"
                >
                  <ArrowUp size={20} className="text-primary group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
