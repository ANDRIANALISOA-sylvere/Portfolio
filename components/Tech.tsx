"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const techs = [
  { name: "Javascript", src: "/images/JavaScript.png" },
  { name: "Typescript", src: "/images/TypeScript.png" },
  { name: "Express", src: "/images/Express.png" },
  { name: "NestJS", src: "/images/Nest.js.png" },
  { name: "Blender", src: "/images/Blender.png" },
];

const databases = [
  { name: "PostgreSQL", src: "/images/PostgresSQL.png" },
  { name: "MySQL", src: "/images/MySQL.png" },
  { name: "MongoDB", src: "/images/MongoDB.png" },
  { name: "Docker", src: "/images/Docker.png" },
  { name: "VsCode", src: "/images/VsCode.png" },
];

export function Tech() {
  return (
    <section className="mt-16">
      <h1 className="font-bold">Tools & Skills</h1>
      <div className="mt-15 space-y-16">
        {/* Premier carrousel - direction de droite à gauche */}
        <div className="relative overflow-hidden w-full">
          <motion.div
            className="flex space-x-15"
            initial={{ x: "50%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "linear",
            }}
          >
            {/* Duplication des items pour créer un effet de défilement infini */}
            {[...techs, ...techs].map((tech, index) => (
              <Image
                key={index}
                src={tech.src}
                alt={tech.name}
                width={60}
                height={60}
              />
            ))}
          </motion.div>
        </div>

        {/* Deuxième carrousel - direction de gauche à droite */}
        <div className="relative overflow-hidden w-full mt-6">
          <motion.div
            className="flex space-x-6"
            initial={{ x: "-50%" }}
            animate={{ x: 0 }}
            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "linear",
            }}
          >
            {/* Duplication des items pour créer un effet de défilement infini */}
            {[...databases, ...databases].map((db, index) => (
              <Image
                key={index}
                src={db.src}
                alt={db.name}
                width={60}
                height={60}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
