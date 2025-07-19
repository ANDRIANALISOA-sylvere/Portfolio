"use client";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

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
  { name: "Blender", src: "/images/Blender.png" },
  { name: "GraphQL", src: "/images/GraphQL.png" },
];

export function Tech() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const titleVariants : Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.div
      className="mt-16 px-8"
      id="projects"
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="font-bold text-3xl md:text-4xl text-blue-500 mb-8 flex items-center gap-3"
          variants={titleVariants}
        >
          Tools & Skills
          <motion.span
            className="text-2xl"
            initial={{ rotate: -10, scale: 0 }}
            animate={
              isInView ? { rotate: 0, scale: 1 } : { rotate: -10, scale: 0 }
            }
            transition={{
              duration: 0.5,
              delay: 0.4,
              type: "spring",
              stiffness: 200,
            }}
          >
            💻
          </motion.span>
        </motion.h1>

        <div className="space-y-8">
          {/* Section Backend Development */}
          <div className="bg-white p-4">
            <h3 className="font-semibold text-xl text-purple-600 mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
              Backend Development
            </h3>
            <div className="relative overflow-hidden">
              <motion.div
                className="flex gap-6 py-2"
                initial={{ x: "10%" }}
                animate={{ x: "-100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 15,
                  ease: "linear",
                }}
              >
                {[...techs, ...techs, ...techs].map((tech, index) => (
                  <motion.div
                    key={`${tech.name}-${index}`}
                    className="group flex-shrink-0 p-4 transition-all duration-300 cursor-pointer"
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    <div className="relative">
                      <motion.div
                        className="w-12 h-12 mx-auto mb-3 rounded-lg overflow-hidden bg-white shadow-sm group-hover:shadow-md transition-shadow"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Image
                          src={tech.src}
                          alt={`${tech.name} logo`}
                          width={48}
                          height={48}
                          className="w-full h-full object-contain p-1"
                        />
                      </motion.div>
                      <p className="text-center text-sm font-medium text-gray-700 group-hover:text-purple-600 transition-colors whitespace-nowrap">
                        {tech.name}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Section Databases & Tools */}
          <div className="bg-white p-4">
            <h3 className="font-semibold text-xl text-purple-600 mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
              Databases & Tools
            </h3>
            <div className="relative overflow-hidden">
              <motion.div
                className="flex gap-6 py-2"
                initial={{ x: "10%" }}
                animate={{ x: "-100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 18,
                  ease: "linear",
                }}
              >
                {[...databases, ...databases, ...databases].map((db, index) => (
                  <motion.div
                    key={`${db.name}-${index}`}
                    className="group flex-shrink-0 p-4 transition-all duration-300 cursor-pointer"
                    whileHover={{
                      scale: 1.15,
                      y: -8,
                      rotate: 5,
                      boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                  >
                    <div className="relative">
                      <motion.div
                        className="w-12 h-12 mx-auto mb-3 rounded-lg overflow-hidden bg-white shadow-sm group-hover:shadow-md transition-shadow"
                        whileHover={{
                          scale: 1.2,
                          rotate: -360,
                        }}
                        transition={{
                          duration: 0.8,
                          type: "spring",
                          bounce: 0.4,
                        }}
                      >
                        <Image
                          src={db.src}
                          alt={`${db.name} logo`}
                          width={48}
                          height={48}
                          className="w-full h-full object-contain p-1"
                        />
                      </motion.div>
                      <motion.p
                        className="text-center text-sm font-medium text-gray-700 group-hover:text-purple-600 transition-colors whitespace-nowrap"
                        whileHover={{ color: "#7c3aed" }}
                      >
                        {db.name}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Section Skills Summary */}
          <motion.div
            className="bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50 rounded-2xl p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="text-center">
              <motion.h3
                className="font-semibold text-xl text-gray-800 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Expertise Summary
              </motion.h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Backend Architecture",
                  "API Development",
                  "Database Design",
                  "Performance Optimization",
                  "Containerization",
                  "TypeScript",
                  "Node.js Ecosystem",
                ].map((skill, index) => (
                  <motion.span
                    key={index}
                    className="bg-yellow-300 text-purple-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-400 transition-colors cursor-default"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.8 + index * 0.1,
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#fbbf24",
                      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
