import React from 'react'

const Box = ({ x, y, width, height, label, kind = 'default', dashed = false, pulsing = false }: any) => {
  const isAccent = kind === 'accent'
  const isBlue = kind === 'blue'
  const fill = isAccent ? 'rgba(16, 185, 129, 0.08)' : isBlue ? 'rgba(6, 182, 212, 0.08)' : 'rgba(255, 255, 255, 0.04)'
  const stroke = isAccent ? '#10b981' : isBlue ? '#06b6d4' : 'rgba(255, 255, 255, 0.3)'
  const textColor = isAccent ? '#10b981' : isBlue ? '#06b6d4' : 'rgba(255, 255, 255, 0.9)'
  const strokeDash = dashed ? "4 4" : "none"
  const glowClass = isAccent ? 'glow-emerald' : isBlue ? 'glow-cyan' : ''
  const pulseClass = pulsing ? 'pulse-glow ' + glowClass : glowClass

  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={dashed ? "none" : fill} stroke={stroke} strokeWidth={isAccent || isBlue ? 2 : 1} strokeDasharray={strokeDash} rx={6} className={pulseClass} />
      {label && (
        <text x={x + width / 2} y={y + height / 2 + 4} fill={textColor} fontSize={10} fontFamily="monospace" textAnchor="middle" letterSpacing="0.05em" className={glowClass}>
          {label}
        </text>
      )}
    </g>
  )
}

const Flow = ({ d, kind = 'default', animated = true }: any) => {
  const stroke = kind === 'blue' ? '#06b6d4' : kind === 'accent' ? '#10b981' : 'rgba(255, 255, 255, 0.4)'
  const glowClass = kind === 'blue' ? 'glow-cyan' : kind === 'accent' ? 'glow-emerald' : ''
  const activeClass = animated ? 'path-active' : ''
  
  return (
    <path
      d={d}
      fill="none"
      stroke={stroke}
      
      className={`${activeClass} ${glowClass}`}
      markerEnd={`url(#aw-arrow-${kind})`}
    />
  )
}

const Point = ({ x, y, kind = 'default', pulsing = false }: any) => {
  const fill = kind === 'accent' ? '#10b981' : kind === 'blue' ? '#06b6d4' : 'rgba(255,255,255,0.7)'
  const glowClass = kind === 'accent' ? 'glow-emerald' : kind === 'blue' ? 'glow-cyan' : ''
  const pulseClass = pulsing ? 'pulse-glow ' + glowClass : glowClass
  return <circle cx={x} cy={y} r={3} fill={fill} className={pulseClass} />
}

const Canvas = ({ children }: { children: React.ReactNode }) => (
  <svg viewBox="0 0 400 300" className="w-full h-full block" preserveAspectRatio="xMidYMid meet">
    <defs>
      <marker id="aw-arrow-default" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" fill="rgba(255, 255, 255, 0.5)" />
      </marker>
      <marker id="aw-arrow-accent" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" fill="#10b981" />
      </marker>
      <marker id="aw-arrow-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" fill="#06b6d4" />
      </marker>
      <pattern id="aw-grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
      </pattern>
      <radialGradient id="aw-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(16,185,129,0.15)" />
        <stop offset="100%" stopColor="rgba(16,185,129,0)" />
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#aw-grid)" />
    <g transform="translate(20, 20)">
      {children}
    </g>
  </svg>
)

export function StageArtwork({ stageId }: { stageId: string }) {
  if (stageId === '01') {
    return (
      <Canvas>
        <Flow d="M 60 130 H 120" />
        <Flow d="M 200 130 H 260" kind="blue" />
        <Flow d="M 200 130 V 200 H 260" kind="blue" />
        <Flow d="M 200 130 V 60 H 260" kind="blue" />
        <Box x={0} y={115} width={60} height={30} label="CLIENT" />
        <Box x={120} y={115} width={80} height={30} label="API GW" kind="blue" pulsing />
        <Box x={260} y={45} width={80} height={30} label="AUTH" />
        <Box x={260} y={115} width={80} height={30} label="PAYMENT" />
        <Box x={260} y={185} width={80} height={30} label="BUSINESS" kind="accent" />
        <Point x={60} y={130} />
      </Canvas>
    )
  }

  if (stageId === '02') {
    return (
      <Canvas>
        <Flow d="M 80 130 H 130" kind="blue" />
        <Flow d="M 220 130 H 260" kind="accent" />
        <Flow d="M 220 130 V 60 H 260" kind="blue" />
        <Flow d="M 220 130 V 200 H 260" kind="accent" />
        <Box x={0} y={115} width={80} height={30} label="EVENT LOGS" />
        <Box x={130} y={105} width={90} height={50} label="DATA LAKE" kind="blue" pulsing />
        <Box x={260} y={45} width={80} height={30} label="ETL BATCH" />
        <Box x={260} y={115} width={80} height={30} label="STREAM" kind="blue" />
        <Box x={260} y={185} width={80} height={30} label="STAT MODEL" kind="accent" />
        <Point x={220} y={130} kind="blue" pulsing />
      </Canvas>
    )
  }

  if (stageId === '03') {
    return (
      <Canvas>
        <Flow d="M 120 130 L 180 70" kind="blue" />
        <Flow d="M 180 70 L 240 130" kind="accent" />
        <Flow d="M 240 130 L 180 190" kind="blue" />
        <Flow d="M 180 190 L 120 130" kind="accent" />
        <Flow d="M 180 190 V 240" kind="accent" />
        <Box x={150} y={55} width={60} height={30} label="NODE A" />
        <Box x={90} y={115} width={60} height={30} label="NODE B" kind="blue" pulsing />
        <Box x={210} y={115} width={60} height={30} label="NODE C" kind="accent" pulsing />
        <Box x={150} y={175} width={60} height={30} label="NODE D" />
        <Box x={100} y={240} width={160} height={30} label="DISTRIBUTED LEDGER" kind="accent" />
        <circle cx={180} cy={130} r={40} fill="rgba(255,255,255,0.02)" stroke="#06b6d4" strokeWidth="1" strokeDasharray="2 2" className="glow-cyan pulse-glow" />
      </Canvas>
    )
  }

  if (stageId === '04') {
    return (
      <Canvas>
        <Flow d="M 50 130 H 90" kind="blue" />
        <Flow d="M 150 130 H 190" kind="accent" />
        <Flow d="M 270 130 H 300" kind="accent" />
        <Box x={0} y={115} width={50} height={30} label="DATA" />
        <Box x={90} y={115} width={60} height={30} label="TOKENS" kind="blue" />
        <Box x={190} y={75} width={80} height={110} label="LLM" kind="accent" pulsing />
        <Box x={300} y={115} width={60} height={30} label="OUTPUT" />
        <line x1={200} y1={100} x2={260} y2={100} stroke="#10b981" strokeWidth="2" className="path-active glow-emerald" />
        <line x1={200} y1={130} x2={260} y2={130} stroke="#10b981" strokeWidth="2" className="path-active glow-emerald" />
        <line x1={200} y1={160} x2={260} y2={160} stroke="#10b981" strokeWidth="2" className="path-active glow-emerald" />
      </Canvas>
    )
  }

  if (stageId === '05') {
    return (
      <Canvas>
        <Flow d="M 60 130 H 90" kind="blue" />
        <Flow d="M 150 130 H 180" kind="accent" />
        <Flow d="M 240 130 H 270" kind="accent" />
        <Flow d="M 270 130 V 60 H 240" kind="blue" />
        <Box x={0} y={115} width={60} height={30} label="CORPUS" />
        <Box x={90} y={115} width={60} height={30} label="CHUNKS" />
        <Box x={180} y={100} width={60} height={60} label="VECTOR" kind="blue" pulsing />
        <Box x={270} y={115} width={60} height={30} label="LLM" kind="accent" />
        <Box x={180} y={45} width={60} height={30} label="EVAL" kind="blue" />
        <Point x={180} y={130} kind="blue" />
      </Canvas>
    )
  }

  if (stageId === '06') {
    return (
      <Canvas>
        <Flow d="M 240 130 H 300" kind="accent" />
        <Flow d="M 360 130 V 80" kind="blue" />
        <Flow d="M 180 100 V 50 H 300" kind="accent" />
        <Box x={80} y={100} width={160} height={60} label="FOUNDATION MODEL" />
        <Box x={120} y={160} width={80} height={20} label="LoRA" kind="blue" pulsing />
        <Box x={300} y={115} width={60} height={30} label="SECURITY" kind="accent" />
        <Box x={300} y={50} width={60} height={30} label="AGENTS" kind="blue" />
        <rect x={70} y={90} width={180} height={100} fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 4" rx="4" className="path-active glow-emerald" />
      </Canvas>
    )
  }

  if (stageId === '07') {
    return (
      <Canvas>
        <circle cx="180" cy="130" r="100" fill="url(#aw-glow)" />
        <Flow d="M 60 130 H 140" kind="blue" />
        <Flow d="M 220 130 H 300" kind="accent" />
        <Flow d="M 180 170 V 220" kind="blue" />
        <Box x={10} y={115} width={50} height={30} label="DATA" />
        <Box x={140} y={90} width={80} height={80} label="MODELS" kind="accent" pulsing />
        <Box x={300} y={115} width={50} height={30} label="PROD" />
        <Box x={100} y={220} width={160} height={30} label="OBSERVABILITY" kind="blue" />
        <Point x={180} y={130} kind="accent" pulsing />
      </Canvas>
    )
  }

  return null
}
