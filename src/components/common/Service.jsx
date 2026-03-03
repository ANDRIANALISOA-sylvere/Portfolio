import { Server, GitBranch, Cloud } from "lucide-react";
import { motion } from "motion/react";
import { useMobile } from "../../hooks/useMobile";

const services = [
  {
    id: 1,
    title: "Backend Development",
    description:
      "Création d'API robustes et scalables avec Node.js, Express et bases de données relationnelles ou NoSQL.",
    icon: <Server className="w-5 h-5 md:w-6 md:h-6 text-white" />,
  },
  {
    id: 2,
    title: "DevOps & CI/CD",
    description:
      "Automatisation des déploiements, intégration continue et monitoring avec Docker, GitHub Actions et PM2.",
    icon: <GitBranch className="w-5 h-5 md:w-6 md:h-6 text-white" />,
  },
  {
    id: 3,
    title: "Cloud & Scalability",
    description:
      "Déploiement d'applications cloud-ready avec haute disponibilité et sécurité sur AWS ou autres providers.",
    icon: <Cloud className="w-5 h-5 md:w-6 md:h-6 text-white" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6,
    },
  },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 0.2,
    },
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

export const Services = () => {
  const isMobile = useMobile(768);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
      transition={{ duration: 0.6 }}
      className="py-12 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header avec animation */}
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className={`flex items-center gap-2 md:gap-3 text-base md:text-lg font-bold text-white mb-6 md:mb-8 ${
            isMobile ? 'justify-center' : ''
          }`}
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
          >
            <Server className="w-4 h-4 md:w-5 md:h-5 text-primary" />
          </motion.div>
          My Services
        </motion.h2>

        {/* Services Cards avec animation staggered au scroll */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={!isMobile ? {
                y: -8,
                boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.5)",
                borderColor: "#444444",
              } : {}}
              whileTap={isMobile ? { scale: 0.98 } : {}}
              className="bg-[#111111] border border-[#222222] rounded-sm p-5 md:p-6 flex flex-col gap-2 md:gap-3 cursor-default group"
            >
              <motion.div
                variants={iconVariants}
                whileHover={!isMobile ? "hover" : {}}
                className="p-2 md:p-3 bg-[#161616] rounded-lg w-max relative overflow-hidden"
              >
                {/* Effet de brillance au hover - désactivé sur mobile */}
                {!isMobile && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                )}
                {service.icon}
              </motion.div>

              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-white font-semibold text-sm md:text-base group-hover:text-primary transition-colors"
              >
                {service.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-gray-400 text-xs md:text-sm leading-relaxed group-hover:text-gray-300 transition-colors"
              >
                {service.description}
              </motion.p>

              {/* Ligne décorative au hover - désactivée sur mobile */}
              {!isMobile && (
                <motion.div
                  className="h-0.5 bg-gradient-to-r from-primary to-transparent mt-2"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};