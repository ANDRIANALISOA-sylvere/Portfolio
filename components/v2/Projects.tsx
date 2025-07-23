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
        <ReactIcon key="react" size={25} />,
        <TailwindcssIcon key="tailwind" size={25} />,
        <ExpressIcon key="node" size={25} />,
        <PostgreIcon key="postgre" size={25} />,
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
        <ExpressIcon key="node" size={25} />,
        <PostgreIcon key="postgre" size={25} />,
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
        <NextIcon key="Next" size={25} />,
        <TailwindcssIcon key="tailwind" size={25} />,
        <TypescriptIcon key="typescript" size={25} />,
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
        <NextIcon key="Next" size={25} />,
        <TailwindcssIcon key="tailwind" size={25} />,
        <TypescriptIcon key="ts" size={25} />,
        <NestIcon key="NestJS" size={25} />,
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
        <ReactIcon key="React" size={25} />,
        <TailwindcssIcon key="tailwind" size={25} />,
        <LaravelIcon key="Laravel" size={25} />,
        <MySQLIcon key="MySQL" size={25} />,
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
        <ReactIcon key="React" size={25} />,
        <TailwindcssIcon key="tailwind" size={25} />,
        <ExpressIcon key="Express" size={25} />,
        <MySQLIcon key="MySQL" size={25} />,
      ],
      githubLink:
        "https://github.com/ANDRIANALISOA-sylvere/Gestion-de-vente-de-pieces-de-vehi",
      liveLink: null,
      image:
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <section className="px-2 mt-28 mb-20 relative">
      {/* Background elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-[#CC66DA] to-[#FAEB92] rounded-full opacity-5 dark:opacity-10 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-gradient-to-br from-[#66dacc] to-[#92fae0] rounded-full opacity-5 dark:opacity-10 blur-3xl -z-10"></div>

      <Title title="MY PROJECTS" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-white/70 dark:bg-gray-800/70 rounded-2xl overflow-hidden border border-white/20 dark:border-gray-600/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Image with overlay effect */}
            <div className="h-48 overflow-hidden relative">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-5">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white font-space-grotesk group-hover:text-[#CC66DA] dark:group-hover:text-[#FAEB92] transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-[#CC66DA] dark:hover:text-[#FAEB92] transition-colors"
                      aria-label="GitHub repository"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-[#CC66DA] dark:hover:text-[#FAEB92] transition-colors"
                      aria-label="Live demo"
                    >
                      <Globe size={20} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex gap-3 items-center">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Built with:
                </span>
                <div className="flex gap-2">
                  {project.stack.map((icon, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 flex items-center justify-center"
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
