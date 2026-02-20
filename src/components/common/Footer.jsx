import { Github, Linkedin, Twitter, Instagram, X } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto">

        {/* Ligne horizontale */}
        <div className="w-full h-px bg-border mb-8" />

        {/* Contenu */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Texte copyright */}
          <div className="text-muted-foreground order-2 md:order-1">
            © {currentYear} A. Joséphin Sylvère
          </div>

          {/* Réseaux */}
          <div className="flex gap-6 order-1 md:order-2">
            <a
              href="https://x.com/josephinsylvere"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="X"
            >
              <X className="w-5 h-5" />
            </a>

            <a
              href="https://twitter.com/josephinsylvere"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>

            <a
              href="https://instagram.com/josephinsylvere"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href="https://linkedin.com/in/josephin-sylvere"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="https://github.com/ANDRIANALISOA-sylvere"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
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