import { useState } from "react";

const contacts = [
  {
    name: "Vithana K.M.N.",
    id: "IT22572042",
    email: "it22572042@my.sliit.lk",
    role: "Plugin Isolation & Enforcement",
    avatar: "VK",
    color: "from-cyan-400 to-cyan-600",
  },
  {
    name: "Gunawardana M.A.Y.N.",
    id: "IT22570444",
    email: "it22570444@my.sliit.lk",
    role: "Secure Auth & Communication",
    avatar: "GM",
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "Vithanage V.D.S.I.",
    id: "IT22232236",
    email: "it22232236@my.sliit.lk",
    role: "UML Visualization Engine",
    avatar: "VV",
    color: "from-violet-400 to-violet-600",
  },
  {
    name: "Prabhasari P.T.P.",
    id: "IT22227140",
    email: "it22227140@my.sliit.lk",
    role: "Secure AI Code Generator",
    avatar: "PP",
    color: "from-green-400 to-green-600",
  },
];

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Construct mailto link as a simple form action
    const mailto = `mailto:it22572042@my.sliit.lk?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailto;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Get In Touch</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have questions about our research or want to collaborate? Reach out to any team member or send a general inquiry.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Contact cards */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-white font-bold mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-cyan-400 rounded-full" />
              Team Contacts
            </h3>

            {contacts.map((c) => (
              <div
                key={c.id}
                className="flex items-center gap-3 bg-slate-950/60 border border-slate-800/60 hover:border-cyan-500/30 rounded-xl p-4 transition-all duration-200"
              >
                <div className={`w-10 h-10 flex-shrink-0 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center`}>
                  <span className="text-white font-bold text-sm">{c.avatar}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-semibold truncate">{c.name}</p>
                  <p className="text-slate-500 text-xs truncate">{c.role}</p>
                </div>
                <a
                  href={`mailto:${c.email}`}
                  className="flex-shrink-0 w-8 h-8 bg-slate-800 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500/40 rounded-lg flex items-center justify-center transition-all"
                  title={c.email}
                >
                  <svg className="w-4 h-4 text-slate-400 hover:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            ))}

            {/* Institution info */}
            <div className="mt-6 bg-slate-950/60 border border-slate-800/60 rounded-xl p-5">
              <p className="text-slate-500 text-xs uppercase tracking-wider mb-3">Institution</p>
              <div className="space-y-2">
                <p className="text-white font-semibold text-sm">Sri Lanka Institute of Information Technology</p>
                <p className="text-slate-400 text-sm">Department of Information Technology</p>
                <p className="text-slate-400 text-sm">Faculty of Computing</p>
                <div className="pt-2 border-t border-slate-800 mt-3">
                  <p className="text-slate-500 text-xs mb-1">Supervisor</p>
                  <p className="text-slate-300 text-sm">Mr. Vishan Jayasinghearachchi</p>
                  <p className="text-slate-500 text-xs mb-1 mt-2">Co-Supervisor</p>
                  <p className="text-slate-300 text-sm">Ms. Poojani Gunathilake</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="lg:col-span-3">
            <div className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-8">
              <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <span className="w-1 h-5 bg-cyan-400 rounded-full" />
                Send a Message
              </h3>

              {submitted && (
                <div className="mb-6 flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-xl px-4 py-3">
                  <span className="text-green-400 text-lg">✓</span>
                  <p className="text-green-300 text-sm">Message prepared! Your email client should open shortly.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-400 text-sm mb-1.5" htmlFor="name">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-slate-800/60 border border-slate-700/60 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm mb-1.5" htmlFor="email">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full bg-slate-800/60 border border-slate-700/60 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-sm mb-1.5" htmlFor="subject">
                    Subject <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Research inquiry / Collaboration / Other"
                    className="w-full bg-slate-800/60 border border-slate-700/60 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 text-sm mb-1.5" htmlFor="message">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full bg-slate-800/60 border border-slate-700/60 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/20 transition-all duration-200 hover:shadow-cyan-500/35 hover:scale-[1.01] flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-16 pt-8 border-t border-slate-800/60 text-center">
          <p className="text-slate-500 text-sm">
            © 2025 Trusted Framework for AI Code Integration · Project 25-26J-461 · SLIIT ·{" "}
            <span className="text-slate-600">IT4010 Research Project</span>
          </p>
        </div>
      </div>
    </section>
  );
}
