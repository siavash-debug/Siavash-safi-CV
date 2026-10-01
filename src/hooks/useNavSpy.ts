import { useEffect } from 'react'

const SECTION_IDS = ['about', 'focus', 'path', 'work', 'principles', 'skills', 'certs'] as const

/** Highlights the nav link whose section crosses the viewport middle band. */
export function useNavSpy() {
  useEffect(() => {
    const navMap = new Map<Element, HTMLElement>()
    SECTION_IDS.forEach((id) => {
      const link = document.querySelector<HTMLAnchorElement>(`a.nav-link[href="#${id}"]`)
      const el = document.getElementById(id)
      if (link && el) navMap.set(el, link)
    })
    if (!('IntersectionObserver' in window) || navMap.size === 0) return

    const navIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const link = navMap.get(e.target)
          if (!link) return
          if (e.isIntersecting) {
            navMap.forEach((l) => l.classList.remove('active'))
            link.classList.add('active')
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    navMap.forEach((_link, el) => navIO.observe(el))
    return () => navIO.disconnect()
  }, [])
}
