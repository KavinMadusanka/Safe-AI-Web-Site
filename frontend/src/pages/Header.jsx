import { Shield } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Domain", href: "#domain" },
  { label: "Milestones", href: "#milestones" },
  { label: "Documents", href: "#documents" },
  { label: "Presentations", href: "#presentations" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-md shadow-lg shadow-cyan-500/10 border-b border-cyan-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
            <span className="text-white font-black text-sm"><Shield /></span>
          </div>
          <div>
            <p className="text-white font-bold text-sm leading-none">Safe AI</p>
            <p className="text-cyan-400 text-xs leading-none mt-0.5">25-26J-461</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === id
                    ? "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-slate-300 hover:text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="lg:hidden bg-slate-950/98 backdrop-blur-md border-t border-cyan-500/20 px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 text-sm font-medium transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
