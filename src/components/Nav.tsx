import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from 'react'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#focus', label: 'Focus' },
  { href: '#path', label: 'Path' },
  { href: '#work', label: 'Work' },
  { href: '#principles', label: 'Principles' },
  { href: '#skills', label: 'Skills' },
  { href: '#certs', label: 'Credentials' },
]

const MOBILE_LINKS = [
  { href: '#about', label: 'About', num: '01' },
  { href: '#focus', label: 'Focus areas', num: '02' },
  { href: '#path', label: 'Path', num: '03' },
  { href: '#work', label: 'Work', num: '04' },
  { href: '#principles', label: 'Principles', num: '05' },
  { href: '#skills', label: 'Skills', num: '06' },
  { href: '#certs', label: 'Credentials', num: '07' },
]

const GITHUB_PATH =
  'M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.79-.25.79-.55v-2.1c-3.2.7-3.88-1.4-3.88-1.4-.53-1.34-1.3-1.7-1.3-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.03 1.78 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .96-.3 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.48 3.14-1.18 3.14-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .3.2.66.8.55A11.5 11.5 0 0 0 12 .5Z'

interface NavProps {
  onOpenPhoto: (e?: ReactMouseEvent<HTMLElement>) => void
}

export function Nav({ onOpenPhoto }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuBtnRef = useRef<HTMLButtonElement>(null)

  // Close the mobile menu on Escape or outside click; restore focus to the button.
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        menuBtnRef.current?.focus()
      }
    }
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      if (!t.closest('header')) setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('click', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('click', onClick)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header id="top" className="fixed inset-x-0 top-0 z-50">
      <div className="nav-bg absolute inset-0 border-b border-white/[0.07] bg-ink-950/70 backdrop-blur-md transition-colors duration-300" />
      <nav aria-label="Primary" className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-haspopup="dialog"
            aria-label="View profile photo"
            onClick={(e) => onOpenPhoto(e)}
            className="h-9 w-9 overflow-hidden rounded-full border border-white/12 p-0 transition hover:border-emerald-400/60"
          >
            <img src="assets/images/profile.jpg" alt="" width={36} height={36} className="h-full w-full object-cover object-center" />
          </button>
          <a href="#top" className="flex flex-col">
            <span className="block text-sm font-semibold leading-tight tracking-tight text-white">Siavash Safi</span>
            <span className="block font-mono text-[10px] leading-tight tracking-[.18em] text-emerald-300/80">AI ENGINEER</span>
          </a>
        </div>

        <div className="hidden items-center gap-7 text-[13px] font-medium text-slate-400 md:flex">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link transition hover:text-white">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/siavash-debug"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-slate-400 transition hover:border-emerald-400/50 hover:text-emerald-300"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d={GITHUB_PATH} /></svg>
          </a>
          <button
            ref={menuBtnRef}
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-slate-300 transition hover:border-emerald-400/50 md:hidden"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          </button>
        </div>
      </nav>

      {!menuOpen ? null : (
        <div className="border-t border-white/[0.07] bg-ink-950/95 backdrop-blur-xl md:hidden">
          <nav aria-label="Mobile" className="mx-auto grid max-w-6xl divide-y divide-white/[0.06] px-5 py-2 text-sm">
            {MOBILE_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={closeMenu} className="flex items-center justify-between py-3 text-slate-300 transition hover:text-white">
                <span>{l.label}</span>
                <span className="meta">{l.num}</span>
              </a>
            ))}
            <a href="mailto:siavashsafi76@gmail.com" className="block py-3 font-mono text-[12px] text-emerald-300">siavashsafi76@gmail.com</a>
          </nav>
        </div>
      )}
    </header>
  )
}
