import { useState, useEffect, useRef } from 'react'
import { StageArtwork } from './StageArtwork'
import { MilestoneGlyph } from './MilestoneGlyph'
import { PATH_STAGES } from '../data/content'

interface StageMeta {
  shortTitle: string
  era: string
  paradigm: string
  chips: string[]
}

const STAGE_META: Record<string, StageMeta> = {
  '01': {
    shortTitle: 'Software Systems',
    era: 'CORE BACKEND & DISTRIBUTED SERVICES',
    paradigm: 'Deterministic Reliability · Concurrency & State',
    chips: ['API Gateway', 'Distributed Logic', 'Transactional Workflows', 'Auth & RBAC', 'PostgreSQL'],
  },
  '02': {
    shortTitle: 'Data & Quant',
    era: 'NUMERICAL & QUANTITATIVE COMPUTING',
    paradigm: 'Statistical Logic · Time-Series Execution',
    chips: ['Python Numerical', 'Data Lake', 'ETL Batch & Stream', 'Time-Series', 'Automated Backtesting'],
  },
  '03': {
    shortTitle: 'Blockchain',
    era: 'HIGH-ASSURANCE STATE & LEDGERS',
    paradigm: 'Immutable Records · Zero-Tolerance Fault Invariance',
    chips: ['Smart Contracts', 'Distributed Ledger', 'Exchange Infra', 'Cryptographic State', 'Consensus'],
  },
  '04': {
    shortTitle: 'GenAI & LLMs',
    era: 'DEEP LEARNING & FOUNDATION MODELS',
    paradigm: 'Latent Space Reasoning · Representation Modeling',
    chips: ['PyTorch & Transformers', 'LLM Tokenization', 'Prompt Engineering', 'Model Inference', 'Latent Spaces'],
  },
  '05': {
    shortTitle: 'RAG & Eval',
    era: 'SEMANTIC RETRIEVAL & BENCHMARKING',
    paradigm: 'Grounded Context · Empirical Metric Suites',
    chips: ['Vector Databases', 'Hybrid Retrieval', 'Recall@K / MRR', 'Faithfulness Eval', 'Golden Datasets'],
  },
  '06': {
    shortTitle: 'Agents & Security',
    era: 'AUTONOMOUS RUNTIMES & MODEL HARDENING',
    paradigm: 'Guarded Execution · State-Machine Orchestration',
    chips: ['LoRA / PEFT Tuning', 'Adversarial Security', 'Agent Workflows', 'Bounded Replanning', 'Tool Registries'],
  },
  '07': {
    shortTitle: 'Reliability ★',
    era: 'AI AS AN ENGINEERING DISCIPLINE',
    paradigm: 'Correctness as an Engineered Property · Provenance',
    chips: ['LOTA.design', 'Evaluation Gates', 'Artifact Provenance', 'Runtime Observability', 'Regression Detection'],
  },
}

export function Path() {
  const [activeStageId, setActiveStageId] = useState<string>('01')
  const isUserClicking = useRef(false)
  const clickTimeout = useRef<number | null>(null)

  // Sync active station with scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isUserClicking.current) return
      const stages = Array.from(document.querySelectorAll<HTMLElement>('#pathStages .path-stage'))
      if (!stages.length) return
      const viewportCenter = window.innerHeight * 0.45
      let closestId = '01'
      let closestDist = Infinity

      stages.forEach((s) => {
        const id = s.getAttribute('data-stage-id')
        if (!id) return
        const box = s.getBoundingClientRect()
        const dist = Math.abs(box.top + box.height * 0.4 - viewportCenter)
        if (dist < closestDist) {
          closestDist = dist
          closestId = id
        }
      })

      if (closestId) {
        setActiveStageId(closestId)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToStage = (stageId: string) => {
    setActiveStageId(stageId)
    isUserClicking.current = true
    if (clickTimeout.current) window.clearTimeout(clickTimeout.current)

    const el = document.getElementById(`stage-anchor-${stageId}`)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    clickTimeout.current = window.setTimeout(() => {
      isUserClicking.current = false
    }, 800)
  }

  return (
    <section id="path" className="relative overflow-hidden py-24 sm:py-32">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-48 top-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/[0.03] blur-[120px]" />
      <div className="pointer-events-none absolute -right-48 bottom-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.03] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="reveal max-w-3xl">
          <div className="meta flex items-center gap-2 text-emerald-300/85">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            03 — PATH & EVOLUTION
          </div>
          <h2 className="mt-4 text-[2rem] font-semibold leading-[1.08] tracking-[-0.025em] text-white sm:text-[2.75rem] sm:leading-[1.08]">
            From software systems to reliable AI infrastructure
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-400">
            An 8+ year trajectory through backend systems, quantitative computing, distributed networks, and modern LLM engineering — culminating in reliable, verifiable AI systems.
          </p>
        </div>

        {/* Interactive Station Scrubber / Timeline Navigator */}
        <div className="reveal mt-12 border-b border-white/[0.08] pb-5">
          <div className="flex items-center justify-between pb-3">
            <span className="font-mono text-[10px] tracking-[.18em] uppercase text-slate-500">
              TRAJECTORY STATIONS // CLICK TO INSPECT
            </span>
            <span className="font-mono text-[10px] text-emerald-400/80">
              STAGE {activeStageId} OF 07
            </span>
          </div>

          <div className="no-scrollbar flex items-center gap-2 overflow-x-auto pb-1 pt-1">
            {PATH_STAGES.map((stage) => {
              const meta = STAGE_META[stage.milestone.index]
              const isActive = activeStageId === stage.milestone.index
              return (
                <button
                  key={stage.num}
                  type="button"
                  onClick={() => scrollToStage(stage.milestone.index)}
                  className={`group relative flex flex-none items-center gap-2 rounded-lg border px-3.5 py-2 font-mono text-[11px] transition-all duration-300 ${
                    isActive
                      ? 'border-emerald-400/60 bg-emerald-500/10 text-emerald-300 shadow-[0_0_16px_rgba(94,234,212,0.15)]'
                      : 'border-white/[0.08] bg-white/[0.02] text-slate-400 hover:border-white/20 hover:bg-white/[0.04] hover:text-white'
                  }`}
                >
                  <span
                    className={`inline-block h-1.5 w-1.5 rounded-full transition-colors ${
                      isActive ? 'bg-emerald-400 shadow-[0_0_8px_#5eead4]' : 'bg-slate-600 group-hover:bg-slate-400'
                    }`}
                  />
                  <span className="font-semibold text-slate-500 group-hover:text-slate-300">
                    {stage.milestone.index}
                  </span>
                  <span className="whitespace-nowrap font-sans font-medium text-inherit">
                    {meta?.shortTitle || stage.title}
                  </span>
                  {stage.now && (
                    <span className="ml-1 rounded bg-emerald-400/20 px-1 py-0.2 text-[9px] font-semibold uppercase tracking-wider text-emerald-300">
                      NOW
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Continuous Architectural Spine Timeline */}
        <ol id="pathStages" className="path-stages mt-12 space-y-16 border-l border-white/10 pl-7 sm:pl-12">
          {PATH_STAGES.map((stage) => {
            const meta = STAGE_META[stage.milestone.index]
            const isNow = Boolean(stage.now)

            return (
              <li
                key={stage.num}
                id={`stage-anchor-${stage.milestone.index}`}
                data-stage-id={stage.milestone.index}
                className={`path-stage reveal relative ${isNow ? 'path-stage--now' : ''}`}
              >
                {/* Circuit Node on Vertical Spine */}
                <div
                  className="path-node absolute -left-[39px] top-4 sm:-left-[59px]"
                  aria-hidden="true"
                >
                  <span className="path-node-dot" />
                </div>

                {/* Open Stage Station Layout (De-boxed, Breathable) */}
                <div className="path-station-row relative pt-2">
                  <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
                    {/* Left Column: Narrative & Technical Depth */}
                    <div className="space-y-5">
                      {/* Sub-header with Glyph & Category */}
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="flex items-center gap-2 rounded border border-white/10 bg-white/[0.03] px-2.5 py-1">
                          <span className="h-4 w-4 text-emerald-300">
                            <MilestoneGlyph name={stage.milestone.glyph} />
                          </span>
                          <span className="font-mono text-[11px] font-bold tracking-wider text-emerald-300/90">
                            {stage.num}
                          </span>
                        </div>

                        <span className="font-mono text-[10px] tracking-[.16em] uppercase text-slate-500">
                          {meta?.era || stage.milestone.label.join(' · ')}
                        </span>

                        {isNow && (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2.5 py-0.5 font-mono text-[9.5px] font-semibold uppercase tracking-wider text-emerald-300">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                            CURRENT ANCHOR
                          </span>
                        )}
                      </div>

                      {/* Stage Title */}
                      <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                        {stage.title}
                      </h3>

                      {/* Stage Narrative Blurb */}
                      <p className="text-[14.5px] leading-[1.8] text-slate-300/90">
                        {stage.blurb}
                      </p>

                      {/* Architectural Paradigm Callout */}
                      {meta?.paradigm && (
                        <div className="flex items-start gap-2 rounded-md border border-white/[0.06] bg-white/[0.015] p-3 text-xs text-slate-400">
                          <span className="font-mono text-[11px] text-emerald-400/80">↳</span>
                          <div>
                            <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                              PARADIGM SHIFT:
                            </span>{' '}
                            <span className="text-slate-300">{meta.paradigm}</span>
                          </div>
                        </div>
                      )}

                      {/* Capability / Discipline Chips */}
                      {meta?.chips && (
                        <div className="pt-1">
                          <div className="mb-2 font-mono text-[10px] uppercase tracking-[.18em] text-slate-500">
                            CORE ARTIFACTS & TOOLING
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {meta.chips.map((chip) => (
                              <span
                                key={chip}
                                className="rounded border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[10.5px] text-slate-300 transition-colors hover:border-emerald-400/40 hover:text-emerald-300"
                              >
                                {chip}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right Column: Architectural Blueprint Viewport */}
                    <div className="relative">
                      <div className="path-blueprint-frame relative overflow-hidden rounded-xl border border-white/[0.09] bg-gradient-to-b from-white/[0.03] to-white/[0.005] p-4 transition-all duration-300 hover:border-emerald-400/30">
                        {/* Blueprint Corner Accents */}
                        <div className="pointer-events-none absolute left-2 top-2 font-mono text-[9px] text-white/20">┌</div>
                        <div className="pointer-events-none absolute right-2 top-2 font-mono text-[9px] text-white/20">┐</div>
                        <div className="pointer-events-none absolute bottom-2 left-2 font-mono text-[9px] text-white/20">└</div>
                        <div className="pointer-events-none absolute bottom-2 right-2 font-mono text-[9px] text-white/20">┘</div>

                        {/* Top HUD Telemetry Bar */}
                        <div className="mb-3 flex items-center justify-between border-b border-white/[0.06] pb-2 font-mono text-[10px]">
                          <span className="tracking-[.16em] text-slate-500">
                            FIG.{stage.milestone.index} // TOPOLOGY
                          </span>
                          <span className="flex items-center gap-1.5 text-emerald-400/80">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#5eead4]" />
                            VERIFIED RUNTIME
                          </span>
                        </div>

                        {/* Schematic Drawing with Ambient Backdrop */}
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-ink-950/40">
                          {/* Radial ambient glow */}
                          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(94,234,212,0.06),transparent_70%)]" />

                          {/* Schematic SVG component */}
                          <div className="relative h-full w-full">
                            <StageArtwork stageId={stage.milestone.index} />
                          </div>
                        </div>

                        {/* Bottom HUD Metadata */}
                        <div className="mt-2.5 flex items-center justify-between font-mono text-[9.5px] text-slate-500">
                          <span className="uppercase tracking-wider">
                            {stage.milestone.label.join(' · ')}
                          </span>
                          <span className="text-slate-600">
                            STAGE-SPEC // 400×300 FLOW
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Horizontal Stage Divider */}
                  <div className="mt-14 border-b border-white/[0.06]" />
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

