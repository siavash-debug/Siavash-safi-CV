import { useMemo, useState } from 'react'
import { CERTS, TRACKS, TRACK_TONE, type Track } from '../data/content'

const TONE_CLASS: Record<string, string> = {
  emerald: 'cert-card--emerald',
  teal: 'cert-card--teal',
  sky: 'cert-card--sky',
  cyan: 'cert-card--cyan',
  amber: 'cert-card--amber',
  slate: 'cert-card--slate',
}

export function Certs() {
  const [activeTrack, setActiveTrack] = useState<'all' | Track>('all')
  const [query, setQuery] = useState('')

  const counts = useMemo(() => {
    const c = {} as Record<Track, number>
    CERTS.forEach((cert) => {
      c[cert.track] = (c[cert.track] || 0) + 1
    })
    return c
  }, [])

  const items = useMemo(() => {
    const q = query.trim().toLowerCase()
    return CERTS.filter((c) => {
      const matchesTrack = activeTrack === 'all' || c.track === activeTrack
      const hay = `${c.t} ${c.iss} ${c.track} ${c.d} ${c.id}`.toLowerCase()
      return matchesTrack && (q === '' || hay.includes(q))
    })
  }, [activeTrack, query])

  const tracksWithCerts = TRACKS.filter((t) => counts[t])

  return (
    <section id="certs" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal max-w-3xl">
          <div className="meta text-emerald-300/85">07 — CREDENTIALS</div>
          <h2 className="mt-4 text-[2rem] font-semibold leading-[1.08] tracking-[-0.025em] text-white sm:text-[2.75rem] sm:leading-[1.08]">
            Licenses &amp; certifications
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-400">
            Evidence of the data, ML and systems foundation behind the AI work — from data science and deep learning to blockchain, security and cloud.
            Filter by track or search below.
          </p>
        </div>

        <div className="reveal mt-9 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div role="group" aria-label="Filter certifications by track" className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveTrack('all')}
              aria-pressed={activeTrack === 'all'}
              className={`cert-filter tag ${activeTrack === 'all' ? 'text-emerald-300 border-emerald-400/45' : ''}`}
            >
              ALL
            </button>
            {TRACKS.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setActiveTrack(t)}
                aria-pressed={activeTrack === t}
                className={`cert-filter tag ${activeTrack === t ? 'text-emerald-300 border-emerald-400/45' : ''}`}
              >
                {t.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="relative lg:w-64">
            <svg viewBox="0 0 24 24" className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              type="search"
              aria-label="Search certifications"
              placeholder="Search certifications…"
              autoComplete="off"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full border border-white/[0.09] bg-transparent py-2.5 pl-10 pr-4 text-sm text-slate-200 placeholder-slate-500 outline-none transition focus:border-emerald-400/50"
            />
          </div>
        </div>

        <div className="reveal mt-12 border-t border-white/[0.08] pt-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="meta">Distribution by track</span>
            <span className="meta">{tracksWithCerts.length} tracks</span>
          </div>
          <div className="mt-4 flex h-1 w-full overflow-hidden bg-white/[0.06]">
            {tracksWithCerts.map((t) => (
              <span
                key={t}
                className={`track-seg ${TONE_CLASS[TRACK_TONE[t]]}`}
                style={{ width: `${((counts[t] / CERTS.length) * 100).toFixed(2)}%` }}
              />
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px]">
            {tracksWithCerts.map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-slate-500">
                <span className={`cert-dot ${TONE_CLASS[TRACK_TONE[t]]}`} />
                {t} <span className="text-slate-600">{counts[t]}</span>
              </span>
            ))}
          </div>
        </div>

        <p aria-live="polite" className="meta mt-12">
          SHOWING {items.length} OF {CERTS.length}
        </p>

        <div className="mt-4 border-t border-white/[0.08]">
          {items.map((c) => {
            const tone = TRACK_TONE[c.track] || 'slate'
            return (
              <article key={`${c.t}-${c.id || c.d}`} className={`cert-row ${TONE_CLASS[tone]}`}>
                <div className="flex items-baseline gap-3 lg:flex-col lg:gap-1">
                  <span className="meta flex items-center gap-1.5 text-emerald-300/70">
                    <span className="cert-dot" aria-hidden="true" />
                    {c.track.toUpperCase()}
                  </span>
                  <span className="font-mono text-[10px] text-slate-500">{c.d}</span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-[15px] font-medium leading-snug text-white">{c.t}</h3>
                  <div className="mt-1 flex flex-wrap items-baseline gap-x-3 text-[13px] text-slate-500">
                    <span>{c.iss}</span>
                    <span className="font-mono text-[10px] text-slate-600">{c.id ? `ID ${c.id}` : 'Credential ID on record'}</span>
                  </div>
                </div>
                <div className="lg:text-right">
                  {c.url ? (
                    <a href={c.url} target="_blank" rel="noopener noreferrer" className="quiet-link inline-flex items-center gap-1.5 font-mono text-[11px]">
                      View Credential
                      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" /></svg>
                      <span className="sr-only">for {c.t}</span>
                    </a>
                  ) : (
                    <span className="font-mono text-[10px] text-slate-600">—</span>
                  )}
                </div>
              </article>
            )
          })}
        </div>
        {items.length === 0 && (
          <div className="border-t border-white/[0.08] py-10 text-center text-sm text-slate-400">
            No certifications match that filter.
          </div>
        )}
      </div>
    </section>
  )
}
