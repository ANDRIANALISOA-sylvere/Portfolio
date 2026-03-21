import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useMobile } from "../../hooks/useMobile";
import { Github } from "lucide-react";

const projects = [
  {
    id: 0,
    name: "LockCLI",
    description: "A secure CLI password manager",
    details:
      "A secure CLI password manager : store, retrieve and manage your credentials locally from your terminal.",
    repo: "https://github.com/ANDRIANALISOA-sylvere/LockCLI",
    tag: "CLI",
    wip: false,
    tech: "Inquirer.js · bcrypt · CLI",
  },
  {
    id: 1,
    name: "MailPulse",
    description:
      "Reliable email delivery infrastructure — send, track, and retry transactional emails at scale.",
    details:
      "Transactional email service built with NestJS and PostgreSQL. Clean Architecture with domain, application, infrastructure and interface layers. BullMQ queue for async email delivery with retry logic and dead letter queue. SMTP delivery via Gmail. Full audit trail — every email is tracked with status, error message and retry count.",
    repo: "https://github.com/ANDRIANALISOA-sylvere/MailPulse",
    tag: "IN PROGRESS",
    wip: true,
    tech: "NestJS · PostgreSQL · BullMQ · Redis · SMTP",
  },
  {
    id: 2,
    name: "RideSync",
    description:
      "Real-time ride dispatch system — microservices, event-driven architecture, CQRS, WebSockets, Redis Geosearch & RabbitMQ with NestJS.",
    details:
      "Microservices-based ride dispatch system with NestJS. Four independent services — api-gateway, location-service, ride-service, notification-service — communicating via RabbitMQ events. Redis Geosearch to find nearest drivers within a radius. Full ride lifecycle: request, match, accept, complete, cancel. Docker Compose to orchestrate all services.",
    repo: "https://github.com/ANDRIANALISOA-sylvere/RideSync",
    tag: "IN PROGRESS",
    wip: true,
    tech: "NestJS · Redis · RabbitMQ · Docker · PostgreSQL",
  },
  {
    id: 3,
    name: "Toolsmith",
    description:
      "Backend toolbox engine to centralize, execute and audit internal developer tools — scripts, webhooks, cron jobs and admin panels.",
    details:
      "Multi-tenant SaaS platform built with NestJS and Clean Architecture. Companies register tools (webhook or script), execute them with typed parameters, and get a full audit log. Hexagonal Architecture with ports and adapters — swap Postgres for any DB without touching the domain. JWT auth with RBAC — Admin, Developer and Operator roles.",
    repo: "https://github.com/ANDRIANALISOA-sylvere/Toolsmith",
    tag: "IN PROGRESS",
    wip: true,
    tech: "NestJS · PostgreSQL · TypeORM · JWT · Docker",
  },
  {
    id: 4,
    name: "AuditStream",
    description:
      "Real-time financial transaction auditing system powered by database triggers.",
    repo: "https://github.com/ANDRIANALISOA-sylvere/AuditStream",
    tag: "IN PROGRESS",
    wip: true,
    details:
      "Real-time audit system for financial transactions using PostgreSQL triggers to capture every data change automatically. Events are streamed and stored in an immutable audit log. Built to explore change data capture patterns and event-driven audit trails.",
    tech: "PostgreSQL · Node.js · WebSockets",
  },
  {
    id: 5,
    name: "MediMeet",
    description:
      "Mobile app to book and manage medical appointments — find doctors and schedule consultations in a few taps.",
    details:
      "React Native mobile app with Expo for booking medical appointments. Features doctor search, appointment scheduling, and consultation management. Backend built with Express.js, Prisma ORM and PostgreSQL. JWT authentication with patient and doctor roles.",
    repo: "https://github.com/ANDRIANALISOA-sylvere/MediMeet",
    tag: "MOBILE · HEALTH",
    tech: "React Native · Express.js · Prisma · PostgreSQL · Expo",
  },
  {
    id: 6,
    name: "EcoPlay",
    description:
      "Interactive web game simulating real-life financial situations to teach budget, credit, taxes and investments.",
    details:
      "Educational web game built during Hackonomics hackathon. React and TypeScript frontend with interactive financial scenarios. Players make real-life budget, credit and investment decisions and get instant feedback on their choices.",
    repo: "https://github.com/ANDRIANALISOA-sylvere/EcoPlay-Hackonomics2025",
    tag: "HACKATHON HACKONOMICS",
    tech: "React · TypeScript · TailwindCSS · Vite · Express.js",
  },
  {
    id: 7,
    name: "NestJsAuth-API",
    description:
      "NestJS auth API with Passport.js, Prisma, PostgreSQL — JWT authentication and Google OAuth 2.0.",
    details:
      "Authentication API built with NestJS and Passport.js. JWT access tokens, refresh token rotation, and Google OAuth 2.0 integration. Role-based access control, input validation, and rate limiting. Built to learn and apply security best practices in a real NestJS project.",
    repo: "https://github.com/ANDRIANALISOA-sylvere/NestJsAuth-API",
    tag: "API · AUTH",
    tech: "NestJS · Passport.js · Prisma · PostgreSQL · JWT",
  },
  {
    id: 8,
    name: "e-Reserva",
    description:
      "Mobile app to browse and book concert halls and show venues — intuitive seat discovery and reservation.",
    details:
      "React Native mobile app for discovering and booking concert halls and event venues. Users can browse available venues, view seat layouts, and make reservations. Built with NestJS backend and PostgreSQL for reservation management.",
    repo: "https://github.com/ANDRIANALISOA-sylvere/e-Reserva",
    tag: "MOBILE · EVENTS",
    tech: "React Native · NestJS · PostgreSQL",
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
  const [detailsOpen, setDetailsOpen] = useState(false);
  const isMobile = useMobile(768);
  const num = String(index + 1).padStart(2, "0");

  const handleCardClick = (e) => {
    if (isMobile) {
      e.preventDefault();
      setDetailsOpen(!detailsOpen);
    }
  };

  const handleGithubClick = (e) => {
    e.stopPropagation();
    window.open(project.repo, "_blank");
  };

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
      className="relative block"
    >
      <motion.div
        className="relative overflow-hidden border border-border"
        animate={{ backgroundColor: hovered ? "var(--muted)" : "transparent" }}
        transition={{ duration: 0.2 }}
        onHoverStart={() => !isMobile && setHovered(true)}
        onHoverEnd={() => !isMobile && setHovered(false)}
        onClick={handleCardClick}
      >
        <CornerBrackets active={hovered || detailsOpen} />

        <AnimatePresence>
          {(hovered || detailsOpen) && (
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
          animate={{
            opacity: hovered || detailsOpen ? 0.5 : 0,
            scaleY: hovered || detailsOpen ? 1 : 0,
          }}
          style={{ background: "var(--foreground)", transformOrigin: "center" }}
          transition={{ duration: 0.2 }}
        />

        <div>
          {/* Main content */}
          <div
            className={`flex items-start ${isMobile ? "px-3 py-4" : "px-6 py-5"}`}
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
              <div className="flex items-center gap-2 mb-1">
                <motion.div
                  className={`font-bold tracking-tight leading-none ${isMobile ? "text-sm" : "text-base"}`}
                  animate={{
                    color:
                      hovered || detailsOpen
                        ? "var(--foreground)"
                        : "var(--muted-foreground)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {project.name}
                </motion.div>
                {!isMobile && project.tech && (
                  <motion.div
                    className="text-[8px] font-mono tracking-wider px-1.5 py-0.5 rounded-sm"
                    animate={{
                      opacity: hovered ? 0.6 : 0.2,
                      backgroundColor: hovered
                        ? "var(--foreground)"
                        : "transparent",
                      color: hovered
                        ? "var(--background)"
                        : "var(--foreground)",
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ border: "1px solid var(--foreground)" }}
                  >
                    {project.tech}
                  </motion.div>
                )}
              </div>

              <motion.p
                className="text-xs leading-relaxed mb-2"
                animate={{ opacity: hovered || detailsOpen ? 0.8 : 0.2 }}
                style={{ color: "var(--foreground)" }}
                transition={{ duration: 0.2 }}
              >
                {project.description}
              </motion.p>

              {/* Mobile tech badge */}
              {isMobile && project.tech && (
                <motion.div
                  className="text-[8px] font-mono tracking-wider px-1.5 py-0.5 rounded-sm inline-block mt-1"
                  animate={{ opacity: detailsOpen ? 0.8 : 0.4 }}
                  style={{
                    border: "1px solid var(--foreground)",
                    color: "var(--foreground)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {project.tech}
                </motion.div>
              )}
            </div>

            <div className="flex items-center gap-2 ml-3 self-start">
              {/* Mobile details toggle indicator */}
              {isMobile && (
                <motion.div
                  animate={{ rotate: detailsOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="font-mono text-sm"
                  style={{ color: "var(--foreground)" }}
                >
                  {detailsOpen ? "—" : "⋯"}
                </motion.div>
              )}

              {/* GitHub link icon - only visible on hover on desktop, always visible on mobile */}
              {!isMobile ? (
                <motion.button
                  onClick={handleGithubClick}
                  className="font-mono text-sm"
                  animate={{ opacity: hovered ? 0.8 : 0.2, x: hovered ? 4 : 0 }}
                  style={{ color: "var(--foreground)" }}
                  transition={{ duration: 0.2 }}
                >
                  <Github className="cursor-pointer"></Github>
                </motion.button>
              ) : (
                <motion.button
                  onClick={handleGithubClick}
                  className="font-mono text-sm p-2 -m-2"
                  animate={{ opacity: 0.8 }}
                  style={{ color: "var(--foreground)" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </motion.button>
              )}
            </div>
          </div>

          {/* Details section - collapsible on mobile, always visible on hover on desktop */}
          <AnimatePresence>
            {isMobile
              ? detailsOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      className="px-3 pb-4 text-[11px] leading-relaxed border-t border-border pt-3 mt-1"
                      style={{
                        color: "var(--foreground)",
                        opacity: 0.9,
                      }}
                    >
                      <div className="font-mono text-[9px] tracking-wider mb-2 opacity-40">
                        TECHNICAL DETAILS
                      </div>
                      <p
                        className="border-l-2 pl-3"
                        style={{ borderColor: "var(--foreground)" }}
                      >
                        {project.details}
                      </p>
                    </motion.div>
                  </motion.div>
                )
              : hovered &&
                project.details && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      className="px-6 pb-5 text-[11px] leading-relaxed border-t border-border pt-3"
                      style={{
                        color: "var(--foreground)",
                        opacity: 0.9,
                      }}
                    >
                      <div className="font-mono text-[9px] tracking-wider mb-2 opacity-40">
                        TECHNICAL DEEP DIVE
                      </div>
                      <p
                        className="border-l-2 pl-3"
                        style={{ borderColor: "var(--foreground)" }}
                      >
                        {project.details}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
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
      <div className="max-w-4xl mx-auto px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10"
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

        {/* Mobile hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center md:hidden"
        >
          <div className="font-mono text-[8px] tracking-wider opacity-30 text-foreground">
            TAP ON CARD FOR DETAILS • TAP GITHUB ICON TO VIEW CODE
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
