import { Play, Clock, Award, ChevronDown } from "lucide-react";

const stats = [
  { icon: Play, value: "100+", label: "Projects Edited" },
  { icon: Clock, value: "8+", label: "Years Experience" },
  { icon: Award, value: "50+", label: "Happy Clients" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[96px]" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs sm:text-sm text-amber-300/80 mb-6 sm:mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          Available for Freelance Projects
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6 sm:mb-8">
          <span className="text-white">Your Story,</span>
          <br />
          <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-red-500 bg-clip-text text-transparent">
            Perfectly Edited
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          I help YouTubers, agencies, and brands transform raw footage into
          cinematic masterpieces. <br className="hidden sm:block" />
          Every cut, every transition, every color grade — precision-crafted to
          keep your audience hooked.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-950 font-semibold text-base hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 hover:scale-[1.02]"
          >
            Start Your Project →
          </a>
          <a
            href="#work"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/15 text-white/80 hover:bg-white/5 transition-all duration-300 text-base"
          >
            <span className="flex items-center justify-center gap-2">
              <Play size={16} /> Watch Showreel
            </span>
          </a>
        </div>

        {/* Trust Bar - Social Proof */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center justify-center gap-3 text-white/60"
            >
              <stat.icon size={18} className="text-amber-400/60" />
              <div>
                <span className="font-semibold text-white text-lg">
                  {stat.value}
                </span>
                <span className="text-sm ml-1">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos / Trust Bar */}
        <div className="border-t border-white/5 pt-8">
          <p className="text-xs uppercase tracking-widest text-white/30 mb-6">
            Trusted by creators &amp; brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-40">
            <span className="text-white/40 text-sm font-medium px-4 py-2 border border-white/10 rounded-lg">
              YouTube Creators
            </span>
            <span className="text-white/40 text-sm font-medium px-4 py-2 border border-white/10 rounded-lg">
              Documentary Films
            </span>
            <span className="text-white/40 text-sm font-medium px-4 py-2 border border-white/10 rounded-lg">
              Digital Agencies
            </span>
            <span className="text-white/40 text-sm font-medium px-4 py-2 border border-white/10 rounded-lg">
              Personal Brands
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={20} className="text-white/30" />
      </div>
    </section>
  );
}
