"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "./ui/badge";

const techs = [
  { name: "Javascript", src: "/images/JavaScript.png" },
  { name: "Typescript", src: "/images/TypeScript.png" },
  { name: "Express", src: "/images/Express.png" },
  { name: "NestJS", src: "/images/Nest.js.png" },
  { name: "Docker", src: "/images/Docker.png" },
];

const databases = [
  { name: "PostgreSQL", src: "/images/PostgresSQL.png" },
  { name: "MySQL", src: "/images/MySQL.png" },
  { name: "MongoDB", src: "/images/MongoDB.png" },
  { name: "VsCode", src: "/images/VsCode.png" },
  { name: "Blender", src: "/images/Blender.png" },
];

export function Tech() {
  return (
    <section className="mt-16">
      <h1 className="font-bold text-xl">Tools & Skills 💻</h1>
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
              <Badge key={index} variant="secondary" className="p-1">
                <Image src={tech.src} alt={tech.name} width={40} height={40} />
              </Badge>
            ))}
          </motion.div>
        </div>

        {/* Deuxième carrousel - direction de gauche à droite */}
        <div className="relative overflow-hidden w-full mt-6">
          <motion.div
            className="flex space-x-15"
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
              <Badge variant="secondary" key={index} className="p-1">
                <Image src={db.src} alt={db.name} width={40} height={40} />
              </Badge>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
