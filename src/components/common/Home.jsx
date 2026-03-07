import { HeroSection } from "./HeroSection";
import { Projects } from "./Project";
import { Experience } from "./Experience";
import { GetInTouch } from "./GetInTouch";
import { Footer } from "./Footer";
import HeroSvg from "../../assets/hero-section.svg";
import { Services } from "./Service";
import { TechStack } from "./TechStack";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMobile } from "../../hooks/useMobile";
import { useState } from "react";
import { About } from "./About";

export const Home = () => {
  const isMobile = useMobile(768);
  const [cvHovered, setCvHovered] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CV.pdf";
    link.download = "Josephin_Sylvere_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Bouton CV */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1 }}
        className="fixed top-3 right-4 sm:right-6 z-50"
      >
        <motion.button
          onClick={handleDownloadCV}
          onHoverStart={() => setCvHovered(true)}
          onHoverEnd={() => setCvHovered(false)}
          whileTap={{ scale: 0.97 }}
          className="relative flex cursor-pointer items-center gap-2.5 px-4 py-2 overflow-hidden border border-border"
          style={{
            backgroundColor: cvHovered ? "var(--muted)" : "var(--card)",
          }}
        >
          <AnimatePresence>
            {cvHovered && (
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
                transition={{ duration: 0.35, ease: "linear" }}
              />
            )}
          </AnimatePresence>

          <motion.div
            className="absolute left-0 top-0 bottom-0 w-px"
            animate={{
              opacity: cvHovered ? 0.5 : 0,
              scaleY: cvHovered ? 1 : 0,
            }}
            style={{
              background: "var(--foreground)",
              transformOrigin: "center",
            }}
            transition={{ duration: 0.15 }}
          />

          {/* Corner brackets */}
          <motion.div
            className="absolute top-0 left-0 w-2.5 h-2.5 pointer-events-none"
            animate={{ opacity: cvHovered ? 1 : 0 }}
            transition={{ duration: 0.15 }}
          >
            <div className="absolute top-0 left-0 w-full h-px bg-foreground" />
            <div className="absolute top-0 left-0 h-full w-px bg-foreground" />
          </motion.div>
          <motion.div
            className="absolute top-0 right-0 w-2.5 h-2.5 pointer-events-none"
            animate={{ opacity: cvHovered ? 1 : 0 }}
            transition={{ duration: 0.15 }}
          >
            <div className="absolute top-0 right-0 w-full h-px bg-foreground" />
            <div className="absolute top-0 right-0 h-full w-px bg-foreground" />
          </motion.div>
          <motion.div
            className="absolute bottom-0 left-0 w-2.5 h-2.5 pointer-events-none"
            animate={{ opacity: cvHovered ? 1 : 0 }}
            transition={{ duration: 0.15 }}
          >
            <div className="absolute bottom-0 left-0 w-full h-px bg-foreground" />
            <div className="absolute bottom-0 left-0 h-full w-px bg-foreground" />
          </motion.div>
          <motion.div
            className="absolute bottom-0 right-0 w-2.5 h-2.5 pointer-events-none"
            animate={{ opacity: cvHovered ? 1 : 0 }}
            transition={{ duration: 0.15 }}
          >
            <div className="absolute bottom-0 right-0 w-full h-px bg-foreground" />
            <div className="absolute bottom-0 right-0 h-full w-px bg-foreground" />
          </motion.div>

          <motion.span
            className="text-xs tracking-[0.2em] font-bold"
            animate={{
              color: cvHovered
                ? "var(--foreground)"
                : "var(--muted-foreground)",
            }}
            transition={{ duration: 0.15 }}
          >
            {isMobile ? "CV" : "Download my Resume"}
          </motion.span>

          <motion.div
            animate={{
              opacity: cvHovered ? 0.8 : 0.3,
              x: cvHovered ? 2 : 0,
              y: cvHovered ? -2 : 0,
            }}
            transition={{ duration: 0.15 }}
          >
            <ArrowUpRight className="w-3.5 h-3.5 text-foreground" />
          </motion.div>
        </motion.button>
      </motion.div>

      <main className="relative z-10 flex flex-col items-center">
        {/* Hero Section */}
        <div className="relative w-full">
          {/* HeroSvg */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              src={HeroSvg}
              alt=""
              className="absolute -top-3/20 right-0 md:right-1/4 md:top-0 w-full h-full object-cover md:object-contain opacity-80 scale-100 md:scale-125 transition-all duration-700"
              aria-hidden="true"
            />
          </div>

          <div className="relative w-full flex items-center">
            <HeroSection />
          </div>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <About />
          </div>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Services />
          </div>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <TechStack />
          </div>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Projects />
              </div>
              <div className="lg:col-span-1">
                <Experience />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <GetInTouch />
          </div>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
};
