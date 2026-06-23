import { Mail, MessageSquare, Calendar, Send, MapPin, Clock, CheckCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 sm:py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-amber-400 text-sm font-medium uppercase tracking-widest">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Ready to Elevate{" "}
            <span className="text-amber-400">Your Content?</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Tell me about your project and I'll get back to you within 24 hours
            with a custom quote. Let's make something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact Info - Left */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-amber-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">Email</h4>
                  <p className="text-zinc-400 text-sm mt-0.5">
                    hello@yourname.com
                  </p>
                  <p className="text-zinc-500 text-xs mt-1">
                    Response within 12 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/10 flex items-center justify-center shrink-0">
                  <MessageSquare size={18} className="text-amber-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">WhatsApp</h4>
                  <p className="text-zinc-400 text-sm mt-0.5">
                    +91 98765 43210
                  </p>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 text-sm transition-colors inline-flex items-center gap-1 mt-1"
                  >
                    Chat on WhatsApp →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/10 flex items-center justify-center shrink-0">
                  <Calendar size={18} className="text-amber-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">
                    Book a Call
                  </h4>
                  <p className="text-zinc-400 text-sm mt-0.5">
                    Let's discuss your project
                  </p>
                  <a
                    href="https://calendly.com/yourhandle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 text-sm transition-colors inline-flex items-center gap-1 mt-1"
                  >
                    Schedule a free consultation →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-amber-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">Location</h4>
                  <p className="text-zinc-400 text-sm mt-0.5">
                    Remote — Available Worldwide
                  </p>
                  <p className="text-zinc-500 text-xs mt-1">
                    Timezone: IST (UTC+5:30)
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Response Guarantee */}
            <div className="p-5 rounded-xl bg-zinc-900/50 border border-white/5">
              <div className="flex items-center gap-2 mb-3">
                <Clock size={16} className="text-amber-400" />
                <span className="text-white text-sm font-medium">
                  Quick Response Guarantee
                </span>
              </div>
              <div className="space-y-2">
                {[
                  "Email replies within 12 hours",
                  "WhatsApp responses within 2 hours",
                  "Project quotes within 24 hours",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-zinc-400">
                    <CheckCircle size={12} className="text-amber-400/70 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Proof */}
            <div className="border-t border-white/5 pt-6">
              <p className="text-xs uppercase tracking-widest text-white/30 mb-4">
                Also find me on
              </p>
              <div className="flex gap-3">
                {["Instagram", "LinkedIn", "YouTube", "Twitter/X"].map(
                  (platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs text-zinc-400 hover:text-white hover:border-white/20 transition-all"
                    >
                      {platform}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Contact Form - Right */}
          <div className="lg:col-span-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);
                const data = {
                  name: formData.get("name"),
                  email: formData.get("email"),
                  project: formData.get("project"),
                  budget: formData.get("budget"),
                  message: formData.get("message"),
                };
                
                // Mailto fallback
                const subject = encodeURIComponent(
                  `Project Inquiry from ${data.name}`
                );
                const body = encodeURIComponent(
                  `Name: ${data.name}\nEmail: ${data.email}\nProject Type: ${data.project}\nBudget Range: ${data.budget}\n\nMessage:\n${data.message}`
                );
                window.location.href = `mailto:hello@yourname.com?subject=${subject}&body=${body}`;
                
                // Also open WhatsApp
                const whatsappMsg = encodeURIComponent(
                  `Hi! I'm ${data.name}. I'm interested in video editing services.\n\nProject Type: ${data.project}\nBudget: ${data.budget}\n\n${data.message}`
                );
                window.open(
                  `https://wa.me/919876543210?text=${whatsappMsg}`,
                  "_blank"
                );
              }}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-zinc-300 mb-1.5"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="e.g. Raj Patel"
                    className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-white/10 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-zinc-300 mb-1.5"
                  >
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-white/10 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="project"
                    className="block text-sm text-zinc-300 mb-1.5"
                  >
                    Project Type *
                  </label>
                  <select
                    id="project"
                    name="project"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all"
                  >
                    <option value="">Select...</option>
                    <option value="youtube">YouTube Video</option>
                    <option value="documentary">Documentary / Film</option>
                    <option value="commercial">Commercial / Brand Film</option>
                    <option value="shorts">Shorts / Reels</option>
                    <option value="motion">Motion Graphics</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm text-zinc-300 mb-1.5"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all"
                  >
                    <option value="">Select...</option>
                    <option value="5000-10000">₹5,000 - ₹10,000</option>
                    <option value="10000-25000">₹10,000 - ₹25,000</option>
                    <option value="25000-50000">₹25,000 - ₹50,000</option>
                    <option value="50000+">₹50,000+</option>
                    <option value="tell">Let's discuss</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-zinc-300 mb-1.5"
                >
                  Tell Me About Your Project *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Describe your project, vision, timeline, and any specific requirements..."
                  className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-white/10 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-950 font-semibold text-base hover:shadow-xl hover:shadow-amber-500/25 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={16} />
                Send Inquiry — We'll Connect on WhatsApp & Email
              </button>

              <p className="text-xs text-zinc-500 text-center">
                By submitting, you agree that I'll respond via email and
                WhatsApp. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
