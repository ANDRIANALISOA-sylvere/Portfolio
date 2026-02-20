import { Mail } from "lucide-react";

export const GetInTouch = () => {
  return (
    <div className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Ligne horizontale */}
        <div className="w-full h-px bg-gray-200 dark:bg-gray-800 mb-12" />

        <div className="text-center">
          {/* Badge Contact */}
          <div className="inline-block font-bold text-white mb-4 bg-gray-200 dark:bg-gray-700 rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            Contact
          </div>

          {/* Titre Get in Touch */}
          <h2 className="Handlee-900 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Want to chat or collaborate or discuss on project. Email me at{" "}
            <a
              href="mailto:josephinsylvere@gmail.com"
              className="text-gray-900 dark:text-white hover:underline font-medium"
            >
              josephinsylvere@gmail.com
            </a>{" "}
            or message me on{" "}
            <a
              href="https://linkedin.com/in/josephin-sylvere"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 dark:text-white hover:underline font-medium"
            >
              Linkedin
            </a>{" "}
            and I'll respond as quick as possible.
          </p>
        </div>
      </div>
    </div>
  );
};
