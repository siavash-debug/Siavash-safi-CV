import { useEffect, useRef } from 'react'
import { useBodyScrollLock } from '../hooks/useBodyScrollLock'

interface PhotoModalProps {
  open: boolean
  onClose: () => void
  lastTrigger: HTMLElement | null
}

export function PhotoModal({ open, onClose, lastTrigger }: PhotoModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  useBodyScrollLock(open)

  useEffect(() => {
    if (!open) {
      if (lastTrigger && document.contains(lastTrigger)) lastTrigger.focus()
      return
    }
    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab') return
      const focusables = modalRef.current?.querySelectorAll<HTMLElement>('button, [href]')
      if (!focusables || !focusables.length) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose, lastTrigger])

  if (!open) return null

  return (
    <div ref={modalRef} className="photo-modal" role="dialog" aria-modal="true" aria-label="Profile photo preview">
      <div className="photo-modal-backdrop" onClick={onClose} />
      <figure className="photo-modal-card">
        <img src="assets/images/profile.jpg" alt="Enlarged profile photo of Siavash Safi" width={1280} height={1280} decoding="async" />
        <button ref={closeRef} className="photo-modal-close" type="button" onClick={onClose} aria-label="Close profile photo preview">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
        </button>
      </figure>
    </div>
  )
}
