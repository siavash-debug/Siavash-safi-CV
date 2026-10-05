import { useRef, useState, type MouseEvent as ReactMouseEvent } from 'react'
import { Nav } from './components/Nav'
import { PhotoModal } from './components/PhotoModal'
import { Hero } from './components/Hero'
import { SectionDivider } from './components/SectionDivider'
import { About } from './components/About'
import { Focus } from './components/Focus'
import { Path } from './components/Path'
import { Work } from './components/Work'
import { Principles } from './components/Principles'
import { Skills } from './components/Skills'
import { Certs } from './components/Certs'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useReveal } from './hooks/useReveal'
import { useScrollChrome } from './hooks/useScrollChrome'

import { useNavSpy } from './hooks/useNavSpy'


export default function App() {
  const [photoOpen, setPhotoOpen] = useState(false)
  const lastTriggerRef = useRef<HTMLElement | null>(null)

  useReveal([])
  useScrollChrome()
  
  useNavSpy()

  const openPhoto = (e?: ReactMouseEvent<HTMLElement>) => {
    lastTriggerRef.current = (e?.currentTarget as HTMLElement) ?? null
    setPhotoOpen(true)
  }

  return (
    <>
      {/* scroll progress */}
      <div className="scroll-progress" aria-hidden="true">
        <span id="scrollProgress" />
      </div>

      <a className="skip-link" href="#main">Skip to main content</a>

      <Nav onOpenPhoto={openPhoto} />
      <PhotoModal
        open={photoOpen}
        onClose={() => setPhotoOpen(false)}
        lastTrigger={lastTriggerRef.current}
      />

      <main id="main" tabIndex={-1}>
        <Hero onOpenPhoto={openPhoto} />
        <SectionDivider>{null}</SectionDivider>
        <About />
        <SectionDivider>{null}</SectionDivider>
        <Focus />
        <SectionDivider>{null}</SectionDivider>
        <Path />
        <SectionDivider>{null}</SectionDivider>
        <Work />
        <SectionDivider>{null}</SectionDivider>
        <Principles />
        <SectionDivider>{null}</SectionDivider>
        <Skills />
        <SectionDivider>{null}</SectionDivider>
        <Certs />
        <SectionDivider>{null}</SectionDivider>
        <Contact />
      </main>

      <Footer />
    </>
  )
}
