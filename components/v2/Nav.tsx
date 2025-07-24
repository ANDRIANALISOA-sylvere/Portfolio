"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, Code, Wrench, FolderOpen, Briefcase, MessageCircle } from "lucide-react";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  const menuItems = [
    { 
      name: "What I Do", 
      section: "services", 
      icon: <Code size={18} />,
      description: "Services"
    },
    { 
      name: "Tech Skills", 
      section: "skills",
      icon: <Wrench size={18} />,
      description: "Technologies"
    },
    { 
      name: "Projects", 
      section: "projects", 
      icon: <FolderOpen size={18} />,
      description: "Portfolio"
    },
    { 
      name: "Experience", 
      section: "experience", 
      icon: <Briefcase size={18} />,
      description: "Career"
    }
  ];

  return (
    <>
      {/* Navigation Desktop */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg border-b border-white/20 dark:border-gray-700/20' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <div className="flex items-center gap-3">
              <div className="w-24 h-10 bg-gradient-to-r from-[#CC66DA] to-[#FAEB92] rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-lg monument">JS</span>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              {menuItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.section)}
                  className={`group cursor-pointer relative px-4 py-2 flex items-center gap-2 transition-all duration-300 transform hover:scale-105 text-gray-700 dark:text-gray-300 hover:text-[#CC66DA] dark:hover:text-[#CC66DA]`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className={`transition-opacity duration-300 opacity-0 group-hover:opacity-100`}>
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.name}</span>
                  
                  {/* Effet de soulignement gradient */}
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#CC66DA] to-[#FAEB92] transition-all duration-300 w-0 group-hover:w-full`}></div>
                  
                  {/* Tooltip */}
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#CC66DA] to-[#FAEB92] text-black px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                    {item.description}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-[#CC66DA] to-[#FAEB92] rotate-45"></div>
                  </div>
                </button>
              ))}
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden lg:block">
              <button
                onClick={() => scrollToSection("contact")}
                className="group cursor-pointer relative px-6 py-3 bg-gradient-to-r from-[#CC66DA] to-[#FAEB92] text-black font-medium rounded-full hover:shadow-lg hover:shadow-[#CC66DA]/25 transform hover:scale-105 transition-all duration-300 animate-pulse-slow"
              >
                <span className="relative z-10">Let&apos;s Talk</span>
                <MessageCircle 
                  size={16} 
                  className="inline ml-2 transition-transform group-hover:translate-x-1 duration-300" 
                />
              </button>
            </div>

            {/* Menu Mobile Button */}
            <button
              className="lg:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-[#CC66DA] transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-white/20 dark:border-gray-700/20 transition-all duration-500 ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}>
          <div className="container mx-auto px-6 py-6">
            {menuItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.section)}
                className={`group w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 animate-fade-in-mobile text-gray-700 dark:text-gray-300 hover:text-[#CC66DA] dark:hover:text-[#CC66DA] hover:bg-gray-50 dark:hover:bg-gray-800/50`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-10 h-10 rounded-lg backdrop-blur-sm shadow-lg border border-white/30 dark:border-gray-600/30 flex items-center justify-center transition-all duration-300 bg-white/20 dark:bg-gray-800/30 group-hover:bg-gradient-to-r group-hover:from-[#CC66DA]/20 group-hover:to-[#FAEB92]/20`}>
                  {item.icon}
                </div>
                <div className="flex-1 text-left">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{item.description}</div>
                </div>
              </button>
            ))}
            
            {/* CTA Mobile */}
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-[#CC66DA] to-[#FAEB92] text-black font-medium rounded-full hover:shadow-lg hover:shadow-[#CC66DA]/25 transform hover:scale-105 transition-all duration-300"
              >
                <span>Let&apos;s Work Together</span>
                <MessageCircle size={18} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Éléments décoratifs flottants */}
      <div className="fixed top-4 right-4 w-4 h-4 bg-gradient-to-br from-[#CC66DA] to-[#FAEB92] rounded-full opacity-40 dark:opacity-50 animate-float z-30"></div>
      <div className="fixed top-20 right-20 w-2 h-2 bg-[#CC66DA] rounded-full opacity-30 dark:opacity-40 animate-ping z-30"></div>

      <style jsx>{`
        @keyframes fade-in-mobile {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(204, 102, 218, 0.4);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(204, 102, 218, 0);
          }
        }

        .animate-fade-in-mobile {
          animation: fade-in-mobile 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
      `}</style>
    </>
  );
};