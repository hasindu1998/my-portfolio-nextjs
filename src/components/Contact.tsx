"use client";
import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  Calendar,
  Clock,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "hello@example.com",
      description: "Drop me a line anytime",
      color: "text-blue-500",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Available Mon-Fri, 9AM-6PM",
      color: "text-green-500",
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "San Francisco, CA",
      description: "Open to remote work",
      color: "text-purple-500",
    },
  ];

  const services = [
    "Full-stack web development",
    "Frontend consulting & optimization",
    "UI/UX design & prototyping",
    "Technical mentoring & coaching",
    "Code reviews & architecture planning",
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
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
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-purple-500/20 mb-8">
            <Sparkles size={16} className="text-purple-400 animate-pulse" />
            <span className="text-sm font-medium gradient-text">
              Let's Connect
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-foreground">Ready to bring</span>
            <br />
            <span className="gradient-text">Your Vision to Life?</span>
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed">
            Have a project in mind? Let's collaborate to create something
            extraordinary that makes a lasting impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="slide-up">
            {/* Contact methods */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="glass-card p-6 rounded-3xl hover-lift hover-glow group relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                  <div className="flex items-start gap-4 relative z-10">
                    <div className={`${info.color} p-3 glass-card rounded-2xl`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">
                        {info.title}
                      </h4>
                      <p className="text-foreground font-medium mb-1">
                        {info.value}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>


            <div className="glass-card p-8 rounded-3xl hover-glow">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="text-primary" size={24} />
                <h4 className="font-bold text-primary text-xl">
                  Available Services
                </h4>
              </div>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full"></div>
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl mt-6 text-center hover-glow">
              <Clock className="text-purple-400 mx-auto mb-3" size={24} />
              <p className="text-sm text-muted-foreground">
                <span className="gradient-text font-medium">
                  Quick Response:
                </span>{" "}
                Usually within 24 hours
              </p>
            </div>
          </div>

          <div className="slide-up" style={{ animationDelay: "0.3s" }}>
            <form
              onSubmit={handleSubmit}
              className="glass-card p-10 rounded-3xl hover-glow"
            >
              <h3 className="text-2xl font-bold gradient-text mb-8">
                Start Your Project
              </h3>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-3 text-primary"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="glass-card border-purple-200/30 h-12 rounded-xl focus:border-purple-400/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-3 text-primary"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      className="glass-card border-purple-200/30 h-12 rounded-xl focus:border-purple-400/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-3 text-primary"
                  >
                    Project Type
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Web Development, UI/UX Design, Consulting..."
                    required
                    className="glass-card border-purple-200/30 h-12 rounded-xl focus:border-purple-400/50 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-3 text-primary"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project goals, timeline, and any specific requirements..."
                    rows={6}
                    required
                    className="glass-card border-purple-200/30 rounded-xl resize-none focus:border-purple-400/50 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full gradient-bg border-0 text-white hover-glow font-semibold h-14 rounded-xl group"
                >
                  <Send
                    size={20}
                    className="mr-3 group-hover:translate-x-1 transition-transform"
                  />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
