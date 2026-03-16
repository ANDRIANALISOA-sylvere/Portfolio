import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useMobile } from "../../hooks/useMobile";

const projects = [
  {
    id: 0,
    name: "MailPulse",
    description:
      "Reliable email delivery infrastructure — send, track, and retry transactional emails at scale.",
    repo: "https://github.com/ANDRIANALISOA-sylvere/MailPulse",
    tag: "IN PROGRESS",
    wip: true,
  },
  {
    id: 1,
    name: "RideSync",
    description:
      "Real-time ride dispatch system — microservices, event-driven architecture, CQRS, WebSockets, Redis Geosearch & RabbitMQ with NestJS.",
    repo: "https://github.com/ANDRIANALISOA-sylvere/RideSync",
    tag: "IN PROGRESS",
    wip: true,
  },
    {
    id: 2,
    name: "Toolsmith",
    description:
      "Backend toolbox engine to centralize, execute and audit internal developer tools — scripts, webhooks, cron jobs and admin panels.",
    repo: "https://github.com/ANDRIANALISOA-sylvere/Toolsmith",
    tag: "IN PROGRESS",
    wip: true,
  },
  {
    id: 3,
    name: "AuditStream",
    description:
      "Real-time financial transaction auditing system powered by database triggers.",
    repo: "https://github.com/ANDRIANALISOA-sylvere/AuditStream",
    tag: "IN PROGRESS",
    wip: true,
  },
  {
    id: 4,
    name: "MediMeet",
    description:
      "Mobile app to book and manage medical appointments — find doctors and schedule consultations in a few taps.",
    repo: "https://github.com/ANDRIANALISOA-sylvere/MediMeet",
    tag: "MOBILE · HEALTH",
  },
  {
    id: 5,
    name: "EcoPlay",
    description:
      "Interactive web game simulating real-life financial situations to teach budget, credit, taxes and investments.",
    repo: "https://github.com/ANDRIANALISOA-sylvere/EcoPlay-Hackonomics2025",
    tag: "HACKATHON HACKONOMICS",
  },
  {
    id: 6,
    name: "NestJsAuth-API",
    description:
      "NestJS auth API with Passport.js, Prisma, PostgreSQL — JWT authentication and Google OAuth 2.0.",
    repo: "https://github.com/ANDRIANALISOA-sylvere/NestJsAuth-API",
    tag: "API · AUTH",
  },
  {
    id: 7,
    name: "e-Reserva",
    description:
      "Mobile app to browse and book concert halls and show venues — intuitive seat discovery and reservation.",
    repo: "https://github.com/ANDRIANALISOA-sylvere/e-Reserva",
    tag: "MOBILE · EVENTS",
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

const ProjectRow = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);
  const isMobile = useMobile(768);
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.a
      href={project.repo}
      target="_blank"
      rel="noopener noreferrer"
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
      className="relative block"
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

        <div
          className={`flex items-center ${isMobile ? "px-3 py-4" : "px-6 py-5"}`}
        >
          {!isMobile && (
            <>
              <motion.div
                className="font-mono text-5xl font-black leading-none mr-6 select-none flex-shrink-0 w-16 text-right"
                animate={{ opacity: hovered ? 0.12 : 0.04 }}
                transition={{ duration: 0.2 }}
                style={{ color: "var(--foreground)" }}
              >
                {num}
              </motion.div>

              <motion.div
                className="self-stretch w-px mr-6 flex-shrink-0"
                animate={{ opacity: hovered ? 0.3 : 0.1 }}
                style={{ backgroundColor: "var(--foreground)" }}
                transition={{ duration: 0.2 }}
              />
            </>
          )}

          {!isMobile && (
            <div className="flex-shrink-0 w-28 mr-6">
              {project.wip ? (
                <div className="inline-flex items-center gap-1.5">
                  <motion.span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-40" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-foreground opacity-70" />
                  </motion.span>
                  <motion.span
                    className="font-mono text-[10px] tracking-[0.2em]"
                    animate={{ opacity: hovered ? 0.8 : 0.4 }}
                    style={{ color: "var(--foreground)" }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.tag}
                  </motion.span>
                </div>
              ) : (
                <motion.div
                  className="font-mono text-[10px] tracking-[0.2em]"
                  animate={{ opacity: hovered ? 0.8 : 0.2 }}
                  style={{ color: "var(--foreground)" }}
                  transition={{ duration: 0.2 }}
                >
                  {project.tag}
                </motion.div>
              )}
            </div>
          )}

          <div className="flex-1 min-w-0">
            <motion.div
              className={`font-bold tracking-tight leading-none ${isMobile ? "text-sm" : "text-base"}`}
              animate={{
                color: hovered
                  ? "var(--foreground)"
                  : "var(--muted-foreground)",
              }}
              transition={{ duration: 0.2 }}
            >
              {project.name}
            </motion.div>
            <motion.p
              className="mt-1.5 text-xs leading-relaxed truncate"
              animate={{ opacity: hovered ? 0.5 : 0.2 }}
              style={{ color: "var(--foreground)" }}
              transition={{ duration: 0.2 }}
            >
              {project.description}
            </motion.p>
          </div>

          <motion.div
            className="font-mono text-sm flex-shrink-0 ml-3"
            animate={{ opacity: hovered ? 0.8 : 0.2, x: hovered ? 4 : 0 }}
            style={{ color: "var(--foreground)" }}
            transition={{ duration: 0.2 }}
          >
            ↗
          </motion.div>
        </div>
      </motion.div>
    </motion.a>
  );
};

export const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="py-16 md:py-20"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10 px-1"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="font-mono text-[10px] tracking-[0.3em] opacity-40 text-foreground">
              SYS://PROJECTS
            </div>
            <div className="flex-1 h-px bg-foreground opacity-10" />
            <div className="font-mono text-[10px] tracking-widest opacity-20 text-foreground">
              {projects.length} ENTRIES
            </div>
          </div>

          <div className="relative">
            <h2 className="text-4xl font-black tracking-tight text-foreground leading-none">
              PROJECTS
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

        <div className="flex flex-col gap-[1px]">
          {projects.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
