import { Quote, Camera, Monitor, Heart } from "lucide-react";

const tools = [
  "Premiere Pro",
  "DaVinci Resolve",
  "After Effects",
  "Final Cut Pro",
  "Audition",
  "Photoshop",
];

const values = [
  {
    icon: Camera,
    title: "Story-First Approach",
    description:
      "I don't just cut footage — I craft narratives. Every edit serves the story.",
  },
  {
    icon: Monitor,
    title: "Pixel-Perfect Precision",
    description:
      "From frame-accurate cuts to color-matched grades. Details matter.",
  },
  {
    icon: Heart,
    title: "Client-Focused Process",
    description:
      "Clear communication, timely delivery, and revisions until you're thrilled.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 sm:py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-amber-400 text-sm font-medium uppercase tracking-widest">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            The Person Behind{" "}
            <span className="text-amber-400">the Edit</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            {/* Testimonial-style intro */}
            <div className="relative pl-6 border-l-2 border-amber-400/50">
              <Quote
                size={24}
                className="absolute -top-1 -left-3 text-amber-400/20"
              />
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed italic">
                "I believe every frame should earn its place in the timeline."
              </p>
            </div>

            <p className="text-zinc-400 leading-relaxed">
              Hi, I'm <span className="text-white font-medium">[Your Name]</span> — a
              professional video editor with <span className="text-white font-medium">8+ years</span> of
              experience turning raw footage into compelling visual stories.
            </p>

            <p className="text-zinc-400 leading-relaxed">
              I've worked with <span className="text-white font-medium">100+ clients</span> — from solo
              YouTubers just starting their journey to established agencies
              producing brand films. My editing style blends cinematic
              storytelling with modern pacing that keeps today's audiences
              engaged.
            </p>

            <p className="text-zinc-400 leading-relaxed">
              What sets me apart? I don't just edit videos — I study
              retention, understand audience psychology, and optimize every
              second of your content to deliver results, not just pretty cuts.
            </p>

            {/* Tools */}
            <div className="pt-4">
              <h4 className="text-sm font-medium text-white/60 uppercase tracking-wider mb-3">
                Tools I Use
              </h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-sm text-zinc-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: "100+", label: "Projects" },
                { value: "8+", label: "Years" },
                { value: "50+", label: "Clients" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-lg bg-zinc-900/50 border border-white/5"
                >
                  <div className="text-2xl font-bold text-amber-400">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Values & Process */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-white">
              My Editing Philosophy
            </h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-5 rounded-xl bg-zinc-900/50 border border-white/5"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/10 flex items-center justify-center shrink-0">
                    <value.icon size={18} className="text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">
                      {value.title}
                    </h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to action */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/15">
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                <span className="font-semibold text-white">
                  Let's work together?
                </span>{" "}
                I'm currently accepting new projects and would love to hear
                about what you're creating.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors"
              >
                Tell Me About Your Project →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
