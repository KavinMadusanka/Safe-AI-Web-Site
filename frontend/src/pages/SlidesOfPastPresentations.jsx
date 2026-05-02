const presentations = [
  {
    id: 1,
    title: "Project Proposal Presentation",
    date: "Semester 1, 2025",
    status: "available",
    description:
      "Initial proposal slides covering the research problem, objectives, conceptual framework, and methodology for the Trusted Framework for AI Code Integration.",
    slides: { name: "Group Proposal Presentation", file: "#proposal-slides-group.pptx", type: "PPTX" },
    video: { name: "Proposal Presentation Video", file: "#proposal-video.mp4" },
    highlights: ["Problem Statement", "Literature Gap", "Proposed Solution Overview", "Team Roles"],
  },
  {
    id: 2,
    title: "Progress Presentation – 1",
    date: "Semester 1, 2025",
    status: "available",
    description:
      "First progress presentation demonstrating early prototype implementations, literature review findings, and individual component progress.",
    slides: { name: "Group Progress Presentation 1", file: "#pp1-slides-group.pptx", type: "PPTX" },
    video: { name: "Progress Presentation 1 Video", file: "#pp1-video.mp4" },
    highlights: ["System Architecture", "Initial Prototypes", "Preliminary Results", "Next Steps"],
  },
  {
    id: 3,
    title: "Progress Presentation – 2",
    date: "Semester 2, 2025",
    status: "available",
    description:
      "Second progress presentation showcasing advanced implementation, integration between the four framework components, and evaluation results.",
    slides: { name: "Group Progress Presentation 2", file: "#pp2-slides-group.pptx", type: "PPTX" },
    video: { name: "Progress Presentation 2 Video", file: "#pp2-video.mp4" },
    highlights: ["Integration Demo", "Evaluation Metrics", "Security Testing", "Comparative Analysis"],
  },
  {
    id: 4,
    title: "Final Presentation",
    date: "End of Semester 2, 2025",
    status: "upcoming",
    description:
      "Final research presentation covering the complete framework, experimental evaluation, contributions, and future directions.",
    slides: { name: "Group Final Presentation", file: "#final-slides-group.pptx", type: "PPTX" },
    video: { name: "Final Presentation Video", file: "#final-video.mp4" },
    highlights: ["Complete Demo", "Research Outcomes", "Novelty & Contributions", "Q&A Session"],
  },
];

const statusConfig = {
  available: {
    label: "Available",
    classes: "bg-green-500/10 text-green-400 border-green-500/30",
    dot: "bg-green-400",
  },
  upcoming: {
    label: "Upcoming",
    classes: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    dot: "bg-amber-400",
  },
};

export default function SlidesOfPastPresentations() {
  return (
    <section id="presentations" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Presentations
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Slides of Past Presentations</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Presentation slides from all project milestones. Download slides or watch the recorded video for each phase.
          </p>
        </div>

        <div className="space-y-8">
          {presentations.map((pres) => {
            const sc = statusConfig[pres.status];
            const isAvailable = pres.status === "available";

            return (
              <div
                key={pres.id}
                className="bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/25 rounded-2xl overflow-hidden transition-all duration-300"
              >
                {/* Header bar */}
                <div className="flex items-center gap-4 px-6 py-5 border-b border-slate-800/60">
                  <div className="w-12 h-12 flex-shrink-0 bg-slate-800 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-slate-500 text-xs font-mono">Phase {pres.id}</span>
                      <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-0.5 rounded-full border ${sc.classes}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${sc.dot}`} />
                        {sc.label}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-lg">{pres.title}</h3>
                    <p className="text-slate-500 text-sm">📅 {pres.date}</p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 grid md:grid-cols-3 gap-6">
                  {/* Description + highlights */}
                  <div className="md:col-span-1">
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{pres.description}</p>
                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">Key Topics</p>
                    <div className="flex flex-wrap gap-2">
                      {pres.highlights.map((h) => (
                        <span
                          key={h}
                          className="bg-slate-800/60 border border-slate-700/50 text-slate-400 text-xs px-2.5 py-1 rounded-lg"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Downloads: slide + video */}
                  <div className="md:col-span-2 flex flex-col gap-3">
                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Downloads</p>

                    {/* Slide */}
                    <a
                      href={isAvailable ? pres.slides.file : undefined}
                      target={isAvailable ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 group ${
                        isAvailable
                          ? "bg-slate-800/40 border-slate-700/50 hover:border-cyan-500/40 hover:bg-slate-800/80 cursor-pointer"
                          : "bg-slate-800/20 border-slate-800/40 opacity-50 cursor-not-allowed pointer-events-none"
                      }`}
                    >
                      <div className="w-10 h-10 flex-shrink-0 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-semibold">{pres.slides.name}</p>
                        <p className="text-slate-500 text-xs mt-0.5">{pres.slides.type} · Presentation Slides</p>
                      </div>
                      {isAvailable && (
                        <svg className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      )}
                    </a>

                    {/* Video */}
                    <a
                      href={isAvailable ? pres.video.file : undefined}
                      target={isAvailable ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 group ${
                        isAvailable
                          ? "bg-slate-800/40 border-slate-700/50 hover:border-violet-500/40 hover:bg-slate-800/80 cursor-pointer"
                          : "bg-slate-800/20 border-slate-800/40 opacity-50 cursor-not-allowed pointer-events-none"
                      }`}
                    >
                      <div className="w-10 h-10 flex-shrink-0 bg-violet-500/10 border border-violet-500/20 rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.277A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-semibold">{pres.video.name}</p>
                        <p className="text-slate-500 text-xs mt-0.5">MP4 · Recorded Presentation</p>
                      </div>
                      {isAvailable && (
                        <svg className="w-4 h-4 text-slate-600 group-hover:text-violet-400 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      )}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <div className="mt-10 flex items-start gap-3 bg-amber-500/5 border border-amber-500/20 rounded-xl p-4">
          <span className="text-amber-400 text-lg flex-shrink-0">ℹ</span>
          <p className="text-slate-400 text-sm">
            Slides and videos marked as <strong className="text-amber-400">Upcoming</strong> will be added after the respective presentation.
            Replace placeholder <code className="text-cyan-400 bg-slate-800 px-1 rounded text-xs">file="#..."</code> values
            in <code className="text-cyan-400 bg-slate-800 px-1 rounded text-xs">SlidesOfPastPresentations.jsx</code> with real file paths or URLs.
          </p>
        </div>
      </div>
    </section>
  );
}