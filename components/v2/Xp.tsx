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
      type: "Part-time",
      description:
        "Co-founder of a fintech startup in the launch phase. Involved in defining the vision, structuring the team, and preparing the first projects.",
      achievements: [
        "Created the legal and organizational structure of the startup",
        "Set up technical foundations and selected technologies",
        "Developed initial internal prototypes",
        "Prospected potential clients and partners",
      ],
      technologies: null,
      isActive: true,
    },
    {
      period: "June 2025 - Present",
      company: "ITT Madagascar",
      position: "Frontend Developer",
      location: "Remote",
      type: "Part-time",
      description:
        "Specialized in transforming UI/UX designs into responsive web applications and integrating frontend components with backend APIs. Focus on pixel-perfect implementation and optimal user experience.",
      achievements: [
        "Converted Figma mockups into responsive React components",
        "Integrated RESTful APIs with error handling and loading states",
        "Improved website performance",
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
        "Built complete case tracking system managing documents",
        "Implemented Telegram bot integration for real-time notifications",
        "Designed intuitive dashboard with search and filtering capabilities"
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
        "Created archive system managing digital documents",
        "Implemented advanced search with metadata filtering and categorization",
        "Built secure file upload/download system with role-based access",
        "Delivered user training and documentation for system adoption",
      ],
      technologies: ["React", "PHP", "MySQL"],
      isActive: false,
    },
  ];

  return (
    <div className="px-4 sm:px-6 mt-20 mb-16 relative" id="experience">
      {/* Background decorative elements - reduced size */}
      <div className="absolute top-10 right-4 sm:right-10 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-[#FAEB92] to-[#CC66DA] rounded-full opacity-5 dark:opacity-10 blur-2xl sm:blur-3xl"></div>
      <div className="absolute bottom-20 left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-[#CC66DA] rounded-full opacity-10 dark:opacity-20 blur-xl sm:blur-2xl"></div>
      <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-[#CC66DA] rounded-full opacity-30"></div>

      <Title title="EXPERIENCE" />

      {/* Responsive grid */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
        {experiences.map((exp, index) => (
          <div key={index} className="group">
            {/* Period and status - compact layout */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
              <div className="flex items-center gap-1 sm:gap-2 text-[#CC66DA] dark:text-[#FAEB92]">
                <Calendar size={14} className="flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium space-grotesk">
                  {exp.period}
                </span>
              </div>
              {exp.isActive && (
                <span className="px-2 py-0.5 text-xs bg-[#CC66DA]/10 dark:bg-[#FAEB92]/10 text-[#CC66DA] dark:text-[#FAEB92] rounded-full border border-[#CC66DA]/20 dark:border-[#FAEB92]/20">
                  Current
                </span>
              )}
            </div>

            {/* Position and Company - adjusted sizes */}
            <div className="mb-3 sm:mb-4">
              <h3 className="text-lg sm:text-xl lg:text-xl font-bold text-gray-900 dark:text-white space-grotesk group-hover:text-[#CC66DA] dark:group-hover:text-[#FAEB92] transition-colors duration-300 mb-1">
                {exp.position}
              </h3>
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-base sm:text-lg text-gray-700 dark:text-gray-300 font-medium">
                  {exp.company}
                </span>
                <ExternalLink
                  size={14}
                  className="text-gray-400 group-hover:text-[#CC66DA] dark:group-hover:text-[#FAEB92] transition-colors duration-300 flex-shrink-0"
                />
              </div>
            </div>

            {/* Location and type - compact */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3 sm:mb-4">
              <div className="flex items-center gap-1">
                <MapPin size={12} className="flex-shrink-0" />
                <span>{exp.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Briefcase size={12} className="flex-shrink-0" />
                <span>{exp.type}</span>
              </div>
            </div>

            {/* Description - adjusted text size */}
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed text-justify mb-4 sm:mb-6">
              {exp.description}
            </p>

            {/* Achievements - compact */}
            <div className="mb-4 sm:mb-6">
              <h4 className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2 sm:mb-3 uppercase tracking-wide">
                Key Achievements
              </h4>
              <ul className="space-y-1 sm:space-y-2">
                {exp.achievements.map((achievement, achIndex) => (
                  <li
                    key={achIndex}
                    className="flex items-start gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 bg-[#CC66DA] dark:bg-[#FAEB92] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies - adjusted */}
            {exp.technologies && exp.technologies.length > 0 && (
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2 sm:mb-3 uppercase tracking-wide">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs bg-gray-100/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200/50 dark:border-gray-600/50 group-hover:bg-[#CC66DA]/10 dark:group-hover:bg-[#FAEB92]/10 group-hover:border-[#CC66DA]/30 dark:group-hover:border-[#FAEB92]/30 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Separator line - mobile only */}
            <div className="mt-6 sm:mt-8 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent lg:hidden"></div>
          </div>
        ))}
      </div>

      {/* Bottom decoration - simplified */}
      <div className="mt-12 sm:mt-16 flex justify-center">
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="w-6 sm:w-8 h-px bg-gradient-to-r from-transparent to-[#CC66DA]/50"></div>
          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#CC66DA] rounded-full"></div>
          <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-[#CC66DA]/50 via-[#FAEB92]/50 to-[#CC66DA]/50"></div>
          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#FAEB92] rounded-full"></div>
          <div className="w-6 sm:w-8 h-px bg-gradient-to-r from-[#FAEB92]/50 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};