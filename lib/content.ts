export const profile = {
  name: 'Shahabuddin Ahmed Ovi',
  role: 'AI Engineer',
  location: 'Dhaka, Bangladesh',
  email: 'shahabovi@gmail.com',
  phone: '+8801406348995',
  linkedin: 'https://linkedin.com/in/s-ahmed-ovi',
  linkedinLabel: 'S Ahmed Ovi',
  github: 'https://github.com/S-Ahmed-Ovi',
  githubLabel: 'S-Ahmed-Ovi',
  githubUsername: 'S-Ahmed-Ovi',
};

export const hero = {
  eyebrow: 'AI Engineer / Agentic Systems',
  headline: 'Building systems that plan, retrieve, and act — not just predict.',
  subtext:
    'I design and ship agentic AI: multi-step reasoning pipelines, retrieval-augmented research tools, and the orchestration layers that hold them together.',
};

export const about = {
  paragraphs: [
    "I got interested in AI for a boring reason: most software I used just executed instructions, and I wanted to build something that could decide what to do next. The first time I got a basic retrieval pipeline to reason over its own search results instead of just returning them, I was hooked on the gap between 'AI that answers' and 'AI that works'.",
    "That gap is where I spend most of my time now. At OrangeBD I work inside that gap daily — chatbots that need memory, recommendation systems that need judgment, agents that need to verify their own output before handing it back. None of it is glamorous in the way demos are. It's mostly state management, prompt failure modes, and re-reading LangGraph traces at 1am to figure out why an agent looped twice.",
    "I think the next decade of software is going to be defined by systems that can plan and act with some autonomy, and I want to be one of the engineers who actually knows how to build the unglamorous parts of that reliably — not just prompt a demo, but ship something that holds up.",
  ],
};

export type ExperienceEntry = {
  role: string;
  org: string;
  period: string;
  summary: string;
  tags: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: 'Trainee Software Engineer (AI)',
    org: 'OrangeBD',
    period: 'Jan 2026 — Present',
    summary:
      'Working inside the AI team on production ML/AI systems — chatbots, retrieval pipelines, and recommendation logic — while collaborating cross-functionally to ship intelligent features end to end.',
    tags: ['RAG', 'LangChain', 'LangGraph', 'Agentic Systems', 'Recommendation Engines', 'Chatbot Architecture'],
  },
];

export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  github: string;
  metrics: { label: string; value: string }[];
  challenge: string;
  lesson: string;
  flow: string[];
};

export const projects: Project[] = [
  {
    id: 'agentic-rag',
    name: 'Agentic RAG Research Assistant',
    tagline: 'Retrieval that plans before it answers',
    description:
      'A research assistant that treats retrieval as a multi-step decision process rather than a single lookup. Autonomous agents plan a research strategy, retrieve from multiple sources, cross-verify claims against each other, and synthesize a final answer — instead of returning the first plausible match.',
    stack: ['Python', 'LangChain', 'LangGraph', 'FastAPI', 'Vector DB'],
    github: 'https://github.com/S-Ahmed-Ovi/Agentic-RAG-Research-Assistant',
    metrics: [
      { label: 'Pipeline stages', value: '4' },
      { label: 'Agent roles', value: 'Plan · Retrieve · Verify · Synthesize' },
    ],
    challenge:
      'Naive RAG fails silently when retrieved context is wrong or incomplete — it answers confidently anyway. The hard part was building a verification step that could catch contradictions between sources before synthesis.',
    lesson:
      'Most of the reliability gain came from giving the agent the ability to say "this evidence is insufficient" rather than from a smarter prompt.',
    flow: ['Plan', 'Retrieve', 'Verify', 'Synthesize'],
  },
  {
    id: 'multi-agent-assistant',
    name: 'Multi-Agent AI Assistant',
    tagline: 'One chatbot, several jobs, one source of truth',
    description:
      'A multi-agent RAG chatbot handling order management and employee leave workflows behind a single conversational interface, backed by JWT auth, an admin dashboard, and a lightweight embeddable widget.',
    stack: ['FastAPI', 'PostgreSQL', 'Redis', 'OpenSearch', 'JavaScript'],
    github: 'https://github.com/S-Ahmed-Ovi/MultiAgent-Ai-Assistant',
    metrics: [
      { label: 'Workflows handled', value: '2' },
      { label: 'Core services', value: 'Postgres · Redis · OpenSearch' },
    ],
    challenge:
      'Routing a single conversation across multiple agents (orders vs. leave requests) without the user noticing a handoff happened, while keeping auth and state consistent across both.',
    lesson:
      'Session state needs to live outside any one agent — Redis as a shared scratchpad mattered more than any individual agent\u2019s logic.',
    flow: ['Intent Router', 'Order Agent', 'Leave Agent', 'Admin Dashboard'],
  },
  {
    id: 'university-management',
    name: 'University Management System',
    tagline: 'Role-based academic operations, built in Java',
    description:
      'A complete university portal built with an object-oriented Java architecture, with role-based dashboards for administrators, teachers, and students covering academic and administrative operations.',
    stack: ['Java', 'OOP', 'Role-Based Access'],
    github: 'https://github.com/S-Ahmed-Ovi/University-Management-System',
    metrics: [
      { label: 'User roles', value: '3' },
      { label: 'Dashboards', value: 'Admin · Teacher · Student' },
    ],
    challenge:
      'Modeling shared academic data (courses, grades, schedules) so three very different roles could see the right slice of it without duplicating logic across dashboards.',
    lesson:
      'This was the project that taught me the value of designing the data model before the UI — it kept paying off every time a new role-specific view was added.',
    flow: ['Admin', 'Teacher', 'Student'],
  },
];

export type SkillCategory = {
  category: string;
  level: number;
  skills: string[];
};

export const skills: SkillCategory[] = [
  {
    category: 'AI / ML',
    level: 90,
    skills: ['Machine Learning', 'Deep Learning', 'RAG', 'Recommendation Systems', 'NLP', 'LangChain', 'LangGraph'],
  },
  {
    category: 'Backend',
    level: 80,
    skills: ['FastAPI', 'Django', 'Flask', 'REST APIs'],
  },
  {
    category: 'Databases',
    level: 75,
    skills: ['PostgreSQL', 'MySQL', 'Redis', 'OpenSearch'],
  },
  {
    category: 'Languages',
    level: 85,
    skills: ['Python', 'SQL', 'Java', 'C++', 'C', 'JavaScript'],
  },
  {
    category: 'Tools',
    level: 78,
    skills: ['Git', 'GitHub', 'Docker', 'MLflow', 'TensorFlow', 'Scikit-Learn', 'Pandas', 'NumPy', 'OpenCV'],
  },
];

export type LeadershipEntry = {
  role: string;
  org: string;
  period: string;
  description: string;
  stat: { value: string; label: string };
};

export const leadership: LeadershipEntry[] = [
  {
    role: 'President',
    org: 'Dhaka College Science Club',
    period: '2021 — 2022',
    description:
      "Led organization of the 7th DCSC National Science Carnival — the country's largest national science event — supervising an inter-college science exposition that promoted innovation and scientific curiosity.",
    stat: { value: '7th', label: 'National Science Carnival edition led' },
  },
  {
    role: 'Associate Executive',
    org: 'North South University HR Club',
    period: '2024 — Ongoing',
    description:
      'Played a key role organizing Calibration 4.0 and Epitome 3.0, contributing to event planning, team coordination, and partnership communications.',
    stat: { value: '2', label: 'Flagship events organized' },
  },
  {
    role: 'Institute Representative',
    org: 'Volunteer for Bangladesh',
    period: 'Ongoing',
    description:
      'Collaborated with teams to organize awareness campaigns and contribute to sustainable social development projects.',
    stat: { value: 'Active', label: 'Social development campaigns' },
  },
];

export const education = [
  {
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'North South University',
    period: '2023 — Ongoing',
  },
  {
    degree: 'HSC',
    institution: 'Dhaka College',
    period: '2021',
    grade: 'GPA 5.00',
  },
  {
    degree: 'SSC',
    institution: 'Udayan Uchcha Madhyamik Bidyalaya',
    period: '2019',
    grade: 'GPA 5.00',
  },
];
