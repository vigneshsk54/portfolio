import type {
  Project,
  Experience,
  SkillGroup,
  Certification,
  EducationItem,
} from "./types";

export const profile = {
  name: "Vignesh Kumar S",
  initials: "VK",
  title: "Full Stack & AI Engineer",
  location: "Coimbatore, Tamil Nadu, India",
  status: "Open to opportunities",
  summary:
    "Final-year Computer Science Engineering student building production-grade full-stack systems and AI-integrated platforms. Published researcher in phishing detection, with real client work shipped before graduating.",
  longSummary:
    "I'm a final-year CSE student who has spent the last two years shipping software that real people and real companies use — not just coursework. My path started with backend fundamentals and databases, moved through applied AI research, and has landed on full-stack product engineering: React and Next.js on the front end, Node.js and Java on the back end, and a security-first mindset carried over from my published research on phishing detection. I care about systems that are scalable, secure, and genuinely useful, and I'm looking for a Software Engineer, Full Stack, or AI Engineer role where I can keep building at that intersection.",
  email: "vigneshsundaram122004@gmail.com",
  phone: "+91 98434 44553",
  linkedin: "https://linkedin.com/in/vignesh-kumar-sundaram",
  github: "https://github.com/vigneshsk54",
};

export const roles = [
  {
    title: "AI Engineer",
    detail: "LLM pipelines, prompt engineering, applied ML systems",
  },
  {
    title: "Full Stack Developer",
    detail: "React / Next.js front ends backed by Node.js & Java services",
  },
  {
    title: "Backend Engineer",
    detail: "REST APIs, auth systems, relational & NoSQL data design",
  },
  {
    title: "Software Engineer",
    detail: "Production-ready features from spec to deployment",
  },
  {
    title: "Platform Engineer",
    detail: "CI/CD, containerization, cloud-ready infrastructure",
  },
  {
    title: "ML Engineer",
    detail: "Classification systems, model integration, data pipelines",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    eyebrow: "// 01",
    label: "Frontend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5 / CSS3", level: 92 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    eyebrow: "// 02",
    label: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 86 },
      { name: "Java", level: 82 },
      { name: "REST APIs", level: 90 },
      { name: "JWT Auth / RBAC", level: 85 },
    ],
  },
  {
    eyebrow: "// 03",
    label: "Databases",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 84 },
      { name: "PostgreSQL", level: 80 },
      { name: "Firebase", level: 78 },
      { name: "Supabase", level: 76 },
      { name: "Redis", level: 72 },
    ],
  },
  {
    eyebrow: "// 04",
    label: "Cloud & DevOps",
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "Docker", level: 80 },
      { name: "CI/CD", level: 76 },
      { name: "Linux", level: 82 },
      { name: "AWS (Fundamentals)", level: 65 },
    ],
  },
  {
    eyebrow: "// 05",
    label: "AI & Security",
    skills: [
      { name: "OpenAI API", level: 84 },
      { name: "Prompt Engineering", level: 86 },
      { name: "Authentication / Authorization", level: 85 },
      { name: "SSL/TLS", level: 78 },
      { name: "Threat Classification", level: 80 },
    ],
  },
];

export const experience: Experience[] = [
  {
    company: "ILF Attorneys",
    role: "Full Stack Development Intern",
    period: "Dec 2025 — May 2026",
    location: "Hybrid",
    points: [
      "Designed and built a responsive corporate legal website end to end, from component architecture to deployment.",
      "Shipped an attorney profile management system, giving the firm a structured way to present lawyer bios, specializations, and case history.",
      "Improved legal service presentation and case-information accessibility for site visitors, restructuring content flows around how clients actually search for help.",
    ],
    stack: ["React.js", "Node.js", "REST APIs", "Tailwind CSS"],
  },
  {
    company: "NoviTech R&D Pvt Ltd",
    role: "Full Stack Development Intern",
    period: "Aug 2025 — Nov 2025",
    location: "Remote",
    points: [
      "Built and deployed full-stack features into a live production codebase using React.js and Node.js.",
      "Contributed to REST API development, working directly with the existing backend architecture and data models.",
      "Paired with senior engineers on code review cycles, picking up production-grade coding standards early.",
    ],
    stack: ["React.js", "Node.js", "Express.js", "REST APIs"],
  },
  {
    company: "NoviTech R&D Pvt Ltd",
    role: "UI/UX Design Intern",
    period: "Aug 2025 — Nov 2025",
    location: "Remote",
    points: [
      "Designed responsive user interfaces using Tailwind CSS, translating Figma prototypes into production markup.",
      "Ran usability reviews on existing product screens and turned findings into concrete interface improvements.",
      "Completed a 30-day UI/UX MasterClass alongside the internship, formalizing design-systems fundamentals.",
    ],
    stack: ["Figma", "Tailwind CSS", "Design Systems"],
  },
];

export const education: EducationItem[] = [
  {
    institution: "Sri Shakthi Institute of Engineering and Technology",
    degree: "B.E. Computer Science Engineering",
    period: "2023 — 2027",
    cgpa: "8.1 CGPA",
    detail:
      "Coursework spanning data structures & algorithms, database systems, computer networks, and applied AI — paired with hands-on internships and published research alongside the degree.",
  },
];

export const achievements = [
  {
    stat: "1",
    label: "Published Research Paper",
    detail:
      "AI-powered phishing detection, published in the International Journal of Engineering Inventions (2024).",
  },
  {
    stat: "3",
    label: "Internships Completed",
    detail:
      "Across full-stack development, backend engineering, and UI/UX design — before final year.",
  },
  {
    stat: "5+",
    label: "Full-Stack & Backend Projects",
    detail: "Spanning AI, cloud, security, and legal-tech domains.",
  },
  {
    stat: "4",
    label: "Professional Certifications",
    detail: "In JavaScript, Git & GitHub, and DevOps practices.",
  },
];

export const certifications: Certification[] = [
  {
    title: "JavaScript Course With Certification",
    issuer: "Scaler Topics",
    date: "27 Jun 2025",
    detail:
      "Unlocking the Power of JavaScript — 70 video tutorials across 9 modules, plus hands-on coding challenges.",
  },
  {
    title: "Git Training",
    issuer: "SimpliLearn",
    date: "26 May 2026",
    detail: "Core Git workflows: branching, merging, rebasing, and collaborative version control.",
  },
  {
    title: "Getting Started with Docker",
    issuer: "SimpliLearn",
    date: "11 Jun 2026",
    detail: "Containerization fundamentals — images, containers, volumes, and Docker networking.",
  },
  {
    title: "Full Stack Development — 1 Month Internship",
    issuer: "NoviTech R&D Pvt Ltd (ISO 9001:2015)",
    date: "Aug — Sep 2025",
    detail: "Completed one month of applied full-stack development inside a live production team.",
  },
  {
    title: "UI/UX Design — 30 Day MasterClass",
    issuer: "NoviTech R&D Pvt Ltd",
    date: "Aug — Sep 2025",
    detail: "Intensive design-systems and usability MasterClass conducted alongside the internship.",
  },
];

export const projects: Project[] = [
  {
    slug: "meeting-summary-extractor",
    title: "Automated Meeting Summary Extractor",
    tagline: "Whisper transcription + LLM summarization pipeline",
    description:
      "An automated pipeline that transcribes meeting audio with OpenAI's Whisper and uses LLMs to extract structured summaries and action items — cutting post-meeting documentation time by roughly 80% for teams of 10 or more.",
    category: "AI / Automation",
    year: "2025",
    role: "Solo builder — pipeline design, prompt engineering, integration",
    status: "Completed",
    stack: ["Whisper", "OpenAI API", "Node.js", "Prompt Engineering"],
    features: [
      "Accepts recorded meeting audio and converts it into timestamped, speaker-aware transcripts.",
      "Extracts concise summaries, key decisions, and clearly attributed action items via LLM prompting.",
      "Structures output so it can be dropped straight into docs, tickets, or shared with a team.",
      "Designed for corporate and academic meetings involving ten or more participants.",
    ],
    architecture: [
      "Ingestion layer accepts audio files and prepares them for transcription.",
      "Whisper handles speech-to-text, producing a timestamped transcript.",
      "A prompt-engineered LLM layer parses the transcript into summaries and discrete action items.",
      "Output is returned as structured, shareable text rather than a raw transcript dump.",
    ],
    challenges: [
      {
        problem: "Long meetings produced transcripts too large for a single LLM summarization pass.",
        solution:
          "Split transcripts into logical chunks and iteratively merged partial summaries into one coherent output.",
      },
      {
        problem: "Raw LLM output was inconsistent in structure between runs.",
        solution:
          "Refined prompts with explicit formatting instructions so summaries and action items came back in a predictable, parseable shape.",
      },
    ],
    impact: [
      "~80% reduction in manual post-meeting documentation time for target teams.",
      "Removes the bottleneck of someone manually re-listening to recordings to write notes.",
    ],
    links: { github: "https://github.com/vigneshsk54" },
    featured: true,
  },
  {
    slug: "phishing-detection-system",
    title: "AI-Powered Phishing Detection System",
    tagline: "Published research — React.js + Java classification engine",
    description:
      "A full-stack platform that analyzes URL structure, SSL certificates, domain age, and suspicious behavioral patterns to classify websites as Legitimate, Suspicious, or Phishing. The underlying research was published in the International Journal of Engineering Inventions.",
    category: "Security / Research",
    year: "2024",
    role: "Researcher & full-stack developer",
    status: "Published Research",
    stack: ["React.js", "Java", "SSL/TLS", "Threat Classification"],
    features: [
      "Parses and scores URL structure to flag common phishing patterns.",
      "Cross-checks SSL certificate validity and issuance details against known-good signals.",
      "Factors in domain age as a trust signal alongside structural and certificate checks.",
      "Classifies each analyzed site into Legitimate, Suspicious, or Phishing categories.",
    ],
    architecture: [
      "React.js front end for submitting URLs and viewing classification results.",
      "Java backend service that runs the feature-extraction and classification logic.",
      "Independent signal checks — URL structure, SSL/TLS validity, domain age — combined into a single risk classification.",
    ],
    challenges: [
      {
        problem: "No single signal (URL pattern, SSL status, or domain age alone) was reliable enough on its own.",
        solution:
          "Combined multiple independent signals into a layered classification approach, reducing false positives versus any single-signal method.",
      },
      {
        problem: "Needed the findings to hold up beyond just a working demo.",
        solution:
          "Formalized the methodology and results into a paper, which was peer-reviewed and published in the International Journal of Engineering Inventions.",
      },
    ],
    impact: [
      "Peer-reviewed publication validating the detection methodology.",
      "Demonstrates applied security research translated into a working full-stack tool.",
    ],
    links: { github: "https://github.com/vigneshsk54" },
    featured: true,
  },
  {
    slug: "student-cloud-storage",
    title: "Student Cloud Storage Platform",
    tagline: "Quota-based multi-user storage with RBAC",
    description:
      "A multi-user cloud storage platform built around per-user quotas, role-based access control, file versioning, and admin oversight — designed for secure, managed storage in a shared environment.",
    category: "Full Stack / Cloud",
    year: "2025",
    role: "Full-stack developer",
    status: "Completed",
    stack: ["React.js", "Node.js", "MongoDB", "RBAC"],
    features: [
      "Per-user storage quotas to keep usage fair and predictable across a shared platform.",
      "Role-based access control separating standard users from admins.",
      "File versioning so previous states of a file aren't lost on overwrite.",
      "Admin controls for oversight of users, storage usage, and stored files.",
    ],
    architecture: [
      "React front end for uploads, file browsing, and account management.",
      "Node.js/Express API layer enforcing quota checks and role permissions on every request.",
      "MongoDB storing file metadata, version history, and user/role records.",
    ],
    challenges: [
      {
        problem: "Naively overwriting files on re-upload risked destroying prior versions.",
        solution:
          "Implemented a versioning model that preserves prior file states rather than overwriting in place.",
      },
      {
        problem: "Needed to enforce storage limits without letting checks become a performance bottleneck.",
        solution:
          "Built quota enforcement directly into the upload path so limits are checked efficiently before storage is committed.",
      },
    ],
    impact: [
      "Provides a secure, managed storage model suitable for shared or institutional use.",
      "RBAC and versioning together reduce both accidental data loss and unauthorized access.",
    ],
    links: { github: "https://github.com/vigneshsk54" },
  },
  {
    slug: "atm-banking-simulation",
    title: "ATM Banking Simulation System",
    tagline: "Full-featured console banking application",
    description:
      "A console-based banking application covering authentication, account CRUD operations, deposits and withdrawals, mini statements, and complete transaction history tracking.",
    category: "Backend / Systems",
    year: "2024",
    role: "Solo developer",
    status: "Completed",
    stack: ["Java", "CRUD", "Authentication"],
    features: [
      "User authentication before any account operation is permitted.",
      "Full CRUD support for account records.",
      "Deposit and withdrawal flows with balance validation.",
      "Mini statement generation and complete transaction history tracking.",
    ],
    architecture: [
      "Console-driven application flow modeling real ATM interaction states.",
      "Transaction logic layered on top of an authenticated account model.",
      "Persistent transaction history backing statement generation.",
    ],
    challenges: [
      {
        problem: "Needed to prevent invalid states, like withdrawals exceeding an account balance.",
        solution:
          "Added validation at the transaction layer so every operation checks account state before committing changes.",
      },
    ],
    impact: [
      "Solidified fundamentals in authentication flows, CRUD design, and transactional integrity — the same principles carried into later production work.",
    ],
    links: { github: "https://github.com/vigneshsk54" },
  },
  {
  slug: "taskflow-desktop",
  title: "TaskFlow Desktop",
  tagline: "Cross-platform task manager — Electron.js + React.js + SQLite",
  description:
    "A cross-platform desktop application for task and notes management with full offline support, built with Electron.js, React.js, Node.js, and SQLite for secure local data storage.",
  category: "Desktop / Full Stack",
  year: "2026",
  role: "Solo developer — architecture, UI, packaging",
  status: "Completed",
  stack: ["Electron.js", "React.js", "Node.js", "SQLite"],
  features: [
    "Full CRUD operations for tasks and notes, all stored locally via SQLite.",
    "Search and filtering to quickly surface relevant tasks across large lists.",
    "Native desktop notifications to keep reminders visible outside the app window.",
    "Fully functional offline — no network dependency for core task/notes management.",
    "Responsive UI that adapts cleanly across different window sizes.",
  ],
  architecture: [
    "React.js front end rendered inside an Electron shell for native window chrome and OS integration.",
    "Node.js main process handling window management, notifications, and file-system-level access.",
    "SQLite as the local database layer, keeping all task and notes data on-device.",
    "Packaged and distributed as a native installer using Electron Builder.",
  ],
  challenges: [
    {
      problem: "Needed reliable local persistence without depending on any external server or internet connection.",
      solution:
        "Used SQLite as an embedded database, giving the app fast, secure local storage that works fully offline.",
    },
    {
      problem: "Electron apps can easily balloon in size and complexity when packaging for multiple platforms.",
      solution:
        "Used Electron Builder to handle cross-platform packaging, keeping the build and distribution process consistent across OSes.",
    },
  ],
  impact: [
    "Delivers a fully offline-capable productivity tool, with no reliance on cloud storage or a constant connection.",
    "Demonstrates desktop application development end to end — from Electron architecture to a packaged, installable build.",
  ],
  links: { github: "https://github.com/vigneshsk54" },
  featured: true,
},
];

export const nav = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Achievements", href: "/#achievements" },
  { label: "Contact", href: "/#contact" },
];
