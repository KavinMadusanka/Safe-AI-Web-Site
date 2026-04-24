const docCategories = [
  {
    category: "Project Charter",
    icon: "📋",
    color: "cyan",
    docs: [
      { name: "Group Project Charter", type: "PDF", file: "#charter-group.pdf", size: "Mock File" },
    ],
  },
  {
    category: "Proposal Documents",
    icon: "📝",
    color: "blue",
    docs: [
      { name: "Group Proposal Document", type: "PDF", file: "#proposal-group.pdf", size: "Mock File" },
      { name: "IT22572042 – Vithana K.M.N. Proposal", type: "PDF", file: "#proposal-vithana.pdf", size: "Mock File" },
      { name: "IT22570444 – Gunawardana M.A.Y.N. Proposal", type: "PDF", file: "#proposal-gunawardana.pdf", size: "Mock File" },
      { name: "IT22232236 – Vithanage V.D.S.I. Proposal", type: "PDF", file: "#proposal-vithanage.pdf", size: "Mock File" },
      { name: "IT22227140 – Prabhasari P.T.P. Proposal", type: "PDF", file: "#proposal-prabhasari.pdf", size: "Mock File" },
    ],
  },
  {
    category: "Checklist Documents",
    icon: "✅",
    color: "green",
    docs: [
      { name: "Topic Assessment Form (TAF_25-26J-461)", type: "PDF", file: "#taf.pdf", size: "Mock File" },
      { name: "IT22572042 – Checklist", type: "PDF", file: "#checklist-vithana.pdf", size: "Mock File" },
      { name: "IT22570444 – Checklist", type: "PDF", file: "#checklist-gunawardana.pdf", size: "Mock File" },
      { name: "IT22232236 – Checklist", type: "PDF", file: "#checklist-vithanage.pdf", size: "Mock File" },
      { name: "IT22227140 – Checklist", type: "PDF", file: "#checklist-prabhasari.pdf", size: "Mock File" },
    ],
  },
  {
    category: "Final Documents",
    icon: "🎓",
    color: "violet",
    docs: [
      { name: "IT22572042 – Final Thesis (Vithana K.M.N.)", type: "PDF", file: "#final-vithana.pdf", size: "Mock File" },
      { name: "IT22570444 – Final Thesis (Gunawardana M.A.Y.N.)", type: "PDF", file: "#final-gunawardana.pdf", size: "Mock File" },
      { name: "IT22232236 – Final Thesis (Vithanage V.D.S.I.)", type: "PDF", file: "#final-vithanage.pdf", size: "Mock File" },
      { name: "IT22227140 – Final Thesis (Prabhasari P.T.P.)", type: "PDF", file: "#final-prabhasari.pdf", size: "Mock File" },
      { name: "Group Final Report", type: "PDF", file: "#final-group.pdf", size: "Mock File" },
    ],
  },
];

const colorMap = {
  cyan: { border: "border-cyan-500/30", icon: "bg-cyan-500/10 text-cyan-400", badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
  blue: { border: "border-blue-500/30", icon: "bg-blue-500/10 text-blue-400", badge: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  green: { border: "border-green-500/30", icon: "bg-green-500/10 text-green-400", badge: "bg-green-500/10 text-green-400 border-green-500/20" },
  violet: { border: "border-violet-500/30", icon: "bg-violet-500/10 text-violet-400", badge: "bg-violet-500/10 text-violet-400 border-violet-500/20" },
};

export default function Documents() {
  return (
    <section id="documents" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Documents
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Project Documents</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            All research documents, reports, checklists, and final submissions. Click any document link to view or download.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {docCategories.map((cat) => {
            const c = colorMap[cat.color];
            return (
              <div
                key={cat.category}
                className={`bg-slate-900/60 border ${c.border} rounded-2xl p-6 hover:bg-slate-900/80 transition-all duration-300`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${c.icon}`}>
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{cat.category}</h3>
                    <p className="text-slate-500 text-xs">{cat.docs.length} document{cat.docs.length !== 1 ? "s" : ""}</p>
                  </div>
                </div>

                {/* Document List */}
                <div className="space-y-2">
                  {cat.docs.map((doc) => (
                    <a
                      key={doc.name}
                      href={doc.file}
                      onClick={(e) => e.preventDefault()}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/40 hover:bg-slate-800/80 border border-transparent hover:border-slate-700/60 transition-all duration-200 group"
                    >
                      {/* File icon */}
                      <div className="w-9 h-9 flex-shrink-0 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                      </div>

                      {/* Name */}
                      <div className="flex-1 min-w-0">
                        <p className="text-slate-300 group-hover:text-white text-sm font-medium truncate transition-colors">
                          {doc.name}
                        </p>
                        <p className="text-slate-600 text-xs">{doc.size}</p>
                      </div>

                      {/* Type badge + download icon */}
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className={`text-xs px-2 py-0.5 rounded border font-mono ${c.badge}`}>{doc.type}</span>
                        <svg className="w-4 h-4 text-slate-600 group-hover:text-slate-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <div className="mt-10 flex items-start gap-3 bg-amber-500/5 border border-amber-500/20 rounded-xl p-4">
          <span className="text-amber-400 text-lg flex-shrink-0">ℹ</span>
          <p className="text-slate-400 text-sm">
            All document links are placeholders. Replace the <code className="text-cyan-400 bg-slate-800 px-1 rounded text-xs">file="#..."</code> values
            in <code className="text-cyan-400 bg-slate-800 px-1 rounded text-xs">Documents.jsx</code> with the actual paths to your uploaded files.
          </p>
        </div>
      </div>
    </section>
  );
}
