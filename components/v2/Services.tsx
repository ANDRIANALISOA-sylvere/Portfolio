"use client";
import React from "react";
import { Title } from "../ui/Title";
import { Server, Database, Code2, ArrowUpRight } from "lucide-react";

export const Services = () => {
  const services = [
    {
      number: "01",
      icon: <Server size={24} className="sm:w-8 sm:h-8" />,
      title: "Backend Development",
      description:
        "Building robust and scalable server-side applications with modern technologies like Node.js, NestJS, and Express.",
      technologies: ["Node.js", "NestJS", "Express"],
    },
    {
      number: "02",
      icon: <Database size={24} className="sm:w-8 sm:h-8" />,
      title: "Database Design",
      description:
        "Designing efficient database schemas and optimizing queries for maximum performance and data integrity.",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
    },
    {
      number: "03",
      icon: <Code2 size={24} className="sm:w-8 sm:h-8" />,
      title: "API Development",
      description:
        "Creating secure, well-documented APIs that serve as the backbone of modern web applications.",
      technologies: ["REST API", "GraphQL", "JWT", "Swagger"],
    },
  ];

  return (
    <>
      {/* <CustomCursor /> */}
      <div
        className="px-4 sm:px-6 mt-16 sm:mt-20 lg:mt-28 mb-12 sm:mb-16 lg:mb-20 relative overflow-x-hidden"
        id="services"
      >
        {/* Background decorative elements - Responsive */}
        <div className="absolute top-5 sm:top-10 left-2 sm:left-6 lg:left-10 w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40 bg-gradient-to-br from-[#CC66DA] to-[#FAEB92] rounded-full opacity-5 dark:opacity-10 blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-2 sm:right-6 lg:right-10 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-[#FAEB92] rounded-full opacity-10 dark:opacity-20 blur-2xl sm:blur-3xl"></div>

        <Title title="WHAT I DO" />

        {/* Services list - Responsive */}
        <div className="mt-8 sm:mt-12 lg:mt-16 space-y-8 sm:space-y-12 lg:space-y-16">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Service container */}
              <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 py-4 sm:py-6 lg:py-8 border-b border-gray-200/30 dark:border-gray-700/30 hover:border-[#CC66DA]/50 dark:hover:border-[#FAEB92]/50 transition-all duration-500">
                {/* Number and Icon - Mobile first approach */}
                <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                  <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-200 monument dark:text-gray-800 group-hover:text-[#CC66DA]/30 dark:group-hover:text-[#FAEB92]/30 transition-colors duration-500 font-space-grotesk leading-none">
                    {service.number}
                  </span>
                  <div className="text-gray-400 dark:text-gray-500 group-hover:text-[#CC66DA] dark:group-hover:text-[#FAEB92] transition-colors duration-500 flex-shrink-0">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start sm:items-center gap-2 sm:gap-4">
                    <h3 className="space-grotesk text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white font-space-grotesk group-hover:text-[#CC66DA] dark:group-hover:text-[#FAEB92] transition-colors duration-500 leading-tight">
                      {service.title}
                    </h3>
                    <ArrowUpRight
                      size={18}
                      className="sm:w-6 sm:h-6 text-gray-400 dark:text-gray-500 group-hover:text-[#CC66DA] dark:group-hover:text-[#FAEB92] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 opacity-0 group-hover:opacity-100 flex-shrink-0 mt-1 sm:mt-0"
                    />
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                    {service.description}
                  </p>

                  {/* Technologies - Responsive */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gray-100/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200/50 dark:border-gray-700/50 group-hover:bg-[#CC66DA]/10 dark:group-hover:bg-[#FAEB92]/10 group-hover:border-[#CC66DA]/30 dark:group-hover:border-[#FAEB92]/30 transition-all duration-500 whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration - Responsive */}
        <div className="mt-12 sm:mt-16 lg:mt-20 flex justify-center">
          <div className="w-20 sm:w-24 lg:w-32 h-px bg-gradient-to-r from-transparent via-[#CC66DA]/50 to-transparent"></div>
        </div>
      </div>
    </>
  );
};
