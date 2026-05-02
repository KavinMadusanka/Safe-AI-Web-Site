const docCategories = [
  {
    category: "Project Charter",
    icon: "📋",
    color: "cyan",
    docs: [
      {
        name: "Group Project Charter",
        type: "PDF",
        file: "#charter-group.pdf",
        size: "Mock File",
      },
    ],
  },
  {
    category: "Proposal Documents",
    icon: "📝",
    color: "blue",
    docs: [
      {
        name: "IT22572042 – Vithana K.M.N. Proposal",
        type: "PDF",
        file: "#proposal-vithana.pdf",
        size: "Mock File",
      },
      {
        name: "IT22570444 – Gunawardana M.A.Y.N. Proposal",
        type: "PDF",
        file: "#proposal-gunawardana.pdf",
        size: "Mock File",
      },

      {
        name: "Automated UML Code Visualization Proposal - Vithanage V.D.S.I",
        type: "PDF",
        file: "https://mysliit-my.sharepoint.com/:b:/g/personal/it22232236_my_sliit_lk/IQDm90Pcw-jZRaxudn0NijQFAbFt-A8G0N3DVDZ0RCzmjaY?e=O48m3x",
        size: "Online File",
      },

      {
        name: "IT22227140 – Prabhasari P.T.P. Proposal",
        type: "PDF",
        file: "#proposal-prabhasari.pdf",
        size: "Mock File",
      },
    ],
  },
  {
    category: "Checklist Documents",
    icon: "✅",
    color: "green",
    docs: [
      { name: "Checklist 1", type: "PDF", file: "#checklist-vithana.pdf", size: "Mock File" },
      { name: "Checklist 2", type: "PDF", file: "#checklist-gunawardana.pdf", size: "Mock File" },
      { name: "Checklist 3", type: "PDF", file: "#checklist-vithanage.pdf", size: "Mock File" },
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

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Project Documents
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Click any document to view or download.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {docCategories.map((cat) => {
            const c = colorMap[cat.color];

            return (
              <div
                key={cat.category}
                className={`bg-slate-900/60 border ${c.border} rounded-2xl p-6`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${c.icon}`}>
                    {cat.icon}
                  </div>
                  <h3 className="text-white font-bold">{cat.category}</h3>
                </div>

                {/* Documents */}
                <div className="space-y-2">
                  {cat.docs.map((doc) => (
                    <a
                      key={doc.name}
                      href={doc.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
                    >
                      <div className="flex-1">
                        <p className="text-slate-300">{doc.name}</p>
                        <p className="text-xs text-slate-500">{doc.size}</p>
                      </div>

                      <span className={`text-xs px-2 py-1 rounded ${c.badge}`}>
                        {doc.type}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}