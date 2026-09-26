import type { ProfileData, SkillGroup, Experience, Project, Education, Language  , ContactInfo, BlogPostPreview, BlogPostData  } from "./types";


const LINKEDIN_URL : string = "https://www.linkedin.com/in/chams-eldinne-boukhelkhal-577228282";
const GITHUB_URL: string = "https://github.com/ChamsEldinne";

export const defaultProfile: ProfileData = {
  name: "Chamseldin Boukhalkhal",
  title: "Software Engineer | Full-Stack Web Developer",
  location: "Medea, Algeria",
  phone: "+213 7 78 08 40 79",
  email: "boukhalkhalchamseldin@gmail.com",
  linkedin: LINKEDIN_URL ,
  github: GITHUB_URL ,
  status: "OPEN TO WORK",
  photoUrl: "me.jpg",
  about:
    "Software Engineer with experience architecting and deploying end-to-end web applications, SaaS platforms, and AI-driven tools. Specialized in Next.js, React, TypeScript, Laravel, and Express.js with a strong foundation in database management, WebSockets, and system scalability. Proven track record of taking products from initial concept to production, optimizing backend API performance, and integrating modern real-time capabilities.",
};

export const defaultSkillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "React Query",
      "Redux",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Monaco Editor",
      "Progressive Web Apps (PWA)",
    ],
  },
  {
    category: "Backend",
    items: [
      "Laravel",
      "PHP",
      "Express.js",
      "Node.js",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Redis",
      "RESTful APIs",
      "WebSockets",
      "WebRTC",
      "Laravel Reverb",
      "GraphQL",
      "LangChain",
      "LangGraph",
      "Data Modeling",
      "System Design",
      "OOP",
      "Design Patterns",
    ],
  },
  {
    category: "DevOps & Testing Tools",
    items: ["Docker", "Git", "Linux", "SSH", "Playwright", "K6"],
  },
  {
    category: "Softe Skills" ,
    items :[ "Problem solving" , "Critical thinking" ,  "Team work" , "Time planing" , "Cominucation" , "Creativity" ,"Adaptability"  ]
  }
];

export const defaultExperiences: Experience[] = [
  {
    id: "exp-3",
    role: "Co-Founder & Lead Full-Stack Engineer",
    company: "Massar",
    location: "Medea, Algeria (Remote)",
    startDate: "Apr 2026",
    endDate: "Current",
    link: "https://massardz.org",
    bullets: [
      "Architected and optimized a scalable Node.js backend API serving three clients: a mobile application, an Admin Dashboard, and a Superadmin Dashboard.",
      "Designed a relational PostgreSQL database schema and implemented Redis caching to improve query performance and reduce API latency.",
      "Led frontend engineering for the Admin and Superadmin dashboards using Next.js and React Query for efficient data fetching, caching, and state management.",
      "Integrated mobile push notifications and real-time event delivery across the application ecosystem.",
      "Configured automated CI/CD pipelines with GitHub Actions for continuous deployment across staging and production environments.",
      "Established centralized infrastructure monitoring, alerting, and log aggregation using Grafana, Prometheus, Loki, and Uptime Kuma to monitor system health and service availability.",
      "Conducted load and stress testing with k6 to evaluate traffic capacity, identify performance bottlenecks, and determine optimal VPS hardware configurations.",
    ],
    tech: [
      "Node.js",
      "JavaScript",
      "PostgreSQL",
      "Redis",
      "Next.js",
      "React Query",
      "Push Notifications",
      "GitHub Actions",
      "CI/CD",
      "Grafana",
      "Prometheus",
      "Loki",
      "Uptime Kuma",
      "k6",
    ],
  },
  {
    id: "exp-1",
    role: "Frontend Developer",
    company: "FennecBooking",
    location: "Algiers, Algeria (Hybrid)",
    startDate: "Dec 2025",
    endDate: "Mar 2026",
    link : "https://play.google.com/store/apps/details?id=dz.fennecbookingApp.android.app",
    bullets: [
      "Converted complex Figma wireframes into responsive, high-performance web user interfaces using Next.js and Tailwind CSS.",
      "Integrated RESTful backend APIs for core agency workflows including user authentication, payment processing, ticket tracking, and administrative dashboards.",
      "Engineered Progressive Web App (PWA) capabilities to enhance platform accessibility across mobile devices.",
    ],
    tech: ["Next.js", "TypeScript", "REST APIs", "Tailwind CSS", "PWA"],
  },
  {
    id: "exp-2",
    role: "Founder & Full-Stack Engineer",
    company: "Examee — Online Assessment Platform",
    startDate: "Jan 2025",
    endDate: "Dec 2025",
    link: "https://exameee.online",
    bullets: [
      "Architected and deployed a full-stack assessment SaaS platform using Next.js, Laravel, and Docker, replacing traditional paper exams for institutions.",
      "Engineered anti-cheating monitoring mechanisms, integrating Safe Exam Browser, full-screen locking, and automated activity tracking.",
      "Implemented real-time bi-directional synchronization and camera monitoring using WebSockets (Laravel Reverb) and WebRTC.",
      "Built an automated grading engine supporting interactive coding challenges, diagram evaluations, open-ended entries, and instant score outputs.",
    ],
    tech: ["Next.js", "React Query", "Laravel", "MySQL", "WebRTC", "Laravel Reverb", "Monaco Editor", "Docker", "FastAPI", "Tailwind CSS"],
  },
];

export const defaultProjects: Project[] = [
  {
    id: "proj-1",
    title: "DBForge — AI Database Design Agent",
    link: "https://dbforge.online",
    bullets: [
      "Built an AI developer tool using LangGraph and LangChain to automatically generate database schemas from natural language prompts.",
      "Implemented dynamic code generation to produce framework-ready backend migrations, models, seeders, and factories.",
      "Created an interactive visual diagram editor for real-time relational schema visualization and editing.",
    ],
    tech: ["Next.js", "React Query", "FastAPI", "LangChain", "LangGraph", "Python"],
    assets: [
      { id: "asset-1", type: "image", src: "dbforge/1.png" },
      { id: "asset-2", type: "image", src: "dbforge/2.mp4" },
    ],
  },
  {
    id: "proj-2",
    title: "Hiking & Volunteering Community Platform",
    period: "2025 – 2026",
    bullets: [
      "Developed a community platform connecting outdoor enthusiasts, travel agencies, and event volunteers as a final-year Bachelor's project.",
      "Engineered event scheduling, trail management features, and real-time notification systems for participant engagement.",
    ],
    tech: ["Next.js", "React Query", "JavaScript", "Tailwind CSS"],
    assets: [
      { id: "1", type: "image", src: "hikeit/1.png" },
      { id: "2", type: "image", src: "hikeit/2.png" },
      { id: "3", type: "image", src: "hikeit/3.png" },
      { id: "4", type: "image", src: "hikeit/4.png" },
    ],
  },
  {
    id: "proj-3",
    title: "Real-Time Chat Application",
    bullets: [
      "Built a full-stack real-time messaging application supporting group chats, friend requests, and permission controls.",
      "Integrated instant message delivery and status updates utilizing Laravel Reverb WebSockets and React Query.",
    ],
    tech: ["Laravel", "Next.js", "SQLite", "WebSockets", "React Query", "Tailwind CSS"],
    assets: [
      { id: "asset-1", type: "image", src: "chat/1.png" },
      { id: "asset-2", type: "image", src: "chat/2.png" },
      { id: "asset-3", type: "image", src: "chat/3.png" },
      { id: "asset-4", type: "image", src: "chat/4.png" },
    ],
  },
  {
    id: "proj-6",
    title: "Portfolio (Terminal tyle)",
    link: "https://portfolio-rho-eight-smmbwv9xn8.vercel.app",
    bullets: [
      "An interactive, terminal-styled personal portfolio Instead of scrolling through sections, visitors navigate the site like a Unix shell — running commands like ll, cd, and cat to explore projects, skills, and info stored in a virtual file system.",
      "Integrated instant message delivery and status updates utilizing Laravel Reverb WebSockets and React Query.",
    ],
    tech: ["React.js","Tailwind CSS" , "TypeScript" , "Vite"],
    assets: [
      { id: "asset-1", type: "image", src: "terminal/1.png" },
      { id: "asset-2", type: "image", src: "terminal/2.png" },
    ],
  },
  {
    id: "proj-4",
    title: "Landing page",
    link: "https://meridian12.netlify.app",
    bullets: [
      "landing page with dark theem 100% responsive modern ui with clean and easy to follow layoute , made with nextjs and taiwlind css",
    ],
    tech: ["Next.js","Tailwind CSS"],
    assets: [
      { id: "asset-1", type: "image", src: "landingpage1/1.png" },
      { id: "asset-2", type: "image", src: "landingpage1/2.png" },
      { id: "asset-3", type: "image", src: "landingpage1/3.png" },
      { id: "asset-4", type: "image", src: "landingpage1/4.png" },
      { id: "asset-5", type: "image", src: "landingpage1/5.png" },
    ],
  },
  {
    id: "proj-6",
    title: "Landing Page For Cleaning Service",
    link: "https://luminaclean.netlify.app",
    bullets: [
      "modern landing page with clean and stuctured layout 100% responsive for cleaning service made and deployed in few houres",
    ],
    tech: ["React.js","Tailwind CSS" , "TypeScript" , "Vite"],
    assets: [
      { id: "asset-1", type: "image", src: "landingpage2/1.png" },
      { id: "asset-2", type: "image", src: "landingpage2/2.png" },
      { id: "asset-3", type: "image", src: "landingpage2/3.png" },
      { id: "asset-4", type: "image", src: "landingpage2/4.png" },
    ],
  },
  
];

export const defaultEducation: Education[] = [
  {
    id: "edu-1",
    school: "Yahia Fares University",
    degree: "Bachelor's Degree in Computer Science",
    period: "2022 – 2025",
    location: "Medea, Algeria",
  },
];

export const defaultLanguages: Language[] = [
  { id: "lang-1", name: "Arabic", level: "Native" },
  { id: "lang-2", name: "English", level: "Full Professional Proficiency" },
  { id: "lang-3", name: "French", level: "Intermediate" },
];

export const defaultContact: ContactInfo = {
  email: "boukhalkhalchamseldin@gmail.com",
  phone: "+213 7 78 08 40 79",
  base: "Medea, Algeria",
  github: GITHUB_URL,
  linkedin:LINKEDIN_URL,
  signatureName: "Chamseldin Boukhalkhal",
  poweredByName: "Chamseldin Boukhalkhal",
  date: "Aug 7, 2026",
};

export const defaultPosts: BlogPostPreview[] = [
  {
    slug: "building-real-time-sync-with-websockets",
    title: "Building Real-Time Sync With WebSockets",
    subtitle: "Polling vs. WebSockets vs. WebRTC when a product needs sub-second updates.",
    date: "Aug 7, 2026",
    readingTime: "6 min read",
    tags: ["WebSockets", "System Design", "Laravel Reverb"],
    excerpt:
      "Notes from building live proctoring on Examee: why WebRTC beat plain WebSockets for camera monitoring, and the reconnection bugs that only showed up in production.",
  },
  {
    slug: "generating-database-schemas-from-natural-language",
    title: "Generating Database Schemas From Natural Language",
    subtitle: "What it actually took to make an LLM output a migration-ready schema.",
    date: "Jun 2, 2026",
    readingTime: "8 min read",
    tags: ["LangGraph", "LangChain", "AI Tooling"],
    excerpt:
      "Freeform prompts to a working schema is easy to demo and hard to ship. This is how DBForge constrains the model's output into something a framework can actually migrate.",
  },
  {
    slug: "shipping-a-pwa-on-a-part-time-schedule",
    title: "Shipping a PWA on a Part-Time Schedule",
    subtitle: "Turning Figma files into an installable, offline-capable web app.",
    date: "Mar 15, 2026",
    readingTime: "4 min read",
    tags: ["Next.js", "PWA", "Tailwind CSS"],
    excerpt:
      "A short list of the PWA gotchas — service worker caching, icon sizing, install prompts — that ate more time than the actual UI work on FennecBooking.",
  },
];

export const samplePost: BlogPostData = {
  slug: "building-real-time-sync-with-websockets",
  title: "Building Real-Time Sync With WebSockets",
  subtitle:
    "Notes on the trade-offs between polling, WebSockets, and WebRTC when a product needs sub-second updates.",
  date: "Aug 7, 2026",
  readingTime: "6 min read",
  author: "Chamseldin Boukhalkhal",
  tags: ["WebSockets", "System Design", "Laravel Reverb"],
  sections: [
    {
      id: "why-real-time",
      heading: "Why Real-Time, Why Now",
      paragraphs: [
        "Most CRUD apps don't need real-time updates — a page refresh is fine. But once a product involves more than one person watching the same state at the same time, polling starts to feel broken: stale counters, missed events, users stepping on each other's changes.",
        "That was the exact problem on Examee: proctors watching a live exam session needed to see camera status and activity flags the moment they changed, not thirty seconds later.",
      ],
    },
    {
      id: "picking-a-transport",
      heading: "Picking a Transport",
      paragraphs: [
        "Polling is simple but wasteful and laggy. Server-Sent Events are a nice middle ground for one-way updates. WebSockets give full duplex communication, which is what you want once clients need to talk back — presence, typing indicators, live cursors.",
        "For camera and screen monitoring specifically, WebRTC was the better fit: it's built for continuous media streams, not just event messages, and it keeps heavy video traffic off the main app server.",
      ],
    },
    {
      id: "what-broke",
      heading: "What Broke in Production",
      paragraphs: [
        "Reconnection handling was the first real bug class: mobile networks drop constantly, and a naive socket client just stays silently disconnected. The fix was an exponential backoff reconnect loop paired with a visible 'reconnecting' state in the UI, so no one silently loses their live feed.",
        "The second issue was ordering: under load, events could arrive out of sequence. Attaching a monotonically increasing sequence number to every event, and discarding anything older than the last applied one, solved most of it without needing a full CRDT.",
      ],
    },
  ],
};

