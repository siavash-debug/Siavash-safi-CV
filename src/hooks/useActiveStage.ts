import { useEffect } from 'react'

/**
 * Active PATH stage highlight (premium editorial — not telemetry).
 * Single source of truth: the active stage is the one whose visual center is
 * closest to the viewport center. Measured on scroll via one rAF-scheduled
 * pass; classes are only written when the stage actually changes. If the
 * scroll position moved since the previous pass, one more pass is scheduled
 * so a fast scroll can never settle on a stale measurement.
 */
export function useActiveStage(stageCount: number) {
  useEffect(() => {
    const stages = Array.from(document.querySelectorAll<HTMLElement>('#pathStages .path-stage'))
    if (!stages.length) return

    let activeStage: HTMLElement | null = null
    let frameQueued = false
    let lastScrollY = -1

    const updateActiveStage = () => {
      frameQueued = false
      const y = window.scrollY
      const viewportCenter = window.innerHeight * 0.5
      let closest: HTMLElement = stages[0]
      let closestDist = Infinity
      stages.forEach((s) => {
        const box = s.getBoundingClientRect()
        const dist = Math.abs(box.top + box.height * 0.5 - viewportCenter)
        if (dist < closestDist) {
          closestDist = dist
          closest = s
        }
      })
      if (closest && closest !== activeStage) {
        activeStage = closest
        stages.forEach((s) => s.classList.toggle('is-active', s === closest))
      }
      if (y !== lastScrollY) {
        lastScrollY = y
        queueActiveStage()
      }
    }
    const queueActiveStage = () => {
      if (!frameQueued) {
        frameQueued = true
        window.requestAnimationFrame(updateActiveStage)
      }
    }

    window.addEventListener('scroll', queueActiveStage, { passive: true })
    window.addEventListener('resize', queueActiveStage)
    updateActiveStage()
    return () => {
      window.removeEventListener('scroll', queueActiveStage)
      window.removeEventListener('resize', queueActiveStage)
    }
  }, [stageCount])
}
