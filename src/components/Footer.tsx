export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center border border-emerald-400/25 font-mono text-[11px] font-medium text-emerald-300">SS</span>
            <div>
              <div className="text-xs font-semibold text-slate-300">Siavash Safi</div>
              <div className="meta">AI ENGINEER · AGENTIC SYSTEMS · AI RELIABILITY</div>
            </div>
          </div>
          <div className="font-mono text-[11px] text-slate-500">Generate → Execute → Observe → Evaluate → Verify → Recover → Improve</div>
          <a href="#top" className="font-mono text-[11px] text-slate-500 transition hover:text-emerald-300">Back to top ↑</a>
        </div>
        <div className="mt-6 border-t border-white/[0.06] pt-6 text-center font-mono text-[11px] text-slate-500">
          © {year} Siavash Safi · LOTA.design™ — All rights reserved.
        </div>
      </div>
    </footer>
  )
}
