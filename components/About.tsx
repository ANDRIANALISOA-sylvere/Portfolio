"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="mt-16 px-8" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="font-bold text-3xl md:text-4xl text-blue-500 mb-8 flex items-center gap-3"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          About me
          <motion.span
            className="text-2xl"
            initial={{ rotate: -10, scale: 0 }}
            animate={
              isInView ? { rotate: 0, scale: 1 } : { rotate: -10, scale: 0 }
            }
            transition={{
              duration: 0.5,
              delay: 0.3,
              type: "spring",
              stiffness: 200,
            }}
          >
            📝
          </motion.span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p
            className="text-gray-700 text-lg leading-relaxed text-center md:text-left"
            variants={itemVariants}
          >
            Hi, I&apos;m{" "}
            <motion.span
              className="font-semibold text-purple-600"
              whileHover={{
                scale: 1.05,
                color: "#7c3aed",
                transition: { duration: 0.2 },
              }}
            >
              ANDRIANALISOA Joséphin Sylvère
            </motion.span>{" "}
            from Madagascar 🇲🇬, a passionate backend developer specializing in{" "}
            <motion.span
              className="bg-yellow-300 px-2 py-1 rounded font-medium"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#facc15",
                transition: { duration: 0.2 },
              }}
            >
              Node.js
            </motion.span>
            . I enjoy building efficient, scalable systems and optimizing
            performance to deliver high-quality solutions.
          </motion.p>

          {/* Section des compétences/technologies */}
          <motion.div
            className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start"
            variants={itemVariants}
          >
            {[
              {
                text: "Node.js",
                bg: "bg-blue-100",
                text_color: "text-blue-700",
              },
              {
                text: "JavaScript",
                bg: "bg-purple-100",
                text_color: "text-purple-700",
              },
              {
                text: "Backend Development",
                bg: "bg-pink-100",
                text_color: "text-pink-700",
              },
              {
                text: "Performance Optimization",
                bg: "bg-yellow-100",
                text_color: "text-yellow-700",
              },
            ].map((skill, index) => (
              <motion.span
                key={skill.text}
                className={`${skill.bg} ${skill.text_color} px-3 py-1 rounded-full text-sm font-medium cursor-default`}
                variants={badgeVariants}
                whileHover={{
                  scale: 1.1,
                  y: -2,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.2 },
                }}
                custom={index}
              >
                {skill.text}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA ou information supplémentaire */}
          <motion.div
            className="mt-8 p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.3 },
            }}
          >
            <motion.p
              className="text-gray-600 text-sm italic"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              💡 Always eager to learn new technologies and tackle challenging
              problems in backend development.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
