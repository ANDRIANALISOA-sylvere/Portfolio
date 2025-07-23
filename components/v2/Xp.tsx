"use client";
import React from "react";
import { Title } from "../ui/Title";
import { MapPin, Calendar, ExternalLink, Briefcase } from "lucide-react";

export const Xp = () => {
  const experiences = [
    {
      period: "June 2025 - Present",
      company: "TechZero",
      position: "Co-Founder",
      location: "Remote",
      type: "Full-time",
      description:
        "Leading strategic direction and technical vision for a fintech startup. Overseeing product development, team management, and business operations while establishing company culture and growth strategies.",
      achievements: [
        "Founded and scaled fintech platform to 100k+ active users",
        "Led cross-functional team of 8+ developers and designers",
        "Secured initial funding and established strategic partnerships",
        "Implemented agile methodologies increasing delivery speed by 50%",
      ],
      technologies: null,
      isActive: true,
    },
    {
      period: "June 2025 - Present",
      company: "ITT Madagascar",
      position: "Frontend Developer",
      location: "Fianarantsoa, Madagascar",
      type: "Part-time",
      description:
        "Specialized in transforming UI/UX designs into responsive web applications and integrating frontend components with backend APIs. Focus on pixel-perfect implementation and optimal user experience.",
      achievements: [
        "Converted 20+ Figma/Adobe XD mockups into responsive React components",
        "Integrated 10+ RESTful APIs with error handling and loading states",
        "Improved website performance by 35% through code optimization",
        "Collaborated with designers to ensure design consistency across platforms",
      ],
      technologies: ["React", "Next.js"],
      isActive: true,
    },
    {
      period: "August - November 2024",
      company: "DIRMIM",
      position: "FullStack Developer. Internship",
      location: "Fianarantsoa, Madagascar",
      type: "Full-time",
      description:
        "Developed a comprehensive case management application with real-time tracking capabilities. Integrated Telegram Bot API for automated notifications and case status updates, enabling efficient document workflow management.",
      achievements: [
        "Built complete case tracking system managing 500+ documents monthly",
        "Implemented Telegram bot integration for real-time notifications",
        "Designed intuitive dashboard with search and filtering capabilities",
        "Reduced case processing time by 60% through workflow automation",
      ],
      technologies: ["React", "Laravel", "Inertia", "MySQL"],
      isActive: false,
    },
    {
      period: "September - November 2023",
      company: "CUF",
      position: "FullStack Developer. Internship",
      location: "Fianarantsoa, Madagascar",
      type: "Full-time",
      description:
        "Developed a digital archive management system for document storage, organization, and retrieval. Implemented secure file handling, search functionality, and user access controls for institutional document management.",
      achievements: [
        "Created archive system managing 10,000+ digital documents",
        "Implemented advanced search with metadata filtering and categorization",
        "Built secure file upload/download system with role-based access",
        "Delivered user training and documentation for system adoption",
      ],
      technologies: ["React", "PHP", "MySQL"],
      isActive: false,
    },
  ];

  return (
    <div className="px-4 mt-28 mb-20 relative">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-[#FAEB92] to-[#CC66DA] rounded-full opacity-5 dark:opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-[#CC66DA] rounded-full opacity-10 dark:opacity-20 blur-2xl"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#FAEB92] rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-[#CC66DA] rounded-full opacity-30"></div>

      <Title title="EXPERIENCE" />

      {/* Two column grid */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {experiences.map((exp, index) => (
          <div key={index} className="group">
            {/* Period and status */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2 text-[#CC66DA] dark:text-[#FAEB92]">
                <Calendar size={16} />
                <span className="text-sm font-medium space-grotesk">
                  {exp.period}
                </span>
              </div>
              {exp.isActive && (
                <span className="px-2 py-1 text-xs bg-[#CC66DA]/10 dark:bg-[#FAEB92]/10 text-[#CC66DA] dark:text-[#FAEB92] rounded-full border border-[#CC66DA]/20 dark:border-[#FAEB92]/20">
                  Current
                </span>
              )}
            </div>

            {/* Position and Company */}
            <div className="mb-4">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white space-grotesk group-hover:text-[#CC66DA] dark:group-hover:text-[#FAEB92] transition-colors duration-300 mb-1">
                {exp.position}
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-lg text-gray-700 dark:text-gray-300 font-medium">
                  {exp.company}
                </span>
                <ExternalLink
                  size={16}
                  className="text-gray-400 group-hover:text-[#CC66DA] dark:group-hover:text-[#FAEB92] transition-colors duration-300"
                />
              </div>
            </div>

            {/* Location and type */}
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <div className="flex items-center gap-1">
                <MapPin size={14} />
                <span>{exp.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Briefcase size={14} />
                <span>{exp.type}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify mb-6">
              {exp.description}
            </p>

            {/* Achievements */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3 uppercase tracking-wide">
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, achIndex) => (
                  <li
                    key={achIndex}
                    className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 bg-[#CC66DA] dark:bg-[#FAEB92] rounded-full mt-2 flex-shrink-0"></div>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            {exp.technologies && exp.technologies.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3 uppercase tracking-wide">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-gray-100/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200/50 dark:border-gray-600/50 group-hover:bg-[#CC66DA]/10 dark:group-hover:bg-[#FAEB92]/10 group-hover:border-[#CC66DA]/30 dark:group-hover:border-[#FAEB92]/30 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Separator line for visual separation */}
            <div className="mt-8 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent lg:hidden"></div>
          </div>
        ))}
      </div>

      {/* Bottom decoration */}
      <div className="mt-16 flex justify-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#CC66DA]/50"></div>
          <div className="w-2 h-2 bg-[#CC66DA] rounded-full"></div>
          <div className="w-16 h-px bg-gradient-to-r from-[#CC66DA]/50 via-[#FAEB92]/50 to-[#CC66DA]/50"></div>
          <div className="w-2 h-2 bg-[#FAEB92] rounded-full"></div>
          <div className="w-8 h-px bg-gradient-to-r from-[#FAEB92]/50 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};
