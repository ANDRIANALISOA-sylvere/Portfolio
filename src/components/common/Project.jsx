import { Folder } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "EcoTracker",
    description:
      "Application de suivi d'empreinte carbone avec visualisation de données",
    repo: "https://github.com/ANDRIANALISOA-sylvere/ecotracker",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=240&fit=crop",
  },
  {
    id: 2,
    name: "TaskFlow",
    description: "Outil de gestion de projet collaboratif avec tableaux Kanban",
    repo: "https://github.com/ANDRIANALISOA-sylvere/taskflow",
    logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=240&fit=crop",
  },
  {
    id: 3,
    name: "MediCare",
    description: "Plateforme de téléconsultation médicale et suivi patient",
    repo: "https://github.com/ANDRIANALISOA-sylvere/medicare",
    logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=240&fit=crop",
  },
  {
    id: 4,
    name: "FinWise",
    description:
      "Application de gestion financière personnelle et investissements",
    repo: "https://github.com/ANDRIANALISOA-sylvere/finwise",
    logo: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=240&fit=crop",
  },
  {
    id: 5,
    name: "LearnHub",
    description: "Plateforme d'apprentissage en ligne avec cours interactifs",
    repo: "https://github.com/ANDRIANALISOA-sylvere/learnhub",
    logo: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=240&fit=crop",
  },
  {
    id: 6,
    name: "FitTrack",
    description: "Application de suivi fitness et nutrition avec IA",
    repo: "https://github.com/ANDRIANALISOA-sylvere/fittrack",
    logo: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=240&fit=crop",
  },
];

export const Projects = () => {
  return (
    <div className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Projects */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-[#222222] mb-6">
          <div className="p-2 bg-[#161616] border border-[#222222] rounded-lg">
            <Folder className="w-5 h-5 text-gray-300" />
          </div>
          <h2 className="text-lg font-bold text-white">Projects</h2>
        </div>

        {/* Liste des projets */}
        <div className="space-y-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative flex overflow-hidden rounded-xs border border-[#222222] bg-[#111111] hover:bg-[#161616] transition-all duration-300">
                {/* Image en background partielle */}
                <div className="absolute top-0 right-0 h-full w-1/3 overflow-hidden">
                  <img
                    src={project.logo}
                    alt={project.name}
                    className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30" />{" "}
                  {/* overlay pour contraste */}
                </div>

                {/* Texte */}
                <div className="flex-1 p-6 relative z-10">
                  <h3 className="text-lg font-semibold text-white">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-white/60 text-sm">
                    {project.description}
                  </p>
                  <span className="mt-4 inline-block text-white/80 group-hover:text-white group-hover:underline text-sm">
                    View Repository →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
