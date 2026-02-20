import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "TechCorp",
    logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=48&h=48&fit=crop",
    role: "Senior Software Developer",
    date: "2024 May — Present",
    description: "Développement d'applications React et Node.js",
  },
  {
    id: 2,
    company: "StartupHub",
    logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=48&h=48&fit=crop",
    role: "Full Stack Developer",
    date: "2022 Jan — 2024 Apr",
    description: "Création de produits MVP pour startups",
  },
  {
    id: 3,
    company: "Digital Agency",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=48&h=48&fit=crop",
    role: "Frontend Developer",
    date: "2020 Jun — 2021 Dec",
    description: "Développement de sites web et applications",
  },
];

export const Experience = () => {
  return (
    <div className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Card principale */}
        <div className="rounded-xs bg-[#111111] border border-[#222222] overflow-hidden">
          
          {/* Header */}
          <div className="flex items-center gap-3 px-6 py-5 border-b border-[#222222]">
            <div className="p-2 bg-[#161616] border border-[#222222] rounded-lg">
              <Briefcase className="w-5 h-5 text-gray-300" />
            </div>
            <h2 className="text-lg font-bold text-white">Work Experience</h2>
          </div>

          {/* Liste */}
          <div>
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="group px-6 py-5 hover:bg-[#161616] transition-colors duration-300"
              >
                <div className="flex gap-4">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>

                  {/* Contenu */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
                      <h3 className="font-semibold text-white">
                        {exp.company}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {exp.date}
                      </span>
                    </div>

                    <p className="text-gray-300 mb-1">{exp.role}</p>
                    <p className="text-sm text-gray-500">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                {index < experiences.length - 1 && (
                  <div className="mt-5 h-px bg-[#222222]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};