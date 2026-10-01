export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-36 noise">
      <div className="absolute inset-0">
        <img
          src="assets/site/provenance-layers.webp"
          alt=""
          aria-hidden="true"
          width={1536}
          height={1024}
          loading="lazy"
          className="h-full w-full object-cover opacity-[.32] img-grain"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/80 to-ink-950" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-[380px] max-w-4xl glow-emerald opacity-60" />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <div className="reveal meta text-emerald-300/85">08 — CONTACT</div>
        <h2 className="reveal mt-5 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-[3rem] sm:leading-[1.08]">
          Let's build something reliable.
        </h2>
        <p className="reveal mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-400 sm:text-base">
          Open to AI engineering, agentic systems and platform roles — or just a good conversation about agents in production.
        </p>

        <div className="reveal mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-[11px] text-slate-500">
          <span>AI Engineering</span>
          <span aria-hidden="true" className="text-emerald-400/40">/</span>
          <span>Agentic Systems</span>
          <span aria-hidden="true" className="text-emerald-400/40">/</span>
          <span>Evaluation &amp; Reliability</span>
          <span aria-hidden="true" className="text-emerald-400/40">/</span>
          <span>Platform &amp; Infrastructure</span>
        </div>

        <div className="reveal mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:siavashsafi76@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-300"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5" /><path d="m3 6.5 9 6 9-6" /></svg>
            siavashsafi76@gmail.com
          </a>
          <a
            href="https://github.com/siavash-debug"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-emerald-400/50 hover:text-emerald-300"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.79-.25.79-.55v-2.1c-3.2.7-3.88-1.4-3.88-1.4-.53-1.34-1.3-1.7-1.3-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.03 1.78 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .96-.3 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.48 3.14-1.18 3.14-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .3.2.66.8.55A11.5 11.5 0 0 0 12 .5Z" /></svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/siavash-safi"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-emerald-400/50 hover:text-emerald-300"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0Z" /></svg>
            LinkedIn
          </a>
          <a
            href="https://siavash-debug.github.io/Siavash-safi-CV/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-emerald-400/50 hover:text-emerald-300"
          >
            Full CV
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
