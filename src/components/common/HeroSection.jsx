import Avatar from "@/assets/image.png";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="py-20 md:py-32">
      {/* Contenu principal */}
      <div>
        <div className="flex justify-start">
          <img
            src={Avatar}
            width={80}
            height={80}
            className="rounded-full border-4"
            alt="avatar"
          />
        </div>

        <div className="mt-8 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white Handlee-900">
            Software Engineer, Freelancer, and Open Source Enthusiast.
          </h1>

          <p className="mt-6 text-gray-600 dark:text-gray-400">
            Je crée des applications web modernes et performantes avec React,
            TypeScript et les dernières technologies du web. Disponible pour vos
            projets freelances et contributions open source.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="https://github.com/ANDRIANALISOA-sylvere"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/josephin-sylvere"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/josephinsylvere"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="mailto:josephinsylvere@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
