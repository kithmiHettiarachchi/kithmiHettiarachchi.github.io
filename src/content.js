// All of the site's copy lives here. Edit this file to update the portfolio;
// the components only handle layout.

export const profile = {
  firstName: 'Kithmi',
  lastName: 'Hettiarachchi',
  focus: 'Software engineering · Machine learning',
  location: 'Matara, Sri Lanka · GMT+5:30',
  availability: 'Open to internships',
  availabilityDetail:
    'I’m currently looking for internships in software engineering, AI and machine learning.',
  lede: 'I build full-stack software with machine learning at its core, from a retrieval-grounded legal assistant to a study of why two songs feel alike.',

  // Shown in the Contact section and header when filled in.
  email: 'kithmi0420@gmail.com',
  resumeUrl: '', // e.g. '/Kithmi-Hettiarachchi-CV.pdf' (place the PDF in /public)

  links: [
    {
      label: 'LinkedIn',
      handle: 'kithmi-hettiarachchi',
      href: 'https://www.linkedin.com/in/kithmi-hettiarachchi-992775270',
    },
    {
      label: 'GitHub',
      handle: 'kithmiHettiarachchi',
      href: 'https://github.com/kithmiHettiarachchi',
    },
  ],
};

export const now = [
  { label: 'Building', value: 'OmniSync AI' },
  { label: 'Researching', value: 'Musical “vibe” similarity' },
  { label: 'Studying', value: 'Software Eng. + Information Systems' },
];

// status: 'complete' | 'progress'
// team / role (optional): marks a group project and describes your part in it.
// mine (optional, on a point or flow step): highlights the parts you built yourself.
// links (optional): [{ label: 'GitHub', href: 'https://…' }, { label: 'Live demo', href: 'https://…' }]
export const projects = [
  {
    slug: 'justicepal',
    title: 'JusticePal',
    subtitle: 'AI legal assistance platform',
    kind: 'Full-stack · Applied AI',
    status: 'complete',
    statusLabel: 'Completed',
    summary:
      'One place to get legal guidance, find the right lawyer and draft legal documents, with retrieval-grounded AI behind each step.',
    team: true,
    role: 'Led the team as project manager and built the AI-powered lawyer search.',
    stack: ['Next.js', 'Express.js', 'PostgreSQL', 'Google Gemini', 'Pinecone', 'Socket.io'],
    flowLabel: 'Lawyer matching, the part I built',
    flow: [
      { step: 'Describe', detail: 'Client’s case in plain language' },
      { step: 'Embed', detail: 'Semantic vector' },
      { step: 'Search', detail: 'Pinecone similarity' },
      { step: 'Match', detail: 'Best-fit lawyers' },
    ],
    points: [
      {
        lead: 'Lawyer recommendations',
        text: 'Vector search matches a client’s case description to the best-suited legal professionals using natural-language similarity scoring.',
        mine: true,
      },
      {
        lead: 'RAG legal chatbot',
        text: 'Semantic embeddings from Google Gemini query a Pinecone vector database, so answers are grounded in relevant legal context.',
      },
      {
        lead: 'Document drafting',
        text: 'A Gemini 2.5 Flash pipeline with purpose-built prompts turns user inputs into structured, localized legal documents.',
      },
      {
        lead: 'Live consultations',
        text: 'Real-time teleconferencing on Socket.io and Express, with optimistic chat sync and automatic NLP summaries of each consultation transcript.',
      },
    ],
    links: [],
  },
  {
    slug: 'sanctionguard',
    title: 'SanctionGuard',
    subtitle: 'Global compliance screening platform',
    kind: 'Backend · Search & compliance',
    status: 'complete',
    statusLabel: 'Completed',
    summary:
      'An automated compliance platform that screens individuals and entities against the major global sanctions lists, with fuzzy matching built for entity resolution.',
    team: true,
    role: 'Built the pipeline that retrieves and ingests the sanctions lists, and contributed across the rest of the platform.',
    stack: ['Node.js', 'Express.js', 'MongoDB Atlas', 'Elasticsearch'],
    flowLabel: 'Screening pipeline',
    flow: [
      { step: 'Ingest', detail: 'OFAC, UN & EU lists', mine: true },
      { step: 'Index', detail: 'Elasticsearch' },
      { step: 'Match', detail: 'Phonetic + n\u2011gram' },
      { step: 'Record', detail: 'Risk score + audit trail' },
    ],
    points: [
      {
        lead: 'Sanctions-list ingestion',
        text: 'Scheduled pipelines that retrieve and ingest the OFAC, UN and EU sanctions lists for screening.',
        mine: true,
      },
      {
        lead: 'Matching engine',
        text: 'A high-performance Elasticsearch engine using phonetic and n-gram algorithms for entity resolution.',
      },
      {
        lead: 'Screening API',
        text: 'An Express.js REST API supporting real-time screening and bulk batch processing.',
      },
      {
        lead: 'Audit & risk',
        text: 'A secure MongoDB Atlas data layer that keeps comprehensive audit trails and evaluates customizable risk scores.',
      },
    ],
    links: [],
  },
  {
    slug: 'omnisync',
    title: 'OmniSync AI',
    subtitle: 'Predictive analytics dashboard',
    kind: 'Full-stack · Machine learning',
    status: 'progress',
    statusLabel: 'In development',
    summary:
      'An end-to-end analytics platform that turns raw business data into customer segments, churn predictions and dashboards people can act on.',
    stack: ['Next.js', 'Python', 'scikit-learn', 'FastAPI', 'PostgreSQL'],
    flowLabel: 'From raw data to dashboard',
    flow: [
      { step: 'Ingest', detail: 'Raw business data' },
      { step: 'Model', detail: 'Pandas + scikit-learn' },
      { step: 'Serve', detail: 'FastAPI REST' },
      { step: 'Explore', detail: 'Next.js dashboard' },
    ],
    points: [
      {
        lead: 'ML pipeline',
        text: 'Customer segmentation and churn prediction built with Python, Pandas and scikit-learn.',
      },
      {
        lead: 'Prediction API',
        text: 'A high-performance FastAPI service that serves model predictions and complex data aggregations to the frontend.',
      },
      {
        lead: 'Dashboard',
        text: 'A responsive Next.js interface with interactive data visualizations built on modern charting libraries.',
      },
    ],
    links: [],
  },
  {
    slug: 'vibe',
    title: 'Operation­alising Musical “Vibe”',
    subtitle: 'Perceptual song similarity study',
    kind: 'Research · Music perception',
    status: 'progress',
    statusLabel: 'Research in progress',
    summary:
      'People say two songs share a “vibe”, but no prior work has collected human ratings of it. This study does, then tests which audio and lyric features actually explain those judgements.',
    stack: ['Python', 'librosa', 'PyTorch', 'Hugging Face (CLAP, MERT)', 'Sentence-BERT', 'scikit-learn'],
    flowLabel: 'Study design',
    flow: [
      { step: 'Corpus', detail: 'Creative Commons songs' },
      { step: 'Rate', detail: 'Pairwise listener ratings' },
      { step: 'Represent', detail: 'librosa · CLAP · MERT · SBERT' },
      { step: 'Compare', detail: 'Against the noise ceiling' },
    ],
    points: [
      {
        lead: 'Research gap',
        text: 'A systematic literature review found no prior work that collects human pairwise “vibe” similarity ratings or benchmarks feature representations against them.',
      },
      {
        lead: 'Perceptual study',
        text: 'Designed with inter-rater reliability analysis and a noise-ceiling evaluation framework adapted from Flexer & Grill (2016). Ethics application underway.',
      },
      {
        lead: 'Multimodal features',
        text: 'Spectral features (librosa), pretrained audio embeddings (CLAP, MERT) and lyric semantics (Sentence-BERT), over a rights-cleared Creative Commons corpus.',
      },
      {
        lead: 'Similarity weighting',
        text: 'A supervised model to identify which acoustic and lyrical properties drive perceived song similarity.',
      },
    ],
    links: [],
  },
];

// href (optional) turns the row into a link.
export const earlierProjects = [
  {
    title: 'Pet Shop Website',
    description: 'Developed the shop feature of a pet-focused e-commerce site.',
    stack: ['React', 'JavaScript'],
    team: true,
  },
  {
    title: 'Ticket Simulation System',
    description: 'Multi-threaded simulation of concurrent ticket bookings.',
    stack: ['Java'],
  },
  {
    title: 'Plane Seat Booking System',
    description: 'Interactive system for managing seat reservations on a flight.',
    stack: ['Java'],
  },
  {
    title: 'University Grading System',
    description: 'A grading tool that streamlines academic evaluations.',
    stack: ['Python'],
  },
  {
    title: 'UNSDG Awareness Website',
    description: 'Educational site on UN Sustainable Development Goal 15, Life on Land.',
    stack: ['HTML', 'CSS'],
  },
];

export const toolkit = [
  { group: 'Languages', items: ['Python', 'JavaScript', 'Java', 'SQL', 'C'] },
  {
    group: 'Web & APIs',
    items: ['React', 'Next.js', 'Node.js', 'Express.js', 'FastAPI', 'Socket.io', 'Tailwind CSS', 'HTML & CSS'],
  },
  {
    group: 'Machine learning',
    items: ['scikit-learn', 'PyTorch', 'Pandas', 'Hugging Face (CLAP, MERT)', 'Sentence-BERT', 'librosa'],
  },
  {
    group: 'Applied AI',
    items: ['Google Gemini', 'Retrieval-augmented generation', 'Semantic embeddings', 'Prompt engineering'],
  },
  { group: 'Data & search', items: ['PostgreSQL', 'MongoDB', 'Pinecone', 'Elasticsearch'] },
  {
    group: 'Research methods',
    items: ['Systematic literature review', 'Perceptual study design', 'Inter-rater reliability', 'Noise-ceiling evaluation'],
  },
];

export const about = {
  statement:
    'I’m reading two degrees at once, Software Engineering and Information Systems. My work sits where they meet: systems built properly end to end, and data inside them that actually means something.',
  paragraphs: [
    'Most of what I build pairs a full-stack application with a model doing real work inside it: retrieval-augmented generation for legal guidance, churn prediction behind an analytics dashboard, and audio and lyric embeddings in a study of musical similarity.',
    'The foundations came from coursework and team projects: multi-threaded Java simulations, Python tools, and web apps built with React, Node.js and MongoDB. I enjoy learning new tools, working with other people, and solving problems that make a real difference.',
  ],
};

export const education = [
  {
    programme: 'Software Engineering',
    school: 'Informatics Institute of Technology (IIT), University of Westminster',
    period: 'In progress',
  },
  {
    programme: 'Information Systems',
    school: 'Sabaragamuwa University of Sri Lanka',
    period: 'In progress',
  },
];
