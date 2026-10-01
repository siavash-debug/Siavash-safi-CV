import { useEffect } from 'react'

/**
 * Scroll-linked page chrome — scroll progress bar, sticky nav state and the
 * PATH section's progress rail — coalesced into a single rAF-scheduled pass,
 * exactly like the original script. Runs on mount; passive listeners.
 */
export function useScrollChrome() {
  useEffect(() => {
    const progressEl = document.getElementById('scrollProgress')
    const pathStages = document.getElementById('pathStages')
    const navEl = document.getElementById('top')
    let chromeQueued = false

    const paintChrome = () => {
      chromeQueued = false
      const y = window.scrollY || document.documentElement.scrollTop
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (progressEl) {
        progressEl.style.setProperty('--progress', (max > 0 ? Math.min(1, y / max) * 100 : 0).toFixed(2) + '%')
      }
      if (navEl) navEl.classList.toggle('is-scrolled', y > 8)
      if (pathStages) {
        const box = pathStages.getBoundingClientRect()
        const travelled = (window.innerHeight * 0.75 - box.top) / Math.max(1, box.height)
        pathStages.style.setProperty('--rail', (Math.max(0, Math.min(1, travelled)) * 100).toFixed(1) + '%')
      }
    }

    const queueChrome = () => {
      if (!chromeQueued) {
        chromeQueued = true
        window.requestAnimationFrame(paintChrome)
      }
    }

    window.addEventListener('scroll', queueChrome, { passive: true })
    window.addEventListener('resize', queueChrome)
    paintChrome()
    return () => {
      window.removeEventListener('scroll', queueChrome)
      window.removeEventListener('resize', queueChrome)
    }
  }, [])
}
