import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Mail, Linkedin } from "lucide-react";
import Avatar from "../../assets/image.png";

/* ── Human silhouette outline ── */
const HumanSilhouette = () => (
  <svg viewBox="0 0 46 56" width="46" height="56" fill="none">
    {/* Head */}
    <circle
      cx="23" cy="12" r="9"
      stroke="currentColor"
      strokeWidth="1.5"
      opacity={0.5}
    />
    {/* Body / shoulders */}
    <path
      d="M6 50 C6 36 10 30 23 30 C36 30 40 36 40 50"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity={0.5}
    />
  </svg>
);

/* ── Contact illustration ── */
const ContactIllustration = () => (
  <div
    className="relative w-full flex items-center justify-between"
    style={{ height: "100px", color: "var(--foreground)" }}
  >
    {/* Visitor sender */}
    <motion.div
      className="flex flex-col items-center gap-1 flex-shrink-0"
      animate={{ y: [-1.5, 1.5, -1.5] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
    >
      <HumanSilhouette />
      <span className="text-[7px] tracking-[0.18em] opacity-20">YOU</span>
    </motion.div>

    {/* Middle: path + envelope */}
    <div className="flex-1 relative mx-2" style={{ height: "100px" }}>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 60" preserveAspectRatio="none">
        <motion.path
          d="M4 48 Q50 8 96 32"
          stroke="currentColor"
          strokeWidth="0.7"
          strokeDasharray="3 3.5"
          fill="none"
          animate={{ opacity: [0.07, 0.2, 0.07] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </svg>
      <motion.div
        className="absolute"
        animate={{
          left: ["2%", "88%", "88%"],
          top: ["58%", "28%", "28%"],
          opacity: [0, 1, 0],
          rotate: [0, -8, -8],
        }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", times: [0, 0.62, 1] }}
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <svg viewBox="0 0 26 18" width="26" height="18">
          <rect x="0" y="0" width="26" height="18" rx="2" fill="currentColor" opacity={0.16} stroke="currentColor" strokeWidth="0.8" />
          <path d="M0 0 L13 11 L26 0" stroke="currentColor" strokeWidth="0.8" fill="none" opacity={0.5} />
          <line x1="-3" y1="6" x2="-9" y2="6" stroke="currentColor" strokeWidth="0.6" opacity={0.3} />
          <line x1="-3" y1="10" x2="-12" y2="10" stroke="currentColor" strokeWidth="0.5" opacity={0.2} />
          <line x1="-3" y1="14" x2="-7" y2="14" stroke="currentColor" strokeWidth="0.4" opacity={0.15} />
        </svg>
      </motion.div>
    </div>

    {/* Real avatar receiver */}
    <motion.div
      className="flex flex-col items-center gap-1 flex-shrink-0 relative"
      animate={{ y: [-1.5, 1.5, -1.5] }}
      transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
    >
      <div className="relative">
        <motion.div
          className="absolute rounded-full border"
          style={{ inset: "-4px", borderColor: "currentColor" }}
          animate={{ scale: [1, 1.55], opacity: [0.25, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, delay: 1.6 }}
        />
        <motion.div
          className="absolute rounded-full border"
          style={{ inset: "-4px", borderColor: "currentColor" }}
          animate={{ scale: [1, 1.9], opacity: [0.15, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: 1.9 }}
        />
        <img
          src={Avatar}
          alt="Josephin Sylvere"
          className="rounded-full block"
          style={{
            width: "46px",
            height: "46px",
            objectFit: "cover",
            filter: "grayscale(100%) contrast(1.05) brightness(0.95)",
            opacity: 0.82,
          }}
        />
      </div>
      <span className="text-[7px] tracking-[0.18em] opacity-20">ME</span>
    </motion.div>
  </div>
);

export const GetInTouch = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="py-16 md:py-20 relative"
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
              SYS://CONTACT
            </div>
            <div className="flex-1 h-px bg-foreground opacity-10" />
          </div>
          <div className="relative">
            <h2 className="text-4xl font-black tracking-tight text-foreground leading-none uppercase">
              Get in Touch
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

        {/* Contenu principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          {/* Colonne gauche */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <ContactIllustration />
            </motion.div>

            <p className="text-sm leading-relaxed opacity-40 text-foreground max-w-sm">
              Want to chat, collaborate or discuss a project? Reach out and I'll
              respond as quick as possible.
            </p>
          </motion.div>

          {/* Colonne droite */}
          <div className="flex flex-col gap-4">

            {/* Email */}
            <motion.a
              href="mailto:josephinsylvere@gmail.com"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              onHoverStart={() => setHoveredLink("email")}
              onHoverEnd={() => setHoveredLink(null)}
              className="relative block"
            >
              <motion.div
                className="relative overflow-hidden p-6 flex items-center gap-5"
                animate={{ backgroundColor: hoveredLink === "email" ? "var(--muted)" : "transparent" }}
                transition={{ duration: 0.2 }}
              >
                <AnimatePresence>
                  {hoveredLink === "email" && (
                    <motion.div
                      className="absolute left-0 right-0 h-px pointer-events-none z-20"
                      style={{ background: "linear-gradient(90deg, transparent, var(--foreground), transparent)", opacity: 0.12 }}
                      initial={{ top: 0 }}
                      animate={{ top: "100%" }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: "linear" }}
                    />
                  )}
                </AnimatePresence>
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-px"
                  animate={{ opacity: hoveredLink === "email" ? 0.5 : 0, scaleY: hoveredLink === "email" ? 1 : 0 }}
                  style={{ background: "var(--foreground)", transformOrigin: "center" }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div animate={{ opacity: hoveredLink === "email" ? 1 : 0.3 }} transition={{ duration: 0.2 }}>
                  <Mail className="w-5 h-5 text-foreground" />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <motion.div
                    className="text-[10px] tracking-[0.2em] mb-1"
                    animate={{ opacity: hoveredLink === "email" ? 0.4 : 0.2 }}
                    style={{ color: "var(--foreground)" }}
                    transition={{ duration: 0.2 }}
                  >
                    EMAIL
                  </motion.div>
                  <motion.div
                    className="text-sm font-bold tracking-tight truncate"
                    animate={{ color: hoveredLink === "email" ? "var(--foreground)" : "var(--muted-foreground)" }}
                    transition={{ duration: 0.2 }}
                  >
                    josephinsylvere@gmail.com
                  </motion.div>
                </div>
                <motion.div
                  className="text-sm flex-shrink-0"
                  animate={{ opacity: hoveredLink === "email" ? 0.8 : 0.2, x: hoveredLink === "email" ? 4 : 0 }}
                  style={{ color: "var(--foreground)" }}
                  transition={{ duration: 0.2 }}
                >
                  ↗
                </motion.div>
              </motion.div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com/in/josephin-sylvere"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              onHoverStart={() => setHoveredLink("linkedin")}
              onHoverEnd={() => setHoveredLink(null)}
              className="relative block"
            >
              <motion.div
                className="relative overflow-hidden p-6 flex items-center gap-5"
                animate={{ backgroundColor: hoveredLink === "linkedin" ? "var(--muted)" : "transparent" }}
                transition={{ duration: 0.2 }}
              >
                <AnimatePresence>
                  {hoveredLink === "linkedin" && (
                    <motion.div
                      className="absolute left-0 right-0 h-px pointer-events-none z-20"
                      style={{ background: "linear-gradient(90deg, transparent, var(--foreground), transparent)", opacity: 0.12 }}
                      initial={{ top: 0 }}
                      animate={{ top: "100%" }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: "linear" }}
                    />
                  )}
                </AnimatePresence>
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-px"
                  animate={{ opacity: hoveredLink === "linkedin" ? 0.5 : 0, scaleY: hoveredLink === "linkedin" ? 1 : 0 }}
                  style={{ background: "var(--foreground)", transformOrigin: "center" }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div animate={{ opacity: hoveredLink === "linkedin" ? 1 : 0.3 }} transition={{ duration: 0.2 }}>
                  <Linkedin className="w-5 h-5 text-foreground" />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <motion.div
                    className="text-[10px] tracking-[0.2em] mb-1"
                    animate={{ opacity: hoveredLink === "linkedin" ? 0.4 : 0.2 }}
                    style={{ color: "var(--foreground)" }}
                    transition={{ duration: 0.2 }}
                  >
                    LINKEDIN
                  </motion.div>
                  <motion.div
                    className="text-sm font-bold tracking-tight"
                    animate={{ color: hoveredLink === "linkedin" ? "var(--foreground)" : "var(--muted-foreground)" }}
                    transition={{ duration: 0.2 }}
                  >
                    josephin-sylvere
                  </motion.div>
                </div>
                <motion.div
                  className="text-sm flex-shrink-0"
                  animate={{ opacity: hoveredLink === "linkedin" ? 0.8 : 0.2, x: hoveredLink === "linkedin" ? 4 : 0 }}
                  style={{ color: "var(--foreground)" }}
                  transition={{ duration: 0.2 }}
                >
                  ↗
                </motion.div>
              </motion.div>
            </motion.a>

          </div>
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