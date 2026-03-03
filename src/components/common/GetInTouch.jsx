import { motion } from "motion/react";

export const GetInTouch = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="py-16 md:py-20 relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Ligne horizontale avec animation */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full h-px bg-[#222222] mb-12 origin-left"
        />

        <div className="text-center relative">
          {/* Badge Contact avec animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#1A1A1A",
              borderColor: "#444444",
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-gray-300 bg-[#111111] border border-[#222222] rounded-lg cursor-default"
          >
            Contact
          </motion.div>

          {/* Titre avec animation */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="Handlee-900 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Get in Touch
          </motion.h2>

          {/* Description avec animation */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-500 max-w-2xl mx-auto relative z-10"
          >
            Want to chat or collaborate or discuss on project. Email me at{" "}
            <motion.a
              href="mailto:josephinsylvere@gmail.com"
              whileHover={{ 
                scale: 1.05,
                color: "#ffffff",
                transition: { type: "spring", stiffness: 400 }
              }}
              className="text-gray-300 hover:text-white transition-colors font-medium inline-block"
            >
              josephinsylvere@gmail.com
            </motion.a>{" "}
            or message me on{" "}
            <motion.a
              href="https://linkedin.com/in/josephin-sylvere"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                color: "#ffffff",
                transition: { type: "spring", stiffness: 400 }
              }}
              className="text-gray-300 hover:text-white transition-colors font-medium inline-block"
            >
              Linkedin
            </motion.a>{" "}
            and I'll respond as quick as possible.
          </motion.p>

          {/* Effet de particules au hover sur le titre */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/30 rounded-full"
                style={{
                  left: `${30 + i * 20}%`,
                  top: `${40 + i * 10}%`,
                }}
                animate={{
                  y: [-10, -30, -10],
                  x: [0, 10, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Blur blanc sur le côté droit avec animation */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 1 }}
        className="absolute top-0 right-0 h-full w-1/3 pointer-events-none"
        style={{
          background: "linear-gradient(to left, rgba(255,255,255,0.1), transparent)",
          filter: "blur(60px)"
        }}
      />
    </motion.div>
  );
};