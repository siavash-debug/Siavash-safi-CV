import type { ReactNode } from 'react'
import { ProjectDetail, type DetailSectionData } from './ProjectDetail'
import { Lota } from './Lota'
import {
  AgentLoopSchematic,
  AiCodingBaseSchematic,
  LotaSecuritySchematic,
  LotaVisionSchematic,
  ProofDeskSchematic,
  SmartFinderSchematic,
  TextToImageSchematic,
} from './schematics'

function Arrow({ kind = 'emerald' }: { kind?: 'emerald' | 'sky' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={`h-4 w-4 ${kind === 'sky' ? 'text-sky-300' : 'text-emerald-300'}`} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {kind === 'emerald' ? (
        <path d="M3 3l7 17M7 10l5 5 5-5" />
      ) : (
        <>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </>
      )}
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

interface ProjectProps {
  meta: string
  title: string
  tagKind: 'emerald' | 'sky'
  tag: string
  blurb: ReactNode
  tags: string[]
  repoLabel: string
  repoUrl: string
  repoCta: string
  detailSummary: string
  detail: DetailSectionData[]
  figure: ReactNode
}

function Project(p: ProjectProps) {
  return (
    <article className="project reveal border-t border-white/[0.08] pt-8">
      {p.figure}
      <div className="project-body mt-6 lg:mt-0">
        <div className="meta">{p.meta}</div>
        <h3 className="mt-2.5 text-lg font-semibold text-white">{p.title}</h3>
        <div className="mt-2 flex items-center gap-2 text-xs">
          <Arrow kind={p.tagKind === 'sky' ? 'sky' : 'emerald'} />
          <span className={p.tagKind === 'sky' ? 'text-sky-300' : 'text-emerald-300'}>{p.tag}</span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.blurb}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between">
          <span className="font-mono text-[11px] text-slate-500">{p.repoLabel}</span>
          <a href={p.repoUrl} target="_blank" rel="noopener" className="font-mono text-[11px] text-emerald-300 hover:text-emerald-200">{p.repoCta}</a>
        </div>
        <ProjectDetail summary={p.detailSummary} sections={p.detail} />
      </div>
    </article>
  )
}

const EV = ({ href, label }: { href: string; label: string }) => (
  <a className="detail-evidence" href={href} target="_blank" rel="noopener">
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
    {label}
  </a>
)

export function Work() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal max-w-3xl">
          <div className="meta text-emerald-300/85">04 — WORK</div>
          <h2 className="mt-4 text-[2rem] font-semibold leading-[1.08] tracking-[-0.025em] text-white sm:text-[2.75rem] sm:leading-[1.08]">
            Systems, and how they earn trust
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-400">
            Everything ships to GitHub first — repositories, commits and work in progress live on the profile.
          </p>
        </div>

        <Lota />

        {/* engineering projects: one editorial block each, alternating figure side */}
        <div className="mt-16 space-y-14">
          <Project
            meta="AGENTS · PLANNING · TOOL USE · ORCHESTRATION"
            title="Agentic Workflow Engine"
            tagKind="emerald"
            tag="Agentic"
            blurb={
              <>
                A backend runtime that turns agent plans into observable, recoverable workflows. A Planner Agent and AgentLoop drive
                plan → execute → evaluate with bounded replanning, while workflow state, execution events and recovery stay explicit:
                Task Execution Service, Tool Registry, provider-agnostic LLM boundary, PostgreSQL persistence, a workflow state machine,
                crash-recovery primitives and EventStore tracing.
              </>
            }
            tags={['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Pydantic', 'Pytest', 'Docker', 'CI/CD']}
            repoLabel="Repository"
            repoUrl="https://github.com/siavash-debug/agentic-workflow-engine"
            repoCta="View Repository ↗"
            detailSummary="Inspect the system"
            detail={[
              {
                k: 'Problem',
                v: 'Most agent demos are a script with a prompt and a for-loop. That works in a notebook but is not testable, has no boundary between "talk to the LLM" and "run business logic," and cannot be extended without touching everything. The engine exists to build the thing such a demo eventually has to become: a backend service that can sit behind a real product and be reviewed like production backend code.',
              },
              {
                k: 'System',
                v: 'A Planner Agent decomposes a goal into a structured Plan; an AgentLoop orchestrates that plan through a bounded plan → execute → evaluate → replan cycle, tracking each attempt as a WorkflowRun. A Task Execution Service runs each step against a Tool Registry exposing a controlled, extensible set of capabilities. The codebase follows Clean Architecture: dependencies point inward, and the core has no idea FastAPI or Anthropic exist.',
              },
              {
                k: 'Engineering',
                v: (
                  <>
                    <strong>Boundaries:</strong> the application layer depends only on <code>domain.interfaces.LLMClient</code>, so the provider, storage backend and transport are all swappable without touching the Planner or AgentLoop.<br />
                    <strong>Persistence:</strong> in-memory by default; PostgreSQL via SQLAlchemy Core + Alembic is opt-in. WorkflowRun state, every Task (including attempt count and retry classification), and the full AgentEvent trace survive a process restart.<br />
                    <strong>Recovery:</strong> a stale running workflow can be detected and resumed via <code>find_stale_running_workflow_ids()</code> + <code>RecoveryService.recover_and_resume()</code>, triggered explicitly through <code>scripts/recover.py</code>. Recovery is not automatic inside the running app. Execution semantics are at-least-once, not exactly-once.<br />
                    <strong>Observability:</strong> plan, task and replan lifecycle transitions are recorded as an AgentEvent trace; structured JSON logging carries bound context per request, workflow and task.<br />
                    <strong>Testability:</strong> a deterministic local demo mode (<code>FakeLLMClient</code>, no API key, no network) runs the real production path through three scenarios, including one that fails once and recovers after a replan.
                  </>
                ),
              },
              {
                k: 'Evidence',
                v: (
                  <>
                    <div className="detail-row">
                      <span className="detail-v" style={{ margin: 0 }}>62 commits, 210+ automated tests (unit, in-memory integration, and real-PostgreSQL integration via testcontainers). Docker and GitHub Actions CI validated.</span>
                    </div>
                    <EV href="https://github.com/siavash-debug/agentic-workflow-engine" label="View Repository" />
                    <span className="detail-v" style={{ marginTop: '1rem' }}>Recovery capability and state machine are documented in the repository README, not asserted here.</span>
                  </>
                ),
              },
            ]}
            figure={<AgentLoopSchematic />}
          />

          <Project
            meta="RAG · OCR · GROUNDING · EVALUATION"
            title="ProofDesk"
            tagKind="sky"
            tag="RAG"
            blurb={
              <>
                A document QA system designed to know when it does not know. PDFs move through extraction, OCR fallback, cleaning, chunking, retrieval and
                grounding before an answer is presented — every answer cited to source documents, and validated by an automated golden evaluation dataset
                (direct, borderline, irrelevant and multi-document cases) scored for correctness, faithfulness and contextual relevancy.
                The point is not generating an answer; it is knowing whether the answer is right.
              </>
            }
            tags={['RAG', 'OCR', 'Chroma', 'Embeddings', 'DeepEval', 'Evaluation']}
            repoLabel="Repository"
            repoUrl="https://github.com/siavash-debug/proofdesk"
            repoCta="View Repository ↗"
            detailSummary="Inspect the system"
            detail={[
              {
                k: 'Problem',
                v: 'A retrieval-augmented assistant answering over credential and certificate documents must not guess. Standard RAG pipelines answer confidently from topically-related chunks even when the chunk does not contain the answer, and evaluation is usually manual spot-checking — which is how a system ships that fabricates facts about a person\'s qualifications.',
              },
              {
                k: 'System',
                v: (
                  <>
                    PDFs flow through extraction (pdfplumber) with Tesseract OCR fallback for scanned documents, then cleaning, chunking, embedding and a Chroma vector store. Retrieval uses a deliberately loose relevance threshold tuned for recall. A FastAPI backend exposes <code>POST /chat</code> with grounding verification before any answer is generated; a plain HTML/CSS/JS frontend renders the chat UI with source citations by filename.
                  </>
                ),
              },
              {
                k: 'Engineering',
                v: (
                  <>
                    <strong>Two-layer hallucination defense:</strong> retrieval favors recall over precision, and the generation prompt is separately instructed to verify the retrieved chunk actually contains the answer and to say "not found" otherwise. Neither layer is trusted alone.<br />
                    <strong>OCR error correction:</strong> Tesseract output is cleaned by an LLM (Groq's gpt-oss-120b) rather than regex heuristics, because misreads like a Roman numeral "I" rendered as a stray "|" need contextual judgment. The correction prompt was refined against a real recurring failure pattern until it held up reliably.<br />
                    <strong>Evaluation-driven fix:</strong> a formal golden-dataset eval surfaced real false negatives on terse, list-style content — a bare "Skills" bullet list embeds poorly against a natural-language question. Fixed by embedding a distinct, LLM-friendly description of the section separately from the text shown to the user. Display text is never altered.<br />
                    <strong>Chunking matched to document shape:</strong> short certificates are kept as one chunk (their facts only make sense together); resumes are split by section, so a "Skills" question does not pull in unrelated work history.<br />
                    <strong>Privacy by design:</strong> the project uses sample, synthetic documents — a fictional resume and two fictional certificates — never real personal or credential data, so eval logs, embeddings and test fixtures are freely runnable and shareable.
                  </>
                ),
              },
              {
                k: 'Evidence',
                v: (
                  <>
                    <div className="detail-row">
                      <span className="detail-v" style={{ margin: 0 }}>DeepEval golden dataset covering direct-fact questions, borderline "plausible but wrong" queries, fully irrelevant queries, and a multi-document synthesis case. Scored on Correctness, Faithfulness and Contextual Relevancy. Re-run on every meaningful pipeline change so regressions are caught by a rerun instead of a hunch.</span>
                    </div>
                    <EV href="https://github.com/siavash-debug/proofdesk" label="View Repository" />
                    <span className="detail-v" style={{ marginTop: '1rem' }}>Architecture decision history is documented in the repository's CLAUDE.md, written as the project was built rather than reconstructed after the fact.</span>
                  </>
                ),
              },
            ]}
            figure={<ProofDeskSchematic />}
          />

          <Project
            meta="GENERATIVE AI · IMAGE GENERATION · BENCHMARKING"
            title="Text-to-Image Generation & Benchmarking"
            tagKind="emerald"
            tag="Generative AI"
            blurb={
              <>
                Built and evaluated a text-to-image generation system for generative graphics — not just producing images, but measuring them: systematic
                benchmarking of generated output quality, with iterative improvement of the generation workflow driven by benchmark results.
                Generation → benchmark → evaluate → improve.
              </>
            }
            tags={['Generative AI', 'Image Generation', 'Benchmarking', 'Evaluation']}
            repoLabel="Repo in progress"
            repoUrl="https://github.com/siavash-debug"
            repoCta="GitHub →"
            detailSummary="Methodology (no public artifacts yet)"
            detail={[
              {
                k: 'Problem',
                v: 'Generating images is easy; knowing whether the generated images are actually good, consistent and useful for a specific purpose is not. Without a benchmark, improvements to prompts, models or preprocessing are guesses — you cannot tell whether a change helped or whether the last run was unusually good or bad.',
              },
              { k: 'System', v: 'A text-to-image generation pipeline paired with a systematic benchmarking harness. Output is measured and the measurement feeds back into the generation workflow in an iterative loop.' },
              { k: 'Engineering', v: 'The core discipline here is the evaluation loop itself: generation produces output, benchmarking measures it against criteria, evaluation judges whether the measurement is meaningful, and improvement changes the generation workflow. No measured results, benchmark scores, or model comparisons are published for this project, and none should be inferred.' },
              {
                k: 'Evidence',
                v: (
                  <>
                    <div className="detail-row">
                      <span className="detail-v" style={{ margin: 0 }}>No public repository, benchmark dataset, or published results exist for this project yet. The methodology described is the intended approach, not a completed measurement. The GitHub profile is the only verifiable reference point.</span>
                    </div>
                    <EV href="https://github.com/siavash-debug" label="GitHub profile" />
                  </>
                ),
              },
            ]}
            figure={<TextToImageSchematic />}
          />

          <Project
            meta="AI ENGINEERING · AGENT CONTRACTS · VERIFICATION"
            title="AI Coding Base"
            tagKind="sky"
            tag="Agent Contracts"
            blurb={
              <>
                An engineering contract for AI-assisted software development. Instead of trusting generated code, the workflow forces every AI-assisted change
                through explicit contracts — AGENTS.md as the engineering source of truth — then a verification loop of formatting, linting, type checking, tests,
                build verification and minimal smoke proofs, with CI keeping the loop reproducible.
              </>
            }
            tags={['Agent Contracts', 'Verification Loop', 'CI', 'Quality Gates']}
            repoLabel="Repository"
            repoUrl="https://github.com/siavash-debug/ai-coding-base"
            repoCta="View Repository ↗"
            detailSummary="Inspect the system"
            detail={[
              { k: 'Problem', v: 'AI-assisted development produces code faster, but speed without a contract means generated code that does not compile, fails type checking, or breaks existing tests — and the failure is discovered only after the fact, by a human reviewer.' },
              { k: 'System', v: 'A reusable professional AI Engineering coding workspace baseline. AGENTS.md is the normative engineering contract and source of truth. The repository is explicitly a workspace baseline, not an application or framework — it is designed to be cloned as the starting point for future projects.' },
              {
                k: 'Engineering',
                v: (
                  <>
                    <strong>Contract as source of truth:</strong> AGENTS.md defines the engineering rules that AI-assisted work must follow, making the expectations explicit and machine-checkable rather than implicit and reviewer-dependent.<br />
                    <strong>Verification loop:</strong> formatting, linting, type checking, tests, build verification and minimal smoke proofs form a gate that every change must pass. CI keeps the loop reproducible across runs.<br />
                    <strong>Explicit scope:</strong> in scope are agent contracts, the verification loop, minimal smoke proofs, scripts, docs and CI. Out of scope are application/business logic, frameworks, Python/uv, Docker, eval infrastructure, databases and APIs — those belong to future projects cloned from this template, so the baseline stays clean.
                  </>
                ),
              },
              {
                k: 'Evidence',
                v: (
                  <>
                    <div className="detail-row">
                      <span className="detail-v" style={{ margin: 0 }}>3 commits. MIT licensed. Verification pipeline: Prettier check → ESLint → TypeScript --noEmit → Vitest → TypeScript emit to dist/, orchestrated by <code>scripts/verify.sh</code>.</span>
                    </div>
                    <EV href="https://github.com/siavash-debug/ai-coding-base" label="View Repository" />
                  </>
                ),
              },
            ]}
            figure={<AiCodingBaseSchematic />}
          />

          <Project
            meta="SEARCH · MATCHING · DATA PIPELINES · AUTOMATION"
            title="Smart Finder"
            tagKind="emerald"
            tag="Search"
            blurb={
              <>
                A property discovery engine that matches human intent against noisy real-world listings: user-described apartment requirements are matched against
                Persian listings, with normalization, duplicate detection for the same physical property, change tracking and alerts — running on data pipelines
                and a worker architecture with structured verification gates and careful handling of untrusted listing text.
              </>
            }
            tags={['Next.js', 'PostgreSQL', 'Docker', 'Data Pipelines', 'Automation']}
            repoLabel="Repository"
            repoUrl="https://github.com/siavash-debug/smart-finder"
            repoCta="View Repository ↗"
            detailSummary="Inspect the system"
            detail={[
              {
                k: 'Problem',
                v: 'Real-estate listings are noisy, inconsistently described, and frequently describe the same physical property under different ads. Matching a human\'s apartment requirements against this data requires normalizing untrusted text, deduplicating across listings, and tracking changes over time — none of which a naive keyword search handles.',
              },
              {
                k: 'System',
                v: (
                  <>
                    A two-plane architecture: <code>apps/web</code> (Next.js 16, Persian RTL UI, serve plane) and <code>apps/worker</code> (long-running Node process, ingest plane), connected through workspace packages for shared env validation, structured logging, health shapes and a PostgreSQL/PostGIS database layer. Project memory lives in <code>docs/</code> — MASTER_PROMPT, PROJECT_CONTEXT, ARCHITECTURE, ROADMAP and DECISIONS — read before making changes.
                  </>
                ),
              },
              {
                k: 'Engineering',
                v: (
                  <>
                    <strong>Untrusted input handling:</strong> listing text is escaped on render, bound as SQL parameters, and never treated as instructions. Unknown attributes render as نامUnknown — never guessed, never coerced to false.<br />
                    <strong>Money as integer:</strong> prices are BIGINT Toman carried as bigint, never a float (ADR-0005). Timestamps are UTC internally and rendered Jalali only at the UI boundary.<br />
                    <strong>Verification gate:</strong> <code>npm run verify</code> runs format check → lint → typecheck → tests → build in order. This is the gate a phase must pass before it is considered complete.<br />
                    <strong>Health contracts:</strong> both planes expose <code>GET /healthz</code> (liveness, no dependencies) and <code>GET /readyz</code> (readiness, probes PostgreSQL), so the ingest and serve planes can each be monitored independently.<br />
                    <strong>Container-agnostic:</strong> images are plain Node images, not tied to any hosting provider. The worker and database can be deployed anywhere.
                  </>
                ),
              },
              {
                k: 'Evidence',
                v: (
                  <>
                    <div className="detail-row">
                      <span className="detail-v" style={{ margin: 0 }}>8 commits. Phase 0 — foundation only. No listings are collected yet and search is not available. Packages named in ARCHITECTURE.md but absent from the tree (normalizer, matching, telegram, scraper, ai) are created by the phase that first implements them.</span>
                    </div>
                    <EV href="https://github.com/siavash-debug/smart-finder" label="View Repository" />
                  </>
                ),
              },
            ]}
            figure={<SmartFinderSchematic />}
          />

          {/* LOTA research tracks: intentionally quieter than the engineering projects */}
          <div className="quiet-band mt-16 grid gap-12 border-t border-white/[0.08] pt-10 lg:grid-cols-2">
            <QuietTrack
              meta="LLM & AGENT SECURITY"
              title="LOTA Security"
              blurb="Security engineering for LLM-powered workflows and agentic systems, focused on threat modeling, trust boundaries, prompt injection, tool abuse, and security evaluation."
              tags={['Threat Modeling', 'Prompt Injection', 'Trust Boundaries']}
              figure={<LotaSecuritySchematic />}
              detail={[
                { k: 'Problem', v: 'LLM-powered workflows and agentic systems combine two threat surfaces: the model itself can be steered by prompt injection, and agents with tool access can abuse tools they are authorized to call. Neither threat is visible at the boundary where a workflow is "just calling an API."' },
                { k: 'System', v: 'A security engineering track for LOTA: threat modeling across the artifact lifecycle, explicit trust boundaries between untrusted inputs and the execution environment, defenses against prompt injection and tool abuse, and a security evaluation procedure for the workflows LOTA produces.' },
                { k: 'Evidence', v: <div className="detail-row"><span className="detail-v" style={{ margin: 0 }}>No repository, evaluation results, or published threat model exist for this track yet. The scope described is the intended direction, not a completed assessment.</span></div> },
              ]}
            />
            <QuietTrack
              meta="COMPUTER VISION · MULTIMODAL AI"
              title="LOTA Vision"
              blurb="A future computer vision and multimodal AI track exploring image understanding, visual reasoning, vision-language workflows, and multimodal evaluation."
              tags={['Image Understanding', 'Vision-Language', 'Multimodal Evaluation']}
              figure={<LotaVisionSchematic />}
              detail={[
                { k: 'Problem', v: 'Multimodal systems — models that consume images and text together — are early enough that the evaluation practices are still being worked out. Standard text metrics do not apply to visual output, and a vision-language workflow that produces an answer about an image needs a way to check whether the answer is actually grounded in what the image shows.' },
                { k: 'System', v: 'A future computer vision and multimodal AI track: image understanding, visual reasoning, vision-language workflows, and multimodal evaluation — the same lifecycle discipline as the rest of LOTA (artifact identity, provenance, evaluation, verification) applied to visual and vision-language outputs.' },
                { k: 'Evidence', v: <div className="detail-row"><span className="detail-v" style={{ margin: 0 }}>No repository, model, dataset, or published evaluation exists for this track yet. The scope described is the intended direction, not a completed implementation.</span></div> },
              ]}
            />
          </div>
        </div>
        <OpenSourceBand />
      </div>
    </section>
  )
}

function QuietTrack(p: {
  meta: string
  title: string
  blurb: string
  tags: string[]
  figure: ReactNode
  detail: DetailSectionData[]
}) {
  return (
    <article className="project quiet-track reveal border-t border-white/[0.08] pt-8">
      {p.figure}
      <div className="project-body mt-6 lg:mt-0">
        <div className="meta">{p.meta}</div>
        <h3 className="mt-2.5 text-lg font-semibold text-white">{p.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.blurb}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        <div className="mt-5 font-mono text-[11px] text-slate-500">Track in progress · Coming soon</div>
        <ProjectDetail summary="Scope (no artifacts yet)" sections={p.detail} />
      </div>
    </article>
  )
}

function OpenSourceBand() {
  return (
    <div className="reveal mt-16 grid gap-10 border-t border-white/[0.08] pt-10 lg:grid-cols-[1.45fr_0.55fr] lg:gap-16">
      <div>
        <h3 className="text-base font-medium text-white">Everything ships to GitHub first</h3>
        <p className="mt-3 max-w-xl text-sm leading-[1.8] text-slate-400">
          Repositories, commits and work in progress live on the profile — including <span className="text-slate-300">devtycoon</span>, a technical startup simulator game built with React, and{' '}
          <span className="text-slate-300">llm-text-intel</span>, a small production-oriented application demonstrating LLM API integration, structured output, bounded retries with an error taxonomy, evaluation, observability and cost/latency awareness.
        </p>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] text-slate-500">
          <span>agentic-workflow-engine</span>
          <span aria-hidden="true" className="text-emerald-400/40">·</span>
          <span>proofdesk</span>
          <span aria-hidden="true" className="text-emerald-400/40">·</span>
          <span>smart-finder</span>
          <span aria-hidden="true" className="text-emerald-400/40">·</span>
          <span>ai-coding-base</span>
          <span aria-hidden="true" className="text-emerald-400/40">·</span>
          <span>llm-text-intel</span>
          <span aria-hidden="true" className="text-emerald-400/40">·</span>
          <span>devtycoon</span>
        </div>
        <a href="https://github.com/siavash-debug" target="_blank" rel="noopener" className="quiet-link mt-4 inline-flex items-center gap-2 font-mono text-xs">
          github.com/siavash-debug
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
        </a>
      </div>
      <div className="lg:border-l lg:border-white/[0.08] lg:pl-10">
        <h3 className="text-base font-medium text-white">Case study coming soon</h3>
        <p className="mt-3 text-sm leading-[1.8] text-slate-400">LOTA.design is an architecture direction, not yet a shipped platform. The full case study on artifact identity and provenance is in progress.</p>
      </div>
    </div>
  )
}
