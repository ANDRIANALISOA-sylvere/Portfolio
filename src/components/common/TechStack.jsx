import { motion } from "motion/react";
import { useMobile } from "../../hooks/useMobile";

const techs = [
  { id: 1, name: "Node.js", emoji: "🟢" },
  { id: 2, name: "Express", emoji: "⚡" },
  { id: 3, name: "NestJS", emoji: "🐱" },
  { id: 4, name: "Docker", emoji: "🐳" },
  { id: 5, name: "Jenkins", emoji: "🤖" },
  { id: 6, name: "JavaScript", emoji: "✨" },
  { id: 7, name: "TypeScript", emoji: "🔷" },
  { id: 8, name: "GraphQL", emoji: "🔺" },
  { id: 9, name: "Kafka", emoji: "🐘" },
  { id: 10, name: "Kubernetes", emoji: "☸️" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const badgeVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20,
    rotate: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: custom % 2 === 0 ? -2 : 2,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      duration: 0.4,
    },
  }),
  hover: {
    scale: 1.1,
    y: -5,
    rotate: 0,
    boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.5)",
    borderColor: "#444444",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

export const TechStack = () => {
  const isMobile = useMobile(640);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
      transition={{ duration: 0.6 }}
      className="py-12 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre avec animation */}
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className={`text-base md:text-lg font-bold text-white mb-4 md:mb-6 flex items-center gap-2 ${isMobile ? "justify-center" : ""}`}
        >
          <motion.span
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.2, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
            className="text-xl md:text-2xl"
          >
            🛠
          </motion.span>
          Tech Stack
        </motion.h2>

        {/* Badges avec animation staggered */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
          className={`flex flex-wrap gap-2 md:gap-4 ${isMobile ? "justify-center" : ""}`}
        >
          {techs.map((tech, index) => (
            <motion.div
              key={tech.id}
              custom={index}
              variants={badgeVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-1 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 
                         bg-[#111111] border border-[#222222] text-white 
                         font-medium rounded-lg shadow-sm cursor-default 
                         relative overflow-hidden
                         text-xs md:text-sm`}
            >
              {/* Effet de brillance au hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />

              {/* Emoji avec animation */}
              <motion.span
                className={`relative z-10 ${isMobile ? "text-base" : "text-xl"}`}
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.3 },
                }}
              >
                {tech.emoji}
              </motion.span>

              {/* Texte avec animation */}
              <motion.span
                className="relative z-10"
                whileHover={{
                  color: "#ffffff",
                  textShadow: "0 0 8px rgba(255,255,255,0.5)",
                }}
              >
                {tech.name}
              </motion.span>

              {/* Effet de particule au hover - désactivé sur mobile pour performance */}
              {!isMobile && (
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-primary rounded-full"
                      initial={{
                        x: "50%",
                        y: "50%",
                        scale: 0,
                      }}
                      animate={{
                        x: `${30 + i * 20}%`,
                        y: `${30 + i * 20}%`,
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeOut",
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
