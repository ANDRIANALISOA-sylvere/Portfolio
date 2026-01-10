"use client";
import Image from "next/image";
import Avatar from "../../public/images/avatar.jpeg";
import React from "react";
import { ChevronDown, Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

export const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const handleClick = () => {
    window.open(
      "https://josephin-sylvere.vercel.app/CV.pdf",
      "_blank",
      "noopener,noreferrer"
    );
  };
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  const avatarVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <>
      <header className="relative w-full min-h-screen px-4 sm:px-8 lg:px-16 overflow-x-hidden overflow-y-hidden mt-4 sm:mt-6 lg:mt-8 transition-colors duration-300">
        {/* Éléments décoratifs flottants avec effet de flou */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.1, 0.15] }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 left-4 sm:left-10 w-32 sm:w-40 lg:w-50 h-32 sm:h-40 lg:h-50 bg-gradient-to-br from-[#CC66DA] to-[#FAEB92] rounded-full opacity-10 sm:opacity-15 lg:opacity-20 dark:opacity-20 sm:dark:opacity-25 lg:dark:opacity-30 blur-2xl"
        />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.2, 0.25] }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-32 right-8 sm:right-16 lg:right-20 w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-gradient-to-br from-[#FAEB92] to-[#CC66DA] rounded-full opacity-20 sm:opacity-25 lg:opacity-30 dark:opacity-30 sm:dark:opacity-35 lg:dark:opacity-40 blur-2xl"
        />

        <motion.div 
          animate={{ 
            opacity: [0.3, 0.4, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-1/2 left-8 sm:left-16 lg:left-20 w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 bg-[#CC66DA] rounded-full opacity-30 sm:opacity-35 lg:opacity-40 dark:opacity-40 sm:dark:opacity-45 lg:dark:opacity-50"
        />

        <div className="relative z-10 container mx-auto px-2 sm:px-6 min-h-screen flex items-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 w-full"
          >
            {/* Section Texte */}
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
              {/* Badge d'introduction amélioré */}
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-700/90 backdrop-blur-md px-2 sm:px-3 py-1 sm:py-1 rounded-full sm:rounded-full text-xs sm:text-sm font-medium shadow-xl border border-white/20 dark:border-gray-600/20 mb-4 sm:mb-6 hover:shadow-2xl transition-all duration-300">
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-[#CC66DA] to-[#FAEB92] rounded-full animate-pulse" />
                <span className="text-gray-700 dark:text-gray-300">
                  Hello there! I&apos;m
                </span>
                <div className="w-1 h-1 bg-[#CC66DA] rounded-full" />
              </motion.div>

              {/* Titre Principal */}
              <motion.h1 variants={itemVariants} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold monument mb-4 sm:mb-6 text-gray-900 dark:text-white leading-tight">
                <span
                  className="text-stroke uppercase tracking-wider"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1px #FFFFFF",
                  }}
                >
                  ANDRIANALISOA
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#CC66DA] to-[#FAEB92] bg-clip-text text-transparent animate-gradient">
                  Joséphin Sylvère
                </span>
              </motion.h1>

              {/* Sous-titre */}
              <motion.h2 variants={itemVariants} className="monument text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-4 sm:mb-6 flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3">
                <span className="bg-gradient-to-r from-[#CC66DA] to-purple-600 px-3 sm:px-4 py-1 sm:py-2 rounded-none text-white shadow-lg transform hover:scale-105 transition-transform text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                  Backend
                </span>
                <span className="text-gray-700 dark:text-gray-300 font-light">
                  Developer
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl leading-relaxed px-2 sm:px-0">
                Passionate backend developer crafting robust and scalable
                solutions.
                <span className="text-[#CC66DA] font-semibold">
                  {" "}
                  Transforming ideas into powerful applications{" "}
                </span>
                that drive business success.
              </motion.p>

              {/* Boutons d'Action */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mt-4 sm:mt-5 mb-6 sm:mb-8 px-4 sm:px-0">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleClick}
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-[#CC66DA] to-[#FAEB92] text-black font-medium rounded-full hover:shadow-sm hover:shadow-[#CC66DA]/25 transition-all duration-300 cursor-pointer text-sm sm:text-base"
                >
                  <span className="relative z-10">Download CV</span>
                  <Download
                    size={16}
                    className="sm:w-[18px] sm:h-[18px] transition-transform group-hover:translate-y-[-2px] duration-300"
                  />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("contact")}
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-center gap-2 sm:gap-3 bg-transparent border-2 border-[#CC66DA] text-[#CC66DA] dark:text-[#CC66DA] rounded-full font-medium hover:bg-[#CC66DA]/10 transition-all duration-300 hover:shadow-sm hover:shadow-[#CC66DA]/25 cursor-pointer text-sm sm:text-base"
                >
                  <span className="relative z-10">Contact Me</span>
                  <Mail
                    size={16}
                    className="sm:w-[18px] sm:h-[18px] transition-transform group-hover:translate-x-1 duration-300"
                  />
                </motion.button>
              </motion.div>
            </div>

            {/* Section Avatar */}
            <motion.div 
              initial="hidden"
              animate="visible"
              transition={avatarVariants}
              className="relative flex-shrink-0 lg:flex-shrink-1 order-1 lg:order-2"
            >
              <div className="relative z-10 group">
                <Image
                  src={Avatar}
                  alt="Joséphin Sylvère - Backend Developer"
                  width={250}
                  height={250}
                  className="relative z-20 border-2 sm:border-4 rounded-full border-white dark:border-gray-300 shadow-2xl w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-[350px] xl:h-[350px] object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Indicateur de scroll - Masqué sur mobile */}
          {!isMobile && (
            <motion.div
              animate={{
                y: [0, 10, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <div className="flex flex-col items-center text-gray-400 dark:text-gray-500 hover:text-[#CC66DA] dark:hover:text-[#FAEB92] transition-colors cursor-pointer">
                <span className="text-xs sm:text-sm mb-1 sm:mb-2 font-medium">
                  Scroll down
                </span>
                <ChevronDown size={20} className="sm:w-6 sm:h-6" />
              </div>
            </motion.div>
          )}
        </div>
      </header>
    </>
  );
};