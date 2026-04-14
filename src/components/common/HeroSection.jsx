import Avatar from "../../assets/image.png";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "motion/react";
import { useMobile } from "../../hooks/useMobile";

const MaltIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.956 12.005a9.951 9.951 0 0 1-2.922 7.033c-.05.05-.1.1-.152.148L12 12.314l-1.882 1.882 5.98 5.98a9.992 9.992 0 0 1-4.093.862C6.56 21.038 2 16.477 2 10.993a9.993 9.993 0 0 1 9.999-9.993c2.76 0 5.262 1.116 7.074 2.922l-5.09 5.09 1.881 1.881 4.97-4.97c.717 1.4 1.122 2.986 1.122 4.082z" />
  </svg>
);

const socials = [
  {
    href: "https://github.com/ANDRIANALISOA-sylvere",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/josephin-sylvere",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://www.malt.com/profile/josephinsylveresylvere",
    icon: MaltIcon,
    label: "Malt",
  },
  {
    href: "https://twitter.com/josephinsylvere",
    icon: Twitter,
    label: "Twitter",
  },
  { href: "mailto:josephinsylvere@gmail.com", icon: Mail, label: "Email" },
];

export const HeroSection = () => {
  const isMobile = useMobile(768);

  return (
    <div className="py-12 md:py-32 relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Ligne décorative top */}
      <motion.div
        className="flex items-center gap-4 mb-10 md:mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="h-px flex-1 bg-foreground opacity-10" />
        <motion.span
          className="text-[10px] tracking-[0.3em] opacity-30 text-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 0.3 }}
        >
          PORTFOLIO
        </motion.span>
        <div className="h-px flex-1 bg-foreground opacity-10" />
      </motion.div>

      {/* Main content — relative so astronaut can anchor to it */}
      <div
        className={`relative flex ${isMobile ? "flex-col items-center" : "flex-row items-start gap-12"}`}
      >
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`relative flex-shrink-0 flex flex-col ${isMobile ? "items-center w-full" : "items-start"}`}
        >
          {/* Badge available */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex justify-center mb-3"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 text-[11px] tracking-widest text-foreground border border-border rounded-full opacity-70">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-50" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-foreground" />
              </span>
              AVAILABLE FOR WORK
            </span>
          </motion.div>

          {/* Avatar avec corner brackets */}
          <div className="relative inline-flex items-center justify-center p-3">
            <div className="absolute top-0 left-0 w-4 h-4">
              <div className="absolute top-0 left-0 w-full h-px bg-foreground opacity-40" />
              <div className="absolute top-0 left-0 h-full w-px bg-foreground opacity-40" />
            </div>
            <div className="absolute top-0 right-0 w-4 h-4">
              <div className="absolute top-0 right-0 w-full h-px bg-foreground opacity-40" />
              <div className="absolute top-0 right-0 h-full w-px bg-foreground opacity-40" />
            </div>
            <div className="absolute bottom-0 left-0 w-4 h-4">
              <div className="absolute bottom-0 left-0 w-full h-px bg-foreground opacity-40" />
              <div className="absolute bottom-0 left-0 h-full w-px bg-foreground opacity-40" />
            </div>
            <div className="absolute bottom-0 right-0 w-4 h-4">
              <div className="absolute bottom-0 right-0 w-full h-px bg-foreground opacity-40" />
              <div className="absolute bottom-0 right-0 h-full w-px bg-foreground opacity-40" />
            </div>
            <motion.img
              src={Avatar}
              width={isMobile ? 90 : 110}
              height={isMobile ? 90 : 110}
              className="rounded-full object-cover block"
              alt="avatar"
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            />
          </div>
        </motion.div>

        {/* Contenu texte */}
        <div
          className={`flex-1 ${isMobile ? "text-center mt-8 w-full" : "text-left"} pb-16`}
        >
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.05] Handlee-900"
          >
            Software Engineer,{" "}
            <span className="relative inline-block">
              Freelancer
              <motion.span
                initial={{ width: 0, left: "50%" }}
                animate={{ width: "100%", left: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease: "easeInOut" }}
                className="absolute -bottom-1 h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-full -skew-x-12"
                style={{ originX: 0 }}
              />
            </span>
            , and Open Source Enthusiast.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className={`mt-5 md:mt-7 text-sm sm:text-base leading-relaxed opacity-50 text-foreground max-w-xl ${isMobile ? "mx-auto px-2" : ""}`}
          >
            I build modern and high-performance web applications using
            TypeScript and the latest web technologies for freelance projects
            and open source contributions.
          </motion.p>

          {/* Socials — no separator line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className={`flex gap-5 mt-6 md:mt-8 ${isMobile ? "justify-center" : ""}`}
          >
            {socials.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-foreground opacity-30 hover:opacity-80 transition-opacity duration-200"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 0.3, y: 0 }}
                transition={{ delay: 0.9 + index * 0.08 }}
                whileHover={{ y: -3, opacity: 0.8 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Ligne décorative bottom */}
      <motion.div
        className="flex items-center gap-4 mt-5 md:mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        <div className="h-px flex-1 bg-foreground opacity-10" />
        <span className="text-[10px] tracking-[0.3em] opacity-20 text-foreground">
          SCROLL
        </span>
        <div className="h-px flex-1 bg-foreground opacity-10" />
      </motion.div>
    </div>
  );
};
