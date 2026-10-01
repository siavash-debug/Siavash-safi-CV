import { FOCUS_AREAS } from '../data/content'
import { FocusIcon } from './FocusIcon'

export function Focus() {
  return (
    <section id="focus" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 mx-auto h-[420px] max-w-4xl glow-emerald opacity-25" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal max-w-3xl">
          <div className="meta text-emerald-300/85">02 — FOCUS</div>
          <h2 className="mt-4 text-[2rem] font-semibold leading-[1.08] tracking-[-0.025em] text-white sm:text-[2.75rem] sm:leading-[1.08]">
            What I build, and what I care about
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-400">
            Systems that reason, plan, execute, evaluate and recover — with correctness, observability and provenance treated as engineering requirements.
          </p>
        </div>

        {/* six disciplines as an editorial register: rules, numbers, type — not a card wall */}
        <div className="mt-14 grid border-t border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {FOCUS_AREAS.map((f) => (
            <article key={f.num} className="focus-item reveal border-b border-white/[0.08] py-7 sm:pr-10">
              <div className="flex items-center justify-between">
                <div className="text-emerald-300/75">
                  <FocusIcon name={f.icon} />
                </div>
                <span className="meta text-emerald-300/70">{f.num}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{f.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
