import avatar from '@/assets/avatar.jpeg';

export const HeroSection = () => {
    return (
        <>
            {/* Section Avatar + Nom */}
            <div className="flex flex-col sm:flex-row items-center md:items-center sm:items-start gap-4 sm:gap-6">
                <img
                    src={avatar}
                    alt="Joséphin Sylvère"
                    className="w-20 h-20 sm:w-20 sm:h-20 md:w-20 md:h-20 rounded-full object-cover"
                />
                <div className="text-center sm:text-left">
                    <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                            Hi, I'm Joséphin Sylvère
                        </span>
                    </h1>
                    <p className="text-base sm:text-lg text-gray-600 font-bold mt-2">
                        Software Engineer - Backend Developer
                    </p>
                </div>
            </div>

            {/* Description */}
            <div className="pt-6 sm:pt-8 pb-6 sm:pb-8 text-justify">
                <p className='text-gray-400 leading-relaxed md:text-sm sm:text-md'>
                    I'm a <strong>Software Engineer</strong> from Madagascar 🇲🇬 specializing in Backend Development with Node.js and DevOps. I build scalable, high-performance systems and optimize development workflows using modern tools and best practices.
                </p>
            </div>

            {/* Carte */}
            <div className="mb-6 sm:mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Location</h2>
                <div className="rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.openstreetmap.org/export/embed.html?bbox=43.0,-26.0,50.5,-12.0&layer=mapnik&marker=-21.456872,47.099935"
                        width="100%"
                        height="180"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        title="OpenStreetMap Location"
                        className="w-full"
                    ></iframe>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mt-2 text-center">
                    <a
                        href="https://www.openstreetmap.org/?mlat=-21.456872&mlon=47.099935#map=8/-21.456872/47.099935"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 transition-colors"
                    >
                        View larger on OpenStreetMap
                    </a>
                </p>
            </div>
        </>
    )
}