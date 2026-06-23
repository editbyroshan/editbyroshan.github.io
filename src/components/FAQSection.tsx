import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils/cn";

const faqs = [
  {
    q: "How do you price your video editing services?",
    a: "My pricing depends on the type of project, complexity, and length. I offer three packages — Starter (₹5,000), Professional (₹15,000), and Premium (₹35,000+) — to suit different needs. Every project gets a custom quote after I understand your requirements.",
  },
  {
    q: "What information do you need from me to start?",
    a: "I need your raw footage, a brief about the project/vision, any reference videos or styles you like, brand guidelines (if applicable), music preferences, and a rough script or outline if you have one. The more context, the better the first draft!",
  },
  {
    q: "How long does a typical project take?",
    a: "YouTube videos typically take 2-4 business days. Documentaries and longer projects take 5-10 business days depending on length. Shorts and reels can be turned around in 24-48 hours. Rush delivery is available at a premium.",
  },
  {
    q: "Do you offer revisions?",
    a: "Yes! All packages include revisions. Starter includes 1 revision, Professional includes 3, and Premium includes unlimited revisions until you're completely satisfied.",
  },
  {
    q: "What if I don't have a big budget yet?",
    a: "I believe in growing together. I offer the Starter package at ₹5,000 specifically for creators who are just starting out. Quality doesn't have to be expensive. Reach out and we'll find a solution that works for both of us.",
  },
  {
    q: "Can you edit in Hindi / regional languages?",
    a: "Yes! I'm fluent in Hindi and English. I can work with bilingual content, add Hindi subtitles, and handle regional language projects seamlessly.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 sm:py-32 bg-zinc-900/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-amber-400 text-sm font-medium uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Got <span className="text-amber-400">Questions?</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Everything you need to know before we start working together.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl bg-zinc-900/50 border border-white/5 overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-white text-sm sm:text-base font-medium pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  size={16}
                  className={cn(
                    "text-zinc-500 shrink-0 transition-transform duration-300",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-all duration-300",
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-zinc-400 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
