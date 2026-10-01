import { PATH_STAGES } from '../data/content'
import { MilestoneGlyph } from './MilestoneGlyph'

export function Path() {
  return (
    <section id="path" className="relative overflow-hidden py-24 sm:py-32">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal max-w-3xl">
          <div className="meta text-emerald-300/85">03 — PATH</div>
          <h2 className="mt-4 text-[2rem] font-semibold leading-[1.08] tracking-[-0.025em] text-white sm:text-[2.75rem] sm:leading-[1.08]">
            From software systems to reliable AI infrastructure
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-400">
            A progression from software systems and quantitative computing to reliable AI infrastructure.
          </p>
        </div>

        {/* one connected journey: vertical spine, stage numbers, a milestone register per layer */}
        <ol id="pathStages" className="path-stages mt-16 space-y-12 border-l border-white/10 pl-8 sm:pl-12">
          {PATH_STAGES.map((stage) => (
            <li key={stage.num} className={`path-stage reveal relative ${stage.now ? 'path-stage--now' : ''}`}>
              <span className="path-node absolute -left-[41px] top-[-9px] sm:-left-[55px]" aria-hidden="true">
                <span className="path-node-dot" />
              </span>
              <div className="path-stage-card grid gap-y-6 border-t border-white/[0.08] px-5 pb-6 pt-6 sm:px-6">
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className={`meta ${stage.now ? 'text-emerald-300/85' : 'text-emerald-300/70'}`}>{stage.num}</span>
                    <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">{stage.title}</h3>
                  </div>
                  <p className="mt-3 max-w-2xl text-sm leading-[1.8] text-slate-400">{stage.blurb}</p>
                </div>

                {/* milestone: a station on the section's right-hand axis */}
                <div className="path-milestone" aria-hidden="true">
                  <span className="path-milestone-node" />
                  <span className="path-milestone-index">{stage.milestone.index}</span>
                  <span className="path-milestone-tick" />
                  <span className="path-milestone-glyph">
                    <MilestoneGlyph name={stage.milestone.glyph} />
                  </span>
                  <span className="path-milestone-label">
                    {stage.milestone.label[0]}
                    <br />
                    {stage.milestone.label[1]}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
