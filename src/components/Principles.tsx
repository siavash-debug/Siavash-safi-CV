export function Principles() {
  const CHAIN = ['Generate', 'Execute', 'Observe', 'Evaluate', 'Verify', 'Recover', 'Improve']

  const PRINCIPLES = [
    {
      num: '01',
      title: 'AI output is not automatically correct',
      blurb: 'Generation is the start of the pipeline, not the end. Every output is something to execute, observe and judge — never something to ship on faith.',
    },
    {
      num: '02',
      title: 'Agent execution needs boundaries',
      blurb: 'Explicit state, bounded replanning and recovery paths. Autonomy without boundaries is a liability; boundaries are what make autonomy useful.',
    },
    {
      num: '03',
      title: 'Evaluation is part of engineering',
      blurb: 'Benchmarks, deterministic tests and regression detection are not an afterthought — they are how AI systems earn the right to run.',
    },
    {
      num: '04',
      title: 'Production AI needs observability and recovery',
      blurb: 'Provenance, event tracing and reproducible artifacts — so failures can be traced, explained and corrected instead of rediscovered.',
    },
  ]

  return (
    <section id="principles" className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal">
          <div className="meta text-emerald-300/85">05 — PRINCIPLES</div>
          <h2 className="chain mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
            {CHAIN.map((step, i) => (
              <span key={step} className="contents">
                {i > 0 && (
                  <span aria-hidden="true" className="text-emerald-400/45">→</span>
                )}
                <span className="chain-step">{step}</span>
              </span>
            ))}
          </h2>
        </div>

        <div className="mt-14 grid gap-x-12 border-t border-white/[0.08] sm:grid-cols-2">
          {PRINCIPLES.map((p) => (
            <div key={p.num} className="principle reveal border-b border-white/[0.08] py-7 sm:pr-10">
              <div className="flex items-center gap-3">
                <span className="meta text-emerald-300/70">{p.num}</span>
                <div className="h-px flex-1 bg-white/[0.07]" />
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">{p.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{p.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
