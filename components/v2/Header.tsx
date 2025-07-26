"use client";
import Image from "next/image";
import Avatar from "../../public/images/avatar.png";
import React from "react";
import { ChevronDown, Download, Mail } from "lucide-react";
import { ReactIcon } from "./svg/React";
import { ExpressIcon } from "./svg/Express";
import { PostgreIcon } from "./svg/Postgresql";
import { TypescriptIcon } from "./svg/Typescript";
import { NestIcon } from "./svg/Nest";
import { NodeIcon } from "./svg/Node";

export const Header = () => {
  const handleClick = () => {
      window.open(
        "https://josephin-sylvere.vercel.app/CV.pdf",
        "_blank",
        "noopener,noreferrer"
      );
    };
  return (
    <header className="relative w-full min-h-screen px-4 sm:px-8 lg:px-16 overflow-x-hidden overflow-y-hidden mt-4 sm:mt-6 lg:mt-8 transition-colors duration-300">
      {/* Éléments décoratifs flottants avec effet de flou - Réduits sur mobile */}
      <div className="absolute top-20 left-4 sm:left-10 w-32 sm:w-40 lg:w-50 h-32 sm:h-40 lg:h-50 bg-gradient-to-br from-[#CC66DA] to-[#FAEB92] rounded-full opacity-10 sm:opacity-15 lg:opacity-20 dark:opacity-20 sm:dark:opacity-25 lg:dark:opacity-30 blur-2xl"></div>
      <div className="absolute bottom-32 right-8 sm:right-16 lg:right-20 w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-gradient-to-br from-[#FAEB92] to-[#CC66DA] rounded-full opacity-20 sm:opacity-25 lg:opacity-30 dark:opacity-30 sm:dark:opacity-35 lg:dark:opacity-40 blur-2xl"></div>
      <div className="absolute top-1/2 left-8 sm:left-16 lg:left-20 w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 bg-[#CC66DA] rounded-full opacity-30 sm:opacity-35 lg:opacity-40 dark:opacity-40 sm:dark:opacity-45 lg:dark:opacity-50 animate-ping"></div>

      {/* Icônes techniques - Masquées sur mobile et tablette */}
      {/* Node.js - Coin supérieur gauche */}
      <div className="hidden xl:block absolute top-16 left-90 w-12 h-12 rounded-lg border-2 border-gray-100 dark:border-gray-700 animate-float z-5 opacity-60 hover:opacity-90 transition-opacity">
        <div className="relative w-full h-full rounded-lg bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm shadow-lg border border-white/30 dark:border-gray-600/30 p-2 flex items-center justify-center">
          <NodeIcon></NodeIcon>
        </div>
      </div>

      {/* NestJS - Coin inférieur droit */}
      <div className="hidden xl:block absolute bottom-25 right-35 w-12 h-12 rounded-lg border-2 border-gray-100 dark:border-gray-700 animate-float-delay-2 z-5 opacity-60 hover:opacity-90 transition-opacity">
        <div className="relative w-full h-full rounded-lg bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm shadow-lg border border-white/30 dark:border-gray-600/30 p-2 flex items-center justify-center">
          <NestIcon></NestIcon>
        </div>
      </div>

      {/* TypeScript - Coin inférieur gauche */}
      <div className="hidden xl:block absolute bottom-35 left-130 w-12 h-12 rounded-lg border-2 border-gray-100 dark:border-gray-700 animate-float z-5 opacity-60 hover:opacity-90 transition-opacity">
        <div className="relative w-full h-full rounded-lg bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm shadow-lg border border-white/30 dark:border-gray-600/30 p-2 flex items-center justify-center">
          <TypescriptIcon></TypescriptIcon>
        </div>
      </div>

      {/* React - Côté gauche milieu */}
      <div className="hidden xl:block absolute top-1/2 left-2 w-12 h-12 rounded-lg border-2 border-gray-100 dark:border-gray-700 animate-float-delay z-5 opacity-60 hover:opacity-90 transition-opacity">
        <div className="relative w-full h-full rounded-lg bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm shadow-lg border border-white/30 dark:border-gray-600/30 p-2 flex items-center justify-center">
          <ReactIcon></ReactIcon>
        </div>
      </div>

      {/* PostgreSQL - Côté droit milieu */}
      <div className="hidden xl:block absolute top-1/2 right-1/3 w-12 h-12 rounded-lg border-2 border-gray-100 dark:border-gray-700 animate-float-delay-2 z-5 opacity-60 hover:opacity-90 transition-opacity">
        <div className="relative w-full h-full rounded-lg bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm shadow-lg border border-white/30 dark:border-gray-600/30 p-2 flex items-center justify-center">
          <PostgreIcon></PostgreIcon>
        </div>
      </div>

      {/* Express */}
      <div className="hidden xl:block absolute top-1/2 right-8 w-12 h-12 rounded-lg border-2 border-gray-100 dark:border-gray-700 animate-float-delay-2 z-5 opacity-60 hover:opacity-90 transition-opacity">
        <div className="relative w-full h-full rounded-lg bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm shadow-lg border border-white/30 dark:border-gray-600/30 p-2 flex items-center justify-center">
          <ExpressIcon></ExpressIcon>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-2 sm:px-6 min-h-screen flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 w-full">
          {/* Section Texte */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            {/* Badge d'introduction amélioré */}
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-700/90 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-medium shadow-xl border border-white/20 dark:border-gray-600/20 mb-4 sm:mb-6 animate-fade-in hover:shadow-2xl transition-all duration-300">
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-[#CC66DA] to-[#FAEB92] rounded-full animate-pulse"></div>
              <span className="text-gray-700 dark:text-gray-300">
                Hello there! I&apos;m
              </span>
              <div className="w-1 h-1 bg-[#CC66DA] rounded-full"></div>
            </div>

            {/* Titre Principal - Responsive */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold monument mb-4 sm:mb-6 text-gray-900 dark:text-white leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
                ANDRIANALISOA
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#CC66DA] to-[#FAEB92] bg-clip-text text-transparent animate-gradient">
                Joséphin Sylvère
              </span>
            </h1>

            {/* Sous-titre avec animation - Responsive */}
            <h2 className="monument text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-4 sm:mb-6 flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3">
              <span className="bg-gradient-to-r from-[#CC66DA] to-purple-600 px-3 sm:px-4 py-1 sm:py-2 rounded-none text-white shadow-lg transform hover:scale-105 transition-transform text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                Backend
              </span>
              <span className="text-gray-700 dark:text-gray-300 font-light">
                Developer
              </span>
            </h2>

            {/* Description - Responsive */}
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl leading-relaxed px-2 sm:px-0">
              Passionate backend developer crafting robust and scalable
              solutions.
              <span className="text-[#CC66DA] font-semibold">
                {" "}
                Transforming ideas into powerful applications{" "}
              </span>
              that drive business success.
            </p>

            {/* Boutons d'Action - Responsive */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mt-4 sm:mt-5 mb-6 sm:mb-8 px-4 sm:px-0">
              {/* Bouton Download CV - Style gradient animé */}
              <button onClick={handleClick} className="group relative px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-[#CC66DA] to-[#FAEB92] text-black font-medium rounded-full hover:shadow-sm hover:shadow-[#CC66DA]/25 transform hover:scale-105 transition-all duration-300 cursor-pointer text-sm sm:text-base">
                <span className="relative z-10">Download CV</span>
                <Download
                  size={16}
                  className="sm:w-[18px] sm:h-[18px] transition-transform group-hover:translate-y-[-2px] duration-300"
                />
              </button>

              {/* Bouton Contact Me */}
              <button className="group relative px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-center gap-2 sm:gap-3 bg-transparent border-2 border-[#CC66DA] text-[#CC66DA] dark:text-[#CC66DA] rounded-full font-medium hover:bg-[#CC66DA]/10 transition-all duration-300 transform hover:scale-105 hover:shadow-sm hover:shadow-[#CC66DA]/25 cursor-pointer text-sm sm:text-base">
                <span className="relative z-10">Contact Me</span>
                <Mail
                  size={16}
                  className="sm:w-[18px] sm:h-[18px] transition-transform group-hover:translate-x-1 duration-300"
                />
              </button>
            </div>
          </div>

          {/* Section Avatar - Responsive */}
          <div className="relative flex-shrink-0 lg:flex-shrink-1 order-1 lg:order-2">
            {/* Avatar principal */}
            <div className="relative z-10 group">
              <Image
                src={Avatar}
                alt="Joséphin Sylvère - Backend Developer"
                width={250}
                height={250}
                className="relative z-20 border-2 sm:border-4 rounded-full border-white dark:border-gray-300 shadow-2xl w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-[350px] xl:h-[350px] object-cover"
                priority
              />

              {/* Badges flottants - Masqué sur mobile */}
              <div className="hidden sm:block absolute -bottom-1 sm:-bottom-2 -left-2 sm:-left-4 bg-white dark:bg-gray-800 text-[#CC66DA] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg border border-[#CC66DA]">
                3+ Years
              </div>
            </div>
          </div>
        </div>

        {/* Indicateur de scroll - Responsive */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-gray-400 dark:text-gray-500 hover:text-[#CC66DA] dark:hover:text-[#CC66DA] transition-colors cursor-pointer">
            <span className="text-xs sm:text-sm mb-1 sm:mb-2 font-medium">Scroll down</span>
            <ChevronDown size={20} className="sm:w-6 sm:h-6 animate-pulse" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float 7s ease-in-out 1s infinite;
        }

        .animate-float-delay-2 {
          animation: float 8s ease-in-out 2s infinite;
        }

        /* Responsive breakpoints pour référence :
         * sm: 640px et plus
         * md: 768px et plus  
         * lg: 1024px et plus
         * xl: 1280px et plus
         */
      `}</style>
    </header>
  );
};