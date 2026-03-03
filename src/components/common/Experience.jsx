import { Briefcase } from "lucide-react";
import { motion } from "motion/react";
import { useMobile } from "../../hooks/useMobile";
import InnovT from "../../assets/innov-t.jpg";
import MIM from "../../assets/MIM.jpg";
import CUF from "../../assets/CUF.png";
import Avatar from "../../assets/avatar.jpeg";

const experiences = [
  {
    id: 1,
    company: "Freelance",
    logo: Avatar,
    role: "Full Stack Developer",
    date: "2020 Jun — 2021 Dec",
    description: "Développement de sites web et applications",
  },
  {
    id: 2,
    company: "Innov-T",
    logo: InnovT,
    role: "Backend Developer (Intern)",
    date: "2025 Aug — Nov",
    description: "Développement d'applications React et Node.js",
  },
  {
    id: 3,
    company: "MIM",
    logo: MIM,
    role: "Full Stack Developer (Intern)",
    date: "2024 Sept — Nov",
    description: "Création de produits MVP pour startups",
  },
  {
    id: 4,
    company: "CUF",
    logo: CUF,
    role: "Full Stack Developer (Intern)",
    date: "2023 Aug — 2021 Oct",
    description: "Développement de sites web et applications",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    }
  },
};

export const Experience = () => {
  const isMobile = useMobile(768);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
      transition={{ duration: 0.6 }}
      className={`${isMobile ? 'py-8' : 'py-16 md:py-20'}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Card principale */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xs bg-[#111111] border border-[#222222] overflow-hidden"
        >
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 px-4 md:px-6 py-4 md:py-5 border-b border-[#222222]"
          >
            <motion.div 
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="p-2 bg-[#161616] border border-[#222222] rounded-lg"
            >
              <Briefcase className="w-5 h-5 text-gray-300" />
            </motion.div>
            <h2 className="text-base md:text-lg font-bold text-white">Work Experience</h2>
          </motion.div>

          {/* Liste avec animations staggered */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: isMobile ? 0.1 : 0.1 }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                custom={index}
                whileHover={{ 
                  backgroundColor: "#161616",
                  transition: { duration: 0.2 }
                }}
                className="group px-4 md:px-6 py-4 md:py-5 transition-colors duration-300"
              >
                <div className="flex gap-3 md:gap-4">
                  {/* Logo */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="flex-shrink-0"
                  >
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                    />
                  </motion.div>

                  {/* Contenu */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
                      <motion.h3 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-semibold text-white text-sm md:text-base"
                      >
                        {exp.company}
                      </motion.h3>
                      <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xs md:text-sm text-gray-500"
                      >
                        {exp.date}
                      </motion.span>
                    </div>

                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-300 mb-1 text-xs md:text-sm"
                    >
                      {exp.role}
                    </motion.p>
                    
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="text-gray-500 text-xs md:text-sm"
                    >
                      {exp.description}
                    </motion.p>
                  </div>
                </div>

                {/* Divider avec animation */}
                {index < experiences.length - 1 && (
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-4 md:mt-5 h-px bg-[#222222] origin-left"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};