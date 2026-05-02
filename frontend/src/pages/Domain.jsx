const SectionTitle = ({ label, title, subtitle }) => (
  <div className="text-center mb-14">
    <span className="inline-block bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
      {label}
    </span>
    <h2 className="text-3xl md:text-4xl font-black text-white mb-4">{title}</h2>
    {subtitle && <p className="text-slate-400 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const Card = ({ children, className = "" }) => (
  <div className={`bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 ${className}`}>
    {children}
  </div>
);

export default function Domain() {
  const gaps = [
    "Hardcoded credentials and exposed secrets in AI-generated code",
    "Unsafe default configurations (open CORS policies, debug modes enabled)",
    "Weak authentication - missing password hashing and session expiration",
    "Unsanitized inputs leading to SQL injection and command injection attacks",
    "Outdated or insecure third-party library dependencies",
    "Lack of explainability - developers adopt code they don't fully understand",
  ];

  const objectives = [
    {
      icon: "🏗️",
      member: "Vithana K.M.N. - IT22572042",
      title: "Secure Plugin Isolation & Interface Enforcement",
      desc: "Combines strict interface enforcement with isolated Docker/WebAssembly sandbox execution, forming a two-tier defense. Includes real-time behavior monitoring with automatic quarantine to block misbehaving plugins during execution.",
    },
    {
      icon: "🔐",
      member: "Gunawardana M.A.Y.N. - IT22570444",
      title: "Secure Communication & Authentication Mechanism",
      desc: "Intent-bound, trust-scored JWTs with behavior-aware ABAC that reacts in real time to plugin anomalies. Risk-scoped encryption adapts dynamically to plugin trustworthiness using TLS 1.3 and AES-256.",
    },
    {
      icon: "📐",
      member: "Vithanage V.D.S.I. - IT22232236",
      title: "Automated UML Code Visualization",
      desc: "Dual-mode code-to-diagram engine translating AI-generated code into PlantUML diagrams using both AI-based (Gemini LLM) and regex-based methods. Supports Java, Python, TypeScript, and JavaScript with five diagram types.",
    },
    {
      icon: "🛡️",
      member: "Prabhasari P.T.P. - IT22227140",
      title: "Secure-by-Design AI Code Generator",
      desc: "Actively prevents vulnerabilities during code generation by combining secure prompt engineering, real-time static analysis (OWASP Top 10), Docker sandbox runtime analysis, and automated secure snippet replacement.",
    },
  ];

  const technologies = [
    "React.js", "FastAPI", "Docker", "OpenAI GPT-4", "Gemini LLM",
    "PlantUML", "X.509 / PKI", "JWT", "Open Policy Agent", "Snyk API", "NVD",
    "TLS 1.3", "AES-256", "NetworkX", "Python", "Node.js",
  ];

  return (
    <section id="domain" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          label="Domain"
          title="Research Domain"
          subtitle="Exploring the critical risks of vibe coding and proposing a holistic, modular framework for secure AI-code integration."
        />

        {/* Literature Survey */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-cyan-400 rounded-full" />
            Literature Survey
          </h3>
          <Card>
            <p className="text-slate-300 leading-relaxed mb-4">
              Vibe coding is a modern approach where developers use AI tools such as ChatGPT and GitHub Copilot to generate
              code through natural language prompts. While this significantly improves productivity and helps beginners quickly
              build prototypes, it introduces several critical risks that threaten software quality, security, and reliability -
              especially when integrating AI-generated code into existing, stable software systems.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Many developers attempt to integrate AI-suggested code into existing systems without fully understanding its
              function, assumptions, or security implications. This practice creates a <span className="text-cyan-400 font-semibold">trust gap</span> between
              what AI generates and what is ultimately deployed.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Current AI tools make it difficult for developers to confidently validate or review generated code before
              integration. This lack of transparency poses serious risks to software reliability, especially when secure,
              human-written systems are augmented with AI-generated components.
            </p>
          </Card>
        </div>

        {/* Research Gap */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-violet-400 rounded-full" />
            Research Gap & Critical Challenges
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {gaps.map((gap, i) => (
              <div key={i} className="flex items-start gap-3 bg-slate-900/40 border border-slate-800/60 rounded-xl p-4 hover:border-red-500/30 transition-all">
                <span className="mt-0.5 text-red-400 text-lg flex-shrink-0">⚠</span>
                <p className="text-slate-300 text-sm">{gap}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Research Problem */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-blue-400 rounded-full" />
            Research Problem
          </h3>
          <Card className="border-blue-500/30 bg-blue-500/5">
            <p className="text-slate-200 leading-relaxed text-lg">
              How can a modular, security-aware framework be designed to enable the safe, transparent, and verifiable
              integration of AI-generated code into existing stable software systems - bridging the trust gap between
              rapid AI-assisted development and professional-grade software quality?
            </p>
          </Card>
        </div>

        {/* Main Objective */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-green-400 rounded-full" />
            Main Objective
          </h3>
          <Card className="border-green-500/20 bg-green-500/5 mb-8">
            <p className="text-slate-200 leading-relaxed">
              To design and implement a secure and developer-friendly framework for integrating AI-generated code into
              existing software systems, while enhancing transparency, trust, and maintainability. The system aims to
              automatically identify potential risks, explain AI-generated code using visual UML representations, and
              provide safeguards to ensure safe integration into human-written codebases.
            </p>
          </Card>
        </div>

        {/* Research Objectives */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-cyan-400 rounded-full" />
            Research Objectives
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {objectives.map((obj, i) => (
              <Card key={i} className="hover:shadow-lg hover:shadow-cyan-500/5">
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{obj.icon}</span>
                  <div>
                    <p className="text-cyan-400 text-xs font-medium mb-1">{obj.member}</p>
                    <h4 className="text-white font-bold mb-2">{obj.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{obj.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Methodology */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-amber-400 rounded-full" />
            Methodology
          </h3>
          <Card>
            <p className="text-slate-300 leading-relaxed mb-6">
              The proposed solution is a modular security and trust-enhancement framework consisting of four interconnected
              components. Each component addresses a distinct vulnerability in the AI code integration lifecycle — from initial
              generation through deployment into production systems.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  step: "01",
                  title: "Secure Plugin Isolation",
                  desc: "API interface enforcement + Docker/WebAssembly sandboxing with real-time anomaly detection and automatic quarantine.",
                },
                {
                  step: "02",
                  title: "Authentication & Trust Scoring",
                  desc: "X.509 certificates, intent-bound JWTs, RBAC/ABAC policy engine, adaptive key rotation based on trust scores.",
                },
                {
                  step: "03",
                  title: "Code Visualization Engine",
                  desc: "Dual-mode (AI + Regex) parsing into Common Intermediate Representation → PlantUML → rendered UML diagrams.",
                },
                {
                  step: "04",
                  title: "Secure Code Generation",
                  desc: "OWASP-enhanced prompt engineering → static analysis → Docker sandbox runtime check → automated repair.",
                },
              ].map((m) => (
                <div key={m.step} className="flex gap-4">
                  <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center">
                    <span className="text-cyan-400 font-black text-sm">{m.step}</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">{m.title}</p>
                    <p className="text-slate-400 text-sm">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Technologies Used */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-pink-400 rounded-full" />
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="bg-slate-800/60 border border-slate-700/50 hover:border-cyan-500/40 hover:bg-cyan-500/10 text-slate-300 hover:text-cyan-300 text-sm px-4 py-2 rounded-xl transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
