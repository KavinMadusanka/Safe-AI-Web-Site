const milestones = [
    {
    id: 1,
    phase: "TAF",
    title: "TAF",
    date: "2025 – Semester 1",
    status: "completed",
    description:
      "Initial project topic assessment submission and approval process.",
    documents: [
      { name: "TAF Document", file: "#proposal-group.pdf" },
    ],
  },
  {
    id: 2,
    phase: "Proposal",
    title: "Project Proposal",
    date: "2025 – Oct",
    marks: "Marks Allocated: 10%",
    status: "completed",
    description:
      "Initial project proposal outlining the research problem, objectives, methodology, and expected contributions of the Trusted Framework for AI Code Integration.",
    documents: [
      { name: "Group Proposal Document", file: "#proposal-group.pdf" },
      { name: "IT22572042 – Vithana K.M.N. Proposal", file: "#proposal-vithana.pdf" },
      { name: "IT22570444 – Gunawardana M.A.Y.N. Proposal", file: "#proposal-gunawardana.pdf" },
      { name: "IT22232236 – Vithanage V.D.S.I. Proposal", file: "#proposal-vithanage.pdf" },
      { name: "IT22227140 – Prabhasari P.T.P. Proposal", file: "#proposal-prabhasari.pdf" },
    ],
  },
  {
    id: 3,
    phase: "Progress 1",
    title: "Progress Presentation – 1",
    date: "2026 – jan",
    marks: "Marks Allocated: 15%",
    status: "completed",
    description:
      "First progress presentation demonstrating the initial prototype, literature review findings, and preliminary implementation results for each individual component.",
    documents: [
      { name: "Group Progress Presentation 1 Slides", file: "#pp1-slides.pptx" },
      { name: "IT22572042 – Progress Report 1", file: "#pp1-vithana.pdf" },
      { name: "IT22570444 – Progress Report 1", file: "#pp1-gunawardana.pdf" },
      { name: "IT22232236 – Progress Report 1", file: "#pp1-vithanage.pdf" },
      { name: "IT22227140 – Progress Report 1", file: "#pp1-prabhasari.pdf" },
    ],
  },
  {
    id: 4,
    phase: "Progress 2",
    title: "Progress Presentation – 2",
    date: "2026/04/30",
    marks: "Marks Allocated: 20%",
    status: "completed",
    description:
      "Second progress presentation showcasing advanced implementation, integration between components, evaluation results, and refined methodology.",
    documents: [
      { name: "Group Progress Presentation 2 Slides", file: "#pp2-slides.pptx" },
      { name: "IT22572042 – Progress Report 2", file: "#pp2-vithana.pdf" },
      { name: "IT22570444 – Progress Report 2", file: "#pp2-gunawardana.pdf" },
      { name: "IT22232236 – Progress Report 2", file: "#pp2-vithanage.pdf" },
      { name: "IT22227140 – Progress Report 2", file: "#pp2-prabhasari.pdf" },
    ],
  },
  {
    id: 5,
    phase: "Final",
    title: "Final Assessment",
    date: "2026/05/05",
    marks: "Marks Allocated: 40%",
    status: "ongoing",
    description:
      "Final assessment including complete dissertation submission, research paper, and demonstration of the fully integrated Trusted Framework prototype.",
    documents: [
      { name: "IT22572042 – Final Thesis (Vithana K.M.N.)", file: "#final-vithana.pdf" },
      { name: "IT22570444 – Final Thesis (Gunawardana M.A.Y.N.)", file: "#final-gunawardana.pdf" },
      { name: "IT22232236 – Final Thesis (Vithanage V.D.S.I.)", file: "#final-vithanage.pdf" },
      { name: "IT22227140 – Final Thesis (Prabhasari P.T.P.)", file: "#final-prabhasari.pdf" },
    ],
  },
  // {
  //   id: 5,
  //   phase: "Viva",
  //   title: "Viva Voce",
  //   date: "2025 – TBD",
  //   marks: "Marks Allocated: 15%",
  //   status: "upcoming",
  //   description:
  //     "Individual oral examination where each student defends their research component, methodology, and findings before the evaluation panel.",
  //   documents: [],
  // },
  {
    id: 6,
    phase: "Checklists",
    title: "Checklists & Other Documents",
    date: "2026/04/30",
    marks: "",
    status: "completed",
    description:
      "All checklist documents, topic assessment form, and administrative submissions required throughout the research project lifecycle.",
    documents: [
      { name: "Project Charter", file: "#charter.pdf" },
      { name: "Ethical Clearance Form", file: "#ethics.pdf" },
      { name: "Supervisor Meeting Log", file: "#meeting-log.pdf" },
    ],
  },
];

const statusConfig = {
  completed: { label: "Completed", color: "text-green-400", bg: "bg-green-500/10 border-green-500/30", dot: "bg-green-400" },
  upcoming: { label: "Upcoming", color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/30", dot: "bg-amber-400" },
  ongoing: { label: "Ongoing", color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/30", dot: "bg-blue-400 animate-pulse" },
};

export default function Milestones() {
  return (
    <section id="milestones" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Milestones
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Project Milestones</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            All key assessments, deliverables, and checkpoints throughout the IT4010 Research Project lifecycle.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-slate-700/50 to-transparent md:-translate-x-0.5" />

          <div className="space-y-12">
            {milestones.map((ms, i) => {
              const sc = statusConfig[ms.status];
              const isRight = i % 2 === 0;
              return (
                <div key={ms.id} className={`relative flex flex-col md:flex-row gap-8 ${isRight ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 top-6 w-3 h-3 rounded-full bg-cyan-400 border-4 border-slate-900 -translate-x-1.5 md:-translate-x-1.5 z-10" />

                  {/* Spacer */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div className="ml-14 md:ml-0 md:w-1/2 md:px-8">
                    <div className="bg-slate-950/80 border border-slate-800/80 hover:border-cyan-500/30 rounded-2xl p-6 transition-all duration-300">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="bg-slate-800 text-slate-400 text-xs px-2 py-0.5 rounded-md font-mono">
                              Phase {ms.id}
                            </span>
                            <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-0.5 rounded-full border ${sc.bg} ${sc.color}`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${sc.dot}`} />
                              {sc.label}
                            </span>
                          </div>
                          <h3 className="text-white font-bold text-lg">{ms.title}</h3>
                        </div>
                      </div>

                      <div className="flex gap-4 text-xs text-slate-500 mb-3">
                        <span>📅 {ms.date}</span>
                        {ms.marks && <span>📊 {ms.marks}</span>}
                      </div>

                      <p className="text-slate-400 text-sm leading-relaxed mb-4">{ms.description}</p>

                      {/* Documents */}
                      {/* {ms.documents.length > 0 && (
                        <div>
                          <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">Documents</p>
                          <div className="space-y-1.5">
                            {ms.documents.map((doc) => (
                              <a
                                key={doc.name}
                                href={doc.file}
                                className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors group"
                                onClick={(e) => e.preventDefault()}
                              >
                                <svg className="w-4 h-4 flex-shrink-0 text-slate-600 group-hover:text-cyan-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span>{doc.name}</span>
                                <span className="text-slate-600 text-xs ml-auto group-hover:text-cyan-600">↗</span>
                              </a>
                            ))}
                          </div>
                        </div>
                      )} */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
