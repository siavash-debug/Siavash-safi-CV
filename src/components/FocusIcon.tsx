interface FocusIconProps {
  name: 'agentic' | 'reliability' | 'applications' | 'infra' | 'systems' | 'delivery'
}

const PATH_PROPS = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

/** Sixteen-ish stroke icon set matching the original inline SVGs. */
export function FocusIcon({ name }: FocusIconProps) {
  const cls = `h-5 w-5 ${name === 'infra' || name === 'systems' || name === 'delivery' ? 'text-sky-300' : 'text-emerald-300'}`
  switch (name) {
    case 'agentic':
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={cls} {...PATH_PROPS}>
          <circle cx="12" cy="5" r="2.2" />
          <circle cx="5" cy="18" r="2.2" />
          <circle cx="19" cy="18" r="2.2" />
          <path d="M12 7.2v4.3M10.4 12.6 6.4 16.5M13.6 12.6l4 3.9" />
        </svg>
      )
    case 'reliability':
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={cls} {...PATH_PROPS}>
          <path d="M12 3l7.5 4v5.2c0 4.4-3 8-7.5 9.3-4.5-1.3-7.5-4.9-7.5-9.3V7z" />
          <path d="m9 12 2.2 2.2L15.4 10" />
        </svg>
      )
    case 'applications':
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={cls} {...PATH_PROPS}>
          <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4H12v16H6.5A2.5 2.5 0 0 1 4 17.5z" />
          <path d="M12 4h5.5A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5H12" />
          <path d="M7.5 8.5h2M7.5 12h2M14.5 8.5h2" />
        </svg>
      )
    case 'infra':
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={cls} {...PATH_PROPS}>
          <rect x="3.5" y="4" width="17" height="5" rx="1.6" />
          <rect x="3.5" y="15" width="17" height="5" rx="1.6" />
          <path d="M12 9v6M9.4 12h5.2" />
        </svg>
      )
    case 'systems':
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={cls} {...PATH_PROPS}>
          <path d="M7 8.5h10M7 12h10M7 15.5h6" />
          <rect x="3.5" y="4.5" width="17" height="15" rx="2.2" />
        </svg>
      )
    case 'delivery':
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={cls} {...PATH_PROPS}>
          <path d="M12 3.5 20 8v8l-8 4.5L4 16V8z" />
          <path d="M12 12v8.5M12 12 4 8M12 12l8-4" />
        </svg>
      )
  }
}
