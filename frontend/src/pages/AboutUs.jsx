const members = [
  {
    name: "Vithana K.M.N.",
    id: "IT22572042",
    role: "Secure Plugin Isolation & Interface Enforcement",
    specialization: "Software Engineering (SE)",
    email: "it22572042@my.sliit.lk",
    avatar: "VK",
    color: "cyan",
    component: "Component 1",
    abstract:
      "Designed and implemented a two-tier defense framework combining strict API interface enforcement with Docker-based sandbox execution. Introduced real-time behavior monitoring and automatic quarantine mechanisms to protect the core system from misbehaving AI-generated plugins.",
    technologies: ["FastAPI", "Docker", "WebAssembly", "React.js", "Python"],
  },
  {
    name: "Gunawardana M.A.Y.N.",
    id: "IT22570444",
    role: "Secure Communication & Authentication Mechanism",
    specialization: "Software Engineering (SE)",
    email: "it22570444@my.sliit.lk",
    avatar: "GM",
    color: "blue",
    component: "Component 2",
    abstract:
      "Built an adaptive trust scoring and dynamic behavior monitoring system for plugin-core architectures. Each plugin receives a unique X.509 cryptographic identity; access is enforced via intent-bound JWTs and a live ABAC policy engine with TLS 1.3 encryption.",
    technologies: ["X.509 / PKI", "JWT", "Open Policy Agent", "TLS 1.3", "AES-256"],
  },
  {
    name: "Vithanage V.D.S.I.",
    id: "IT22232236",
    role: "Automated UML Code Visualization Engine",
    specialization: "Software Engineering (SE)",
    email: "it22232236@my.sliit.lk",
    avatar: "VV",
    color: "violet",
    component: "Component 3",
    abstract:
      "Developed a dual-mode code-to-diagram engine that translates AI-generated code into UML diagrams in real time. Supports Java, Python, TypeScript, and JavaScript via both Gemini LLM-based and regex/AST-based parsing pipelines, producing 5 diagram types through PlantUML.",
    technologies: ["Gemini LLM", "PlantUML", "NetworkX", "Python", "React.js"],
  },
  {
    name: "Prabhasari P.T.P.",
    id: "IT22227140",
    role: "Secure-by-Design AI Code Generator",
    specialization: "Software Engineering (SE)",
    email: "it22227140@my.sliit.lk",
    avatar: "PP",
    color: "green",
    component: "Component 4",
    abstract:
      "Created a multi-layered security pipeline for AI code generation: OWASP-enhanced prompt engineering, real-time static analysis, Docker sandbox runtime evaluation, and automated secure snippet replacement. Integrates with OpenAI GPT-4 and Hugging Face APIs.",
    technologies: ["OpenAI GPT-4", "Docker", "OWASP Top 10", "Snyk API", "NVD"],
  },
];

const colorMap = {
  cyan: {
    avatar: "from-cyan-400 to-cyan-600",
    border: "border-cyan-500/30",
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    tag: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
  },
  blue: {
    avatar: "from-blue-400 to-blue-600",
    border: "border-blue-500/30",
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    tag: "bg-blue-500/10 border-blue-500/20 text-blue-300",
  },
  violet: {
    avatar: "from-violet-400 to-violet-600",
    border: "border-violet-500/30",
    badge: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    tag: "bg-violet-500/10 border-violet-500/20 text-violet-300",
  },
  green: {
    avatar: "from-green-400 to-green-600",
    border: "border-green-500/30",
    badge: "bg-green-500/10 text-green-400 border-green-500/20",
    tag: "bg-green-500/10 border-green-500/20 text-green-300",
  },
};

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Meet the Research Team</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Four undergraduate researchers from the Department of Information Technology, SLIIT, collaborating on a trusted
            framework for secure AI-assisted software development.
          </p>
        </div>

        {/* Project info strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            { label: "Project ID", value: "25-26J-461" },
            { label: "Research Group", value: "SST" },
            { label: "Specialization", value: "Software Engineering" },
            { label: "Supervisor", value: "Mr. Vishan Jayasinghearachchi" },
          ].map((info) => (
            <div key={info.label} className="bg-slate-900/60 border border-slate-800/60 rounded-xl p-4 text-center">
              <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">{info.label}</p>
              <p className="text-white font-semibold text-sm">{info.value}</p>
            </div>
          ))}
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-8">
          {members.map((member) => {
            const c = colorMap[member.color];
            return (
              <div
                key={member.id}
                className={`bg-slate-900/60 border ${c.border} rounded-2xl p-6 hover:bg-slate-900/80 transition-all duration-300`}
              >
                {/* Avatar + identity */}
                <div className="flex items-start gap-4 mb-5">
                  <div className={`w-14 h-14 flex-shrink-0 rounded-2xl bg-gradient-to-br ${c.avatar} flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-black text-lg">{member.avatar}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-tight">{member.name}</h3>
                    <p className="text-slate-500 text-sm font-mono">{member.id}</p>
                    <span className={`inline-block mt-1 text-xs px-2.5 py-0.5 rounded-full border ${c.badge}`}>
                      {member.component}
                    </span>
                  </div>
                </div>

                {/* Role */}
                <div className="mb-4">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Research Component</p>
                  <p className="text-white font-semibold text-sm">{member.role}</p>
                </div>

                {/* Abstract */}
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{member.abstract}</p>

                {/* Technologies */}
                <div className="mb-4">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Key Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {member.technologies.map((tech) => (
                      <span key={tech} className={`text-xs px-2.5 py-1 rounded-lg border ${c.tag}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="pt-4 border-t border-slate-800/60">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm group"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="group-hover:underline">{member.email}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supervisors */}
        <div className="mt-14">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Supervisors</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                name: "Mr. Vishan Jayasinghearachchi",
                role: "Supervisor",
                dept: "Department of Information Technology, SLIIT",
              },
              {
                name: "Ms. Poojani Gunathilake",
                role: "Co-Supervisor",
                dept: "Department of Information Technology, SLIIT",
              },
            ].map((sup) => (
              <div
                key={sup.name}
                className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-5 flex items-center gap-4"
              >
                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center">
                  <svg className="w-6 h-6 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">{sup.name}</p>
                  <p className="text-cyan-400 text-sm">{sup.role}</p>
                  <p className="text-slate-500 text-xs">{sup.dept}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
