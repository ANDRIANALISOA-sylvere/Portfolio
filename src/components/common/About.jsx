import { useMobile } from "@/hooks/useMobile";
import {motion} from "motion/react"

export const About = () => {
  const isMobile = useMobile(768);

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-10 px-1"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
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
          <motion.div
            className="mt-2 h-[2px] bg-foreground"
            initial={{ width: 0 }}
            whileInView={{ width: "3rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          />
        </motion.div>

        {/* Story */}
        <div className="max-w-3xl space-y-4 mb-8">
          {[
            <>
              I'm a backend-focused developer passionate about building scalable
              systems and efficient APIs.
            </>,
            <>
              I mainly work with{" "}
              <span className="text-foreground">Node.js</span>,{" "}
              <span className="text-foreground">Express</span> and{" "}
              <span className="text-foreground">NestJS</span>, designing clean
              backend architectures and reliable services.
            </>,
            <>
              I also have experience with{" "}
              <span className="text-foreground">DevOps</span> practices,
              including CI/CD pipelines, containerization with Docker.
            </>,
            <>
              My goal is to become a strong backend engineer capable of building
              high-performance systems and distributed applications.
            </>,
            <>
              I'm currently looking for a{" "}
              <span className="text-foreground">6-month remote internship</span>{" "}
              or a junior backend developer role.
            </>,
          ].map((text, index) => (
            <motion.p
              key={index}
              className="text-sm leading-relaxed text-muted-foreground"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};
