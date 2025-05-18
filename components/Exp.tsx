"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Exp() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const experiences = [
    {
      company: "DIRMIM Fianarantsoa",
      role: "Software Development Intern",
      period: "Août - Nov 2024",
      logo: "/images/MIM.jpg",
      description:
        "Web application development, performance optimization, database management, and graphical user interface development.",
      technologies: ["JavaScript", "React", "Laravel", "MySQL"],
    },
    {
      company: "CUF Fianarantsoa",
      role: "Software Development Intern",
      period: "Sept - Nov 2023",
      logo: "/images/CUF.png",
      description:
        "Design and development of web applications, user interface implementation, database management, and performance tuning.",
      technologies: ["Javascript", "NextJS", "NestJS"],
    },
  ];

  // Variants pour les animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 },
    },
  };

  const techVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
    hover: {
      scale: 1.1,
      y: -2,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section className="mt-16 px-8" id="experience" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="font-bold text-3xl md:text-4xl text-blue-500 mb-8 flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Experiences
          <motion.span
            className="text-2xl"
            initial={{ rotate: -10, scale: 0 }}
            animate={
              isInView ? { rotate: 0, scale: 1 } : { rotate: -10, scale: 0 }
            }
            transition={{
              duration: 0.5,
              delay: 0.2,
              type: "spring",
              stiffness: 200,
            }}
          >
            🚀
          </motion.span>
        </motion.h2>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative overflow-hidden bg-white transition-all duration-300"
              whileHover="hover"
            >
              {/* Gradient de fond au hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />

              <div className="relative p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* Logo de l'entreprise */}
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-16 h-16 rounded-xl overflow-hidden shadow-md bg-white p-1">
                      <Image
                        src={exp.logo}
                        alt={`Logo ${exp.company}`}
                        width={60}
                        height={60}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                  </motion.div>

                  {/* Informations principales */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <motion.h3
                          className="font-bold text-lg md:text-xl text-purple-600"
                          whileHover={{ color: "#7c3aed" }}
                        >
                          {exp.company}
                        </motion.h3>
                        <motion.p
                          className="text-purple-600 font-medium"
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.2 + index * 0.1,
                          }}
                        >
                          {exp.role}
                        </motion.p>
                      </div>
                      <motion.span
                        className="bg-yellow-300 text-purple-800 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={
                          isInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.9 }
                        }
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "#facc15",
                        }}
                      >
                        {exp.period}
                      </motion.span>
                    </div>

                    {/* Description */}
                    <motion.p
                      className="text-gray-600 mt-3 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                      }
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    >
                      {exp.description}
                    </motion.p>

                    {/* Technologies */}
                    <motion.div
                      className="flex flex-wrap gap-2 mt-4"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    >
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          variants={techVariants}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                          whileHover="hover"
                          transition={{
                            delay: 0.6 + index * 0.1 + techIndex * 0.05,
                          }}
                          className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Call-to-Action */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 px-6 py-3 rounded-full"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-gray-600 text-sm">
              Interested in working together?
            </span>
            <motion.button
              onClick={() => {
                const contactsection = document.getElementById("contact");
                if (contactsection) {
                  contactsection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="bg-yellow-300 text-purple-800 px-4 py-1 rounded-full text-sm font-medium cursor-pointer"
              whileHover={{
                backgroundColor: "#facc15",
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Contact me
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
