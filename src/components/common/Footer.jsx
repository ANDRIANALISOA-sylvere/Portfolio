import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const MaltIcon = () => (
  <svg width="20" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.956 12.005a9.951 9.951 0 0 1-2.922 7.033c-.05.05-.1.1-.152.148L12 12.314l-1.882 1.882 5.98 5.98a9.992 9.992 0 0 1-4.093.862C6.56 21.038 2 16.477 2 10.993a9.993 9.993 0 0 1 9.999-9.993c2.76 0 5.262 1.116 7.074 2.922l-5.09 5.09 1.881 1.881 4.97-4.97c.717 1.4 1.122 2.986 1.122 4.082z" />
  </svg>
);

const socialLinks = [
  {
    href: "https://linkedin.com/in/josephin-sylvere",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/ANDRIANALISOA-sylvere",
    icon: Github,
    label: "GitHub",
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
  {
    href: "https://instagram.com/sylverejosephin",
    icon: Instagram,
    label: "Instagram",
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="pb-12 md:pb-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Ligne top */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-full h-px bg-foreground opacity-10 mb-8 origin-left"
        />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[11px] tracking-[0.2em] opacity-25 text-foreground order-2 md:order-1"
          >
            © {currentYear} · A. JOSÉPHIN SYLVÈRE
          </motion.div>

          {/* Socials */}
          <motion.div
            className="flex items-center gap-[1px] order-1 md:order-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                onHoverStart={() => setHoveredLink(social.label)}
                onHoverEnd={() => setHoveredLink(null)}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.07 }}
                className="relative block"
              >
                <motion.div
                  className="relative px-4 py-3 border border-border overflow-hidden"
                  animate={{
                    backgroundColor:
                      hoveredLink === social.label
                        ? "var(--muted)"
                        : "transparent",
                  }}
                  transition={{ duration: 0.15 }}
                >
                  {/* Left bar */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-px"
                    animate={{
                      opacity: hoveredLink === social.label ? 0.5 : 0,
                      scaleY: hoveredLink === social.label ? 1 : 0,
                    }}
                    style={{
                      background: "var(--foreground)",
                      transformOrigin: "center",
                    }}
                    transition={{ duration: 0.15 }}
                  />

                  <motion.div
                    animate={{
                      opacity: hoveredLink === social.label ? 1 : 0.25,
                    }}
                    transition={{ duration: 0.15 }}
                  >
                    <social.icon className="w-4 h-4 text-foreground" />
                  </motion.div>
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Ligne bottom / END */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex items-center gap-3"
        >
          <div className="flex-1 h-px bg-foreground opacity-10" />
          <div className="text-[9px] tracking-[0.2em] opacity-20 text-foreground">
            END OF PAGE
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};
