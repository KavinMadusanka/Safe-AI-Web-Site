export default function Home() {
  const handleNav = (href) => {
    document.getElementById(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.15),transparent_60%)]" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 py-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <span className="text-cyan-400 text-sm font-medium tracking-wide">IT4010 Research Project · SLIIT · 2025</span>
        </div>

        {/* Main title */}
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
          Trusted Framework for
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            AI Code Integration
          </span>
          into Stable Systems
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
          A modular security and trust-enhancement framework that enables the safe integration of
          AI-generated code into existing human-written software systems - making vibe coding
          transparent, verifiable, and secure.
        </p>

        {/* Project ID badge */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["Project ID: 25-26J-461", "SST – Software Systems & Technologies", "Software Engineering (SE)"].map((tag) => (
            <span
              key={tag}
              className="bg-slate-800/60 border border-slate-700/50 text-slate-300 text-xs px-3 py-1.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => handleNav("domain")}
            className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:shadow-cyan-500/40 hover:scale-105"
          >
            Explore Research
          </button>
          <button
            onClick={() => handleNav("documents")}
            className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 text-white font-semibold rounded-xl transition-all duration-200"
          >
            View Documents
          </button>
        </div>
      </div>

      {/* Component cards preview */}
      <div className="relative z-10 mt-20 w-full max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "🔒", title: "Plugin Isolation", desc: "Sandbox enforcement" },
            { icon: "🔐", title: "Secure Auth", desc: "X.509 + JWT trust" },
            { icon: "📊", title: "UML Visualization", desc: "Code explainability" },
            { icon: "🛡️", title: "Secure Generator", desc: "OWASP-compliant AI" },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-slate-900/60 backdrop-blur border border-slate-800/80 hover:border-cyan-500/40 rounded-2xl p-5 text-center transition-all duration-300 hover:bg-slate-900/80 group"
            >
              <div className="text-3xl mb-3">{card.icon}</div>
              <p className="text-white font-semibold text-sm mb-1 group-hover:text-cyan-400 transition-colors">{card.title}</p>
              <p className="text-slate-500 text-xs">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-45 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-50">
        <span className="text-slate-500 text-xs">Scroll to explore</span>
        <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
