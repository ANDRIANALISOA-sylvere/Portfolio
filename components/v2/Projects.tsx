"use client";
import React from "react";
import { Title } from "../ui/Title";
import { Github, Globe } from "lucide-react";
import Image from "next/image";
import { ReactIcon } from "./svg/React";
import { PostgreIcon } from "./svg/Postgresql";
import { TypescriptIcon } from "./svg/Typescript";
import { TailwindcssIcon } from "./svg/Tailwindcss";
import { NestIcon } from "./svg/Nest";
import { NextIcon } from "./svg/Next";
import { ExpressIcon } from "./svg/Express";
import { MySQLIcon } from "./svg/MySQLIcon";
import { LaravelIcon } from "./svg/Laravel";

export const Projects = () => {
  const projects = [
    {
      title: "EcoPlay",
      description:
        "An interactive and educational web game that simulates real-life financial situations",
      stack: [
        <ReactIcon key="react" size={20} />,
        <TailwindcssIcon key="tailwind" size={20} />,
        <ExpressIcon key="node" size={20} />,
        <PostgreIcon key="postgre" size={20} />,
      ],
      githubLink:
        "https://github.com/ANDRIANALISOA-sylvere/EcoPlay-Hackonomics2025",
      liveLink: null,
      image:
        "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "NoteVerse API",
      description:
        "A powerful and intuitive API for managing notes efficiently",
      stack: [
        <ExpressIcon key="node" size={20} />,
        <PostgreIcon key="postgre" size={20} />,
      ],
      githubLink: "https://github.com/ANDRIANALISOA-sylvere/NoteVerse-API",
      liveLink: null,
      image:
        "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Portfolio Website",
      description: "Modern personal portfolio with animations",
      stack: [
        <NextIcon key="Next" size={20} />,
        <TailwindcssIcon key="tailwind" size={20} />,
        <TypescriptIcon key="typescript" size={20} />,
      ],
      githubLink: "https://github.com/ANDRIANALISOA-sylvere/Portfolio",
      liveLink: "https://josephin-sylvere.vercel.app",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Task Manager",
      description: "Modern task organization platform",
      stack: [
        <NextIcon key="Next" size={20} />,
        <TailwindcssIcon key="tailwind" size={20} />,
        <TypescriptIcon key="ts" size={20} />,
        <NestIcon key="NestJS" size={20} />,
      ],
      githubLink: "https://github.com/ANDRIANALISOA-sylvere/TaskManager",
      liveLink: null,
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "File tracking management",
      description: "Organizes and secures documents, tracks file progress",
      stack: [
        <ReactIcon key="React" size={20} />,
        <TailwindcssIcon key="tailwind" size={20} />,
        <LaravelIcon key="Laravel" size={20} />,
        <MySQLIcon key="MySQL" size={20} />,
      ],
      githubLink: null,
      liveLink: null,
      image:
        "https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Vehicle parts sales management",
      description:
        "Manages vehicle parts sales, ensures accurate stock updates",
      stack: [
        <ReactIcon key="React" size={20} />,
        <TailwindcssIcon key="tailwind" size={20} />,
        <ExpressIcon key="Express" size={20} />,
        <MySQLIcon key="MySQL" size={20} />,
      ],
      githubLink:
        "https://github.com/ANDRIANALISOA-sylvere/Gestion-de-vente-de-pieces-de-vehicule",
      liveLink: null,
      image:
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <section className="px-2 sm:px-4 mt-20 mb-16 relative" id="projects">
      {/* Background elements - made smaller */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[#CC66DA] to-[#FAEB92] rounded-full opacity-5 dark:opacity-10 blur-2xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-[#66dacc] to-[#92fae0] rounded-full opacity-5 dark:opacity-10 blur-2xl -z-10"></div>

      <Title title="MY PROJECTS" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10 px-2 sm:px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-white/70 dark:bg-gray-800/70 rounded-xl overflow-hidden border border-white/20 dark:border-gray-600/20 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
          >
            {/* Image with overlay effect */}
            <div className="h-40 sm:h-36 overflow-hidden relative">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-full p-2 sm:p-3 rounded-2xl object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-3 sm:p-4 relative overflow-hidden flex flex-col flex-grow">
              {/* Grid background - improved */}
              <div
                className="absolute inset-0 opacity-0 dark:opacity-0 group-hover:opacity-10 group-hover:dark:opacity-10 transition-opacity duration-300 -z-20 overflow-hidden"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.8) 1px, transparent 1px)
                  `,
                  backgroundSize: "80px 80px",
                  backgroundPosition: "-10px -10px",
                  backgroundAttachment: "local",
                }}
              />

              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg sm:text-base font-bold text-gray-900 dark:text-white font-space-grotesk group-hover:text-[#CC66DA] dark:group-hover:text-[#FAEB92] transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-[#CC66DA] dark:hover:text-[#FAEB92] transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-[#CC66DA] dark:hover:text-[#FAEB92] transition-colors"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <Globe size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-3 leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="flex gap-2 items-center mt-auto pt-2">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Built with:
                </span>
                <div className="flex gap-1">
                  {project.stack.map((icon, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};