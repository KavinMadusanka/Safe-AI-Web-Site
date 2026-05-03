const docCategories = [
  {
    category: "TAF",
    icon: "📋",
    color: "cyan",
    docs: [
      {
        name: "TAF Document",
        type: "PDF",
        file: "https://mysliit-my.sharepoint.com/:b:/g/personal/it22232236_my_sliit_lk/IQBn87Hz__5gR4LeuDsLqCZvASxKFLWcWJDwzIF-2jPsMdU?e=H1PBX7",
        size: "Online File",
      },
    ],
  },
  {
    category: "Proposal Documents",
    icon: "📝",
    color: "blue",
    docs: [
      {
        name: "Secure Plugin Isolation & Interface Enforcement Proposal – Vithana K.M.N.",
        type: "PDF",
        file: "https://mysliit-my.sharepoint.com/:b:/g/personal/it22570444_my_sliit_lk/IQC4QHViCaO9RIuX7Bqm5YG7ATdk15jfVvS0X3Uo22a7gOU?e=0UdCfb",
        size: "Online File",
      },
      {
        name: "Secure Communication & Authentication Mechanism – Gunawardana M.A.Y.N.",
        type: "PDF",
        file: "https://mysliit-my.sharepoint.com/:b:/g/personal/it22570444_my_sliit_lk/IQAN0eBNmOP6Qpul_UB8DzAsAcFl-t984nzu3ItzJso0WKQ?e=mMUTwc",
        size: "Online File",
      },

      {
        name: "Automated UML Code Visualization Proposal - Vithanage V.D.S.I",
        type: "PDF",
        file: "https://mysliit-my.sharepoint.com/:b:/g/personal/it22232236_my_sliit_lk/IQDm90Pcw-jZRaxudn0NijQFAbFt-A8G0N3DVDZ0RCzmjaY?e=O48m3x",
        size: "Online File",
      },

      {
        name: "Secure By Design AI Code Generator – Prabhasari P.T.P.",
        type: "PDF",
        file: "https://mysliit-my.sharepoint.com/:b:/g/personal/it22227140_my_sliit_lk/IQCT0gDxtK1hQ7tvdwNmFNpKAW1KJaRJEay0qI-9cCjWhSk?e=Je7YPl",
        size: "Online File",
      },
    ],
  },
  {
    category: "Checklist Documents",
    icon: "✅",
    color: "green",
    docs: [
      { 
        name: "Checklist 1", 
        type: "PDF", 
        file: "https://mysliit-my.sharepoint.com/:b:/g/personal/it22232236_my_sliit_lk/IQAyGs-i33DjTY-9tQhY9tEsAcJplq88rv4sRNizXTqSIuM?e=ufxeHn", 
        size: "Online File" 
      },
      { name: "Checklist 2", 
        type: "PDF", 
        file: "https://mysliit-my.sharepoint.com/:v:/g/personal/it22227140_my_sliit_lk/IQAO68WPI1vPRIAbptGawQzeAVyv32H7KP9r6LerSIq_xcY?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=EUI6Oy", 
        size: "Online File" 
      },
      { name: "Checklist 3", 
        type: "PDF", 
        file: "https://mysliit-my.sharepoint.com/:b:/g/personal/it22227140_my_sliit_lk/IQAd2pFyhbDVRpYNhj_BEUlAAUE42s9dSvJQAa2Rw0Eirkk?e=7bqNTe", 
        size: "Online File" },
    ],
  },
  {
    category: "Final Thesis",
    icon: "🎓",
    color: "violet",
    docs: [
      { name: "Secure Plugin Isolation & Interface Enforcement Proposal – Vithana K.M.N.", 
        type: "PDF", 
        file: "https://mysliit-my.sharepoint.com/:b:/g/personal/it22570444_my_sliit_lk/IQDW8rFQ1_VpQ67K5kCEo0LTAfjgNsK8J3wO9R-BNeX9h5M?e=Rak7sK", 
        size: "Online File" },
      { name: "Secure Communication & Authentication Mechanism - Gunawardana M.A.Y.N.", 
        type: "PDF", 
        file: "https://mysliit-my.sharepoint.com/:b:/g/personal/it22570444_my_sliit_lk/IQDg7T8hbsqpR5I5RwyfzDgiAeasB3AKT7Ag8W1THLlRPHE?e=YIk8TE", 
        size: "Online File" },
      { name: "Automated UML Code Visualization Proposal - Vithanage V.D.S.I.", 
        type: "PDF", 
        file: "https://mysliit-my.sharepoint.com/:w:/g/personal/it22232236_my_sliit_lk/IQAjllpoBHdpRLkzrGd4RqBjAdO9puUPtmCs-_rg2Zar0jU?e=dkPMGW", 
        size: "Online File" },
      { name: "Secure By Design AI Code Generator - Prabhasari P.T.P.", 
        type: "PDF", 
        file: "#final-prabhasari.pdf", 
        size: "Online File" },
      { name: "Group Final Thesis", 
        type: "PDF", 
        file: "#final-group.pdf", 
        size: "Online File" },
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