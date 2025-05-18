"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export function Head() {
  return (
    <header className="py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-16">
          {/* Section texte */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="font-bold text-5xl md:text-6xl text-black leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Joséphin
            </motion.h1>

            <motion.h2
              className="text-yellow-300 bg-pink-500 text-5xl md:text-6xl px-4 py-2 rounded-lg inline-block transform -rotate-1 shadow-lg"
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: -1 }}
              transition={{
                duration: 0.7,
                delay: 0.4,
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
              whileHover={{
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.2 },
              }}
            >
              Sylvère
            </motion.h2>

            <motion.p
              className="text-black text-xl md:text-2xl mt-6 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Backend Developer
            </motion.p>

            {/* Button avec animation */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button
                onClick={() => {
                  const projectSection = document.getElementById("projects");
                  if (projectSection) {
                    projectSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="bg-yellow-300 text-purple-800 cursor-pointer px-6 py-3 rounded-full font-semibold shadow-lg"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#facc15", // yellow-400
                  boxShadow:
                    "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                See all of my projects
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Section image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 100, rotate: 10 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: {
                  rotate: {
                    duration: 0.5,
                    ease: "easeInOut",
                  },
                  scale: {
                    duration: 0.2,
                  },
                },
              }}
            >
              <Image
                src="/images/mon-avatar.png"
                alt="Avatar de Joséphin Sylvère"
                width={250}
                height={250}
                className="relative rounded-full border-4 border-yellow-300"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
