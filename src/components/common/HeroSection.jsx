import Avatar from "@/assets/image.png";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="py-20 md:py-32 relative flex justify-start items-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Avatar à gauche */}
      <div className="relative">
        <img
          src={Avatar}
          width={120}
          height={120}
          className="rounded-full border-4 border-gray-300 dark:border-gray-700"
          alt="avatar"
        />

        {/* Badge flottant */}
        <span
          className="absolute -top-4 -right-4 px-4 py-2 text-sm font-bold text-white
                     bg-green-500 rounded-full
                     border-2 border-white
                     before:absolute before:-inset-1 before:rounded-full before:border-2 before:border-green-300
                     shadow-lg transform rotate-12
                     animate-pulse"
        >
          Available Now
        </span>
      </div>

      {/* Contenu texte à droite */}
      <div className="ml-8 max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white Handlee-900">
          Software Engineer,{" "}
          <span className="relative inline-block">
            Freelancer
            {/* Underline stylée */}
            <span
              className="absolute left-0 -bottom-1 w-full h-2 
                     bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 
                     rounded-full transform -skew-x-12"
            ></span>
          </span>
          , and Open Source Enthusiast.
        </h1>

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
  );
};
