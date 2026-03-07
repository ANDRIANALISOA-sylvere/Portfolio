import { motion } from "motion/react";
import { useMobile } from "../../hooks/useMobile";

export const About = () => {
  const isMobile = useMobile(768);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
      transition={{ duration: 0.5 }}
      className="py-12 md:py-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10 px-1">
          <div className="flex items-center gap-4 mb-3">
            <div className="font-mono text-[10px] tracking-[0.3em] opacity-40 text-foreground">
              SYS://ABOUT
            </div>

            <div className="flex-1 h-px bg-foreground opacity-10" />

            <div className="font-mono text-[10px] tracking-widest opacity-20 text-foreground">
              PROFILE
            </div>
          </div>

          <h2 className="text-4xl font-black tracking-tight text-foreground">
            ABOUT ME
          </h2>
        </div>

        {/* Story */}
        <div className="max-w-3xl text-sm leading-relaxed text-muted-foreground space-y-4 mb-8">

          <p>
            I'm a backend-focused developer passionate about building scalable
            systems and efficient APIs.
          </p>

          <p>
            I mainly work with <span className="text-foreground">Node.js</span>,
            <span className="text-foreground"> Express</span> and
            <span className="text-foreground"> NestJS</span>, designing clean
            backend architectures and reliable services.
          </p>

          <p>
            My goal is to become a strong backend engineer capable of building
            high-performance systems and distributed applications.
          </p>

          <p>
            I'm currently looking for a
            <span className="text-foreground"> 6-month remote internship </span>
            or a junior backend developer role.
          </p>

        </div>
      </div>
    </motion.section>
  );
};