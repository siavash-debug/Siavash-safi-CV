export const COURSERA = (id: string) => `https://www.coursera.org/account/accomplishments/certificate/${id}`
export const HACKERRANK = (id: string) => `https://www.hackerrank.com/certificates/iframe/${id}`

export interface Cert {
  t: string
  iss: string
  d: string
  id: string
  track: Track
  url?: string
}

export type Track = 'AI & ML' | 'Data Science' | 'Foundations' | 'Blockchain' | 'Security' | 'Cloud & DevOps'

/* per-track accent so the grid reads by discipline at a glance */
export const TRACK_TONE: Record<Track, string> = {
  'AI & ML': 'emerald',
  'Data Science': 'cyan',
  Foundations: 'slate',
  Blockchain: 'teal',
  Security: 'amber',
  'Cloud & DevOps': 'sky',
}

export const TRACKS: Track[] = [
  'AI & ML',
  'Data Science',
  'Foundations',
  'Blockchain',
  'Security',
  'Cloud & DevOps',
]

export const CERTS: Cert[] = [
  { t: 'Software Engineer', iss: 'HackerRank', d: 'Aug 2026', id: 'cefe0eafdf02', track: 'Foundations', url: HACKERRANK('cefe0eafdf02') },
  { t: 'Software Engineer Intern', iss: 'HackerRank', d: 'Aug 2026', id: '9ec6dd53cd0e', track: 'Foundations', url: HACKERRANK('9ec6dd53cd0e') },
  { t: 'Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization', iss: 'DeepLearning.AI', d: 'Jul 2022', id: 'BY9M8734XT3A', track: 'AI & ML', url: COURSERA('BY9M8734XT3A') },
  { t: 'Smart Contracts', iss: 'University at Buffalo', d: 'Jun 2022', id: '3LCH8VNX4H6G', track: 'Blockchain', url: COURSERA('3LCH8VNX4H6G') },
  { t: 'Neural Networks and Deep Learning', iss: 'DeepLearning.AI', d: 'Jun 2022', id: 'FD9G3FEYT5YL', track: 'AI & ML', url: COURSERA('FD9G3FEYT5YL') },
  { t: 'Algorithmic Toolbox', iss: 'UC San Diego', d: 'Jun 2022', id: 'SPFNBEQ3VNBR', track: 'Foundations', url: COURSERA('SPFNBEQ3VNBR') },
  { t: 'Server-side Development with NodeJS, Express and MongoDB', iss: 'The Hong Kong University of Science and Technology', d: 'Jun 2022', id: 'ZWJDL8CMQLUJ', track: 'Foundations', url: COURSERA('ZWJDL8CMQLUJ') },
  { t: 'Programming with Google Go Specialization', iss: 'UC Irvine', d: 'May 2022', id: 'LF2KSGNXDGNE', track: 'Foundations', url: COURSERA('LF2KSGNXDGNE') },
  { t: 'Introduction to MongoDB', iss: 'MongoDB', d: 'Jun 2022', id: 'H4JB9C64A75C', track: 'Foundations', url: COURSERA('H4JB9C64A75C') },
  { t: 'Execution, persistence, privilege escalation and evasion for Cybersecurity', iss: 'Infosec', d: 'May 2022', id: '5WTE3DDHJF5Q', track: 'Security', url: COURSERA('5WTE3DDHJF5Q') },
  { t: "API Design and Fundamentals of Google Cloud's Apigee API Platform", iss: 'Google Cloud - Minnesota', d: 'May 2022', id: '9H757T9U8JQ5', track: 'Cloud & DevOps', url: COURSERA('9H757T9U8JQ5') },
  { t: 'Rest API (Intermediate) Certificate', iss: 'HackerRank', d: 'May 2022', id: '4044b0bb1efd', track: 'Foundations', url: HACKERRANK('4044b0bb1efd') },
  { t: 'Python (Basic) Certificate', iss: 'HackerRank', d: 'May 2022', id: '95244f80b69f', track: 'Foundations', url: HACKERRANK('95244f80b69f') },
  { t: 'Cryptography and Information Theory', iss: 'University of Colorado', d: 'May 2022', id: 'MYTSQW8R8CDW', track: 'Security', url: COURSERA('MYTSQW8R8CDW') },
  { t: 'Building Containerized Applications on AWS', iss: 'Amazon Web Services (AWS)', d: 'May 2022', id: 'ZN6PCSDLDNS8', track: 'Cloud & DevOps', url: COURSERA('ZN6PCSDLDNS8') },
  { t: 'General Coding Logic', iss: 'Triplebyte', d: 'Apr 2022', id: 'bd0SjPB', track: 'Foundations' },
  { t: 'Applied Text Mining in Python', iss: 'University of Michigan', d: 'Apr 2022', id: 'LUK64N45E82H', track: 'Data Science', url: COURSERA('LUK64N45E82H') },
  { t: 'Blockchain Basics', iss: 'University at Buffalo', d: 'Apr 2022', id: 'E5F8PANSDXML', track: 'Blockchain', url: COURSERA('E5F8PANSDXML') },
  { t: 'Introduction to Python for Cybersecurity', iss: 'Infosec', d: 'Apr 2022', id: 'EQU4VVUR6K3G', track: 'Security', url: COURSERA('EQU4VVUR6K3G') },
  { t: 'Applied Machine Learning in Python', iss: 'University of Michigan', d: 'Apr 2022', id: 'MC3PT9TXV7V2', track: 'AI & ML', url: COURSERA('MC3PT9TXV7V2') },
  { t: 'Cybersecurity Roles, Processes & Operating System Security', iss: 'IBM', d: 'Mar 2022', id: '', track: 'Security' },
  { t: 'Applied Plotting, Charting & Data Representation in Python', iss: 'University of Michigan', d: 'Jan 2022', id: 'WYQPPV6SPMWP', track: 'Data Science', url: COURSERA('WYQPPV6SPMWP') },
  { t: 'Introduction to Data Science in Python', iss: 'University of Michigan', d: 'Dec 2021', id: 'LMMT65VJ7JSC', track: 'Data Science', url: COURSERA('LMMT65VJ7JSC') },
]

export interface SkillGroup {
  name: string
  terms: string[]
}

export const SKILLS: SkillGroup[] = [
  { name: 'AI SYSTEMS', terms: ['Agentic Systems', 'Planning', 'Tool Use', 'Workflow Orchestration', 'Execution Runtimes'] },
  { name: 'AI RELIABILITY', terms: ['Evaluation', 'Benchmarking', 'Verification', 'Grounding', 'Guardrails', 'Regression Testing'] },
  { name: 'AI APPLICATIONS', terms: ['RAG', 'OCR', 'NLP', 'Generative AI', 'Multimodal AI'] },
  { name: 'SYSTEMS ENGINEERING', terms: ['Backend Systems', 'Distributed Systems', 'APIs', 'State Management', 'Messaging', 'Recovery'] },
  { name: 'INFRASTRUCTURE', terms: ['PostgreSQL', 'RabbitMQ', 'Docker', 'CI/CD', 'Linux / Windows', 'Observability'] },
  { name: 'STACK & TOOLING', terms: ['Python', 'FastAPI', 'SQLAlchemy', 'Pydantic', 'Pytest', 'Chroma', 'Embeddings', 'DeepEval', 'Next.js', 'Node.js', 'Go', 'MongoDB', 'RabbitMQ'] },
]

export interface FocusArea {
  num: string
  title: string
  blurb: string
  icon: 'agentic' | 'reliability' | 'applications' | 'infra' | 'systems' | 'delivery'
}

export const FOCUS_AREAS: FocusArea[] = [
  { num: '01', title: 'Agentic Systems', blurb: 'Planning, tool use, orchestration, bounded replanning and workflow execution — agents with explicit state and boundaries.', icon: 'agentic' },
  { num: '02', title: 'AI Reliability', blurb: 'Evaluation, benchmarking, verification, grounding and regression detection — correctness as an engineered property.', icon: 'reliability' },
  { num: '03', title: 'AI Applications', blurb: 'RAG, OCR, NLP and generative AI built around grounding, citations and knowing when the system does not know.', icon: 'applications' },
  { num: '04', title: 'AI Infrastructure', blurb: 'Workflow runtimes, execution state, event tracing, provenance and reproducible artifacts.', icon: 'infra' },
  { num: '05', title: 'Systems Engineering', blurb: 'Backend and distributed systems, APIs, state management, messaging and recovery — the layer AI stands on.', icon: 'systems' },
  { num: '06', title: 'Infrastructure & Delivery', blurb: 'Containers, CI/CD, Linux and Windows engineering, and the observability that keeps systems trustworthy.', icon: 'delivery' },
]

export interface PathStage {
  num: string
  label: string
  title: string
  blurb: string
  milestone: { index: string; label: [string, string]; glyph: 'modules' | 'values' | 'linked' | 'model' | 'plan' | 'evaluate' }
  now?: boolean
}

export const PATH_STAGES: PathStage[] = [
  {
    num: 'Stage 01',
    label: 'Software Systems',
    title: 'Software Systems',
    blurb: 'Real-world applications and backend systems — including hotel and flight reservation-style work with transactional workflows, integrations and business logic that had to hold up in production.',
    milestone: { index: '01', label: ['Modules', 'Services'], glyph: 'modules' },
  },
  {
    num: 'Stage 02',
    label: 'Data & Statistical Systems',
    title: 'Data & Statistical Systems',
    blurb: 'Python for numerical data, visualization and statistical logic — building trading systems where quantitative rules became executable strategies with backtesting, automated position execution and analysis of system behavior.',
    milestone: { index: '02', label: ['Values', 'Rules'], glyph: 'values' },
  },
  {
    num: 'Stage 03',
    label: 'Blockchain & Financial Infrastructure',
    title: 'Blockchain & Financial Infrastructure',
    blurb: 'Blockchain engineering connected to cryptocurrency exchange infrastructure — systems where transactions, state and numerical correctness matter, and reliability is not optional.',
    milestone: { index: '03', label: ['Linked', 'Records'], glyph: 'linked' },
  },
  {
    num: 'Stage 04',
    label: 'Machine Learning & Generative AI',
    title: 'Machine Learning & Generative AI',
    blurb: 'Data science, deep learning, NLP, RAG and OCR — the model layer, built on the same foundation of correctness and evaluation.',
    milestone: { index: '04', label: ['Model', 'Output'], glyph: 'model' },
  },
  {
    num: 'Stage 05',
    label: 'Agentic Systems',
    title: 'Agentic Systems',
    blurb: 'Planning, tool use, orchestration and workflow execution — models moved from answers into executable systems.',
    milestone: { index: '05', label: ['Plan', 'Execute'], glyph: 'plan' },
  },
  {
    num: 'Stage 06 · Now',
    label: 'AI Reliability & Infrastructure',
    title: 'AI Reliability & Infrastructure',
    blurb: 'Evaluation, benchmarking, verification, observability and provenance — the current direction, expressed in LOTA.design.',
    milestone: { index: '06', label: ['Evaluate', 'Verify'], glyph: 'evaluate' },
    now: true,
  },
]

export interface SystemLayer {
  num: string
  name: string
  detail: string
  branch?: boolean
}

export const SYSTEM_LAYERS: SystemLayer[] = [
  { num: '01', name: 'Models', detail: 'Models — bounded components, not the entire system.' },
  { num: '02', name: 'Workflows', detail: 'Workflows — explicit paths for inputs, state and outcomes.' },
  { num: '03', name: 'Agents', detail: 'Agents — planning and tool use with bounded replanning.', branch: true },
  { num: '04', name: 'Tools', detail: 'Tools — capabilities behind explicit interfaces and trust boundaries.', branch: true },
  { num: '05', name: 'Execution', detail: 'Execution — observable state transitions and recoverable work.' },
  { num: '06', name: 'Evaluation', detail: 'Evaluation — evidence that a result is useful, faithful and safe to continue.' },
  { num: '07', name: 'Verification', detail: 'Verification — checks that connect outputs to their requirements and sources.' },
  { num: '08', name: 'Recovery', detail: 'Recovery — a designed response when execution cannot safely continue.' },
]
