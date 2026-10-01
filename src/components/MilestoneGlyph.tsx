interface MilestoneGlyphProps {
  name: 'modules' | 'values' | 'linked' | 'model' | 'plan' | 'evaluate'
}

const BASE = {
  viewBox: '0 0 24 24',
  fill: 'none',
  strokeWidth: 1.1,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

/** Small schematic glyphs from the PATH milestone register, ported 1:1. */
export function MilestoneGlyph({ name }: MilestoneGlyphProps) {
  switch (name) {
    case 'modules':
      return (
        <svg {...BASE}>
          <g stroke="rgba(255,255,255,.36)"><rect x="3.75" y="4.25" width="6.5" height="4.2" /><rect x="3.75" y="9.9" width="6.5" height="4.2" /><rect x="3.75" y="15.55" width="6.5" height="4.2" /></g>
          <path d="M10.25 6.35h3.1c1.1 0 1.7.55 1.95 1.5v1.15M10.25 12h5.15M10.25 17.65h3.1c1.1 0 1.7-.55 1.95-1.5V15" stroke="rgba(255,255,255,.30)" />
          <rect x="16.1" y="8.4" width="4.4" height="7.2" fill="rgba(94,234,212,.10)" stroke="rgba(94,234,212,.62)" />
        </svg>
      )
    case 'values':
      return (
        <svg {...BASE}>
          <g stroke="rgba(255,255,255,.36)"><rect x="3.75" y="4.4" width="3.8" height="3.8" /><rect x="3.75" y="10.1" width="3.8" height="3.8" /><rect x="3.75" y="15.8" width="3.8" height="3.8" /></g>
          <path d="M7.55 6.3h3.1c2.35 0 3.55 1.35 4.5 2.85M7.55 12h7.6M7.55 17.7h3.1c2.35 0 3.55-1.35 4.5-2.85" stroke="rgba(94,234,212,.55)" />
          <rect x="15.6" y="6.6" width="4.4" height="10.8" fill="rgba(94,234,212,.10)" stroke="rgba(94,234,212,.62)" />
        </svg>
      )
    case 'linked':
      return (
        <svg {...BASE}>
          <g stroke="rgba(255,255,255,.36)"><rect x="3.75" y="9.3" width="6.6" height="5.4" /><rect x="13.65" y="9.3" width="6.6" height="5.4" /></g>
          <path d="M10.35 12h3.3" stroke="rgba(94,234,212,.70)" />
          <path d="M6.75 9.3V6.2h10.5v3.1" stroke="rgba(255,255,255,.22)" strokeDasharray="2.6 2.6" />
        </svg>
      )
    case 'model':
      return (
        <svg {...BASE}>
          <g stroke="rgba(255,255,255,.36)"><rect x="3.75" y="4.6" width="5.6" height="3.9" /><rect x="3.75" y="15.5" width="5.6" height="3.9" /></g>
          <path d="M9.35 6.55 12.6 9.9M9.35 17.45 12.6 14.1" stroke="rgba(94,234,212,.50)" />
          <circle cx="15.2" cy="12" r="3.3" fill="rgba(94,234,212,.10)" stroke="rgba(94,234,212,.62)" />
          <path d="M18.5 12h2.1" stroke="rgba(255,255,255,.32)" />
        </svg>
      )
    case 'plan':
      return (
        <svg {...BASE}>
          <rect x="3.6" y="6.6" width="16.8" height="10.8" rx="5.4" stroke="rgba(255,255,255,.30)" />
          <rect x="8.1" y="10.9" width="2.2" height="2.2" fill="rgba(94,234,212,.85)" />
          <rect x="11.5" y="10.9" width="2.2" height="2.2" fill="rgba(255,255,255,.34)" />
          <rect x="14.9" y="10.9" width="2.2" height="2.2" fill="rgba(255,255,255,.34)" />
          <path d="M17.1 19.1c-1.9 3.1-8.3 3.1-10.2 0" stroke="rgba(94,234,212,.50)" strokeDasharray="2.6 2.6" />
        </svg>
      )
    case 'evaluate':
      return (
        <svg {...BASE}>
          <rect x="4.4" y="3.9" width="15.2" height="15.2" rx="2.2" fill="rgba(94,234,212,.06)" stroke="rgba(94,234,212,.55)" />
          <path d="M8.6 11.9l2.6 2.6 4.6-5.7" stroke="#5eead4" strokeWidth="1.5" />
          <path d="M18.2 14.2c1 3.6-1.6 6.1-5.9 6.1" stroke="rgba(255,255,255,.28)" strokeDasharray="2.6 2.6" />
        </svg>
      )
  }
}
