import { useEffect, useState } from 'react'
import { PATH_STAGES } from '../data/content'
import { PathVisualizer } from './PathVisualizer'

export function Path() {
  const [activeStage, setActiveStage] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'))
            setActiveStage(index)
          }
        })
      },
      { rootMargin: '-30% 0px -50% 0px' }
    )

    const els = document.querySelectorAll('.path-stage')
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="path" className="relative overflow-hidden py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal max-w-3xl">
          <div className="meta text-emerald-300/85">03 — PATH</div>
          <h2 className="mt-4 text-[2rem] font-semibold leading-[1.08] tracking-[-0.025em] text-white sm:text-[2.75rem] sm:leading-[1.08]">
            From software systems to reliable AI infrastructure
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-400">
            A progression from software systems and quantitative computing to reliable AI infrastructure.
          </p>
        </div>

        <div className="mt-16 lg:grid lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:items-start">
          {/* Left: scrolling list */}
          <ol id="pathStages" className="path-stages space-y-16 lg:space-y-32 border-l border-white/10 pl-8 sm:pl-12">
            {PATH_STAGES.map((stage, i) => (
              <li key={stage.num} data-index={i} className={`path-stage reveal relative ${stage.now ? 'path-stage--now' : ''} ${i === activeStage ? 'is-active opacity-100' : 'opacity-30'} transition-opacity duration-700`}>
                <span className="path-node absolute -left-[41px] top-[-9px] sm:-left-[55px]" aria-hidden="true">
                  <span className="path-node-dot" />
                </span>
                <div className="path-stage-card border-t border-white/[0.08] pt-6">
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <span className={`meta ${stage.now ? 'text-emerald-300/85' : 'text-emerald-300/70'}`}>{stage.num}</span>
                      <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">{stage.title}</h3>
                    </div>
                    <p className="mt-3 text-[15px] leading-[1.8] text-slate-400">{stage.blurb}</p>
                  </div>
                  
                  {/* Mobile inline visual */}
                  <div className="mt-8 lg:hidden w-full aspect-square relative rounded-xl border border-white/10 overflow-hidden shadow-2xl">
                    <PathVisualizer activeStage={i} />
                  </div>
                </div>
              </li>
            ))}
          </ol>

          {/* Right: Sticky Visualizer (Desktop only) */}
          <div className="hidden lg:block sticky top-32 w-full aspect-square rounded-2xl border border-white/10 bg-[#07080b] shadow-2xl overflow-hidden">
             <PathVisualizer activeStage={activeStage} />
          </div>
        </div>
      </div>
    </section>
  )
}
