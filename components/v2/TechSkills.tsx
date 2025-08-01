"use client";
import React, { useMemo } from "react";
import { ReactIcon } from "./svg/React";
import { motion } from "framer-motion";
import { ExpressIcon } from "./svg/Express";
import { PostgreIcon } from "./svg/Postgresql";
import { TypescriptIcon } from "./svg/Typescript";
import { NestIcon } from "./svg/Nest";
import { NodeIcon } from "./svg/Node";
import { JSIcon } from "./svg/Js";
import { MySQLIcon } from "./svg/MySQLIcon";
import { MongoDBIcon } from "./svg/MongoDB";
import { TailwindcssIcon } from "./svg/Tailwindcss";
import { GraphQLIcon } from "./svg/GraphQL";
import { DockerIcon } from "./svg/Docker";
import { Title } from "../ui/Title";

interface Technology {
  icon: React.ReactNode;
  name: string;
}

export const TechSkills = () => {
  const technologies = useMemo<Technology[]>(
    () => [
      { icon: <JSIcon />, name: "Javascript" },
      { icon: <TypescriptIcon />, name: "TypeScript" },
      { icon: <ReactIcon />, name: "React" },
      { icon: <TailwindcssIcon />, name: "Tailwindcss" },
      { icon: <NodeIcon />, name: "Node.js" },
      { icon: <ExpressIcon />, name: "Express" },
      { icon: <NestIcon />, name: "NestJS" },
      { icon: <PostgreIcon />, name: "PostgreSQL" },
      { icon: <MySQLIcon />, name: "MySQL" },
      { icon: <MongoDBIcon />, name: "MongoDB" },
      { icon: <GraphQLIcon />, name: "GraphQL" },
      { icon: <DockerIcon />, name: "Docker" },
    ],
    []
  );

  return (
    <section className="px-2 mt-28 relative overflow-hidden" id="skills">
      <Title title="TECH SKILLS" />

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12">
        {technologies.map((tech, index) => (
          <motion.div
            key={`tech-${index}`}
            className="flex flex-col items-center gap-2 sm:gap-3 hover:scale-110 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            viewport={{ once: true }}
          >
            <div
              role="img"
              aria-label={tech.name}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center"
            >

              {tech.icon}
            </div>

            <span className="text-gray-900 dark:text-gray-100 font-medium text-sm sm:text-base">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>

    </section>
  );
};