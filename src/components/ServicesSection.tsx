import { Film, Scissors, Palette, Music, Zap, TrendingUp, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Professional Video Editing",
    description:
      "Full-service editing from raw footage to polished final cut. Every transition, cut, and timing decision is made with your audience in mind.",
    features: [
      "Multi-cam syncing & editing",
      "Pacing & rhythm optimization",
      "Story structure consulting",
      "Seamless transitions & effects",
    ],
  },
  {
    icon: Palette,
    title: "Color Grading & Correction",
    description:
      "Transform flat footage into cinematic visuals. Professional color grading that sets the mood and elevates your brand.",
    features: [
      "Primary & secondary color correction",
      "Cinematic LUT creation",
      "Skin tone matching",
      "Consistent look across scenes",
    ],
  },
  {
    icon: Music,
    title: "Sound Design & Mixing",
    description:
      "Professional audio post-production. Clean dialogue, immersive soundscapes, and perfectly mixed audio that sounds great everywhere.",
    features: [
      "Noise reduction & cleanup",
      "Dialogue clarity enhancement",
      "Background score & SFX",
      "Audio ducking & leveling",
    ],
  },
  {
    icon: Zap,
    title: "Motion Graphics & Titles",
    description:
      "Custom animated titles, lower thirds, intros, and outros that make your content look polished and professional.",
    features: [
      "Custom lower thirds",
      "Animated title sequences",
      "Logo animation & reveals",
      "Call-to-action graphics",
    ],
  },
  {
    icon: Film,
    title: "YouTube & Long-Form Content",
    description:
      "End-to-end editing for YouTube videos, documentaries, and long-form content optimized for retention and engagement.",
    features: [
      "Retention-focused editing",
      "Hook optimization",
      "Chapter markers & cards",
      "End screen & thumbnail design",
    ],
  },
  {
    icon: TrendingUp,
    title: "Shorts, Reels & Social Clips",
    description:
      "High-energy short-form content for Instagram Reels, YouTube Shorts, and TikTok. Built to stop the scroll.",
    features: [
      "Trend-aware editing",
      "Caption & subtitle styling",
      "Platform optimization",
      "Viral pacing techniques",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-20 sm:py-32 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-amber-400 text-sm font-medium uppercase tracking-widest">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Everything You Need to{" "}
            <span className="text-amber-400">Go From Raw to Ready</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Whether it's a YouTube video, a documentary, or a brand commercial —
            I handle the entire post-production pipeline so you can focus on
            creating.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-xl bg-zinc-900 border border-white/5 p-6 sm:p-8 hover:border-amber-500/20 hover:bg-zinc-800/50 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/10 flex items-center justify-center mb-5 group-hover:bg-amber-500/20 transition-colors">
                <service.icon size={22} className="text-amber-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              <ul className="space-y-2.5">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-zinc-300"
                  >
                    <CheckCircle
                      size={14}
                      className="text-amber-400/70 mt-0.5 shrink-0"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Service Packages */}
        <div className="mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-10">
            Choose Your <span className="text-amber-400">Package</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Starter */}
            <div className="rounded-xl bg-zinc-900 border border-white/5 p-6 sm:p-8">
              <h4 className="text-lg font-semibold text-white mb-1">Starter</h4>
              <p className="text-sm text-zinc-500 mb-4">Perfect for beginners</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">₹5,000</span>
                <span className="text-zinc-500 text-sm ml-1">/ project</span>
              </div>
              <ul className="space-y-3 mb-8">
                {["Up to 10 min final video", "Basic color correction", "Clean audio", "1 revision"].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                    <CheckCircle size={14} className="text-amber-400/70 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block text-center py-3 rounded-full border border-white/15 text-white/80 hover:bg-white/5 transition-all text-sm font-medium"
              >
                Get Started
              </a>
            </div>

            {/* Professional - Highlighted */}
            <div className="rounded-xl bg-gradient-to-b from-amber-500/10 to-zinc-900 border border-amber-500/30 p-6 sm:p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-400 text-zinc-950 text-xs font-semibold rounded-full">
                Most Popular
              </div>
              <h4 className="text-lg font-semibold text-white mb-1">Professional</h4>
              <p className="text-sm text-zinc-500 mb-4">Best value for serious creators</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">₹15,000</span>
                <span className="text-zinc-500 text-sm ml-1">/ project</span>
              </div>
              <ul className="space-y-3 mb-8">
                {["Up to 30 min final video", "Full color grading", "Sound design & mixing", "Motion graphics", "3 revisions", "Priority support"].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                    <CheckCircle size={14} className="text-amber-400/70 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block text-center py-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-950 font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all text-sm"
              >
                Choose Professional
              </a>
            </div>

            {/* Premium */}
            <div className="rounded-xl bg-zinc-900 border border-white/5 p-6 sm:p-8">
              <h4 className="text-lg font-semibold text-white mb-1">Premium</h4>
              <p className="text-sm text-zinc-500 mb-4">For agencies & brands</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">₹35,000</span>
                <span className="text-zinc-500 text-sm ml-1">/ project</span>
              </div>
              <ul className="space-y-3 mb-8">
                {["Unlimited duration", "Advanced color grading", "Full sound design", "Custom motion graphics", "Unlimited revisions", "Dedicated support", "Archive delivery"].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                    <CheckCircle size={14} className="text-amber-400/70 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block text-center py-3 rounded-full border border-white/15 text-white/80 hover:bg-white/5 transition-all text-sm font-medium"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
