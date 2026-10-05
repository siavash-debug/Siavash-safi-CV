interface Props {
  activeStage: number
}

const Box = ({ x, y, w, h, label, opacity, kind = 'default' }: any) => {
  const isAccent = kind === 'accent'
  const isBlue = kind === 'blue'
  const fill = isAccent ? 'rgba(94, 234, 212, 0.05)' : isBlue ? 'rgba(122, 162, 255, 0.04)' : 'rgba(255, 255, 255, 0.02)'
  const stroke = isAccent ? 'rgba(94, 234, 212, 0.45)' : isBlue ? 'rgba(122, 162, 255, 0.35)' : 'rgba(255, 255, 255, 0.15)'
  const textColor = isAccent ? 'rgba(94, 234, 212, 0.9)' : isBlue ? 'rgba(122, 162, 255, 0.9)' : 'rgba(255, 255, 255, 0.7)'

  return (
    <g style={{ opacity, transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s ease' }}>
      <rect x={x} y={y} width={w} height={h} fill={fill} stroke={stroke} strokeWidth={1} rx={2} />
      <text x={x + w / 2} y={y + h / 2 + 3} fill={textColor} fontSize={9} fontFamily="monospace" textAnchor="middle" letterSpacing="0.05em">
        {label}
      </text>
    </g>
  )
}

const Flow = ({ d, opacity, kind = 'default', dash = false }: any) => {
  const stroke = kind === 'blue' ? 'rgba(122, 162, 255, 0.5)' : kind === 'accent' ? 'rgba(94, 234, 212, 0.6)' : 'rgba(255, 255, 255, 0.2)'
  return (
    <path
      d={d}
      fill="none"
      stroke={stroke}
      strokeWidth={1.5}
      strokeDasharray={dash ? "4 4" : "none"}
      style={{ opacity, transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
      markerEnd={`url(#arrow-${kind})`}
    />
  )
}

export function PathVisualizer({ activeStage }: Props) {
  const o = (target: number | number[]) => {
    if (activeStage === 6) {
      if (Array.isArray(target) && target.includes(6)) return 1;
      return 0.4;
    }
    if (Array.isArray(target)) return target.includes(activeStage) ? 1 : 0.05;
    return activeStage === target ? 1 : 0.05;
  }

  return (
    <div className="w-full h-full relative bg-[#07080b] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none" />
      <svg viewBox="0 0 800 800" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <marker id="arrow-default" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill="rgba(255, 255, 255, 0.3)" />
          </marker>
          <marker id="arrow-accent" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill="rgba(94, 234, 212, 0.6)" />
          </marker>
          <marker id="arrow-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill="rgba(122, 162, 255, 0.5)" />
          </marker>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* --- STAGE 0: Software Systems --- */}
        <Flow d="M 160 140 H 220" opacity={o([0, 1])} />
        <Flow d="M 340 140 H 400" opacity={o([0])} />
        <Flow d="M 340 140 V 220 H 400" opacity={o([0, 1])} />
        <Flow d="M 520 140 H 580" opacity={o([0])} />
        <Flow d="M 520 220 H 580" opacity={o([0, 1])} />
        
        <Box x={60} y={120} w={100} h={40} label="CLIENT" opacity={o([0])} />
        <Box x={220} y={120} w={120} h={40} label="API GATEWAY" opacity={o([0])} />
        <Box x={400} y={120} w={120} h={40} label="AUTH SVC" opacity={o([0])} />
        <Box x={400} y={200} w={120} h={40} label="BUSINESS SVC" opacity={o([0, 1])} />
        <Box x={580} y={120} w={80} h={40} label="REDIS" opacity={o([0])} />
        <Box x={580} y={200} w={100} h={40} label="POSTGRES" opacity={o([0, 1])} kind="blue" />

        {/* --- STAGE 1: Data & Stats --- */}
        <Flow d="M 460 240 V 320" opacity={o([1])} kind="blue" />
        <Flow d="M 630 240 V 320" opacity={o([1])} kind="blue" />
        <Flow d="M 320 340 H 260" opacity={o([1])} />
        <Flow d="M 440 340 H 380" opacity={o([1])} />
        <Flow d="M 580 340 H 520" opacity={o([1])} />

        <Box x={580} y={320} w={100} h={40} label="EVENT STREAM" opacity={o([1])} />
        <Box x={440} y={320} w={80} h={40} label="DATA LAKE" opacity={o([1])} />
        <Box x={320} y={320} w={60} h={40} label="ETL" opacity={o([1])} kind="blue" />
        <Box x={140} y={320} w={120} h={40} label="STAT MODELS" opacity={o([1])} kind="accent" />

        {/* --- STAGE 2: Blockchain --- */}
        <Flow d="M 660 60 L 540 20" opacity={o([2])} />
        <Flow d="M 540 20 L 420 60" opacity={o([2])} />
        <Flow d="M 420 60 L 540 100" opacity={o([2])} />
        <Flow d="M 540 100 L 660 60" opacity={o([2])} />
        
        <Box x={640} y={40} w={40} h={40} label="N1" opacity={o([2])} />
        <Box x={520} y={0} w={40} h={40} label="N2" opacity={o([2])} />
        <Box x={400} y={40} w={40} h={40} label="N3" opacity={o([2])} />
        <Box x={520} y={80} w={40} h={40} label="N4" opacity={o([2])} />

        {/* --- STAGE 3: ML, GenAI & LLM --- */}
        <Flow d="M 160 460 H 220" opacity={o([3, 4, 5, 6])} />
        <Flow d="M 340 460 H 400" opacity={o([3, 4, 5, 6])} />
        <Flow d="M 540 460 H 600" opacity={o([3, 4, 5, 6])} />

        <Box x={60} y={440} w={100} h={40} label="CORPUS" opacity={o([3])} />
        <Box x={220} y={440} w={120} h={40} label="TOKENIZER" opacity={o([3, 4, 5, 6])} />
        <Box x={400} y={400} w={140} h={120} label="TRANSFORMER" opacity={o([3, 4, 5, 6])} kind="accent" />
        <Box x={600} y={440} w={100} h={40} label="GENERATION" opacity={o([3, 4, 5, 6])} />

        {/* --- STAGE 4: Retrieval, RAG & Eval --- */}
        <Flow d="M 160 580 H 220" opacity={o([4, 5, 6])} kind="blue" />
        <Flow d="M 320 580 H 360" opacity={o([4, 5, 6])} kind="blue" />
        <Flow d="M 460 580 H 500" opacity={o([4, 5, 6])} kind="blue" />
        <Flow d="M 500 560 L 470 520" opacity={o([4, 5, 6])} kind="accent" dash />
        <Flow d="M 650 480 V 560" opacity={o([4, 5, 6])} />

        <Box x={60} y={560} w={100} h={40} label="DOCUMENTS" opacity={o([4, 5, 6])} />
        <Box x={220} y={560} w={100} h={40} label="CHUNKING" opacity={o([4, 5, 6])} />
        <Box x={360} y={560} w={100} h={40} label="VECTOR DB" opacity={o([4, 5, 6])} kind="blue" />
        <Box x={500} y={560} w={100} h={40} label="RETRIEVAL" opacity={o([4, 5, 6])} kind="blue" />
        <Box x={600} y={560} w={100} h={40} label="EVALUATION" opacity={o([4, 5, 6])} kind="accent" />

        {/* --- STAGE 5: Adaptation, Security & Agents --- */}
        <Flow d="M 470 370 V 400" opacity={o([5, 6])} kind="accent" />
        <Flow d="M 540 440 H 600" opacity={o([5, 6])} kind="accent" dash />
        <Flow d="M 650 320 V 400" opacity={o([5, 6])} kind="blue" />

        <Box x={430} y={360} w={80} h={30} label="LoRA ADAPTER" opacity={o([5, 6])} kind="blue" />
        <Box x={600} y={430} w={100} h={30} label="SECURITY GATE" opacity={o([5, 6])} kind="accent" />
        <Box x={600} y={280} w={100} h={40} label="AGENT TOOLS" opacity={o([5, 6])} kind="blue" />

        {/* --- STAGE 6: AI Reliability --- */}
        <Flow d="M 60 660 H 700" opacity={o([6])} kind="dim" />
        <Flow d="M 110 560 V 660" opacity={o([6])} kind="dim" />
        <Flow d="M 470 520 V 660" opacity={o([6])} kind="dim" />
        <Flow d="M 650 600 V 660" opacity={o([6])} kind="dim" />
        <Box x={300} y={640} w={200} h={40} label="OBSERVABILITY & PROVENANCE" opacity={o([6])} kind="accent" />
      </svg>
    </div>
  )
}
