import { useState, type CSSProperties } from 'react'
import { SYSTEM_LAYERS } from '../data/content'

export function About() {
  const [active, setActive] = useState(0)

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-start lg:gap-14">
          <div>
            <div className="reveal meta text-emerald-300/85">01 — ABOUT</div>
            <h2 className="reveal mt-4 text-[2rem] font-semibold leading-[1.08] tracking-[-0.025em] text-white sm:text-[2.75rem] sm:leading-[1.08]">
              Not a prompt layer around a model
            </h2>

            <div className="reveal mt-8 space-y-5 text-[15px] leading-[1.8] text-slate-400 sm:text-base">
              <p>
                My engineering path started with software systems and real-world applications — reservation-style systems where transactional workflows,
                integrations and business logic had to actually work. It moved through data-driven and statistical systems, where I built Python trading systems
                that turned quantitative rules into executable strategies with backtesting and automated execution, and into blockchain and financial infrastructure,
                where state, transactions and numerical correctness carry real consequences.
              </p>
              <p>
                That progression shaped how I approach AI today: <span className="text-slate-200">not as a prompt layer around a model</span>, but as an engineering
                system that needs execution, state, evaluation, observability, verification and recovery. Machine learning, deep learning, NLP, RAG and generative AI
                added the model layer; the systems background underneath it is what makes the difference.
              </p>
              <p>
                My current focus is <span className="text-slate-200">agentic systems and AI infrastructure</span> — models as components inside larger, testable
                workflows that can plan, use tools, evaluate their own results, and recover when execution goes wrong.
              </p>
            </div>
          </div>

          <aside className="reveal border-l border-white/[0.10] pl-6 sm:pl-8" aria-labelledby="system-map-title">
            <div className="meta text-emerald-300/80">Architecture concept</div>
            <h3 id="system-map-title" className="mt-2 text-xl font-semibold tracking-tight text-white">AI System Map</h3>
            <p id="system-map-description" className="mt-3 text-sm leading-relaxed text-slate-400">
              Select a layer to trace the concern through a reliable AI system.
            </p>
            <div className="system-map mt-6" role="group" aria-describedby="system-map-description">
              {SYSTEM_LAYERS.map((layer, i) => (
                <button
                  key={layer.num}
                  type="button"
                  className={`system-node ${layer.branch ? 'is-branch' : ''} ${i === active ? 'is-active' : ''}`}
                  style={layer.branch ? ({ '--indent': '1.15rem' } as CSSProperties) : undefined}
                  aria-pressed={i === active}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => {
                    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(e.key)) return
                    e.preventDefault()
                    const next =
                      e.key === 'Home' ? 0
                      : e.key === 'End' ? SYSTEM_LAYERS.length - 1
                      : (i + (e.key === 'ArrowDown' ? 1 : -1) + SYSTEM_LAYERS.length) % SYSTEM_LAYERS.length
                    setActive(next)
                    const nodes = document.querySelectorAll<HTMLElement>('.system-node')
                    nodes[next]?.focus()
                  }}
                >
                  <span className="font-mono text-[10px] text-emerald-300/75">{layer.num}</span>
                  <span className="node-label">{layer.name}</span>
                </button>
              ))}
            </div>
            <p className="mt-5 border-t border-white/[0.08] pt-4 font-mono text-[11px] leading-relaxed text-slate-500" aria-live="polite" id="system-map-detail">
              {SYSTEM_LAYERS[active].detail}
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
