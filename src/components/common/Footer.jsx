import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { motion } from "motion/react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://twitter.com/josephinsylvere",
      icon: Twitter,
      label: "Twitter",
      color: "#1DA1F2",
    },
    {
      href: "https://instagram.com/josephinsylvere",
      icon: Instagram,
      label: "Instagram",
      color: "#E4405F",
    },
    {
      href: "https://linkedin.com/in/josephin-sylvere",
      icon: Linkedin,
      label: "LinkedIn",
      color: "#0A66C2",
    },
    {
      href: "https://github.com/ANDRIANALISOA-sylvere",
      icon: Github,
      label: "GitHub",
      color: "#333",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="pb-12 md:pb-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Ligne horizontale avec animation */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full h-px bg-border mb-8 origin-left"
        />

        {/* Contenu */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          {/* Texte copyright avec animation */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="text-muted-foreground order-2 md:order-1"
          >
            © {currentYear} A. Joséphin Sylvère
          </motion.div>

          {/* Réseaux sociaux avec animations */}
          <motion.div
            className="flex gap-6 order-1 md:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.4,
                },
              },
            }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
                aria-label={social.label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 300, damping: 15 },
                  },
                }}
                whileHover={{
                  y: -5,
                  scale: 1.2,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="w-5 h-5" />

                {/* Tooltip au hover */}
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-[#111111] border border-[#222222] px-2 py-1 rounded whitespace-nowrap"
                >
                  {social.label}
                </motion.span>

                {/* Effet de glow au hover */}
                <motion.div
                  className="absolute inset-0 rounded-full blur-md -z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{
                    opacity: 0.5,
                    backgroundColor: social.color,
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};
