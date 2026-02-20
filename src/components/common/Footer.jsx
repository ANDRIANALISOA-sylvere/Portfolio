// Footer.tsx
import { Github, Linkedin, Twitter, Instagram, X } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Ligne horizontale */}
        <div className="w-full h-px bg-gray-200 dark:bg-gray-800 mb-8" />
        
        {/* Contenu du footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Nom à gauche */}
          <div className="text-gray-600 dark:text-gray-400 order-2 md:order-1">
            © {currentYear} A. Joséphin Sylvère
          </div>
          
          {/* Liens sociaux à droite */}
          <div className="flex gap-6 order-1 md:order-2">
            <a
              href="https://x.com/josephinsylvere"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="X (Twitter)"
            >
              <X className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/josephinsylvere"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/josephinsylvere"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/josephin-sylvere"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/ANDRIANALISOA-sylvere"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};