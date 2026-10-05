import { Box, Cap, Flow, Grid, Label, Layer, Schematic } from './Schematic'

export function AgentLoopSchematic() {
  const id = 'awe'
  return (
    <Schematic id={id}>
      <Grid />
      <Box x={30} y={72} w={104} h={44} kind="accent" />
      <Label x={82} y={98} kind="accent" anchor="middle">PLAN</Label>
      <Box x={196} y={30} w={128} h={44} kind="blue" />
      <Label x={260} y={56} kind="blue" anchor="middle">TOOL REGISTRY</Label>
      <Box x={196} y={126} w={128} h={44} kind="accent" />
      <Label x={260} y={152} kind="accent" anchor="middle">EXECUTE</Label>
      <Box x={392} y={78} w={112} h={44} />
      <Label x={448} y={104} anchor="middle">EVALUATE</Label>
      <Flow d="M134 94 H192" marker={id} />
      <Flow d="M134 94 V148 H192" marker={id} />
      <Flow kind="blue" d="M324 52 H456 V74" marker={id} />
      <Flow kind="blue" d="M324 148 H352 V100 H388" marker={id} />
      <Flow kind="dim" d="M392 122 H260 V170" marker={id} />
      <Cap x={260} y={192} anchor="middle">BOUNDED REPLAN</Cap>
      <Cap x={612} y={104} anchor="end">PASS / REPLAN</Cap>
      <Layer x={612} y={22} anchor="end">AGENTLOOP · TASK EXECUTION SERVICE</Layer>
    </Schematic>
  )
}

export function ProofDeskSchematic() {
  const id = 'proofdesk'
  return (
    <Schematic id={id}>
      <Grid />
      <Box x={28} y={60} w={88} h={60} />
      <Label x={72} y={86} anchor="middle">SOURCE</Label>
      <Layer x={72} y={104} anchor="middle">PDF · SCAN</Layer>
      <Box x={154} y={60} w={96} h={60} />
      <Label x={202} y={86} anchor="middle">EXTRACT</Label>
      <Layer x={202} y={104} anchor="middle">OCR FALLBACK</Layer>
      <Box x={288} y={60} w={100} h={60} />
      <Label x={338} y={86} anchor="middle">INDEX</Label>
      <Layer x={338} y={104} anchor="middle">CHUNK · EMBED</Layer>
      <Box x={426} y={60} w={92} h={60} kind="blue" />
      <Label x={472} y={86} kind="blue" anchor="middle">RETRIEVE</Label>
      <Layer x={472} y={104} anchor="middle">HIGH RECALL</Layer>
      <Box x={552} y={60} w={62} h={60} kind="accent" />
      <Label x={583} y={86} kind="accent" anchor="middle">ANSWER</Label>
      <Layer x={583} y={104} anchor="middle">GROUNDED</Layer>
      <Flow d="M116 90 H150" marker={id} />
      <Flow d="M250 90 H284" marker={id} />
      <Flow d="M388 90 H422" marker={id} />
      <Flow d="M518 90 H548" marker={id} />
      <Flow kind="dim" d="M583 120 V168 H338 V124" marker={id} />
      <Cap x={450} y={172} anchor="middle">GOLDEN EVAL · CORRECTNESS / FAITHFULNESS / RELEVANCY</Cap>
      <Layer x={612} y={22} anchor="end">CITATION-BACKED QA</Layer>
    </Schematic>
  )
}

export function TextToImageSchematic() {
  const id = 't2i'
  return (
    <Schematic id={id}>
      <Grid />
      <Box x={28} y={74} w={86} h={40} kind="blue" />
      <Label x={71} y={98} kind="blue" anchor="middle">PROMPT</Label>
      <Box x={152} y={74} w={112} h={40} kind="accent" />
      <Label x={208} y={98} kind="accent" anchor="middle">GENERATION</Label>
      <Box x={302} y={74} w={88} h={40} />
      <Label x={346} y={98} anchor="middle">OUTPUT</Label>
      <Box x={428} y={74} w={116} h={40} />
      <Label x={486} y={98} anchor="middle">EVALUATION</Label>
      <Box x={302} y={140} w={242} h={34} kind="dashed" />
      <Cap x={423} y={161} anchor="middle">SCORED BENCHMARK SUITE · ITERATE</Cap>
      <Flow d="M114 94 H148" marker={id} />
      <Flow d="M264 94 H298" marker={id} />
      <Flow d="M390 94 H424" marker={id} />
      <Flow kind="dim" d="M486 114 V140" marker={id} />
      <Layer x={612} y={22} anchor="end">CONCEPTUAL PIPELINE · NO MEASURED RESULTS SHOWN</Layer>
    </Schematic>
  )
}

export function AiCodingBaseSchematic() {
  const id = 'aicb'
  return (
    <Schematic id={id}>
      <Grid />
      <Box x={28} y={70} w={130} h={48} kind="accent" />
      <Label x={93} y={92} kind="accent" anchor="middle">AGENTS.MD</Label>
      <Layer x={93} y={108} anchor="middle">CONTRACT</Layer>
      <Box x={220} y={70} w={176} h={48} />
      <Label x={308} y={92} anchor="middle">VERIFICATION GATE</Label>
      <Layer x={308} y={108} anchor="middle">LINT · TYPES · TESTS · BUILD · SMOKE</Layer>
      <Box x={458} y={70} w={120} h={48} kind="blue" />
      <Label x={518} y={92} kind="blue" anchor="middle">CI</Label>
      <Layer x={518} y={108} anchor="middle">REPRODUCIBLE</Layer>
      <Flow d="M158 94 H216" marker={id} />
      <Flow kind="blue" d="M396 94 H454" marker={id} />
      <Flow kind="dim" d="M518 118 V160 H93 V122" marker={id} />
      <Cap x={308} y={178} anchor="middle">EVERY AI-ASSISTED CHANGE PASSES THE GATE</Cap>
      <Layer x={612} y={22} anchor="end">ENGINEERING CONTRACT · SOURCE OF TRUTH</Layer>
    </Schematic>
  )
}

export function SmartFinderSchematic() {
  const id = 'smartfinder'
  return (
    <Schematic id={id}>
      <Grid />
      <Box x={28} y={74} w={96} h={40} />
      <Label x={76} y={98} anchor="middle">INTENT</Label>
      <Box x={164} y={74} w={112} h={40} />
      <Label x={220} y={98} anchor="middle">NORMALIZE</Label>
      <Box x={316} y={74} w={104} h={40} kind="blue" />
      <Label x={368} y={98} kind="blue" anchor="middle">MATCH</Label>
      <Box x={460} y={74} w={94} h={40} kind="accent" />
      <Label x={507} y={98} kind="accent" anchor="middle">VERIFY</Label>
      <Flow d="M124 94 H160" marker={id} />
      <Flow d="M276 94 H312" marker={id} />
      <Flow d="M420 94 H456" marker={id} />
      <Flow kind="dim" d="M507 114 V150 H220 V118" marker={id} />
      <Cap x={220} y={172} anchor="middle">DEDUPE · CHANGE TRACKING · ALERTS</Cap>
      <Layer x={640 - 28} y={22} anchor="end">TWO-PLANE ARCHITECTURE · WEB / WORKER</Layer>
    </Schematic>
  )
}

export function LotaSecuritySchematic() {
  const id = 'lotasec'
  return (
    <Schematic id={id}>
      <Grid />
      <Box x={28} y={54} w={150} h={92} kind="dashed" />
      <Label x={103} y={92} anchor="middle">UNTRUSTED</Label>
      <Layer x={103} y={110} anchor="middle">PROMPT · TOOL I/O</Layer>
      <line x1={230} y1={40} x2={230} y2={160} stroke="rgba(94,234,212,.5)" strokeWidth="1.2" strokeDasharray="6 4" />
      <Layer x={230} y={30} anchor="middle">TRUST BOUNDARY</Layer>
      <Box x={290} y={54} w={160} h={92} kind="accent" />
      <Label x={370} y={92} kind="accent" anchor="middle">GUARDED EXECUTION</Label>
      <Layer x={370} y={110} anchor="middle">THREAT MODEL · VALIDATED CALLS</Layer>
      <Flow d="M178 76 H286" marker={id} />
      <Flow d="M178 124 H286" marker={id} />
      <Box x={500} y={54} w={112} h={92} />
      <Label x={556} y={92} anchor="middle">EVAL</Label>
      <Layer x={556} y={110} anchor="middle">SECURITY CASES</Layer>
      <Flow kind="dim" d="M450 100 H496" marker={id} />
      <Cap x={370} y={176} anchor="middle">INJECTION · TOOL ABUSE DEFENSES</Cap>
      <Layer x={612} y={22} anchor="end">LLM & AGENT SECURITY</Layer>
    </Schematic>
  )
}

export function LotaVisionSchematic() {
  const id = 'lotavis'
  return (
    <Schematic id={id}>
      <Grid />
      <Box x={28} y={44} w={120} h={46} />
      <Label x={88} y={72} anchor="middle">IMAGE</Label>
      <Box x={28} y={110} w={120} h={46} />
      <Label x={88} y={138} anchor="middle">LANGUAGE</Label>
      <Box x={230} y={76} w={120} h={48} kind="blue" />
      <Label x={290} y={104} kind="blue" anchor="middle">FUSION</Label>
      <Box x={432} y={76} w={150} h={48} kind="accent" />
      <Label x={507} y={104} kind="accent" anchor="middle">VISUAL ANSWER</Label>
      <Flow d="M148 67 H290 V72" marker={id} />
      <Flow d="M148 133 H290 V128" marker={id} />
      <Flow d="M350 100 H428" marker={id} />
      <Flow kind="dim" d="M507 124 V162 H290 V128" marker={id} />
      <Cap x={290} y={184} anchor="middle">MULTIMODAL EVALUATION · GROUNDING</Cap>
      <Layer x={612} y={22} anchor="end">VISION · LANGUAGE</Layer>
    </Schematic>
  )
}

export function FoundationSecSchematic() {
  const id = 'fmsec'
  return (
    <Schematic id={id}>
      <Grid />
      <Box x={28} y={70} w={140} h={60} />
      <Label x={98} y={96} anchor="middle">BASE MODEL</Label>
      <Layer x={98} y={114} anchor="middle">FOUNDATION-SEC-8B</Layer>
      <Box x={220} y={70} w={160} h={60} kind="blue" />
      <Label x={300} y={96} kind="blue" anchor="middle">LoRA ADAPTER</Label>
      <Layer x={300} y={114} anchor="middle">PEFT / QLoRA 4-BIT</Layer>
      <Box x={432} y={70} w={150} h={60} kind="accent" />
      <Label x={507} y={96} kind="accent" anchor="middle">SECURITY AUDIT</Label>
      <Layer x={507} y={114} anchor="middle">VULNERABILITY EVAL</Layer>
      <Flow d="M168 100 H216" marker={id} />
      <Flow d="M380 100 H428" marker={id} />
      <Cap x={300} y={160} anchor="middle">EFFICIENT ADAPTATION & EVALUATION</Cap>
      <Layer x={612} y={22} anchor="end">LLM SECURITY A PEFT</Layer>
    </Schematic>
  )
}

