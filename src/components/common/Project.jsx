import { Github, Globe, ShoppingCart, Database, Layout } from "lucide-react";

export const Project = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured e-commerce platform with back-office, reseller system, and delivery management. Role-based access for admins, vendors, and delivery agents.",
      icon: ShoppingCart,
      github: null,
      live: null,
      featured: "large", // 75%
    },
    {
      title: "NoteVerse API",
      description:
        "RESTful API for efficient note management with authentication and scalable architecture.",
      icon: Database,
      github: "https://github.com/ANDRIANALISOA-sylvere/NoteVerse-API",
      live: null,
      featured: "small", // 25%
    },
    {
      title: "Portfolio Website",
      description: "Modern developer portfolio with clean UI and responsive layout.",
      icon: Layout,
      github: "https://github.com/ANDRIANALISOA-sylvere/Portfolio",
      live: "https://josephin-sylvere.vercel.app",
    },
    {
      title: "Task Manager",
      description:
        "Task management platform with modern UI and scalable backend architecture.",
      icon: Layout,
      github: "https://github.com/ANDRIANALISOA-sylvere/TaskManager",
      live: null,
    },
    {
      title: "File Tracking System",
      description:
        "Document tracking and management system for monitoring file progress securely.",
      icon: Database,
      github: null,
      live: null,
    },
  ];

  return (
    <section>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
          Projects
        </h2>

        {/* FIRST ROW - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {projects
            .filter(p => p.featured)
            .map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                className={
                  project.featured === "large"
                    ? "md:col-span-3"
                    : "md:col-span-1"
                }
              />
            ))}
        </div>

        {/* SECOND ROW - Déjà responsive avec md:grid-cols-3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects
            .filter(p => !p.featured)
            .map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- CARD COMPONENT ---------------- */

const ProjectCard = ({ project, className = "" }) => {
  const Icon = project.icon;

  return (
    <div
      className={`
        rounded-xl p-6
        border border-gray-600
        transition-all duration-300
        hover:scale-[1.02] hover:shadow-lg
        flex flex-col justify-between
        cursor-pointer
        group
        ${className}
      `}
    >
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold font-georgia text-white">
            {project.title}
          </h3>
          <Icon size={20} className="text-white" />
        </div>

        <p className="text-sm text-gray-400 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Footer */}
      <div className="flex gap-3 mt-6">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-80 transition-opacity"
          >
            <Github size={18} />
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-80 transition-opacity"
          >
            <Globe size={18} />
          </a>
        )}
      </div>
    </div>
  );
};