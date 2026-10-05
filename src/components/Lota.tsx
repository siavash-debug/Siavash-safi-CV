import { ProjectDetail } from './ProjectDetail'

const LIFE_LAYERS = [
  { index: '01', name: 'AI Models + Tools', note: 'What a run is allowed to call.', kind: undefined },
  { index: '02', name: 'Workflows', note: 'The declared path of a run.', kind: undefined },
  { index: '03', name: 'Executions', note: 'One recorded traversal of that path.', kind: undefined },
  { index: '04', name: 'Artifacts', note: 'The produced output, kept as a record.', kind: 'artifact' },
  { index: '05', name: 'Identity + Provenance', note: 'What produced it, from which inputs and versions.', kind: 'key' },
  { index: '06', name: 'Evaluation + Verification', note: 'Whether the result holds up.', kind: 'key' },
] as const

export function Lota() {
  return (
    <article id="lota" className="reveal mt-16 border-t border-emerald-400/25 pt-10" aria-labelledby="lota-title">
      <div className="grid gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="meta text-emerald-300/90">Featured system</span>
            <span aria-hidden="true" className="hidden h-3 w-px bg-white/15 sm:block" />
            <span className="meta">AI production · workflow infrastructure</span>
          </div>

          <div className="mt-7 flex items-center gap-5">
            <span className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden border border-emerald-400/20 bg-emerald-400/[0.05] p-2">
              <img src="assets/lota-logo.svg" alt="LOTA.design™ logo" width={140} height={172} loading="lazy" decoding="async" className="block h-[85%] w-[85%] object-contain object-center translate-y-[2px]" />
            </span>
            <h3 id="lota-title" className="text-3xl font-semibold tracking-[-0.02em] text-white sm:text-[2.5rem] sm:leading-[1.05]">
              LOTA.design<span className="text-emerald-400/70">™</span>
            </h3>
          </div>
          <p className="mt-6 text-lg font-medium leading-snug text-slate-200">AI can generate an artifact. LOTA explores how to trust it.</p>
          <p className="mt-5 max-w-xl text-sm leading-[1.8] text-slate-400">
            An AI production and workflow-infrastructure concept focused on making generated artifacts traceable, identifiable, and verifiable — where a produced
            output carries its origin: the workflow, execution, inputs, models and version behind it, connected to evaluation and verification.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[11px] text-slate-500">
            <span>Workflow Engineering</span>
            <span aria-hidden="true" className="text-emerald-400/40">/</span>
            <span>AI Automation</span>
            <span aria-hidden="true" className="text-emerald-400/40">/</span>
            <span>Provenance</span>
            <span aria-hidden="true" className="text-emerald-400/40">/</span>
            <span>Evaluation</span>
            <span aria-hidden="true" className="text-emerald-400/40">/</span>
            <span>Benchmarking</span>
          </div>
          <div className="mt-8 border-t border-white/[0.08] pt-5 font-mono text-[11px] leading-relaxed text-slate-500">
            Architecture direction · Not yet a shipped platform · Case study coming soon
          </div>
          <div className="mt-6">
            <ProjectDetail
              summary="Inspect the architecture"
              sections={[
                {
                  k: 'Problem',
                  v: (
                    <>
                      AI can generate an artifact — an image, a document, a piece of code — but a generated artifact by itself carries no information about where it came from. When the same workflow is re-run, or when a model version changes, or when someone asks "was this output reviewed?", there is nothing to point at. LOTA explores what it takes for a generated artifact to be trustworthy: traceable back to the workflow, execution, inputs, models and versions that produced it.
                    </>
                  ),
                },
                {
                  k: 'System',
                  v: 'A workflow infrastructure concept where workflows run executions, executions produce artifacts, and each artifact carries an identity that supports provenance, evaluation and verification. The lifecycle is: AI Models + Tools → Workflows → Executions → Artifacts → Identity + Provenance → Evaluation + Verification. Each layer is an addressable record, and identity and provenance bind an artifact to the workflow, execution, inputs and model version that produced it.',
                },
                {
                  k: 'Engineering',
                  v: 'The project is infrastructure around capabilities like image generation and analysis, not a standalone image generator. The concern is what happens after generation: can the output be identified, traced, evaluated and verified? Image generation and analysis are among the capabilities such workflows can use; the project is the provenance layer around them. This is an architecture direction, not a shipped platform.',
                },
                {
                  k: 'Evidence',
                  v: (
                    <>
                      <div className="detail-row">
                        <span className="detail-v" style={{ margin: 0 }}>
                          LOTA, LOTA.design, the LOTA logo, wordmark and associated visual identity are brand assets associated with Siavash Safi, governed by TRADEMARK.md. The primary project domain is lota.design. Brand usage rights and permitted uses are documented in the repository; the mark is asserted with ™ and does not claim registered trademark status in any jurisdiction.
                        </span>
                      </div>
                      <a className="detail-evidence" href="https://lota.design" target="_blank" rel="noopener">
                        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
                        lota.design
                      </a>
                    </>
                  ),
                },
              ]}
            />
          </div>
        </div>

        {/* near side: FIG. 01 — the conceptual artifact lifecycle */}
        <div className="relative overflow-hidden">
          <div className="grid-fine pointer-events-none absolute inset-0 opacity-[.14]" aria-hidden="true" />
          <div className="relative">
            <div className="flex items-center justify-between gap-3">
              <span className="meta text-emerald-300/85">Fig. 01</span>
              <span className="meta">Artifact lifecycle</span>
            </div>

            <ol className="life-spine mt-7" aria-label="Artifact lifecycle">
              {LIFE_LAYERS.map((l) => (
                <li key={l.index} className={`life-layer ${l.kind === 'artifact' ? 'life-layer--artifact' : ''} ${l.kind === 'key' ? 'life-layer--key' : ''}`}>
                  <span className="life-index">{l.index}</span>
                  <span className="life-body">
                    <span className="life-name">{l.name}</span>
                    <span className="life-note">{l.note}</span>
                  </span>
                </li>
              ))}
            </ol>

            {/* conceptual schematic only: no runtime data, no identifiers */}
            <div className="mt-8 border-t border-white/[0.08] pt-7">
              <div className="flex items-center justify-between gap-3">
                <span className="meta text-emerald-300/85">Fig. 02</span>
                <span className="meta">Artifact identity</span>
              </div>
              <svg viewBox="0 0 420 210" className="mt-6 h-auto w-full" fill="none" aria-hidden="true">
                <g stroke="rgba(255,255,255,.16)" strokeWidth="1">
                  <rect x="4" y="14" width="96" height="26" />
                  <rect x="4" y="88" width="96" height="26" />
                  <rect x="4" y="162" width="96" height="26" />
                  <rect x="320" y="46" width="96" height="26" />
                  <rect x="320" y="130" width="96" height="26" />
                </g>
                <g stroke="rgba(94,234,212,.42)" strokeWidth="1">
                  <path d="M100 27H150V76" />
                  <path d="M100 101H150" />
                  <path d="M100 175H150V134" />
                  <path d="M320 59H270V76" />
                  <path d="M320 143H270V134" />
                </g>
                <rect x="150" y="76" width="120" height="58" fill="rgba(94,234,212,.07)" stroke="rgba(94,234,212,.55)" strokeWidth="1.2" />
                <g fill="#5eead4">
                  <circle cx="150" cy="76" r="2.2" /><circle cx="150" cy="101" r="2.2" /><circle cx="150" cy="134" r="2.2" />
                  <circle cx="270" cy="76" r="2.2" /><circle cx="270" cy="134" r="2.2" />
                </g>
                <g fontFamily="JetBrains Mono, monospace" fontSize="9.5" fill="#929db1" textAnchor="middle">
                  <text x="52" y="31">INPUTS</text>
                  <text x="52" y="105">WORKFLOW</text>
                  <text x="52" y="179">EXECUTION</text>
                  <text x="368" y="63">MODEL</text>
                  <text x="368" y="147">VERSION</text>
                </g>
                <text x="210" y="100" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#9cf2e2">ARTIFACT</text>
                <text x="210" y="117" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#929db1">content + identity</text>
              </svg>
              <p className="mt-5 text-xs leading-relaxed text-slate-400">
                Each layer is an addressable record — identity and provenance bind an artifact to the workflow,
                execution, inputs and model version that produced it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
