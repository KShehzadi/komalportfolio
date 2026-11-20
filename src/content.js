/* =========================================================================
   content.js — the single source of truth for the portfolio.
   -------------------------------------------------------------------------
   Everything the page renders comes from here, so this is the only file you
   need to edit to update the site. Two sections pull live data instead:
     • Writing      → public/blogs.json   (Medium feed, refreshed by fetch.js)
     • Open source  → public/profile.json (GitHub pinned repos, via fetch.js)

   All titles, dates, metrics and groupings below match the résumé, whose
   source is resume/Komal_Shehzadi_Resume_2026.html (printed to
   public/Komal_Shehzadi_Resume_2026.pdf by `npm run resume`). If one
   changes, change the other to match.

   Decisions confirmed by Komal — do not "correct" these:
     • The Principal promotion was 1 December 2025, so the Senior span ends
       there.
     • The UBP Investment Banking engagement (Sep 2026 — present) sits under
       the Principal role alongside SECP; do not give it a separate title.
     • The career starts in August 2020 with two months at NetSol before
       Techlogix (October 2020).
     • Years of experience are not written anywhere — they are counted from
       CAREER_START when the page loads, so they roll over on each anniversary.
     • Project cards carry no date ranges; the ones derived from the résumé's
       role spans were inaccurate. Dates live on the career timeline only.
     • The GenAI design-to-code generator appears in the AI section rather than
       the work grid, so it is described once instead of twice.

   The older template config (src/portfolio.js) is no longer imported.
   ========================================================================= */

/* First role, at NetSol, began August 2020; Techlogix followed in October
   2020. The month is zero-based. Every "N+ years"
   on the page comes from here, worked out in the visitor's browser, so the
   figure rolls over on the anniversary with no edit and no rebuild. */
const CAREER_START = new Date(2020, 7, 1);

function wholeYearsSince(start, now = new Date()) {
  const years = now.getFullYear() - start.getFullYear();
  return now.getMonth() < start.getMonth() ? years - 1 : years;
}

export const experience = `${wholeYearsSince(CAREER_START)}+`;

export const profile = {
  name: "Komal Shehzadi",
  role: "Principal Software Engineer",
  company: "Techlogix",
  location: "Lahore, Pakistan",
  summary: `Principal engineer with ${experience} years shipping data-heavy products where mistakes are expensive — investment banking, securities regulation, oil & gas, semiconductors. I own frontend architecture and, increasingly, the full stack: fast interfaces, test automation that proves each release, and observability that explains production. I use Claude Code as a pair programmer, under my own review.`,
  titles: [
    "Principal Software Engineer",
    "Frontend Architect",
    "Performance Engineer",
    "Observability Practitioner",
    "AI-Enabled Engineer"
  ],
  /* The résumé's "Open to" line, rendered as chips in the contact card. */
  openTo: [
    "Principal / Staff Engineer",
    "Frontend Architect",
    "Lead Frontend or Full-Stack",
    "AI-Enabled Engineering"
  ],
  photo: require("./assets/images/komal.webp"),
  // Served from public/. The phone number has been redacted out of this copy;
  // see README "Résumé" before replacing the file. The 2026 revision is
  // what the Résumé button serves; the older PDF is still in public/ unchanged.
  resumeUrl: "/Komal_Shehzadi_Resume_2026.pdf",
  email: "shehzadikomal303@gmail.com",
  openToWork: true,
  /* The "Open source" section lists the pinned GitHub repositories. They are
     coursework for now, so it stays hidden; set true once stronger ones are
     pinned (and refresh public/profile.json, see README). */
  showOpenSource: false
};

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/kshehzadi",
    icon: "fab fa-github",
    key: "github"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/komal-shehzadi/",
    icon: "fab fa-linkedin-in",
    key: "linkedin"
  },
  {
    name: "Medium",
    url: "https://medium.com/@komalshehzadi",
    icon: "fab fa-medium",
    key: "medium"
  },
  {
    name: "Email",
    url: "mailto:shehzadikomal303@gmail.com",
    icon: "fas fa-envelope",
    key: "email"
  }
];

/* Bento stat tiles under the hero: the two UBP headline figures, tenure and
   the résumé's older headline figures. A `figure` that starts with a digit is
   animated by <CountUp>; any other figure renders as written. app.scss lays
   these out three per row (two below 1000px), so keep this at six. */
export const stats = [
  {
    figure: "18×",
    label: "faster batch calculation",
    detail: "UBP · zero failures"
  },
  {
    figure: "600+",
    label: "automated end-to-end tests",
    detail: "UBP · Playwright"
  },
  {
    figure: experience,
    label: "years in production software",
    detail: "Since Aug 2020"
  },
  {
    figure: "70%",
    label: "faster rendering",
    detail: "Million-pixel datasets · WebGL"
  },
  {
    figure: "100K+",
    label: "units traced in real time",
    detail: "Supply-chain UI"
  },
  {
    figure: "4×",
    label: "Achiever of the Month",
    detail: "Plus an AI Hackathon podium"
  }
];

/* Client and product work, newest first. Enterprise products with no public
   marketing site, so they are described rather than linked. Keep this list at
   eleven entries: the first (the current engagement) spans the full row and
   Work.js pairs the column spans of the other ten, so no row is left with an
   orphan. */
export const work = [
  {
    id: "ubp",
    client: "UBP",
    title: "Investment analytics platform",
    summary:
      "Upgraded an investment-banking platform's Angular frontend to the current release, then shipped feature releases across Angular, .NET, SQL Server and Cosmos DB.",
    contribution: "Full-stack delivery and planning.",
    stack: ["Angular", ".NET", "Cosmos DB", "SQL Server"],
    link: {
      label: "Read the upgrade story",
      url: "https://medium.com/@komalshehzadi/the-build-was-green-the-whole-time-dc6718b73272"
    },
    accent: "pink"
  },
  {
    id: "ubp-recompute",
    client: "UBP",
    title: "Batch calculation, 18× faster",
    summary:
      "Profiled first, then staged and parallelised the core batch job: 18× faster, zero failures, checked against production value by value.",
    contribution: "Profiled, redesigned, validated.",
    stack: [".NET", "Concurrency", "Data validation"],
    link: {
      label: "Read how it was done",
      url: "https://medium.com/@komalshehzadi/how-we-made-a-50-minute-batch-job-finish-before-the-kettle-boils-78b7329aad97"
    },
    accent: "violet"
  },
  {
    id: "ubp-testing",
    client: "UBP",
    title: "Test automation from zero",
    summary:
      "600+ Playwright end-to-end tests, one per documented test case, with screenshot evidence for every QA cycle.",
    contribution: "Built the suite and the process.",
    stack: ["Playwright", "xUnit", "Jasmine"],
    accent: "cyan"
  },
  {
    id: "secp",
    client: "SECP",
    title: "LEAP Portal",
    summary:
      "Frontend architecture for a national securities-regulator portal: a dynamic form engine and shared component library, so new workflows ship as configuration.",
    contribution: "Owned the frontend architecture.",
    stack: ["Angular", "TypeScript", "Design system"],
    accent: "emerald"
  },
  {
    id: "secp-observability",
    client: "SECP",
    title: "Production observability & root cause",
    summary:
      "Grafana Faro telemetry and Loki queries that replay one user's journey, which is how recurring API failures were traced and fixed.",
    contribution: "Designed the telemetry, led the RCA.",
    stack: ["Grafana Faro", "Loki / LogQL"],
    accent: "amber"
  },
  {
    id: "pixel-viz",
    client: "Yieldwerx",
    title: "Pixel data visualization system",
    summary:
      "Million-pixel semiconductor datasets rendered interactively in the browser, ~70% faster than before.",
    contribution: "Architected and built.",
    stack: ["React", "D3.js", "WebGL"],
    accent: "cyan"
  },
  {
    id: "authentix",
    client: "Authentix",
    title: "Track & Trace (Oil & Gas)",
    summary:
      "Live traceability for 100,000+ product units, cutting manual verification by ~60% and report generation time in half.",
    contribution: "Led the frontend build.",
    stack: ["Angular", "TypeScript", "Reporting"],
    accent: "indigo"
  },
  {
    id: "hp-labels",
    client: "HP",
    title: "Label Designer",
    summary:
      "A canvas label designer that cut formatting errors by ~30% and removed manual rework.",
    contribution: "Built the application.",
    stack: ["Angular", "Konva.js", "Canvas"],
    accent: "violet"
  },
  {
    id: "yieldwerx-process",
    client: "Yieldwerx",
    title: "Process improvement",
    summary:
      "Analysed 11 workflows, removed the bottlenecks for a ~25% shorter cycle time, and left reusable templates behind.",
    contribution: "Analysis and optimization.",
    stack: ["Process design", "Templates"],
    accent: "amber"
  },
  {
    id: "scheduling-app",
    client: "Techlogix",
    title: "In-house scheduling app",
    summary:
      "An internal scheduling app from concept to production: one source of truth and ~40% fewer conflicts.",
    contribution: "Designed and shipped.",
    stack: ["React", "Firestore", "Redux Thunk"],
    accent: "cyan"
  },
  {
    id: "campus-cloud",
    client: "Techlogix",
    title: "Campus on Cloud",
    summary:
      "Key modules of a campus management platform (student lifecycle, finance, grading) plus automated admin reporting.",
    contribution: "Full-stack developer.",
    stack: ["Angular", "Kendo UI", ".NET Core"],
    accent: "indigo"
  }
];

/* Career timeline, newest first. `current: true` gets the live badge. */
export const career = [
  {
    role: "Principal Software Engineer",
    company: "Techlogix",
    logo: require("./assets/images/Techlogix-Logo.png"),
    period: "Dec 2025 — Present",
    current: true,
    clients: ["UBP Investment Banking", "SECP LEAP Portal"],
    summary:
      "Full-stack delivery, test automation and planning on UBP; frontend architecture on SECP before that.",
    points: [
      "UBP (Sep 2026 — present): upgraded the Angular frontend to the current release, with visual and form regression checks proving nothing broke.",
      "Made the core batch calculation 18× faster with zero failures, validated against production.",
      "Built test automation from zero: 600+ Playwright end-to-end tests, plus unit suites on frontend and backend.",
      "Plan releases and run QA: requirement checks, written test cases, test cycles and defect triage.",
      "Use Claude Code under my own control: I plan the work, review every change, run the tests and check the app by hand. Nothing merges without code review.",
      "SECP LEAP (Dec 2025 — Sep 2026): owned frontend architecture around a dynamic form engine and shared component library.",
      "Added Grafana Faro telemetry and led the root-cause analysis that traced and fixed recurring API failures.",
      "Built the team's AI workflow: custom subagents wired into Jira and Bitbucket through MCP.",
      "Set engineering standards and mentored junior engineers."
    ]
  },
  {
    role: "Senior Software Engineer",
    company: "Techlogix",
    logo: require("./assets/images/Techlogix-Logo.png"),
    period: "Mar 2023 — Dec 2025",
    clients: ["Yieldwerx", "Authentix", "HP"],
    summary: "Visualization, traceability and analytics products.",
    points: [
      "Built a React + D3.js + WebGL engine for million-pixel datasets: ~70% faster rendering.",
      "Led the Authentix Track & Trace frontend: 100,000+ units tracked live, ~60% less manual checking.",
      "Halved report-generation time for an oil & gas program.",
      "Cut Yieldwerx cycle time by ~25% across 11 workflows.",
      "Shipped a scheduling app (~40% fewer conflicts) and an HP label designer (~30% fewer errors).",
      "Built a GenAI design-to-code generator: 3rd place at the Techlogix AI Hackathon."
    ]
  },
  {
    role: "Software Engineer",
    company: "Techlogix",
    logo: require("./assets/images/Techlogix-Logo.png"),
    period: "Oct 2020 — Mar 2023",
    clients: ["Campus on Cloud"],
    summary: "Full-stack developer on a campus management platform.",
    points: [
      "Owned modules for student lifecycle, finance and grading on Angular, Kendo UI and .NET Core.",
      "Automated manual admin reporting."
    ]
  },
  {
    role: "Software Engineer",
    company: "NetSol Technologies",
    logo: require("./assets/images/Netsol-Logo.png"),
    period: "Aug 2020 — Sep 2020",
    summary: "First role after graduating.",
    points: ["Framework training, database schema design and queries."]
  }
];

/* The résumé's AI-Enabled Engineering section: what the AI work actually is,
   rather than a list of model names. `kind` renders as the card's eyebrow, and
   these reuse the work-card styles so the two grids read as one system. Newest
   practice first. AI.js lays them out two per row; with an odd count the
   first card takes a full row so the grid never ends on an orphan. */
export const aiWork = [
  {
    id: "claude-controlled",
    kind: "How I use AI",
    title: "Claude Code, under my review",
    summary:
      "A pair programmer for analysis, refactoring and tests. I set the plan, review every change, run the build and tests, and check the app by hand. Nothing merges without code review.",
    stack: ["Claude Code", "Code review", "Manual checks"],
    accent: "violet"
  },
  {
    id: "fullstack",
    kind: "Delivery",
    title: "Full-stack delivery",
    summary:
      "Features built end to end on UBP (interface, services and data), each one reviewed and tested before it ships.",
    stack: ["Full-stack", "Code review"],
    accent: "amber"
  },
  {
    id: "ai-planning",
    kind: "Planning",
    title: "AI-assisted planning",
    summary:
      "AI drafts the task breakdown, acceptance criteria and risks; I check them against the spec before estimating.",
    stack: ["Scoping", "Estimation"],
    accent: "indigo"
  },
  {
    id: "subagents",
    kind: "Agentic tooling",
    title: "Purpose-built subagents",
    summary:
      "Custom agents for observability instrumentation and defect-to-PR work, with team conventions as their instructions.",
    stack: ["Custom subagents", "Agentic workflows"],
    accent: "emerald"
  },
  {
    id: "mcp-loop",
    kind: "Tool integration",
    title: "MCP-connected delivery loop",
    summary:
      "Jira and Bitbucket connected through MCP, so triage, write-ups and PR drafts happen in one flow.",
    stack: ["MCP", "Jira", "Bitbucket"],
    accent: "cyan"
  },
  {
    id: "genai-generator",
    kind: "Product",
    title: "GenAI design-to-code generator",
    summary:
      "Turns a design into HTML/CSS in minutes instead of days. 3rd place at the Techlogix AI Hackathon.",
    stack: ["GenAI APIs", "HTML", "CSS"],
    accent: "pink"
  }
];

/* How the work is done, rather than what was built: the practices formalised
   on the UBP engagement. Rendered by sections/Practice.js through the same
   CardGrid as the AI section; keep an even count for two clean rows. Keep
   every summary to a sentence or two: nobody reads more. */
export const practice = [
  {
    id: "e2e-gate",
    kind: "Test automation",
    title: "An end-to-end suite as the release gate",
    summary:
      "600+ Playwright tests, one per documented case, each saving screenshot evidence. Test data is backed up and restored automatically.",
    stack: ["Playwright", "TypeScript"],
    accent: "cyan"
  },
  {
    id: "release-cycles",
    kind: "Release quality",
    title: "Test cycles with exit criteria",
    summary:
      "Written test cases, QA cycles, defect triage and requirement-to-test traceability on every release.",
    stack: ["QA cycles", "Traceability"],
    accent: "amber"
  },
  {
    id: "verification",
    kind: "Verification",
    title: "Prove it before shipping",
    summary:
      "Measure first, then compare old and new: visual diffs, captured form payloads and value-by-value checks against production.",
    stack: ["Visual regression", "Data comparison"],
    accent: "emerald"
  },
  {
    id: "planning",
    kind: "Planning",
    title: "Plan before code",
    summary:
      "Requirements checked against the spec, work broken down and estimated, and short PRs that say how they were tested.",
    stack: ["Release planning", "Code review"],
    accent: "pink"
  }
];

/* Grouped exactly as the résumé's skills columns. Entries without `img`
   appear in the grouped cards but are skipped by the 3D balls, which need a
   texture. */
export const stack = [
  {
    group: "AI & agentic engineering",
    items: [
      {name: "LLM / GenAI APIs", icon: "fas fa-robot"},
      {name: "Agentic workflows", icon: "fas fa-project-diagram"},
      {name: "MCP integrations", icon: "fas fa-plug"},
      {name: "Custom subagents", icon: "fas fa-user-astronaut"},
      {name: "Prompt design", icon: "fas fa-comment-dots"},
      {name: "AI-assisted review", icon: "fas fa-search-plus"},
      {name: "AI-assisted planning", icon: "fas fa-tasks"}
    ]
  },
  {
    group: "Core languages",
    items: [
      {
        name: "TypeScript",
        icon: "fas fa-code",
        img: require("./assets/tech/typescript.png")
      },
      {
        name: "JavaScript ES2022+",
        icon: "fab fa-js",
        img: require("./assets/tech/javascript.png")
      },
      {name: "C#", icon: "fas fa-hashtag"},
      {
        name: "SQL",
        icon: "fas fa-database",
        img: require("./assets/tech/sql.png")
      },
      {name: "HTML5", icon: "fab fa-html5"},
      {name: "CSS3", icon: "fab fa-css3-alt"}
    ]
  },
  {
    group: "Frontend",
    items: [
      {
        name: "Angular",
        icon: "fab fa-angular",
        img: require("./assets/tech/angular.png")
      },
      {
        name: "React",
        icon: "fab fa-react",
        img: require("./assets/tech/react.png")
      },
      {name: "RxJS", icon: "fas fa-stream"},
      {name: "Redux / Thunk", icon: "fas fa-atom"},
      {name: "Design systems", icon: "fas fa-cubes"},
      {
        name: "Tailwind",
        icon: "fas fa-wind",
        img: require("./assets/tech/tailwind.png")
      },
      {
        name: "Material UI",
        icon: "fas fa-layer-group",
        img: require("./assets/tech/materialdesign.png")
      },
      {name: "shadcn/ui", icon: "fas fa-cube"}
    ]
  },
  {
    group: "Visualization & performance",
    items: [
      {name: "WebGL", icon: "fas fa-cubes"},
      {
        name: "D3.js",
        icon: "fas fa-chart-line",
        img: require("./assets/tech/d3.png")
      },
      {name: "Konva.js", icon: "fas fa-draw-polygon"},
      {name: "Canvas rendering", icon: "fas fa-paint-brush"},
      {name: "Lazy loading", icon: "fas fa-hourglass-half"},
      {name: "State optimization", icon: "fas fa-sliders-h"}
    ]
  },
  {
    group: "Testing & observability",
    items: [
      {name: "Playwright", icon: "fas fa-theater-masks"},
      {name: "Jasmine / Karma", icon: "fas fa-vial"},
      {name: "xUnit", icon: "fas fa-check-double"},
      {name: "Visual regression", icon: "fas fa-images"},
      {name: "Grafana Faro", icon: "fas fa-chart-area"},
      {name: "Loki / LogQL", icon: "fas fa-scroll"},
      {name: "Telemetry tiering", icon: "fas fa-layer-group"},
      {name: "Business events", icon: "fas fa-bullseye"}
    ]
  },
  {
    group: "Backend, data & platform",
    items: [
      {
        name: ".NET Core",
        icon: "fas fa-server",
        img: require("./assets/tech/dotnet.png")
      },
      {name: "REST APIs", icon: "fas fa-plug"},
      {name: "SQL Server", icon: "fas fa-database"},
      {name: "Cosmos DB", icon: "fas fa-globe"},
      {
        name: "Firestore",
        icon: "fas fa-fire",
        img: require("./assets/tech/firebase.png")
      },
      {name: "ClickHouse", icon: "fas fa-database"},
      {name: "RabbitMQ", icon: "fas fa-exchange-alt"},
      {name: "Docker", icon: "fab fa-docker"},
      {name: "Kubernetes", icon: "fas fa-dharmachakra"},
      {name: "AWS / Azure / GCP", icon: "fab fa-aws"},
      {name: "Jenkins", icon: "fab fa-jenkins"},
      {name: "Bitbucket Pipelines", icon: "fab fa-bitbucket"}
    ]
  }
];

export const awards = [
  {
    title: "Achiever of the Month — four times",
    issuer: "Techlogix",
    year: "2021, 2022, 2023 & 2025",
    kind: "award",
    note: "Four times, for sustained delivery, collaboration and impact.",
    url: "https://www.linkedin.com/posts/komal-shehzadi_grateful-and-humbled-to-be-recognized-as-activity-7425277142315405312-nRMl?utm_source=share&utm_medium=member_desktop&rcm=ACoAACgQ5uEB0pFEncIg-6eYUVfo2_ceRVBJwTw"
  },
  {
    title: "3rd place — AI Hackathon",
    issuer: "Techlogix",
    year: "2024",
    kind: "award",
    note: "Top three across the engineering organization.",
    url: "https://www.linkedin.com/posts/komal-shehzadi_ai-hackathon2024-teamwork-activity-7223387312632586240-8rjQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAACgQ5uEB0pFEncIg-6eYUVfo2_ceRVBJwTw"
  },
  {
    title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
    issuer: "Coursera · HKUST",
    year: "",
    kind: "certification",
    url: "https://www.coursera.org/account/accomplishments/certificate/F5V63UECGA69"
  },
  {
    title: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
    issuer: "Udemy",
    year: "2022",
    kind: "certification",
    url: "https://www.udemy.com/certificate/UC-c34d9ab6-8682-4746-9908-0013467298c0/"
  }
];

export const education = [
  {
    degree: "MS, Computer Science",
    school: "University of Engineering & Technology (UET), Lahore",
    period: "2020 — 2023",
    logo: require("./assets/images/Uet-logo.png"),
    points: ["GPA 3.6 / 4.0"]
  },
  {
    degree: "BS, Computer Science",
    school: "University of Engineering & Technology (UET), Lahore",
    period: "2016 — 2020",
    logo: require("./assets/images/Uet-logo.png"),
    points: ["GPA 3.6 / 4.0"]
  }
];

/* Fallbacks used only if public/blogs.json cannot be loaded. `fetch.js` keeps
   that file current on every build, so these are just a safety net. */
export const writingFallback = [
  {
    title: "Load Balancers: The Traffic Cop That Saved the Internet",
    url: "https://medium.com/@komalshehzadi/load-balancers-the-traffic-cop-that-saved-the-internet-ec566be63da7",
    description:
      "How load balancers keep large systems standing up, and what actually happens to a request on its way through one."
  },
  {
    title: "Scaling: Vertical vs. Horizontal",
    url: "https://medium.com/@komalshehzadi/scaling-vertical-vs-horizontal-how-systems-learn-to-handle-more-2fae10c97c62",
    description:
      "How systems learn to handle more — the trade-offs between scaling up and scaling out."
  },
  {
    title: "Your 200 OK is lying to you",
    url: "https://medium.com/@komalshehzadi/your-200-ok-is-lying-to-you-aa4a0eca344c",
    description:
      "Why a successful status code is not the same as a successful request, and how that bites you in production."
  }
];

/* Flat list for the 3D tech balls — only the entries that have a texture.
   Textures under 10kB are inlined into the main bundle by CRA, so an `img` is
   only worth adding for a logo that earns the bytes. */
export const techIcons = stack
  .reduce((all, group) => all.concat(group.items), [])
  .filter(item => item.img);

export const nav = [
  {id: "work", label: "Work"},
  {id: "career", label: "Career"},
  {id: "practice", label: "Practice"},
  {id: "ai", label: "AI"},
  {id: "stack", label: "Stack"},
  {id: "awards", label: "Awards"},
  {id: "writing", label: "Writing"},
  {id: "contact", label: "Contact"}
];
