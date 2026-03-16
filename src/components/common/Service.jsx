import { Server, GitBranch, Database } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useMobile } from "../../hooks/useMobile";

const services = [
  {
    id: 1,
    title: "Backend Development",
    description:
      "Building robust and scalable APIs with Node.js, Express, and NestJS using both relational and NoSQL databases.",
    icon: Server,
    tag: "NODE · EXPRESS · NESTJS",
  },
  {
    id: 2,
    title: "DevOps & CI/CD",
    description:
      "Automating deployments and continuous integration pipelines using Docker and Jenkins.",
    icon: GitBranch,
    tag: "DOCKER · GITHUB ACTIONS",
  },
  {
    id: 3,
    title: "Database & API Design",
    description:
      "Designing efficient database schemas, RESTful APIs, and optimizing queries for performance and scalability.",
    icon: Database,
    tag: "REST · SQL · NOSQL",
  },
];

const CornerBrackets = ({ active }) => (
  <>
    <motion.div
      className="absolute top-0 left-0 w-4 h-4 pointer-events-none"
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ duration: 0.15 }}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-foreground" />
      <div className="absolute top-0 left-0 h-full w-px bg-foreground" />
    </motion.div>
    <motion.div
      className="absolute top-0 right-0 w-4 h-4 pointer-events-none"
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ duration: 0.15 }}
    >
      <div className="absolute top-0 right-0 w-full h-px bg-foreground" />
      <div className="absolute top-0 right-0 h-full w-px bg-foreground" />
    </motion.div>
    <motion.div
      className="absolute bottom-0 left-0 w-4 h-4 pointer-events-none"
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ duration: 0.15 }}
    >
      <div className="absolute bottom-0 left-0 w-full h-px bg-foreground" />
      <div className="absolute bottom-0 left-0 h-full w-px bg-foreground" />
    </motion.div>
    <motion.div
      className="absolute bottom-0 right-0 w-4 h-4 pointer-events-none"
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ duration: 0.15 }}
    >
      <div className="absolute bottom-0 right-0 w-full h-px bg-foreground" />
      <div className="absolute bottom-0 right-0 h-full w-px bg-foreground" />
    </motion.div>
  </>
);

const ServiceCard = ({ service, index }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.35,
        delay: index * 0.08,
        ease: [0.25, 0, 0, 1],
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative"
    >
      <motion.div
        className="relative overflow-hidden border border-border h-full flex flex-col p-6"
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
              transition={{ duration: 0.5, ease: "linear" }}
            />
          )}
        </AnimatePresence>

        <div className="flex items-center justify-between mb-6">
          <motion.span
            className="font-mono text-4xl font-black select-none leading-none"
            animate={{ opacity: hovered ? 0.12 : 0.04 }}
            style={{ color: "var(--foreground)" }}
            transition={{ duration: 0.2 }}
          >
            {num}
          </motion.span>
          <motion.span
            className="font-mono text-[10px] tracking-[0.2em]"
            animate={{ opacity: hovered ? 0.7 : 0.2 }}
            style={{ color: "var(--foreground)" }}
            transition={{ duration: 0.2 }}
          >
            {service.tag}
          </motion.span>
        </div>

        <motion.div
          className="mb-4 w-max"
          animate={{ opacity: hovered ? 1 : 0.5 }}
          transition={{ duration: 0.2 }}
        >
          <Icon className="w-6 h-6" style={{ color: "var(--foreground)" }} />
        </motion.div>

        <motion.div
          className="h-px mb-4"
          animate={{ opacity: hovered ? 0.3 : 0.08 }}
          style={{ backgroundColor: "var(--foreground)" }}
          transition={{ duration: 0.2 }}
        />

        <motion.h3
          className="text-base font-bold tracking-tight mb-2"
          animate={{
            color: hovered ? "var(--foreground)" : "var(--muted-foreground)",
          }}
          transition={{ duration: 0.2 }}
        >
          {service.title}
        </motion.h3>

        <motion.p
          className="text-xs leading-relaxed flex-1"
          animate={{ opacity: hovered ? 0.5 : 0.2 }}
          style={{ color: "var(--foreground)" }}
          transition={{ duration: 0.2 }}
        >
          {service.description}
        </motion.p>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px"
          animate={{ opacity: hovered ? 0.4 : 0, scaleX: hovered ? 1 : 0 }}
          style={{ background: "var(--foreground)", transformOrigin: "left" }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

export const Services = () => {
  const isMobile = useMobile(768);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
      transition={{ duration: 0.5 }}
      className="py-12 md:py-20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10 px-1"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="font-mono text-[10px] tracking-[0.3em] opacity-40 text-foreground">
              SYS://SERVICES
            </div>
            <div className="flex-1 h-px bg-foreground opacity-10" />
            <div className="font-mono text-[10px] tracking-widest opacity-20 text-foreground">
              {services.length} ENTRIES
            </div>
          </div>
          <div className="relative">
            <h2 className="text-4xl font-black tracking-tight text-foreground leading-none">
              SERVICES
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px]">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
