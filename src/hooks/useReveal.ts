import { useEffect } from 'react'

/**
 * Progressively arms reveal-on-scroll animation for elements carrying .reveal
 * that start below the fold. Content is never gated behind JavaScript: by
 * default everything is visible; arming only happens when the visitor has not
 * asked for reduced motion. A safety net un-hides everything after 4s.
 */
export function useReveal(deps: readonly unknown[] = []) {
  useEffect(() => {
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !('IntersectionObserver' in window)) return

    const revealIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (!e.isIntersecting) return
          window.setTimeout(() => e.target.classList.add('in'), Math.min(i * 70, 260))
          revealIO.unobserve(e.target)
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    )
    revealEls.forEach((el) => {
      if (el.getBoundingClientRect().top > window.innerHeight * 0.9) {
        el.classList.add('reveal-armed')
        revealIO.observe(el)
      }
    })
    // safety net: if the observer never fires, nothing may stay hidden
    const t = window.setTimeout(() => revealEls.forEach((el) => el.classList.add('in')), 4000)
    return () => {
      window.clearTimeout(t)
      revealIO.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
