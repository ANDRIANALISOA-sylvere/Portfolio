import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useMobile } from "../../hooks/useMobile";
import InnovT from "../../assets/innov-t.jpg";
import MIM from "../../assets/MIM.jpg";
import CUF from "../../assets/CUF.png";
import Avatar from "../../assets/avatar.jpeg";
import IttMada from "../../assets/itt-mada.jpg";

const experiences = [
  {
    id: 1,
    company: "Freelance",
    logo: Avatar,
    role: "Full Stack Developer",
    date: "Sep 2025 — Feb 2026",
    description:
      "Built React UIs, integrated APIs, and delivered a full e-commerce app with cart & product management.",
    tag: "FREELANCE",
  },
  {
    id: 2,
    company: "Innov-T",
    logo: InnovT,
    role: "Backend Developer (Intern)",
    date: "Aug 2025 — Nov 2025",
    description:
      "Built RESTful APIs with Express & NestJS, implemented JWT auth, RBAC, and documented with Swagger.",
    tag: "BACKEND",
  },
  {
    id: 3,
    company: "ITT Mada",
    logo: IttMada,
    role: "Frontend Developer (Intern)",
    date: "Jun 2025 — Jul 2025",
    description:
      "Integrated Figma mockups and optimized UI with modern frontend frameworks and libraries.",
    tag: "FRONTEND",
  },
  {
    id: 4,
    company: "MIM",
    logo: MIM,
    role: "Full Stack Developer (Intern)",
    date: "Aug 2024 — Nov 2024",
    description:
      "Built a case-tracking app with Telegram bot integration, RBAC, and optimized DB using Laravel & React.",
    tag: "FULL STACK",
  },
  {
    id: 5,
    company: "CUF",
    logo: CUF,
    role: "Full Stack Developer (Intern)",
    date: "Sep 2023 — Nov 2023",
    description:
      "Developed an archive management system with advanced search, access control, and document backup.",
    tag: "FULL STACK",
  },
];

const CornerBrackets = ({ active }) => (
  <>
    <motion.div
      className="absolute top-0 left-0 w-3 h-3 pointer-events-none"
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ duration: 0.15 }}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-foreground" />
      <div className="absolute top-0 left-0 h-full w-px bg-foreground" />
    </motion.div>
    <motion.div
      className="absolute top-0 right-0 w-3 h-3 pointer-events-none"
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ duration: 0.15 }}
    >
      <div className="absolute top-0 right-0 w-full h-px bg-foreground" />
      <div className="absolute top-0 right-0 h-full w-px bg-foreground" />
    </motion.div>
    <motion.div
      className="absolute bottom-0 left-0 w-3 h-3 pointer-events-none"
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ duration: 0.15 }}
    >
      <div className="absolute bottom-0 left-0 w-full h-px bg-foreground" />
      <div className="absolute bottom-0 left-0 h-full w-px bg-foreground" />
    </motion.div>
    <motion.div
      className="absolute bottom-0 right-0 w-3 h-3 pointer-events-none"
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ duration: 0.15 }}
    >
      <div className="absolute bottom-0 right-0 w-full h-px bg-foreground" />
      <div className="absolute bottom-0 right-0 h-full w-px bg-foreground" />
    </motion.div>
  </>
);

const ExperienceRow = ({ exp, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.35,
        delay: index * 0.06,
        ease: [0.25, 0, 0, 1],
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative"
    >
      <motion.div
        className="relative overflow-hidden border border-border"
        animate={{ backgroundColor: hovered ? "var(--muted)" : "transparent" }}
        transition={{ duration: 0.2 }}
      >
        <CornerBrackets active={hovered} />

        <AnimatePresence>
          {hovered && (
            <motion.div
              className="absolute left-0 right-0 h-px pointer-events-none z-20"
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--foreground), transparent)",
                opacity: 0.12,
              }}
              initial={{ top: 0 }}
              animate={{ top: "100%" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: "linear" }}
            />
          )}
        </AnimatePresence>

        <motion.div
          className="absolute left-0 top-0 bottom-0 w-px"
          animate={{ opacity: hovered ? 0.5 : 0, scaleY: hovered ? 1 : 0 }}
          style={{ background: "var(--foreground)", transformOrigin: "center" }}
          transition={{ duration: 0.2 }}
        />

        <div className="flex items-center gap-3 px-4 py-4">
          <motion.img
            src={exp.logo}
            alt={exp.company}
            className="w-8 h-8 rounded-full object-cover flex-shrink-0"
            animate={{ opacity: hovered ? 1 : 0.6 }}
            transition={{ duration: 0.2 }}
          />

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <motion.div
                className="text-sm font-bold tracking-tight leading-none truncate"
                animate={{
                  color: hovered
                    ? "var(--foreground)"
                    : "var(--muted-foreground)",
                }}
                transition={{ duration: 0.2 }}
              >
                {exp.company}
              </motion.div>
              <motion.div
                className="text-[10px] flex-shrink-0"
                animate={{ opacity: hovered ? 0.5 : 0.2 }}
                style={{ color: "var(--foreground)" }}
                transition={{ duration: 0.2 }}
              >
                {exp.date}
              </motion.div>
            </div>

            <motion.p
              className="mt-1 text-[11px] truncate"
              animate={{ opacity: hovered ? 0.7 : 0.35 }}
              style={{ color: "var(--foreground)" }}
              transition={{ duration: 0.2 }}
            >
              {exp.role}
            </motion.p>

            <motion.p
              className="mt-0.5 text-[10px] truncate"
              animate={{ opacity: hovered ? 0.4 : 0.15 }}
              style={{ color: "var(--foreground)" }}
              transition={{ duration: 0.2 }}
            >
              {exp.description}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Experience = () => {
  const isMobile = useMobile(768);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
      transition={{ duration: 0.5 }}
      className={`${isMobile ? "py-8" : "py-16 md:py-20"}`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-6 px-1"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="font-mono text-[10px] tracking-[0.3em] opacity-40 text-foreground">
              SYS://XP
            </div>
            <div className="flex-1 h-px bg-foreground opacity-10" />
            <div className="font-mono text-[10px] tracking-widest opacity-20 text-foreground">
              {experiences.length} ENTRIES
            </div>
          </div>
          <div className="relative">
            <h2 className="text-2xl font-black tracking-tight text-foreground leading-none">
              EXPERIENCE
            </h2>
            <motion.div
              className="mt-2 h-[2px] bg-foreground"
              initial={{ width: 0 }}
              whileInView={{ width: "2.5rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        <div className="flex flex-col gap-[1px]">
          {experiences.map((exp, index) => (
            <ExperienceRow key={exp.id} exp={exp} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-4 flex items-center gap-3 px-1"
        >
          <div className="flex-1 h-px bg-foreground opacity-10" />
          <div className="font-mono text-[9px] tracking-[0.2em] opacity-20 text-foreground">
            END OF INDEX
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
