export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For SREs &amp; DevOps Teams
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Turn Past Incidents Into<br />
          <span className="text-[#58a6ff]">Reusable Playbooks</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Upload incident reports in JSON, Markdown, or paste them manually. Our AI extracts patterns and generates customized response templates and runbooks your team can use next time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start for $45/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { title: "Ingest Any Format", desc: "Paste JSON, Markdown, or plain text incident reports directly into the app." },
            { title: "AI Pattern Extraction", desc: "Automatically identifies root causes, timelines, and response steps from your data." },
            { title: "Team Playbooks", desc: "Share and collaborate on runbooks with your entire on-call team in one place." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$45<span className="text-2xl text-[#8b949e] font-normal">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Everything you need to run incident response at scale</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited incident report ingestion",
              "AI-generated response templates",
              "Runbook editor & version history",
              "Team collaboration (up to 10 seats)",
              "JSON, Markdown & plain text import",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "What incident report formats are supported?",
              a: "You can upload or paste JSON, Markdown, or plain text. The AI parses all common incident report structures including PagerDuty exports, Jira tickets, and custom formats."
            },
            {
              q: "How does the AI generate templates?",
              a: "The AI analyzes your past incidents to identify recurring patterns — root causes, affected services, response steps — and produces a structured runbook template tailored to your stack."
            },
            {
              q: "Can my whole team use it?",
              a: "Yes. The Pro plan includes up to 10 seats so your entire on-call rotation can view, edit, and collaborate on playbooks in real time."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} Incident Response Template Generator. All rights reserved.
      </footer>
    </main>
  )
}
