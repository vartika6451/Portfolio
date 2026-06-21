export const profile = {
  name: "Vartika Sharma",
  initials: "VS",
  roles: [
    "Full Stack Developer",
    "AI Enthusiast",
    "Problem Solver",
    "Blockchain Explorer",
  ],
  tagline: "Building Digital Experiences That Matter",
  subline:
    "Computer science undergraduate and software developer building full-stack products, Gen AI applications, and exploring Web3 — with a strong DSA foundation and 400+ problems solved.",
  location: "Gurugram, India",
  email: "vartikasharma9093@gmail.com",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/vartika6451",
    linkedin: "https://www.linkedin.com/in/vartika-sharma-5b3868325/",
    leetcode: "https://leetcode.com/u/vartika6451/",
    codeforces: "https://codeforces.com/profile/vartika_sharma02",
    twitter: "https://x.com/VartikaSha78875",
  },
};

export const stats = [
  { label: "Projects Completed", value: 8, suffix: "+" },
  { label: "DSA Problems Solved", value: 400, suffix: "+" },
  { label: "Hackathons Participated", value: 10, suffix: "+" },
  { label: "GitHub Contributions", value: 200, suffix: "+" },
];

export const aboutMe = [
  "I'm a Computer Science undergraduate at GGSIPU, Delhi, currently building my way through full-stack development, Generative AI, and Web3.",
  "On the frontend, I work primarily with React and Next.js, building responsive, animated, production-grade interfaces with TypeScript and Tailwind CSS. On the backend, I build REST APIs and services with Node.js and Express, using TypeScript throughout for type safety, and I'm comfortable working with both SQL (PostgreSQL) and NoSQL (MongoDB) databases.",
  "I'm currently exploring Web3 — building on both Solana and Ethereum — and spend a lot of my time experimenting with Generative AI, integrating LLM APIs (Gemini, Groq) into real products rather than just using them as chatbots.",
  "Competitive programming is a core part of how I think about engineering: I've solved 400+ DSA problems on LeetCode and hold a Codeforces rating built from 40 problems solved across rated contests. I've participated in 10+ hackathons, including a 1st-place win, a Top 5 finish (out of 400+ teams) at Brewing Codes 4.0, and qualifying for Smart India Hackathon (SIH) at the university level among 170+ competing teams.",
  "I also served as a Junior Council Member at the Anveshan Technical Community, where I helped organize 5+ technical events for 200+ students.",
  "I haven't worked professionally yet — but I've shipped 8+ projects end-to-end (see Projects below), each solving a real, specific problem, and I'm actively looking for internships and software engineering roles where I can keep building things that matter."
];

export const education = {
  institution: "Bhagwan Parshuram Institute of Technology (GGSIPU), Delhi",
  degree: "Bachelor of Technology, Computer Science Engineering",
  duration: "2024–2028",
  cgpa: "8.6",
};

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Databases"
  | "Blockchain"
  | "AI/ML"
  | "Languages";

export interface Skill {
  name: string;
  level: number; // 0-100
  category: SkillCategory;
}

export const skills: Skill[] = [
  // Languages
  { name: "Java", level: 85, category: "Languages" },
  { name: "Python", level: 80, category: "Languages" },
  { name: "C/C++", level: 80, category: "Languages" },
  { name: "TypeScript", level: 88, category: "Languages" },
  { name: "JavaScript", level: 88, category: "Languages" },
  { name: "SQL (Postgres)", level: 78, category: "Languages" },

  // Frontend
  { name: "React.js", level: 90, category: "Frontend" },
  { name: "Next.js", level: 88, category: "Frontend" },
  { name: "TypeScript", level: 88, category: "Frontend" },
  { name: "Tailwind CSS", level: 88, category: "Frontend" },
  { name: "HTML5 / CSS3", level: 90, category: "Frontend" },

  // Backend
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Express.js", level: 85, category: "Backend" },
  { name: "TypeScript (Backend)", level: 85, category: "Backend" },
  { name: "FastAPI", level: 70, category: "Backend" },
  { name: "REST APIs", level: 88, category: "Backend" },
  { name: "WebSockets", level: 70, category: "Backend" },

  // Databases
  { name: "MongoDB", level: 80, category: "Databases" },
  { name: "PostgreSQL", level: 75, category: "Databases" },
  { name: "Prisma ORM", level: 75, category: "Databases" },
  { name: "Supabase", level: 75, category: "Databases" },

  // Blockchain
  { name: "Solana", level: 55, category: "Blockchain" },
  { name: "Ethereum", level: 55, category: "Blockchain" },
  { name: "Web3 Fundamentals", level: 60, category: "Blockchain" },

  // AI/ML
  { name: "Gemini API", level: 80, category: "AI/ML" },
  { name: "Groq API (Llama 3.3)", level: 75, category: "AI/ML" },
  { name: "Multi-Agent AI Systems", level: 70, category: "AI/ML" },
  { name: "NLP / Sentiment Analysis", level: 65, category: "AI/ML" },
];

export const skillCategories: SkillCategory[] = [
  "Languages",
  "Frontend",
  "Backend",
  "Databases",
  "Blockchain",
  "AI/ML",
];

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  achievements: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  color: string; // accent gradient for the card
  year: string;
  featured: boolean;
  image?: string;
}

export const projects: Project[] = [
  {
    slug: "skillwise-ai",
    name: "SkillWise.ai",
    tagline: "AI Technical Interviewer with Real-Time Vibe Coaching",
    description:
      "A premium, real-time, sandbox-driven AI technical interviewer that simulates a live engineering panel interview — combining GitHub metadata extraction, voice recognition, and real-time facial expression tracking to evaluate coding correctness, communication, pacing, and stress handling.",
    problem:
      "Candidates rarely get realistic, full-spectrum interview practice that evaluates more than just code correctness. SkillWise.ai simulates a real panel interview — tracking speech pacing, filler words, and visual confidence cues alongside technical depth — then closes with a 3-persona AI hiring panel deliberation.",
    achievements: [
      "Built a GitHub portfolio scraper that injects real repo names, languages, and frameworks into AI interview prompts for personalized technical follow-ups",
      "Implemented a full speech engine: live Speech-to-Text via the Web Speech API, natural Text-to-Speech responses, WPM tracking, and filler-word detection via regex pattern matching",
      "Built a multimodal facial-expression HUD using mirrored camera snapshots analyzed by Gemini (gemini-2.5-flash) to detect confidence, nervousness, and eye contact in real time",
      "Designed a 3-persona hiring panel (Tech Lead, System Architect, Engineering Manager) that deliberates after a 5-question interview and outputs structured JSON scoring",
    ],
    tech: ["React 19", "Express", "TypeScript", "Bun", "Prisma", "PostgreSQL", "Gemini API"],
    liveUrl: "https://skillwiseai.vercel.app/",
    color: "from-violet-500 to-fuchsia-400",
    year: "2025",
    featured: true,
    image: "/projects/skillwise.png",
  },
  {
    slug: "pulsetrack",
    name: "PulseTrack",
    tagline: "AI-Powered Competitor Tracking & Alerting",
    description:
      "Automates competitor tracking by periodically scraping pages, running smart word-level diffs, and sending the diff to Groq AI — which classifies the change, assesses urgency, and generates a business action plan.",
    problem:
      "Tracking competitor website changes manually is slow and noisy. PulseTrack scrapes pages on a schedule, filters out trivial changes using a 2% diff-ratio threshold, then uses Groq's Llama 3.3 model to explain what changed, why it matters, and what to do about it.",
    achievements: [
      "Built a hybrid scraping pipeline: fast Axios/Cheerio scraping first, with automatic fallback to the ScrapingBee API when bot-blocking or thin content is detected",
      "Integrated Groq SDK (llama-3.3-70b-versatile) to classify diffs into High/Medium/Low urgency with a recommended business action",
      "Implemented passwordless magic-link authentication using NextAuth.js + Resend",
      "Built automated weekly email digests using Inngest's event-driven cron architecture, summarizing all tracked competitor activity",
    ],
    tech: ["Next.js 16", "React 19", "TypeScript", "Prisma", "PostgreSQL (Neon)", "Groq AI", "Inngest"],
    liveUrl: "https://pulse-track-five.vercel.app/",
    color: "from-rose-500 to-orange-400",
    year: "2025",
    featured: true,
    image: "/projects/pulsetrack.png",
  },
  {
    slug: "kalakrit",
    name: "KalaKrit",
    tagline: "AI-Powered Artisan Marketplace Platform",
    description:
      "A full-featured marketplace platform empowering Indian artisans to digitize and scale their craft businesses — including a voice-powered, AI-generated product listing flow.",
    problem:
      "Many artisans lack the time or digital literacy to write product listings, track demand, or price competitively online. KalaKrit lets artisans simply speak a product description, then uses Gemini AI to auto-generate the full listing — description, price, category, and tags.",
    achievements: [
      "Built a voice-to-listing pipeline: Web Speech Recognition captures artisan speech, Gemini AI (gemini-2.5-flash, with gemini-2.5-flash-lite fallback) generates the full structured product listing",
      "Implemented exponential backoff retry logic and a mock-data fallback so the app stays reliable even under API quota limits",
      "Built an analytics dashboard with Recharts showing revenue trends, demand forecasting, and seasonal insights",
      "Designed AI-powered pricing recommendations and a smart 'AI Commerce Guide' offering product and pricing optimization suggestions",
      "Implemented full auth and Row-Level Security data access using Supabase (PostgreSQL)",
    ],
    tech: ["React 18", "TypeScript", "Vite", "Supabase", "Gemini AI", "Tailwind CSS"],
    liveUrl: "https://kalakrit-puce.vercel.app/",
    color: "from-emerald-500 to-teal-400",
    year: "2025",
    featured: true,
    image: "/projects/kalakrit.png",
  },
];

export interface Achievement {
  category: string;
  title: string;
  value: string;
  description: string;
  icon: string;
}

export const achievements: Achievement[] = [
  {
    category: "Competitive Programming",
    title: "LeetCode Problems Solved",
    value: "400+",
    description: "400+ Data Structures & Algorithms problems solved, demonstrating strong algorithmic thinking.",
    icon: "code",
  },
  {
    category: "Competitive Programming",
    title: "Codeforces Rating",
    value: "384",
    description: "Rating built from 40 problems solved across rated contests.",
    icon: "trophy",
  },
  {
    category: "Hackathons",
    title: "Hackathons Participated",
    value: "5+",
    description: "Participated in 5+ hackathons, including 1 first-place win.",
    icon: "award",
  },
  {
    category: "Hackathons",
    title: "Brewing Codes 4.0",
    value: "Top 5",
    description: "Top 5 ranking out of 400+ competing teams.",
    icon: "trophy",
  },
  {
    category: "Hackathons",
    title: "Smart India Hackathon",
    value: "Qualified",
    description: "Qualified at the university level, advancing among 170+ competing teams.",
    icon: "award",
  },
  {
    category: "Open Source",
    title: "GitHub Contributions",
    value: "200+",
    description: "200+ contributions across personal and collaborative repositories.",
    icon: "github",
  },
];
