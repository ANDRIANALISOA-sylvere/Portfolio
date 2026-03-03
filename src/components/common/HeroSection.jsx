import Avatar from "../../assets/image.png";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "motion/react";
import { useMobile } from "../../hooks/useMobile";

export const HeroSection = () => {
  const isMobile = useMobile(768);

  return (
    <div className="py-12 md:py-32 relative flex flex-col md:flex-row justify-start items-center md:items-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Avatar à gauche avec animation */}
      <motion.div
        initial={{ opacity: 0, x: isMobile ? 0 : -50, y: isMobile ? -20 : 0 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mb-6 md:mb-0 flex flex-col items-center"
      >
        {/* Badge Available Now - Au-dessus de l'avatar sur mobile */}
        {isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-3"
          >
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-white
                         bg-gradient-to-r from-green-500 to-emerald-500
                         rounded-full border border-green-400/30
                         shadow-lg shadow-green-500/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Available for work
            </span>
          </motion.div>
        )}

        <motion.img
          src={Avatar}
          width={isMobile ? 100 : 120}
          height={isMobile ? 100 : 120}
          className="rounded-full border-4 border-gray-300 dark:border-gray-700 mx-auto md:mx-0"
          alt="avatar"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        />
      </motion.div>

      {/* Contenu texte à droite */}
      <div
        className={`${isMobile ? "ml-0 text-center" : "ml-8 text-left"} max-w-3xl`}
      >
        {/* Badge Available Now - À côté du titre sur desktop */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-3 flex justify-start"
          >
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-white
                         bg-gradient-to-r from-green-500 to-emerald-500
                         rounded-full border border-green-400/30
                         shadow-lg shadow-green-500/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Available for work
            </span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white Handlee-900
                     ${isMobile ? "text-center" : ""}`}
        >
          Software Engineer,{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative inline-block"
          >
            Freelancer
            {/* Underline stylée avec animation */}
            <motion.span
              initial={{ width: 0, left: "50%" }}
              animate={{ width: "100%", left: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
              className="absolute -bottom-1 h-2 
                       bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 
                       rounded-full transform -skew-x-12"
              style={{ originX: 0 }}
            />
          </motion.span>
          , and Open Source Enthusiast.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={`mt-4 md:mt-6 text-gray-600 dark:text-gray-400 text-sm sm:text-base
                     ${isMobile ? "text-center px-4" : ""}`}
        >
          I build modern and high-performance web applications using TypeScript
          and the latest web technologies for freelance projects and open source
          contributions.
        </motion.p>

        {/* Icônes sociales */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className={`mt-6 md:mt-8 flex gap-4 ${isMobile ? "justify-center" : ""}`}
        >
          {[
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
              href: "https://twitter.com/josephinsylvere",
              icon: Twitter,
              label: "Twitter",
            },
            {
              href: "mailto:josephinsylvere@gmail.com",
              icon: Mail,
              label: "Email",
            },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label={social.label}
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
            >
              <social.icon className={`${isMobile ? "w-5 h-5" : "w-6 h-6"}`} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
