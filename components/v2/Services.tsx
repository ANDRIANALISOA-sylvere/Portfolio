"use client";
import React from "react";
import { Title } from "../ui/Title";
import { Server, Database, Code2, ArrowUpRight } from "lucide-react";

export const Services = () => {
  const services = [
    {
      number: "01",
      icon: <Server size={32} />,
      title: "Backend Development",
      description:
        "Building robust and scalable server-side applications with modern technologies like Node.js, NestJS, and Express.",
      technologies: ["Node.js", "NestJS", "Express"],
    },
    {
      number: "02",
      icon: <Database size={32} />,
      title: "Database Design",
      description:
        "Designing efficient database schemas and optimizing queries for maximum performance and data integrity.",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
    },
    {
      number: "03",
      icon: <Code2 size={32} />,
      title: "API Development",
      description:
        "Creating secure, well-documented APIs that serve as the backbone of modern web applications.",
      technologies: ["REST API", "GraphQL", "JWT", "Swagger"],
    },
  ];

  return (
    <div className="px-3 mt-28 mb-20 relative">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-[#CC66DA] to-[#FAEB92] rounded-full opacity-5 dark:opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#FAEB92] rounded-full opacity-10 dark:opacity-20 blur-3xl"></div>

      <Title title="WHAT I DO" />

      {/* Services list */}
      <div className="mt-16 space-y-16">
        {services.map((service, index) => (
          <div key={index} className="group relative">
            {/* Service container */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 py-8 border-b border-gray-200/30 dark:border-gray-700/30 hover:border-[#CC66DA]/50 dark:hover:border-[#FAEB92]/50 transition-all duration-500">
              {/* Number and Icon */}
              <div className="flex items-center gap-6 lg:min-w-[200px]">
                <span className="text-6xl font-bold text-gray-200 monument dark:text-gray-800 group-hover:text-[#CC66DA]/30 dark:group-hover:text-[#FAEB92]/30 transition-colors duration-500 font-space-grotesk">
                  {service.number}
                </span>
                <div className="text-gray-400 dark:text-gray-500 group-hover:text-[#CC66DA] dark:group-hover:text-[#FAEB92] transition-colors duration-500">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4">
                  <h3 className="space-grotesk text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white font-space-grotesk group-hover:text-[#CC66DA] dark:group-hover:text-[#FAEB92] transition-colors duration-500">
                    {service.title}
                  </h3>
                  <ArrowUpRight
                    size={24}
                    className="text-gray-400 dark:text-gray-500 group-hover:text-[#CC66DA] dark:group-hover:text-[#FAEB92] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 opacity-0 group-hover:opacity-100"
                  />
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-2xl">
                  {service.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-gray-100/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200/50 dark:border-gray-700/50 group-hover:bg-[#CC66DA]/10 dark:group-hover:bg-[#FAEB92]/10 group-hover:border-[#CC66DA]/30 dark:group-hover:border-[#FAEB92]/30 transition-all duration-500"
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

      {/* Bottom decoration */}
      <div className="mt-20 flex justify-center">
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#CC66DA]/50 to-transparent"></div>
      </div>
    </div>
  );
};
