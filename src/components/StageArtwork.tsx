import React from 'react'

const Box = ({ x, y, w, h, label, kind = 'default', dashed = false }: any) => {
  const isAccent = kind === 'accent'
  const isBlue = kind === 'blue'
  const fill = isAccent ? 'rgba(94, 234, 212, 0.04)' : isBlue ? 'rgba(122, 162, 255, 0.04)' : 'rgba(255, 255, 255, 0.02)'
  const stroke = isAccent ? 'rgba(94, 234, 212, 0.4)' : isBlue ? 'rgba(122, 162, 255, 0.3)' : 'rgba(255, 255, 255, 0.15)'
  const textColor = isAccent ? '#5eead4' : isBlue ? '#7aa2ff' : 'rgba(255, 255, 255, 0.6)'
  const strokeDash = dashed ? "4 4" : "none"

  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill={dashed ? "none" : fill} stroke={stroke} strokeWidth={1} strokeDasharray={strokeDash} rx={2} />
      {label && (
        <text x={x + w / 2} y={y + h / 2 + 3} fill={textColor} fontSize={9} fontFamily="monospace" textAnchor="middle" letterSpacing="0.05em">
          {label}
        </text>
      )}
    </g>
  )
}

const Flow = ({ d, kind = 'default', dash = false }: any) => {
  const stroke = kind === 'blue' ? 'rgba(122, 162, 255, 0.4)' : kind === 'accent' ? 'rgba(94, 234, 212, 0.5)' : 'rgba(255, 255, 255, 0.2)'
  return (
    <path
      d={d}
      fill="none"
      stroke={stroke}
      strokeWidth={1}
      strokeDasharray={dash ? "4 4" : "none"}
      markerEnd={`url(#aw-arrow-${kind})`}
    />
  )
}

const Point = ({ x, y, kind = 'default' }: any) => {
  const fill = kind === 'accent' ? '#5eead4' : kind === 'blue' ? '#7aa2ff' : 'rgba(255,255,255,0.7)'
  return <circle cx={x} cy={y} r={2} fill={fill} />
}

const Canvas = ({ children }: { children: React.ReactNode }) => (
  <svg viewBox="0 0 400 300" className="w-full h-full block" preserveAspectRatio="xMidYMid meet">
    <defs>
      <marker id="aw-arrow-default" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" fill="rgba(255, 255, 255, 0.3)" />
      </marker>
      <marker id="aw-arrow-accent" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" fill="rgba(94, 234, 212, 0.6)" />
      </marker>
      <marker id="aw-arrow-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" fill="rgba(122, 162, 255, 0.5)" />
      </marker>
      <pattern id="aw-grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
      </pattern>
      <radialGradient id="aw-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(94,234,212,0.15)" />
        <stop offset="100%" stopColor="rgba(94,234,212,0)" />
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
        <Flow d="M 200 130 H 260" />
        <Flow d="M 200 130 V 200 H 260" kind="blue" />
        <Flow d="M 200 130 V 60 H 260" />
        <Box x={0} y={115} w={60} h={30} label="CLIENT" />
        <Box x={120} y={115} w={80} h={30} label="API GW" kind="blue" />
        <Box x={260} y={45} w={80} h={30} label="AUTH" />
        <Box x={260} y={115} w={80} h={30} label="PAYMENT" />
        <Box x={260} y={185} w={80} h={30} label="BUSINESS" kind="accent" />
        <Point x={60} y={130} />
      </Canvas>
    )
  }

  if (stageId === '02') {
    return (
      <Canvas>
        <Flow d="M 80 130 H 130" />
        <Flow d="M 220 130 H 260" />
        <Flow d="M 220 130 V 60 H 260" kind="blue" />
        <Flow d="M 220 130 V 200 H 260" kind="accent" dash />
        <Box x={0} y={115} w={80} h={30} label="EVENT LOGS" />
        <Box x={130} y={105} w={90} h={50} label="DATA LAKE" kind="blue" />
        <Box x={260} y={45} w={80} h={30} label="ETL BATCH" />
        <Box x={260} y={115} w={80} h={30} label="STREAM" kind="blue" />
        <Box x={260} y={185} w={80} h={30} label="STAT MODEL" kind="accent" />
        <Point x={220} y={130} kind="blue" />
      </Canvas>
    )
  }

  if (stageId === '03') {
    return (
      <Canvas>
        <Flow d="M 120 130 L 180 70" />
        <Flow d="M 180 70 L 240 130" />
        <Flow d="M 240 130 L 180 190" />
        <Flow d="M 180 190 L 120 130" />
        <Flow d="M 180 190 V 240" kind="accent" />
        <Box x={150} y={55} w={60} h={30} label="NODE A" />
        <Box x={90} y={115} w={60} h={30} label="NODE B" />
        <Box x={210} y={115} w={60} h={30} label="NODE C" />
        <Box x={150} y={175} w={60} h={30} label="NODE D" />
        <Box x={100} y={240} w={160} h={30} label="DISTRIBUTED LEDGER" kind="accent" />
        <circle cx={180} cy={130} r={40} fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeDasharray="2 2" />
      </Canvas>
    )
  }

  if (stageId === '04') {
    return (
      <Canvas>
        <Flow d="M 80 130 H 120" />
        <Flow d="M 180 130 H 220" />
        <Flow d="M 300 130 H 340" kind="accent" />
        <Box x={20} y={115} w={60} h={30} label="DATA" />
        <Box x={120} y={115} w={60} h={30} label="TOKENS" kind="blue" />
        <Box x={220} y={75} w={80} h={110} label="LLM" kind="accent" />
        <Box x={340} y={115} w={60} h={30} label="OUTPUT" />
        {/* Layer abstraction inside LLM */}
        <line x1={230} y1={100} x2={290} y2={100} stroke="rgba(94, 234, 212, 0.3)" strokeWidth="2" />
        <line x1={230} y1={130} x2={290} y2={130} stroke="rgba(94, 234, 212, 0.6)" strokeWidth="2" />
        <line x1={230} y1={160} x2={290} y2={160} stroke="rgba(94, 234, 212, 0.3)" strokeWidth="2" />
      </Canvas>
    )
  }

  if (stageId === '05') {
    return (
      <Canvas>
        <Flow d="M 80 130 H 120" />
        <Flow d="M 180 130 H 220" />
        <Flow d="M 280 130 H 320" kind="accent" />
        <Flow d="M 320 130 V 60 H 280" kind="blue" dash />
        <Box x={20} y={115} w={60} h={30} label="CORPUS" />
        <Box x={120} y={115} w={60} h={30} label="CHUNKS" />
        <Box x={220} y={100} w={60} h={60} label="VECTOR" kind="blue" />
        <Box x={320} y={115} w={60} h={30} label="LLM" kind="accent" />
        <Box x={220} y={45} w={60} h={30} label="EVAL" kind="blue" />
        <Point x={220} y={130} kind="blue" />
      </Canvas>
    )
  }

  if (stageId === '06') {
    return (
      <Canvas>
        <Flow d="M 240 130 H 300" />
        <Flow d="M 360 130 V 80" kind="blue" />
        <Flow d="M 180 100 V 50 H 300" kind="accent" dash />
        <Box x={80} y={100} w={160} h={60} label="FOUNDATION MODEL" />
        <Box x={120} y={160} w={80} h={20} label="LoRA" kind="blue" />
        <Box x={300} y={115} w={60} h={30} label="SECURITY" kind="accent" />
        <Box x={300} y={50} w={60} h={30} label="AGENTS" kind="blue" />
        <rect x={70} y={90} width={180} height={100} fill="none" stroke="rgba(255,255,255,0.05)" strokeDasharray="2 2" rx="4" />
      </Canvas>
    )
  }

  if (stageId === '07') {
    return (
      <Canvas>
        <circle cx="180" cy="130" r="100" fill="url(#aw-glow)" />
        <Flow d="M 60 130 H 140" />
        <Flow d="M 220 130 H 300" />
        <Flow d="M 180 170 V 220" kind="blue" />
        <Box x={10} y={115} w={50} h={30} label="DATA" />
        <Box x={140} y={90} w={80} h={80} label="MODELS" kind="accent" />
        <Box x={300} y={115} w={50} h={30} label="PROD" />
        <Box x={100} y={220} w={160} h={30} label="OBSERVABILITY" kind="blue" />
        <Point x={180} y={130} kind="accent" />
      </Canvas>
    )
  }

  return null
}
