export const GetInTouch = () => {
  return (
    <div className="py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Ligne horizontale */}
        <div className="w-full h-px bg-[#222222] mb-12" />

        <div className="text-center relative">
          {/* Badge Contact */}
          <div className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-gray-300 bg-[#111111] border border-[#222222] rounded-lg">
            Contact
          </div>

          {/* Titre */}
          <h2 className="Handlee-900 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Get in Touch
          </h2>

          {/* Description */}
          <p className="text-gray-500 max-w-2xl mx-auto relative z-10">
            Want to chat or collaborate or discuss on project. Email me at{" "}
            <a
              href="mailto:josephinsylvere@gmail.com"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              josephinsylvere@gmail.com
            </a>{" "}
            or message me on{" "}
            <a
              href="https://linkedin.com/in/josephin-sylvere"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Linkedin
            </a>{" "}
            and I'll respond as quick as possible.
          </p>
        </div>
      </div>

      {/* Blur blanc sur le côté droit */}
      <div
        className="absolute top-0 right-0 h-full w-1/3 pointer-events-none"
        style={{
          background: "linear-gradient(to left, rgba(255,255,255,0.1), transparent)",
          filter: "blur(60px)"
        }}
      />
    </div>
  );
};