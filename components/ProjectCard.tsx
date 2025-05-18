import React from "react";

interface ProjectProps {
  title: string;
  company?: string;
  description: string;
  githubLink?: string;
  techs?: TechItem[];
}

interface TechItem {
  name: string;
  svg: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  company,
  description,
  githubLink,
  techs,
}) => {
  return (
    <div className="group relative bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-200 hover:border-purple-300 h-full flex flex-col overflow-hidden">
      {/* Accent coloré */}
      <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative flex flex-col flex-grow">
        {/* En-tête du projet */}
        <div className="mb-4">
          {company && (
            <span className="text-blue-500 text-sm font-medium bg-blue-50 px-2 py-1 rounded-full">
              {company}
            </span>
          )}
          <h3 className="font-bold text-xl text-gray-800 mt-2 group-hover:text-purple-600 transition-colors duration-200">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed flex-grow mb-4">
          {description}
        </p>

        {/* Technologies */}
        {techs && techs.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {techs.map((tech, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-100 hover:bg-purple-100 rounded-full px-3 py-1 text-sm transition-colors duration-200"
              >
                <span
                  className="mr-2 flex items-center"
                  dangerouslySetInnerHTML={{ __html: tech.svg }}
                  style={{ width: "16px", height: "16px" }}
                />
                <span className="text-gray-700 font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-gray-100">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              <span
                className="flex-shrink-0"
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
                }}
              />
              <span>Source code</span>
            </a>
          )}

          {/* Bouton demo optionnel */}
          <button className="inline-flex items-center gap-2 bg-yellow-300 hover:bg-yellow-400 text-purple-800 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM9.5 17.5v-11l7 5.5-7 5.5z" />
            </svg>
            <span>View Demo (soon)</span>
          </button>
        </div>
      </div>

      {/* Effet de bordure animée */}
      <div className="absolute inset-0 rounded-lg border border-purple-500 opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default ProjectCard;
