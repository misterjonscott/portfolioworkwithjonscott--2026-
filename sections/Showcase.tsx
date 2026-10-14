import Image from 'next/image';

const Showcase = () => {
  return (
    <section className="relative py-16 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Hero 50/50 Split Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24">
          {/* Left Side: Screenshot Mockup */}
          <div className="relative w-full lg:w-1/2 flex justify-center items-center h-96 group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-800 to-indigo-900 rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500 ease-out"></div>
            <div className="relative w-11/12 h-5/6 bg-gray-800 rounded-lg shadow-2xl overflow-hidden z-10">
              <Image
                src="/images/wavii-showcase/screenshot-secondary.webp"
                alt="Wavii.io Secondary Screenshot"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="absolute top-0 left-0 w-11/12 h-5/6 bg-gray-900 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 ease-out group-hover:scale-102 group-hover:translate-x-2 group-hover:-translate-y-2 z-20">
              <Image
                src="/images/wavii-showcase/screenshot-primary.webp"
                alt="Wavii.io Primary Screenshot"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl text-center pb-4 font-black tracking-tight font-title text-white">
              Featured Live R&D Build • Wavii.io
            </h1>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto lg:mx-0">
              A production-grade spatial event discovery engine merging multi-provider ticketing BFFs with micro-weather and venue logistics.
            </p>
            <p className="text-sm text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 italic">
              Engineered as an open architecture benchmark (Next.js 16, Zustand, Tailwind v4) to demonstrate modern frontend engineering and UX systems beyond enterprise NDA boundaries.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href="#"
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 ease-out"
              >
                Launch Live App
              </a>
              <a
                href="https://github.com/misterjonscott/wavii-io"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold rounded-full shadow-lg transition-all duration-300 ease-out"
              >
                View Source on GitHub
              </a>
            </div>
          </div>
        </div>

        {/* 2x2 Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="relative group bg-gray-800 rounded-xl p-6 shadow-xl overflow-hidden border border-gray-700 transition-all duration-300 ease-out group-hover:border-purple-500/50 group-hover:shadow-lg group-hover:shadow-purple-950/20">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-800/10 to-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
            <div className="relative h-48 w-full mb-6 rounded-md overflow-hidden transform transition-all duration-300 ease-out group-hover:scale-105">
              <Image
                src="/images/wavii-showcase/card1.webp"
                alt="Card 1 Thumbnail"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Intent-Driven Itinerary State Machine</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Decoupling browsing (`selectedEventId`) from committed itineraries (`plannedEventId`) to eliminate modal friction during multi-spot planning.
            </p>
            <p className="text-purple-300 italic text-sm">
              <em>Technical Takeaway:</em> Dual-state Zustand architecture with persistent bottom summary bar.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative group bg-gray-800 rounded-xl p-6 shadow-xl overflow-hidden border border-gray-700 transition-all duration-300 ease-out group-hover:border-purple-500/50 group-hover:shadow-lg group-hover:shadow-purple-950/20">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-800/10 to-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
            <div className="relative h-48 w-full mb-6 rounded-md overflow-hidden transform transition-all duration-300 ease-out group-hover:scale-105">
              <Image
                src="/images/wavii-showcase/card2.webp"
                alt="Card 2 Thumbnail"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Multi-Provider BFF & Fuzzy Deduplication</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Bridging fragmented ticketing APIs by ingesting Ticketmaster Discovery v2 and SeatGeek v2 concurrently via `Promise.allSettled`.
            </p>
            <p className="text-purple-300 italic text-sm">
              <em>Technical Takeaway:</em> Custom composite hash engine (&apos;date-venueSlug&apos;) for cross-market collision merging.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative group bg-gray-800 rounded-xl p-6 shadow-xl overflow-hidden border border-gray-700 transition-all duration-300 ease-out group-hover:border-purple-500/50 group-hover:shadow-lg group-hover:shadow-purple-950/20">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-800/10 to-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
            <div className="relative h-48 w-full mb-6 rounded-md overflow-hidden transform transition-all duration-300 ease-out group-hover:scale-105">
              <Image
                src="/images/wavii-showcase/card3.webp"
                alt="Card 3 Thumbnail"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Micro-Weather & Spatial Context Heuristics</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Moving beyond static lists by integrating Open-Meteo forecasts and 5-day air quality data with a custom 2-tier Hype heuristic.
            </p>
            <p className="text-purple-300 italic text-sm">
              <em>Technical Takeaway:</em> Replaces raw, unweighted API scores with true visual contrast (`🔥 HYPE` vs `✨ Trending`).
            </p>
          </div>

          {/* Card 4 */}
          <div className="relative group bg-gray-800 rounded-xl p-6 shadow-xl overflow-hidden border border-gray-700 transition-all duration-300 ease-out group-hover:border-purple-500/50 group-hover:shadow-lg group-hover:shadow-purple-950/20">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-800/10 to-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
            <div className="relative h-48 w-full mb-6 rounded-md overflow-hidden transform transition-all duration-300 ease-out group-hover:scale-105">
              <Image
                src="/images/wavii-showcase/card4.webp"
                alt="Card 4 Thumbnail"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Built-In Architecture Inspector</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Embedding an interactive live inspector right in the UI to expose runtime Zustand snapshots and adapter transformation maps.
            </p>
            <p className="text-purple-300 italic text-sm">
              <em>Technical Takeaway:</em> Zero-friction developer transparency for hiring managers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
