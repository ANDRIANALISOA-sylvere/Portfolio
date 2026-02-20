import { Server, GitBranch, Cloud } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Backend Development",
    description: "Création d'API robustes et scalables avec Node.js, Express et bases de données relationnelles ou NoSQL.",
    icon: <Server className="w-6 h-6 text-white" />,
  },
  {
    id: 2,
    title: "DevOps & CI/CD",
    description: "Automatisation des déploiements, intégration continue et monitoring avec Docker, GitHub Actions et PM2.",
    icon: <GitBranch className="w-6 h-6 text-white" />,
  },
  {
    id: 3,
    title: "Cloud & Scalability",
    description: "Déploiement d'applications cloud-ready avec haute disponibilité et sécurité sur AWS ou autres providers.",
    icon: <Cloud className="w-6 h-6 text-white" />,
  },
];

export const Services = () => {
  return (
    <div className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="flex items-center gap-3 text-lg font-bold text-white mb-8">
          <Server className="w-5 h-5 text-primary" />
          My Services
        </h2>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#111111] border border-[#222222] rounded-sm p-6 flex flex-col gap-3 hover:bg-[#161616] transition-colors duration-300"
            >
              <div className="p-3 bg-[#161616] rounded-lg w-max">
                {service.icon}
              </div>
              <h3 className="text-white font-semibold text-base">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};