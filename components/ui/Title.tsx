"use client";
import React from "react";

interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => {
  return (
    <div>
      {/* Conteneur principal du titre */}
      <div className="relative z-10 text-left">
        {/* Titre principal */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold monument leading-tight">
          <span className="bg-gradient-to-r from-[#CC66DA] via-purple-600 to-[#FAEB92] bg-clip-text text-transparent animate-gradient relative">
            {title}
            {/* Ligne décorative sous le titre */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#CC66DA] to-[#FAEB92] rounded-full opacity-60"></div>
          </span>
        </h1>
      </div>

      {/* Styles CSS intégrés */}
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

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};
