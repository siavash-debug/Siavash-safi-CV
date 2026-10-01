import type { MouseEvent as ReactMouseEvent } from 'react'
import { CERTS, FOCUS_AREAS, SKILLS } from '../data/content'

interface HeroProps {
  onOpenPhoto: (e?: ReactMouseEvent<HTMLElement>) => void
}

export function Hero({ onOpenPhoto }: HeroProps) {
  const stats = [
    { label: 'Years engineering', value: '8+' },
    { label: 'Certifications', value: String(CERTS.length) },
    { label: 'Focus areas', value: String(FOCUS_AREAS.length) },
    { label: 'Core skills', value: String(SKILLS.reduce((n, g) => n + g.terms.length, 0)) },
  ]

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20 noise">
      {/* atmospheric abstract render; the portrait carries the identity */}
      <div className="absolute inset-0">
        <img
          src="assets/site/hero-graph.webp"
          alt=""
          aria-hidden="true"
          width={2048}
          height={1152}
          loading="eager"
          fetchPriority="high"
          className="h-full w-full object-cover opacity-[.38] img-grain"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/70" />
      </div>
      <div className="absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[520px] w-[720px] glow-emerald" />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
          <div>
            <div className="reveal flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] tracking-[.18em] text-slate-500">
              <span className="text-emerald-300/90">AI ENGINEER</span>
              <span aria-hidden="true" className="hidden h-3 w-px bg-white/15 sm:block" />
              <span>OPEN TO AI ENGINEERING &amp; AGENTIC SYSTEMS ROLES</span>
            </div>

            <h1 className="reveal mt-6 max-w-4xl text-[2.25rem] font-semibold leading-[1.04] tracking-[-0.03em] text-white sm:text-5xl lg:text-[4rem] xl:text-[4.5rem]">
              Siavash Safi builds
              <br />
              AI systems that hold up.
            </h1>
            <div className="reveal mt-7 h-px w-24 bg-gradient-to-r from-emerald-400/80 to-transparent" aria-hidden="true" />

            <p className="reveal mt-7 max-w-2xl text-[15px] leading-relaxed text-slate-400 sm:text-[17px] sm:leading-[1.75]">
              AI engineer with <span className="text-slate-300">8+ years</span> across real-world software applications, data-driven and statistical systems,
              blockchain and financial infrastructure — now building <span className="text-slate-300">reliable, executable AI systems</span>:
              agents that plan, execute, evaluate, verify and recover.
            </p>

            <ol className="reveal mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] tracking-[.14em] text-slate-500">
              <li>SOFTWARE</li>
              <li aria-hidden="true" className="text-emerald-400/50">→</li>
              <li>DATA</li>
              <li aria-hidden="true" className="text-emerald-400/50">→</li>
              <li>BLOCKCHAIN</li>
              <li aria-hidden="true" className="text-emerald-400/50">→</li>
              <li>AI</li>
              <li aria-hidden="true" className="text-emerald-400/50">→</li>
              <li className="text-emerald-300/90">AGENTS</li>
            </ol>

            <div className="reveal mt-9 flex flex-wrap items-center gap-3">
              <a
                href="mailto:siavashsafi76@gmail.com"
                className="group inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-300"
              >
                Let's build something reliable
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
              <a href="#work" className="inline-flex items-center gap-2 rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-emerald-400/50 hover:text-emerald-300">
                See the work
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M6 13l6 6 6-6" /></svg>
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

          {/* the portrait is the human anchor: substantial, uncropped, expandable */}
          <figure className="reveal relative mt-14 lg:mt-0">
            <button
              type="button"
              aria-haspopup="dialog"
              aria-label="View the portrait of Siavash Safi in full size"
              onClick={(e) => onOpenPhoto(e)}
              className="group relative block w-full overflow-hidden border border-white/[0.12] bg-ink-900 text-left"
            >
              <img src="assets/images/profile.jpg" alt="Portrait of Siavash Safi" width={1280} height={1280} fetchPriority="high" decoding="async" className="aspect-[4/5] w-full object-cover object-center transition-opacity duration-500 group-hover:opacity-95" />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/5 to-transparent" />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                <span>
                  <span className="block font-mono text-[10px] tracking-[.2em] text-emerald-200/85">SIAVASH SAFI</span>
                  <span className="mt-1 block text-sm font-medium text-white">AI Engineer · Systems Builder</span>
                </span>
                <span className="grid h-9 w-9 place-items-center border border-white/20 text-emerald-200" aria-hidden="true">↗</span>
              </span>
            </button>
            <figcaption className="mt-3 flex items-center justify-between gap-4 font-mono text-[10px] tracking-[.14em] text-slate-500">
              <span>PORTRAIT · OPEN</span>
              <span className="text-emerald-300/70">RELIABLE EXECUTION</span>
            </figcaption>
          </figure>
        </div>

        {/* figures derived from the page data, never hardcoded */}
        <dl className="reveal mt-14 grid grid-cols-2 gap-y-8 border-t border-white/[0.08] pt-8 sm:grid-cols-4 sm:gap-y-0">
          {stats.map((s, i) => (
            <div key={s.label} className={i > 0 ? (i === 2 ? 'sm:border-l sm:border-white/[0.07] sm:pl-6' : 'border-l border-white/[0.07] pl-5 sm:pl-6') : undefined}>
              <dt className="meta">{s.label}</dt>
              <dd className="mt-2 font-mono text-2xl font-medium text-white">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* scroll affordance: static, no looping motion */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block">
        <div className="flex flex-col items-center gap-2 font-mono text-[10px] tracking-[.18em] text-slate-500">
          SCROLL
          <span className="h-10 w-px bg-gradient-to-b from-emerald-400/60 to-transparent" />
        </div>
      </div>
    </section>
  )
}
