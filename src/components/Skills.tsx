import { SKILLS } from '../data/content'

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal max-w-3xl">
          <div className="meta text-emerald-300/85">06 — SKILLS</div>
          <h2 className="mt-4 text-[2rem] font-semibold leading-[1.08] tracking-[-0.025em] text-white sm:text-[2.75rem] sm:leading-[1.08]">Core skills</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-400">
            Disciplines treated as one integrated system — from foundation models and cybersecurity down to runtime infrastructure.
          </p>
        </div>

        {/* a professional profile, not a badge wall: category, terms, count */}
        <div className="mt-14 border-t border-white/[0.08]">
          {SKILLS.map((g) => (
            <div key={g.name} className="reveal border-b border-white/[0.08] py-7 lg:grid lg:grid-cols-[12rem_1fr] lg:items-baseline lg:gap-x-10">
              <div className="flex items-center gap-3">
                <h3 className="meta text-slate-300">{g.name}</h3>
                <div className="h-px flex-1 bg-white/[0.07]" />
                <span className="meta">{g.terms.length}</span>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-y-2 lg:mt-0">
                {g.terms.map((t) => (
                  <span key={t} className="skill-term">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
