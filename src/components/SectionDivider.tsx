import type { ReactNode } from 'react'

interface SectionDividerProps {
  children: ReactNode
}

/** Hairline divider between sections, with the teal gradient tick on the left. */
export function SectionDivider(_props: SectionDividerProps) {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <div className="sec-rule" />
    </div>
  )
}
