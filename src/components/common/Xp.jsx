import { Briefcase, Calendar } from "lucide-react";

// Import logos
import avatar from "@/assets/avatar.jpeg";
import cuf from "@/assets/CUF.png";
import itt from "@/assets/logo-itt-mada.jpg";
import mim from "@/assets/MIM.jpg";
import techzero from "@/assets/techzero.jpeg";
import innovt from "@/assets/innov-t.jpg";

export const Xp = () => {
    const experiences = [
        {
            company: "Freelance",
            position: "FullStack Developer",
            period: "Sept 2025 - Present",
            description:
                "Designed and developed a full-featured e-commerce platform using React and Node.js, including a secure back-office, vendor management, and a delivery system. Implemented authentication, order workflows, and role-based access for administrators, resellers, and delivery agents.",
            logo: avatar,
            technologies: [
                "React.js",
                "Node.js",
                "Express.js",
                "PostgreSQL",
                "REST API",
                "Role-based Access Control",
                "Tailwind CSS"
            ],
        },
        {
            company: "Innov-T",
            position: "Backend Developer Intern",
            period: "Aug 2025 - Nov 2025",
            description:
                "Backend Developer Intern at an early-stage fintech startup. Built and maintained scalable REST APIs using Node.js and Express, implemented JWT authentication with role-based access control, and collaborated closely with frontend developers to ensure seamless API integration.",
            logo: innovt,
            technologies: [
                "Node.js",
                "Express.js",
                "JWT",
                "REST APIs",
                "RBAC",
                "Swagger",
                "Postman",
                "Git"
            ],
        },
        {
            company: "TechZero",
            position: "Co-Founder",
            period: "June 2025 - Present",
            description:
                "Co-founded fintech startup, defined vision, structured team, and prepared initial projects and prototypes.",
            logo: techzero,
            technologies: ["Leadership", "Product Strategy", "Project Management"],
        },
        {
            company: "ITT Madagascar",
            position: "Frontend Developer",
            period: "June 2025 - July 2025",
            description:
                "Transformed UI/UX designs into responsive web applications and integrated frontend with backend APIs.",
            logo: itt,
            technologies: ["React", "Next.js", "UI/UX Implementation"],
        },
        {
            company: "DIRMIM",
            position: "FullStack Developer Intern",
            period: "Aug - Nov 2024",
            description:
                "Developed case management application with real-time tracking and Telegram Bot API integration.",
            logo: mim,
            technologies: ["React", "Laravel", "Inertia", "MySQL", "Telegram API"],
        },
        {
            company: "CUF",
            position: "FullStack Developer Intern",
            period: "Sep - Nov 2023",
            description:
                "Built digital archive management system with secure file handling and search functionality.",
            logo: cuf,
            technologies: ["React", "PHP", "MySQL", "File Management"],
        },
    ];

    return (
        <section>
            <div className="max-w-3xl mx-auto">
                {/* Title */}
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
                    Work Experience
                </h2>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-5 top-0 h-full w-px bg-gray-300" />

                    {experiences.map((exp, index) => (
                        <div key={index} className="flex gap-6 mb-12 relative">
                            {/* Logo */}
                            <div className="relative z-10">
                                <div className="w-10 h-10 rounded-full bg-white border border-gray-300 overflow-hidden flex items-center justify-center">
                                    <img
                                        src={exp.logo}
                                        alt={exp.company}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                {/* Date */}
                                <div className="flex items-center text-sm text-gray-600 mb-2">
                                    <Calendar size={14} className="mr-2" />
                                    {exp.period}
                                </div>

                                {/* Position */}
                                <h3 className="text-lg font-bold">
                                    {exp.position}
                                </h3>

                                {/* Company */}
                                <div className="flex items-center text-gray-400 mb-3">
                                    <Briefcase size={14} className="mr-2" />
                                    {exp.company}
                                </div>

                                {/* Description */}
                                <p className="text-gray-400 leading-relaxed mb-4">
                                    {exp.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
