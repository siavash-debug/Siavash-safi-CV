import type { ReactNode } from 'react'

export interface DetailSectionData {
  k: string
  v: ReactNode
}

interface ProjectDetailProps {
  summary: string
  sections: DetailSectionData[]
}

/**
 * Progressive disclosure via native <details>/<summary>. The chevron rotation
 * is handled purely in CSS through the [open] attribute selector, so React
 * holds no state for it — the native element does all the work.
 */
export function ProjectDetail({ summary, sections }: ProjectDetailProps) {
  return (
    <details className="project-detail">
      <summary className="project-detail-summary">
        <span>{summary}</span>
        <svg className="project-detail-chevron h-4 w-4" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg>
      </summary>
      <div className="project-detail-inner">
        {sections.map((s) => (
          <div className="detail-section" key={s.k}>
            <div className="detail-k">{s.k}</div>
            <div className="detail-v">{s.v}</div>
          </div>
        ))}
      </div>
    </details>
  )
}
