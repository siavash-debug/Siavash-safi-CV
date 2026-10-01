import type { ReactNode } from 'react'

export interface SchematicBadge {
  label: string
}

interface SchematicProps {
  /** Unique id suffix so SVG marker ids stay unique per figure. */
  id: string
  children: ReactNode
  badge?: string
}

/**
 * Framed project figure: hairline schematic SVG with the shared arrow markers
 * (per-instance ids), ink gradient wash, optional status badge and hover glow.
 */
export function Schematic({ id, children, badge = 'IN PROGRESS' }: SchematicProps) {
  return (
    <div className="project-figure fig relative h-56 overflow-hidden">
      <svg viewBox="0 0 640 200" preserveAspectRatio="xMidYMid meet" className="sch-svg absolute inset-0" aria-hidden="true">
        <defs>
          <marker id={`sch-arrow-${id}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill="rgba(94,234,212,.7)" />
          </marker>
          <marker id={`sch-arrow-b-${id}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill="rgba(122,162,255,.6)" />
          </marker>
          <marker id={`sch-arrow-d-${id}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill="rgba(170,179,197,.5)" />
          </marker>
        </defs>
        {children}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/35 to-transparent" />
      {badge && (
        <div className="absolute left-5 top-5">
          <span className="border border-amber-400/25 bg-ink-950/85 px-2 py-1 font-mono text-[10px] tracking-[.16em] text-amber-300 backdrop-blur">{badge}</span>
        </div>
      )}
    </div>
  )
}

/* Small helpers so schematic children read like the original SVG source. */
export const Grid = () => (
  <g className="sch-grid">
    <line x1="0" y1="50" x2="640" y2="50" />
    <line x1="0" y1="100" x2="640" y2="100" />
    <line x1="0" y1="150" x2="640" y2="150" />
  </g>
)

export const Cap = (props: { x: number; y: number; anchor?: 'start' | 'middle' | 'end'; children: ReactNode }) => (
  <text className="sch-caption" x={props.x} y={props.y} textAnchor={props.anchor ?? 'start'}>{props.children}</text>
)

export const Layer = (props: { x: number; y: number; anchor?: 'start' | 'middle' | 'end'; children: ReactNode }) => (
  <text className="sch-layer" x={props.x} y={props.y} textAnchor={props.anchor ?? 'start'}>{props.children}</text>
)

export const Label = (props: { x: number; y: number; kind?: 'default' | 'accent' | 'blue'; anchor?: 'start' | 'middle' | 'end'; children: ReactNode }) => {
  const cls = props.kind === 'accent' ? 'sch-label-accent' : props.kind === 'blue' ? 'sch-label-blue' : 'sch-label'
  return <text className={cls} x={props.x} y={props.y} textAnchor={props.anchor ?? 'start'}>{props.children}</text>
}

export const Box = (props: { x: number; y: number; w: number; h: number; kind?: 'default' | 'accent' | 'blue' | 'dashed'; rx?: number }) => {
  const cls =
    props.kind === 'accent' ? 'sch-box-accent'
    : props.kind === 'blue' ? 'sch-box-blue'
    : props.kind === 'dashed' ? 'sch-box-dashed'
    : 'sch-box'
  return <rect className={cls} x={props.x} y={props.y} width={props.w} height={props.h} rx={props.rx} />
}

export const Flow = (props: { kind?: 'default' | 'blue' | 'dim'; d: string; marker: string }) => {
  const cls = props.kind === 'blue' ? 'sch-flow-blue' : props.kind === 'dim' ? 'sch-flow-dim' : 'sch-flow'
  const mk = props.kind === 'blue' ? `url(#sch-arrow-b-${props.marker})` : props.kind === 'dim' ? `url(#sch-arrow-d-${props.marker})` : `url(#sch-arrow-${props.marker})`
  return <path className={cls} d={props.d} markerEnd={mk} />
}
