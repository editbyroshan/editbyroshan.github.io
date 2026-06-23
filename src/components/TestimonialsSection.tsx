import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Working with [Name] was a game-changer for our channel. Our retention rate jumped by 40% after he re-edited our videos. The storytelling and pacing are next level.",
    author: "Alex Chen",
    role: "Tech YouTuber • 500K+ Subscribers",
  },
  {
    quote:
      "The color grading alone transformed our documentary. What was flat and amateur now looks cinematic. [Name] understood our vision from day one.",
    author: "Priya Sharma",
    role: "Documentary Filmmaker",
  },
  {
    quote:
      "We've worked with multiple editors, but [Name] is the first who truly understood brand storytelling. Our client was blown away by the final film.",
    author: "Marcus Johnson",
    role: "Creative Director • Studio Eleven",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-20 sm:py-32 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-amber-400 text-sm font-medium uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            What Clients{" "}
            <span className="text-amber-400">Say About Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="relative rounded-xl bg-zinc-900/70 border border-white/5 p-6 sm:p-8"
            >
              <Quote
                size={32}
                className="text-amber-400/10 absolute top-6 right-6"
              />
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="text-white font-medium text-sm">{t.author}</p>
                <p className="text-zinc-500 text-xs mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
