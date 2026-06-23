import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <span className="text-lg font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
              [Your Name]
            </span>
            <p className="text-zinc-500 text-sm mt-2 leading-relaxed">
              Professional video editing services for creators, brands, and
              businesses worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-medium mb-3">Navigate</h4>
            <ul className="space-y-2">
              {["Home", "Work", "Services", "About", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm font-medium mb-3">Services</h4>
            <ul className="space-y-2">
              {[
                "Video Editing",
                "Color Grading",
                "Sound Design",
                "Motion Graphics",
                "YouTube Content",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white text-sm font-medium mb-3">Connect</h4>
            <ul className="space-y-2">
              {[
                ["Instagram", "#"],
                ["LinkedIn", "#"],
                ["YouTube", "#"],
                ["Twitter/X", "#"],
              ].map(([name, url]) => (
                <li key={name}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs">
            © {currentYear} [Your Name]. All rights reserved.
          </p>
          <p className="text-zinc-600 text-xs flex items-center gap-1">
            Crafted with <Heart size={10} className="text-red-500/60" /> for
            storytellers
          </p>
        </div>
      </div>
    </footer>
  );
}
