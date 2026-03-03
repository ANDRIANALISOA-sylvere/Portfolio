import { Folder } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    id: 1,
    name: "AuditStream",
    description:
      "Application de suivi d'empreinte carbone avec visualisation de données",
    repo: "https://github.com/ANDRIANALISOA-sylvere/AuditStream",
  },
  {
    id: 2,
    name: "ToolSmith",
    description:
      "Application de suivi d'empreinte carbone avec visualisation de données",
    repo: "https://github.com/ANDRIANALISOA-sylvere/ecotracker",
  },
  {
    id: 3,
    name: "MemoryGrid",
    description: "Outil de gestion de projet collaboratif avec tableaux Kanban",
    repo: "https://github.com/ANDRIANALISOA-sylvere/taskflow",
  },
  {
    id: 4,
    name: "FlowForge",
    description: "Plateforme de téléconsultation médicale et suivi patient",
    repo: "https://github.com/ANDRIANALISOA-sylvere/medicare",
  },
  {
    id: 5,
    name: "RuleMind",
    description:
      "Application de gestion financière personnelle et investissements",
    repo: "https://github.com/ANDRIANALISOA-sylvere/finwise",
  },
  {
    id: 6,
    name: "LearnHub",
    description: "Plateforme d'apprentissage en ligne avec cours interactifs",
    repo: "https://github.com/ANDRIANALISOA-sylvere/learnhub",
  },
  {
    id: 7,
    name: "FitTrack",
    description: "Application de suivi fitness et nutrition avec IA",
    repo: "https://github.com/ANDRIANALISOA-sylvere/fittrack",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const projectVariants = {
  hidden: { 
    opacity: 0,
    x: -30,
  },
  visible: { 
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    }
  },
};

export const Projects = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Projects avec animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 px-6 py-5 border-b border-[#222222] mb-6"
        >
          <motion.div 
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="p-2 bg-[#161616] border border-[#222222] rounded-lg"
          >
            <Folder className="w-5 h-5 text-gray-300" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg font-bold text-white"
          >
            Projects
          </motion.h2>
        </motion.div>

        {/* Liste des projets avec animation staggered */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-4"
        >
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              variants={projectVariants}
              custom={index}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
              whileTap={{ scale: 0.98 }}
              className="group block"
            >
              <div className="relative flex overflow-hidden rounded-xs border border-[#222222] bg-[#111111] hover:bg-[#161616] hover:border-gray-700 transition-all duration-300 min-h-[140px]">
                {/* Dégradé décoratif */}
                <motion.div 
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 0.8 }}
                  className="absolute top-0 right-0 h-full w-1/4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 group-hover:from-gray-700/50 group-hover:to-gray-800/50 transition-all duration-500"
                />

                {/* Éléments décoratifs avec animations au hover */}
                <motion.div 
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="absolute top-4 right-6 w-12 h-12 border border-gray-700 rounded-lg rotate-12 group-hover:rotate-45 transition-transform duration-500"
                />
                
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute bottom-4 right-12 w-8 h-8 border border-gray-700 rounded-full group-hover:scale-110 transition-transform duration-500"
                />

                {/* Points décoratifs avec animation */}
                <div className="absolute top-1/2 right-16 -translate-y-1/2 space-y-1.5">
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        opacity: [0.5, 1, 0.5],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                      className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-gray-400 transition-colors"
                    />
                  ))}
                </div>

                {/* Trait décoratif vertical */}
                <div className="absolute right-32 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-gray-700 to-transparent group-hover:via-gray-500 transition-colors" />

                {/* Texte */}
                <div className="flex-1 p-6 relative z-10">
                  <motion.h3 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg font-semibold text-white group-hover:text-primary transition-colors"
                  >
                    {project.name}
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-2 text-white/60 text-sm max-w-[70%] group-hover:text-white/80 transition-colors"
                  >
                    {project.description}
                  </motion.p>
                  
                  <motion.span 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ x: 5 }}
                    className="mt-4 inline-block text-white/80 group-hover:text-white group-hover:underline text-sm"
                  >
                    View Repository →
                  </motion.span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};