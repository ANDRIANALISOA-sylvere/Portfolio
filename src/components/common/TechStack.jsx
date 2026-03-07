import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
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

const TechBadge = ({ tech, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3, delay: index * 0.05, ease: [0.25, 0, 0, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative"
    >
      <motion.div
        className="relative overflow-hidden border border-border flex items-center gap-2.5 px-4 py-2.5 cursor-default"
        animate={{ backgroundColor: hovered ? "var(--muted)" : "transparent" }}
        transition={{ duration: 0.2 }}
      >
        {/* Corner brackets */}
        <motion.div className="absolute top-0 left-0 w-3 h-3 pointer-events-none" animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.15 }}>
          <div className="absolute top-0 left-0 w-full h-px bg-foreground" />
          <div className="absolute top-0 left-0 h-full w-px bg-foreground" />
        </motion.div>
        <motion.div className="absolute top-0 right-0 w-3 h-3 pointer-events-none" animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.15 }}>
          <div className="absolute top-0 right-0 w-full h-px bg-foreground" />
          <div className="absolute top-0 right-0 h-full w-px bg-foreground" />
        </motion.div>
        <motion.div className="absolute bottom-0 left-0 w-3 h-3 pointer-events-none" animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.15 }}>
          <div className="absolute bottom-0 left-0 w-full h-px bg-foreground" />
          <div className="absolute bottom-0 left-0 h-full w-px bg-foreground" />
        </motion.div>
        <motion.div className="absolute bottom-0 right-0 w-3 h-3 pointer-events-none" animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.15 }}>
          <div className="absolute bottom-0 right-0 w-full h-px bg-foreground" />
          <div className="absolute bottom-0 right-0 h-full w-px bg-foreground" />
        </motion.div>

        {/* Scanline */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="absolute left-0 right-0 h-px pointer-events-none z-20"
              style={{ background: "linear-gradient(90deg, transparent, var(--foreground), transparent)", opacity: 0.12 }}
              initial={{ top: 0 }}
              animate={{ top: "100%" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "linear" }}
            />
          )}
        </AnimatePresence>

        {/* Left accent */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-px"
          animate={{ opacity: hovered ? 0.5 : 0, scaleY: hovered ? 1 : 0 }}
          style={{ background: "var(--foreground)", transformOrigin: "center" }}
          transition={{ duration: 0.2 }}
        />

        <span className="text-base leading-none">{tech.emoji}</span>

        <motion.span
          className="text-sm font-bold tracking-tight"
          animate={{ color: hovered ? "var(--foreground)" : "var(--muted-foreground)" }}
          transition={{ duration: 0.2 }}
        >
          {tech.name}
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export const TechStack = () => {
  const isMobile = useMobile(640);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
      transition={{ duration: 0.5 }}
      className="py-12 md:py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10 px-1"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="text-[10px] tracking-[0.3em] opacity-40 text-foreground">
              SYS://TECH
            </div>
            <div className="flex-1 h-px bg-foreground opacity-10" />
            <div className="text-[10px] tracking-widest opacity-20 text-foreground">
              {techs.length} ENTRIES
            </div>
          </div>
          <div className="relative">
            <h2 className="text-4xl font-black tracking-tight text-foreground leading-none">
              TECH STACK
            </h2>
            <motion.div
              className="mt-2 h-[2px] bg-foreground"
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        {/* Badges */}
        <div className={`flex flex-wrap gap-[1px] ${isMobile ? "justify-center" : ""}`}>
          {techs.map((tech, index) => (
            <TechBadge key={tech.id} tech={tech} index={index} />
          ))}
        </div>

        {/* Footer */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-6 flex items-center gap-3 px-1"
        >
          <div className="flex-1 h-px bg-foreground opacity-10" />
          <div className="text-[9px] tracking-[0.2em] opacity-20 text-foreground">
            END OF INDEX
          </div>
        </motion.div> */}
      </div>
    </motion.div>
  );
};