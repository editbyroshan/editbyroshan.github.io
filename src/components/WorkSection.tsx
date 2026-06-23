import { Play, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Documentary: Voices of the Valley",
    category: "Documentary Edit",
    description:
      "Full post-production for a 45-min documentary including color grading, sound design, and motion graphics.",
    videoUrl: "#",
    thumbnail: null,
    tags: ["Color Grading", "Sound Design", "Motion Graphics"],
    results: "120K+ Views",
  },
  {
    title: "YouTube: Tech Review Channel",
    category: "YouTube Content",
    description:
      "Weekly editing for a 500K+ subscriber tech channel. Fast-paced, engaging cuts with custom motion graphics.",
    videoUrl: "#",
    thumbnail: null,
    tags: ["Fast Editing", "Motion Graphics", "Thumbnails"],
    results: "2M+ Monthly Views",
  },
  {
    title: "Brand Film: Urban Lifestyle Co.",
    category: "Commercial / Brand Film",
    description:
      "Cinematic brand film for a lifestyle brand launch. Included color grading, music selection, and sound mix.",
    videoUrl: "#",
    thumbnail: null,
    tags: ["Cinematic", "Color Grade", "Sound Mix"],
    results: "98% Positive Feedback",
  },
  {
    title: "Social Media Reel Series",
    category: "Shorts & Reels",
    description:
      "High-volume short-form content optimized for Instagram Reels, YouTube Shorts, and TikTok.",
    videoUrl: "#",
    thumbnail: null,
    tags: ["Reels", "Shorts", "Viral Editing"],
    results: "500K+ Combined Views",
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="relative py-20 sm:py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-amber-400 text-sm font-medium uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            See the <span className="text-amber-400">Difference</span> I Make
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Every project tells a story. Here's how I've helped creators and
            brands elevate their content through professional editing.
          </p>
        </div>

        {/* Before/After Highlight */}
        <div className="mb-20">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <span className="w-1 h-5 bg-amber-400 rounded-full inline-block" />
            Before & After — The Power of Editing
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="relative aspect-video rounded-xl bg-zinc-900 border border-white/5 overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center mx-auto mb-3">
                    <Play size={24} className="text-white/40" />
                  </div>
                  <p className="text-zinc-500 text-sm">RAW FOOTAGE</p>
                  <p className="text-zinc-400 text-xs mt-1">Before</p>
                </div>
              </div>
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-zinc-900/80 backdrop-blur-sm text-xs text-zinc-400 border border-white/5">
                Before
              </div>
            </div>
            <div className="relative aspect-video rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-amber-500/20 overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center mx-auto mb-3 group-hover:bg-amber-500/30 transition-colors">
                    <Play size={24} className="text-amber-400" />
                  </div>
                  <p className="text-amber-400 text-sm font-medium">
                    CLICK TO SEE FINAL
                  </p>
                  <p className="text-zinc-500 text-xs mt-1">After — Color Graded</p>
                </div>
              </div>
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-amber-500/20 backdrop-blur-sm text-xs text-amber-400 border border-amber-500/20">
                After
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-amber-500/5 to-transparent" />
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-xl bg-zinc-900/50 border border-white/5 overflow-hidden hover:border-amber-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/5"
            >
              {/* Video Placeholder */}
              <div className="relative aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                {/* Category Badge */}
                <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-zinc-900/80 backdrop-blur-sm text-xs text-zinc-300 border border-white/5">
                  {project.category}
                </div>
                {/* Play Button */}
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:bg-amber-500/20 group-hover:border-amber-500/30 transition-all duration-300">
                  <Play
                    size={20}
                    className="text-white/60 group-hover:text-amber-400 ml-0.5 transition-colors"
                  />
                </div>
                {/* Result Badge */}
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-amber-500/15 text-xs text-amber-400/80 border border-amber-500/10">
                  {project.results}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-white/5 text-xs text-zinc-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors group"
          >
            I Want Results Like This
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
