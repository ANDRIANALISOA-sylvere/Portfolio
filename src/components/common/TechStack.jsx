// TechStack.jsx
const techs = [
  { id: 1, name: "Node.js", emoji: "🟢" },
  { id: 2, name: "Express", emoji: "⚡" },
  { id: 3, name: "NestJS", emoji: "🐱" },
  { id: 4, name: "Docker", emoji: "🐳" },
  { id: 5, name: "Jenkins", emoji: "🤖" },
  { id: 6, name: "JavaScript", emoji: "✨" },
  { id: 7, name: "TypeScript", emoji: "🔷" },
  { id: 8, name: "GraphQL", emoji: "🔺" },
  { id: 9, name: "Kafka", emoji: "🐘" },
  { id: 10, name: "Kubernetes", emoji: "☸️" },
];

export const TechStack = () => {
  return (
    <div className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Titre */}
        <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
          🛠 Tech Stack
        </h2>

        {/* Badges */}
        <div className="flex flex-wrap gap-4">
          {techs.map((tech, index) => (
            <div
              key={tech.id}
              className="flex items-center gap-2 px-4 py-2 bg-[#111111] border border-[#222222] text-white font-medium rounded-lg shadow-sm transform hover:scale-105 transition-transform duration-300"
              style={{ rotate: `${index % 2 === 0 ? -3 : 3}deg` }}
            >
              <span className="text-xl">{tech.emoji}</span>
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};