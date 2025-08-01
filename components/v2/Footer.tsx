"use client";
import React from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowUp,
} from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Services", href: "#services" },
    { name: "Techs Skills", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: "GitHub",
      url: "https://github.com/ANDRIANALISOA-sylvere",
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/josephin-sylvere",
    },
    {
      icon: <Twitter size={20} />,
      label: "Twitter",
      url: "https://x.com/sylverejosephin",
    },
    {
      icon: <Mail size={20} />,
      label: "Email",
      url: "mailto:josephinsylvere@gmail.com",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-t border-gray-200/50 dark:border-gray-700/50">
      {/* Decorative backgrounds */}
      <div className="absolute top-0 left-10 w-32 h-32 bg-gradient-to-br from-[#CC66DA] to-[#FAEB92] rounded-full opacity-5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-24 h-24 bg-[#FAEB92] rounded-full opacity-10 blur-2xl pointer-events-none"></div>

      <div className="px-4 sm:px-8 lg:px-16 py-8 sm:py-12 lg:py-16">
        {/* Main grid content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="w-20 h-10 mb-3 bg-gradient-to-r from-[#CC66DA] to-[#FAEB92] rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-lg monument">
                  JS
                </span>
              </div>
              <p className="text-[#CC66DA] dark:text-[#FAEB92] font-medium">
                Backend Developer
              </p>
            </div>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-md text-sm sm:text-base">
              Passionate about building scalable backend solutions and crafting
              efficient APIs. Always exploring new technologies and sharing
              knowledge with the community.
            </p>

            {/* Contact info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <Mail
                  size={16}
                  className="text-[#CC66DA] dark:text-[#FAEB92]"
                />
                <a
                  href="mailto:josephinsylvere@gmail.com"
                  className="hover:text-[#CC66DA] dark:hover:text-[#FAEB92] transition-colors"
                >
                  josephinsylvere@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <Phone
                  size={16}
                  className="text-[#CC66DA] dark:text-[#FAEB92]"
                />
                <a
                  href="tel:+261343947844"
                  className="hover:text-[#CC66DA] dark:hover:text-[#FAEB92] transition-colors"
                >
                  +261 34 39 478 44
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <MapPin
                  size={16}
                  className="text-[#CC66DA] dark:text-[#FAEB92]"
                />
                <span>Fianarantsoa, Madagascar</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h4>
            <nav className="space-y-2 text-sm">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-600 dark:text-gray-300 hover:text-[#CC66DA] dark:hover:text-[#FAEB92] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Newsletter + Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Stay Connected
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Follow me on social media for updates and tech insights.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  className="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-[#CC66DA] dark:hover:bg-[#FAEB92] hover:text-white dark:hover:text-black rounded-full transition duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Newsletter */}
            {/* <div className="space-y-2 text-sm">
              <p className="text-gray-600 dark:text-gray-300">Get notified about new projects</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="flex-1 px-3 py-2 text-sm bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:border-[#CC66DA] dark:focus:border-[#FAEB92] focus:outline-none"
                />
                <button className="px-4 py-2 bg-[#CC66DA] hover:bg-[#FAEB92] text-white dark:text-black text-sm rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div> */}
          </div>
        </div>

        {/* Footer bottom */}
        <div className="pt-8 border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <span>
                © {currentYear} ANDRIANALISOA Joséphin Sylvère. Made with
              </span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>and lots of coffee.</span>
            </div>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 hover:text-[#CC66DA] dark:hover:text-[#FAEB92] transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp
                size={16}
                className="group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
