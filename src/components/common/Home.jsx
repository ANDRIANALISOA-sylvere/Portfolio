import { HeroSection } from "./HeroSection";
import { GetInTouch } from "./GetInTouch";
import { Footer } from "./Footer";
import HeroSvg from "@/assets/hero-section.svg";

export const Home = () => {
  return (
    <div className="min-h-screen relative">
      {/* Contenu principal */}
      <main className="relative z-10 flex flex-col items-center">
        {/* Hero Section avec ses SVG en plein écran */}
        <div className="relative w-full">
          {/* SVG Blur principal - en plein écran */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              src={HeroSvg}
              alt=""
              className="absolute -top-3/20
                right-0 md:right-1/4 md:top-0
                w-full
                h-full 
                object-cover md:object-contain 
                opacity-80 md:opacity-80 lg:opacity-80
                scale-100 md:scale-125 lg:scale-125
                transition-all duration-700"
              aria-hidden="true"
            />
          </div>

          {/* Pattern Grille élégante - en plein écran */}
          <div className="absolute inset-0 pointer-events-none opacity-10 md:opacity-15">
            <svg
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
            >
              <defs>
                <pattern
                  id="grid-fine"
                  x="0"
                  y="0"
                  width="60"
                  height="60"
                  patternUnits="userSpaceOnUse"
                >
                  {/* Lignes horizontales */}
                  <line
                    x1="0"
                    y1="0"
                    x2="60"
                    y2="0"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeOpacity="0.3"
                  />
                  <line
                    x1="0"
                    y1="20"
                    x2="60"
                    y2="20"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeOpacity="0.3"
                  />
                  <line
                    x1="0"
                    y1="40"
                    x2="60"
                    y2="40"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeOpacity="0.3"
                  />
                  <line
                    x1="0"
                    y1="60"
                    x2="60"
                    y2="60"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeOpacity="0.3"
                  />
                  {/* Lignes verticales */}
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="60"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeOpacity="0.3"
                  />
                  <line
                    x1="20"
                    y1="0"
                    x2="20"
                    y2="60"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeOpacity="0.3"
                  />
                  <line
                    x1="40"
                    y1="0"
                    x2="40"
                    y2="60"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeOpacity="0.3"
                  />
                  <line
                    x1="60"
                    y1="0"
                    x2="60"
                    y2="60"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeOpacity="0.3"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-fine)" />
            </svg>
          </div>

          {/* Hero Section Content - avec ses propres paddings mais contenu centré */}
          <div className="flex justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl w-full">
              <HeroSection />
            </div>
          </div>
        </div>

        {/* Get in Touch Section */}
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <GetInTouch />
          </div>
        </div>

        {/* Footer */}
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
};
